import Button from "@/components/Button";
import { getMeal } from "@/prisma/meals";
import { currencyConverter } from "@/utils/currencyConverter";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const MealDetail = ({ meal }) => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleOrder = () => {
    if (session) {
      router.push(`/checkout/${meal.id}`);
    } else {
      router.push(`/users/login?destination=/checkout/${meal.id}`);
    }
  };

  return (
    <div className="wrapper py-10 min-h-screen">
      <div
        style={{ backgroundImage: `url(${meal.cover})` }}
        className="w-full h-[32rem] bg-no-repeat bg-cover bg-center"
      />

      <div className="mt-10 grid lg:grid-cols-2 lg:gap-10 space-y-2 lg:space-y-0">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold">{meal.title}</h2>

          <p>
            {" "}
            <span className="font-semibold">Course Description:</span>
            {meal.content}
          </p>
        </div>

        <div className="space-y-2">
          <p>
            <span className="font-semibold">Rating:</span>
            {meal.rating}
          </p>
          <p className=" text-3xl font-semibold">
            Price: {currencyConverter(meal.price)}
          </p>
          <button
            onClick={handleOrder}
            className="bg-black text-white py-3 rounded-lg w-full hover:bg-gray-700 duration-300"
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MealDetail;

export const getServerSideProps = async ({ query }) => {
  const meal = await getMeal(query.mealId);

  const updatedMeals = {
    ...meal,
    updatedAt: meal.updatedAt.toString(),
    createdAt: meal.createdAt.toString(),
  };

  return {
    props: {
      meal: updatedMeals,
    },
  };
};
