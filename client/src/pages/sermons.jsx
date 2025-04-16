import React from "react";

function Sermons() {
  return (
    <div className="text-center p-8 text-white-800 bg-gradient-to-r from-blue-500 to-red-500 min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-10">Sermons</h1>
      <div className="w-full max-w-6xl flex flex-col gap-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <figure className="flex justify-center">
            <div className="w-full aspect-video">
              <iframe
                className="rounded-2xl w-full h-full"
                src="https://www.youtube.com/embed/C4luLE78-j8?si=icOEocfVC8i7HVUN"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <figcaption className="mt-2 text-sm text-white">
              Sermon 1
            </figcaption>
          </figure>

          <figure className="flex justify-center">
            <div className="w-full aspect-video">
              <iframe
                className="rounded-2xl w-full h-full"
                src="https://www.youtube.com/embed/6LhCGbPjeh8?si=MUq7UPACzP9wXcYk"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <figcaption className="mt-2 text-sm text-white">
              Sermon 2
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Sermons;
