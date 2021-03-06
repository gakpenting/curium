import {
    checkBalance,
    createKeys,
    decodeData,
    DEFAULT_TIMEOUT,
    defaultLease, encodeData, getMintedAccount,
    getSdk,
    newSdkClient
} from "../../helpers/client-helpers/sdk-helpers";
import {useChaiAsPromised} from "testing/lib/globalHelpers";
import {expect} from 'chai'
import {bluzelle, BluzelleSdk} from "../../../src/bz-sdk/bz-sdk";
import {Lease} from "../../../src/codec/crud/lease";
import {getPrintableChars} from "testing/lib/helpers/testHelpers";
import {localChain} from "../../config";
import {getSentry, getSwarm, getValidator, SINGLE_SENTRY_SWARM} from "testing/lib/helpers/swarmHelpers";
import {times} from 'lodash'
import {passThrough, passThroughAwait} from "promise-passthrough";
import delay from "delay";

describe('tx.Create()', function () {
    //this.timeout(DEFAULT_TIMEOUT);

    let sdk: BluzelleSdk;
    let uuid: string;
    let creator: string;
    beforeEach(() => {
        useChaiAsPromised();
        return getSdk("phrase lonely draw rubber either tuna harbor route decline burger inquiry aisle scrub south style chronic trouble biology coil defy fashion warfare blanket shuffle")
            .then(newSdk => sdk = newSdk)
            .then(() => uuid = Date.now().toString())
            .then(() => creator = sdk.db.address)
    });

    it('should just do a create', () => {
        let start = Date.now()
        sdk.db.q.KeyValues()
        return sdk.db.tx.Create({
            creator: sdk.db.address,
            uuid,
            key: 'someKey',
            value: new TextEncoder().encode('someValue'),
            lease: {days: 10} as Lease,
            metadata: new Uint8Array()
        })
            .then(x => x)
            .then(() => start = Date.now() - start)
            .then(x => x)
            .then(() => sdk.db.q.Read({
                uuid,
                key: 'someKey'
            }))
            .then(resp => new TextDecoder().decode(resp.value))
            .then(val => expect(val).to.equal('someValue'))

    });

    it('should do multiple creates in sequence', () => {
        return sdk.db.tx.Create({
            creator: sdk.db.address,
            uuid,
            key: 'keyA',
            value: encodeData('someValue'),
            lease: {days: 10} as Lease,
            metadata: new Uint8Array()
        })
            .then(() => console.log('did first create'))
            .then(() => sdk.db.tx.Create({
                creator: sdk.db.address,
                uuid,
                key: 'keyB',
                value: encodeData('someValue'),
                lease: {days: 10} as Lease,
                metadata: new Uint8Array()
            }))
            .then(() => console.log('did second create'))
            .then(() => sdk.db.tx.Create({
                creator: sdk.db.address,
                uuid,
                key: 'keyC',
                value: encodeData('someValue'),
                lease: {days: 10} as Lease,
                metadata: new Uint8Array()
            }))
            .then(() => console.log('did third create'))
            .then(() => sdk.db.q.Read({
                uuid,
                key: 'keyA'
            }))
            .then(resp => decodeData(resp.value))
            .then(val => expect(val).to.equal('someValue'))
            .then(() => sdk.db.q.Read({
                uuid,
                key: 'keyB'
            }))
            .then(resp => decodeData(resp.value))
            .then(val => expect(val).to.equal('someValue'))
            .then(() => sdk.db.q.Read({
                uuid,
                key: 'keyC'
            }))
            .then(resp => decodeData(resp.value))
            .then(val => expect(val).to.equal('someValue'))
    })

    it('should do multiple creates in parallel', () => {

        return Promise.all(times(15).map(idx => sdk.db.tx.Create({
            creator,
            uuid,
            key: `key-${idx}`,
            value: encodeData(`value-${idx}`),
            lease: defaultLease,
            metadata: new Uint8Array()
        })
            .then(() => console.log(`=============created key-${idx}, value-${idx}, in uuid ${uuid}`))))
            .then(() => Promise.all(times(15).map(idx => sdk.db.q.Read({
                uuid,
                key: `key-${idx}`
            })
                .then(passThrough(() => console.log(`//////////// read key ${idx}`)))))
                .then(arrayValues => arrayValues.map(val => decodeData(val.value)))
                .then(decodedValues => expect(decodedValues).to.deep.equal(times(15).map(idx => `value-${idx}`))))
    });

    it('should do multiple creates in withTransaction()', async () => {
        await sdk.db.withTransaction(() => {
            sdk.db.tx.Create({
                creator,
                uuid,
                key: `key-0`,
                value: encodeData(`value-0`),
                lease: defaultLease,
                metadata: new Uint8Array()
            });
            sdk.db.tx.Create({
                creator,
                uuid,
                key: `key-1`,
                value: encodeData(`value-1`),
                lease: defaultLease,
                metadata: new Uint8Array()
            });
            sdk.db.tx.Create({
                creator,
                uuid,
                key: `key-2`,
                value: encodeData(`value-2`),
                lease: defaultLease,
                metadata: new Uint8Array()
            });
        }, {memo: ''});

        //await delay(60000)

        await Promise.all(times(3).map(idx => sdk.db.q.Read({
            uuid,
            key: `key-${idx}`
        })
            .then(passThrough(() => console.log(`//////////// read key ${idx}`)))))
            .then(arrayValues => arrayValues.map(val => decodeData(val.value)))
            .then(decodedValues => expect(decodedValues).to.deep.equal(times(3).map(idx => `value-${idx}`)))
    })

    it('should throw an error if key already exists', () => {
        return sdk.db.tx.Create({
            creator: sdk.db.address,
            uuid,
            key: 'firstkeys',
            value: new TextEncoder().encode('firstvalue'),
            lease: {days: 10} as Lease,
            metadata: new Uint8Array()
        })
            .then(() => expect(sdk.db.tx.Create({
                creator: sdk.db.address,
                uuid,
                key: 'firstkeys',
                value: new TextEncoder().encode('secondvalue'),
                lease: {days: 10} as Lease,
                metadata: new Uint8Array()
            })).to.be.rejectedWith(/key already exists/))
    });

    it('should handle long keys', async () => {
        const longKey = '012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789012'
        await sdk.db.tx.Create({
            creator: sdk.db.address,
            uuid,
            key: longKey,
            value: new TextEncoder().encode('longvalue'),
            lease: {days: 10} as Lease,
            metadata: new Uint8Array()
        })
        await sdk.db.q.Read({
            uuid,
            key: longKey
        })
            .then(resp => resp.value)
            .then(decodeData)
            .then(data => expect(data).to.equal('longvalue'));
    })

    it('should handle values with symbols', async () => {
        const symbols = getPrintableChars();
        await sdk.db.tx.Create({
            creator: sdk.db.address,
            uuid,
            key: 'symbolskeys',
            value: new TextEncoder().encode(symbols),
            lease: {days: 10} as Lease,
            metadata: new Uint8Array()
        })
        await sdk.db.q.Read({
            uuid,
            key: 'symbolskeys'
        })
            .then(resp => resp.value)
            .then(decodeData)
            .then(readResponse => expect(readResponse).to.equal(symbols));
    });

    it('should throw an error if key is empty', () => {
        return expect(sdk.db.tx.Create({
            creator: sdk.db.address,
            uuid,
            key: '',
            value: new TextEncoder().encode('emptyvalue'),
            lease: {days: 10} as Lease,
            metadata: new Uint8Array()
        })).to.be.rejectedWith('Key cannot be empty')

    })

    it('can store json', async () => {
        const json = JSON.stringify({foo: 10, bar: 'baz', t: true, arr: [1, 2, 3]});
        await sdk.db.tx.Create({
            creator: sdk.db.address,
            uuid,
            key: 'jsonskeys',
            value: new TextEncoder().encode(json),
            lease: {days: 10} as Lease,
            metadata: new Uint8Array()
        })

        await sdk.db.q.Read({
            uuid,
            key: 'jsonskeys'
        })
            .then(resp => resp.value)
            .then(decodeData)
            .then(readResponse => expect(readResponse).to.equal(json));

    });

    it('should not allow another user to input another address as creator', async () => {
        const otherSdk = await newSdkClient(sdk);

        await expect(sdk.db.tx.Create({
            creator: otherSdk.db.address,
            uuid,
            key: 'key',
            value: encodeData('value'),
            lease: defaultLease,
            metadata: new Uint8Array()
        })).to.be.rejectedWith(/pubKey does not match signer address/)

    })

    it('should throw an error if incorrect owner tries to create in uuid', async () => {
        const sdk2 = await newSdkClient(sdk)
        await sdk.db.tx.Create({
            creator: sdk.db.address,
            uuid,
            key: 'mykeyss',
            value: new TextEncoder().encode('myvalue'),
            lease: defaultLease,
            metadata: new Uint8Array()
        });

        await expect(sdk2.db.tx.Create({
            creator: sdk2.db.address,
            uuid,
            key: 'yourkeyss',
            value: new TextEncoder().encode('yourvalue'),
            lease: defaultLease,
            metadata: new Uint8Array()
        })).to.be.rejectedWith(/incorrect owner/)

    });

    it("should throw an error if creating in another's uuid", async () => {
        const otherSdk = await newSdkClient(sdk);

        await sdk.db.tx.Create({
            creator: sdk.db.address,
            uuid,
            key: `firstEntryto ${uuid}`,
            value: encodeData('myValue'),
            lease: defaultLease,
            metadata: new Uint8Array()
        })

        await expect(otherSdk.db.tx.Create({
            creator: otherSdk.db.address,
            uuid,
            key: `imposterEntry to ${uuid}`,
            value: encodeData('imposterValue'),
            lease: defaultLease,
            metadata: new Uint8Array()
        })).to.be.rejectedWith(/incorrect owner/)

        await expect(sdk.db.q.Read({
            uuid,
            key: `imposterEntry to ${uuid}`
        })).to.be.rejectedWith(/key not found/)
    });

    it("should throw an error if creating with another address", async () => {
        const otherSdk = await newSdkClient(sdk);

        await expect(sdk.db.tx.Create({
            creator: otherSdk.db.address,
            uuid,
            key: `firstEntryto ${uuid}`,
            value: encodeData('myValue'),
            lease: defaultLease,
            metadata: new Uint8Array()
        })).to.be.rejectedWith(/invalid pubkey/)
    })

    it.skip('should include tx hash and tx height in MsgCreateResponse', () => {
        return sdk.db.tx.Create({
            creator: sdk.db.address,
            uuid,
            key: 'dumbojumbo1',
            value: new TextEncoder().encode('elephant'),
            lease: {} as Lease,
            metadata: new Uint8Array()
        })
    });

    it("should free up uuid space after uuid is emptied, claim ownership", async () => {
        const otherSdk = await newSdkClient(sdk);

        await sdk.db.tx.Create({
            creator: sdk.db.address,
            uuid,
            key: 'firstKey',
            value: encodeData('firstValue'),
            lease: defaultLease,
            metadata: new Uint8Array()
        });

        await sdk.db.tx.Delete({
            creator: sdk.db.address,
            uuid,
            key: 'firstKey'
        });

        expect(await otherSdk.db.tx.Create({
            creator: otherSdk.db.address,
            uuid,
            key: 'I took this uuid',
            value: encodeData('my uuid'),
            lease: defaultLease,
            metadata: new Uint8Array()
        }));

        expect(await otherSdk.db.q.Read({
            uuid,
            key: 'I took this uuid'
        }).then(resp => decodeData(resp.value))).to.equal('my uuid');

        await expect(sdk.db.tx.Create({
            creator: sdk.db.address,
            uuid,
            key: 'newKey',
            value: encodeData('firstValue'),
            lease: defaultLease,
            metadata: new Uint8Array()
        })).to.be.rejectedWith(/incorrect owner/);

    });

    it('should charge the same amount for equally-lengthed data', async () => {

        let firstCreateCost: number = 0;
        let secondCreateCost: number = 0;

        await sdk.bank.q.Balance({
            address: sdk.bank.address,
            denom: 'ubnt'
        }).then(resp => resp.balance ? parseInt(resp.balance.amount) : 0)
            .then(amt => firstCreateCost += amt)
            .then(() => sdk.db.tx.Create({
                creator,
                uuid,
                key: 'key1',
                value: encodeData('value1'),
                lease: defaultLease,
                metadata: new Uint8Array()
            }))
            .then(() => delay(10000))
            .then(() => sdk.bank.q.Balance({
                address: sdk.bank.address,
                denom: 'ubnt'
            }))
            .then(resp => resp.balance ? parseInt(resp.balance.amount) : 0)
            .then(amt => firstCreateCost -= amt)
            .then(cost => expect(cost).to.be.greaterThan(0))

        // await sdk.bank.q.Balance({
        //     address: sdk.bank.address,
        //     denom: 'ubnt'
        // }).then(resp => resp.balance ? parseInt(resp.balance.amount) : 0)
        //     .then(amt => secondCreateCost += amt)
        //     .then(() => sdk.db.tx.Create({
        //         creator,
        //         uuid,
        //         key: 'key2',
        //         value: encodeData('value1'),
        //         lease: defaultLease,
        //         metadata: new Uint8Array()
        //     }))
        //
        //     .then(() => sdk.bank.q.Balance({
        //         address: sdk.bank.address,
        //         denom: 'ubnt'
        //     }))
        //     .then(resp => resp.balance ? parseInt(resp.balance.amount) : 0)
        //     .then(amt => secondCreateCost -= amt)
        //
        // await expect(firstCreateCost).to.be.closeTo(secondCreateCost, 3)
    })

})


