import api from "@/api";
import { NextPage } from "next";
import React from "react";
import { useQuery } from "react-query";

const QueryPage: NextPage = () => {
  const { data, isLoading } = useQuery(api.GET_WINES, () => api.fetchWines());
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
