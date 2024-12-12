import Logo from '../assets/Logo.png'
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { useState } from 'react';

const Sidebar = () => {
  const [clicked, setClicked] =useState(false)

  const handelMenu=(e)=>{
    setClicked(!clicked)
  }
  console.log(clicked);

  return (
    <div className='md:hidden'>
         <div><img className='w-[150px] fixed top-[5px]' src={Logo} alt="" /></div>
         <AiOutlineMenuUnfold className='text-3xl text-[#A5D6A7] fixed top-28 left-6 hover:cursor-pointer' onClick={handelMenu}/>
    </div>
  )
}

export default Sidebar