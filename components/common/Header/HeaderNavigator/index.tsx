import React from "react";
import styled from "styled-components";
import Link from "next/link";
import NavigatorTab from "./NavigatorTab";

const links = [
  { text: "Wines", path: "/list" },
  { text: "Grapes", path: "/list" },
  { text: "Query", path: "/query" },
  { text: "Detail", path: "/detail/dd" },
];

const HeaderNavigator = () => {
  return (
    <ScHeaderNavigator>
      {links.map(link => (
        <NavigatorTab path={link.path} key={link.text}>
          {link.text}
        </NavigatorTab>
      ))}
    </ScHeaderNavigator>
  );
};

const ScHeaderNavigator = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
`;

export default HeaderNavigator;
