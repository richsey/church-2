function Events() {
  return (
    <div className="text-center p-8 text-white-800 bg-gradient-to-r from-blue-500 to-red-500 min-h-screen flex flex-col items-centerp-8 ">
      <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>
      <div className="w-full mt-6 ">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
          <div className=" rounded-lg shadow-2xl p-4 hover:translate-1 transition duration-300">
            <h2 className="text-xl font-semibold">Youth Camp </h2>
            <p>Date: 2025-08-05</p>
            <p>Location: KNUST</p>
          </div>
          <div className=" rounded-lg shadow-2xl p-4 hover:translate-1 transition duration-300">
            <h2 className="text-xl font-semibold">Retreat</h2>
            <p>Date: 2025-10-29</p>
            <p>Location: Church Auditorium</p>
          </div>

          <div className=" rounded-lg shadow-2xl p-4 hover:translate-1 transition duration-300">
            <h2 className="text-xl font-semibold">Easter Picnic</h2>
            <p>Date: 2025-04-21</p>
            <p>Location: Teshie Park</p>
          </div>
          <div className=" rounded-lg shadow-2xl p-4 hover:translate-1 transition duration-300">
            <h2 className="text-xl font-semibold">Christmas Eve</h2>
            <p>Date: 2025-12-24</p>
            <p>Location: Church Auditorium</p>
          </div>
          <div className=" rounded-lg shadow-2xl p-4 hover:translate-1 transition duration-300">
            <h2 className="text-xl font-semibold">Event 4</h2>
            <p>Date: 2023-11-05</p>
            <p>Location: Church Hall</p>
          </div>
          <div className=" rounded-lg shadow-2xl p-4 hover:translate-1 transition duration-200">
            <h2 className="text-xl font-semibold">Event 4</h2>
            <p>Date: 2023-11-05</p>
            <p>Location: Church Hall</p>
          </div>
        </div>
      </div>
      <p className="mt-10">Stay connected with upcoming activities.</p>
    </div>
  );
}

export default Events;
