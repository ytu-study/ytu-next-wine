import React, { useRef } from 'react'

interface OptionType {
  
  placeholder?: string;
}



const BaseRefInput = ({ placeholder = '' }: OptionType) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <input placeholder={placeholder}/>
  )
}

export default BaseRefInput