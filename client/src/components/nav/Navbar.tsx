import { Link } from "react-router-dom";
import logoImg from "../../assets/Walnut_logo.png";
const Navbar = () => {
  const navlinks = [
    {
      id: 1,
      title: "Home",
      route: "/",
    },
    {
      id: 2,
      title: "About Us",
      route: "/aboutus",
    },
    {
      id: 3,
      title: "Services ",
      route: "/services",
    },
    {
      id: 4,
      title: "Segments we Serve",
      route: "/segmentsweserve",
    },
    {
      id: 5,
      title: "Continuous Learning",
      route: "/continuouslearning",
    },
    {
      id: 6,
      title: "Lets Connect",
      route: "/letsconnect",
    },
  ];
  return (
    <header className="text-gray-600 bg-[#ff9a00] body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img
            src={logoImg}
            className="w-20 h-20 text-white p-2 bg-indigo-500 rounded-full"
            alt="logo"
          />

          <span className="ml-3 text-xl">Walnut</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          {/* <ul> */}
            {navlinks.map((data) => {
            return (
                <Link key={data.id} to={data.route} className="mr-5 hover:text-[#b3cde0] transition-colors duration-300">
                    {data.title}
                </Link>
            );
            })}
          {/* </ul> */}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
