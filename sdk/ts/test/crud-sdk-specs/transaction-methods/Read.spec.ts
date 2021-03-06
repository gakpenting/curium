import {
    createKeys,
    decodeData,
    DEFAULT_TIMEOUT,
    defaultLease,
    encodeData,
    getSdk, newSdkClient
} from "../../helpers/client-helpers/sdk-helpers";
import {useChaiAsPromised} from "testing/lib/globalHelpers";
import {BluzelleSdk, DbSdk} from "../../../src/bz-sdk/bz-sdk";
import {expect} from "chai";


describe('tx.Read()', function () {
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
        await sdk.db.tx.Create({
            creator: sdk.db.address,
            uuid,
            key: 'key',
            value: encodeData(''),
            lease: defaultLease,
            metadata: new Uint8Array()
        });
        expect(await sdk.db.tx.Read({
            creator: sdk.db.address,
            uuid,
            key: 'key'
        }).then(resp => decodeData(resp.value))).to.equal('');
    })

    it('should work with empty value non async', () => {
        return sdk.db.tx.Create({
            creator: sdk.db.address,
            uuid,
            key: 'key',
            value: encodeData(''),
            lease: defaultLease,
            metadata: new Uint8Array()
        })
            .then(() => sdk.db.tx.Read({
            creator: sdk.db.address,
            uuid,
            key: 'key'
        }))
            .then(resp => expect(decodeData(resp.value)).to.equal(''))
    })

    it('should retrieve values in order', async () => {
        const results = await Promise.all([
            sdk.db.tx.Create({
                creator: sdk.db.address,
                uuid,
                key: 'key',
                value: encodeData('myValue'),
                lease: defaultLease,
                metadata: new Uint8Array()
            }),
            sdk.db.tx.Read({
                creator: sdk.db.address,
                uuid,
                key: 'key'
            }),

            sdk.db.tx.Update({
                creator: sdk.db.address,
                uuid,
                key: 'key',
                value: encodeData('newValue'),
                lease: defaultLease,
                metadata: new Uint8Array()
            }),

            sdk.db.tx.Read({
                creator: sdk.db.address,
                uuid,
                key: 'key'
            })
        ]);
        await expect(decodeData(results?.[1]?.value)).to.equal('myValue');
        await expect(decodeData(results?.[3]?.value)).to.equal('newValue');
    })


    it('should retrieve a value from the store', async () => {
        await sdk.db.tx.Create({
            creator: sdk.db.address,
            uuid,
            key: 'key',
            value: encodeData('myValue'),
            lease: defaultLease,
            metadata: new Uint8Array()
        });
        expect(await sdk.db.tx.Read({
            creator: sdk.db.address,
            uuid,
            key: 'key'
        }).then(resp => decodeData(resp.value))).to.equal('myValue');
    });

    it('should retrieve a value from another uuid', async () => {
        const otherSdk = await newSdkClient(sdk)
        const otherUuid = (Date.now() + 1).toString()
        await sdk.db.tx.Create({
            creator: sdk.db.address,
            uuid,
            key: 'key',
            value: encodeData('myValue'),
            lease: defaultLease,
            metadata: new Uint8Array()
        });
        await otherSdk.db.tx.Create({
            creator: otherSdk.db.address,
            uuid: otherUuid,
            key: 'otherKey',
            value: encodeData('myOtherValue'),
            lease: defaultLease,
            metadata: new Uint8Array()
        });
        expect(await sdk.db.tx.Read({
            creator: sdk.db.address,
            uuid: otherUuid,
            key: 'otherKey'
        }).then(resp => decodeData(resp.value))).to.equal('myOtherValue');
    });

    it('should throw an error if key does not exist', () => {
        return expect(sdk.db.tx.Read({
            creator: sdk.db.address,
            uuid,
            key: 'key'
        })).to.be.rejectedWith(/key not found/)
    });

    it('should handle parallel reads', async () => {
        const {keys, values} = await createKeys(sdk.db, 5, uuid);
        expect(await Promise.all(keys
            .map(key => sdk.db.q.Read({uuid, key})))
            .then(responses => responses
                .map(resp => decodeData(resp.value)))).to.deep.equal(values);
    });

});