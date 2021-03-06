import {expect} from "chai";
import delay from "delay";
import {BluzelleSdk, DbSdk} from "../../../src/bz-sdk/bz-sdk";
import {useChaiAsPromised} from "testing/lib/globalHelpers";
import {decodeData, encodeData, getSdk} from "../../helpers/client-helpers/sdk-helpers";
import {Lease} from "../../../src/codec/crud/lease";

describe('leasing', function () {

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

    // ['days', 'hours', 'minutes', 'seconds'].forEach(async (unit) => {
    //     it(`should allow lease time in ${unit}`, async () => {
    //         await bz.create('myKey', 'myValue', defaultGasParams(), {[unit]: 20})
    //         expect(await bz.read('myKey')).to.equal('myValue');
    //     })
    // });

    it('should expire key-value beyond lease time', async () => {
        await sdk.db.tx.Create({
            creator,
            uuid,
            key: 'leaseKey',
            value: encodeData('myValue'),
            lease:  {minutes: 1, hours: 0, days: 0, seconds: 0, years: 0},
            metadata: new Uint8Array()
        });
        expect(await sdk.db.q.Read({
            key: 'leaseKey',
            uuid
        }).then(resp => decodeData(resp.value))).to.equal('myValue')

        await delay(60000);

        await expect(sdk.db.q.Read({
            key: 'leaseKey',
            uuid
        })).to.be.rejectedWith(/key not found/)

    });

    it('should allow still read within lease time', async () => {
        await sdk.db.tx.Create({
            creator,
            uuid,
            key: 'leaseKey2',
            value: encodeData('myValue'),
            lease:  {minutes: 1, hours: 1, days: 0, seconds: 0, years: 0},
            metadata: new Uint8Array()
        });
        expect(await sdk.db.q.Read({
            key: 'leaseKey2',
            uuid
        }).then(resp => decodeData(resp.value))).to.equal('myValue')

        await delay(60000);

        expect(await sdk.db.q.Read({
            key: 'leaseKey2',
            uuid,
        }).then(resp => decodeData(resp.value))).to.equal('myValue')

    });

    it('getLease()', async () => {
        await sdk.db.tx.Create({
            creator,
            uuid,
            key: 'leaseKey12',
            value: encodeData('myValue'),
            lease:  {minutes: 1, hours: 2, days: 0, seconds: 0, years: 0},
            metadata: new Uint8Array()
        });
        expect(await sdk.db.q.Read({
            key: 'leaseKey12',
            uuid
        }).then(resp => decodeData(resp.value))).to.equal('myValue')

        expect(await sdk.db.q.GetLease({
            key: 'leaseKey12',
            uuid
        }).then(resp => resp.seconds)).to.be.closeTo(7260, 20)
    });

});

