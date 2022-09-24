import React, { useRef } from "react";
import styled from "styled-components";

type Props = {
  children: React.ReactNode | React.ReactNode[];
  message: React.ReactNode | string;
  className?: string;
};

const SingleTooltip = ({ children, message, className }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);

  return (
    <ScSingleTooltip ref={ref} className={className}>
      {children}
      <p className="tooltip">{message}</p>
    </ScSingleTooltip>
  );
};

export const ScSingleTooltip = styled.span`
  position: relative;

  .tooltip {
    position: absolute;
    left: 0;
    top: 100%;
    visibility: hidden;
    min-width: 150px;
    min-height: 40px;
    padding: 15px;
    background-color: var(--bg-main);
    border-radius: 4px;
    z-index: 100;
    box-shadow: 1px 1px 5px 3px #f2f2f2;

    &:after {
      content: "";
      position: absolute;
      top: -8px;
      left: 3px;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-bottom: 8px solid var(--bg-main);
    }
  }

  &:hover {
    .tooltip {
      animation: hi 0.5s ease forwards;
    }
  }

  @keyframes hi {
    from {
      visibility: hidden;
      opacity: 0.4;
      transform: translateY(20px);
    }
    to {
      visibility: visible;
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export default SingleTooltip;
