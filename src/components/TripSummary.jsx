import React from "react";

const TripSummary = ({ trip, image }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-6 sm:mb-8">
        ✈️ Your Dream Trip
      </h1>
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
        {image && (
          <img src={image.src.large} alt={trip.destination} className="w-full h-60 sm:h-80 
          lg:h-[500px] object-cover"/>
        )}
        <div className="p-5 sm:p-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">
            {trip.destination}
          </h2>

          <p className="text-gray-500 mt-2 text-base sm:text-lg">
            Your AI generated travel plan is ready.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-8">

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-4 sm:p-6 shadow hover:shadow-xl hover:-translate-y-1 transition-all">
              <p className="text-gray-500 text-sm">
                Destination
              </p>

              <h3 className="text-2xl font-bold mt-2">
                📍 {trip.destination}
              </h3>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-4 sm:p-6 shadow hover:shadow-xl hover:-translate-y-1 transition-all">
              <p className="text-gray-500 text-sm">
                Duration
              </p>

              <h3 className="text-2xl font-bold mt-2">
                🗓 {trip.days} Days
              </h3>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-4 sm:p-6 shadow hover:shadow-xl hover:-translate-y-1 transition-all">
              <p className="text-gray-500 text-sm">
                Travelers
              </p>

              <h3 className="text-2xl font-bold mt-2">
                👨‍👩‍👧 {trip.travellers}
              </h3>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-4 sm:p-6 shadow hover:shadow-xl hover:-translate-y-1 transition-all">
              <p className="text-gray-500 text-sm">
                Travel Style
              </p>

              <h3 className="text-xl sm:text-2xl font-bold mt-2">
                ✨ {trip.travelStyle}
              </h3>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default TripSummary;