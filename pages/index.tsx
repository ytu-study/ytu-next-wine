import type { NextPage } from "next";
import styled from "styled-components";

const Div = styled.div`
  color: red;
`;

const Home: NextPage = () => {
  return <Div>Big Wine - created by Next.js</Div>;
};

export default Home;
