import { currencyConverter } from "@/utils/currencyConverter";
import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";
import Button from "./Button";

const MealDetail = ({ meal }) => {
  return (
    <div className="w-full lg:w-[25rem] shadow-md rounded-md overflow-hidden">
      <div className="w-full h-[25rem] lg:h-[20rem] overflow-hidden">
        <Image
          src={meal.cover}
          alt={meal.title}
          width={640}
          height={360}
          priority
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5 space-y-2">
        <h3 className="text-3xl font-medium">{meal.title}</h3>

        <p className="text-gray-500 h-28">{meal.content}</p>

        <div className="flex justify-between">
          <p className="text-lg font-semibold">
            Price: {currencyConverter(meal.price)}
          </p>
          <p className="flex justify-between text-gray-500">
            <span className="flex items-center gap-1">
              {" "}
              <AiOutlineStar className="text-black" />{" "}
              <span className="text-black font-semibold">{meal.rating}</span>
            </span>
          </p>
        </div>
        <Button
          href={`/meals/${meal.id}`}
          placeholder="View Details"
          color="primary"
          size="default"
          size="full"
        />
      </div>
    </div>
  );
};

export default MealDetail;
