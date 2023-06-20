//import Image from "next/image";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-8 flex flex-col gap-3 items-center bg-teal-900">
      <Link href="/" className="text-orange-400 font-medium text-xl">
        tastescape
      </Link>
      <p>&copy; {new Date().getFullYear()} tastescape.All rights reserved</p>
    </footer>
  );
};

export default Footer;
