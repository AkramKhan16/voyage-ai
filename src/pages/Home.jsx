import { useState } from 'react';
import switzerland from '../assets/switzerland.jpg'
import TripForm from '../components/TripForm';
const Home = () => {
  const[openModal,setOpenModal]=useState(false)  

  return (
    <section className="min-h-[calc(100vh-64px)] bg-cover bg-center flex items-center justify-center relative" style={{backgroundImage: `url(${switzerland})`,}}
>
  <div className="absolute inset-0 bg-black/50"></div>
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-6xl font-bold">
          VoyageAI
        </h1>

        <p className="text-xl mt-6">
          Plan Smarter. Travel Better.
        </p>

        <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
          Discover breathtaking destinations,
          estimate your travel budget,
          and build unforgettable journeys.
        </p>

        <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition " onClick={()=>setOpenModal(true)} >
          Plan My Trip
        </button>
      </div>
      
     {
  openModal && (
    <TripForm setOpenModal={setOpenModal} ></TripForm>
  )
}
    </section>
  );
};

export default Home;