import { graphqlClient } from "@/clients/api"
import { DeleteTaskMutationVariables } from "@/gql/graphql"
import { deleteTask } from "@/graphql/mutation/deleteTask"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"
export const useTaskDelete = ()=>{
    const queryClient = useQueryClient()
    const mutation = useMutation(
        {
            mutationFn:(payload:DeleteTaskMutationVariables)=>{
                 
               
                return graphqlClient.request(deleteTask,payload)


            },
            onMutate:()=> toast.loading("Task is Deleting !",{id:"1"}),
            onError:()=> toast.error("Something went Wrong",{id:"1"}),
            onSuccess:()=>{ toast.success("Task Deleted Successfully",{id:"1"})
            queryClient.invalidateQueries({
                queryKey: ["tasks"],
            })
        }

           
        }
    )
    return mutation


}