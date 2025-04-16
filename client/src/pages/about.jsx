function About() {
  return (
    <div className="text-center p-4 sm:p-6 md:p-10 text-white bg-gradient-to-r from-blue-600 to-red-500 min-h-screen flex flex-col items-center font-sans">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6 drop-shadow-lg">
        About Us
      </h1>

      <div className="backdrop-blur bg-opacity-20 shadow-2xl rounded-xl w-full max-w-6xl flex flex-col lg:flex-row gap-6">
        <nav className="w-full lg:w-1/3 xl:w-1/4 bg-opacity-30 border-2 border-white border-opacity-50 p-4 sm:p-6 rounded text-left">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 text-white drop-shadow-md">
            Related Links
          </h2>
          <ul className="space-y-2 text-left">
            {[
              { href: "#mission", label: "Our Mission" },
              { href: "#values", label: "Our Values" },
              { href: "#vision", label: "Our Vision" },
              { href: "#history", label: "Our History" },
              { href: "#theme", label: "Theme of the Year" },
            ].map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block px-4 py-2 rounded transition-all duration-300 text-white hover:bg-white hover:text-purple-900 hover:shadow-md active:bg-white active:text-purple-900 active:shadow-md"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        {/* Text Section */}
        <div className="flex-1 text-left p-4 sm:p-6">
          <p
            id="mission"
            className="text-sm sm:text-base md:text-lg leading-relaxed mb-4"
          >
            Welcome to our church! We are a global community of believers
            dedicated to sharing the love of Christ and building a strong
            spiritual foundation. Learn more about our mission, leadership, and
            the impact we strive to make in the world.
          </p>
          <p
            id="values"
            className="text-sm sm:text-base md:text-lg leading-relaxed mb-4"
          >
            Our values are rooted in faith, community, and service. We believe
            in fostering a nurturing environment where everyone feels welcomed.
          </p>
          <p
            id="vision"
            className="text-sm sm:text-base md:text-lg leading-relaxed mb-4"
          >
            Our vision is to be a beacon of hope and spiritual growth, inspiring
            individuals to live out their faith with purpose.
          </p>
          <p
            id="history"
            className="text-sm sm:text-base md:text-lg leading-relaxed mb-4"
          >
            Since our founding, we have impacted lives worldwide through
            worship, outreach, and discipleship.
          </p>
          <p
            id="theme"
            className="text-sm sm:text-base md:text-lg leading-relaxed mb-4"
          >
            Theme of the Year: "Walking in Faith" - Hebrews 11:1. Join us as we
            explore how to live by faith in every aspect of life.
          </p>
        </div>

        {/* Related Links Section */}
      </div>
    </div>
  );
}

export default About;
