import Test from '@/components/Test';
import type { NextPage } from 'next';
import styled from 'styled-components';

const Div = styled.div`
  color: red;
`

const Home: NextPage = () => {
  return (
    <Div>
      Big Wine - created by Next.js
      <Test></Test>
    </Div>
  );
};

export default Home;
