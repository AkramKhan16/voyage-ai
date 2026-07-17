
const budgetCalculations = (trip) => {
    const travelCosts={
      Budget:{
        hotel: 1800,
        food: 800,
        activities: 500,
        miscellaneous: 300
      },
      Standard:{
        hotel: 4000,
        food: 1600,
        activities: 1200,
        miscellaneous: 700
      },
      Luxury:{
        hotel: 9000,
        food: 2700,
        activities: 2100,
        miscellaneous: 1500
      }
    }

    const selectedStyle=travelCosts[trip.travelStyle];
    const days=Number(trip.days);
    const travellers=Number(trip.travellers)
    const rooms=Math.ceil(travellers/2)

    let vehicleType = "";
    let vehicles = 0;
    let transportRate = 0;

     if(travellers<=2){
      vehicleType="Bike";
      vehicles=1;
      transportRate=800
     }
     else{
      const car=Math.ceil(travellers/5)
      vehicleType="car";
      vehicles=car;
      transportRate=2000
     }
      
  const hotelCost= rooms*days*selectedStyle.hotel;
  const foodCost=travellers*days*selectedStyle.food;
  const transportCost=vehicles*transportRate*days;
  const activitiesCost=selectedStyle.activities*travellers*days;
  const miscellaneousCost=selectedStyle.miscellaneous*travellers*days;

  const TotalBudget=hotelCost+foodCost+transportCost+activitiesCost+miscellaneousCost;

  return{
   TotalBudget,hotelCost,foodCost,transportCost,activitiesCost,miscellaneousCost,vehicleType,vehicles,rooms
}
}


export default budgetCalculations
