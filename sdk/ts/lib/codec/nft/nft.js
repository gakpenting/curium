"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nft = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "bluzelle.curium.nft";
const baseNft = { creator: "", id: "", hash: "", mime: "", meta: "" };
exports.Nft = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.creator !== "") {
            writer.uint32(10).string(message.creator);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        if (message.hash !== "") {
            writer.uint32(26).string(message.hash);
        }
        if (message.mime !== "") {
            writer.uint32(34).string(message.mime);
        }
        if (message.meta !== "") {
            writer.uint32(42).string(message.meta);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = { ...baseNft };
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.creator = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                case 3:
                    message.hash = reader.string();
                    break;
                case 4:
                    message.mime = reader.string();
                    break;
                case 5:
                    message.meta = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = { ...baseNft };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = String(object.hash);
        }
        else {
            message.hash = "";
        }
        if (object.mime !== undefined && object.mime !== null) {
            message.mime = String(object.mime);
        }
        else {
            message.mime = "";
        }
        if (object.meta !== undefined && object.meta !== null) {
            message.meta = String(object.meta);
        }
        else {
            message.meta = "";
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.creator !== undefined && (obj.creator = message.creator);
        message.id !== undefined && (obj.id = message.id);
        message.hash !== undefined && (obj.hash = message.hash);
        message.mime !== undefined && (obj.mime = message.mime);
        message.meta !== undefined && (obj.meta = message.meta);
        return obj;
    },
    fromPartial(object) {
        const message = { ...baseNft };
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.hash !== undefined && object.hash !== null) {
            message.hash = object.hash;
        }
        else {
            message.hash = "";
        }
        if (object.mime !== undefined && object.mime !== null) {
            message.mime = object.mime;
        }
        else {
            message.mime = "";
        }
        if (object.meta !== undefined && object.meta !== null) {
            message.meta = object.meta;
        }
        else {
            message.meta = "";
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=nft.js.map