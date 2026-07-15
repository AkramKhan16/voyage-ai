import React, { useState } from 'react'

const TripForm = ({setOpenModal}) => {
  const[tripData,setTripData]=useState({country:'',days:'',budget:'',travelStyle:'',interests:[]})
  const handleChange=(e)=>{
    setTripData((prev)=>({
      ...prev,[e.target.name]:e.target.value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!tripData.country || !tripData.days || !tripData.budget || !tripData.travelStyle || !tripData.interests){
      alert("Please fill all the fields.");
    return;
    }
    setOpenModal(false)
    console.log(tripData)
  };
  const interests=["Nature","Beaches","Adventure","History","Food","Nightlife",]
  const handleInterestChange = (e) => {
  const { value, checked } = e.target;

  if (checked) {
    setTripData((prev) => ({
      ...prev,
      interests: [...prev.interests, value],
    }));
  } else {
    setTripData((prev) => ({
      ...prev,
      interests: prev.interests.filter(
        (interest) => interest !== value
      ),
    }));
  }
};
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">

      <div className="bg-white rounded-2xl p-8 w-[500px] max-h-[90vh] overflow-y-auto relative">

        <button onClick={() => setOpenModal(false)}  className="absolute top-4 right-4 text-2xl" >
          ✖
        </button>
        <h2 className="text-3xl font-bold text-center mb-6"> Plan Your Journey</h2>
        <form className="space-y-5" onSubmit={handleSubmit}>
           <input type="text" placeholder='Country' name='country'  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" value={tripData.country} onChange={handleChange} />
           <input type="number" placeholder='Days' name='days'  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" value={tripData.days} onChange={handleChange}/>
           <input type="number" placeholder='Budget' name='budget'  className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" value={tripData.budget} onChange={handleChange}/>

  <select name="travelStyle" className="w-full border rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" value={tripData.travelStyle} onChange={handleChange} >
  <option value="">Select Travel Style</option>
  <option value="Budget">Budget Friendly</option>
  <option value="Standard">Standard</option>
  <option value="Luxury">Luxury</option>
  </select>

  <div className="space-y-3">
  <h3 className="font-semibold">Interests</h3>
      {interests.map((interest)=>(
        <label key={interest} className="flex items-center gap-2">
           <input type="checkbox" value={interest} checked={tripData.interests.includes(interest)} 
           onChange={handleInterestChange} />  {interest}
        </label>
      ))}
  </div>

           <button type='submit' className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition" >Generate Trip...</button>

          <pre className="mt-5 bg-gray-100 p-4 rounded"> 
            {JSON.stringify(tripData, null, 2)}

          </pre>
        </form>
       </div>
    </div>
  )
}

export default TripForm
