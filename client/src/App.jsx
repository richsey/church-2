import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import About from "./pages/about";
import Sermons from "./pages/sermons";
import Contact from "./pages/contact";
import Events from "./pages/events";

function App() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-r from-blue-500 to-red-500 text-white">
      {/* NavBar */}
      <nav className="fixed top-0 w-full bg-white shadow-lg p-4 flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 z-50">
        {/* Logo and Title */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center space-x-4">
            <img src="./images/gec-logo.png" alt="Logo" className="w-14 h-14" />
            <h1 className="text-xl md:text-2xl font-bold text-black">
              Global Evangelical Church
            </h1>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="md:hidden focus:outline-none text-gray-700"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>

        {/* Navigation links */}
        <div
          className={`flex-col md:flex md:flex-row md:space-x-6 text-sm w-full md:w-auto ${
            showMenu ? "flex" : "hidden"
          } md:flex`}
        >
          <Link
            to="/"
            className="text-gray-600 hover:text-blue-500 transition py-2 md:py-0"
          >
            Home
          </Link>
          <Link
            to="/sermons"
            className="text-gray-600 hover:text-blue-500 transition py-2 md:py-0"
          >
            Sermons
          </Link>
          <Link
            to="/events"
            className="text-gray-600 hover:text-blue-500 transition py-2 md:py-0"
          >
            Events
          </Link>
          <Link
            to="/about"
            className="text-gray-600 hover:text-blue-500 transition py-2 md:py-0"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-blue-500 transition py-2 md:py-0"
          >
            Contact
          </Link>
        </div>
      </nav>
      {/* Main content */}
      <main className="mt-[89px] ">
        <Routes>
          {/* Define routes for different pages */}
          <Route path="/" element={<Home />} />
          <Route path="/sermons" element={<Sermons />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="fixed bottom-0 w-full bg-blue-900">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full h-auto sm:h-[100px] bg-gray-700 px-6 sm:px-20 py-6 sm:py-0 space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-4">
            <img src="./images/gec-logo.png" alt="Logo" className="w-18 h-16" />
            <div className="text-gray-300 text-sm">
              <p>© 2020 Global Evangelical Church</p>
              <p>All rights reserved.</p>
              <p>Contact Us</p>
            </div>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 transition-all duration-300"
            >
              <i className="fa-brands fa-facebook-f text-xl"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-600 transition-all duration-300"
            >
              <i className="fa-brands fa-instagram text-xl"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
