import React from "react";
import Image from "next/image";
import { BsFillHeartFill } from "react-icons/bs";
import { GoComment, GoNote } from "react-icons/go";
import C from "classnames";

function PersonCard({ data, clickOnHeart }) {
  const classCard = C({
    "ring-gray-900 ring-4": data.favorite,
  });
  const classIcon = C({
    "text-red-600": data.favorite,
  });

  return (
    <div className={`bg-white rounded shadow-lg overflow-hidden ${classCard}`}>
      <div className="h-40 p-1 bg-gray-900 rounded-b-sm flex overflow-hidden relative">
        <div className="h-full aspect-square rounded-sm shadow-sm relative">
          <Image
            className="rounded-md border-l-gray-300 border-l-2"
            src="/images/milad.jpeg"
            alt="My Image"
            fill
          />
        </div>
        <div className="flex justify-around flex-col items-center w-[70%]">
          <div className="flex items-center">
            <BsFillHeartFill
              size={25}
              className="text-gray-200 cursor-pointer"
            />
            <span className="text-gray-200 mr-2">{data.hearts ?? 0}</span>
          </div>
          <div className="flex items-center">
            <GoComment size={25} className="text-gray-200  cursor-pointer" />
            <span className="text-gray-200 mr-2">{data.comments ?? 0}</span>
          </div>
          <div className="flex items-center">
            <GoNote size={25} className="text-gray-200 cursor-pointer" />
            <span className="text-gray-200 mr-2">{data.notes ?? 0}</span>
          </div>
        </div>
      </div>
      <div className="p-3">
        <h2 className="text-lg font-bold">{data.name}</h2>
        <span className="text-gray-700 my-2">{data.skills.join(" | ")}</span>
        <div className="flex items-center mt-4 justify-between">
          <div className="flex">
            <BsFillHeartFill
              onClick={() => clickOnHeart(data)}
              size={25}
              className={`${classIcon} cursor-pointer`}
            />
          </div>
          <a className="text-left my-2 text-gray-800" href="tel:09139939426">
            09139939426
          </a>
        </div>
      </div>
    </div>
  );
}

export default React.memo(PersonCard);
