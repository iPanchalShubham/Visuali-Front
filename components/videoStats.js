import Image from "next/image";
import React from "react";
import dummyImg from "../public/dummy_img.jpg";
function VideoStats({ videoInfoData }) {
  // what does toFixed() function do
  const statValFormatter = (num) => {
    if (num > 999999999) {
      return (num / 1000000000).toFixed(1) + "B";
    } else if (num > 999999) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num > 999) {
      return (num / 1000).toFixed(1) + "K";
    } else {
      return num;
    }
  };
  return (
    <div className="">
      <div className="stats  md:stats-horizontal stats-vertical md:w-full w-[91vw] shadow rounded">
        <div className="stat">
          <div className="stat-figure text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              ></path>
            </svg>
          </div>
          <div className="stat-title ">Total Likes</div>
          <div className="stat-value text-primary ">
            {statValFormatter(videoInfoData.stats.likes)}
          </div>
        </div>

        <div className="stat">
          <div className="stat-figure text-secondary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-8 h-8 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              ></path>
            </svg>
          </div>
          <div className="stat-title">Page Views</div>
          <div className="stat-value text-secondary">
            {statValFormatter(videoInfoData.stats.views)}
          </div>
        </div>

        {/* <div className="stat">
          <div className="stat-figure text-secondary">
            <div className="avatar ">
              <div className="w-16 rounded-full">
                <Image src={dummyImg} alt={""} width={100} height={100} />
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default VideoStats;
