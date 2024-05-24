import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Pages from "./pages/home/PageWithSideNav/Pages";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/aboutus" element={<Pages />} />
        <Route path="/admin" element={<h1>Admin</h1>} />
        </Routes>
    );
};

export default App;
