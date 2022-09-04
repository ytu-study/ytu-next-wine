import Link from "next/link";
import React from "react";
import styled from "styled-components";

const links = [
  { text: "Query", path: "/query" },
  { text: "Test", path: "/test" },
  { text: "Detail", path: "/detail/6f76f835-390c-48e7-8cfd-9fdd7163c122" },
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
  height: 60px;
  padding: 20px;
  background-color: ${({ theme }) => theme.background.main};
  border-bottom: ${({ theme }) => theme.border.main};

  & > a {
    margin-right: 20px;
  }
`;

export default Header;
