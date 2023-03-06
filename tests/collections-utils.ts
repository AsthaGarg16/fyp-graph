import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AddedToCollection,
  AddedToWatchlist,
  CollectionCreated,
  CollectionsOwnershipTransferred,
  RemovedFromWatchlist
} from "../generated/Collections/Collections"

export function createAddedToCollectionEvent(
  name: string,
  nftAddress: Address,
  tokenId: BigInt
): AddedToCollection {
  let addedToCollectionEvent = changetype<AddedToCollection>(newMockEvent())

  addedToCollectionEvent.parameters = new Array()

  addedToCollectionEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  addedToCollectionEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  addedToCollectionEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return addedToCollectionEvent
}

export function createAddedToWatchlistEvent(
  name: string,
  watcher: Address
): AddedToWatchlist {
  let addedToWatchlistEvent = changetype<AddedToWatchlist>(newMockEvent())

  addedToWatchlistEvent.parameters = new Array()

  addedToWatchlistEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  addedToWatchlistEvent.parameters.push(
    new ethereum.EventParam("watcher", ethereum.Value.fromAddress(watcher))
  )

  return addedToWatchlistEvent
}

export function createCollectionCreatedEvent(
  name: string,
  logoImage: string,
  bannerImage: string,
  earnings: i32,
  category: string,
  metaInfoUri: string,
  creator: Address
): CollectionCreated {
  let collectionCreatedEvent = changetype<CollectionCreated>(newMockEvent())

  collectionCreatedEvent.parameters = new Array()

  collectionCreatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  collectionCreatedEvent.parameters.push(
    new ethereum.EventParam("logoImage", ethereum.Value.fromString(logoImage))
  )
  collectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "bannerImage",
      ethereum.Value.fromString(bannerImage)
    )
  )
  collectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "earnings",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(earnings))
    )
  )
  collectionCreatedEvent.parameters.push(
    new ethereum.EventParam("category", ethereum.Value.fromString(category))
  )
  collectionCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "metaInfoUri",
      ethereum.Value.fromString(metaInfoUri)
    )
  )
  collectionCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )

  return collectionCreatedEvent
}

export function createCollectionsOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): CollectionsOwnershipTransferred {
  let collectionsOwnershipTransferredEvent = changetype<
    CollectionsOwnershipTransferred
  >(newMockEvent())

  collectionsOwnershipTransferredEvent.parameters = new Array()

  collectionsOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  collectionsOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return collectionsOwnershipTransferredEvent
}

export function createRemovedFromWatchlistEvent(
  name: string,
  watcher: Address
): RemovedFromWatchlist {
  let removedFromWatchlistEvent = changetype<RemovedFromWatchlist>(
    newMockEvent()
  )

  removedFromWatchlistEvent.parameters = new Array()

  removedFromWatchlistEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  removedFromWatchlistEvent.parameters.push(
    new ethereum.EventParam("watcher", ethereum.Value.fromAddress(watcher))
  )

  return removedFromWatchlistEvent
}
