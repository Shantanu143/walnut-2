import React from "react";
import { useNavigate } from "react-router-dom";
import { CiEdit } from "react-icons/ci";

interface Blog {
  id: string;
  title: string;
  description: string;
  date: string;
  auther: string;
  img: string;
}

const card = ({ title, auther, date, description, img, id }: Blog) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const Navigation = useNavigate();

  return (
    <section className="flex gap-4 w-[700px] p-6 flex-row border rounded-lg border-black">
      <CiEdit
        className="relative -top-4 left-[96%] cursor-pointer w-[300px] h-[27px] font-extrabold duration-300 hover:text-blue-800 hover:scale-125"
        onClick={() => Navigation(`/edit/${id}`)}
      />

      <img
        className="w-[300px] rounded-md object-contain  hover:scale-105 duration-500"
        src={img}
        alt="img"
      />

      <div className="p-3">
        <h2 className="text-sm font-semibold">{title}</h2>
        <div className="text-xs flex flex-row gap-2 mt-1">
          <span className=" font-bold">{auther}</span>
          <span className="font-semibold">{date}</span>
        </div>

        <p className="text-sm line-clamp-4 mt-2">{description}</p>
      </div>
    </section>
  );
};

export default card;
