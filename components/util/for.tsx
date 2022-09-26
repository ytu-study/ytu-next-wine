import React, { ReactNode } from "react";

type EachObject = { readonly [P: string]: unknown };
type EachArray = readonly unknown[];
type Union<T> = T extends EachArray ? (T extends readonly (infer R)[] ? R : never) : T extends EachObject ? Union<Entries<T>> : never;

type ForProps<T extends EachObject | EachArray, U extends Union<T>> = {
  each?: T;
  children(item: U, index: number, raw: T): ReactNode;
};

function isEachArray(each: unknown): each is EachArray {
  return Array.isArray(each);
}

/**
 * @example
 * - Object
 * const item = { id: 1, name: "item" };
 * <For each={item}>
 *   {([key, value]: ["id", 1] | ["name", "item"], index: number, raw: { id: 1, name: "item" }) => (
 *     <div>{key}: {value}</div>
 *   )}
 * </For>
 *
 * - Array
 * const items = [{ id: 1, name: "item1" }, { id: 2, name: "item2" }];
 * <For each={items}>
 *   {(item: { id: number, name: string }, index: number, raw: {id: number, name: string}[]) => (
 *     <div>id: {item.id}</div>
 *     <div>name: {item.name}</div>
 *   )}
 * </For>
 */
export default function For<Raw extends EachObject | EachArray, Item extends Union<Raw>>({ children, each }: ForProps<Raw, Item>) {
  if (!each) return null;
  if (isEachArray(each)) return <>{each.map((item, index, raw) => children(item as Item, index, raw as Raw))}</>;
  return <>{Object.entries(each).map((item, index, raw) => children(item as Item, index, raw as unknown as Raw))}</>;
}
