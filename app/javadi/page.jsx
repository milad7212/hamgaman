"use client";

import React, { useState } from "react";
import EmptyCard from "../components/javadi/EmptyCard";
import InputSample from "../components/javadi/InputSample";

function Page() {
  const [dataForm, setDataForm] = useState([]);
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="flex justify-center py-4">
        {/* <span className='font-bold text-blue-600 text-xl'>فرم ساز آنلاین</span> */}
      </div>
      <div className="">
        <EmptyCard />
        <EmptyCard>
          <InputSample />
        </EmptyCard>
      </div>
    </div>
  );
}

export default Page;
