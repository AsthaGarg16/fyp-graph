import {
  AddLiked as AddLikedEvent,
  RemoveLiked as RemoveLikedEvent,
  ReviewAdded as ReviewAddedEvent,
  ReviewDeleted as ReviewDeletedEvent
} from "../generated/Reviews/Reviews"
import {
  AddLiked,
  RemoveLiked,
  ReviewAdded,
  ReviewDeleted
} from "../generated/schema"

export function handleAddLiked(event: AddLikedEvent): void {
  let entity = new AddLiked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.reviewer = event.params.reviewer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRemoveLiked(event: RemoveLikedEvent): void {
  let entity = new RemoveLiked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.reviewer = event.params.reviewer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReviewAdded(event: ReviewAddedEvent): void {
  let entity = new ReviewAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.reviewer = event.params.reviewer
  entity.content = event.params.content

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleReviewDeleted(event: ReviewDeletedEvent): void {
  let entity = new ReviewDeleted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.nftAddress = event.params.nftAddress
  entity.tokenId = event.params.tokenId
  entity.reviewer = event.params.reviewer

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
