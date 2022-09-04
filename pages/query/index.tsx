import api from '@/api';
import { NextPage } from 'next';
import React from 'react';
import { useQuery } from 'react-query';

const QueryPage: NextPage = () => {
  const { data: { getWines }, isLoading } = useQuery(api.WINE, () => api.fetchWines());
  if (isLoading) return <div>Loading...</div>;

  return (
    <ul>
      {getWines.map(w => <li key={w._id}>{w.name}</li>)}
    </ul>
  );
};

export default QueryPage;
