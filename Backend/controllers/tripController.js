const Trip = require("../models/Trip");

const createTrip = async (req, res) => {
    try {
        console.log(req.body);
        const newTrip = await Trip.create(req.body);
        res.status(201).json(newTrip);
    } catch (error) {
       res.status(500).json({
            message: error.message
        });
    }
};

const getTrips = async (req, res) => {
    try {
        const trips = await Trip.find();
        res.status(200).json(trips);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getTripById = async (req, res) => {
    try {
        const { id } = req.params;
        const trip = await Trip.findById(id);
        if (!trip) {
            return res.status(404).json({
                message: "Trip not found"
            });
        }
        res.status(200).json(trip);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const deleteTrip = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedTrip = await Trip.findByIdAndDelete(id);
        if (!deletedTrip) {
            return res.status(404).json({
                message: "Trip not found"
            });
        }
        res.status(200).json({
            message: "Trip deleted successfully",
            deletedTrip
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const updateTrip = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTrip = await Trip.findByIdAndUpdate( id, req.body, {returnDocument:"after"} );
        if (!updatedTrip) {
            return res.status(404).json({
                message: "Trip not found"
            });
        }
        res.status(200).json({
            message: "Trip updated successfully",
            updatedTrip
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createTrip, getTrips, getTripById, deleteTrip, updateTrip
};
