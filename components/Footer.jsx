const Footer = () => {
  return (
    <footer className="py-8 flex flex-col gap-3 items-center bg-teal-900">
      <h2 className="text-2xl font-semibold">
        taste<span className="">scape</span>
      </h2>
      <p>&copy; {new Date().getFullYear()} tastescape.All rights reserved</p>
    </footer>
  );
};

export default Footer;
