"use-client";

import Image from "next/image";
import React from "react";

function VideoDetails({ videoInfoData }) {
  return (
    <div className="w-full items-center justify-center flex mx-3 md:mx-0 ">
      {videoInfoData ? (
        <div className="flex justify-center w-screen flex-col">
          <div className=" text-center text-lg md:text-2xl font-bold text-gray-700 mb-5 text-ellipsis line-clamp-2 ">
            {videoInfoData.title}
          </div>
          <div className="relative h-64 w-96 mx-auto my-2 animate-pulse">
            <Image
              src={
                videoInfoData.thumbnails[videoInfoData.thumbnails.length - 1]
                  .url
              }
              alt={videoInfoData.title}
              fill={true}
              className="rounded"
            />
          </div>
        </div>
      ) : (
        ""
          /* <div
              role="status"
              class="flex items-center justify-center h-56 w-72 bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700"
            >
              <svg
                class="w-12 h-12 text-gray-200 dark:text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 384 512"
              >
                <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
              </svg>
            </div> */
        
      )}
    </div>
  );
}

export default VideoDetails;
