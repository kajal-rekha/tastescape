import Image from "next/image";

const Footer = () => {
  return (
    <footer className="py-8 flex flex-col gap-3 items-center bg-teal-900">
      <Image
        src="https://res.cloudinary.com/dh0ado2ir/image/upload/v1687201889/cooltext437920939371267_pzxptk.png"
        alt="logo"
        width={150}
        height={150}
        className="object-cover"
      />
      <p>&copy; {new Date().getFullYear()} tastescape.All rights reserved</p>
    </footer>
  );
};

export default Footer;
