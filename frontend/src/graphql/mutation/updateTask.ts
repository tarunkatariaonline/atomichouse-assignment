import { gql } from "graphql-request";

export const updateTask = gql`
mutation UpdateTask($id: String!, $status: String!,$title:String,$description:String),{
  updateTask(id: $id, status: $status,title:$title,description:$description){
    id
  } 
}
`