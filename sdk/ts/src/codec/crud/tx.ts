/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Lease } from "../crud/lease";
import { KeyValueLease } from "../crud/KeyValue";

export const protobufPackage = "bluzelle.curium.crud";

export interface MsgRenewLeasesAll {
  creator: string;
  uuid: string;
  lease?: Lease;
}

export interface MsgRenewLeasesAllResponse {}

export interface MsgRenewLease {
  creator: string;
  uuid: string;
  key: string;
  lease?: Lease;
}

export interface MsgRenewLeaseResponse {}

export interface MsgRename {
  creator: string;
  uuid: string;
  key: string;
  newKey: string;
}

export interface MsgRenameResponse {}

export interface MsgMultiUpdate {
  creator: string;
  uuid: string;
  keyValues: KeyValueLease[];
}

export interface MsgMultiUpdateResponse {}

export interface MsgDeleteAll {
  creator: string;
  uuid: string;
}

export interface MsgDeleteAllResponse {}

export interface MsgUpsert {
  creator: string;
  uuid: string;
  key: string;
  value: Uint8Array;
  lease?: Lease;
  metadata: Uint8Array;
}

export interface MsgUpsertResponse {}

export interface MsgCreate {
  creator: string;
  uuid: string;
  key: string;
  value: Uint8Array;
  lease?: Lease;
  metadata: Uint8Array;
}

export interface MsgCreateResponse {}

export interface MsgUpdate {
  creator: string;
  uuid: string;
  key: string;
  value: Uint8Array;
  lease?: Lease;
  metadata: Uint8Array;
}

export interface MsgUpdateResponse {}

export interface MsgDelete {
  creator: string;
  uuid: string;
  key: string;
}

export interface MsgDeleteResponse {}

const baseMsgRenewLeasesAll: object = { creator: "", uuid: "" };

export const MsgRenewLeasesAll = {
  encode(
    message: MsgRenewLeasesAll,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.uuid !== "") {
      writer.uint32(18).string(message.uuid);
    }
    if (message.lease !== undefined) {
      Lease.encode(message.lease, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRenewLeasesAll {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRenewLeasesAll } as MsgRenewLeasesAll;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.uuid = reader.string();
          break;
        case 3:
          message.lease = Lease.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRenewLeasesAll {
    const message = { ...baseMsgRenewLeasesAll } as MsgRenewLeasesAll;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = String(object.uuid);
    } else {
      message.uuid = "";
    }
    if (object.lease !== undefined && object.lease !== null) {
      message.lease = Lease.fromJSON(object.lease);
    } else {
      message.lease = undefined;
    }
    return message;
  },

  toJSON(message: MsgRenewLeasesAll): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.lease !== undefined &&
      (obj.lease = message.lease ? Lease.toJSON(message.lease) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRenewLeasesAll>): MsgRenewLeasesAll {
    const message = { ...baseMsgRenewLeasesAll } as MsgRenewLeasesAll;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = object.uuid;
    } else {
      message.uuid = "";
    }
    if (object.lease !== undefined && object.lease !== null) {
      message.lease = Lease.fromPartial(object.lease);
    } else {
      message.lease = undefined;
    }
    return message;
  },
};

const baseMsgRenewLeasesAllResponse: object = {};

export const MsgRenewLeasesAllResponse = {
  encode(
    _: MsgRenewLeasesAllResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRenewLeasesAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRenewLeasesAllResponse,
    } as MsgRenewLeasesAllResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRenewLeasesAllResponse {
    const message = {
      ...baseMsgRenewLeasesAllResponse,
    } as MsgRenewLeasesAllResponse;
    return message;
  },

  toJSON(_: MsgRenewLeasesAllResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRenewLeasesAllResponse>
  ): MsgRenewLeasesAllResponse {
    const message = {
      ...baseMsgRenewLeasesAllResponse,
    } as MsgRenewLeasesAllResponse;
    return message;
  },
};

const baseMsgRenewLease: object = { creator: "", uuid: "", key: "" };

