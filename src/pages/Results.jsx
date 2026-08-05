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
import { useParams } from "react-router-dom";
import { getTripById,updateTrip } from "../services/backendApi";

const Results = () => {
     const trip=useSelector((state)=>state.storeTripDetails.tripDetails)
     const[image,setImage]=useState(null)
     const [aiTrip, setAiTrip] = useState(null);
     const [currentTrip, setCurrentTrip] = useState(trip);
     const [loading, setLoading] = useState(false);
     const [error,setError]=useState("");
     const { id } = useParams();

      const budget = budgetCalculations(currentTrip);
       

useEffect(() => {
    const fetchSavedTrip = async () => {
        try {
            const response = await getTripById(id);
            setCurrentTrip(response.data);
            setAiTrip(response.data.aiTrip);
        } catch (error) {
            console.log(error);
        }
    };
    if (id) {
        fetchSavedTrip();
    }
}, [id]);


     useEffect(()=>{
      const fetchImage=async()=>{
        const data=await getDestinationImage(currentTrip.destination)
        setImage(data)
      }
      if(currentTrip.destination){
        fetchImage()
      }
     
     },[currentTrip.destination])
    
     useEffect(() => {
      if (currentTrip.aiTrip) {
        setAiTrip(currentTrip.aiTrip);
        return;
        }
      
  const fetchTrip = async () => {
    // if (id) {  return; }
        try{
    const sortedInterests = [...(currentTrip.interests || [])].sort();
    const cacheKey = `trip-${currentTrip.destination.trim().toLowerCase()}-${currentTrip.days}-${currentTrip.travelStyle}-${currentTrip.travellers}-${sortedInterests.join("-")}`;

    const cachedTrip = localStorage.getItem(cacheKey);
  
    if (cachedTrip) {
      setAiTrip(JSON.parse(cachedTrip));
      return;
    }

    setLoading(true);
    const data = await generateTrip(currentTrip);

    if (data) {
      setAiTrip(data);
      await updateTrip(id, {
        aiTrip: data
    });
      localStorage.setItem(cacheKey, JSON.stringify(data));
    };
    setLoading(false);
  }
catch(error){
 console.log("Gemini failed:", error);
 setError("Unable to generate your itinerary. Please try again later.");
 setLoading(false);
}
     }
  if (currentTrip.destination) {
    fetchTrip();
  }
}, [
  currentTrip.destination,
  currentTrip.days,
  currentTrip.travelStyle,
  currentTrip.travellers,
  (currentTrip.interests || []).join("-")
]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        <TripSummary trip={currentTrip} image={image}/>
        <BudgetCard budget={budget} />
        <div className="max-w-6xl mx-auto flex justify-end mb-6">
  <button onClick={() => { const sortedInterests = [...currentTrip.interests].sort();
          const cacheKey = `trip-${currentTrip.destination.trim().toLowerCase()}-${currentTrip.days}-${currentTrip.travelStyle}-${currentTrip.travellers}-${sortedInterests.join("-")}`;
               localStorage.removeItem(cacheKey);
               window.location.reload();
    }}  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl shadow">
    🔄 Generate New Itinerary
  </button>
</div>

{error && (
    <div className="bg-red-100 border border-red-400 text-red-700 p-4 rounded-xl">
        {error}
    </div>
)}

        <Itinerary aiTrip={aiTrip} />
        <Restaurants restaurants={aiTrip?.restaurants} />
        <TravelTips tips={aiTrip?.tips} />
    </div>

         



  )
}

export default Results
