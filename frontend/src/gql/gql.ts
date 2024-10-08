/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nmutation CreateTask($title: String!, $description: String,$status:String){\n createTask(title: $title, description: $description,status:$status){\n  id\n  title\n  \n }\n}\n\n": types.CreateTaskDocument,
    "\nmutation DeleteTask($id: String!){\ndeleteTask(id: $id)\n}\n": types.DeleteTaskDocument,
    "\nmutation UpdateTask($id: String!, $status: String!,$title:String,$description:String),{\n  updateTask(id: $id, status: $status,title:$title,description:$description){\n    id\n  } \n}\n": types.UpdateTaskDocument,
    "\n  query GetAllTasks{\n    tasks{\n        id\n        title\n        description,\n        status\n    }\n  }\n": types.GetAllTasksDocument,
    "\nquery querySingleTask($id: String!){\n  taskById(id: $id) {\n    id\n    title\n    description\n    status\n  }\n}\n": types.QuerySingleTaskDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation CreateTask($title: String!, $description: String,$status:String){\n createTask(title: $title, description: $description,status:$status){\n  id\n  title\n  \n }\n}\n\n"): (typeof documents)["\nmutation CreateTask($title: String!, $description: String,$status:String){\n createTask(title: $title, description: $description,status:$status){\n  id\n  title\n  \n }\n}\n\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation DeleteTask($id: String!){\ndeleteTask(id: $id)\n}\n"): (typeof documents)["\nmutation DeleteTask($id: String!){\ndeleteTask(id: $id)\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation UpdateTask($id: String!, $status: String!,$title:String,$description:String),{\n  updateTask(id: $id, status: $status,title:$title,description:$description){\n    id\n  } \n}\n"): (typeof documents)["\nmutation UpdateTask($id: String!, $status: String!,$title:String,$description:String),{\n  updateTask(id: $id, status: $status,title:$title,description:$description){\n    id\n  } \n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetAllTasks{\n    tasks{\n        id\n        title\n        description,\n        status\n    }\n  }\n"): (typeof documents)["\n  query GetAllTasks{\n    tasks{\n        id\n        title\n        description,\n        status\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery querySingleTask($id: String!){\n  taskById(id: $id) {\n    id\n    title\n    description\n    status\n  }\n}\n"): (typeof documents)["\nquery querySingleTask($id: String!){\n  taskById(id: $id) {\n    id\n    title\n    description\n    status\n  }\n}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;