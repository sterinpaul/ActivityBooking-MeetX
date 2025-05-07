import helpers from "../helpers/activity.js";

const controllers = {
  getAllActivities: async (req, res) => {
    try {
      const activities = await helpers.getActivities();
      res.json(activities);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  },
};

export default controllers;
