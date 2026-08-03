import { useEffect, useState } from "react";
import { getTrips,deleteTrip  } from "../services/backendApi";
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
        setTrips((prev) =>
            prev.filter((trip) => trip._id !== id)
        );
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
            {trips.map((trip) => (
                <div key={trip._id} className="bg-white shadow-lg rounded-xl p-5 border">
                    <h2 className="text-2xl font-bold mb-3">
                        {trip.destination}
                    </h2>

                    <p>  <strong>Days:</strong> {trip.days}  </p>

                    <p>  <strong>Travellers:</strong> {trip.travellers}  </p>

                    <p>  <strong>Travel Style:</strong> {trip.travelStyle}  </p>

                    <p>  <strong>Interests:</strong> {trip.interests.join(", ")}  </p>

                    <button onClick={() => navigate(`/results/${trip._id}`)}  className="mt-4 mr-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">  View Trip
                    </button>
                    
                    <button onClick={() => handleDelete(trip._id)} className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"> Delete </button>
                </div>

            ))}
            </div>
        </div>
);
}

export default MyTrips
