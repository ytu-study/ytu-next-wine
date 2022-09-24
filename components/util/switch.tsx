import { isNotEmpty } from '@/utils/isNotEmpty';
import React, { JSXElementConstructor, ReactElement, ReactNode } from 'react';

type SwitchProps = { children: ReactNode | ReactNode[]; fallback?: ReactNode; multiple?: boolean };
type CaseProps<T> = Pick<SwitchProps, 'children'> & { when: T };

class SwitchCaseNotFoundException extends Error {
  name = 'SwitchCaseNotFoundException';
  message = '<Switch.Case> Component not found.';
}

class SwitchCaseInvalidException extends Error {
  name = 'switchCaseInvalidException';
  message = 'Only <Switch.Case> Component is available.';
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
export function Switch({ multiple, fallback, children }: SwitchProps) {
  const matchChildren = (Array.isArray(children) ? children : [children])[multiple ? 'filter' : 'find'](el => {
    if (!el) throw new SwitchCaseNotFoundException();

    const { type, ...element } = el as ReactElement<CaseProps<boolean>, JSXElementConstructor<CaseProps<boolean>>>;
    if (type.name !== Case.name) throw new SwitchCaseInvalidException();

    return isNotEmpty(element.props.when);
  });
  return <>{matchChildren ?? fallback}</>;
}

Switch.Case = Case;
