import React from "react";

const TravelTips = ({ tips }) => {
  return (
    <div className="max-w-6xl mx-auto mt-10">
      <div className="bg-white rounded-3xl shadow-xl p-8">
        <h2 className="text-3xl font-bold mb-8">
          💡 Travel Tips
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {tips?.map((tip, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-5 rounded-2xl border border-green-100 bg-gradient-to-r from-green-50 to-emerald-50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-500 text-white text-2xl font-bold">
                💡
              </div>

              <div>
                <h3 className="font-semibold text-lg text-gray-800 mb-2">
                  Tip {index + 1}
                </h3>

                <p className="text-gray-600 leading-7">
                  {tip}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TravelTips;