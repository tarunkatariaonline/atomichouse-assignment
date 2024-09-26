import { gql } from "graphql-request";


export const deleteTask = gql`
mutation DeleteTask($id: String!){
deleteTask(id: $id)
}
`