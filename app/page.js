"use client";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [url, setUrl] = useState("");
  const [id, setId] = useState("");
  const [error, setError] = useState(false);
  const extractIdFromUrl = (url) => {
    try {
      // extract id from "https://www.youtube.com/watch?v=M-ZH3psUbfU"
      setUrl(url);
      let pattern = url.match(/v=([^\&]+)/)[1];
      if (url.match(/v=([^\&]+)/)[1]) {
        setError(false);
        setId(pattern);
      }
      // const id = url.match(pattern);
    } catch (e) {
      setError(true);
    }
  };
  return (
    <main className="bg-white mt-32">
      <div className="w-full text-transparent text-center">
        <h1
          className="text-5xl font-extrabold leading-[1.3] text-black sm:text-4xl
 text-center "
        >
          Discover Insights
          <br className="max-md:hidden" /> AI-Powered Visualizations
        </h1>
        <p className="mt-6 text-lg text-gray-600 sm:text-xl text-center">
          Visuali is a powerful platform that helps you get to know your audience
          better.
        </p>

        <div className="mt-16 mx-auto w-full max-w-xl flex justify-center items-center flex-col gap-2">
          {/* Input */}
          <div className="relative w-full flex-center flex">
            <input
              type="text"
              placeholder="Enter the url"
              className={`block text-black w-full rounded-tl-lg rounded-bl-lg  bg-white py-2.5 pl-5 pr-12 text-sm shadow-lg font-medium  focus:outline-none ${
                error ? "border-red-600 border" : ""
              } `}
              onChange={(e) => extractIdFromUrl(e.target.value)}
              value={url}
            />
            {/* go button */}
            <Link
              href={id ? `/${id}` : ""}
              className="btn border-red-600 rounded-tl-none rounded-bl-none ml-[-10] bg-gradient-to-r from-red-400  to-pink-600 border-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                />
              </svg>
            </Link>
          </div>
          {error ? (
            <div className=" bg-transparent text-red-600 border-none">
              Not a valid link
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </main>
  );
}
