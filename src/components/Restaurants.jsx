import React from "react";

const Restaurants = ({ restaurants }) => {
  return (
    <div className="max-w-6xl mx-auto mt-8 sm:mt-10 px-4 sm:px-6">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-5 sm:p-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
          🍽️ Recommended Restaurants
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {restaurants?.map((restaurant, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl p-5 sm:p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-gradient-to-br from-white to-orange-50"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-800 break-words">
                {restaurant.name}
              </h3>

              <p className="mt-3 sm:mt-4 text-gray-600 leading-7 text-sm sm:text-base">
                <span className="font-semibold text-black">
                  🍴 Must Try:
                </span>{" "}
                {restaurant.mustTry}
              </p>

              <div className="flex flex-wrap gap-2 sm:gap-3 mt-5 sm:mt-6">
                <span className="bg-yellow-100 text-yellow-800 px-3 sm:px-4 py-2 rounded-full font-semibold text-sm">
                  ⭐ {restaurant.rating}
                </span>

                <span className="bg-green-100 text-green-700 px-3 sm:px-4 py-2 rounded-full font-semibold text-sm">
                  💰 {restaurant.price || "₹₹"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;