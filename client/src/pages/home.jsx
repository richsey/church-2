import { useState, useEffect } from "react";
import React from "react";

function Home() {
  // Random scripture
  const [scripture, setScripture] = useState(null);
  const [error, setError] = useState(null);

  const fetchScripture = async () => {
    try {
      const response = await fetch(
        "https://church-2-81pk.onrender.com/random-verse",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setScripture(data); // Save it to React state
      setError(null); // Reset error if the fetch is successful
    } catch (error) {
      console.error("Error fetching scripture:", error);
      setError("Failed to fetch scripture. Please try again later.");
    }
  };

  useEffect(() => {
    fetchScripture();
    const interval = setInterval(fetchScripture, 1 * 60 * 1000); // Fetch scripture every 5 minutes
    return () => clearInterval(interval); // Clean up interval
  }, []);

  return (
    <div className="text-center text-white bg-gradient-to-r from-blue-500 to-red-500 w-full min-h-screen flex flex-col items-center px-4 sm:px-6 md:px-8">
      {error && (
        <div className="mt-6 text-red-600">
          <p>{error}</p>
        </div>
      )}
      <section className="relative w-full text-white py-16 px-4 sm:px-6 md:px-8 text-center shadow-lg">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Welcome to Our Church
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl mx-auto">
          A place where you belong, grow in faith, and experience the love of
          God.
        </p>

        <button className="bg-white text-purple-700 px-6 py-3 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition duration-300 shadow-lg">
          Plan a Visit
        </button>
      </section>

      <div className="justify-center flex w-full max-w-3xl mb-30">
        {scripture && (
          <div
            className="mt-6 bg-white p-4 sm:p-6 rounded shadow-md text-gray-800 w-full"
            aria-live="polite"
          >
            <h2 className="text-xl sm:text-2xl font-bold">Scripture</h2>
            <p className="mt-2 italic text-sm sm:text-base">
              "{scripture.verse}"
            </p>
            <p className="italic text-sm sm:text-base">
              -{scripture.reference}
            </p>
            <p className="mt-2 text-gray-500 text-xs sm:text-sm">
              Click below for another verse!
            </p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-white hover:text-blue-600 transition duration-300 shadow-lg"
              onClick={fetchScripture}
            >
              Next
            </button>
            <div className="justify-center flex w-full max-w-5xl">
              <img
                className="rounded mt-6 w-full h-auto object-cover mb-1"
                src="./images/banner.jpg"
                alt="Church background"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
