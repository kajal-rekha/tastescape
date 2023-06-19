import { useSession } from "next-auth/react";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className="h-20 bg-rose-100 opacity-75 text-gray-900 flex items-center">
      <div className="wrapper flex justify-between">
        <Link href="/" className="italic text-2xl font-semibold">
          taste<span className="text-rose-500">scape</span>
        </Link>

        <div className="flex gap-5">
          <Link href="/" className="hover:text-rose-500 duration-300">
            Home
          </Link>
          <Link href="/meals" className="hover:text-rose-500 duration-300">
            Meals
          </Link>

          <Link href="/about" className="hover:text-rose-500 duration-300">
            About
          </Link>
          <Link href="/contact" className="hover:text-rose-500 duration-300">
            Contact
          </Link>
        </div>

        <div>
          {!session ? (
            <Button
              href="/users/login"
              placeholder="Sign in"
              color="secondary"
            />
          ) : (
            <Button
              href="/users/profile"
              placeholder="profile"
              color="primary"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
