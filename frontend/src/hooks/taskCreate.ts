import { graphqlClient } from "@/clients/api"
import { CreateTaskMutationVariables } from "@/gql/graphql"
import { createTask } from "@/graphql/mutation/createTask"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"

export const useCreateTask = ()=>{
const queryClient = useQueryClient()
const mutation = useMutation({
    mutationFn:(payload:CreateTaskMutationVariables)=>

        {
           

            
           return graphqlClient.request(createTask,payload)} ,
      

    onMutate:()=>toast.loading("Creating Task ...",{id:'1'}),
    onSuccess: async() => {toast.success("Task Created Successfully !",{id:'1'} )
    await queryClient.invalidateQueries({
        queryKey: ["tasks"]
    })

},
    onError:(err)=> toast.error(err.message,{id:'1'}) 
  
})
return mutation
}