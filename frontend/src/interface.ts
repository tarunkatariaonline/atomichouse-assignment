export interface TaskInterface {
    id: string;
    title: string;
    description?: string;
    status: string;
   }


  export interface QueryGetAllTasksInterface{
    tasks:TaskInterface[]
   }

   export interface QuerySingleTaskInterface{
    taskById:TaskInterface
       }