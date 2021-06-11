import {Argv} from "yargs";


import {getQuerySdk} from "../../../helpers/sdk-helpers";
import {KeyValue} from "@bluzelle/sdk-js/lib/codec/crud/KeyValue";
import {QueryKeyValuesRequest} from "@bluzelle/sdk-js/lib/codec/crud/query";

export const command = 'keyValues <uuid>'
export const desc = 'Read all keys-values in uuid from the database'
export const builder = (yargs: Argv) => {
    return yargs
        .help()
}
export const handler = (argv: QueryKeyValuesRequest) => {
    return getQuerySdk()
        .then(sdk => sdk.db.q.KeyValues({
            uuid: argv.uuid
        }))
        .then(data => data.keyValues.map((KV: KeyValue) => ({...KV, value: new TextDecoder().decode(KV.value)})))
        .then(console.log)
}