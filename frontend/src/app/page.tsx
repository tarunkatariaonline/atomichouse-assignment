"use client"

import Image from "next/image";

import { useCallback } from "react";
import Logo from '@/Assets/clickup-symbol-logo-BB24230BBB-seeklogo.com.png'
import { MdDelete, MdEdit } from "react-icons/md";

import { useGetAllTasks } from "@/hooks/getTask";

import Link from "next/link";
import { useTaskDelete } from "@/hooks/taskDelete";
import { useUpdateTask } from "@/hooks/taskUpdate";
import CreateTask from "./Components/ClientComponents/CreateTask";



export default function Home() {


 const {data=[],isLoading,isError}= useGetAllTasks()
 const {mutate} = useTaskDelete()
 const {mutate : mutateUpdate} = useUpdateTask()
 
 
//  console.log(data)
const updateStatusHandler = useCallback((id:string,status:string)=>{

  let newStatus;
if(status==="TODO"){
  newStatus="INPROGRESS"


}else if (status==="INPROGRESS"){
  newStatus="DONE"
}else{
  newStatus="TODO"
}
mutateUpdate({id,
  status:newStatus
})

},[])



 if(isLoading){
  return <div>
<div className=' w-full  min-h-[100vh] flex justify-center items-center bg-gray-200'>
   <div className=' w-[40%]  max-md:w-[90%] shadow-xl  bg-white  min-h-0 rounded-md  p-2 '>

<div className=' w-full flex justify-center m-2'>
<Image width={25} height={25} src={Logo} alt='logo'/>   
</div>  
     
     <div className=" w-full flex justify-center font-semibold">
 Loading.... 
 </div> 
     </div>
       </div>

</div>
 }

 if(isError){
  return <div>
<div className=' w-full  min-h-[100vh] flex justify-center items-center bg-gray-200'>
   <div className=' w-[40%]  max-md:w-[90%] shadow-xl  bg-white  min-h-0 rounded-md  p-2 '>

<div className=' w-full flex justify-center m-2'>
<Image width={25} height={25} src={Logo} alt='logo'/>   
</div>  
     
     <div className=" w-full flex justify-center font-semibold">
    Error in api fetch !
 </div> 
     </div>
       </div>

</div>
 }
 


 const taskDeleteHandler  = (id:string)=>{
  mutate({id})
 }

  return (
<>

<div>
 
<div className=' w-full  min-h-[100vh] flex flex-col justify-center items-center bg-gray-200'>
 
   <div className=' w-[40%]  max-md:w-[90%] shadow-xl  bg-white  min-h-0 rounded-md  p-2 '>

<div className=' w-full flex justify-center m-2'>
<Image width={25} height={25} src={Logo} alt='logo'/>   
</div>  


<CreateTask/>
{data.length===0&&<div className=" w-full  flex justify-center flex-col items-center">
   <p className=" font-semibold">No Task Found !</p>
  <Link href={'/task/create'}> <button className=" bg-blue-500 h-6 my-2 hover:bg-blue-700 text-white font-bold py-
   4 px-4 rounded">Go To Create Task Page</button></Link>
</div>
}


{data.map((task)=>{
  return <div key={task.id} className=" w-full p-2  my-2 min-h-8 flex items-center justify-between border-gray-100 border-2 rounded-md">

  <div className="  w-[90%]  ">
    <p className=" font-medium">{task.title}</p>
    {(task.description?.length!==0)&&<p>{task.description}
       </p>}
  </div>
  <div className=" flex items-center h-full">
    <button onClick={()=>{
      updateStatusHandler(task.id,task.status)
    }} className={` text-sm px-2 ${task.status==="TODO"?"bg-gray-600":(task.status==="DONE")?"bg-green-500":"bg-blue-500"}  ${task.status==="TODO"?"border-gray-700":(task.status==="DONE")?"border-green-700":"border-blue-700"} border-2 text-white rounded-md`}>
    <p>{task.status}</p>
    </button>
    <Link href={`/task/edit/${task.id}`}> <button className=" p-1 bg-blue-500 hover:bg-blue-700 rounded-md mx-1 ">
 <MdEdit  size={18} color="white"/>
    </button>
    </Link> 
    <button className=" p-1 bg-red-500 hover:bg-red-700 rounded-md mx-1 ">
      <MdDelete onClick={()=>{
       taskDeleteHandler(task.id)
      }}  size={18} color="white"/>
    </button>
    
  </div>
  
  </div>
})}

     
   
     </div>
       </div>

</div>
</>
  );
}
