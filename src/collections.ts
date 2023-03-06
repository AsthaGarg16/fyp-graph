import {
  AddedToCollection as AddedToCollectionEvent,
  AddedToWatchlist as AddedToWatchlistEvent,
  CollectionCreated as CollectionCreatedEvent,
  CollectionsOwnershipTransferred as CollectionsOwnershipTransferredEvent,
  RemovedFromWatchlist as RemovedFromWatchlistEvent,
} from "../generated/Collections/Collections";
import {
  AddedToCollection,
  AddedToWatchlist,
  CollectionCreated,
  CollectionsOwnershipTransferred,
  RemovedFromWatchlist,
} from "../generated/schema";

export function handleAddedToCollection(event: AddedToCollectionEvent): void {
  let entity = new AddedToCollection(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.name = changetype<string>(event.params.name);
  entity.nftAddress = event.params.nftAddress;
  entity.tokenId = event.params.tokenId;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleAddedToWatchlist(event: AddedToWatchlistEvent): void {
  let entity = new AddedToWatchlist(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.name = changetype<string>(event.params.name);
  entity.watcher = event.params.watcher;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleCollectionCreated(event: CollectionCreatedEvent): void {
  let entity = new CollectionCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.name = changetype<string>(event.params.name);
  entity.logoImage = event.params.logoImage;
  entity.bannerImage = event.params.bannerImage;
  entity.earnings = event.params.earnings;
  entity.category = event.params.category;
  entity.metaInfoUri = event.params.metaInfoUri;
  entity.creator = event.params.creator;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleCollectionsOwnershipTransferred(
  event: CollectionsOwnershipTransferredEvent
): void {
  let entity = new CollectionsOwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.previousOwner = event.params.previousOwner;
  entity.newOwner = event.params.newOwner;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleRemovedFromWatchlist(
  event: RemovedFromWatchlistEvent
): void {
  let entity = new RemovedFromWatchlist(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.name = changetype<string>(event.params.name);
  entity.watcher = event.params.watcher;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
