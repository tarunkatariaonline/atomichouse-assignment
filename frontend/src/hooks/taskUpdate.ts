import { graphqlClient } from "@/clients/api"
import { MutationUpdateTaskArgs } from "@/gql/graphql"
import { updateTask } from "@/graphql/mutation/updateTask"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"

export const useUpdateTask = ()=>{
    const queryClient = useQueryClient()
    const  mutation = useMutation({
        mutationFn:(payload:MutationUpdateTaskArgs)=>{
           console.log(payload)
             return graphqlClient.request(updateTask,payload)
        },
        onMutate:()=>toast.loading("Task is Updateing !",{id:'1'}),
        onError:()=>toast.error("Error in Task Update !",{id:'1'}),
        onSuccess:()=>{toast.success("Task Updated Successfully !",{id:'1'})
        queryClient.invalidateQueries({
            queryKey: ["tasks"],
        })
    },

    })
    return mutation

}