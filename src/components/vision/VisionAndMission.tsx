import { FaEye, FaHandHoldingMedical } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";

const VisionAndMission = () => {
  const projects = [
    {
      title: "Purpose",
      description:
        "Our purpose is to ignite positive transformation through strategic insights and innovative solutions that propel growth and innovation.",

      icon: <FaHandHoldingMedical />,
    },
    {
      title: "Vision",
      description:
        "Revolutionize the Business landscape, creating world-class organizations valued by customers and employees alike.",
      icon: <FaEye />,
    },
    {
      title: "Mission",
      description:
        "To guide businesses and professionals toward unparalleled growth, steadfast integrity and unwavering dedication.",
      icon: <TbTargetArrow />,
    },
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-4">
          {projects.map((data,index) => {
            return (
              <div className="p-4  lg:w-[25%]" key={index}>
                <div className="h-full bg-[#005B96] bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    {data.title}
                  </h1>
                  <p className="leading-relaxed text-[#FFFFE0] mb-3">{data.description}</p>
                  
                  <div className="flex justify-center items-center mt-8 text-[#ff0000]  tracking-wide leading-relaxed text-5xl">
                    {data.icon}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default VisionAndMission;
