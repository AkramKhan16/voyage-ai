import React, { useState } from "react";
import TripForm from "../components/TripForm";

const Home = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <section className="min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-sky-100 via-white to-blue-200 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-800 leading-tight">
              Plan Your Perfect Trip with
              <span className="text-blue-600"> AI</span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-gray-600 leading-8">
              Discover destinations, estimate budgets, generate complete AI
              itineraries, explore restaurants and receive personalized travel
              tips in seconds.
            </p>

            <button
              onClick={() => setOpenModal(true)}
              className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition w-full sm:w-auto"
            >
              ✈️ Plan Your Trip
            </button>
          </div>

          <div className="hidden lg:flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
              alt="Travel"
              className="rounded-3xl shadow-2xl h-[500px] object-cover"
            />
          </div>
        </div>
      </section>

      {openModal && <TripForm setOpenModal={setOpenModal} />}
    </>
  );
};

export default Home;















// Previous Home Page

// import { useState } from 'react';
// import switzerland from '../assets/switzerland.jpg'
// import TripForm from '../components/TripForm';
// const Home = () => {
//   const[openModal,setOpenModal]=useState(false)  

//   return (
//     <section className="min-h-[calc(100vh-64px)] bg-cover bg-center flex items-center justify-center relative" style={{backgroundImage: `url(${switzerland})`,}}
// >
//   <div className="absolute inset-0 bg-black/50"></div>
//       <div className="relative z-10 text-center text-white px-6">
//         <h1 className="text-6xl font-bold">
//           VoyageAI
//         </h1>

//         <p className="text-xl mt-6">
//           Plan Smarter. Travel Better.
//         </p>

//         <p className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto">
//           Discover breathtaking destinations,
//           estimate your travel budget,
//           and build unforgettable journeys.
//         </p>

//         <button className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition " onClick={()=>setOpenModal(true)} >
//           Plan My Trip
//         </button>
//       </div>
      
//      {
//   openModal && (
//     <TripForm setOpenModal={setOpenModal} ></TripForm>
//   )
// }
//     </section>
//   );
// };

// export default Home;