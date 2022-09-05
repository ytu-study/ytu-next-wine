import React from 'react';
import styled from 'styled-components';
import GlobalStyle from '@/styles/global';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, containerWidth } from '@/styles/theme';
import useTheme from '@/hooks/useTheme';
import Header from '@/components/common/Header';

interface Props {
  children: React.ReactNode;
}

const LayoutProvider = ({ children }: Props) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header />
      <MainContainer>{children}</MainContainer>
      <ThemeButton onClick={() => toggleTheme()}>{isDarkMode ? '라이트' : '다크'}모드</ThemeButton>
    </ThemeProvider>
  );
};

const MainContainer = styled.main`
  ${containerWidth};
  min-height: 100vh;
  margin: 0 auto;
`;

const ThemeButton = styled.button`
  position: fixed;
  left: 20px;
  bottom: 20px;
  padding: 5px 10px;
  color: ${({ theme }) => theme.background.main};
  background-color: ${({ theme }) => theme.text.main};
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
`;

export default LayoutProvider;
