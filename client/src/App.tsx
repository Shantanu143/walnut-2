import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Pages from "./pages/home/PageWithSideNav/Pages";
import Login from "./pages/admin/Login";
import Admin from "./pages/admin/Admin";
import Create from "./components/blog/Create";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/aboutus" element={<Pages />} />
      <Route path="/admin" element={<Login />} />
      <Route path="/admin-page" element={<Admin />} />
      <Route path="/admin/create" element={<Create />} />
    </Routes>
  );
};

export default App;
