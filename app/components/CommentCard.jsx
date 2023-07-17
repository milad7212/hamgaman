import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { BsFillHeartFill } from "react-icons/bs";
import { AiFillLike ,AiFillDislike } from "react-icons/ai";


import classNames from "classnames";
import PropTypes from "prop-types";

const ComponentCard = ({ name, comment, tags }) => {
  const router = useRouter();

  const [color, setColor] = useState("");

  useEffect(() => {
    const randomColor = Math.floor(Math.random() * 1000000) + 1;
    setColor(`#${randomColor}`);
  }, []);

  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  return (
    <div
      className={classNames(
        "bg-white rounded shadow-lg overflow-hidden my-1",
        {
          "border": true,
          "border-radius": 10,
          "border-color": color,
        },
      )}
    >
      <div className="p-3 ">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-gray-700 my-2">{comment}</p>
        
          <div className="flex items-center justify-end ">
            <AiFillLike
              size={25}
              className={`text-${color} mb-2`}
              onClick={() => setLikes(likes + 1)}
              color="green"
            />
            <span className="mx-2 text-left">{likes}</span>
            
            <AiFillDislike
              size={25}
              className={`text-${color}`}
              color="red"
              onClick={() => setLikes(likes - 1)}
            />
          </div>
          
        
      </div>
      
    </div>
  );
};

ComponentCard.propTypes = {
  name: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ComponentCard;
