import React from "react";
import AparatVideo from "./AparatVideo";

function Resume() {
  return (
    <div className="">
      <div className="">
        <p className="my-4 font-bold text-gray-600">ویدیو</p>
        <div className="flex justify-center ">
        <AparatVideo videoId="85193848181" />
        </div>
      </div>
      <div className="">
        <p className="">مهارت ها</p>
      </div>
      <div className="">
        <p className="">صدا</p>
      </div>
      <div className="">
        <p className="">نوشته</p>
      </div>
    </div>
  );
}

export default Resume;
