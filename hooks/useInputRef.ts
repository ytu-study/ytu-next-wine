import React, { useRef, useState } from 'react'

interface ReturnType {
  inputRef: React.RefObject<HTMLInputElement>;
  inputValue: string;
}

const useInputRef = (): ReturnType => {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputValue = inputRef?.current.value || '';

  return { inputRef, inputValue }
}

export default useInputRef