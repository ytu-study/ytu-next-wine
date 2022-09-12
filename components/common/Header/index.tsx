import React from 'react';
import styled from 'styled-components';
import { containerWidth } from '@/styles/theme';
import HeaderController from './HeaderController';
import HeaderNavigator from './HeaderNavigator';

const Header = () => {
  return (
    <ScHeader>
      <HeaderContainer>
        <HeaderController />
        <HeaderNavigator />
      </HeaderContainer>
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
  border-bottom: var(--border-main);
`;

const HeaderContainer = styled.div`
  ${containerWidth};
  margin: 0 auto;
`;

export default Header;
