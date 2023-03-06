import {
  AuctionCancelled as AuctionCancelledEvent,
  AuctionCreated as AuctionCreatedEvent,
  AuctionResulted as AuctionResultedEvent,
  BidPlaced as BidPlacedEvent,
  BidRefunded as BidRefundedEvent,
  BidWithdrawn as BidWithdrawnEvent,
  FantomAuctionContractDeployed as FantomAuctionContractDeployedEvent,
  Initialized as InitializedEvent,
  MarketAuctionOwnershipTransferred as MarketAuctionOwnershipTransferredEvent,
  PauseToggled as PauseToggledEvent,
  UpdateAuctionEndTime as UpdateAuctionEndTimeEvent,
  UpdateAuctionReservePrice as UpdateAuctionReservePriceEvent,
  UpdateAuctionStartTime as UpdateAuctionStartTimeEvent,
  UpdateBidWithdrawalLockTime as UpdateBidWithdrawalLockTimeEvent,
  UpdateMinBidIncrement as UpdateMinBidIncrementEvent,
  MarketAuctionUpdatePlatformFee as MarketAuctionUpdatePlatformFeeEvent,
  MarketAuctionUpdatePlatformFeeRecipient as MarketAuctionUpdatePlatformFeeRecipientEvent
} from "../generated/MarketAuction/MarketAuction"
import {
  AuctionCancelled,
  AuctionCreated,
  AuctionResulted,
  BidPlaced,
  BidRefunded,
  BidWithdrawn,
  FantomAuctionContractDeployed,
  Initialized,
  MarketAuctionOwnershipTransferred,
  PauseToggled,
  UpdateAuctionEndTime,
  UpdateAuctionReservePrice,
  UpdateAuctionStartTime,
  UpdateBidWithdrawalLockTime,
  UpdateMinBidIncrement,
  MarketAuctionUpdatePlatformFee,
  MarketAuctionUpdatePlatformFeeRecipient
} from "../generated/schema"

export function handleAuctionCancelled(event: AuctionCancelledEvent): void {
  let entity = new AuctionCancelled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAuctionCreated(event: AuctionCreatedEvent): void {
  let entity = new AuctionCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.payToken = event.params.payToken

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAuctionResulted(event: AuctionResultedEvent): void {
  let entity = new AuctionResulted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldOwner = event.params.oldOwner
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.winner = event.params.winner
  entity.payToken = event.params.payToken
  entity.unitPrice = event.params.unitPrice
  entity.winningBid = event.params.winningBid

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBidPlaced(event: BidPlacedEvent): void {
  let entity = new BidPlaced(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.bidder = event.params.bidder
  entity.bid = event.params.bid

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBidRefunded(event: BidRefundedEvent): void {
  let entity = new BidRefunded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.bidder = event.params.bidder
  entity.bid = event.params.bid

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBidWithdrawn(event: BidWithdrawnEvent): void {
  let entity = new BidWithdrawn(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.bidder = event.params.bidder
  entity.bid = event.params.bid

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFantomAuctionContractDeployed(
  event: FantomAuctionContractDeployedEvent
): void {
  let entity = new FantomAuctionContractDeployed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketAuctionOwnershipTransferred(
  event: MarketAuctionOwnershipTransferredEvent
): void {
  let entity = new MarketAuctionOwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePauseToggled(event: PauseToggledEvent): void {
  let entity = new PauseToggled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.isPaused = event.params.isPaused

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateAuctionEndTime(
  event: UpdateAuctionEndTimeEvent
): void {
  let entity = new UpdateAuctionEndTime(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.endTime = event.params.endTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateAuctionReservePrice(
  event: UpdateAuctionReservePriceEvent
): void {
  let entity = new UpdateAuctionReservePrice(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.payToken = event.params.payToken
  entity.reservePrice = event.params.reservePrice

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateAuctionStartTime(
  event: UpdateAuctionStartTimeEvent
): void {
  let entity = new UpdateAuctionStartTime(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.startTime = event.params.startTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateBidWithdrawalLockTime(
  event: UpdateBidWithdrawalLockTimeEvent
): void {
  let entity = new UpdateBidWithdrawalLockTime(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.bidWithdrawalLockTime = event.params.bidWithdrawalLockTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateMinBidIncrement(
  event: UpdateMinBidIncrementEvent
): void {
  let entity = new UpdateMinBidIncrement(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.minBidIncrement = event.params.minBidIncrement

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketAuctionUpdatePlatformFee(
  event: MarketAuctionUpdatePlatformFeeEvent
): void {
  let entity = new MarketAuctionUpdatePlatformFee(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.platformFee = event.params.platformFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMarketAuctionUpdatePlatformFeeRecipient(
  event: MarketAuctionUpdatePlatformFeeRecipientEvent
): void {
  let entity = new MarketAuctionUpdatePlatformFeeRecipient(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.platformFeeRecipient = event.params.platformFeeRecipient

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
