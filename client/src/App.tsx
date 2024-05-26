import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Pages from "./pages/home/PageWithSideNav/Pages";
import Login from "./pages/admin/Login";
import Admin from "./pages/admin/Admin";
import Create from "./pages/blog/Create";
import Blog from "./pages/blog/Blog";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/aboutus" element={<Pages />} />
      <Route path="/admin" element={<Login />} />
      <Route path="/blog/:id" element={<Blog />} />
      <Route path="/admin-page" element={<Admin />} />
      <Route path="/admin/create" element={<Create />} />
    </Routes>
  );
};

export default App;