export const MsgRenewLease = {
  encode(
    message: MsgRenewLease,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.uuid !== "") {
      writer.uint32(18).string(message.uuid);
    }
    if (message.key !== "") {
      writer.uint32(26).string(message.key);
    }
    if (message.lease !== undefined) {
      Lease.encode(message.lease, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRenewLease {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRenewLease } as MsgRenewLease;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.uuid = reader.string();
          break;
        case 3:
          message.key = reader.string();
          break;
        case 4:
          message.lease = Lease.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRenewLease {
    const message = { ...baseMsgRenewLease } as MsgRenewLease;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = String(object.uuid);
    } else {
      message.uuid = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.lease !== undefined && object.lease !== null) {
      message.lease = Lease.fromJSON(object.lease);
    } else {
      message.lease = undefined;
    }
    return message;
  },

  toJSON(message: MsgRenewLease): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.key !== undefined && (obj.key = message.key);
    message.lease !== undefined &&
      (obj.lease = message.lease ? Lease.toJSON(message.lease) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRenewLease>): MsgRenewLease {
    const message = { ...baseMsgRenewLease } as MsgRenewLease;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = object.uuid;
    } else {
      message.uuid = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.lease !== undefined && object.lease !== null) {
      message.lease = Lease.fromPartial(object.lease);
    } else {
      message.lease = undefined;
    }
    return message;
  },
};

const baseMsgRenewLeaseResponse: object = {};

export const MsgRenewLeaseResponse = {
  encode(
    _: MsgRenewLeaseResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgRenewLeaseResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRenewLeaseResponse } as MsgRenewLeaseResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRenewLeaseResponse {
    const message = { ...baseMsgRenewLeaseResponse } as MsgRenewLeaseResponse;
    return message;
  },

  toJSON(_: MsgRenewLeaseResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRenewLeaseResponse>): MsgRenewLeaseResponse {
    const message = { ...baseMsgRenewLeaseResponse } as MsgRenewLeaseResponse;
    return message;
  },
};

const baseMsgRename: object = { creator: "", uuid: "", key: "", newKey: "" };

export const MsgRename = {
  encode(
    message: MsgRename,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.uuid !== "") {
      writer.uint32(18).string(message.uuid);
    }
    if (message.key !== "") {
      writer.uint32(26).string(message.key);
    }
    if (message.newKey !== "") {
      writer.uint32(34).string(message.newKey);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRename {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRename } as MsgRename;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.uuid = reader.string();
          break;
        case 3:
          message.key = reader.string();
          break;
        case 4:
          message.newKey = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRename {
    const message = { ...baseMsgRename } as MsgRename;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = String(object.uuid);
    } else {
      message.uuid = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.newKey !== undefined && object.newKey !== null) {
      message.newKey = String(object.newKey);
    } else {
      message.newKey = "";
    }
    return message;
  },

  toJSON(message: MsgRename): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.key !== undefined && (obj.key = message.key);
    message.newKey !== undefined && (obj.newKey = message.newKey);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRename>): MsgRename {
    const message = { ...baseMsgRename } as MsgRename;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = object.uuid;
    } else {
      message.uuid = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.newKey !== undefined && object.newKey !== null) {
      message.newKey = object.newKey;
    } else {
      message.newKey = "";
    }
    return message;
  },
};

const baseMsgRenameResponse: object = {};

export const MsgRenameResponse = {
  encode(
    _: MsgRenameResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRenameResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRenameResponse } as MsgRenameResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgRenameResponse {
    const message = { ...baseMsgRenameResponse } as MsgRenameResponse;
    return message;
  },

  toJSON(_: MsgRenameResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgRenameResponse>): MsgRenameResponse {
    const message = { ...baseMsgRenameResponse } as MsgRenameResponse;
    return message;
  },
};

const baseMsgMultiUpdate: object = { creator: "", uuid: "" };

