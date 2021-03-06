import {expect} from "chai";
import {BluzelleSdk} from "../../../src/bz-sdk/bz-sdk";
import {DEFAULT_TIMEOUT} from "testing/lib/helpers/testHelpers";
import {encodeData, getSdk, defaultLease, newSdkClient} from "../../helpers/client-helpers/sdk-helpers";
import {useChaiAsPromised} from "testing/lib/globalHelpers";


describe('tx.Rename()', function () {
    this.timeout(DEFAULT_TIMEOUT);
    let sdk: BluzelleSdk;
    let uuid: string;
    beforeEach(() => {
        useChaiAsPromised();
        return getSdk("phrase lonely draw rubber either tuna harbor route decline burger inquiry aisle scrub south style chronic trouble biology coil defy fashion warfare blanket shuffle")
            .then(newSdk => sdk = newSdk)
            .then(() => uuid = Date.now().toString())
    });

    it('should not allow a rename of empty key', async () => {

        await sdk.db.tx.Create({
            creator: sdk.db.address,
            uuid,
            key: 'keyBefore',
            value: encodeData('value'),
            lease: defaultLease,
            metadata: new Uint8Array()
        });


        await expect(sdk.db.tx.Rename({
            creator: sdk.db.address,
            uuid,
            key: 'keyBefore',
            newKey: '',
        })).to.be.rejectedWith(/Key cannot be empty/)
    })

    it('should rename a key', async () => {
        await sdk.db.withTransaction(() => {
            sdk.db.tx.Create({
                creator: sdk.db.address,
                uuid,
                key: 'keyBefore',
                value: encodeData('value'),
                lease: defaultLease,
                metadata: new Uint8Array()
            });
            sdk.db.tx.Rename({
                creator: sdk.db.address,
                uuid,
                key: 'keyBefore',
                newKey: 'keyAfter',
            });
        }, {memo: ''});

        await sdk.db.q.Keys({
            uuid
        })
            .then((results) => expect(results.keys).to.contain('keyAfter'));
    });

    it('should only rename if it is the owner', async () => {
        const otherSdk = await newSdkClient(sdk);

        await sdk.db.tx.Create({
            creator: sdk.db.address,
            uuid,
            key: 'keyBefore',
            value: encodeData('value'),
            lease: defaultLease,
            metadata: new Uint8Array()
        });

        await expect(otherSdk.db.tx.Rename({
            creator: otherSdk.db.address,
            uuid,
            key: 'keyBefore',
            newKey: 'imposterKey'
        })).to.be.rejectedWith(/incorrect owner/)

    });

    it('should throw an error if renaming a non-existent key', () => {
        return expect(sdk.db.tx.Rename({
            creator: sdk.db.address,
            uuid,
            key: 'keyBefore',
            newKey: 'keyAfter',
        })).to.be.rejectedWith(/key not found/)
    });

    it('should throw an error if renaming to an already existing key', async () => {

        await sdk.db.tx.Create({
            creator: sdk.db.address,
            uuid,
            key: 'keyBefore',
            value: encodeData('value'),
            lease: defaultLease,
            metadata: new Uint8Array()
        });

        await sdk.db.tx.Create({
            creator: sdk.db.address,
            uuid,
            key: 'takenKey',
            value: encodeData('value'),
            lease: defaultLease,
            metadata: new Uint8Array()
        });

        await expect(sdk.db.tx.Rename({
            creator: sdk.db.address,
            uuid,
            key: 'keyBefore',
            newKey: 'takenKey',
        })).to.be.rejectedWith(/key already exists/)

    });

    it('should only allow owner to rename key', async () => {
        const otherSdk = await newSdkClient(sdk)

        await sdk.db.tx.Create({
            creator: sdk.db.address,
            uuid,
            key: 'myKey',
            value: encodeData('value'),
            lease: defaultLease,
            metadata: new Uint8Array()
        });

        await expect(otherSdk.db.tx.Rename({
            creator: otherSdk.db.address,
            uuid,
            key: 'myKey',
            newKey: 'imposterKey',
        })).to.be.rejectedWith(/incorrect owner/)
    });
});


