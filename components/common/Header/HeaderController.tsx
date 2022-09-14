import MainLogo from "@/components/svg/MainLogo";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import BaseRefInput, { ScBaseRefInput } from "../input/BaseRefInput";

const HeaderController = () => {
  const inputRef = useRef(null);

  return (
    <ScHeaderController>
      <ControlLogoSearch>
        <Link href="/">
          <MainLogo />
        </Link>

          <BaseRefInput onSubmit={(v) => console.log('v', v)} placeholder="search any wine">hi</BaseRefInput>

      </ControlLogoSearch>
    </ScHeaderController>
  );
};

const ScHeaderController = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  ${ScBaseRefInput} {
    width: 300px;
  height: 40px;
  margin-left: 40px;
  padding: 4px 0 4px 48px;
  border-radius: 20px;
  border: var(--border-second);

  input {
    width: 100%;
    height: 32px;
  }}
`;

const ControlLogoSearch = styled.div`
  display: flex;
  align-items: center;
`;

/* const SearchInput = styled(ScBaseRefInput)`
  width: 300px;
  height: 40px;
  margin-left: 40px;
  padding: 4px 0 4px 48px;
  border-radius: 20px;
  border: var(--border-second);

  input {
    width: 100%;
    height: 32px;
  }
`; */

export default HeaderController;
