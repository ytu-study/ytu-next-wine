import { useFetchWines } from '@/hooks/apis/wine';
import { NextPage } from 'next';
import React from 'react';

const QueryPage: NextPage = () => {
  const { data, isLoading } = useFetchWines();
  if (isLoading) return <div>Loading...</div>;

  return (
    <ul>
      {data.map(w => <li key={w._id}>{w.name}</li>)}
    </ul>
  );
};

export default QueryPage;
