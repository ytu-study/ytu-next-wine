import Test from '@/components/Test';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';

const Div = styled.div`
  color: blue;
`

const Home: NextPage = () => {
  return (
    <Div>
      Big Wine - created by Next.js<Test></Test>
    </Div>
  );
};

export default Home;
