import React from 'react'

function InputSample({label='عنوان',placeholder='متن راهنما'}) {
  return (
    <div className="m-2 my-4">
        <p className="text-sm mb-2 text-gray-600">{label}</p>
        <input className=' w-full border rounded-md py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text"   placeholder={placeholder}/>
    </div>
  )
}

export default InputSample