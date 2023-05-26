const Footer = () => {
  return (
    <footer className="py-8 flex flex-col gap-3 items-center bg-rose-200 opacity-75">
      <h2 className="italic text-2xl font-semibold">
        taste<span className="text-rose-500">scape</span>
      </h2>
      <p>&copy; {new Date().getFullYear()} tastescape.All rights reserved</p>
    </footer>
  );
};

export default Footer;
