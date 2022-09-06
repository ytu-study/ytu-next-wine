import React from 'react';

type ForProps<T extends unknown[], U extends T extends (infer R)[] ? R : never> = {
  each: readonly U[];
  children(item: U, index: number, array: readonly U[]): unknown;
};

export default function For<T extends unknown[], U extends T extends (infer R)[] ? R : never>({ children, each }: ForProps<T, U>) {
  return <>{each.map(children)}</>;
}
