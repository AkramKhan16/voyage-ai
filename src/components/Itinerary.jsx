import React, { useState } from "react";

const Itinerary = ({ aiTrip }) => {
  const [selectedDay, setSelectedDay] = useState(0);

  if (!aiTrip?.itinerary) return null;

  const day = aiTrip.itinerary[selectedDay];

  return (
    <div className="max-w-6xl mx-auto mt-10">
      <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-4 md:p-8">

        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 md:mb-8">
          🗺️ AI Travel Itinerary
        </h2>

        {/* Day Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 mb-8 md:mb-10">
          {aiTrip.itinerary.map((item, index) => (
            <button
              key={item.day}
              onClick={() => setSelectedDay(index)}
              className={`rounded-2xl p-4 transition-all duration-300 border ${
                selectedDay === index
                  ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl scale-105"
                  : "bg-gray-50 hover:bg-blue-50 hover:shadow-lg"
              }`}
            >
              <h3 className="font-bold text-lg">
                Day {item.day}
              </h3>

              <p className="text-xs mt-2 line-clamp-2">
                {item.place}
              </p>
            </button>
          ))}
        </div>

        {/* Selected Day */}
        <div className="rounded-3xl bg-gradient-to-br from-sky-50 via-white to-indigo-50 border border-blue-100 p-4 md:p-8">

          <div className="flex flex-col md:flex-row md:justify-between md:items-center">

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-blue-700">
                {day.title}
              </h2>

              <p className="mt-2 text-base md:text-lg font-medium text-gray-700">
                📍 {day.place}
              </p>
            </div>

            <div className="mt-4 md:mt-0">
              <span className="bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold">
                {day.type}
              </span>
            </div>

          </div>

          {/* Information Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mt-8 md:mt-10">

            <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition">
              <p className="text-sm text-gray-500">🚗 Distance</p>
              <h3 className="font-bold text-lg mt-2">
                {day.distanceFromPrevious}
              </h3>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition">
              <p className="text-sm text-gray-500">⏰ Travel Time</p>
              <h3 className="font-bold text-lg mt-2">
                {day.travelTime}
              </h3>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition">
              <p className="text-sm text-gray-500">🚕 Transport</p>
              <h3 className="font-bold text-lg mt-2">
                {day.transport}
              </h3>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition">
              <p className="text-sm text-gray-500">💸 Transport Cost</p>
              <h3 className="font-bold text-lg mt-2">
                {day.transportCost}
              </h3>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition">
              <p className="text-sm text-gray-500">🎟 Entry Fee</p>
              <h3 className="font-bold text-lg mt-2">
                {day.entryFee}
              </h3>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition">
              <p className="text-sm text-gray-500">☀ Best Time</p>
              <h3 className="font-bold text-lg mt-2">
                {day.bestTime}
              </h3>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition">
              <p className="text-sm text-gray-500">🕒 Stay Duration</p>
              <h3 className="font-bold text-lg mt-2">
                {day.stayDuration}
              </h3>
            </div>

          </div>

          {/* Activities */}
          <div className="mt-10">

            <h3 className="text-xl md:text-2xl font-bold mb-5">
              🎯 Activities
            </h3>

            <div className="space-y-4">
              {day.activities.map((activity, index) => (
  <div
    key={index}
    className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-5"
  >
    <h4 className="text-lg font-bold">
      {activity.name}
    </h4>

    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mt-3 text-sm">

      <div>
        🕒 {activity.time}
      </div>

      <div>
        ⏱ {activity.duration}
      </div>

      <div>
        💰 {activity.cost}
      </div>

    </div>
  </div>
))}
            </div>

          </div>

          {/* Fact */}
          <div className="mt-10 bg-yellow-50 border-l-4 border-yellow-500 rounded-2xl p-6">

            <h3 className="font-bold text-xl mb-3">
              🌍 Interesting Fact
            </h3>

            <p className="text-gray-700 leading-7">
              {day.fact}
            </p>

          </div>

          {/* Previous / Next */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between mt-10">

            <button
              onClick={() => setSelectedDay(selectedDay - 1)}
              disabled={selectedDay === 0}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gray-200 hover:bg-gray-300 disabled:opacity-40">
              ← Previous
            </button>

            <button
              onClick={() => setSelectedDay(selectedDay + 1)}
              disabled={selectedDay === aiTrip.itinerary.length - 1}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-40">
              Next →
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Itinerary;