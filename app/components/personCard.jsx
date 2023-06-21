import React from "react";
import { useRouter } from 'next/router';
import Image from "next/image";
import { BsFillHeartFill } from "react-icons/bs";
import { GoComment, GoNote } from "react-icons/go";
import classNames from "classnames";
import PropTypes from "prop-types";

function PersonCard({ data, clickOnHeart }) {
  const router = useRouter();
  const handleDivClick = () => {
    router.push('/person'); // Replace '/new-route' with the desired route you want to navigate to
  };
  const cardClass = classNames("bg-white", "rounded", "shadow-lg", "overflow-hidden", {
    "ring-gray-900 ring-4": data.favorite,
  });

  const iconClass = classNames({
    "text-red-600": data.favorite,
  });

  return (
    <div className={cardClass} onClick={handleDivClick}>
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
          <div className="flex items-center justify-center">
            <span className="text-gray-100 ml-2">{data.liked ?? 0}</span>
            <BsFillHeartFill
              size={25}
              className="text-gray-200 cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-center">
            <span className="text-gray-100 ml-2">{data.comments?.length ?? 0}</span>
            <GoComment size={25} className="text-gray-200  cursor-pointer" />
          </div>
          <div className="flex items-center justify-center">
            <span className="text-gray-100 ml-2">{data.notes?.length ?? 0}</span>
            <GoNote size={25} className="text-gray-200 cursor-pointer" />
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
              className={`${iconClass} cursor-pointer`}
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

PersonCard.propTypes = {
  data: PropTypes.shape({
    favorite: PropTypes.bool,
    liked: PropTypes.number,
    comments: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        writer: PropTypes.shape({
          id: PropTypes.number,
          name: PropTypes.string,
          family: PropTypes.string,
          date: PropTypes.string,
        }),
      })
    ),
    notes: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        text: PropTypes.string,
        date: PropTypes.string,
      })
    ),
    name: PropTypes.string,
    skills: PropTypes.arrayOf(PropTypes.string),
  }),
  clickOnHeart: PropTypes.func.isRequired,
};

export default React.memo(PersonCard);
