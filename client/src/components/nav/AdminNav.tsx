import React from "react";

const AdminNav = () => {
  return (
    <header className="h-16 flex justify-between px-16 bg-black items-center">
      <h1 className="text-white font-semibold capitalize text-lg">Walnut Admin</h1>
      <nav className="flex gap-4 text-white">
        <button>Home</button>
        <button>Blog</button>
        <button>Create</button>
        <button>Logout</button>
      </nav>
    </header>
  );
};

export default AdminNav;
