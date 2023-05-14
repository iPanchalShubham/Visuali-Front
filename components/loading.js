import React from "react";

function Loading() {
  return (
    <div className="h-screen">
      <div className="flex flex-col space-y-5 justify-center h-full w-full items-center my-auto">
    <h1 className="font-bold italic text-lg text-gray-700">Analsying data...</h1>
        <progress className="progress w-56"></progress>
      </div>
    </div>
  );
}

export default Loading;
