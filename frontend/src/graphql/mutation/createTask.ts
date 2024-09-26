import { gql } from "graphql-request";

export const createTask = gql`
mutation CreateTask($title: String!, $description: String){
 createTask(title: $title, description: $description){
  id
  title
  
 }
}

`