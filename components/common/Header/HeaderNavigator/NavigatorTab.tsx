import styled from "styled-components";
import Link from "next/link";
import { PropsWithChildren } from "react";
import SingleTooltip, { ScSingleTooltip } from "@/components/container/SingleTooltip";

interface Props {
  path: string;
}

export default function NavigatorTab({ children, path }: PropsWithChildren<Props>) {
  return (
    <ScNavigatorTab>
      <SingleTooltip message="메뉴가 뜨는 화면">
        <Link href={path} passHref>
          <Nav>{children}</Nav>
        </Link>
      </SingleTooltip>
    </ScNavigatorTab>
  );
}

const ScNavigatorTab = styled.div`
  ${ScSingleTooltip} {
    .tooltip {
      top: calc(100% + 20px);
      width: 400px;
      height: 200px;
    }
  }
`;

const Nav = styled.a`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  margin-right: 20px;
  color: var(--text-subTitle);

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 15px;
    display: none;
    width: 100%;
    height: 2px;
    background-color: var(--text-second);
  }
  &:hover:after {
    display: block;
  }
`;
