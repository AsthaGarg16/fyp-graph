import {
  DonateDetails as DonateDetailsEvent,
  FollowerAdded as FollowerAddedEvent,
  FollowerRemoved as FollowerRemovedEvent,
  ProfileUpdated as ProfileUpdatedEvent,
  WalletConnected as WalletConnectedEvent
} from "../generated/Users/Users"
import {
  DonateDetails,
  FollowerAdded,
  FollowerRemoved,
  ProfileUpdated,
  WalletConnected
} from "../generated/schema"

export function handleDonateDetails(event: DonateDetailsEvent): void {
  let entity = new DonateDetails(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.amt = event.params.amt
  entity.paytoken = event.params.paytoken

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFollowerAdded(event: FollowerAddedEvent): void {
  let entity = new FollowerAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.creator = event.params.creator
  entity.follower = event.params.follower

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFollowerRemoved(event: FollowerRemovedEvent): void {
  let entity = new FollowerRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.creator = event.params.creator
  entity.follower = event.params.follower

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProfileUpdated(event: ProfileUpdatedEvent): void {
  let entity = new ProfileUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.infoUri = event.params.infoUri

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWalletConnected(event: WalletConnectedEvent): void {
  let entity = new WalletConnected(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.infoUri = event.params.infoUri

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
