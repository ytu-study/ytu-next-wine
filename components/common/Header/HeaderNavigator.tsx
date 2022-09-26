import React from "react";
import styled from "styled-components";
import Link from "next/link";

const links = [
  { text: "Wines", path: "/list" },
  { text: "Grapes", path: "/list" },
  { text: "Query", path: "/query" },
  { text: "Detail", path: "/detail/6f76f835-390c-48e7-8cfd-9fdd7163c122" },
];

const HeaderNavigator = () => {
  return (
    <ScHeaderNavigator>
      {links.map(link => (
        <Link href={link.path} key={link.text}>
          {link.text}
        </Link>
      ))}
    </ScHeaderNavigator>
  );
};

const ScHeaderNavigator = styled.div`
  display: flex;
  align-items: center;
  height: 64px;

  & > a {
    margin-right: 20px;
    color: var(--text-subTitle);
  }
`;

export default HeaderNavigator;
