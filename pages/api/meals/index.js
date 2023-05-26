import { getAllMeals } from "@/prisma/meals";

export default async function handler(req, res) {
  try {
    if (req.method === "GET") {
      const meals = await getAllMeals();

      return res.status(200).json(meals);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}
