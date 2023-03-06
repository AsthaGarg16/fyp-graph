import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  DonateDetails,
  FollowerAdded,
  FollowerRemoved,
  ProfileUpdated,
  WalletConnected
} from "../generated/Users/Users"

export function createDonateDetailsEvent(
  user: Address,
  amt: BigInt,
  paytoken: Address
): DonateDetails {
  let donateDetailsEvent = changetype<DonateDetails>(newMockEvent())

  donateDetailsEvent.parameters = new Array()

  donateDetailsEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  donateDetailsEvent.parameters.push(
    new ethereum.EventParam("amt", ethereum.Value.fromUnsignedBigInt(amt))
  )
  donateDetailsEvent.parameters.push(
    new ethereum.EventParam("paytoken", ethereum.Value.fromAddress(paytoken))
  )

  return donateDetailsEvent
}

export function createFollowerAddedEvent(
  creator: Address,
  follower: Address
): FollowerAdded {
  let followerAddedEvent = changetype<FollowerAdded>(newMockEvent())

  followerAddedEvent.parameters = new Array()

  followerAddedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  followerAddedEvent.parameters.push(
    new ethereum.EventParam("follower", ethereum.Value.fromAddress(follower))
  )

  return followerAddedEvent
}

export function createFollowerRemovedEvent(
  creator: Address,
  follower: Address
): FollowerRemoved {
  let followerRemovedEvent = changetype<FollowerRemoved>(newMockEvent())

  followerRemovedEvent.parameters = new Array()

  followerRemovedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )
  followerRemovedEvent.parameters.push(
    new ethereum.EventParam("follower", ethereum.Value.fromAddress(follower))
  )

  return followerRemovedEvent
}

export function createProfileUpdatedEvent(
  user: Address,
  infoUri: string
): ProfileUpdated {
  let profileUpdatedEvent = changetype<ProfileUpdated>(newMockEvent())

  profileUpdatedEvent.parameters = new Array()

  profileUpdatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  profileUpdatedEvent.parameters.push(
    new ethereum.EventParam("infoUri", ethereum.Value.fromString(infoUri))
  )

  return profileUpdatedEvent
}

export function createWalletConnectedEvent(
  user: Address,
  infoUri: string
): WalletConnected {
  let walletConnectedEvent = changetype<WalletConnected>(newMockEvent())

  walletConnectedEvent.parameters = new Array()

  walletConnectedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  walletConnectedEvent.parameters.push(
    new ethereum.EventParam("infoUri", ethereum.Value.fromString(infoUri))
  )

  return walletConnectedEvent
}
