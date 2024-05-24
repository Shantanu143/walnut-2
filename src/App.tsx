import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Pages from "./pages/home/PageWithSideNav/Pages";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus/*" element={<Pages />} />
      </Routes>
    </div>
  );
};

export default App;
