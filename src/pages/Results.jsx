import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getDestinationImage } from '../services/api'
import { generateTrip } from "../services/gemini";
import budgetCalculations from '../utils/budgetCalculations'
import Itinerary from "../components/Itinerary";
import Restaurants from "../components/Restaurants";
import TravelTips from "../components/TravelTips";
import BudgetCard from "../components/BudgetCard";
import TripSummary from '../components/TripSummary';

const Results = () => {
     const trip=useSelector((state)=>state.storeTripDetails.tripDetails)
     const[image,setImage]=useState(null)
     const [aiTrip, setAiTrip] = useState(null);

      const budget=budgetCalculations(trip)
       

     useEffect(()=>{
      const fetchImage=async()=>{
        const data=await getDestinationImage(trip.destination)
        setImage(data)
      }
      if(trip.destination){
        fetchImage()
      }
     
     },[trip.destination])
    
     useEffect(() => {
  const fetchTrip = async () => {

    const sortedInterests = [...trip.interests].sort();
    const cacheKey = `trip-${trip.destination}-${trip.days}-${trip.travelStyle}-${trip.travellers}-${sortedInterests.join("-")}`;

    const cachedTrip = localStorage.getItem(cacheKey);
  
    if (cachedTrip) {
      setAiTrip(JSON.parse(cachedTrip));
      return;
    }

    const data = await generateTrip(trip);

    if (data) {
      setAiTrip(data);
      localStorage.setItem(cacheKey, JSON.stringify(data));
    }
  };

  if (trip.destination) {
    fetchTrip();
  }
}, [
  trip.destination,
  trip.days,
  trip.travelStyle,
  trip.travellers,
  trip.interests.join("-")
]);


  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        <TripSummary trip={trip} image={image}/>
        <BudgetCard budget={budget} />
        <div className="max-w-6xl mx-auto flex justify-end mb-6">
  <button onClick={() => { localStorage.removeItem("aiTrip");
      window.location.reload();
    }}  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl shadow">
    🔄 Generate New Itinerary
  </button>
</div>
        <Itinerary aiTrip={aiTrip} />
        <Restaurants restaurants={aiTrip?.restaurants} />
        <TravelTips tips={aiTrip?.tips} />
    </div>

         



  )
}

export default Results
