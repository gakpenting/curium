import {
    decodeData,
    DEFAULT_TIMEOUT,
    defaultLease,
    encodeData,
    getSdk,
    newSdkClient
} from "../../helpers/client-helpers/sdk-helpers";
import {useChaiAsPromised} from "testing/lib/globalHelpers";
import {bluzelle, BluzelleSdk, DbSdk} from "../../../src/bz-sdk/bz-sdk";
import {expect} from "chai";


describe('tx.Upsert()', function () {
    this.timeout(DEFAULT_TIMEOUT);

    let sdk: BluzelleSdk;
    let uuid: string;
    let creator: string
    beforeEach(() => {
        useChaiAsPromised();
        return getSdk("phrase lonely draw rubber either tuna harbor route decline burger inquiry aisle scrub south style chronic trouble biology coil defy fashion warfare blanket shuffle")
            .then(newSdk => sdk = newSdk)
            .then(() => uuid = Date.now().toString())
            .then(() => creator = sdk.db.address)
    });
    it('should work with empty value', async () => {
        await sdk.db.tx.Upsert({
            creator: sdk.db.address,
            uuid,
            key: 'key1',
            value: encodeData('value'),
            metadata: new Uint8Array(),
            lease: defaultLease
        })

        expect(await sdk.db.q.Read({
            uuid,
            key: 'key1'
        }).then(resp => decodeData(resp.value))).to.equal('value');

        await sdk.db.tx.Upsert({
            creator: sdk.db.address,
            uuid,
            key: 'key1',
            value: encodeData(''),
            metadata: new Uint8Array(),
            lease: defaultLease
        })

        expect(await sdk.db.q.Read({

            uuid,
            key: 'key1'
        }).then(resp => decodeData(resp.value))).to.equal('');
    })

    // it('should resolve with txhash and height', async () => {
    //     await bz.create('myKey', 'myValue', defaultGasParams());
    //     expect(await bz.upsert('myKey', 'anotherValue', defaultGasParams())).to.have.property('txhash');
    //     expect(await bz.upsert('myKey', 'anotherValue', defaultGasParams())).to.have.property('height');
    //     console.log(await bz.upsert('mykey', 'anotherValue', defaultGasParams()));
    // });
    //
    it('should update a value for a given key', async () => {

        await sdk.db.tx.Upsert({
            creator: sdk.db.address,
            uuid,
            key: 'myKey',
            value: encodeData('firstValue'),
            metadata: new Uint8Array(),
            lease: defaultLease
        })

        expect(await sdk.db.q.Read({

            uuid,
            key: 'myKey'
        }).then(resp => decodeData(resp.value))).to.equal('firstValue');

        await sdk.db.tx.Upsert({
            creator: sdk.db.address,
            uuid,
            key: 'myKey',
            value: encodeData('secondValue'),
            metadata: new Uint8Array(),
            lease: defaultLease
        })

        expect(await sdk.db.q.Read({

            uuid,
            key: 'myKey'
        }).then(resp => decodeData(resp.value))).to.equal('secondValue');
    });

    it('should create a key if it does not exist', async () => {
        await sdk.db.tx.Upsert({
            creator: sdk.db.address,
            uuid,
            key: 'nonExistingKey',
            value: encodeData('aValue'),
            metadata: new Uint8Array(),
            lease: defaultLease
        })

        expect(await sdk.db.q.Read({

            uuid,
            key: 'nonExistingKey'
        }).then(resp => decodeData(resp.value))).to.equal('aValue');
    });

    it('should create a key if it does not exist non async', () => {
        return sdk.db.tx.Upsert({
            creator: sdk.db.address,
            uuid,
            key: 'nonExistingKey',
            value: encodeData('aValue'),
            metadata: new Uint8Array(),
            lease: defaultLease
        })
            .then(() => sdk.db.q.Read({

                uuid,
                key: 'nonExistingKey'
            }))
            .then(resp => expect(decodeData(resp.value)).to.equal('aValue'))
    });

    it('should only allow the original owner to update a key', async function () {
        const otherSdk = await newSdkClient(sdk)

        await sdk.db.tx.Upsert({
            creator: sdk.db.address,
            uuid,
            key: 'myKey',
            value: encodeData('myValue'),
            metadata: new Uint8Array(),
            lease: defaultLease
        });

        await expect(otherSdk.db.tx.Upsert({
            creator: otherSdk.db.address,
            uuid,
            key: 'myKey',
            value: encodeData('imposter'),
            lease: defaultLease,
            metadata: new Uint8Array()
        })).to.be.rejectedWith(/incorrect owner/);

    });
    //
    // it('should work renewing with a shorter lease', async () => {
    //     await bz.upsert('myKey', 'myValue', defaultGasParams());
    //     await bz.upsert('myKey', 'anotherValue', defaultGasParams(), {minutes: 10});
    // });

    it('should throw an error if key is empty', () => {
        return expect(sdk.db.tx.Upsert({
            creator: sdk.db.address,
            uuid,
            key: '',
            value: encodeData('emptyKey'),
            metadata: new Uint8Array(),
            lease: defaultLease
        })).to.be.rejectedWith('Key cannot be empty')
    });

    it('should allow / in the key', () => {
        return sdk.db.tx.Upsert({
            creator: sdk.db.address,
            uuid,
            key: '/',
            value: encodeData('slashKey'),
            metadata: new Uint8Array(),
            lease: defaultLease
        })
            .then(async () => expect(await sdk.db.q.Read({

                uuid,
                key: '/'
            }).then(resp => decodeData(resp.value))).to.equal('slashKey'))
    });

    it('should allow / in the key non async', () => {
        return sdk.db.tx.Upsert({
            creator: sdk.db.address,
            uuid,
            key: '/',
            value: encodeData('slashKey'),
            metadata: new Uint8Array(),
            lease: defaultLease
        })
            .then(() => sdk.db.q.Read({

                uuid,
                key: '/'
            }))
            .then(resp => expect(decodeData(resp.value)).to.equal('slashKey'))
    });

    it('should only allow original owner of uuid to upsert (create)', async () => {
        const otherSdk = await newSdkClient(sdk)

        await sdk.db.tx.Upsert({
            creator: sdk.db.address,
            uuid,
            key: 'myKey',
            value: encodeData('firstValue'),
            metadata: new Uint8Array(),
            lease: defaultLease
        });

        await expect(otherSdk.db.tx.Upsert({
            creator: otherSdk.db.address,
            uuid,
            key: 'newKey',
            value: encodeData('imposterValue'),
            metadata: new Uint8Array(),
            lease: defaultLease
        })).to.be.rejectedWith(/incorrect owner/)


    })

});