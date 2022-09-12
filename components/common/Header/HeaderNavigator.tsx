import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const links = [
  { text: 'Wines', path: '/list' },
  { text: 'Grapes', path: '/list' },
  { text: 'Query', path: '/query' },
  { text: 'Detail', path: '/detail/dd' },
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
    /* color: ${({ theme }) => theme.text.subTitle}; */
  }
`;

export default HeaderNavigator;
