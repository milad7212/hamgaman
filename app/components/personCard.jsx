import React from "react";
import Image from "next/image";
import { BsFillBalloonHeartFill } from "react-icons/bs";
import { GoComment } from "react-icons/go";
import C from "classnames";
function PersonCard({ data }) {
  let classCard = C({
    "ring-gray-900  ring-4": data.favorite,
    
  });
  let classIcon = C({
    "text-red-600": data.favorite,
  });
  return (
    <div
      className={`bg-white     rounded shadow-lg overflow-hidden ${classCard}`}
    >
      <div className="h-40 p-1 bg-gray-900 rounded-b-sm flex overflow-hidden relative">
        <div className="h-full aspect-square rounded-sm shadow-sm relative">
          <Image className="" src="/images/milad.jpeg" alt="My Image" fill />
        </div>
      </div>
      <div className="p-3">
        <h2 className="text-lg font-bold">{data.name}</h2>
        <span className="text-gray-700 my-2">{data.skills.join(" |  ")}</span>
        <div className="flex items-center mt-4 justify-between">
          <div className="flex">
            <BsFillBalloonHeartFill size={25} className={ classIcon } />
            <GoComment size={25} className="text-gray-600 mr-4" />
          </div>
          <a className="text-left my-2 text-gray-800" href="tel:09139939426">
            09139939426
          </a>
        </div>
      </div>
    </div>
  );
}

export default PersonCard;
