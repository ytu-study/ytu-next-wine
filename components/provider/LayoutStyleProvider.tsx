import React from "react";
import styled from "styled-components";
import GlobalStyle from "@/styles/global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "@/styles/theme";
import useTheme from "@/hooks/useTheme";
import Header from "@/components/common/Header";

interface Props {
  children: React.ReactNode;
}

const LayoutStyleProvider = ({ children }: Props) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <ThemeToggleButton onClick={() => toggleTheme()}>
        다크모드
      </ThemeToggleButton>
      <Header />
      {children}
    </ThemeProvider>
  );
};

const ThemeToggleButton = styled.button`
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

export default LayoutStyleProvider;
