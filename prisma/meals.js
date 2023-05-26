import prisma from "./prisma";

// GET ALL MEALS
export const getAllMeals = async () => {
  const meals = await prisma.meal.findMany({});

  return meals;
};

// GET A SINGLE MEAL
export const getMeal = async (id) => {
  const meal = await prisma.meal.findUnique({
    where: { id },
  });
  return meal;
};
