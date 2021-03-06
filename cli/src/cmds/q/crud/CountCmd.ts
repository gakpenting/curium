import {Argv} from "yargs";

import {getQuerySdk} from "../../../helpers/sdk-helpers";
import {QueryCountRequest} from "@bluzelle/sdk-js/lib/codec/crud/query";

export const command = 'count <uuid>'
export const desc = 'Query total number of key-values in given uuid'
export const builder = (yargs: Argv) => {
    return yargs
        .positional('uuid', {
            description: 'distinct database identifier',
            type: 'string'
        })
        .help()
}
export const handler = (argv: QueryCountRequest & {node: string}) => {
    return getQuerySdk(argv.node)
        .then(sdk => sdk.db.q.Count({
            uuid: argv.uuid
        }))
        .then(data => data.count)
        .then(console.log)

}