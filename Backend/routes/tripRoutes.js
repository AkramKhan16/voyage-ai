const express=require('express');
const { createTrip, getTrips, getTripById, deleteTrip, updateTrip} = require('../controllers/tripController');

const router=express.Router();

router.post('/trip',createTrip)
router.get("/trip", getTrips);
router.get("/trip/:id", getTripById);
router.delete("/trip/:id", deleteTrip);
router.put("/trip/:id", updateTrip);

module.exports=router;