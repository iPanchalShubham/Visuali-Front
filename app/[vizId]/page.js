"use client";
import React, { useEffect, useState } from "react";
import Visualization from "../../components/visualization.js";
import Loading from "@/components/loading.js";
import { Toaster, toast } from "react-hot-toast";

function Page({ params }) {
  const id = params.vizId;
  const [data, setData] = useState();
  const fetchEmotions = async () => {
    const res = await fetch("https://aihackfest-back.onrender.com/video/viz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
      }),
    });
    const json = await res.json();
    if (json.status === 200) {
      toast.success(json.message);
      setData(json);
    } else {
      toast.error(json.message);
    }
  };
  useEffect(() => {
    fetchEmotions();
  }, []);

  return (
    <div>
      {data ? (
        <>
          <Toaster />
          <Visualization data={data} />{" "}
        </>
      ) : (
        <Loading />
      )}
    </div>
  );
}

export default Page;
