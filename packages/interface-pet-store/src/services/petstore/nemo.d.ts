export type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

export enum ContentType {
  Json = 'application/json',
  FormData = 'multipart/form-data',
  UrlEncoded = 'application/x-www-form-urlencoded'
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, 'body' | 'bodyUsed'>;

export interface FullRequestParams extends Omit<RequestInit, 'body'> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

type CancelToken = Symbol | string | number;

export type NemoRequestParams = Omit<FullRequestParams, 'body' | 'method' | 'query' | 'path'>;

declare namespace petstore {
  export class ApiResponse {
    /** code */
    code?: number;

    /** message */
    message?: string;

    /** type */
    type?: string;
  }

  export class Category {
    /** id */
    id?: number;

    /** name */
    name?: string;
  }

  export class Order {
    /** complete */
    complete?: boolean;

    /** id */
    id?: number;

    /** petId */
    petId?: number;

    /** quantity */
    quantity?: number;

    /** shipDate */
    shipDate?: string;

    /** Order Status */
    status?: 'placed' | 'approved' | 'delivered';
  }

  export class Pet {
    /** category */
    category?: defs.petstore.Category;

    /** id */
    id?: number;

    /** name */
    name?: string;

    /** photoUrls */
    photoUrls?: Array<string>;

    /** pet status in the store */
    status?: 'available' | 'pending' | 'sold';

    /** tags */
    tags?: Array<defs.petstore.Tag>;
  }

  export class Tag {
    /** id */
    id?: number;

    /** name */
    name?: string;
  }

  export class User {
    /** email */
    email?: string;

    /** firstName */
    firstName?: string;

    /** id */
    id?: number;

    /** lastName */
    lastName?: string;

    /** password */
    password?: string;

    /** phone */
    phone?: string;

    /** User Status */
    userStatus?: number;

    /** username */
    username?: string;
  }
}

declare namespace petstore {
  export namespace pet {
    /**
     * Add a new pet to the store
     * /pet
     */
    export namespace addPet {
      export type Response = any;

      export function request(
        body: defs.petstore.Pet,
        options?: NemoRequestParams
      ): Promise<Response>;
    }

    /**
     * Update an existing pet
     * /pet
     */
    export namespace updatePet {
      export type Response = any;

      export function request(
        body: defs.petstore.Pet,
        options?: NemoRequestParams
      ): Promise<Response>;
    }

    /**
        * Finds Pets by status
Multiple status values can be provided with comma separated strings
        * /pet/findByStatus
        */
    export namespace findPetsByStatus {
      export type Response = Array<defs.petstore.Pet>;

      export function request(
        query: { status: Array<'available' | 'pending' | 'sold'> },
        options?: NemoRequestParams
      ): Promise<Response>;
    }

    /**
        * Finds Pets by tags
Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
        * /pet/findByTags
        */
    export namespace findPetsByTags {
      export type Response = Array<defs.petstore.Pet>;

      export function request(
        query: { tags: Array<string> },
        options?: NemoRequestParams
      ): Promise<Response>;
    }

    /**
        * Find pet by ID
Returns a single pet
        * /pet/{petId}
        */
    export namespace getPetById {
      export interface RequestParams {
        /** ID of pet to return */
        petId: number;
      }

      export type Response = defs.petstore.Pet;

      export function request(
        { petId }: RequestParams,
        options?: NemoRequestParams
      ): Promise<Response>;
    }

    /**
     * Updates a pet in the store with form data
     * /pet/{petId}
     */
    export namespace updatePetWithForm {
      export interface RequestParams {
        /** ID of pet that needs to be updated */
        petId: number;
      }

      export type Response = any;

      export function request(
        { petId }: RequestParams,
        form: FormData,
        options?: NemoRequestParams
      ): Promise<Response>;
    }

    /**
     * Deletes a pet
     * /pet/{petId}
     */
    export namespace deletePet {
      export interface RequestParams {
        /** Pet id to delete */
        petId: number;
      }

      export type Response = any;

      export function request(
        { petId }: RequestParams,
        options?: NemoRequestParams
      ): Promise<Response>;
    }

