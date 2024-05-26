import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BlogType } from "../../typescript/res";
import { useNavigate, useParams } from "react-router-dom";

const Blog = () => {
  const [data, setData] = useState<BlogType>();

  const { id } = useParams();
  const img =
    "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg";

  const navigate = useNavigate();

  const GetData = async () => {
    const res = await fetch(`/api/blog/get/${id}`);
    const { data, success } = await res.json();

    if (success) {
      setData(data);
    } else {
      console.log("Check internet connection!");
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  const handleDelete = async () => {
    const res = await fetch(`/api/post/delete/${id}`, {
      method: "DELETE",
    });
    const { success, message } = await res.json();

    if (success === true) {
      toast.success(message);

      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      toast.error("Got an problem while deleting!");
    }
  };

  return (
    <section className="w-[1300px] h-full  flex flex-col justify-start gap-4 items-center">
      {data?.title ? (
        <>
          <div className="w-[70%] overflow-hidden flex gap-6 justify-center items-center flex-col h-auto mt-16">
            <h1 className="text-3xl h-auto bg-red-200 items-cente font-bold mb-4">
              {data.title}
            </h1>

           <div className="flex flex-row gap-3">
            <span className="font-semibold">{data.auther.name}</span>
            <span className="">20/3/2022</span>
           </div>
            <img
              src={`${data?.MainPoster}`}
              onError={(e) => {
                e.currentTarget.src = img;
              }}
              className="w-[85%] h-[55vh] mt-10 m-auto object-cover"
              alt="img"
            />
          </div>
          <div
            className=" w-[65%] m-auto h-[1500px] mb-20"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />{" "}
        </>
      ) : (
        ""
      )}
    </section>
  );
};

export default Blog;
