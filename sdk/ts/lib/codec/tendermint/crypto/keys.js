"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicKey = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "tendermint.crypto";
const basePublicKey = {};
exports.PublicKey = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.ed25519 !== undefined) {
            writer.uint32(10).bytes(message.ed25519);
        }
        if (message.secp256k1 !== undefined) {
            writer.uint32(18).bytes(message.secp256k1);
        }
        if (message.sr25519 !== undefined) {
            writer.uint32(26).bytes(message.sr25519);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...basePublicKey };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.ed25519 = reader.bytes();
                    break;
                case 2:
                    message.secp256k1 = reader.bytes();
                    break;
                case 3:
                    message.sr25519 = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...basePublicKey };
        if (object.ed25519 !== undefined && object.ed25519 !== null) {
            message.ed25519 = bytesFromBase64(object.ed25519);
        }
        if (object.secp256k1 !== undefined && object.secp256k1 !== null) {
            message.secp256k1 = bytesFromBase64(object.secp256k1);
        }
        if (object.sr25519 !== undefined && object.sr25519 !== null) {
            message.sr25519 = bytesFromBase64(object.sr25519);
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.ed25519 !== undefined &&
            (obj.ed25519 =
                message.ed25519 !== undefined
                    ? base64FromBytes(message.ed25519)
                    : undefined);
        message.secp256k1 !== undefined &&
            (obj.secp256k1 =
                message.secp256k1 !== undefined
                    ? base64FromBytes(message.secp256k1)
                    : undefined);
        message.sr25519 !== undefined &&
            (obj.sr25519 =
                message.sr25519 !== undefined
                    ? base64FromBytes(message.sr25519)
                    : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = { ...basePublicKey };
        if (object.ed25519 !== undefined && object.ed25519 !== null) {
            message.ed25519 = object.ed25519;
        }
        else {
            message.ed25519 = undefined;
        }
        if (object.secp256k1 !== undefined && object.secp256k1 !== null) {
            message.secp256k1 = object.secp256k1;
        }
        else {
            message.secp256k1 = undefined;
        }
        if (object.sr25519 !== undefined && object.sr25519 !== null) {
            message.sr25519 = object.sr25519;
        }
        else {
            message.sr25519 = undefined;
        }
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== "undefined")
        return globalThis;
    if (typeof self !== "undefined")
        return self;
    if (typeof window !== "undefined")
        return window;
    if (typeof global !== "undefined")
        return global;
    throw "Unable to locate global object";
})();
const atob = globalThis.atob ||
    ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr) {
    const bin = [];
    for (let i = 0; i < arr.byteLength; ++i) {
        bin.push(String.fromCharCode(arr[i]));
    }
    return btoa(bin.join(""));
}
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=keys.js.map