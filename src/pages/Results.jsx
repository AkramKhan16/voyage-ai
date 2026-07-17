import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { getDestinationImage } from '../services/api'
import budgetCalculations from '../utils/budgetCalculations'

const Results = () => {
     const trip=useSelector((state)=>state.storeTripDetails.tripDetails)
     const[image,setImage]=useState(null)


      const budget=budgetCalculations(trip)

      console.log(budget)


     useEffect(()=>{
      const fetchImage=async()=>{
        const data=await getDestinationImage(trip.destination)
        setImage(data)
      }
      if(trip.destination){
        fetchImage()
      }
     
     },[trip.destination])
  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="text-4xl font-bold mb-8"> Your Trip Summary </h1>
        <div className="bg-white shadow-lg rounded-xl p-8">
           <div className="space-y-8">

{image && (
  <img
    src={image.src.large}
    alt={trip.destination}
    className="w-full h-[420px] object-cover rounded-xl mb-8"
  />
)}

     <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="bg-gray-100 rounded-xl p-5 shadow-sm">
              <p className="text-gray-500 ">Destination</p>
              <h2 className="text-2xl font-semibold ">  {trip.destination}   </h2>
            </div>       
      
        <div className="bg-gray-100 rounded-xl p-5 shadow-sm">
              <p className="text-gray-500">Days</p>
              <h2 className="text-2xl font-semibold">  {trip.days}  </h2>
            </div>
            
        <div className="bg-gray-100 rounded-xl p-5 shadow-sm">
               <p className="text-gray-500">Travelers</p>
               <h2 className="text-2xl font-semibold">  {trip.travellers}  </h2>
            </div>
       
        <div className="bg-gray-100 rounded-xl p-5 shadow-sm">
              <p className="text-gray-500">Travel Style</p>
              <h2 className="text-2xl font-semibold">  {trip.travelStyle}  </h2>
           </div>
    </div>  
           

    </div>
  </div>
</div>

  )
}

export default Results
