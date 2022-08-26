import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';

const links = [
  { text: 'Query', path: '/query' },
  { text: 'Test', path: '/test' },
  { text: 'Detail', path: '/detail/dd' }
]

const Header = () => {
  return (
    <ScHeader>
      {links.map(link => <Link href={link.path} key={link.text}>{link.text}</Link>)}
    </ScHeader>
  )
}

const ScHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 20px;
  background-color: #f4f4f4;

  > a {
    margin-right: 20px;
  }
`

export default Header