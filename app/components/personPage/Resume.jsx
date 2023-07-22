import React from "react";
import AparatVideo from "./AparatVideo";
import SkillBadge from "./SkillBadge";

function Resume() {
  return (
    <div className="">
      <div className="">
        <p className="my-4 font-bold text-gray-600">ویدیو</p>
        <div className="flex justify-center ">
        <AparatVideo videoId="85193848181" />
        </div>
      </div>
      <div className="flex-wrap gap-4">
        <p className="">مهارت ها</p>
        <SkillBadge name="طراحی داخلی"/>
        <SkillBadge name="محاسبات سازه"/>
        <SkillBadge name="کارشناس ارشد دادگستری"/>
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
