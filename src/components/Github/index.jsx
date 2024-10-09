import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Github = () => {
  const { username } = useParams();
  const data = useLoaderData()

  return (
    <>
      <div className="text-3xl p-5 uppercase">Github: {username}</div>
      <span>{data?.followers}</span>
    </>
  );
};

export default Github;

export const gitHubDataFetcher = async ({params}) => {
  const data = await fetch(`https://api.github.com/users/${params.username}`);
  return await data.json();
};
