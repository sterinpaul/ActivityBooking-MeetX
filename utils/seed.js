import Activity from "../models/Activity.js";

const activities = [
  {
    title: "Cricket",
    description:
      "Watch the exciting finale of the Cricket World Cup with live audience",
    location: "Melbourne Cricket Ground, Australia",
    date: "2025-06-15",
    time: "14:00",
  },
  {
    title: "Movie",
    description:
      "Avengers: Secret Wars - Premier screening of the latest Marvel blockbuster",
    location: "AMC Theater, Downtown",
    date: "2025-05-20",
    time: "19:30",
  },
  {
    title: "Footboll",
    description:
      "Champions League Semi-Final. Real Madrid vs Manchester City football match",
    location: "Santiago Bernabéu Stadium, Madrid",
    date: "2025-05-12",
    time: "20:45",
  },
  {
    title: "Drama",
    description:
      "Local Theater Play: Romeo and Juliet. Modern adaptation of Shakespeare's classic romance",
    location: "Community Arts Center",
    date: "2025-05-25",
    time: "18:00",
  },
];
const seed = async () => {
  for (const activity of activities) {
    const exists = await Activity.exists({ title: activity.title });
    if (!exists) {
      await Activity.create(activity);
    }
  }
};

export default seed;
