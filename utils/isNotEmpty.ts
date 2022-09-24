import isObject from 'lodash/isObject';

export const isNotEmpty = <T>(item?: T): boolean => {
  if (!item) return false;
  if (Array.isArray(item)) return !!item.length;
  if (isObject(item)) return isNotEmpty(Object.keys(item));
  return true;
};
