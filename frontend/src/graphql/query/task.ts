import { gql } from "graphql-request";

export const getAllTasks = gql`
  query GetAllTasks{
    tasks{
        id
        title
        description,
        status
    }
  }
`

export const getSingleTask = gql`
query querySingleTask($id: String!){
  taskById(id: $id) {
    id
    title
    description
    status
  }
}
`