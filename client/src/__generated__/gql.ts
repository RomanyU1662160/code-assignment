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
    "\n  query Product($id: ID!) {\n    Product(id: $id) {\n      id\n      name\n      power\n      description\n      price\n      quantity\n      brand\n      weight\n      height\n      width\n      length\n      model_code\n      colour\n      img_url\n    }\n  }\n": types.ProductDocument,
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
export function graphql(source: "\n  query Product($id: ID!) {\n    Product(id: $id) {\n      id\n      name\n      power\n      description\n      price\n      quantity\n      brand\n      weight\n      height\n      width\n      length\n      model_code\n      colour\n      img_url\n    }\n  }\n"): (typeof documents)["\n  query Product($id: ID!) {\n    Product(id: $id) {\n      id\n      name\n      power\n      description\n      price\n      quantity\n      brand\n      weight\n      height\n      width\n      length\n      model_code\n      colour\n      img_url\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;