import { Route, Routes } from "react-router-dom";
import About from "../../../components/about/About";
import BannerHome from "../../../components/BannerHome/BannerHome";
import SideNav from "../../../components/nav/SideNav";
import Services from "../../../components/Services/Services";
import SegmentsWeServe from "../../../components/SegmentsWeServe/SegmentsWeServe";

const Pages = () => {
  return (
    <div>
      <BannerHome />
      <SideNav />

      <div className="ml-[20rem] overflow-hidden">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/segmentsweserve" element={<SegmentsWeServe />} />
        </Routes>
      </div>
    </div>
  );
};

export default Pages;
