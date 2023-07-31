"use client";

import React, { useState } from "react";
import EmptyCard from "../components/javadi/EmptyCard";
import InputSample from "../components/javadi/InputSample";
import {VscPreview} from 'react-icons/vsc'

function Page() {
  const [dataForm, setDataForm] = useState([
    {
      type: "InputSample",
      data: {
        label: "عنوان",
        placeholder: "متن خود را وارد نمایید",
      },
    },
    {
      type: "InputSample",
      data: {
        label: "عنوان",
        placeholder: "متن خود را وارد نمایید",
      },
    },
    {
      type: "InputSample",
      data: {
        label: "عنوان",
        placeholder: "متن خود را وارد نمایید",
      },
    },
  ]);

  function generateForm(dataForm) {
    return dataForm.map((item,index) => {
      switch(item.type) {

        case 'InputSample':
          return (
            <EmptyCard whichIndex={index} key={item.data.label}>
              <InputSample 
                label={item.data.label}
                placeholder={item.data.placeholder} 
              />
            </EmptyCard>
          );
  
        default:
          return null;
      }
    });
  }
  
 
  
  
  return (
    <div className="bg-gray-200 min-h-screen">
      <div className="flex relative justify-center py-4">
        <span className="absolute left-6">
          <VscPreview size={25} className="text-gray-600 cursor-pointer hover:scale-105 duration-200 ease-in hover:text-gray-900"/>
        </span>
        {/* <span className='font-bold text-blue-600 text-xl'>فرم ساز آنلاین</span> */}
      </div>
      <div className="">
        {generateForm(dataForm)}

        <EmptyCard>
          <InputSample />
        </EmptyCard>
      </div>
    </div>
  );
}

export default Page;