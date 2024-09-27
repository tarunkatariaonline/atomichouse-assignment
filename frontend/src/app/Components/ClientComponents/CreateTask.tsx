"use client"



import React, { useCallback, useState } from 'react'
import { useCreateTask } from '@/hooks/taskCreate'
import toast from 'react-hot-toast'


const CreateTask = () => {

  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  const [status,setStatus] = useState("TODO")
  const {mutate} = useCreateTask()

  const createTaskHandler = useCallback(()=>{
   
      if(title.length===0){
          toast.error("Please enter a title !")
      }else{
     mutate({title,description,status})
      }
     
  },[title,description,mutate,status])
 
  return (
   
   


    
   
<div className=' w-full p-3 h-full'>
            <p >Task Title :</p>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className=' w-full h-10 border-gray-500 outline-blue-400  my-2 rounded-md  border-2
            ' placeholder=' Enter Task Title'/>
            <p >Task Description :</p>
            <input value={description} onChange={(e)=>{
                setDescription(e.target.value)
            }} className=' w-full h-14 border-2 border-gray-500 outline-blue-400  my-2 rounded-md
            ' placeholder=' Enter Task Description'/>
              <p >Task Status :</p>
        <select className=' w-full h-10 border-2 border-gray-500 outline-blue-400  my-2 rounded-md
' value={status} onChange={(e)=>{
    setStatus(e.target.value)
}}>
            <option value="TODO">TODO</option>
            <option value="INPROGRESS">INPROGRESS</option>
            <option value="DONE">DONE</option>

        </select>
            <button  onClick={createTaskHandler} className=' text-white bg-gradient-to-r from-pink-400 via-blue-500 to-yellow-300  my-4 w-full h-10 font-bold  hover:from-pink-500 hover:via-blue-600 hover:to-yellow-500 rounded-md'>
                 CREATE TASK
            </button>

            </div>
    
  

  )
}

export default CreateTask