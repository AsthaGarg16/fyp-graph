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

export class AuctionCancelled extends ethereum.Event {
  get params(): AuctionCancelled__Params {
    return new AuctionCancelled__Params(this);
  }
}

export class AuctionCancelled__Params {
  _event: AuctionCancelled;

  constructor(event: AuctionCancelled) {
    this._event = event;
  }

  get nftAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class AuctionCreated extends ethereum.Event {
  get params(): AuctionCreated__Params {
    return new AuctionCreated__Params(this);
  }
}

export class AuctionCreated__Params {
  _event: AuctionCreated;

  constructor(event: AuctionCreated) {
    this._event = event;
  }

  get nftAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get payToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class AuctionResulted extends ethereum.Event {
  get params(): AuctionResulted__Params {
    return new AuctionResulted__Params(this);
  }
}

export class AuctionResulted__Params {
  _event: AuctionResulted;

  constructor(event: AuctionResulted) {
    this._event = event;
  }

  get oldOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get nftAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get winner(): Address {
    return this._event.parameters[3].value.toAddress();
  }

  get payToken(): Address {
    return this._event.parameters[4].value.toAddress();
  }

  get unitPrice(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }

  get winningBid(): BigInt {
    return this._event.parameters[6].value.toBigInt();
  }
}

export class BidPlaced extends ethereum.Event {
  get params(): BidPlaced__Params {
    return new BidPlaced__Params(this);
  }
}

export class BidPlaced__Params {
  _event: BidPlaced;

  constructor(event: BidPlaced) {
    this._event = event;
  }

