export enum jsonType {
  Entity,
  Item,
  Block,
}

export function checkType(type?: jsonType) {
  switch (type) {
    case jsonType.Block:
      break;
    case jsonType.Entity:
      break;
    case jsonType.Item:
      break;
  }
}
