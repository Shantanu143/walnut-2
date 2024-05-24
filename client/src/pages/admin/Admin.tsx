import { FiPlus } from "react-icons/fi";
import Card from "../../components/blog/card";

const Admin = () => {
  return (
    <section className="flex flex-col gap-14 ">
      <div className="flex flex-row gap-3 bg-blue-200 justify-between p-6 ">
        <div className="bg-green-500 w-[200px] h-20 flex flex-col justify-center items-center text-white font-bold text-lg rounded-md">
          <h1 className="mt-2">Create Blog</h1>
          <FiPlus className="bg-blue-300 w-full mt-3 h-8" />
        </div>
        <div className="bg-green-500 w-[200px] h-20 flex flex-col justify-center items-center text-white font-bold text-lg rounded-md">
          <h1 className="mt-2">Create Blog</h1>
          <FiPlus className="bg-blue-300 w-full mt-3 h-8" />
        </div>
        <div className="bg-green-500 w-[200px] h-20 flex flex-col justify-center items-center text-white font-bold text-lg rounded-md">
          <h1 className="mt-2">Create Blog</h1>
          <FiPlus className="bg-blue-300 w-full mt-3 h-8" />
        </div>
      </div>

      <div className="flex flex-wrap flex-row gap-6 px-6 ml-6 ">
        <Card
          id="123"
          img="https://media.istockphoto.com/id/615422436/photo/demo-sign-cubes.jpg?s=612x612&w=0&k=20&c=HHOLIiF8SmbIssxKv3G480EgTVub_v9cc1QME3Dn6XU="
          title="Lorem ipsum dolor sit. deleniti quae temporibus."
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita est
          saepe rerum repellat ut dicta! Cupiditate, deleniti quae temporibus
          consectetur iusto iure delectus praesentium quisquam quasi aliquam
          modi nam. Excepturi.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          voluptatem, et voluptas deleniti quo dolor, debitis quia maxime
          aspernatur pariatur non rem laudantium dolorum doloribus sint. Et quia
          modi distinctio."
          auther="Suraj Mate"
          date="15/02/2023"
        />

        <Card
          img="https://media.istockphoto.com/id/615422436/photo/demo-sign-cubes.jpg?s=612x612&w=0&k=20&c=HHOLIiF8SmbIssxKv3G480EgTVub_v9cc1QME3Dn6XU="
          title="Lorem ipsum dolor sit. deleniti quae temporibus."
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita est
          saepe rerum repellat ut dicta! Cupiditate, deleniti quae temporibus
          consectetur iusto iure delectus praesentium quisquam quasi aliquam
          modi nam. Excepturi.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          voluptatem, et voluptas deleniti quo dolor, debitis quia maxime
          aspernatur pariatur non rem laudantium dolorum doloribus sint. Et quia
          modi distinctio."
          auther="Suraj Mate"
          date="15/02/2023"
        />

        <Card
          img="https://media.istockphoto.com/id/615422436/photo/demo-sign-cubes.jpg?s=612x612&w=0&k=20&c=HHOLIiF8SmbIssxKv3G480EgTVub_v9cc1QME3Dn6XU="
          title="Lorem ipsum dolor sit. deleniti quae temporibus."
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita est
          saepe rerum repellat ut dicta! Cupiditate, deleniti quae temporibus
          consectetur iusto iure delectus praesentium quisquam quasi aliquam
          modi nam. Excepturi.
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          voluptatem, et voluptas deleniti quo dolor, debitis quia maxime
          aspernatur pariatur non rem laudantium dolorum doloribus sint. Et quia
          modi distinctio."
          auther="Suraj Mate"
          date="15/02/2023"
        />
      </div>
    </section>
  );
};

export default Admin;
