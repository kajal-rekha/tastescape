import { FiLogOut } from "react-icons/fi";
import Image from "next/image";
import { getSession } from "next-auth/react";

const ProfilePage = ({ session }) => {
  return (
    <div
      className="min-h-screen wrapper py-10 flex flex-col items-center mt-20"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <Image
        src={session.user.image}
        alt={session.user.name}
        width={50}
        height={50}
        className="h-20 w-20 rounded-full border-2 border-black"
      />
      <h2 className="text-3xl mt-2">Welcome, {session.user.name}</h2>

      <button
        // onClick={logOutWithGoogle}
        className="flex gap-2 items-center bg-black text-white py-3 px-6 rounded-lg mt-10 hover:bg-gray-700 duration-300"
      >
        <span>
          <FiLogOut />
        </span>
        Logout
      </button>
    </div>
  );
};

export default ProfilePage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
};
