import MealDetail from "@/components/MealItem";
import SectionHeader from "@/components/SectionHeader";
import { getAllMeals } from "@/prisma/meals";

const MealsPage = ({ meals }) => {
  return (
    <div className="wrapper py-10 min-h-screen">
      <SectionHeader
        span="Meals"
        h2="Explore Tastescape's Meal Haven!"
        p="Embark on a gastronomic journey as you explore Tastescape's wide array of delectable meals."
      />
      <div className="mt-10 flex flex-wrap gap-10">
        {meals.map((meal) => (
          <MealDetail key={meal.id} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default MealsPage;

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
