import Button from "@/components/Button";
import { getMeal } from "@/prisma/meals";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
const OrderedMeals = ({ meal }) => {
  return (
    <div className=" wrapper py-10 min-h-screen mt-10">
      <h2 className="text-center text-3xl mb-20">
        Enjoy yourself in the world of tastescape!{" "}
      </h2>

      <div className="mt-10 items-center">
        <h3 className="text-2xl mb-5">{meal.title}</h3>
        <div className="w-[30rem] h-[25rem">
          <Image
            src={meal.cover}
            alt={meal.title}
            width={400}
            height={400}
            priority
            className="w-full h-full object-cover"
          />
        </div>
        <div className="mt-5  ">
          <Link
            href="/meals"
            className="py-3 px-6 bg-orange-400 rounded-lg hover:bg-orange-500 duration-300"
          >
            More Orders
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderedMeals;

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
