import { gql } from "graphql-request";

export const createTask = gql`
mutation CreateTask($title: String!, $description: String,$status:String){
 createTask(title: $title, description: $description,status:$status){
  id
  title
  
 }
}

`