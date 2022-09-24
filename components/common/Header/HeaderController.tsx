import MainLogo from "@/components/svg/MainLogo";
import Link from "next/link";
import React, { useRef } from "react";
import styled from "styled-components";
import BaseInput, { ScBaseInput } from "@/components/common/input/BaseInput";
import { IconSearchGray } from "@/assets/icon";

const HeaderController = () => {
  return (
    <ScHeaderController>
      <LogoSearch>
        <Link href="/">
          <MainLogo />
        </Link>
        <SearchInput>
          <button>
            <IconSearchGray />
          </button>
          <BaseInput />
        </SearchInput>
      </LogoSearch>
    </ScHeaderController>
  );
};

const ScHeaderController = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
`;

const LogoSearch = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 300px;
  height: 40px;
  margin-left: 40px;
  padding: 4px 20px 4px 48px;
  border-radius: 20px;
  border: var(--border-second);

  button {
    position: absolute;
    left: 16px;
    top: 7px;
    width: 15px;
    height: 15px;
    cursor: pointer;
  }

  ${ScBaseInput} {
    width: 100%;
    height: 100%;
  }
`;

export default HeaderController;
