import MainLogo from "@/components/svg/MainLogo";
import Link from "next/link";
import React, { useRef } from "react";
import styled from "styled-components";
import BaseInput, { ScBaseInput } from "@/components/common/input/BaseInput";

const HeaderController = () => {
  return (
    <ScHeaderController>
      <ControlLogoSearch>
        <Link href="/">
          <MainLogo />
        </Link>
        <BaseInput updateValue={v => console.log(v)} />
      </ControlLogoSearch>
    </ScHeaderController>
  );
};

const ScHeaderController = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;

  ${ScBaseInput} {
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
  }
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
