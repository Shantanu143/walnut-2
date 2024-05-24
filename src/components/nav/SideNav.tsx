import { Link } from "react-router-dom";
import logoImg from "../../assets/Walnut_logo.png";
import { BiHomeSmile } from "react-icons/bi";
import { BsPeopleFill, BsSegmentedNav } from "react-icons/bs";
import { FaServicestack } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { GrConnect } from "react-icons/gr";
import { useState } from "react";

const SideNav = () => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const navlinks = [
    {
      id: 1,
      title: "Home",
      route: "/",
      icon: <BiHomeSmile />,
      bgcolor: "bg-[#011f4b]",
      submenu: [],
    },
    {
      id: 2,
      title: "About Us",
      route: "/aboutus",
      icon: <BsPeopleFill />,
      bgcolor: "bg-[#03396c]",
      submenu: [
        { id: 7, title: "Our Team", route: "/aboutus/ourteam" },
        { id: 8, title: "Our Story", route: "/aboutus/ourstory" },
      ],
    },
    {
      id: 3,
      title: "Services",
      route: "/aboutus/services",
      icon: <FaServicestack />,
      bgcolor: "bg-[#005b96]",
      submenu: [
        { id: 9, title: "Business strategy Consultation", route: "/aboutus/consulting" },
        { id: 10, title: "Coaching & Mentoring for Startups & SMEs", route: "/aboutus/coaching" },
        { id: 11, title: "Financial Management consultancy", route: "/aboutus/financial" },
        { id: 11, title: "Marketing  & Sales  Consultation", route: "/aboutus/marketing  " },
        { id: 11, title: "Corporate training & Skill enhancement", route: "/aboutus/corporate" },
        { id: 11, title: "B2B & B2G Sales Strategy", route: "/aboutus/b2b" },
        { id: 11, title: "Retainership  Commitment  ", route: "/aboutus/retainership" },
      ],
    },
    {
      id: 4,
      title: "Segments we Serve",
      route: "/aboutus/segmentsweserve",
      icon: <BsSegmentedNav />,
      bgcolor: "bg-[#6497b1]",
      submenu: [],
    },
    {
      id: 5,
      title: "Continuous Learning",
      route: "/aboutus/continuouslearning",
      icon: <GiGraduateCap />,
      bgcolor: "bg-[#92d2f9]",
      submenu: [],
    },
    {
      id: 6,
      title: "Lets Connect",
      route: "/aboutus/letsconnect",
      icon: <GrConnect />,
      bgcolor: "bg-[#b3cde0]",
      submenu: [],
    },
  ];

  return (
    <div className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-hidden lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
      <div className="px-10">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logoImg} className="w-[10rem] h-[10rem]" alt="logo" />
        </a>
      </div>
      <nav className="hs-accordion-group mt-3 h-full w-full flex flex-col bg-[#005b96]">
        <ul className="overflow-y-auto">
          {navlinks.map((data) => (
            <li
              key={data.id}
              className="relative group"
              onMouseEnter={() => setActiveSubmenu(data.id)}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <Link
                className={`flex items-center gap-x-3.5 py-6 px-2.5 ${data.bgcolor} text-base text-gray-100 hover:bg-[#ff0000] transition-all duration-300`}
                to={data.route}
                style={{ width: activeSubmenu === data.id ? "100%" : "auto" }}
              >
                <span className="text-xl">{data.icon}</span>
                {data.title}
              </Link>
              {data.submenu.length > 0 && activeSubmenu === data.id && (
                <ul className="absolute left-0 top-full mt-1 w-48 bg-white shadow-lg z-50">
                  {data.submenu.map((submenu) => (
                    <li key={submenu.id}>
                      <Link
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-200"
                        to={submenu.route}
                      >
                        {submenu.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SideNav;
