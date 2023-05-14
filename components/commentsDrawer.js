"use-client";
import React, { useState } from "react";

function CommentsDrawer({ drawerState, drawerHandler, insight }) {
  console.log(drawerState);

  return (
    // main wrapper
    <div
      className={` shadow-xl absolute top-0 z-20 bg-white w-full rounded-b-3xl  ${
        drawerState
          ? "ease-in-out duration-500 translate-y-[0%]"
          : "ease-in-out duration-500 -translate-y-[200%]"
      }`}
    >
      {/* Content */}

      <div className="px-6 space-y-4 text-sm  text-gray-500 dark:text-gray-400 overflow-y-auto max-h-60 h-60">
        {insight?.comments?.map((comment, i) => (
          <p className="font-medium text-lg" key={i}>
            👉
            {comment}
          </p>
        ))}
      </div>
      {/* Heading */}
      <div className={"flex justify-between w-full "}>
        {/* Heading */}
        <h5
          id="drawer-bottom-label"
          className="items-center py-5 underline bold  shadow-inner w-full text-center text-lg font-semibold text-gray-500 dark:text-gray-400 "
        >
          Comments classified by{" "}
          <span>
            <i>"{insight?.emotionName}"</i>
          </span>
          {"  "} emotion
        </h5>
        {/* Close button */}
        <button type="button" className="" onClick={() => drawerHandler()}>
          {/* SVG */}
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>

          {/* <span className="sr-only">Close menu</span> */}
        </button>
      </div>
    </div>
  );
}

export default CommentsDrawer;
