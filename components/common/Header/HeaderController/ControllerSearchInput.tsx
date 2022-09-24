import React, { useState } from "react";
import styled from "styled-components";
import BaseInput, { ScBaseInput } from "@/components/common/input/BaseInput";
import { IconSearchGray } from "@/assets/icon";

export default function HeaderSearchInput() {
  const [showResult, setShowResult] = useState<boolean>(false);

  const updateSearch = (value: string) => {
    setShowResult(!!value);
  };

  return (
    <ScHeaderSearchInput>
      <button>
        <IconSearchGray />
      </button>
      <BaseInput onChange={updateSearch} />
      {showResult && (
        <>
          <Results />
          <Background onClick={() => setShowResult(false)} />
        </>
      )}
    </ScHeaderSearchInput>
  );
}

const ScHeaderSearchInput = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 300px;
  height: 40px;
  margin-left: 40px;
  padding: 4px 20px 4px 48px;
  border-radius: 20px;
  border: var(--border-second);
  z-index: 100;

  button {
    position: absolute;
    left: 16px;
    top: 7px;
    width: 15px;
    height: 15px;
  }

  ${ScBaseInput} {
    width: 100%;
    height: 100%;
  }
`;

const Results = styled.div`
  position: absolute;
  left: 0;
  top: 120%;
  width: 100%;
  height: 400px;
  background-color: var(--bg-second);
  box-shadow: 1px 1px 5px 3px #a7a7a7;
  border-radius: 4px;
  z-index: 1;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: -1;
`;
