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
import { getTripById } from "../services/backendApi";

const Results = () => {
     const trip=useSelector((state)=>state.storeTripDetails.tripDetails)
     const[image,setImage]=useState(null)
     const [aiTrip, setAiTrip] = useState(null);
     const [currentTrip, setCurrentTrip] = useState(trip);
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
      
  const fetchTrip = async () => {
    if (id) {  return; }
        try{
    const sortedInterests = [...currentTrip.interests].sort();
    const cacheKey = `trip-${currentTrip.destination}-${currentTrip.days}-${currentTrip.travelStyle}-${currentTrip.travellers}-${sortedInterests.join("-")}`;

    const cachedTrip = localStorage.getItem(cacheKey);
  
    if (cachedTrip) {
      setAiTrip(JSON.parse(cachedTrip));
      return;
    }

    const data = await generateTrip(currentTrip);

    if (data) {
      setAiTrip(data);
      localStorage.setItem(cacheKey, JSON.stringify(data));
    };
  }
catch(error){
 console.log("Gemini failed:", error);
 throw error;
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
  currentTrip.interests.join("-")
]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-10">
        <TripSummary trip={currentTrip} image={image}/>
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
