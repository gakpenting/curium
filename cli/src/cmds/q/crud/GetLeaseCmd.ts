import {Argv} from "yargs";
import {getQuerySdk} from "../../../helpers/sdk-helpers";
import {QueryGetLeaseRequest} from "@bluzelle/sdk-js/lib/codec/crud/query";

export const command = 'getLease <uuid> <key>'
export const desc = 'Query remaining lease time on given key in specified uuid'
export const builder = (yargs: Argv) => {
    return yargs
        .help()
}
export const handler = (argv: QueryGetLeaseRequest) => {
    return getQuerySdk()
        .then(sdk => sdk.db.q.GetLease({
            uuid: argv.uuid,
            key: argv.key
        }))
        .then(console.log)
}