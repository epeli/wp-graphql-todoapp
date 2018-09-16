/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: BasicTodoList
// ====================================================

export interface BasicTodoList_todos_edges_node {
  /**
   * The globally unique ID for the object
   */
  id: string;
  /**
   * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
   */
  title: string | null;
  /**
   * Is TODO completed
   */
  completed: boolean | null;
}

export interface BasicTodoList_todos_edges {
  /**
   * The item at the end of the edge
   */
  node: BasicTodoList_todos_edges_node | null;
}

export interface BasicTodoList_todos_pageInfo {
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
}

export interface BasicTodoList_todos {
  /**
   * Information to aid in pagination
   */
  edges: (BasicTodoList_todos_edges | null)[] | null;
  /**
   * Information to aid in pagination.
   */
  pageInfo: BasicTodoList_todos_pageInfo;
}

export interface BasicTodoList {
  /**
   * A collection of todos objects
   */
  todos: BasicTodoList_todos | null;
}

export interface BasicTodoListVariables {
  after: string;
}