export const MsgMultiUpdate = {
  encode(
    message: MsgMultiUpdate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.uuid !== "") {
      writer.uint32(18).string(message.uuid);
    }
    for (const v of message.keyValues) {
      KeyValueLease.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMultiUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMultiUpdate } as MsgMultiUpdate;
    message.keyValues = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.uuid = reader.string();
          break;
        case 3:
          message.keyValues.push(KeyValueLease.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMultiUpdate {
    const message = { ...baseMsgMultiUpdate } as MsgMultiUpdate;
    message.keyValues = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = String(object.uuid);
    } else {
      message.uuid = "";
    }
    if (object.keyValues !== undefined && object.keyValues !== null) {
      for (const e of object.keyValues) {
        message.keyValues.push(KeyValueLease.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: MsgMultiUpdate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    if (message.keyValues) {
      obj.keyValues = message.keyValues.map((e) =>
        e ? KeyValueLease.toJSON(e) : undefined
      );
    } else {
      obj.keyValues = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMultiUpdate>): MsgMultiUpdate {
    const message = { ...baseMsgMultiUpdate } as MsgMultiUpdate;
    message.keyValues = [];
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = object.uuid;
    } else {
      message.uuid = "";
    }
    if (object.keyValues !== undefined && object.keyValues !== null) {
      for (const e of object.keyValues) {
        message.keyValues.push(KeyValueLease.fromPartial(e));
      }
    }
    return message;
  },
};

const baseMsgMultiUpdateResponse: object = {};

export const MsgMultiUpdateResponse = {
  encode(
    _: MsgMultiUpdateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgMultiUpdateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMultiUpdateResponse } as MsgMultiUpdateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgMultiUpdateResponse {
    const message = { ...baseMsgMultiUpdateResponse } as MsgMultiUpdateResponse;
    return message;
  },

  toJSON(_: MsgMultiUpdateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgMultiUpdateResponse>): MsgMultiUpdateResponse {
    const message = { ...baseMsgMultiUpdateResponse } as MsgMultiUpdateResponse;
    return message;
  },
};

const baseMsgDeleteAll: object = { creator: "", uuid: "" };

export const MsgDeleteAll = {
  encode(
    message: MsgDeleteAll,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.uuid !== "") {
      writer.uint32(18).string(message.uuid);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteAll {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteAll } as MsgDeleteAll;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.uuid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDeleteAll {
    const message = { ...baseMsgDeleteAll } as MsgDeleteAll;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = String(object.uuid);
    } else {
      message.uuid = "";
    }
    return message;
  },

  toJSON(message: MsgDeleteAll): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeleteAll>): MsgDeleteAll {
    const message = { ...baseMsgDeleteAll } as MsgDeleteAll;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = object.uuid;
    } else {
      message.uuid = "";
    }
    return message;
  },
};

const baseMsgDeleteAllResponse: object = {};

export const MsgDeleteAllResponse = {
  encode(
    _: MsgDeleteAllResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgDeleteAllResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteAllResponse } as MsgDeleteAllResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteAllResponse {
    const message = { ...baseMsgDeleteAllResponse } as MsgDeleteAllResponse;
    return message;
  },

  toJSON(_: MsgDeleteAllResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteAllResponse>): MsgDeleteAllResponse {
    const message = { ...baseMsgDeleteAllResponse } as MsgDeleteAllResponse;
    return message;
  },
};

const baseMsgUpsert: object = { creator: "", uuid: "", key: "" };

export const MsgUpsert = {
  encode(
    message: MsgUpsert,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.uuid !== "") {
      writer.uint32(18).string(message.uuid);
    }
    if (message.key !== "") {
      writer.uint32(26).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(34).bytes(message.value);
    }
    if (message.lease !== undefined) {
      Lease.encode(message.lease, writer.uint32(42).fork()).ldelim();
    }
    if (message.metadata.length !== 0) {
      writer.uint32(50).bytes(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpsert {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpsert } as MsgUpsert;
    message.value = new Uint8Array();
    message.metadata = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.uuid = reader.string();
          break;
        case 3:
          message.key = reader.string();
          break;
        case 4:
          message.value = reader.bytes();
          break;
        case 5:
          message.lease = Lease.decode(reader, reader.uint32());
          break;
        case 6:
          message.metadata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpsert {
    const message = { ...baseMsgUpsert } as MsgUpsert;
    message.value = new Uint8Array();
    message.metadata = new Uint8Array();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = String(object.uuid);
    } else {
      message.uuid = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    if (object.lease !== undefined && object.lease !== null) {
      message.lease = Lease.fromJSON(object.lease);
    } else {
      message.lease = undefined;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    return message;
  },

  toJSON(message: MsgUpsert): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    message.lease !== undefined &&
      (obj.lease = message.lease ? Lease.toJSON(message.lease) : undefined);
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(
        message.metadata !== undefined ? message.metadata : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpsert>): MsgUpsert {
    const message = { ...baseMsgUpsert } as MsgUpsert;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = object.uuid;
    } else {
      message.uuid = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = new Uint8Array();
    }
    if (object.lease !== undefined && object.lease !== null) {
      message.lease = Lease.fromPartial(object.lease);
    } else {
      message.lease = undefined;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = new Uint8Array();
    }
    return message;
  },
};

const baseMsgUpsertResponse: object = {};

export const MsgUpsertResponse = {
  encode(
    _: MsgUpsertResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpsertResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpsertResponse } as MsgUpsertResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpsertResponse {
    const message = { ...baseMsgUpsertResponse } as MsgUpsertResponse;
    return message;
  },

  toJSON(_: MsgUpsertResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpsertResponse>): MsgUpsertResponse {
    const message = { ...baseMsgUpsertResponse } as MsgUpsertResponse;
    return message;
  },
};

const baseMsgCreate: object = { creator: "", uuid: "", key: "" };

export const MsgCreate = {
  encode(
    message: MsgCreate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.uuid !== "") {
      writer.uint32(18).string(message.uuid);
    }
    if (message.key !== "") {
      writer.uint32(26).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(34).bytes(message.value);
    }
    if (message.lease !== undefined) {
      Lease.encode(message.lease, writer.uint32(42).fork()).ldelim();
    }
    if (message.metadata.length !== 0) {
      writer.uint32(50).bytes(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreate } as MsgCreate;
    message.value = new Uint8Array();
    message.metadata = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.uuid = reader.string();
          break;
        case 3:
          message.key = reader.string();
          break;
        case 4:
          message.value = reader.bytes();
          break;
        case 5:
          message.lease = Lease.decode(reader, reader.uint32());
          break;
        case 6:
          message.metadata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreate {
    const message = { ...baseMsgCreate } as MsgCreate;
    message.value = new Uint8Array();
    message.metadata = new Uint8Array();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = String(object.uuid);
    } else {
      message.uuid = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    if (object.lease !== undefined && object.lease !== null) {
      message.lease = Lease.fromJSON(object.lease);
    } else {
      message.lease = undefined;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    return message;
  },

  toJSON(message: MsgCreate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    message.lease !== undefined &&
      (obj.lease = message.lease ? Lease.toJSON(message.lease) : undefined);
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(
        message.metadata !== undefined ? message.metadata : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreate>): MsgCreate {
    const message = { ...baseMsgCreate } as MsgCreate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = object.uuid;
    } else {
      message.uuid = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = new Uint8Array();
    }
    if (object.lease !== undefined && object.lease !== null) {
      message.lease = Lease.fromPartial(object.lease);
    } else {
      message.lease = undefined;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = new Uint8Array();
    }
    return message;
  },
};

const baseMsgCreateResponse: object = {};

export const MsgCreateResponse = {
  encode(
    _: MsgCreateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateResponse } as MsgCreateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgCreateResponse {
    const message = { ...baseMsgCreateResponse } as MsgCreateResponse;
    return message;
  },

  toJSON(_: MsgCreateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateResponse>): MsgCreateResponse {
    const message = { ...baseMsgCreateResponse } as MsgCreateResponse;
    return message;
  },
};

const baseMsgUpdate: object = { creator: "", uuid: "", key: "" };

export const MsgUpdate = {
  encode(
    message: MsgUpdate,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.uuid !== "") {
      writer.uint32(18).string(message.uuid);
    }
    if (message.key !== "") {
      writer.uint32(26).string(message.key);
    }
    if (message.value.length !== 0) {
      writer.uint32(34).bytes(message.value);
    }
    if (message.lease !== undefined) {
      Lease.encode(message.lease, writer.uint32(42).fork()).ldelim();
    }
    if (message.metadata.length !== 0) {
      writer.uint32(50).bytes(message.metadata);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdate {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdate } as MsgUpdate;
    message.value = new Uint8Array();
    message.metadata = new Uint8Array();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.uuid = reader.string();
          break;
        case 3:
          message.key = reader.string();
          break;
        case 4:
          message.value = reader.bytes();
          break;
        case 5:
          message.lease = Lease.decode(reader, reader.uint32());
          break;
        case 6:
          message.metadata = reader.bytes();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdate {
    const message = { ...baseMsgUpdate } as MsgUpdate;
    message.value = new Uint8Array();
    message.metadata = new Uint8Array();
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = String(object.uuid);
    } else {
      message.uuid = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = bytesFromBase64(object.value);
    }
    if (object.lease !== undefined && object.lease !== null) {
      message.lease = Lease.fromJSON(object.lease);
    } else {
      message.lease = undefined;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = bytesFromBase64(object.metadata);
    }
    return message;
  },

  toJSON(message: MsgUpdate): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.key !== undefined && (obj.key = message.key);
    message.value !== undefined &&
      (obj.value = base64FromBytes(
        message.value !== undefined ? message.value : new Uint8Array()
      ));
    message.lease !== undefined &&
      (obj.lease = message.lease ? Lease.toJSON(message.lease) : undefined);
    message.metadata !== undefined &&
      (obj.metadata = base64FromBytes(
        message.metadata !== undefined ? message.metadata : new Uint8Array()
      ));
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdate>): MsgUpdate {
    const message = { ...baseMsgUpdate } as MsgUpdate;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = object.uuid;
    } else {
      message.uuid = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value;
    } else {
      message.value = new Uint8Array();
    }
    if (object.lease !== undefined && object.lease !== null) {
      message.lease = Lease.fromPartial(object.lease);
    } else {
      message.lease = undefined;
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = object.metadata;
    } else {
      message.metadata = new Uint8Array();
    }
    return message;
  },
};

const baseMsgUpdateResponse: object = {};

export const MsgUpdateResponse = {
  encode(
    _: MsgUpdateResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateResponse } as MsgUpdateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgUpdateResponse {
    const message = { ...baseMsgUpdateResponse } as MsgUpdateResponse;
    return message;
  },

  toJSON(_: MsgUpdateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateResponse>): MsgUpdateResponse {
    const message = { ...baseMsgUpdateResponse } as MsgUpdateResponse;
    return message;
  },
};

const baseMsgDelete: object = { creator: "", uuid: "", key: "" };

export const MsgDelete = {
  encode(
    message: MsgDelete,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.uuid !== "") {
      writer.uint32(18).string(message.uuid);
    }
    if (message.key !== "") {
      writer.uint32(26).string(message.key);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDelete {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDelete } as MsgDelete;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.uuid = reader.string();
          break;
        case 3:
          message.key = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDelete {
    const message = { ...baseMsgDelete } as MsgDelete;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = String(object.uuid);
    } else {
      message.uuid = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key);
    } else {
      message.key = "";
    }
    return message;
  },

  toJSON(message: MsgDelete): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.uuid !== undefined && (obj.uuid = message.uuid);
    message.key !== undefined && (obj.key = message.key);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDelete>): MsgDelete {
    const message = { ...baseMsgDelete } as MsgDelete;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.uuid !== undefined && object.uuid !== null) {
      message.uuid = object.uuid;
    } else {
      message.uuid = "";
    }
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key;
    } else {
      message.key = "";
    }
    return message;
  },
};