    /**
     * uploads an image
     * /pet/{petId}/uploadImage
     */
    export namespace uploadFile {
      export interface RequestParams {
        /** ID of pet to update */
        petId: number;
      }

      export type Response = defs.petstore.ApiResponse;

      export function request(
        { petId }: RequestParams,
        form: FormData,
        options?: NemoRequestParams
      ): Promise<Response>;
    }
  }

  export namespace store {
    /**
        * Returns pet inventories by status
Returns a map of status codes to quantities
        * /store/inventory
        */
    export namespace getInventory {
      export type Response = ObjectMap<any, number>;

      export function request(options?: NemoRequestParams): Promise<Response>;
    }

    /**
     * Place an order for a pet
     * /store/order
     */
    export namespace placeOrder {
      export type Response = defs.petstore.Order;

      export function request(
        body: defs.petstore.Order,
        options?: NemoRequestParams
      ): Promise<Response>;
    }

    /**
        * Find purchase order by ID
For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
        * /store/order/{orderId}
        */
    export namespace getOrderById {
      export interface RequestParams {
        /** ID of pet that needs to be fetched */
        orderId: number;
      }

      export type Response = defs.petstore.Order;

      export function request(
        { orderId }: RequestParams,
        options?: NemoRequestParams
      ): Promise<Response>;
    }

    /**
        * Delete purchase order by ID
For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
        * /store/order/{orderId}
        */
    export namespace deleteOrder {
      export interface RequestParams {
        /** ID of the order that needs to be deleted */
        orderId: number;
      }

      export type Response = any;

      export function request(
        { orderId }: RequestParams,
        options?: NemoRequestParams
      ): Promise<Response>;
    }
  }

  export namespace user {
    /**
        * Create user
This can only be done by the logged in user.
        * /user
        */
    export namespace createUser {
      export type Response = any;

      export function request(
        body: defs.petstore.User,
        options?: NemoRequestParams
      ): Promise<Response>;
    }

    /**
     * Creates list of users with given input array
     * /user/createWithArray
     */
    export namespace createUsersWithArrayInput {
      export type Response = any;

      export function request(
        body: Array<defs.petstore.User>,
        options?: NemoRequestParams
      ): Promise<Response>;
    }

    /**
     * Creates list of users with given input array
     * /user/createWithList
     */
    export namespace createUsersWithListInput {
      export type Response = any;

      export function request(
        body: Array<defs.petstore.User>,
        options?: NemoRequestParams
      ): Promise<Response>;
    }

    /**
     * Logs user into the system
     * /user/login
     */
    export namespace loginUser {
      export type Response = string;

      export function request(
        query: { username: string; password: string },
        options?: NemoRequestParams
      ): Promise<Response>;
    }

    /**
     * Logs out current logged in user session
     * /user/logout
     */
    export namespace logoutUser {
      export type Response = any;

      export function request(options?: NemoRequestParams): Promise<Response>;
    }

    /**
     * Get user by user name
     * /user/{username}
     */
    export namespace getUserByName {
      export interface RequestParams {
        /** The name that needs to be fetched. Use user1 for testing.  */
        username: string;
      }

      export type Response = defs.petstore.User;

      export function request(
        { username }: RequestParams,
        options?: NemoRequestParams
      ): Promise<Response>;
    }

    /**
        * Updated user
This can only be done by the logged in user.
        * /user/{username}
        */
    export namespace updateUser {
      export interface RequestParams {
        /** name that need to be updated */
        username: string;
      }

      export type Response = any;

      export function request(
        { username }: RequestParams,
        body: defs.petstore.User,
        options?: NemoRequestParams
      ): Promise<Response>;
    }

    /**
        * Delete user
This can only be done by the logged in user.
        * /user/{username}
        */
    export namespace deleteUser {
      export interface RequestParams {
        /** The name that needs to be deleted */
        username: string;
      }

      export type Response = any;

      export function request(
        { username }: RequestParams,
        options?: NemoRequestParams
      ): Promise<Response>;
    }
  }
}
