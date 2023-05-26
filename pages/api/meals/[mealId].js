import { getMeal } from "@/prisma/meals";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const meal = await getMeal(req.query.mealId);
      return res.status(200).json(meal);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
