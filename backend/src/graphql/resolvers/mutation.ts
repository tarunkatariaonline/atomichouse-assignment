import { error } from "console";
import { prisma } from "../../prismaClient/prismaClient";
import { Status, Task } from "@prisma/client";


export const mutationResolvers = {
  Mutation: {

    createTask: async (parent: any, args: { title: string, description: string }) => {

      //  console.log(args)

      const task = await prisma.task.create({
        data: {
          title: args.title,
          description: args.description,
          status: "TODO"
        }

      })
      console.log(task)


      return task

    },
    deleteTask:async(parent:any,args:{ id:string})=>{
    
      try{
          await prisma.task.delete(
        {
          where: {
            id:args.id
          },
        }
       )
     return "Deleted Successfully"
      }catch{
        throw new Error("Task id not found !")
      }
   
    },
    updateTask:async(parent:any,args:{  id:string,   title?:string, description?:string,  status:Status
    })=>{
    

       
      await prisma.task.update({
        where:{
          id:args.id
        },
        data:{
            title:args.title,
            description:args.description,
            status:args.status
        }
      })
      return "Updated Successfully"
    }
  },
};
