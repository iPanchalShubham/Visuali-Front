"use client";
import React, { useEffect, useState } from "react";
import Visualization from "../../components/visualization.js";
import Loading from "@/components/loading.js";

import axios from "axios";
import VideoDetails from "@/components/videoDetails.js";

function Page({ params }) {
  const id = params.vizId;
  const [data, setData] = useState();
  const [videoInfoData, setVideoInfoData] = useState();

  const videoInfoRequestData = {
    method: "GET",
    url: "https://youtube138.p.rapidapi.com/video/details/",
    params: {
      id: id,
      hl: "en",
      gl: "US",
    },
    headers: {
      "X-RapidAPI-Key": "2218cbd39cmshd640f43b6f04d6bp13c21cjsn0412a3956de2",
      "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
    },
  };

  const fetchVideoData = async () => {
    const response = await axios.request(videoInfoRequestData);
    console.log(response.data);
    setVideoInfoData(response.data);
  };
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
      
      setData(json);
    } else {
      alert("Either the video contains too many comments or the video does not exist. Please try again later.");
    }
  };
  useEffect(() => {
    fetchVideoData();
    fetchEmotions();
  }, []);

  return (
    <div>
      {data && videoInfoData ? (
        <>
          
          <Visualization data={data} videoInfoData={videoInfoData} />{" "}
        </>
      ) : (
        <>
          <Loading videoInfoData={videoInfoData} />
        </>
      )}
    </div>
  );
}

export default Page;
