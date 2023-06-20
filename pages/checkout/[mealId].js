import SectionHeader from "@/components/SectionHeader";
import { getMeal } from "@/prisma/meals";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useEffect } from "react";
import Image from "next/image";

const Checkout = ({ meal }) => {
  const { data: session } = useSession();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    courseTitle: meal.title,
    price: meal.price,
  });

  useEffect(() => {
    if (session) {
      setFormData((prev) => ({
        ...prev,
        name: session.user.name,
        email: session.user.email,
      }));
    }
  }, [session]);

  return (
    <div className="wrapper py-10 min-h-screen">
      <h3 className="text-center text-2xl">Checkout</h3>
      <p className="text-center">{`Indulge in Tastescape's Delectable Meal Haven!`}</p>
      <div className="checkout-form  grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-10">
        <div
          style={{
            backgroundImage: `url("https://res.cloudinary.com/dh0ado2ir/image/upload/v1687257702/photo-1589010588553-46e8e7c21788-removebg-preview_1_egb70d.png")`,
          }}
          className="w-full h-[43rem] justify-center items-center bg-cover bg-no-repeat bg-center relative mt-10 object-cover overflow-hidden"
        >
          <p className="text-2xl mt-5 text-center">Tastescape</p>
          <p className="text-lg absolute bottom-5 p-2">
            Tastescape is an immersive online food shop that takes you on a
            delectable journey of flavors. With our carefully curated selection
            of culinary delights, we bring the world of gastronomy to your
            doorstep. From tantalizing appetizers to mouthwatering main courses
            and decadent desserts, Tastescape offers a wide range of gourmet
            options to satisfy every palate. Experience the ultimate food
            adventure with Tastescape and indulge in a symphony of tastes that
            will leave you craving for more.
          </p>
        </div>

        <div className="checkout-right flex justify-center">
          <form className="flex flex-col gap-5  w-full lg:w-[35rem]">
            <div className="form-control flex flex-col gap-2 mt-10">
              <p className="text-xl">
                Unlock Exclusive Benefits: Checkout Now, Complete Form!
              </p>
              <label htmlFor="name" className="cursor-pointer">
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Sarah"
                value={formData.name}
                readOnly
                className="bg-transparent outline-none border py-3 px-4 rounded-lg focus:border-gray-500"
              />
            </div>

            <div className="form-control flex flex-col gap-2">
              <label htmlFor="email" className="cursor-pointer">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="hello@gmail.com"
                value={formData.email}
                readOnly
                className="bg-transparent outline-none border py-3 px-4 rounded-lg focus:border-gray-700"
              />
            </div>

            <div className="form-control flex flex-col gap-2">
              <label htmlFor="mobile" className="cursor-pointer">
                Phone number
              </label>
              <input
                type="tel"
                id="mobile"
                placeholder="+88016xxxxxxxx"
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
                required
                className="bg-transparent outline-none border py-3 px-4 rounded-lg focus:border-gray-700"
              />
            </div>

            <div className="form-control flex flex-col gap-2">
              <label htmlFor="address" className="cursor-pointer">
                Address
              </label>
              <input
                type="text"
                id="address"
                placeholder="ABC.... "
                value={formData.address}
                onChange={(e) =>
                  setFormData({ ...formData, address: e.target.value })
                }
                required
                className="bg-transparent outline-none border py-3 px-4 rounded-lg focus:border-gray-700"
              />
            </div>

            <div className="form-control flex flex-col gap-2">
              <label htmlFor="address" className="cursor-pointer">
                Meal title
              </label>
              <input
                type="text"
                id="mealTitle"
                placeholder="vegitable curry"
                value={formData.mealTitle}
                readOnly
                className="bg-transparent outline-none border py-3 px-4 rounded-lg focus:border-gray-700"
              />
            </div>

            <div className="form-control flex flex-col gap-2">
              <label htmlFor="address" className="cursor-pointer">
                Price (USD)
              </label>
              <input
                type="number"
                id="price"
                placeholder="$100"
                value={formData.price}
                readOnly
                className="bg-transparent outline-none border py-3 px-4 rounded-lg focus:border-gray-700"
              />
            </div>
            <button
              role="link"
              type="submit"
              className="bg-orange-400 py-4 rounded-lg text-white uppercase hover:bg-orange-500 duration-300"
            >
              Proceed to checkout
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

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
