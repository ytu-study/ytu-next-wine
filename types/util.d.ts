declare type Keys<T> = (keyof T)[];
declare type Values<T> = T[keyof T][];
declare type Entries<T> = {
  [P in keyof T]: [P, T[P]];
}[keyof T][];

interface ObjectConstructor {
  keys<T extends object>(o: T): Keys<T>;
  values<T extends object>(o: T): Values<T>;
  entries<T extends object>(o: T): Entries<T>;
}
