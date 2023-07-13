import React from "react";

function Resume() {
  return (
    <div className="">
      <div className="">
        <p className="">ویدیو</p>
        <div className="">
            <video controls>
              <source
                src="https://www.aparat.com/embed/026da?data[rnddiv]=55367381084&data[responsive]=yes"
                type="video/mp4"
              />
            </video>
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
