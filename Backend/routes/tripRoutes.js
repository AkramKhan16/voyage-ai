const express=require('express');
const authMiddleware = require("../middleware/authMiddleware");
const { createTrip, getTrips, getTripById, deleteTrip, updateTrip} = require('../controllers/tripController');

const router=express.Router();

router.post('/trip', authMiddleware, createTrip)
router.get("/trip", authMiddleware, getTrips);
router.get("/trip/:id", authMiddleware, getTripById);
router.delete("/trip/:id",authMiddleware, deleteTrip);
router.put("/trip/:id",authMiddleware, updateTrip);

module.exports=router;