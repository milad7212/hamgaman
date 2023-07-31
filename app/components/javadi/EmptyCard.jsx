import React from "react";
import { BsPlusCircle } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
function EmptyCard({ children, whichIndex, onFormAddDelete }) {
  return (
    <div className="my-8 m-4 border  relative border-dashed border-gray-400 rounded-md h-28 hover:shadow-xl duration-200 ease-in cursor-pointer hover:border-solid">
      <div className=" absolute left-2 top-2">
        <AiOutlineDelete
          onClick={() =>
            onFormAddDelete({ type: "delete", indexItem: whichIndex })
          }
          className="text-gray-800 hover:text-red-500 hover:scale-125 duration-150 ease-in"
        />
      </div>

      <div className=" left-0 right-0 flex justify-center absolute -top-3">
        <BsPlusCircle
          onClick={()=>
            onFormAddDelete({ type: "add", indexItem: whichIndex })
          }
          size={25}
          className="text-gray-400 hover:text-gray-700"
        />
      </div>
      <div
        onClick={() =>
          onFormAddDelete({ type: "add", indexItem: whichIndex + 1 })
        }
        className=" left-0 right-0 flex justify-center absolute -bottom-3"
      >
        <BsPlusCircle size={25} className="text-gray-400 hover:text-gray-700" />
      </div>

      {children}
    </div>
  );
}

export default EmptyCard;
