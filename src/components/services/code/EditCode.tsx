import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { FaRegSave } from "react-icons/fa";

const EditCode: FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="bg-gray-200 rounded-lg shadow-xl mt-10 w-full px-32 py-12 shadow-3xl">
        <div className="flex justify-between">
          <span className="text-2xl">Kody Üýtgetmek</span>
          <button
            onClick={() => navigate("/codes")}
            type="button"
            className="px-4 py-3 shadow-2xl bg-green-600 text-white rounded"
          >
            Yza dolanmak
          </button>
        </div>
        <div className="grid  md:grid-cols-1 lg:grid-cols-2  gap-5 w-full">
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="kod">Kod *</label>
            <input
              id="kod"
              placeholder="Kody Giriziň *"
              className="w-full py-2 px-4 rounded outline-none"
              type="text"
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="ady">Ady *</label>
            <input
              id="ady"
              placeholder="Adyny Ýazyň *"
              className="w-full py-2 px-4 rounded outline-none"
              type="text"
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="ady">Gysgaça Ady *</label>
            <input
              id="short"
              placeholder="Gysgaça Adyny Ýazyň *"
              className="w-full py-2 px-4 rounded outline-none"
              type="text"
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="parentId">Parent ID *</label>
            <input
              id="parentId"
              placeholder="Parent ID Ýazyň *"
              className="w-full py-2 px-4 rounded outline-none"
              type="number"
            />
          </div>
        </div>
        <div className="flex w-full flex-col gap-2 mt-5">
          <label htmlFor="dusundiris"> Düşündiriş *</label>
          <textarea
            id="dusundiris"
            placeholder="Düşündiriş Ýazyň *"
            className="w-full h-32 py-2 px-4 rounded outline-none"
          ></textarea>
        </div>
        <div className="flex gap-5 mt-10">
          <button
            onClick={() => navigate("/codes")}
            type="button"
            className="bg-gray-300 hover:bg-gray-400 hover:text-white shadow-2xl text-black transition-all  py-3 px-4  rounded"
          >
            Goý bolsun et
          </button>
          <button
            type="button"
            className="text-white shadow-2xl hover:shadow-3xl rounded bg-green-600 px-4 flex items-center justify-center hover:bg-green-700"
          >
            <FaRegSave className="mr-2" />
            Ýatda Saklamak
          </button>
        </div>
        <div className="flex justify-center mt-10">
          <span className="text-gray-400">© 2023 Ähli hukuklary goragly.</span>
        </div>
      </div>
    </div>
  );
};

export default EditCode;
