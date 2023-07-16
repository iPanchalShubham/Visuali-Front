"use client";
import React, { useEffect, useState } from "react";
import Visualization from "../../components/visualization.js";
import Loading from "@/components/loading.js";

import axios from "axios";
function Page({ params }) {
  const id = params.vizId;
  const [data, setData] = useState();
  const [videoInfoData, setVideoInfoData] = useState();
  const [loadingData, setLoadingData] = useState({loadingMessage:"",loadingValue:0});
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
    setVideoInfoData(response.data);
  };
  
  const fetchEmotions = async () => {
    const res = await fetch("https://aihackfest-back.onrender.com/video/viz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id
      })
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const reader = response.body.getReader();

        async function readStream() {
          return await reader.read().then(({ done, value }) => {
            if (done) {
              console.log("Stream reading complete");
              return;
            }

            const chunk = new TextDecoder("utf-8").decode(value);
            console.log("Received raw chunk:", chunk);

            const parsedChunk = JSON.parse(chunk);
            console.log("Received chunk:", parsedChunk);
            // Process the received chunk
            if (parsedChunk?.type == "loading") {
              setLoadingData({loadingMessage:parsedChunk.message,loadingValue:parsedChunk.value});
            } else {
              setData(parsedChunk);
            }
            // Continue reading the stream
            return readStream();
          });
        }

        return readStream();
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle any errors that occur during the request
      });
    
    // if (json.status === 200) {
    //   setData(json);
    // } else {
    //   alert(
    //     "Either the video contains too many comments or the video does not exist. Please try again later."
    //   );
    // }
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
          <Loading
            videoInfoData={videoInfoData}
            loadingMessage={loadingData.loadingMessage}
            loadingValue={loadingData.loadingValue}

          />
        </>
      )}
    </div>
  );
}

export default Page;
