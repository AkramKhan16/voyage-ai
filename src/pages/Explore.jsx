import React from "react";

const places = [
  {
    title: "Italy",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
  },
  {
    title: "Switzerland",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  {
    title: "New Zealand",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
  },
  {
    title: "Bali",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4"
  },
  {
    title: "Iceland",
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e"
  },
  {
    title: "Paris",
    image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a"
  }
];

const Explore = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
      <h1 className="text-3xl sm:text-5xl font-bold text-center mb-4">
        🌍 Explore Destinations
      </h1>

      <p className="text-center text-gray-600 mb-10 text-base sm:text-lg">
        Get inspired before planning your next adventure.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {places.map((place, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <img
              src={place.image}
              alt={place.title}
              className="w-full h-60 object-cover"
            />

            <div className="p-6">
              <h2 className="text-2xl font-bold">
                {place.title}
              </h2>

              <p className="text-gray-500 mt-2">
                Discover amazing places, food, nature and unforgettable experiences.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;