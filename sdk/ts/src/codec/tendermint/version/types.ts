/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "tendermint.version";

/**
 * Consensus captures the consensus rules for processing a block in the blockchain,
 * including all blockchain data structures and the rules of the application's
 * state transition machine.
 */
export interface Consensus {
  block: Long;
  app: Long;
}

const baseConsensus: object = { block: Long.UZERO, app: Long.UZERO };

export const Consensus = {
  encode(
    message: Consensus,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (!message.block.isZero()) {
      writer.uint32(8).uint64(message.block);
    }
    if (!message.app.isZero()) {
      writer.uint32(16).uint64(message.app);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Consensus {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseConsensus } as Consensus;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.block = reader.uint64() as Long;
          break;
        case 2:
          message.app = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Consensus {
    const message = { ...baseConsensus } as Consensus;
    if (object.block !== undefined && object.block !== null) {
      message.block = Long.fromString(object.block);
    } else {
      message.block = Long.UZERO;
    }
    if (object.app !== undefined && object.app !== null) {
      message.app = Long.fromString(object.app);
    } else {
      message.app = Long.UZERO;
    }
    return message;
  },

  toJSON(message: Consensus): unknown {
    const obj: any = {};
    message.block !== undefined &&
      (obj.block = (message.block || Long.UZERO).toString());
    message.app !== undefined &&
      (obj.app = (message.app || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Consensus>): Consensus {
    const message = { ...baseConsensus } as Consensus;
    if (object.block !== undefined && object.block !== null) {
      message.block = object.block as Long;
    } else {
      message.block = Long.UZERO;
    }
    if (object.app !== undefined && object.app !== null) {
      message.app = object.app as Long;
    } else {
      message.app = Long.UZERO;
    }
    return message;
  },
};

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
