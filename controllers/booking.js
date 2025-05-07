import helpers from "../helpers/booking.js";
import activityHelpers from "../helpers/activity.js";

const controllers = {
  getMyBookings: async (req, res) => {
    try {
      const bookings = await helpers.getBookings(req.id);
      res.status(200).json(bookings);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },

  bookActivity: async (req, res) => {
    try {
      const { activityId } = req.body;
      const activity = await activityHelpers.findActivity(activityId);
      if (!activity)
        return res.status(404).json({ message: "Activity not found" });

      await helpers.addBooking({ userId: req.id, activityId });
      res.status(201).json({ message: "Activity booked successfully" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

export default controllers;
