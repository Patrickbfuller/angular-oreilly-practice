export class Room {
  // id, name, location, capacity
  id: number;
  name: string;
  location: string;
  capacities = new Array<LayoutCapacity>();
}

export class LayoutCapacity {
  // layout, capacity
  layout: Layout;
  capacity: number;
}

export enum Layout {
  THEATER = 'Theater',
  USHAPE = 'U-Shape',
  BOARD = 'Board Meeting'
}
