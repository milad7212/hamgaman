import React from "react";
import { BsPlusCircle } from "react-icons/bs";
function EmptyCard({ children }) {
  return (
    <div className="my-8 m-4 border  relative border-dashed border-gray-400 rounded-md h-28 hover:shadow-xl duration-200 ease-in cursor-pointer hover:border-solid">
      <div className=" left-0 right-0 flex justify-center absolute -top-3">
        <BsPlusCircle size={25} className="text-gray-400 hover:text-gray-700" />
      </div>
      <div className=" left-0 right-0 flex justify-center absolute -bottom-3">
        <BsPlusCircle size={25} className="text-gray-400 hover:text-gray-700" />
      </div>

      {children}
    </div>
  );
}

export default EmptyCard;
