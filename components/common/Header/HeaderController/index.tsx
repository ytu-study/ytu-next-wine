import MainLogo from "@/components/svg/MainLogo";
import Link from "next/link";
import React, { useRef } from "react";
import styled from "styled-components";
import HeaderSearchInput from "./ControllerSearchInput";

const HeaderController = () => {
  return (
    <ScHeaderController>
      <LogoSearch>
        <Link href="/">
          <MainLogo />
        </Link>
        <HeaderSearchInput />
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

export default HeaderController;
