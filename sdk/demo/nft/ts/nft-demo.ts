import {bluzelle} from "@bluzelle/sdk-js";
import {readFile} from "fs/promises";
import {localChain} from '../../../ts/test/config'
import {contentType} from 'mime-types'
import {readdir} from 'fs/promises'
import {slice} from 'lodash/fp'
import {passThrough} from 'promise-passthrough'

const NUM_OF_FILES = 5
const MIN_FILE_SIZE = 1
const META = JSON.stringify({something: 'foo'})

console.log('STARTING');

readdir('./nfts')
    .then(names => Promise.all(names.map(readNftFile)))
    .then(files => files.filter(f => f.size >= MIN_FILE_SIZE * 1000))
    .then(slice(0, NUM_OF_FILES))
    .then(files => ({files}))
    .then(ctx => bluzelle({
            mnemonic: localChain.mnemonic,
            url: localChain.endpoint,
            gasPrice: 0.002,
            maxGas: 100000000
        })
            .then(sdk => ({...ctx, sdk}))
    )
    .then(ctx => Promise.all(ctx.files.map(file => {
            console.log('UPLOADING', file.name)
            ctx.sdk.helpers.nft.uploadNft({
                meta: META,
                mime: file.mime
            }, file.data)
                .then(({id}) => ctx.sdk.nft.q.Nft({id}))
                .then(nft => ({...nft, name: file.name}))
                .then(passThrough(console.log))
        }))
    )


interface NftFile {
    name: string
    size: number
    data: Buffer
    mime: string

}

const readNftFile = (name: string): Promise<NftFile> =>
    readFile(`./nfts/${name}`)
        .then(data => ({
            name,
            size: data.length,
            data,
            mime: contentType(name) || ''
        }))





