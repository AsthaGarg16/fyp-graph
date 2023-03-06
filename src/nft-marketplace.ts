import {
  ItemCanceled as ItemCanceledEvent,
  ItemListed as ItemListedEvent,
  ItemSold as ItemSoldEvent,
  ItemUpdated as ItemUpdatedEvent,
  OfferCanceled as OfferCanceledEvent,
  OfferCreated as OfferCreatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  UpdatePlatformFee as UpdatePlatformFeeEvent,
  UpdatePlatformFeeRecipient as UpdatePlatformFeeRecipientEvent
} from "../generated/NftMarketplace/NftMarketplace"
import {
  ItemCanceled,
  ItemListed,
  ItemSold,
  ItemUpdated,
  OfferCanceled,
  OfferCreated,
  OwnershipTransferred,
  UpdatePlatformFee,
  UpdatePlatformFeeRecipient
} from "../generated/schema"

export function handleItemCanceled(event: ItemCanceledEvent): void {
  let entity = new ItemCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.nft = event.params.nft
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleItemListed(event: ItemListedEvent): void {
  let entity = new ItemListed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.seller = event.params.seller
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.payToken = event.params.payToken
  entity.quantity = event.params.quantity
  entity.pricePerItem = event.params.pricePerItem
  entity.startingTime = event.params.startingTime

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleItemSold(event: ItemSoldEvent): void {
  let entity = new ItemSold(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.seller = event.params.seller
  entity.buyer = event.params.buyer
  entity.nft = event.params.nft
  entity.tokenId = event.params.tokenId
  entity.quantity = event.params.quantity
  entity.payToken = event.params.payToken
  entity.pricePerItem = event.params.pricePerItem

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleItemUpdated(event: ItemUpdatedEvent): void {
  let entity = new ItemUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.nft = event.params.nft
  entity.tokenId = event.params.tokenId
  entity.payToken = event.params.payToken
  entity.newPrice = event.params.newPrice

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOfferCanceled(event: OfferCanceledEvent): void {
  let entity = new OfferCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.creator = event.params.creator
  entity.nft = event.params.nft
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOfferCreated(event: OfferCreatedEvent): void {
  let entity = new OfferCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.creator = event.params.creator
  entity.nft = event.params.nft
  entity.tokenId = event.params.tokenId
  entity.quantity = event.params.quantity
  entity.payToken = event.params.payToken
  entity.pricePerItem = event.params.pricePerItem
  entity.deadline = event.params.deadline

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdatePlatformFee(event: UpdatePlatformFeeEvent): void {
  let entity = new UpdatePlatformFee(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.platformFee = event.params.platformFee

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdatePlatformFeeRecipient(
  event: UpdatePlatformFeeRecipientEvent
): void {
  let entity = new UpdatePlatformFeeRecipient(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.platformFeeRecipient = event.params.platformFeeRecipient

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