const baseMsgDeleteResponse: object = {};

export const MsgDeleteResponse = {
  encode(
    _: MsgDeleteResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgDeleteResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeleteResponse } as MsgDeleteResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDeleteResponse {
    const message = { ...baseMsgDeleteResponse } as MsgDeleteResponse;
    return message;
  },

  toJSON(_: MsgDeleteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDeleteResponse>): MsgDeleteResponse {
    const message = { ...baseMsgDeleteResponse } as MsgDeleteResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  RenewLeasesAll(
    request: MsgRenewLeasesAll
  ): Promise<MsgRenewLeasesAllResponse>;
  RenewLease(request: MsgRenewLease): Promise<MsgRenewLeaseResponse>;
  Rename(request: MsgRename): Promise<MsgRenameResponse>;
  MultiUpdate(request: MsgMultiUpdate): Promise<MsgMultiUpdateResponse>;
  DeleteAll(request: MsgDeleteAll): Promise<MsgDeleteAllResponse>;
  Upsert(request: MsgUpsert): Promise<MsgUpsertResponse>;
  Create(request: MsgCreate): Promise<MsgCreateResponse>;
  Update(request: MsgUpdate): Promise<MsgUpdateResponse>;
  Delete(request: MsgDelete): Promise<MsgDeleteResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  RenewLeasesAll(
    request: MsgRenewLeasesAll
  ): Promise<MsgRenewLeasesAllResponse> {
    const data = MsgRenewLeasesAll.encode(request).finish();
    const promise = this.rpc.request(
      "bluzelle.curium.crud.Msg",
      "RenewLeasesAll",
      data
    );
    return promise.then((data) =>
      MsgRenewLeasesAllResponse.decode(new _m0.Reader(data))
    );
  }

  RenewLease(request: MsgRenewLease): Promise<MsgRenewLeaseResponse> {
    const data = MsgRenewLease.encode(request).finish();
    const promise = this.rpc.request(
      "bluzelle.curium.crud.Msg",
      "RenewLease",
      data
    );
    return promise.then((data) =>
      MsgRenewLeaseResponse.decode(new _m0.Reader(data))
    );
  }

  Rename(request: MsgRename): Promise<MsgRenameResponse> {
    const data = MsgRename.encode(request).finish();
    const promise = this.rpc.request(
      "bluzelle.curium.crud.Msg",
      "Rename",
      data
    );
    return promise.then((data) =>
      MsgRenameResponse.decode(new _m0.Reader(data))
    );
  }

  MultiUpdate(request: MsgMultiUpdate): Promise<MsgMultiUpdateResponse> {
    const data = MsgMultiUpdate.encode(request).finish();
    const promise = this.rpc.request(
      "bluzelle.curium.crud.Msg",
      "MultiUpdate",
      data
    );
    return promise.then((data) =>
      MsgMultiUpdateResponse.decode(new _m0.Reader(data))
    );
  }

  DeleteAll(request: MsgDeleteAll): Promise<MsgDeleteAllResponse> {
    const data = MsgDeleteAll.encode(request).finish();
    const promise = this.rpc.request(
      "bluzelle.curium.crud.Msg",
      "DeleteAll",
      data
    );
    return promise.then((data) =>
      MsgDeleteAllResponse.decode(new _m0.Reader(data))
    );
  }

  Upsert(request: MsgUpsert): Promise<MsgUpsertResponse> {
    const data = MsgUpsert.encode(request).finish();
    const promise = this.rpc.request(
      "bluzelle.curium.crud.Msg",
      "Upsert",
      data
    );
    return promise.then((data) =>
      MsgUpsertResponse.decode(new _m0.Reader(data))
    );
  }

  Create(request: MsgCreate): Promise<MsgCreateResponse> {
    const data = MsgCreate.encode(request).finish();
    const promise = this.rpc.request(
      "bluzelle.curium.crud.Msg",
      "Create",
      data
    );
    return promise.then((data) =>
      MsgCreateResponse.decode(new _m0.Reader(data))
    );
  }

  Update(request: MsgUpdate): Promise<MsgUpdateResponse> {
    const data = MsgUpdate.encode(request).finish();
    const promise = this.rpc.request(
      "bluzelle.curium.crud.Msg",
      "Update",
      data
    );
    return promise.then((data) =>
      MsgUpdateResponse.decode(new _m0.Reader(data))
    );
  }

  Delete(request: MsgDelete): Promise<MsgDeleteResponse> {
    const data = MsgDelete.encode(request).finish();
    const promise = this.rpc.request(
      "bluzelle.curium.crud.Msg",
      "Delete",
      data
    );
    return promise.then((data) =>
      MsgDeleteResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, "base64").toString("binary"));
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64);
  const arr = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i);
  }
  return arr;
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, "binary").toString("base64"));
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = [];
  for (let i = 0; i < arr.byteLength; ++i) {
    bin.push(String.fromCharCode(arr[i]));
  }
  return btoa(bin.join(""));
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
