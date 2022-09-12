import MainLogo from '@/components/svg/MainLogo';
import React from 'react';
import styled from 'styled-components';

const HeaderController = () => {
  return (
    <ScHeaderController>
      <ControlLogoSearch>
        <MainLogo />
        <SearchInput>
          <input placeholder="search any wine" />
        </SearchInput>
      </ControlLogoSearch>
    </ScHeaderController>
  );
};

const ScHeaderController = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
`;

const ControlLogoSearch = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.div`
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
`;

export default HeaderController;
