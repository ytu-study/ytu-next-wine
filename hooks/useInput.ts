import { useState, useRef, useCallback } from "react";

interface OptionType {
  initValue?: string;
  validate?: string[];
}

interface ReturnType {
  value: string;
  setValue: (value: string) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: { valid: boolean };
}

const useInput = ({ initValue, validate }: OptionType): ReturnType => {
  const [value, setValue] = useState<string>(initValue || "");
  const [valid, setValid] = useState<boolean>(false);

  const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setValue(value);
    if (validate) setValid(true);
  }, []);

  return { value, setValue, onChange, isValid: { valid } };
};

export default useInput;
