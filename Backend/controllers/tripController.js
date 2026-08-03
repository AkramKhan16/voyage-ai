const Trip = require("../models/Trip");

const createTrip = async (req, res) => {
    try {
        console.log(req.user);
        const newTrip = await Trip.create({...req.body, user: req.user.id });
        res.status(201).json(newTrip);
    } catch (error) {
       res.status(500).json({
            message: error.message
        });
    }
};

const getTrips = async (req, res) => {
    try {
        const trips = await Trip.find({user: req.user.id});
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
        const trip = await Trip.findOne({ _id: id, user: req.user.id });;
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
        const deletedTrip = await Trip.findOneAndDelete({_id: id, user: req.user.id});
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
        const updatedTrip = await Trip.findOneAndUpdate({ _id:id ,user: req.user.id}, req.body, {new: true} );
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
