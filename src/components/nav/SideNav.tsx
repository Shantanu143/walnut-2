import { Link } from "react-router-dom";
import logoImg from "../../assets/Walnut_logo.png";
import { BiHomeSmile } from "react-icons/bi";
import { BsPeopleFill, BsSegmentedNav } from "react-icons/bs";
import { FaServicestack } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { GrConnect } from "react-icons/gr";

const SideNav = () => {
  const navlinks = [
    {
      id: 1,
      title: "Home",
      route: "/",
      icon: <BiHomeSmile />,
    },
    {
      id: 2,
      title: "About Us",
      route: "/aboutus",
      icon: <BsPeopleFill />,
    },
    {
      id: 3,
      title: "Services ",
      route: "/services",
      icon: <FaServicestack />,
    },
    {
      id: 4,
      title: "Segments we Serve",
      route: "/segmentsweserve",
      icon: <BsSegmentedNav />,
    },
    {
      id: 5,
      title: "Continuous Learning",
      route: "/continuouslearning",
      icon: <GiGraduateCap />,
    },
    {
      id: 6,
      title: "Lets Connect",
      route: "/letsconnect",
      icon: <GrConnect />,
    },
  ];
  return (
    <>
      <div className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
        <div className="px-10">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={logoImg} className="w-[10rem] h-[10rem]    " alt="logo" />
          </a>
        </div>
        <nav
          className="hs-accordion-group mt-3 h-[100vh] overflow-hidden p-6 w-full flex flex-col flex-wrap bg-[#005b96] "
          data-hs-accordion-always-open
        >
          <ul className="space-y-9">
            {navlinks.map((data) => {
              return (
                <li key={data.id}>
                  <Link
                    className="flex items-center  gap-x-3.5 py-2 px-2.5 bg-gray-100 text-base text-gray-700 rounded-lg hover:bg-gray-100"
                    to={data.route}
                  >
                    <span className="size-4 ">{data.icon}</span>
                    {data.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
};
export default SideNav;
