import { containerWidth } from "@/styles/theme";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const links = [
  { text: "Query", path: "/query" },
  { text: "Detail", path: "/detail/dd" },
];

const Header = () => {
  return (
    <ScHeader>
      {links.map((link) => (
        <Link href={link.path} key={link.text}>
          {link.text}
        </Link>
      ))}
    </ScHeader>
  );
};

const ScHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 128px;
  background-color: ${({ theme }) => theme.background.main};
  border-bottom: ${({ theme }) => theme.border.main};

  & > a {
    margin-right: 20px;
  }
`;

export default Header;
