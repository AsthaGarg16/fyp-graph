// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AddLiked extends ethereum.Event {
  get params(): AddLiked__Params {
    return new AddLiked__Params(this);
  }
}

export class AddLiked__Params {
  _event: AddLiked;

  constructor(event: AddLiked) {
    this._event = event;
  }

  get nftAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get reviewer(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RemoveLiked extends ethereum.Event {
  get params(): RemoveLiked__Params {
    return new RemoveLiked__Params(this);
  }
}

export class RemoveLiked__Params {
  _event: RemoveLiked;

  constructor(event: RemoveLiked) {
    this._event = event;
  }

  get nftAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get reviewer(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class ReviewAdded extends ethereum.Event {
  get params(): ReviewAdded__Params {
    return new ReviewAdded__Params(this);
  }
}

export class ReviewAdded__Params {
  _event: ReviewAdded;

  constructor(event: ReviewAdded) {
    this._event = event;
  }

  get nftAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get reviewer(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get content(): string {
    return this._event.parameters[3].value.toString();
  }
}

export class ReviewDeleted extends ethereum.Event {
  get params(): ReviewDeleted__Params {
    return new ReviewDeleted__Params(this);
  }
}

export class ReviewDeleted__Params {
  _event: ReviewDeleted;

  constructor(event: ReviewDeleted) {
    this._event = event;
  }

  get nftAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get reviewer(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class Reviews extends ethereum.SmartContract {
  static bind(address: Address): Reviews {
    return new Reviews("Reviews", address);
  }

  likes(param0: Address, param1: BigInt, param2: BigInt): Address {
    let result = super.call(
      "likes",
      "likes(address,uint256,uint256):(address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1),
        ethereum.Value.fromUnsignedBigInt(param2)
      ]
    );

    return result[0].toAddress();
  }

  try_likes(
    param0: Address,
    param1: BigInt,
    param2: BigInt
  ): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "likes",
      "likes(address,uint256,uint256):(address)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1),
        ethereum.Value.fromUnsignedBigInt(param2)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  reviews(param0: Address, param1: BigInt, param2: Address): string {
    let result = super.call(
      "reviews",
      "reviews(address,uint256,address):(string)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1),
        ethereum.Value.fromAddress(param2)
      ]
    );

    return result[0].toString();
  }

  try_reviews(
    param0: Address,
    param1: BigInt,
    param2: Address
  ): ethereum.CallResult<string> {
    let result = super.tryCall(
      "reviews",
      "reviews(address,uint256,address):(string)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1),
        ethereum.Value.fromAddress(param2)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }
}

export class AddReviewCall extends ethereum.Call {
  get inputs(): AddReviewCall__Inputs {
    return new AddReviewCall__Inputs(this);
  }

  get outputs(): AddReviewCall__Outputs {
    return new AddReviewCall__Outputs(this);
  }
}

export class AddReviewCall__Inputs {
  _call: AddReviewCall;

  constructor(call: AddReviewCall) {
    this._call = call;
  }

  get nft(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenid(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get review(): string {
    return this._call.inputValues[2].value.toString();
  }
}

export class AddReviewCall__Outputs {
  _call: AddReviewCall;

  constructor(call: AddReviewCall) {
    this._call = call;
  }
}

export class DeleteReviewCall extends ethereum.Call {
  get inputs(): DeleteReviewCall__Inputs {
    return new DeleteReviewCall__Inputs(this);
  }

  get outputs(): DeleteReviewCall__Outputs {
    return new DeleteReviewCall__Outputs(this);
  }
}

export class DeleteReviewCall__Inputs {
  _call: DeleteReviewCall;

  constructor(call: DeleteReviewCall) {
    this._call = call;
  }

  get nft(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenid(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DeleteReviewCall__Outputs {
  _call: DeleteReviewCall;

  constructor(call: DeleteReviewCall) {
    this._call = call;
  }
}

export class LikedCall extends ethereum.Call {
  get inputs(): LikedCall__Inputs {
    return new LikedCall__Inputs(this);
  }

  get outputs(): LikedCall__Outputs {
    return new LikedCall__Outputs(this);
  }
}

export class LikedCall__Inputs {
  _call: LikedCall;

  constructor(call: LikedCall) {
    this._call = call;
  }

  get nft(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenid(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class LikedCall__Outputs {
  _call: LikedCall;

  constructor(call: LikedCall) {
    this._call = call;
  }
}

export class UnlikedCall extends ethereum.Call {
  get inputs(): UnlikedCall__Inputs {
    return new UnlikedCall__Inputs(this);
  }

  get outputs(): UnlikedCall__Outputs {
    return new UnlikedCall__Outputs(this);
  }
}

export class UnlikedCall__Inputs {
  _call: UnlikedCall;

  constructor(call: UnlikedCall) {
    this._call = call;
  }

  get nft(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenid(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class UnlikedCall__Outputs {
  _call: UnlikedCall;

  constructor(call: UnlikedCall) {
    this._call = call;
  }
}
