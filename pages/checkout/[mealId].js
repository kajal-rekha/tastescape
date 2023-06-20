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
      <SectionHeader
        span={"Checkout"}
        h2={"Personalize Your Order by Sharing Your Details!"}
        p={"Unlock Exclusive Benefits: Complete the Checkout Form Now!"}
      />
      <div className="checkout-form  grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
        <div className="checkout-left hidden md:block w-full h-screen overflow-hidden mt-14 ">
          <Image
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1687241238/photo-1589010588553-46e8e7c21788_qlvzuz.jpg"
            alt="logo"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-lg"
            priority
          />
        </div>

        <div className="checkout-right flex justify-center">
          <form className="flex flex-col gap-5 mt-10 w-full lg:w-[35rem]">
            <div className="form-control flex flex-col gap-2">
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
                Course title
              </label>
              <input
                type="text"
                id="courseTitle"
                placeholder="Mastering Graphic Design"
                value={formData.courseTitle}
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
