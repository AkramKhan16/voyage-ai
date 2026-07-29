import React from "react";

const BudgetCard = ({ budget }) => {
  return (
    <div className="max-w-6xl mx-auto mt-10 bg-white rounded-3xl shadow-2xl overflow-hidden">

      <div className="bg-gradient-to-r from-emerald-500 to-green-600 text-white p-6">
        <h2 className="text-3xl font-bold">💰 Estimated Budget</h2>
        <p className="text-green-100 mt-2">
          Approximate expenses for your entire trip
        </p>
      </div>

      <div className="p-8">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          <div className="bg-slate-50 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <p className="text-4xl">🏨</p>
            <h3 className="text-lg font-semibold mt-3">Hotel</h3>
            <p className="text-2xl font-bold text-blue-600 mt-2">
              ₹{budget.hotelCost.toLocaleString()}
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <p className="text-4xl">🍽️</p>
            <h3 className="text-lg font-semibold mt-3">Food</h3>
            <p className="text-2xl font-bold text-orange-600 mt-2">
              ₹{budget.foodCost.toLocaleString()}
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <p className="text-4xl">🚗</p>
            <h3 className="text-lg font-semibold mt-3">Transport</h3>
            <p className="text-2xl font-bold text-purple-600 mt-2">
              ₹{budget.transportCost.toLocaleString()}
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <p className="text-4xl">🎯</p>
            <h3 className="text-lg font-semibold mt-3">Activities</h3>
            <p className="text-2xl font-bold text-pink-600 mt-2">
              ₹{budget.activitiesCost.toLocaleString()}
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <p className="text-4xl">🛍️</p>
            <h3 className="text-lg font-semibold mt-3">Miscellaneous</h3>
            <p className="text-2xl font-bold text-yellow-600 mt-2">
              ₹{budget.miscellaneousCost.toLocaleString()}
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 shadow-lg text-white">
            <p className="text-4xl">💵</p>
            <h3 className="text-lg font-semibold mt-3">
              Total Budget
            </h3>

            <p className="text-3xl font-extrabold mt-2">
              ₹{budget.totalBudget.toLocaleString()}
            </p>
          </div>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div className="bg-blue-50 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300">
            <p className="text-5xl">🛏️</p>

            <h3 className="text-xl font-semibold mt-4">
              Rooms Required
            </h3>

            <p className="text-4xl font-bold text-blue-600 mt-3">
              {budget.rooms}
            </p>
          </div>

          <div className="bg-green-50 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300">
            <p className="text-5xl">🚘</p>

            <h3 className="text-xl font-semibold mt-4">
              {budget.vehicleType}s Required
            </h3>

            <p className="text-4xl font-bold text-green-600 mt-3">
              {budget.vehicles}
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default BudgetCard;