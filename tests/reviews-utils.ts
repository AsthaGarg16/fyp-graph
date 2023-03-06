import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AddLiked,
  RemoveLiked,
  ReviewAdded,
  ReviewDeleted
} from "../generated/Reviews/Reviews"

export function createAddLikedEvent(
  nftAddress: Address,
  tokenId: BigInt,
  reviewer: Address
): AddLiked {
  let addLikedEvent = changetype<AddLiked>(newMockEvent())

  addLikedEvent.parameters = new Array()

  addLikedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  addLikedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  addLikedEvent.parameters.push(
    new ethereum.EventParam("reviewer", ethereum.Value.fromAddress(reviewer))
  )

  return addLikedEvent
}

export function createRemoveLikedEvent(
  nftAddress: Address,
  tokenId: BigInt,
  reviewer: Address
): RemoveLiked {
  let removeLikedEvent = changetype<RemoveLiked>(newMockEvent())

  removeLikedEvent.parameters = new Array()

  removeLikedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  removeLikedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  removeLikedEvent.parameters.push(
    new ethereum.EventParam("reviewer", ethereum.Value.fromAddress(reviewer))
  )

  return removeLikedEvent
}

export function createReviewAddedEvent(
  nftAddress: Address,
  tokenId: BigInt,
  reviewer: Address,
  content: string
): ReviewAdded {
  let reviewAddedEvent = changetype<ReviewAdded>(newMockEvent())

  reviewAddedEvent.parameters = new Array()

  reviewAddedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  reviewAddedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  reviewAddedEvent.parameters.push(
    new ethereum.EventParam("reviewer", ethereum.Value.fromAddress(reviewer))
  )
  reviewAddedEvent.parameters.push(
    new ethereum.EventParam("content", ethereum.Value.fromString(content))
  )

  return reviewAddedEvent
}

export function createReviewDeletedEvent(
  nftAddress: Address,
  tokenId: BigInt,
  reviewer: Address
): ReviewDeleted {
  let reviewDeletedEvent = changetype<ReviewDeleted>(newMockEvent())

  reviewDeletedEvent.parameters = new Array()

  reviewDeletedEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  reviewDeletedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  reviewDeletedEvent.parameters.push(
    new ethereum.EventParam("reviewer", ethereum.Value.fromAddress(reviewer))
  )

  return reviewDeletedEvent
}
