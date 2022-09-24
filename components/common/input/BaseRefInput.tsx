import React, { PropsWithChildren, useRef } from "react";
import styled from "styled-components";

interface PropsType {
  onSubmit?: (value: string | undefined) => void;
  type?: string;
  placeholder?: string;
}

const BaseRefInput = ({ children, onSubmit, ...props }: PropsWithChildren<PropsType>) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (onSubmit) onSubmit(ref?.current?.value || "");
  };

  return (
    <ScBaseRefInput onSubmit={handleSubmit}>
      {children && <button type="submit">{children}</button>}
      <input {...props} ref={ref} />
    </ScBaseRefInput>
  );
};

export const ScBaseRefInput = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default BaseRefInput;
