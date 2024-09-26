"use client"

import Image from 'next/image'

import Logo from '../../../Assets/clickup-symbol-logo-BB24230BBB-seeklogo.com.png'

import React, { useCallback, useState } from 'react'
import { useCreateTask } from '@/hooks/taskCreate'
import toast from 'react-hot-toast'


const Page = () => {

  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  const {mutate} = useCreateTask()

  const createTaskHandler = useCallback(()=>{
   
      if(title.length===0){
          toast.error("Please enter a title !")
      }else{
     mutate({title,description})
      }
     
  },[title,description,mutate])
 
  return (
    <div className=' w-full  h-[90vh] flex justify-center items-center bg-gray-200'>
   <div className=' w-[40%]  max-md:w-[90%] shadow-xl  bg-white   rounded-md'>

<div className=' w-full flex justify-center m-2'>
<Image width={25} height={25} src={Logo} alt='logo'/>   
</div>  
     
    
   
<div className=' w-full p-3 h-full'>
            <p >Task Title :</p>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className=' w-full h-10 border-gray-500 outline-blue-400  my-2 rounded-md  border-2
            ' placeholder=' Enter Task Title'/>
            <p >Task Description :</p>
            <textarea value={description} onChange={(e)=>{
                setDescription(e.target.value)
            }} className=' w-full h-20 border-2 border-gray-500 outline-blue-400  my-2 rounded-md
            ' placeholder=' Enter Task Description'/>
            <button  onClick={createTaskHandler} className=' text-white bg-gradient-to-r from-pink-400 via-blue-500 to-yellow-300  my-4 w-full h-10 font-bold  hover:from-pink-500 hover:via-blue-600 hover:to-yellow-500 rounded-md'>
                 CREATE TASK
            </button>

            </div>
    
  
     </div>
       </div>
  )
}

export default Page