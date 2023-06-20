import { useSession } from "next-auth/react";
import Link from "next/link";
import Button from "./Button";
//import Image from "next/image";
const Navbar = () => {
  const { data: session } = useSession();
  return (
    <div className="h-20 bg-teal-900   text-gray-300  flex items-center">
      <div className="wrapper flex justify-between items-center">
        <div>
          {/* <Image
            src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1687201889/cooltext437920939371267_pzxptk.png"
            alt="logo"
            width={150}
            height={150}
            className="object-cover"
          /> */}
          <Link href="/" className="text-orange-400 font-medium text-xl">
            tastescape
          </Link>
        </div>

        <div className="flex gap-5">
          <Link href="/" className="hover:text-orange-400 duration-300">
            Home
          </Link>
          <Link href="/meals" className="hover:text-orange-400 duration-300">
            Meals
          </Link>

          <Link href="/about" className="hover:text-orange-400 duration-300">
            About
          </Link>
          <Link href="/contact" className="hover:text-orange-400 duration-300">
            Contact
          </Link>
        </div>

        <div>
          {!session ? (
            <Button href="/users/login" placeholder="Sign in" color="primary" />
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
