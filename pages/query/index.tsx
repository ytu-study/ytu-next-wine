import { useGetWinesQuery } from '@/generated/reactQuery';
import { NextPage } from 'next';
import React from 'react';

const QueryPage: NextPage = () => {
  const { data, isLoading } = useGetWinesQuery();
  if (isLoading) return <div>Loading...</div>;

  return (
    <ul>
      {data?.getWines.map(w => (
        <li key={w._id}>{w.name}</li>
      ))}
    </ul>
  );
};

export default QueryPage;
