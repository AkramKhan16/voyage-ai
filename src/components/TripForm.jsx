import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTripDetails } from '../redux/slices/tripSlice'
import { useNavigate } from 'react-router-dom'

const TripForm = ({setOpenModal}) => {
  const[step,setStep]=useState(1)

  const[tripData,setTripData]=useState({destination:'',days:'',travellers:'',travelStyle:'',interests:[]})
  
  const interestOptions=["Nature","Beaches","Adventure","History","Food","Nightlife",]

  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleChange=(e)=>{
    setTripData((prev)=>({
      ...prev,[e.target.name]:e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();   
    dispatch(addTripDetails(tripData))

    navigate('/results')
  };


  const handleInterestChange = (e) => {
  const { value, checked } = e.target;
  if (checked) {
    setTripData((prev) => ({
      ...prev, interests: [...prev.interests, value],
    }));
  } else {
    setTripData((prev) => ({
      ...prev,  interests: prev.interests.filter( (interest) => interest !== value  ),
    }));
  }
};

const handleNextStep=()=>{
  if(step===1){
    if(!tripData.destination || !tripData.days || !tripData.travellers ){
    alert("Please complete all required fields.");
    return
  }
    setStep((prev)=>prev+1)
  }
  if(step===2){
    if(!tripData.travelStyle || tripData.interests.length===0){
      alert("Please complete all required fields.");
    return
    }
    else{
      setStep((prev)=>prev+1)
    }
  }
}

const handlePrevStep=()=>{
  setStep((prev)=>prev-1)
}

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl p-8 w-[500px] max-h-[90vh] overflow-y-auto relative">

        <button onClick={() => setOpenModal(false)}  className="absolute top-4 right-4 text-2xl" >
          ✖
        </button>

        <h2 className="text-3xl font-bold text-center mb-2"> Plan Your Journey</h2>

        <p className="text-center text-gray-500 mb-6"> Step {step} of 3 </p>

<form className="space-y-5" onSubmit={handleSubmit}>
        {step==1 && (
          <>
           <input type="text" placeholder='Destination' name='destination'  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" value={tripData.destination} onChange={handleChange} />
           <input type="number" placeholder='No of Days' name='days'  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" value={tripData.days} onChange={handleChange}/>
           <input type="number" placeholder='No of Travellers' name='travellers'  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" value={tripData.travellers} onChange={handleChange}/>
           
           <div className="flex justify-end mt-6">
                <button type="button" onClick={handleNextStep} className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"> Next → </button> 
                </div>
           </>
        )}

        {step==2 && (
          <>
  <select name="travelStyle" className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" value={tripData.travelStyle} onChange={handleChange} >
        <option value="">Select Travel Style</option>
        <option value="Budget">Budget Friendly</option>
        <option value="Standard">Standard</option>
        <option value="Luxury">Luxury</option>
  </select>

  <div className="space-y-3">
  <h3 className="font-semibold">Interests</h3>
      {interestOptions.map((interest)=>(
        <label key={interest} className="flex items-center gap-2">
           <input type="checkbox" value={interest} checked={tripData.interests.includes(interest)} 
           onChange={handleInterestChange} />  {interest}
        </label>
      ))}
  </div>
      <div className="flex justify-between mt-6">
          <button type="button" onClick={handlePrevStep} className="text-black border border-gray-300 px-8 py-3 rounded-lg  hover:bg-gray-100 transition"> ← Prev </button>

          <button type="button" onClick={handleNextStep} className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">  Next → </button>
      </div>
  </>
        )}

        {step==3 && (
          <>
          <div className="bg-gray-100 rounded-xl p-5 space-y-4">
              <div className="flex justify-between">
                 <span className="font-semibold">Destination</span>
                     <span>{tripData.destination}</span>
              </div>

              <div className="flex justify-between">
                 <span className="font-semibold">No of Days</span>
                     <span>{tripData.days}</span>
              </div>

             <div className="flex justify-between">
                 <span className="font-semibold">No of Travellers</span>
                    <span> {tripData.travellers}</span>
             </div>

              <div className="flex justify-between">
                  <span className="font-semibold">Travel Style</span>
                     <span>{tripData.travelStyle}</span>
              </div>

              <div>
                   <p className="font-semibold mb-2">Interests</p>

                  <div className="flex flex-wrap gap-2">

                    {tripData.interests.map((interest) => (
                          <span key={interest} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"> {interest}  </span>   ))}

                   </div>
              </div>
            </div>

          <div className="flex justify-between mt-6">
             <button type="button" onClick={handlePrevStep} className="border border-gray-300 px-8 py-3 rounded-lg hover:bg-gray-100 transition"> ← Prev  </button>

            <button type="submit" className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition">  Generate Trip ✨  </button>
          </div>
            
  </>
        )}

  </form>      
       </div>
    </div>
  )
}

export default TripForm
