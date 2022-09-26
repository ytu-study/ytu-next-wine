import React from "react";
import styled from "styled-components";
import GlobalStyle from "@/styles/global";
import { ThemeProvider } from "styled-components";
import { theme, containerWidth } from "@/styles/theme";
import useTheme from "@/hooks/useTheme";
import Header from "@/components/common/Header";

interface Props {
  children: React.ReactNode;
}

const LayoutProvider = ({ children }: Props) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <MainContainer>{children}</MainContainer>
      <ThemeButton onClick={() => toggleTheme()}>{isDarkMode ? "라이트" : "다크"}모드</ThemeButton>
    </ThemeProvider>
  );
};

const MainContainer = styled.main`
  ${containerWidth};
  min-height: 100vh;
  margin: 148px auto 80px;
`;

const ThemeButton = styled.button`
  position: fixed;
  left: 20px;
  bottom: 20px;
  padding: 5px 10px;
  color: var(--bg-main);
  background-color: var(--text-main);
  border: 1px solid black;
  border-radius: 5px;
  cursor: pointer;
`;

export default LayoutProvider;
