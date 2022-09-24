import { useState, useCallback } from "react";

interface OptionType {
  initValue?: string;
  validate?: string[];
}

interface ReturnType {
  value: string;
  setValue: (value: string) => void;
  onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: { valid: boolean };
}

const useInput = ({ initValue, validate }: OptionType): ReturnType => {
  const [value, setValue] = useState<string>(initValue || "");
  const [valid, setValid] = useState<boolean>(false);

  const onChangeInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      if (validate) setValid(true);
    },
    [initValue],
  );

  return { value, setValue, onChangeInput, isValid: { valid } };
};

export default useInput;
