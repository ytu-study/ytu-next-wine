import For from '@/components/util/for';
import type { NextPage } from 'next';
import styled from 'styled-components';

const Div = styled.div`

`;

const Home: NextPage = () => {
  const forComponentExample = [
    { id: 1, name: 'forTest-1' },
    { id: 2, name: 'forTest-2' },
    { id: 3, name: 'forTest-3' },
  ];
  return (
    <Div>
      Big Wine - created by Next.js
      <For each={forComponentExample}>
        {(item, i) => (
          <div key={i}>
            {item.id}: {item.name}
          </div>
        )}
      </For>
    </Div>
  );
};

export default Home;
