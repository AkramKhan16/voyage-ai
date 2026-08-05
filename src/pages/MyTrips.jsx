import { useEffect, useState } from "react";
import { getTrips, deleteTrip } from "../services/backendApi";
import { useNavigate } from "react-router-dom";

const MyTrips = () => {
    const [trips, setTrips] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTrips = async () => {
            try {
                const response = await getTrips();
                setTrips(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchTrips();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteTrip(id);
            setTrips((prev) => prev.filter((trip) => trip._id !== id));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="max-w-6xl mx-auto py-10 px-6">
            <h1 className="text-4xl font-bold mb-8">
                My Trips
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trips.length === 0 ? (
                    <div className="col-span-full text-center py-20">
                        <h2 className="text-3xl font-bold text-gray-600">
                            No Trips Yet 🌍
                        </h2>
                        <p className="mt-3 text-gray-500">
                            Start planning your first adventure.
                        </p>
                        <button onClick={() => navigate("/")} className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl">
                            Plan Your First Trip
                        </button>
                    </div>

                ) : (
                    trips.map((trip) => (
                        <div key={trip._id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-gray-200 overflow-hidden">
                            <div className="bg-gradient-to-r from-blue-600 to-sky-500 p-5">
                                <h2 className="text-2xl font-bold text-white">
                                    {trip.destination}
                                </h2>
                            </div>

                            <div className="p-5">
                                <p className="mb-2">
                                    📅 <span className="font-semibold">Days:</span> {trip.days}
                                </p>

                                <p className="mb-2">
                                    👨‍👩‍👧‍👦 <span className="font-semibold">Travellers:</span> {trip.travellers}
                                </p>

                                <p className="mb-2">
                                    ✈️ <span className="font-semibold">Style:</span> {trip.travelStyle}
                                </p>

                                <p className="mb-4">
                                    ❤️ <span className="font-semibold">Interests:</span>{" "}
                                    {trip.interests.join(", ")}
                                </p>

                                <div className="flex gap-3 mt-5">
                                    <button onClick={() => navigate(`/results/${trip._id}`)}
                                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl transition"> View Trip
                                    </button>

                                    <button
                                        onClick={() => {
                                            if (window.confirm("Delete this trip?")) {
                                                handleDelete(trip._id);
                                            }
                                        }}
                                        className="flex-1 bg-red-500 hover:bg-red-600 text-white py-2 rounded-xl transition"
                                    >
                                        Delete
                                    </button>

                                </div>

                            </div>

                        </div>
                    ))
                )}

            </div>
        </div>
    );
};

export default MyTrips;