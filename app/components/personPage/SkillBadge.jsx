import React, { useState } from 'react';


const SkillBadge = ({ name }) => {

  return <span className='inline-block px-2 m-1 py-1 rounded-lg text-white bg-blue-500'>{name}</span>;
};

export default SkillBadge;