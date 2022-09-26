import React from "react";
import styled from "styled-components";
import useInput from "@/hooks/useInput";

type Props = {
  initValue?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
};

const BaseInput = ({ placeholder, disabled = false, initValue, onChange, onFocus, onBlur }: Props) => {
  const { value, onChangeInput } = useInput({ initValue });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;
    onChangeInput(e);
    if (onChange) onChange(e.target.value);
  };

  const handleFocus = () => {
    if (onFocus) onFocus();
  };

  return <ScBaseInput placeholder={placeholder} value={value} onChange={handleChange} onFocus={handleFocus} onBlur={onBlur} disabled={disabled} />;
};

export const ScBaseInput = styled.input``;

export default BaseInput;
