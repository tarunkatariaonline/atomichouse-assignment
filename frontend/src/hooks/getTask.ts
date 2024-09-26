import { useQuery } from "@tanstack/react-query"
import { graphqlClient } from "@/clients/api"
import { getAllTasks,getSingleTask } from "@/graphql/query/task"

import { QueryGetAllTasksInterface,QuerySingleTaskInterface} from "@/interface"



 
export const useGetAllTasks =()=>{
    const {data,isLoading,isError} = useQuery({queryKey: ["tasks"], queryFn: async()=>{
        const data:QueryGetAllTasksInterface= await graphqlClient.request(getAllTasks)
         const tasks = data.tasks
        return   tasks
    }})

    return {data,isLoading,isError}
}


export const useGetSingleTask =(id:string)=>{
    const {data,isLoading,isError} = useQuery({queryKey: ['singletask'], queryFn: async()=>{
        const data:QuerySingleTaskInterface= await graphqlClient.request(getSingleTask,{id})
        console.log(data.taskById)
        return data.taskById   
    }})

    return {data,isLoading,isError}
}