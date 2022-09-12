import React, { PropsWithChildren, ReactElement, ReactNode } from 'react';

type CaseProps<T = unknown> = PropsWithChildren<{ when: T }>;
type SwitchProps = { children: ReactElement | ReactElement[]; fallback?: ReactNode };

class SwitchCaseNotFoundException extends Error {
  name: 'SwitchCaseNotFoundException';
  message = '<Switch.Case> Component not found.';
}

class SwitchCaseInvalidException extends Error {
  name: 'switchCaseInvalidException';
  message = 'Only <Switch.Case> Component is available.';
}

function isNotEmpty<T>(item?: T): boolean {
  if (!item) return false;
  if (Array.isArray(item)) return !!item.length;
  if (item.constructor === Object) return isNotEmpty(Object.keys(item));
  return true;
}

function Case<T>({ children }: CaseProps<T>) {
  return <>{children}</>;
}

/**
 * @example
 * <Switch fallback={<div>Fail</div>}>
 *   <Switch.Case when={true}>
 *     <div>1. true</div>
 *   </Switch.Case>
 *   <Switch.Case when={true}>
 *     <div>2. true</div>
 *   </Switch.Case>
 * </Switch>
 *
 * // result
 * <div>1. true</div>
 */
export function Switch({ children, fallback }: SwitchProps) {
  const matchChildren = (Array.isArray(children) ? children : [children]).find(element => {
    if (!element) throw new SwitchCaseNotFoundException();

    const component = element.type as { name: string };
    if (component.name !== Case.name) throw new SwitchCaseInvalidException();

    return isNotEmpty(element.props.when);
  });
  return <>{matchChildren ?? fallback}</>;
}

Switch.Case = Case;
