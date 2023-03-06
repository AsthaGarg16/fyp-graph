import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { DonateDetails } from "../generated/schema"
import { DonateDetails as DonateDetailsEvent } from "../generated/Users/Users"
import { handleDonateDetails } from "../src/users"
import { createDonateDetailsEvent } from "./users-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let user = Address.fromString("0x0000000000000000000000000000000000000001")
    let amt = BigInt.fromI32(234)
    let paytoken = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newDonateDetailsEvent = createDonateDetailsEvent(user, amt, paytoken)
    handleDonateDetails(newDonateDetailsEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("DonateDetails created and stored", () => {
    assert.entityCount("DonateDetails", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "DonateDetails",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "user",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "DonateDetails",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amt",
      "234"
    )
    assert.fieldEquals(
      "DonateDetails",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "paytoken",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