  get nftAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get bidder(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get bid(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class BidRefunded extends ethereum.Event {
  get params(): BidRefunded__Params {
    return new BidRefunded__Params(this);
  }
}

export class BidRefunded__Params {
  _event: BidRefunded;

  constructor(event: BidRefunded) {
    this._event = event;
  }

  get nftAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get bidder(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get bid(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class BidWithdrawn extends ethereum.Event {
  get params(): BidWithdrawn__Params {
    return new BidWithdrawn__Params(this);
  }
}

export class BidWithdrawn__Params {
  _event: BidWithdrawn;

  constructor(event: BidWithdrawn) {
    this._event = event;
  }

  get nftAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get bidder(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get bid(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class FantomAuctionContractDeployed extends ethereum.Event {
  get params(): FantomAuctionContractDeployed__Params {
    return new FantomAuctionContractDeployed__Params(this);
  }
}

export class FantomAuctionContractDeployed__Params {
  _event: FantomAuctionContractDeployed;

  constructor(event: FantomAuctionContractDeployed) {
    this._event = event;
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class MarketAuctionOwnershipTransferred extends ethereum.Event {
  get params(): MarketAuctionOwnershipTransferred__Params {
    return new MarketAuctionOwnershipTransferred__Params(this);
  }
}

export class MarketAuctionOwnershipTransferred__Params {
  _event: MarketAuctionOwnershipTransferred;

  constructor(event: MarketAuctionOwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PauseToggled extends ethereum.Event {
  get params(): PauseToggled__Params {
    return new PauseToggled__Params(this);
  }
}

export class PauseToggled__Params {
  _event: PauseToggled;

  constructor(event: PauseToggled) {
    this._event = event;
  }

  get isPaused(): boolean {
    return this._event.parameters[0].value.toBoolean();
  }
}

export class UpdateAuctionEndTime extends ethereum.Event {
  get params(): UpdateAuctionEndTime__Params {
    return new UpdateAuctionEndTime__Params(this);
  }
}

export class UpdateAuctionEndTime__Params {
  _event: UpdateAuctionEndTime;

  constructor(event: UpdateAuctionEndTime) {
    this._event = event;
  }

  get nftAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get endTime(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class UpdateAuctionReservePrice extends ethereum.Event {
  get params(): UpdateAuctionReservePrice__Params {
    return new UpdateAuctionReservePrice__Params(this);
  }
}

export class UpdateAuctionReservePrice__Params {
  _event: UpdateAuctionReservePrice;

  constructor(event: UpdateAuctionReservePrice) {
    this._event = event;
  }

  get nftAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get payToken(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get reservePrice(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class UpdateAuctionStartTime extends ethereum.Event {
  get params(): UpdateAuctionStartTime__Params {
    return new UpdateAuctionStartTime__Params(this);
  }
}

export class UpdateAuctionStartTime__Params {
  _event: UpdateAuctionStartTime;

  constructor(event: UpdateAuctionStartTime) {
    this._event = event;
  }

  get nftAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get startTime(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class UpdateBidWithdrawalLockTime extends ethereum.Event {
  get params(): UpdateBidWithdrawalLockTime__Params {
    return new UpdateBidWithdrawalLockTime__Params(this);
  }
}

export class UpdateBidWithdrawalLockTime__Params {
  _event: UpdateBidWithdrawalLockTime;

  constructor(event: UpdateBidWithdrawalLockTime) {
    this._event = event;
  }

  get bidWithdrawalLockTime(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class UpdateMinBidIncrement extends ethereum.Event {
  get params(): UpdateMinBidIncrement__Params {
    return new UpdateMinBidIncrement__Params(this);
  }
}

export class UpdateMinBidIncrement__Params {
  _event: UpdateMinBidIncrement;

  constructor(event: UpdateMinBidIncrement) {
    this._event = event;
  }

  get minBidIncrement(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class MarketAuctionUpdatePlatformFee extends ethereum.Event {
  get params(): MarketAuctionUpdatePlatformFee__Params {
    return new MarketAuctionUpdatePlatformFee__Params(this);
  }
}

export class MarketAuctionUpdatePlatformFee__Params {
  _event: MarketAuctionUpdatePlatformFee;

  constructor(event: MarketAuctionUpdatePlatformFee) {
    this._event = event;
  }

  get platformFee(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }
}

export class MarketAuctionUpdatePlatformFeeRecipient extends ethereum.Event {
  get params(): MarketAuctionUpdatePlatformFeeRecipient__Params {
    return new MarketAuctionUpdatePlatformFeeRecipient__Params(this);
  }
}

export class MarketAuctionUpdatePlatformFeeRecipient__Params {
  _event: MarketAuctionUpdatePlatformFeeRecipient;

  constructor(event: MarketAuctionUpdatePlatformFeeRecipient) {
    this._event = event;
  }

  get platformFeeRecipient(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class MarketAuction__auctionsResult {
  value0: Address;
  value1: Address;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: BigInt;
  value6: boolean;

  constructor(
    value0: Address,
    value1: Address,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: BigInt,
    value6: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromBoolean(this.value6));
    return map;
  }

  getOwner(): Address {
    return this.value0;
  }

  getPayToken(): Address {
    return this.value1;
  }

  getMinBid(): BigInt {
    return this.value2;
  }

  getReservePrice(): BigInt {
    return this.value3;
  }

  getStartTime(): BigInt {
    return this.value4;
  }

  getEndTime(): BigInt {
    return this.value5;
  }

  getResulted(): boolean {
    return this.value6;
  }
}

export class MarketAuction__getAuctionResult {
  value0: Address;
  value1: Address;
  value2: BigInt;
  value3: BigInt;
  value4: BigInt;
  value5: boolean;
  value6: BigInt;

  constructor(
    value0: Address,
    value1: Address,
    value2: BigInt,
    value3: BigInt,
    value4: BigInt,
    value5: boolean,
    value6: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    map.set("value5", ethereum.Value.fromBoolean(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    return map;
  }

  get_owner(): Address {
    return this.value0;
  }

  get_payToken(): Address {
    return this.value1;
  }

  get_reservePrice(): BigInt {
    return this.value2;
  }

  get_startTime(): BigInt {
    return this.value3;
  }

  get_endTime(): BigInt {
    return this.value4;
  }

  get_resulted(): boolean {
    return this.value5;
  }

  getMinBid(): BigInt {
    return this.value6;
  }
}

export class MarketAuction__getHighestBidderResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: Address, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  get_bidder(): Address {
    return this.value0;
  }

  get_bid(): BigInt {
    return this.value1;
  }

  get_lastBidTime(): BigInt {
    return this.value2;
  }
}

export class MarketAuction__highestBidsResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;

  constructor(value0: Address, value1: BigInt, value2: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    return map;
  }

  getBidder(): Address {
    return this.value0;
  }

  getBid(): BigInt {
    return this.value1;
  }

  getLastBidTime(): BigInt {
    return this.value2;
  }
}

export class MarketAuction extends ethereum.SmartContract {
  static bind(address: Address): MarketAuction {
    return new MarketAuction("MarketAuction", address);
  }

  addressRegistry(): Address {
    let result = super.call(
      "addressRegistry",
      "addressRegistry():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_addressRegistry(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "addressRegistry",
      "addressRegistry():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  auctions(param0: Address, param1: BigInt): MarketAuction__auctionsResult {
    let result = super.call(
      "auctions",
      "auctions(address,uint256):(address,address,uint256,uint256,uint256,uint256,bool)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return new MarketAuction__auctionsResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBigInt(),
      result[6].toBoolean()
    );
  }

  try_auctions(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<MarketAuction__auctionsResult> {
    let result = super.tryCall(
      "auctions",
      "auctions(address,uint256):(address,address,uint256,uint256,uint256,uint256,bool)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new MarketAuction__auctionsResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBigInt(),
        value[6].toBoolean()
      )
    );
  }

  bidWithdrawalLockTime(): BigInt {
    let result = super.call(
      "bidWithdrawalLockTime",
      "bidWithdrawalLockTime():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_bidWithdrawalLockTime(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "bidWithdrawalLockTime",
      "bidWithdrawalLockTime():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getAuction(
    _nftAddress: Address,
    _tokenId: BigInt
  ): MarketAuction__getAuctionResult {
    let result = super.call(
      "getAuction",
      "getAuction(address,uint256):(address,address,uint256,uint256,uint256,bool,uint256)",
      [
        ethereum.Value.fromAddress(_nftAddress),
        ethereum.Value.fromUnsignedBigInt(_tokenId)
      ]
    );

    return new MarketAuction__getAuctionResult(
      result[0].toAddress(),
      result[1].toAddress(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toBigInt(),
      result[5].toBoolean(),
      result[6].toBigInt()
    );
  }

  try_getAuction(
    _nftAddress: Address,
    _tokenId: BigInt
  ): ethereum.CallResult<MarketAuction__getAuctionResult> {
    let result = super.tryCall(
      "getAuction",
      "getAuction(address,uint256):(address,address,uint256,uint256,uint256,bool,uint256)",
      [
        ethereum.Value.fromAddress(_nftAddress),
        ethereum.Value.fromUnsignedBigInt(_tokenId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new MarketAuction__getAuctionResult(
        value[0].toAddress(),
        value[1].toAddress(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toBigInt(),
        value[5].toBoolean(),
        value[6].toBigInt()
      )
    );
  }

  getHighestBidder(
    _nftAddress: Address,
    _tokenId: BigInt
  ): MarketAuction__getHighestBidderResult {
    let result = super.call(
      "getHighestBidder",
      "getHighestBidder(address,uint256):(address,uint256,uint256)",
      [
        ethereum.Value.fromAddress(_nftAddress),
        ethereum.Value.fromUnsignedBigInt(_tokenId)
      ]
    );

    return new MarketAuction__getHighestBidderResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_getHighestBidder(
    _nftAddress: Address,
    _tokenId: BigInt
  ): ethereum.CallResult<MarketAuction__getHighestBidderResult> {
    let result = super.tryCall(
      "getHighestBidder",
      "getHighestBidder(address,uint256):(address,uint256,uint256)",
      [
        ethereum.Value.fromAddress(_nftAddress),
        ethereum.Value.fromUnsignedBigInt(_tokenId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new MarketAuction__getHighestBidderResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  highestBids(
    param0: Address,
    param1: BigInt
  ): MarketAuction__highestBidsResult {
    let result = super.call(
      "highestBids",
      "highestBids(address,uint256):(address,uint256,uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return new MarketAuction__highestBidsResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt()
    );
  }

  try_highestBids(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<MarketAuction__highestBidsResult> {
    let result = super.tryCall(
      "highestBids",
      "highestBids(address,uint256):(address,uint256,uint256)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new MarketAuction__highestBidsResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt()
      )
    );
  }

  isPaused(): boolean {
    let result = super.call("isPaused", "isPaused():(bool)", []);

    return result[0].toBoolean();
  }

  try_isPaused(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isPaused", "isPaused():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  minBidIncrement(): BigInt {
    let result = super.call(
      "minBidIncrement",
      "minBidIncrement():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_minBidIncrement(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "minBidIncrement",
      "minBidIncrement():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  platformFee(): BigInt {
    let result = super.call("platformFee", "platformFee():(uint256)", []);

    return result[0].toBigInt();
  }

  try_platformFee(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("platformFee", "platformFee():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  platformFeeRecipient(): Address {
    let result = super.call(
      "platformFeeRecipient",
      "platformFeeRecipient():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_platformFeeRecipient(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "platformFeeRecipient",
      "platformFeeRecipient():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class CancelAuctionCall extends ethereum.Call {
  get inputs(): CancelAuctionCall__Inputs {
    return new CancelAuctionCall__Inputs(this);
  }

  get outputs(): CancelAuctionCall__Outputs {
    return new CancelAuctionCall__Outputs(this);
  }
}

export class CancelAuctionCall__Inputs {
  _call: CancelAuctionCall;

  constructor(call: CancelAuctionCall) {
    this._call = call;
  }

  get _nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CancelAuctionCall__Outputs {
  _call: CancelAuctionCall;

  constructor(call: CancelAuctionCall) {
    this._call = call;
  }
}

export class CreateAuctionCall extends ethereum.Call {
  get inputs(): CreateAuctionCall__Inputs {
    return new CreateAuctionCall__Inputs(this);
  }

  get outputs(): CreateAuctionCall__Outputs {
    return new CreateAuctionCall__Outputs(this);
  }
}

export class CreateAuctionCall__Inputs {
  _call: CreateAuctionCall;

  constructor(call: CreateAuctionCall) {
    this._call = call;
  }

  get _nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _payToken(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _reservePrice(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _startTimestamp(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get minBidReserve(): boolean {
    return this._call.inputValues[5].value.toBoolean();
  }

  get _endTimestamp(): BigInt {
    return this._call.inputValues[6].value.toBigInt();
  }
}

export class CreateAuctionCall__Outputs {
  _call: CreateAuctionCall;

  constructor(call: CreateAuctionCall) {
    this._call = call;
  }
}

export class PlaceBidCall extends ethereum.Call {
  get inputs(): PlaceBidCall__Inputs {
    return new PlaceBidCall__Inputs(this);
  }

  get outputs(): PlaceBidCall__Outputs {
    return new PlaceBidCall__Outputs(this);
  }
}

export class PlaceBidCall__Inputs {
  _call: PlaceBidCall;

  constructor(call: PlaceBidCall) {
    this._call = call;
  }

  get _nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _bidAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class PlaceBidCall__Outputs {
  _call: PlaceBidCall;

  constructor(call: PlaceBidCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class ResultAuctionCall extends ethereum.Call {
  get inputs(): ResultAuctionCall__Inputs {
    return new ResultAuctionCall__Inputs(this);
  }

  get outputs(): ResultAuctionCall__Outputs {
    return new ResultAuctionCall__Outputs(this);
  }
}

export class ResultAuctionCall__Inputs {
  _call: ResultAuctionCall;

  constructor(call: ResultAuctionCall) {
    this._call = call;
  }

  get _nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ResultAuctionCall__Outputs {
  _call: ResultAuctionCall;

  constructor(call: ResultAuctionCall) {
    this._call = call;
  }
}

export class ToggleIsPausedCall extends ethereum.Call {
  get inputs(): ToggleIsPausedCall__Inputs {
    return new ToggleIsPausedCall__Inputs(this);
  }

  get outputs(): ToggleIsPausedCall__Outputs {
    return new ToggleIsPausedCall__Outputs(this);
  }
}

export class ToggleIsPausedCall__Inputs {
  _call: ToggleIsPausedCall;

  constructor(call: ToggleIsPausedCall) {
    this._call = call;
  }
}

export class ToggleIsPausedCall__Outputs {
  _call: ToggleIsPausedCall;

  constructor(call: ToggleIsPausedCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpdateAuctionEndTimeCall extends ethereum.Call {
  get inputs(): UpdateAuctionEndTimeCall__Inputs {
    return new UpdateAuctionEndTimeCall__Inputs(this);
  }

  get outputs(): UpdateAuctionEndTimeCall__Outputs {
    return new UpdateAuctionEndTimeCall__Outputs(this);
  }
}

export class UpdateAuctionEndTimeCall__Inputs {
  _call: UpdateAuctionEndTimeCall;

  constructor(call: UpdateAuctionEndTimeCall) {
    this._call = call;
  }

  get _nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _endTimestamp(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class UpdateAuctionEndTimeCall__Outputs {
  _call: UpdateAuctionEndTimeCall;

  constructor(call: UpdateAuctionEndTimeCall) {
    this._call = call;
  }
}

export class UpdateAuctionReservePriceCall extends ethereum.Call {
  get inputs(): UpdateAuctionReservePriceCall__Inputs {
    return new UpdateAuctionReservePriceCall__Inputs(this);
  }

  get outputs(): UpdateAuctionReservePriceCall__Outputs {
    return new UpdateAuctionReservePriceCall__Outputs(this);
  }
}

export class UpdateAuctionReservePriceCall__Inputs {
  _call: UpdateAuctionReservePriceCall;

  constructor(call: UpdateAuctionReservePriceCall) {
    this._call = call;
  }

  get _nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _reservePrice(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class UpdateAuctionReservePriceCall__Outputs {
  _call: UpdateAuctionReservePriceCall;

  constructor(call: UpdateAuctionReservePriceCall) {
    this._call = call;
  }
}

export class UpdateAuctionStartTimeCall extends ethereum.Call {
  get inputs(): UpdateAuctionStartTimeCall__Inputs {
    return new UpdateAuctionStartTimeCall__Inputs(this);
  }

  get outputs(): UpdateAuctionStartTimeCall__Outputs {
    return new UpdateAuctionStartTimeCall__Outputs(this);
  }
}

export class UpdateAuctionStartTimeCall__Inputs {
  _call: UpdateAuctionStartTimeCall;

  constructor(call: UpdateAuctionStartTimeCall) {
    this._call = call;
  }

  get _nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _startTime(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class UpdateAuctionStartTimeCall__Outputs {
  _call: UpdateAuctionStartTimeCall;

  constructor(call: UpdateAuctionStartTimeCall) {
    this._call = call;
  }
}

export class UpdateBidWithdrawalLockTimeCall extends ethereum.Call {
  get inputs(): UpdateBidWithdrawalLockTimeCall__Inputs {
    return new UpdateBidWithdrawalLockTimeCall__Inputs(this);
  }

  get outputs(): UpdateBidWithdrawalLockTimeCall__Outputs {
    return new UpdateBidWithdrawalLockTimeCall__Outputs(this);
  }
}

export class UpdateBidWithdrawalLockTimeCall__Inputs {
  _call: UpdateBidWithdrawalLockTimeCall;

  constructor(call: UpdateBidWithdrawalLockTimeCall) {
    this._call = call;
  }

  get _bidWithdrawalLockTime(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdateBidWithdrawalLockTimeCall__Outputs {
  _call: UpdateBidWithdrawalLockTimeCall;

  constructor(call: UpdateBidWithdrawalLockTimeCall) {
    this._call = call;
  }
}

export class UpdateMinBidIncrementCall extends ethereum.Call {
  get inputs(): UpdateMinBidIncrementCall__Inputs {
    return new UpdateMinBidIncrementCall__Inputs(this);
  }

  get outputs(): UpdateMinBidIncrementCall__Outputs {
    return new UpdateMinBidIncrementCall__Outputs(this);
  }
}

export class UpdateMinBidIncrementCall__Inputs {
  _call: UpdateMinBidIncrementCall;

  constructor(call: UpdateMinBidIncrementCall) {
    this._call = call;
  }

  get _minBidIncrement(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdateMinBidIncrementCall__Outputs {
  _call: UpdateMinBidIncrementCall;

  constructor(call: UpdateMinBidIncrementCall) {
    this._call = call;
  }
}

export class UpdatePlatformFeeCall extends ethereum.Call {
  get inputs(): UpdatePlatformFeeCall__Inputs {
    return new UpdatePlatformFeeCall__Inputs(this);
  }

  get outputs(): UpdatePlatformFeeCall__Outputs {
    return new UpdatePlatformFeeCall__Outputs(this);
  }
}

export class UpdatePlatformFeeCall__Inputs {
  _call: UpdatePlatformFeeCall;

  constructor(call: UpdatePlatformFeeCall) {
    this._call = call;
  }

  get _platformFee(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UpdatePlatformFeeCall__Outputs {
  _call: UpdatePlatformFeeCall;

  constructor(call: UpdatePlatformFeeCall) {
    this._call = call;
  }
}

export class WithdrawBidCall extends ethereum.Call {
  get inputs(): WithdrawBidCall__Inputs {
    return new WithdrawBidCall__Inputs(this);
  }

  get outputs(): WithdrawBidCall__Outputs {
    return new WithdrawBidCall__Outputs(this);
  }
}

export class WithdrawBidCall__Inputs {
  _call: WithdrawBidCall;

  constructor(call: WithdrawBidCall) {
    this._call = call;
  }

  get _nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class WithdrawBidCall__Outputs {
  _call: WithdrawBidCall;

  constructor(call: WithdrawBidCall) {
    this._call = call;
  }
}