import React, { useState } from 'react'

function InputSample({label='عنوان',placeholder='متن راهنما',onEditForm,whichIndex}) {
  const [labelInput, setLabelInput] = useState(label)
  const [placeholderInput, setPlaceholderInput] = useState(placeholder)
  return (
    <div className="m-2 my-4">
        <input onBlur={()=>onEditForm({indexItem:whichIndex,keyItem:'label',valueItem:labelInput})} onChange={(e)=>setLabelInput(e.target.value)} className="text-sm mb-2 text-gray-600 bg-transparent outline-none" value={labelInput}></input>
        <input  onBlur={()=>onEditForm({indexItem:whichIndex,keyItem:'placeholder',valueItem:labelInput})} onChange={(e)=>setPlaceholderInput(e.target.value)} className=' w-full border bg-gray-100 rounded-md py-2 px-4 text-gray-400 leading-tight focus:outline-none focus:shadow-outline' type="text"   value={placeholderInput}/>
    </div>
  )
}

export default InputSample