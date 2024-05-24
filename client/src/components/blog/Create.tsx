import React from "react";
import AdminNav from "../nav/AdminNav";

const Create = () => {
  return (
    <>
      <AdminNav />
      <section className="m-auto flex flex-col justify-center items-center w-[80%] mt-16">
        <h1>Create Blog</h1>

        <form className="flex flex-col gap-2 items-center w-[50%]">
          <div className="flex flex-col gap-1 w-[70%]">
            <span>Title</span>
            <input
              type="text"
              required
              className="p-3 border border-black w-[100%] active:outline-blue-200"
            />
          </div>

          <div className="flex flex-col gap-1 w-[70%]">
            <span>Title</span>
            <input
              type="text"
              required
              className="p-3 border border-black w-[100%]"
            />
          </div>

          <div className="flex flex-col gap-1 w-[70%]">
            <span>Title</span>
            <input
              type="text"
              required
              className="p-3 border border-black w-[100%]"
            />
          </div>

          <div className="flex flex-col gap-1 w-[70%]">
            <span>Title</span>
            <input
              type="text"
              required
              className="p-3 border border-black w-[100%]"
            />
          </div>
        </form>
      </section>
    </>
  );
};

export default Create;
