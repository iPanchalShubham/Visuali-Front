import React from "react";
import VideoDetails from "./videoDetails";

function Loading({ videoInfoData,loadingMessage,loadingValue }) {

  return (
    <div className="h-screen">
      <div className="flex flex-col space-y-5 justify-center h-full w-full items-center my-auto">
      
    <VideoDetails videoInfoData={videoInfoData}/>
    <h1 className="font-bold italic text-lg text-gray-700 text-center">{loadingMessage}</h1>
    <progress className="progress progress-accent w-56" value={`${loadingValue}`} max="100"></progress>
      </div>
    </div>
  );
}

export default Loading;
