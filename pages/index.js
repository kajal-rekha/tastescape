import { getAllMeals } from "@/prisma/meals";
import MealsPage from "./meals";

const HomePage = ({ meals }) => {
  return <MealsPage meals={meals} />;
};

export default HomePage;

export const getServerSideProps = async () => {
  const meals = await getAllMeals();

  const updatedMeals = meals.map((meal) => ({
    ...meal,
    updatedAt: meal.updatedAt.toString(),
    createdAt: meal.createdAt.toString(),
  }));

  return {
    props: {
      meals: updatedMeals,
    },
  };
};
