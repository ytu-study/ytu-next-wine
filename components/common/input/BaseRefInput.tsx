import React, { forwardRef, PropsWithChildren, useRef } from 'react'
import styled from 'styled-components';

interface PropsType {
  onSubmit: (value: string) => void;
  type?: string;
  placeholder?: string;
}

const BaseRefInput = ({ children, onSubmit, ...props }: PropsWithChildren<PropsType>) => {
  const ref = useRef(null);

  return (
    <ScBaseRefInput>
      {children && <button onClick={() => onSubmit(ref.current.value)}>{children}</button>}
      <input {...props} ref={ref} />
    </ScBaseRefInput>
  )
};

const ScBaseRefInput = styled.div`

`;

// BaseRefInput.displayName = "BaseRefInput";

export default BaseRefInput