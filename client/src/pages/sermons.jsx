import React from "react";

function Sermons() {
  return (
    <div className="text-center p-8 text-white-800 bg-gradient-to-r from-blue-500 to-red-500 min-h-screen flex flex-col items-center ">
      <h1 className="text-4xl font-bold mb-10">Sermons</h1>
      <div className=" w-full max-w-4xl mt-6 justify-center items-center">
        <div className="grid grid-flow-col grid-rows-1 gap-10 justify-center ">
          <figure className=" flex w-full justify-center">
            <iframe
              className="rounded-2xl w-full h-auto aspect-w-16 aspect-h-9"
              src="https://www.youtube.com/embed/C4luLE78-j8?si=icOEocfVC8i7HVUN"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <figcaption></figcaption>
          </figure>
          <figure className="flex justify-center w-full">
            <iframe
              className="rounded-2xl w-full h-auto aspect-w-16 aspect-h-9"
              src="https://www.youtube.com/embed/6LhCGbPjeh8?si=MUq7UPACzP9wXcYk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <figcaption></figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Sermons;

