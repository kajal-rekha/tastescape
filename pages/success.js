import Button from "@/components/Button";
import { getSession } from "next-auth/react";
import { useRouter } from "next/router";
import { AiOutlineCheckSquare } from "react-icons/ai";
import { useEffect } from "react";

const SuccessPage = ({ session }) => {
  const router = useRouter();
  useEffect(() => {
    if (!session) {
      router.replace("/users/login");
    }
  }, [session, router]);

  if (!session) {
    return null;
  }
  return (
    <div className="wrapper py-10 min-h-screen mt-10">
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-3xl text-gray-300 flex items-center gap-2">
          <span className="text-emerald-500">
            <AiOutlineCheckSquare />
          </span>
          {`You've ordered successfully!`}
        </h2>
        <Button href="/orders" placeholder="Go to your orders" />
      </div>
    </div>
  );
};

export default SuccessPage;

export const getServerSideProps = async (context) => {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/users/login",
        permanent: true,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
};
