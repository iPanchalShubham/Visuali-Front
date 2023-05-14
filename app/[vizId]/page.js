"use client";
import React, { useEffect, useState } from "react";
import Visualization from "../../components/visualization.js";
import Loading from "@/components/loading.js";

function Page({ params }) {
  const id = params.vizId;
  const [data, setData] = useState();
  const fetchEmotions = async () => {
    const res = await fetch("http://localhost:5000/video/viz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    const json = await res.json();
    setData(json);
  };
  useEffect(() => {
    fetchEmotions();
  }, []);

  return (
    <div>
      {data ? (
        <Visualization data={data} />
      ) : (
        <Loading/>      )}
    </div>
  );
}

export default Page;
