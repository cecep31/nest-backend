
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model post_comments
 * 
 */
export type post_comments = $Result.DefaultSelection<Prisma.$post_commentsPayload>
/**
 * Model posts
 * 
 */
export type posts = $Result.DefaultSelection<Prisma.$postsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model posts_to_tags
 * 
 */
export type posts_to_tags = $Result.DefaultSelection<Prisma.$posts_to_tagsPayload>
/**
 * Model tags
 * 
 */
export type tags = $Result.DefaultSelection<Prisma.$tagsPayload>
/**
 * Model files
 * 
 */
export type files = $Result.DefaultSelection<Prisma.$filesPayload>
/**
 * Model likes
 * 
 */
export type likes = $Result.DefaultSelection<Prisma.$likesPayload>
/**
 * Model profiles
 * 
 */
export type profiles = $Result.DefaultSelection<Prisma.$profilesPayload>
/**
 * Model workspaces
 * 
 */
export type workspaces = $Result.DefaultSelection<Prisma.$workspacesPayload>
/**
 * Model workspace_users
 * 
 */
export type workspace_users = $Result.DefaultSelection<Prisma.$workspace_usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Post_comments
 * const post_comments = await prisma.post_comments.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Post_comments
   * const post_comments = await prisma.post_comments.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.post_comments`: Exposes CRUD operations for the **post_comments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Post_comments
    * const post_comments = await prisma.post_comments.findMany()
    * ```
    */
  get post_comments(): Prisma.post_commentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.posts`: Exposes CRUD operations for the **posts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.posts.findMany()
    * ```
    */
  get posts(): Prisma.postsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.posts_to_tags`: Exposes CRUD operations for the **posts_to_tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts_to_tags
    * const posts_to_tags = await prisma.posts_to_tags.findMany()
    * ```
    */
  get posts_to_tags(): Prisma.posts_to_tagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tags`: Exposes CRUD operations for the **tags** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tags.findMany()
    * ```
    */
  get tags(): Prisma.tagsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.files`: Exposes CRUD operations for the **files** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.files.findMany()
    * ```
    */
  get files(): Prisma.filesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.likes`: Exposes CRUD operations for the **likes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Likes
    * const likes = await prisma.likes.findMany()
    * ```
    */
  get likes(): Prisma.likesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.profiles`: Exposes CRUD operations for the **profiles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profiles.findMany()
    * ```
    */
  get profiles(): Prisma.profilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workspaces`: Exposes CRUD operations for the **workspaces** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workspaces
    * const workspaces = await prisma.workspaces.findMany()
    * ```
    */
  get workspaces(): Prisma.workspacesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workspace_users`: Exposes CRUD operations for the **workspace_users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workspace_users
    * const workspace_users = await prisma.workspace_users.findMany()
    * ```
    */
  get workspace_users(): Prisma.workspace_usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    post_comments: 'post_comments',
    posts: 'posts',
    users: 'users',
    posts_to_tags: 'posts_to_tags',
    tags: 'tags',
    files: 'files',
    likes: 'likes',
    profiles: 'profiles',
    workspaces: 'workspaces',
    workspace_users: 'workspace_users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "post_comments" | "posts" | "users" | "posts_to_tags" | "tags" | "files" | "likes" | "profiles" | "workspaces" | "workspace_users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      post_comments: {
        payload: Prisma.$post_commentsPayload<ExtArgs>
        fields: Prisma.post_commentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.post_commentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_commentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.post_commentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_commentsPayload>
          }
          findFirst: {
            args: Prisma.post_commentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_commentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.post_commentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_commentsPayload>
          }
          findMany: {
            args: Prisma.post_commentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_commentsPayload>[]
          }
          create: {
            args: Prisma.post_commentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_commentsPayload>
          }
          createMany: {
            args: Prisma.post_commentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.post_commentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_commentsPayload>[]
          }
          delete: {
            args: Prisma.post_commentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_commentsPayload>
          }
          update: {
            args: Prisma.post_commentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_commentsPayload>
          }
          deleteMany: {
            args: Prisma.post_commentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.post_commentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.post_commentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_commentsPayload>[]
          }
          upsert: {
            args: Prisma.post_commentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$post_commentsPayload>
          }
          aggregate: {
            args: Prisma.Post_commentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost_comments>
          }
          groupBy: {
            args: Prisma.post_commentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Post_commentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.post_commentsCountArgs<ExtArgs>
            result: $Utils.Optional<Post_commentsCountAggregateOutputType> | number
          }
        }
      }
      posts: {
        payload: Prisma.$postsPayload<ExtArgs>
        fields: Prisma.postsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.postsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.postsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          findFirst: {
            args: Prisma.postsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.postsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          findMany: {
            args: Prisma.postsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          create: {
            args: Prisma.postsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          createMany: {
            args: Prisma.postsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.postsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          delete: {
            args: Prisma.postsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          update: {
            args: Prisma.postsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          deleteMany: {
            args: Prisma.postsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.postsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.postsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>[]
          }
          upsert: {
            args: Prisma.postsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postsPayload>
          }
          aggregate: {
            args: Prisma.PostsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosts>
          }
          groupBy: {
            args: Prisma.postsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostsGroupByOutputType>[]
          }
          count: {
            args: Prisma.postsCountArgs<ExtArgs>
            result: $Utils.Optional<PostsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      posts_to_tags: {
        payload: Prisma.$posts_to_tagsPayload<ExtArgs>
        fields: Prisma.posts_to_tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.posts_to_tagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posts_to_tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.posts_to_tagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posts_to_tagsPayload>
          }
          findFirst: {
            args: Prisma.posts_to_tagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posts_to_tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.posts_to_tagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posts_to_tagsPayload>
          }
          findMany: {
            args: Prisma.posts_to_tagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posts_to_tagsPayload>[]
          }
          create: {
            args: Prisma.posts_to_tagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posts_to_tagsPayload>
          }
          createMany: {
            args: Prisma.posts_to_tagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.posts_to_tagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posts_to_tagsPayload>[]
          }
          delete: {
            args: Prisma.posts_to_tagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posts_to_tagsPayload>
          }
          update: {
            args: Prisma.posts_to_tagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posts_to_tagsPayload>
          }
          deleteMany: {
            args: Prisma.posts_to_tagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.posts_to_tagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.posts_to_tagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posts_to_tagsPayload>[]
          }
          upsert: {
            args: Prisma.posts_to_tagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$posts_to_tagsPayload>
          }
          aggregate: {
            args: Prisma.Posts_to_tagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePosts_to_tags>
          }
          groupBy: {
            args: Prisma.posts_to_tagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Posts_to_tagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.posts_to_tagsCountArgs<ExtArgs>
            result: $Utils.Optional<Posts_to_tagsCountAggregateOutputType> | number
          }
        }
      }
      tags: {
        payload: Prisma.$tagsPayload<ExtArgs>
        fields: Prisma.tagsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tagsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tagsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findFirst: {
            args: Prisma.tagsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tagsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          findMany: {
            args: Prisma.tagsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          create: {
            args: Prisma.tagsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          createMany: {
            args: Prisma.tagsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.tagsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          delete: {
            args: Prisma.tagsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          update: {
            args: Prisma.tagsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          deleteMany: {
            args: Prisma.tagsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tagsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.tagsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>[]
          }
          upsert: {
            args: Prisma.tagsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagsPayload>
          }
          aggregate: {
            args: Prisma.TagsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTags>
          }
          groupBy: {
            args: Prisma.tagsGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagsGroupByOutputType>[]
          }
          count: {
            args: Prisma.tagsCountArgs<ExtArgs>
            result: $Utils.Optional<TagsCountAggregateOutputType> | number
          }
        }
      }
      files: {
        payload: Prisma.$filesPayload<ExtArgs>
        fields: Prisma.filesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.filesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.filesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>
          }
          findFirst: {
            args: Prisma.filesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.filesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>
          }
          findMany: {
            args: Prisma.filesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>[]
          }
          create: {
            args: Prisma.filesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>
          }
          createMany: {
            args: Prisma.filesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.filesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>[]
          }
          delete: {
            args: Prisma.filesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>
          }
          update: {
            args: Prisma.filesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>
          }
          deleteMany: {
            args: Prisma.filesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.filesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.filesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>[]
          }
          upsert: {
            args: Prisma.filesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$filesPayload>
          }
          aggregate: {
            args: Prisma.FilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFiles>
          }
          groupBy: {
            args: Prisma.filesGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.filesCountArgs<ExtArgs>
            result: $Utils.Optional<FilesCountAggregateOutputType> | number
          }
        }
      }
      likes: {
        payload: Prisma.$likesPayload<ExtArgs>
        fields: Prisma.likesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.likesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.likesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          findFirst: {
            args: Prisma.likesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.likesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          findMany: {
            args: Prisma.likesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>[]
          }
          create: {
            args: Prisma.likesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          createMany: {
            args: Prisma.likesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.likesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>[]
          }
          delete: {
            args: Prisma.likesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          update: {
            args: Prisma.likesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          deleteMany: {
            args: Prisma.likesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.likesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.likesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>[]
          }
          upsert: {
            args: Prisma.likesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$likesPayload>
          }
          aggregate: {
            args: Prisma.LikesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLikes>
          }
          groupBy: {
            args: Prisma.likesGroupByArgs<ExtArgs>
            result: $Utils.Optional<LikesGroupByOutputType>[]
          }
          count: {
            args: Prisma.likesCountArgs<ExtArgs>
            result: $Utils.Optional<LikesCountAggregateOutputType> | number
          }
        }
      }
      profiles: {
        payload: Prisma.$profilesPayload<ExtArgs>
        fields: Prisma.profilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.profilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.profilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          findFirst: {
            args: Prisma.profilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.profilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          findMany: {
            args: Prisma.profilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>[]
          }
          create: {
            args: Prisma.profilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          createMany: {
            args: Prisma.profilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.profilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>[]
          }
          delete: {
            args: Prisma.profilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          update: {
            args: Prisma.profilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          deleteMany: {
            args: Prisma.profilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.profilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.profilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>[]
          }
          upsert: {
            args: Prisma.profilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$profilesPayload>
          }
          aggregate: {
            args: Prisma.ProfilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfiles>
          }
          groupBy: {
            args: Prisma.profilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.profilesCountArgs<ExtArgs>
            result: $Utils.Optional<ProfilesCountAggregateOutputType> | number
          }
        }
      }
      workspaces: {
        payload: Prisma.$workspacesPayload<ExtArgs>
        fields: Prisma.workspacesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workspacesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workspacesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>
          }
          findFirst: {
            args: Prisma.workspacesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workspacesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>
          }
          findMany: {
            args: Prisma.workspacesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>[]
          }
          create: {
            args: Prisma.workspacesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>
          }
          createMany: {
            args: Prisma.workspacesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.workspacesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>[]
          }
          delete: {
            args: Prisma.workspacesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>
          }
          update: {
            args: Prisma.workspacesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>
          }
          deleteMany: {
            args: Prisma.workspacesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.workspacesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.workspacesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>[]
          }
          upsert: {
            args: Prisma.workspacesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspacesPayload>
          }
          aggregate: {
            args: Prisma.WorkspacesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspaces>
          }
          groupBy: {
            args: Prisma.workspacesGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkspacesGroupByOutputType>[]
          }
          count: {
            args: Prisma.workspacesCountArgs<ExtArgs>
            result: $Utils.Optional<WorkspacesCountAggregateOutputType> | number
          }
        }
      }
      workspace_users: {
        payload: Prisma.$workspace_usersPayload<ExtArgs>
        fields: Prisma.workspace_usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.workspace_usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspace_usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.workspace_usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspace_usersPayload>
          }
          findFirst: {
            args: Prisma.workspace_usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspace_usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.workspace_usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspace_usersPayload>
          }
          findMany: {
            args: Prisma.workspace_usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspace_usersPayload>[]
          }
          create: {
            args: Prisma.workspace_usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspace_usersPayload>
          }
          createMany: {
            args: Prisma.workspace_usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.workspace_usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspace_usersPayload>[]
          }
          delete: {
            args: Prisma.workspace_usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspace_usersPayload>
          }
          update: {
            args: Prisma.workspace_usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspace_usersPayload>
          }
          deleteMany: {
            args: Prisma.workspace_usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.workspace_usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.workspace_usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspace_usersPayload>[]
          }
          upsert: {
            args: Prisma.workspace_usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$workspace_usersPayload>
          }
          aggregate: {
            args: Prisma.Workspace_usersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspace_users>
          }
          groupBy: {
            args: Prisma.workspace_usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<Workspace_usersGroupByOutputType>[]
          }
          count: {
            args: Prisma.workspace_usersCountArgs<ExtArgs>
            result: $Utils.Optional<Workspace_usersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    post_comments?: post_commentsOmit
    posts?: postsOmit
    users?: usersOmit
    posts_to_tags?: posts_to_tagsOmit
    tags?: tagsOmit
    files?: filesOmit
    likes?: likesOmit
    profiles?: profilesOmit
    workspaces?: workspacesOmit
    workspace_users?: workspace_usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type PostsCountOutputType
   */

  export type PostsCountOutputType = {
    likes: number
    post_comments: number
    tags: number
  }

  export type PostsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | PostsCountOutputTypeCountLikesArgs
    post_comments?: boolean | PostsCountOutputTypeCountPost_commentsArgs
    tags?: boolean | PostsCountOutputTypeCountTagsArgs
  }

  // Custom InputTypes
  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostsCountOutputType
     */
    select?: PostsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: likesWhereInput
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountPost_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: post_commentsWhereInput
  }

  /**
   * PostsCountOutputType without action
   */
  export type PostsCountOutputTypeCountTagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: posts_to_tagsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    files: number
    likes: number
    post_comments: number
    posts: number
    workspaces: number
    workspace_users: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | UsersCountOutputTypeCountFilesArgs
    likes?: boolean | UsersCountOutputTypeCountLikesArgs
    post_comments?: boolean | UsersCountOutputTypeCountPost_commentsArgs
    posts?: boolean | UsersCountOutputTypeCountPostsArgs
    workspaces?: boolean | UsersCountOutputTypeCountWorkspacesArgs
    workspace_users?: boolean | UsersCountOutputTypeCountWorkspace_usersArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: filesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountLikesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: likesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPost_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: post_commentsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountWorkspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspacesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountWorkspace_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspace_usersWhereInput
  }


  /**
   * Count Type TagsCountOutputType
   */

  export type TagsCountOutputType = {
    posts_to_tags: number
  }

  export type TagsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts_to_tags?: boolean | TagsCountOutputTypeCountPosts_to_tagsArgs
  }

  // Custom InputTypes
  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagsCountOutputType
     */
    select?: TagsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagsCountOutputType without action
   */
  export type TagsCountOutputTypeCountPosts_to_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: posts_to_tagsWhereInput
  }


  /**
   * Count Type WorkspacesCountOutputType
   */

  export type WorkspacesCountOutputType = {
    users: number
    workspace_users: number
  }

  export type WorkspacesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | WorkspacesCountOutputTypeCountUsersArgs
    workspace_users?: boolean | WorkspacesCountOutputTypeCountWorkspace_usersArgs
  }

  // Custom InputTypes
  /**
   * WorkspacesCountOutputType without action
   */
  export type WorkspacesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspacesCountOutputType
     */
    select?: WorkspacesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkspacesCountOutputType without action
   */
  export type WorkspacesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
  }

  /**
   * WorkspacesCountOutputType without action
   */
  export type WorkspacesCountOutputTypeCountWorkspace_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspace_usersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model post_comments
   */

  export type AggregatePost_comments = {
    _count: Post_commentsCountAggregateOutputType | null
    _avg: Post_commentsAvgAggregateOutputType | null
    _sum: Post_commentsSumAggregateOutputType | null
    _min: Post_commentsMinAggregateOutputType | null
    _max: Post_commentsMaxAggregateOutputType | null
  }

  export type Post_commentsAvgAggregateOutputType = {
    parrent_comment_id: number | null
  }

  export type Post_commentsSumAggregateOutputType = {
    parrent_comment_id: bigint | null
  }

  export type Post_commentsMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    text: string | null
    post_id: string | null
    parrent_comment_id: bigint | null
    created_by: string | null
  }

  export type Post_commentsMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    text: string | null
    post_id: string | null
    parrent_comment_id: bigint | null
    created_by: string | null
  }

  export type Post_commentsCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    deleted_at: number
    text: number
    post_id: number
    parrent_comment_id: number
    created_by: number
    _all: number
  }


  export type Post_commentsAvgAggregateInputType = {
    parrent_comment_id?: true
  }

  export type Post_commentsSumAggregateInputType = {
    parrent_comment_id?: true
  }

  export type Post_commentsMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    text?: true
    post_id?: true
    parrent_comment_id?: true
    created_by?: true
  }

  export type Post_commentsMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    text?: true
    post_id?: true
    parrent_comment_id?: true
    created_by?: true
  }

  export type Post_commentsCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    text?: true
    post_id?: true
    parrent_comment_id?: true
    created_by?: true
    _all?: true
  }

  export type Post_commentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which post_comments to aggregate.
     */
    where?: post_commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of post_comments to fetch.
     */
    orderBy?: post_commentsOrderByWithRelationInput | post_commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: post_commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` post_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` post_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned post_comments
    **/
    _count?: true | Post_commentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Post_commentsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Post_commentsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Post_commentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Post_commentsMaxAggregateInputType
  }

  export type GetPost_commentsAggregateType<T extends Post_commentsAggregateArgs> = {
        [P in keyof T & keyof AggregatePost_comments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost_comments[P]>
      : GetScalarType<T[P], AggregatePost_comments[P]>
  }




  export type post_commentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: post_commentsWhereInput
    orderBy?: post_commentsOrderByWithAggregationInput | post_commentsOrderByWithAggregationInput[]
    by: Post_commentsScalarFieldEnum[] | Post_commentsScalarFieldEnum
    having?: post_commentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Post_commentsCountAggregateInputType | true
    _avg?: Post_commentsAvgAggregateInputType
    _sum?: Post_commentsSumAggregateInputType
    _min?: Post_commentsMinAggregateInputType
    _max?: Post_commentsMaxAggregateInputType
  }

  export type Post_commentsGroupByOutputType = {
    id: string
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    text: string | null
    post_id: string | null
    parrent_comment_id: bigint | null
    created_by: string | null
    _count: Post_commentsCountAggregateOutputType | null
    _avg: Post_commentsAvgAggregateOutputType | null
    _sum: Post_commentsSumAggregateOutputType | null
    _min: Post_commentsMinAggregateOutputType | null
    _max: Post_commentsMaxAggregateOutputType | null
  }

  type GetPost_commentsGroupByPayload<T extends post_commentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Post_commentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Post_commentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Post_commentsGroupByOutputType[P]>
            : GetScalarType<T[P], Post_commentsGroupByOutputType[P]>
        }
      >
    >


  export type post_commentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    text?: boolean
    post_id?: boolean
    parrent_comment_id?: boolean
    created_by?: boolean
    creator?: boolean | post_comments$creatorArgs<ExtArgs>
    posts?: boolean | post_comments$postsArgs<ExtArgs>
  }, ExtArgs["result"]["post_comments"]>

  export type post_commentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    text?: boolean
    post_id?: boolean
    parrent_comment_id?: boolean
    created_by?: boolean
    creator?: boolean | post_comments$creatorArgs<ExtArgs>
    posts?: boolean | post_comments$postsArgs<ExtArgs>
  }, ExtArgs["result"]["post_comments"]>

  export type post_commentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    text?: boolean
    post_id?: boolean
    parrent_comment_id?: boolean
    created_by?: boolean
    creator?: boolean | post_comments$creatorArgs<ExtArgs>
    posts?: boolean | post_comments$postsArgs<ExtArgs>
  }, ExtArgs["result"]["post_comments"]>

  export type post_commentsSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    text?: boolean
    post_id?: boolean
    parrent_comment_id?: boolean
    created_by?: boolean
  }

  export type post_commentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "updated_at" | "deleted_at" | "text" | "post_id" | "parrent_comment_id" | "created_by", ExtArgs["result"]["post_comments"]>
  export type post_commentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | post_comments$creatorArgs<ExtArgs>
    posts?: boolean | post_comments$postsArgs<ExtArgs>
  }
  export type post_commentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | post_comments$creatorArgs<ExtArgs>
    posts?: boolean | post_comments$postsArgs<ExtArgs>
  }
  export type post_commentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | post_comments$creatorArgs<ExtArgs>
    posts?: boolean | post_comments$postsArgs<ExtArgs>
  }

  export type $post_commentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "post_comments"
    objects: {
      creator: Prisma.$usersPayload<ExtArgs> | null
      posts: Prisma.$postsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
      text: string | null
      post_id: string | null
      parrent_comment_id: bigint | null
      created_by: string | null
    }, ExtArgs["result"]["post_comments"]>
    composites: {}
  }

  type post_commentsGetPayload<S extends boolean | null | undefined | post_commentsDefaultArgs> = $Result.GetResult<Prisma.$post_commentsPayload, S>

  type post_commentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<post_commentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Post_commentsCountAggregateInputType | true
    }

  export interface post_commentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['post_comments'], meta: { name: 'post_comments' } }
    /**
     * Find zero or one Post_comments that matches the filter.
     * @param {post_commentsFindUniqueArgs} args - Arguments to find a Post_comments
     * @example
     * // Get one Post_comments
     * const post_comments = await prisma.post_comments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends post_commentsFindUniqueArgs>(args: SelectSubset<T, post_commentsFindUniqueArgs<ExtArgs>>): Prisma__post_commentsClient<$Result.GetResult<Prisma.$post_commentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post_comments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {post_commentsFindUniqueOrThrowArgs} args - Arguments to find a Post_comments
     * @example
     * // Get one Post_comments
     * const post_comments = await prisma.post_comments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends post_commentsFindUniqueOrThrowArgs>(args: SelectSubset<T, post_commentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__post_commentsClient<$Result.GetResult<Prisma.$post_commentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post_comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_commentsFindFirstArgs} args - Arguments to find a Post_comments
     * @example
     * // Get one Post_comments
     * const post_comments = await prisma.post_comments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends post_commentsFindFirstArgs>(args?: SelectSubset<T, post_commentsFindFirstArgs<ExtArgs>>): Prisma__post_commentsClient<$Result.GetResult<Prisma.$post_commentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post_comments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_commentsFindFirstOrThrowArgs} args - Arguments to find a Post_comments
     * @example
     * // Get one Post_comments
     * const post_comments = await prisma.post_comments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends post_commentsFindFirstOrThrowArgs>(args?: SelectSubset<T, post_commentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__post_commentsClient<$Result.GetResult<Prisma.$post_commentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Post_comments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_commentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Post_comments
     * const post_comments = await prisma.post_comments.findMany()
     * 
     * // Get first 10 Post_comments
     * const post_comments = await prisma.post_comments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const post_commentsWithIdOnly = await prisma.post_comments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends post_commentsFindManyArgs>(args?: SelectSubset<T, post_commentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post_comments.
     * @param {post_commentsCreateArgs} args - Arguments to create a Post_comments.
     * @example
     * // Create one Post_comments
     * const Post_comments = await prisma.post_comments.create({
     *   data: {
     *     // ... data to create a Post_comments
     *   }
     * })
     * 
     */
    create<T extends post_commentsCreateArgs>(args: SelectSubset<T, post_commentsCreateArgs<ExtArgs>>): Prisma__post_commentsClient<$Result.GetResult<Prisma.$post_commentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Post_comments.
     * @param {post_commentsCreateManyArgs} args - Arguments to create many Post_comments.
     * @example
     * // Create many Post_comments
     * const post_comments = await prisma.post_comments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends post_commentsCreateManyArgs>(args?: SelectSubset<T, post_commentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Post_comments and returns the data saved in the database.
     * @param {post_commentsCreateManyAndReturnArgs} args - Arguments to create many Post_comments.
     * @example
     * // Create many Post_comments
     * const post_comments = await prisma.post_comments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Post_comments and only return the `id`
     * const post_commentsWithIdOnly = await prisma.post_comments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends post_commentsCreateManyAndReturnArgs>(args?: SelectSubset<T, post_commentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_commentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post_comments.
     * @param {post_commentsDeleteArgs} args - Arguments to delete one Post_comments.
     * @example
     * // Delete one Post_comments
     * const Post_comments = await prisma.post_comments.delete({
     *   where: {
     *     // ... filter to delete one Post_comments
     *   }
     * })
     * 
     */
    delete<T extends post_commentsDeleteArgs>(args: SelectSubset<T, post_commentsDeleteArgs<ExtArgs>>): Prisma__post_commentsClient<$Result.GetResult<Prisma.$post_commentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post_comments.
     * @param {post_commentsUpdateArgs} args - Arguments to update one Post_comments.
     * @example
     * // Update one Post_comments
     * const post_comments = await prisma.post_comments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends post_commentsUpdateArgs>(args: SelectSubset<T, post_commentsUpdateArgs<ExtArgs>>): Prisma__post_commentsClient<$Result.GetResult<Prisma.$post_commentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Post_comments.
     * @param {post_commentsDeleteManyArgs} args - Arguments to filter Post_comments to delete.
     * @example
     * // Delete a few Post_comments
     * const { count } = await prisma.post_comments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends post_commentsDeleteManyArgs>(args?: SelectSubset<T, post_commentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Post_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_commentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Post_comments
     * const post_comments = await prisma.post_comments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends post_commentsUpdateManyArgs>(args: SelectSubset<T, post_commentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Post_comments and returns the data updated in the database.
     * @param {post_commentsUpdateManyAndReturnArgs} args - Arguments to update many Post_comments.
     * @example
     * // Update many Post_comments
     * const post_comments = await prisma.post_comments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Post_comments and only return the `id`
     * const post_commentsWithIdOnly = await prisma.post_comments.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends post_commentsUpdateManyAndReturnArgs>(args: SelectSubset<T, post_commentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_commentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post_comments.
     * @param {post_commentsUpsertArgs} args - Arguments to update or create a Post_comments.
     * @example
     * // Update or create a Post_comments
     * const post_comments = await prisma.post_comments.upsert({
     *   create: {
     *     // ... data to create a Post_comments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post_comments we want to update
     *   }
     * })
     */
    upsert<T extends post_commentsUpsertArgs>(args: SelectSubset<T, post_commentsUpsertArgs<ExtArgs>>): Prisma__post_commentsClient<$Result.GetResult<Prisma.$post_commentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Post_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_commentsCountArgs} args - Arguments to filter Post_comments to count.
     * @example
     * // Count the number of Post_comments
     * const count = await prisma.post_comments.count({
     *   where: {
     *     // ... the filter for the Post_comments we want to count
     *   }
     * })
    **/
    count<T extends post_commentsCountArgs>(
      args?: Subset<T, post_commentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Post_commentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Post_commentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Post_commentsAggregateArgs>(args: Subset<T, Post_commentsAggregateArgs>): Prisma.PrismaPromise<GetPost_commentsAggregateType<T>>

    /**
     * Group by Post_comments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {post_commentsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends post_commentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: post_commentsGroupByArgs['orderBy'] }
        : { orderBy?: post_commentsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, post_commentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPost_commentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the post_comments model
   */
  readonly fields: post_commentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for post_comments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__post_commentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends post_comments$creatorArgs<ExtArgs> = {}>(args?: Subset<T, post_comments$creatorArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    posts<T extends post_comments$postsArgs<ExtArgs> = {}>(args?: Subset<T, post_comments$postsArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the post_comments model
   */
  interface post_commentsFieldRefs {
    readonly id: FieldRef<"post_comments", 'String'>
    readonly created_at: FieldRef<"post_comments", 'DateTime'>
    readonly updated_at: FieldRef<"post_comments", 'DateTime'>
    readonly deleted_at: FieldRef<"post_comments", 'DateTime'>
    readonly text: FieldRef<"post_comments", 'String'>
    readonly post_id: FieldRef<"post_comments", 'String'>
    readonly parrent_comment_id: FieldRef<"post_comments", 'BigInt'>
    readonly created_by: FieldRef<"post_comments", 'String'>
  }
    

  // Custom InputTypes
  /**
   * post_comments findUnique
   */
  export type post_commentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_comments
     */
    select?: post_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_comments
     */
    omit?: post_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_commentsInclude<ExtArgs> | null
    /**
     * Filter, which post_comments to fetch.
     */
    where: post_commentsWhereUniqueInput
  }

  /**
   * post_comments findUniqueOrThrow
   */
  export type post_commentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_comments
     */
    select?: post_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_comments
     */
    omit?: post_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_commentsInclude<ExtArgs> | null
    /**
     * Filter, which post_comments to fetch.
     */
    where: post_commentsWhereUniqueInput
  }

  /**
   * post_comments findFirst
   */
  export type post_commentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_comments
     */
    select?: post_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_comments
     */
    omit?: post_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_commentsInclude<ExtArgs> | null
    /**
     * Filter, which post_comments to fetch.
     */
    where?: post_commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of post_comments to fetch.
     */
    orderBy?: post_commentsOrderByWithRelationInput | post_commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for post_comments.
     */
    cursor?: post_commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` post_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` post_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of post_comments.
     */
    distinct?: Post_commentsScalarFieldEnum | Post_commentsScalarFieldEnum[]
  }

  /**
   * post_comments findFirstOrThrow
   */
  export type post_commentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_comments
     */
    select?: post_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_comments
     */
    omit?: post_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_commentsInclude<ExtArgs> | null
    /**
     * Filter, which post_comments to fetch.
     */
    where?: post_commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of post_comments to fetch.
     */
    orderBy?: post_commentsOrderByWithRelationInput | post_commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for post_comments.
     */
    cursor?: post_commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` post_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` post_comments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of post_comments.
     */
    distinct?: Post_commentsScalarFieldEnum | Post_commentsScalarFieldEnum[]
  }

  /**
   * post_comments findMany
   */
  export type post_commentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_comments
     */
    select?: post_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_comments
     */
    omit?: post_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_commentsInclude<ExtArgs> | null
    /**
     * Filter, which post_comments to fetch.
     */
    where?: post_commentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of post_comments to fetch.
     */
    orderBy?: post_commentsOrderByWithRelationInput | post_commentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing post_comments.
     */
    cursor?: post_commentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` post_comments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` post_comments.
     */
    skip?: number
    distinct?: Post_commentsScalarFieldEnum | Post_commentsScalarFieldEnum[]
  }

  /**
   * post_comments create
   */
  export type post_commentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_comments
     */
    select?: post_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_comments
     */
    omit?: post_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_commentsInclude<ExtArgs> | null
    /**
     * The data needed to create a post_comments.
     */
    data?: XOR<post_commentsCreateInput, post_commentsUncheckedCreateInput>
  }

  /**
   * post_comments createMany
   */
  export type post_commentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many post_comments.
     */
    data: post_commentsCreateManyInput | post_commentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * post_comments createManyAndReturn
   */
  export type post_commentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_comments
     */
    select?: post_commentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the post_comments
     */
    omit?: post_commentsOmit<ExtArgs> | null
    /**
     * The data used to create many post_comments.
     */
    data: post_commentsCreateManyInput | post_commentsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_commentsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * post_comments update
   */
  export type post_commentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_comments
     */
    select?: post_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_comments
     */
    omit?: post_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_commentsInclude<ExtArgs> | null
    /**
     * The data needed to update a post_comments.
     */
    data: XOR<post_commentsUpdateInput, post_commentsUncheckedUpdateInput>
    /**
     * Choose, which post_comments to update.
     */
    where: post_commentsWhereUniqueInput
  }

  /**
   * post_comments updateMany
   */
  export type post_commentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update post_comments.
     */
    data: XOR<post_commentsUpdateManyMutationInput, post_commentsUncheckedUpdateManyInput>
    /**
     * Filter which post_comments to update
     */
    where?: post_commentsWhereInput
    /**
     * Limit how many post_comments to update.
     */
    limit?: number
  }

  /**
   * post_comments updateManyAndReturn
   */
  export type post_commentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_comments
     */
    select?: post_commentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the post_comments
     */
    omit?: post_commentsOmit<ExtArgs> | null
    /**
     * The data used to update post_comments.
     */
    data: XOR<post_commentsUpdateManyMutationInput, post_commentsUncheckedUpdateManyInput>
    /**
     * Filter which post_comments to update
     */
    where?: post_commentsWhereInput
    /**
     * Limit how many post_comments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_commentsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * post_comments upsert
   */
  export type post_commentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_comments
     */
    select?: post_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_comments
     */
    omit?: post_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_commentsInclude<ExtArgs> | null
    /**
     * The filter to search for the post_comments to update in case it exists.
     */
    where: post_commentsWhereUniqueInput
    /**
     * In case the post_comments found by the `where` argument doesn't exist, create a new post_comments with this data.
     */
    create: XOR<post_commentsCreateInput, post_commentsUncheckedCreateInput>
    /**
     * In case the post_comments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<post_commentsUpdateInput, post_commentsUncheckedUpdateInput>
  }

  /**
   * post_comments delete
   */
  export type post_commentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_comments
     */
    select?: post_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_comments
     */
    omit?: post_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_commentsInclude<ExtArgs> | null
    /**
     * Filter which post_comments to delete.
     */
    where: post_commentsWhereUniqueInput
  }

  /**
   * post_comments deleteMany
   */
  export type post_commentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which post_comments to delete
     */
    where?: post_commentsWhereInput
    /**
     * Limit how many post_comments to delete.
     */
    limit?: number
  }

  /**
   * post_comments.creator
   */
  export type post_comments$creatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * post_comments.posts
   */
  export type post_comments$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    where?: postsWhereInput
  }

  /**
   * post_comments without action
   */
  export type post_commentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_comments
     */
    select?: post_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_comments
     */
    omit?: post_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_commentsInclude<ExtArgs> | null
  }


  /**
   * Model posts
   */

  export type AggregatePosts = {
    _count: PostsCountAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  export type PostsMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    title: string | null
    created_by: string | null
    body: string | null
    slug: string | null
    photo_url: string | null
    published: boolean | null
  }

  export type PostsMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    title: string | null
    created_by: string | null
    body: string | null
    slug: string | null
    photo_url: string | null
    published: boolean | null
  }

  export type PostsCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    deleted_at: number
    title: number
    created_by: number
    body: number
    slug: number
    photo_url: number
    published: number
    _all: number
  }


  export type PostsMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    title?: true
    created_by?: true
    body?: true
    slug?: true
    photo_url?: true
    published?: true
  }

  export type PostsMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    title?: true
    created_by?: true
    body?: true
    slug?: true
    photo_url?: true
    published?: true
  }

  export type PostsCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    title?: true
    created_by?: true
    body?: true
    slug?: true
    photo_url?: true
    published?: true
    _all?: true
  }

  export type PostsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts to aggregate.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned posts
    **/
    _count?: true | PostsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostsMaxAggregateInputType
  }

  export type GetPostsAggregateType<T extends PostsAggregateArgs> = {
        [P in keyof T & keyof AggregatePosts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts[P]>
      : GetScalarType<T[P], AggregatePosts[P]>
  }




  export type postsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postsWhereInput
    orderBy?: postsOrderByWithAggregationInput | postsOrderByWithAggregationInput[]
    by: PostsScalarFieldEnum[] | PostsScalarFieldEnum
    having?: postsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostsCountAggregateInputType | true
    _min?: PostsMinAggregateInputType
    _max?: PostsMaxAggregateInputType
  }

  export type PostsGroupByOutputType = {
    id: string
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    title: string | null
    created_by: string | null
    body: string | null
    slug: string | null
    photo_url: string | null
    published: boolean | null
    _count: PostsCountAggregateOutputType | null
    _min: PostsMinAggregateOutputType | null
    _max: PostsMaxAggregateOutputType | null
  }

  type GetPostsGroupByPayload<T extends postsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostsGroupByOutputType[P]>
            : GetScalarType<T[P], PostsGroupByOutputType[P]>
        }
      >
    >


  export type postsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    title?: boolean
    created_by?: boolean
    body?: boolean
    slug?: boolean
    photo_url?: boolean
    published?: boolean
    likes?: boolean | posts$likesArgs<ExtArgs>
    post_comments?: boolean | posts$post_commentsArgs<ExtArgs>
    creator?: boolean | posts$creatorArgs<ExtArgs>
    tags?: boolean | posts$tagsArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type postsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    title?: boolean
    created_by?: boolean
    body?: boolean
    slug?: boolean
    photo_url?: boolean
    published?: boolean
    creator?: boolean | posts$creatorArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type postsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    title?: boolean
    created_by?: boolean
    body?: boolean
    slug?: boolean
    photo_url?: boolean
    published?: boolean
    creator?: boolean | posts$creatorArgs<ExtArgs>
  }, ExtArgs["result"]["posts"]>

  export type postsSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    title?: boolean
    created_by?: boolean
    body?: boolean
    slug?: boolean
    photo_url?: boolean
    published?: boolean
  }

  export type postsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "updated_at" | "deleted_at" | "title" | "created_by" | "body" | "slug" | "photo_url" | "published", ExtArgs["result"]["posts"]>
  export type postsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likes?: boolean | posts$likesArgs<ExtArgs>
    post_comments?: boolean | posts$post_commentsArgs<ExtArgs>
    creator?: boolean | posts$creatorArgs<ExtArgs>
    tags?: boolean | posts$tagsArgs<ExtArgs>
    _count?: boolean | PostsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type postsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | posts$creatorArgs<ExtArgs>
  }
  export type postsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | posts$creatorArgs<ExtArgs>
  }

  export type $postsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "posts"
    objects: {
      likes: Prisma.$likesPayload<ExtArgs>[]
      post_comments: Prisma.$post_commentsPayload<ExtArgs>[]
      creator: Prisma.$usersPayload<ExtArgs> | null
      tags: Prisma.$posts_to_tagsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
      title: string | null
      created_by: string | null
      body: string | null
      slug: string | null
      photo_url: string | null
      published: boolean | null
    }, ExtArgs["result"]["posts"]>
    composites: {}
  }

  type postsGetPayload<S extends boolean | null | undefined | postsDefaultArgs> = $Result.GetResult<Prisma.$postsPayload, S>

  type postsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<postsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostsCountAggregateInputType | true
    }

  export interface postsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['posts'], meta: { name: 'posts' } }
    /**
     * Find zero or one Posts that matches the filter.
     * @param {postsFindUniqueArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends postsFindUniqueArgs>(args: SelectSubset<T, postsFindUniqueArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Posts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {postsFindUniqueOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends postsFindUniqueOrThrowArgs>(args: SelectSubset<T, postsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindFirstArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends postsFindFirstArgs>(args?: SelectSubset<T, postsFindFirstArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindFirstOrThrowArgs} args - Arguments to find a Posts
     * @example
     * // Get one Posts
     * const posts = await prisma.posts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends postsFindFirstOrThrowArgs>(args?: SelectSubset<T, postsFindFirstOrThrowArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.posts.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.posts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postsWithIdOnly = await prisma.posts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends postsFindManyArgs>(args?: SelectSubset<T, postsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Posts.
     * @param {postsCreateArgs} args - Arguments to create a Posts.
     * @example
     * // Create one Posts
     * const Posts = await prisma.posts.create({
     *   data: {
     *     // ... data to create a Posts
     *   }
     * })
     * 
     */
    create<T extends postsCreateArgs>(args: SelectSubset<T, postsCreateArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {postsCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends postsCreateManyArgs>(args?: SelectSubset<T, postsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {postsCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const posts = await prisma.posts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postsWithIdOnly = await prisma.posts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends postsCreateManyAndReturnArgs>(args?: SelectSubset<T, postsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Posts.
     * @param {postsDeleteArgs} args - Arguments to delete one Posts.
     * @example
     * // Delete one Posts
     * const Posts = await prisma.posts.delete({
     *   where: {
     *     // ... filter to delete one Posts
     *   }
     * })
     * 
     */
    delete<T extends postsDeleteArgs>(args: SelectSubset<T, postsDeleteArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Posts.
     * @param {postsUpdateArgs} args - Arguments to update one Posts.
     * @example
     * // Update one Posts
     * const posts = await prisma.posts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends postsUpdateArgs>(args: SelectSubset<T, postsUpdateArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {postsDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.posts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends postsDeleteManyArgs>(args?: SelectSubset<T, postsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends postsUpdateManyArgs>(args: SelectSubset<T, postsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {postsUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const posts = await prisma.posts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postsWithIdOnly = await prisma.posts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends postsUpdateManyAndReturnArgs>(args: SelectSubset<T, postsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Posts.
     * @param {postsUpsertArgs} args - Arguments to update or create a Posts.
     * @example
     * // Update or create a Posts
     * const posts = await prisma.posts.upsert({
     *   create: {
     *     // ... data to create a Posts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts we want to update
     *   }
     * })
     */
    upsert<T extends postsUpsertArgs>(args: SelectSubset<T, postsUpsertArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.posts.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends postsCountArgs>(
      args?: Subset<T, postsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostsAggregateArgs>(args: Subset<T, PostsAggregateArgs>): Prisma.PrismaPromise<GetPostsAggregateType<T>>

    /**
     * Group by Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends postsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: postsGroupByArgs['orderBy'] }
        : { orderBy?: postsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, postsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the posts model
   */
  readonly fields: postsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for posts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__postsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    likes<T extends posts$likesArgs<ExtArgs> = {}>(args?: Subset<T, posts$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    post_comments<T extends posts$post_commentsArgs<ExtArgs> = {}>(args?: Subset<T, posts$post_commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    creator<T extends posts$creatorArgs<ExtArgs> = {}>(args?: Subset<T, posts$creatorArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    tags<T extends posts$tagsArgs<ExtArgs> = {}>(args?: Subset<T, posts$tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$posts_to_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the posts model
   */
  interface postsFieldRefs {
    readonly id: FieldRef<"posts", 'String'>
    readonly created_at: FieldRef<"posts", 'DateTime'>
    readonly updated_at: FieldRef<"posts", 'DateTime'>
    readonly deleted_at: FieldRef<"posts", 'DateTime'>
    readonly title: FieldRef<"posts", 'String'>
    readonly created_by: FieldRef<"posts", 'String'>
    readonly body: FieldRef<"posts", 'String'>
    readonly slug: FieldRef<"posts", 'String'>
    readonly photo_url: FieldRef<"posts", 'String'>
    readonly published: FieldRef<"posts", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * posts findUnique
   */
  export type postsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts findUniqueOrThrow
   */
  export type postsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts findFirst
   */
  export type postsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts findFirstOrThrow
   */
  export type postsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts.
     */
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts findMany
   */
  export type postsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter, which posts to fetch.
     */
    where?: postsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts to fetch.
     */
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing posts.
     */
    cursor?: postsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts.
     */
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * posts create
   */
  export type postsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The data needed to create a posts.
     */
    data?: XOR<postsCreateInput, postsUncheckedCreateInput>
  }

  /**
   * posts createMany
   */
  export type postsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many posts.
     */
    data: postsCreateManyInput | postsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * posts createManyAndReturn
   */
  export type postsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * The data used to create many posts.
     */
    data: postsCreateManyInput | postsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * posts update
   */
  export type postsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The data needed to update a posts.
     */
    data: XOR<postsUpdateInput, postsUncheckedUpdateInput>
    /**
     * Choose, which posts to update.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts updateMany
   */
  export type postsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update posts.
     */
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyInput>
    /**
     * Filter which posts to update
     */
    where?: postsWhereInput
    /**
     * Limit how many posts to update.
     */
    limit?: number
  }

  /**
   * posts updateManyAndReturn
   */
  export type postsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * The data used to update posts.
     */
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyInput>
    /**
     * Filter which posts to update
     */
    where?: postsWhereInput
    /**
     * Limit how many posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * posts upsert
   */
  export type postsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * The filter to search for the posts to update in case it exists.
     */
    where: postsWhereUniqueInput
    /**
     * In case the posts found by the `where` argument doesn't exist, create a new posts with this data.
     */
    create: XOR<postsCreateInput, postsUncheckedCreateInput>
    /**
     * In case the posts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<postsUpdateInput, postsUncheckedUpdateInput>
  }

  /**
   * posts delete
   */
  export type postsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    /**
     * Filter which posts to delete.
     */
    where: postsWhereUniqueInput
  }

  /**
   * posts deleteMany
   */
  export type postsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts to delete
     */
    where?: postsWhereInput
    /**
     * Limit how many posts to delete.
     */
    limit?: number
  }

  /**
   * posts.likes
   */
  export type posts$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    where?: likesWhereInput
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    cursor?: likesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * posts.post_comments
   */
  export type posts$post_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_comments
     */
    select?: post_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_comments
     */
    omit?: post_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_commentsInclude<ExtArgs> | null
    where?: post_commentsWhereInput
    orderBy?: post_commentsOrderByWithRelationInput | post_commentsOrderByWithRelationInput[]
    cursor?: post_commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Post_commentsScalarFieldEnum | Post_commentsScalarFieldEnum[]
  }

  /**
   * posts.creator
   */
  export type posts$creatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * posts.tags
   */
  export type posts$tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_to_tags
     */
    select?: posts_to_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_to_tags
     */
    omit?: posts_to_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_to_tagsInclude<ExtArgs> | null
    where?: posts_to_tagsWhereInput
    orderBy?: posts_to_tagsOrderByWithRelationInput | posts_to_tagsOrderByWithRelationInput[]
    cursor?: posts_to_tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Posts_to_tagsScalarFieldEnum | Posts_to_tagsScalarFieldEnum[]
  }

  /**
   * posts without action
   */
  export type postsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    image: string | null
    is_super_admin: boolean | null
    username: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    first_name: string | null
    last_name: string | null
    email: string | null
    password: string | null
    image: string | null
    is_super_admin: boolean | null
    username: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    deleted_at: number
    first_name: number
    last_name: number
    email: number
    password: number
    image: number
    is_super_admin: number
    username: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    image?: true
    is_super_admin?: true
    username?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    image?: true
    is_super_admin?: true
    username?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    first_name?: true
    last_name?: true
    email?: true
    password?: true
    image?: true
    is_super_admin?: true
    username?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    first_name: string | null
    last_name: string | null
    email: string
    password: string | null
    image: string | null
    is_super_admin: boolean | null
    username: string | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    is_super_admin?: boolean
    username?: boolean
    files?: boolean | users$filesArgs<ExtArgs>
    likes?: boolean | users$likesArgs<ExtArgs>
    post_comments?: boolean | users$post_commentsArgs<ExtArgs>
    posts?: boolean | users$postsArgs<ExtArgs>
    profiles?: boolean | users$profilesArgs<ExtArgs>
    workspaces?: boolean | users$workspacesArgs<ExtArgs>
    workspace_users?: boolean | users$workspace_usersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    is_super_admin?: boolean
    username?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    is_super_admin?: boolean
    username?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    first_name?: boolean
    last_name?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    is_super_admin?: boolean
    username?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "updated_at" | "deleted_at" | "first_name" | "last_name" | "email" | "password" | "image" | "is_super_admin" | "username", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    files?: boolean | users$filesArgs<ExtArgs>
    likes?: boolean | users$likesArgs<ExtArgs>
    post_comments?: boolean | users$post_commentsArgs<ExtArgs>
    posts?: boolean | users$postsArgs<ExtArgs>
    profiles?: boolean | users$profilesArgs<ExtArgs>
    workspaces?: boolean | users$workspacesArgs<ExtArgs>
    workspace_users?: boolean | users$workspace_usersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      files: Prisma.$filesPayload<ExtArgs>[]
      likes: Prisma.$likesPayload<ExtArgs>[]
      post_comments: Prisma.$post_commentsPayload<ExtArgs>[]
      posts: Prisma.$postsPayload<ExtArgs>[]
      profiles: Prisma.$profilesPayload<ExtArgs> | null
      workspaces: Prisma.$workspacesPayload<ExtArgs>[]
      workspace_users: Prisma.$workspace_usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
      first_name: string | null
      last_name: string | null
      email: string
      password: string | null
      image: string | null
      is_super_admin: boolean | null
      username: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    files<T extends users$filesArgs<ExtArgs> = {}>(args?: Subset<T, users$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    likes<T extends users$likesArgs<ExtArgs> = {}>(args?: Subset<T, users$likesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    post_comments<T extends users$post_commentsArgs<ExtArgs> = {}>(args?: Subset<T, users$post_commentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$post_commentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    posts<T extends users$postsArgs<ExtArgs> = {}>(args?: Subset<T, users$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    profiles<T extends users$profilesArgs<ExtArgs> = {}>(args?: Subset<T, users$profilesArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    workspaces<T extends users$workspacesArgs<ExtArgs> = {}>(args?: Subset<T, users$workspacesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workspace_users<T extends users$workspace_usersArgs<ExtArgs> = {}>(args?: Subset<T, users$workspace_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspace_usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
    readonly deleted_at: FieldRef<"users", 'DateTime'>
    readonly first_name: FieldRef<"users", 'String'>
    readonly last_name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
    readonly image: FieldRef<"users", 'String'>
    readonly is_super_admin: FieldRef<"users", 'Boolean'>
    readonly username: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.files
   */
  export type users$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    where?: filesWhereInput
    orderBy?: filesOrderByWithRelationInput | filesOrderByWithRelationInput[]
    cursor?: filesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * users.likes
   */
  export type users$likesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    where?: likesWhereInput
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    cursor?: likesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * users.post_comments
   */
  export type users$post_commentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the post_comments
     */
    select?: post_commentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the post_comments
     */
    omit?: post_commentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: post_commentsInclude<ExtArgs> | null
    where?: post_commentsWhereInput
    orderBy?: post_commentsOrderByWithRelationInput | post_commentsOrderByWithRelationInput[]
    cursor?: post_commentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Post_commentsScalarFieldEnum | Post_commentsScalarFieldEnum[]
  }

  /**
   * users.posts
   */
  export type users$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    where?: postsWhereInput
    orderBy?: postsOrderByWithRelationInput | postsOrderByWithRelationInput[]
    cursor?: postsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostsScalarFieldEnum | PostsScalarFieldEnum[]
  }

  /**
   * users.profiles
   */
  export type users$profilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    where?: profilesWhereInput
  }

  /**
   * users.workspaces
   */
  export type users$workspacesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    where?: workspacesWhereInput
    orderBy?: workspacesOrderByWithRelationInput | workspacesOrderByWithRelationInput[]
    cursor?: workspacesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkspacesScalarFieldEnum | WorkspacesScalarFieldEnum[]
  }

  /**
   * users.workspace_users
   */
  export type users$workspace_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_users
     */
    select?: workspace_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_users
     */
    omit?: workspace_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_usersInclude<ExtArgs> | null
    where?: workspace_usersWhereInput
    orderBy?: workspace_usersOrderByWithRelationInput | workspace_usersOrderByWithRelationInput[]
    cursor?: workspace_usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Workspace_usersScalarFieldEnum | Workspace_usersScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model posts_to_tags
   */

  export type AggregatePosts_to_tags = {
    _count: Posts_to_tagsCountAggregateOutputType | null
    _avg: Posts_to_tagsAvgAggregateOutputType | null
    _sum: Posts_to_tagsSumAggregateOutputType | null
    _min: Posts_to_tagsMinAggregateOutputType | null
    _max: Posts_to_tagsMaxAggregateOutputType | null
  }

  export type Posts_to_tagsAvgAggregateOutputType = {
    tag_id: number | null
  }

  export type Posts_to_tagsSumAggregateOutputType = {
    tag_id: number | null
  }

  export type Posts_to_tagsMinAggregateOutputType = {
    post_id: string | null
    tag_id: number | null
  }

  export type Posts_to_tagsMaxAggregateOutputType = {
    post_id: string | null
    tag_id: number | null
  }

  export type Posts_to_tagsCountAggregateOutputType = {
    post_id: number
    tag_id: number
    _all: number
  }


  export type Posts_to_tagsAvgAggregateInputType = {
    tag_id?: true
  }

  export type Posts_to_tagsSumAggregateInputType = {
    tag_id?: true
  }

  export type Posts_to_tagsMinAggregateInputType = {
    post_id?: true
    tag_id?: true
  }

  export type Posts_to_tagsMaxAggregateInputType = {
    post_id?: true
    tag_id?: true
  }

  export type Posts_to_tagsCountAggregateInputType = {
    post_id?: true
    tag_id?: true
    _all?: true
  }

  export type Posts_to_tagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts_to_tags to aggregate.
     */
    where?: posts_to_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts_to_tags to fetch.
     */
    orderBy?: posts_to_tagsOrderByWithRelationInput | posts_to_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: posts_to_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts_to_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts_to_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned posts_to_tags
    **/
    _count?: true | Posts_to_tagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Posts_to_tagsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Posts_to_tagsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Posts_to_tagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Posts_to_tagsMaxAggregateInputType
  }

  export type GetPosts_to_tagsAggregateType<T extends Posts_to_tagsAggregateArgs> = {
        [P in keyof T & keyof AggregatePosts_to_tags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePosts_to_tags[P]>
      : GetScalarType<T[P], AggregatePosts_to_tags[P]>
  }




  export type posts_to_tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: posts_to_tagsWhereInput
    orderBy?: posts_to_tagsOrderByWithAggregationInput | posts_to_tagsOrderByWithAggregationInput[]
    by: Posts_to_tagsScalarFieldEnum[] | Posts_to_tagsScalarFieldEnum
    having?: posts_to_tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Posts_to_tagsCountAggregateInputType | true
    _avg?: Posts_to_tagsAvgAggregateInputType
    _sum?: Posts_to_tagsSumAggregateInputType
    _min?: Posts_to_tagsMinAggregateInputType
    _max?: Posts_to_tagsMaxAggregateInputType
  }

  export type Posts_to_tagsGroupByOutputType = {
    post_id: string
    tag_id: number
    _count: Posts_to_tagsCountAggregateOutputType | null
    _avg: Posts_to_tagsAvgAggregateOutputType | null
    _sum: Posts_to_tagsSumAggregateOutputType | null
    _min: Posts_to_tagsMinAggregateOutputType | null
    _max: Posts_to_tagsMaxAggregateOutputType | null
  }

  type GetPosts_to_tagsGroupByPayload<T extends posts_to_tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Posts_to_tagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Posts_to_tagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Posts_to_tagsGroupByOutputType[P]>
            : GetScalarType<T[P], Posts_to_tagsGroupByOutputType[P]>
        }
      >
    >


  export type posts_to_tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    tag_id?: boolean
    post?: boolean | postsDefaultArgs<ExtArgs>
    tag?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts_to_tags"]>

  export type posts_to_tagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    tag_id?: boolean
    post?: boolean | postsDefaultArgs<ExtArgs>
    tag?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts_to_tags"]>

  export type posts_to_tagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    post_id?: boolean
    tag_id?: boolean
    post?: boolean | postsDefaultArgs<ExtArgs>
    tag?: boolean | tagsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["posts_to_tags"]>

  export type posts_to_tagsSelectScalar = {
    post_id?: boolean
    tag_id?: boolean
  }

  export type posts_to_tagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"post_id" | "tag_id", ExtArgs["result"]["posts_to_tags"]>
  export type posts_to_tagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | postsDefaultArgs<ExtArgs>
    tag?: boolean | tagsDefaultArgs<ExtArgs>
  }
  export type posts_to_tagsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | postsDefaultArgs<ExtArgs>
    tag?: boolean | tagsDefaultArgs<ExtArgs>
  }
  export type posts_to_tagsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    post?: boolean | postsDefaultArgs<ExtArgs>
    tag?: boolean | tagsDefaultArgs<ExtArgs>
  }

  export type $posts_to_tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "posts_to_tags"
    objects: {
      post: Prisma.$postsPayload<ExtArgs>
      tag: Prisma.$tagsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      post_id: string
      tag_id: number
    }, ExtArgs["result"]["posts_to_tags"]>
    composites: {}
  }

  type posts_to_tagsGetPayload<S extends boolean | null | undefined | posts_to_tagsDefaultArgs> = $Result.GetResult<Prisma.$posts_to_tagsPayload, S>

  type posts_to_tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<posts_to_tagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Posts_to_tagsCountAggregateInputType | true
    }

  export interface posts_to_tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['posts_to_tags'], meta: { name: 'posts_to_tags' } }
    /**
     * Find zero or one Posts_to_tags that matches the filter.
     * @param {posts_to_tagsFindUniqueArgs} args - Arguments to find a Posts_to_tags
     * @example
     * // Get one Posts_to_tags
     * const posts_to_tags = await prisma.posts_to_tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends posts_to_tagsFindUniqueArgs>(args: SelectSubset<T, posts_to_tagsFindUniqueArgs<ExtArgs>>): Prisma__posts_to_tagsClient<$Result.GetResult<Prisma.$posts_to_tagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Posts_to_tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {posts_to_tagsFindUniqueOrThrowArgs} args - Arguments to find a Posts_to_tags
     * @example
     * // Get one Posts_to_tags
     * const posts_to_tags = await prisma.posts_to_tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends posts_to_tagsFindUniqueOrThrowArgs>(args: SelectSubset<T, posts_to_tagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__posts_to_tagsClient<$Result.GetResult<Prisma.$posts_to_tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts_to_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posts_to_tagsFindFirstArgs} args - Arguments to find a Posts_to_tags
     * @example
     * // Get one Posts_to_tags
     * const posts_to_tags = await prisma.posts_to_tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends posts_to_tagsFindFirstArgs>(args?: SelectSubset<T, posts_to_tagsFindFirstArgs<ExtArgs>>): Prisma__posts_to_tagsClient<$Result.GetResult<Prisma.$posts_to_tagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Posts_to_tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posts_to_tagsFindFirstOrThrowArgs} args - Arguments to find a Posts_to_tags
     * @example
     * // Get one Posts_to_tags
     * const posts_to_tags = await prisma.posts_to_tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends posts_to_tagsFindFirstOrThrowArgs>(args?: SelectSubset<T, posts_to_tagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__posts_to_tagsClient<$Result.GetResult<Prisma.$posts_to_tagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts_to_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posts_to_tagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts_to_tags
     * const posts_to_tags = await prisma.posts_to_tags.findMany()
     * 
     * // Get first 10 Posts_to_tags
     * const posts_to_tags = await prisma.posts_to_tags.findMany({ take: 10 })
     * 
     * // Only select the `post_id`
     * const posts_to_tagsWithPost_idOnly = await prisma.posts_to_tags.findMany({ select: { post_id: true } })
     * 
     */
    findMany<T extends posts_to_tagsFindManyArgs>(args?: SelectSubset<T, posts_to_tagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$posts_to_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Posts_to_tags.
     * @param {posts_to_tagsCreateArgs} args - Arguments to create a Posts_to_tags.
     * @example
     * // Create one Posts_to_tags
     * const Posts_to_tags = await prisma.posts_to_tags.create({
     *   data: {
     *     // ... data to create a Posts_to_tags
     *   }
     * })
     * 
     */
    create<T extends posts_to_tagsCreateArgs>(args: SelectSubset<T, posts_to_tagsCreateArgs<ExtArgs>>): Prisma__posts_to_tagsClient<$Result.GetResult<Prisma.$posts_to_tagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts_to_tags.
     * @param {posts_to_tagsCreateManyArgs} args - Arguments to create many Posts_to_tags.
     * @example
     * // Create many Posts_to_tags
     * const posts_to_tags = await prisma.posts_to_tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends posts_to_tagsCreateManyArgs>(args?: SelectSubset<T, posts_to_tagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts_to_tags and returns the data saved in the database.
     * @param {posts_to_tagsCreateManyAndReturnArgs} args - Arguments to create many Posts_to_tags.
     * @example
     * // Create many Posts_to_tags
     * const posts_to_tags = await prisma.posts_to_tags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts_to_tags and only return the `post_id`
     * const posts_to_tagsWithPost_idOnly = await prisma.posts_to_tags.createManyAndReturn({
     *   select: { post_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends posts_to_tagsCreateManyAndReturnArgs>(args?: SelectSubset<T, posts_to_tagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$posts_to_tagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Posts_to_tags.
     * @param {posts_to_tagsDeleteArgs} args - Arguments to delete one Posts_to_tags.
     * @example
     * // Delete one Posts_to_tags
     * const Posts_to_tags = await prisma.posts_to_tags.delete({
     *   where: {
     *     // ... filter to delete one Posts_to_tags
     *   }
     * })
     * 
     */
    delete<T extends posts_to_tagsDeleteArgs>(args: SelectSubset<T, posts_to_tagsDeleteArgs<ExtArgs>>): Prisma__posts_to_tagsClient<$Result.GetResult<Prisma.$posts_to_tagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Posts_to_tags.
     * @param {posts_to_tagsUpdateArgs} args - Arguments to update one Posts_to_tags.
     * @example
     * // Update one Posts_to_tags
     * const posts_to_tags = await prisma.posts_to_tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends posts_to_tagsUpdateArgs>(args: SelectSubset<T, posts_to_tagsUpdateArgs<ExtArgs>>): Prisma__posts_to_tagsClient<$Result.GetResult<Prisma.$posts_to_tagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts_to_tags.
     * @param {posts_to_tagsDeleteManyArgs} args - Arguments to filter Posts_to_tags to delete.
     * @example
     * // Delete a few Posts_to_tags
     * const { count } = await prisma.posts_to_tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends posts_to_tagsDeleteManyArgs>(args?: SelectSubset<T, posts_to_tagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts_to_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posts_to_tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts_to_tags
     * const posts_to_tags = await prisma.posts_to_tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends posts_to_tagsUpdateManyArgs>(args: SelectSubset<T, posts_to_tagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts_to_tags and returns the data updated in the database.
     * @param {posts_to_tagsUpdateManyAndReturnArgs} args - Arguments to update many Posts_to_tags.
     * @example
     * // Update many Posts_to_tags
     * const posts_to_tags = await prisma.posts_to_tags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts_to_tags and only return the `post_id`
     * const posts_to_tagsWithPost_idOnly = await prisma.posts_to_tags.updateManyAndReturn({
     *   select: { post_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends posts_to_tagsUpdateManyAndReturnArgs>(args: SelectSubset<T, posts_to_tagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$posts_to_tagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Posts_to_tags.
     * @param {posts_to_tagsUpsertArgs} args - Arguments to update or create a Posts_to_tags.
     * @example
     * // Update or create a Posts_to_tags
     * const posts_to_tags = await prisma.posts_to_tags.upsert({
     *   create: {
     *     // ... data to create a Posts_to_tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Posts_to_tags we want to update
     *   }
     * })
     */
    upsert<T extends posts_to_tagsUpsertArgs>(args: SelectSubset<T, posts_to_tagsUpsertArgs<ExtArgs>>): Prisma__posts_to_tagsClient<$Result.GetResult<Prisma.$posts_to_tagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts_to_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posts_to_tagsCountArgs} args - Arguments to filter Posts_to_tags to count.
     * @example
     * // Count the number of Posts_to_tags
     * const count = await prisma.posts_to_tags.count({
     *   where: {
     *     // ... the filter for the Posts_to_tags we want to count
     *   }
     * })
    **/
    count<T extends posts_to_tagsCountArgs>(
      args?: Subset<T, posts_to_tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Posts_to_tagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Posts_to_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Posts_to_tagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Posts_to_tagsAggregateArgs>(args: Subset<T, Posts_to_tagsAggregateArgs>): Prisma.PrismaPromise<GetPosts_to_tagsAggregateType<T>>

    /**
     * Group by Posts_to_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {posts_to_tagsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends posts_to_tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: posts_to_tagsGroupByArgs['orderBy'] }
        : { orderBy?: posts_to_tagsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, posts_to_tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPosts_to_tagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the posts_to_tags model
   */
  readonly fields: posts_to_tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for posts_to_tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__posts_to_tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    post<T extends postsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, postsDefaultArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends tagsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tagsDefaultArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the posts_to_tags model
   */
  interface posts_to_tagsFieldRefs {
    readonly post_id: FieldRef<"posts_to_tags", 'String'>
    readonly tag_id: FieldRef<"posts_to_tags", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * posts_to_tags findUnique
   */
  export type posts_to_tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_to_tags
     */
    select?: posts_to_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_to_tags
     */
    omit?: posts_to_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_to_tagsInclude<ExtArgs> | null
    /**
     * Filter, which posts_to_tags to fetch.
     */
    where: posts_to_tagsWhereUniqueInput
  }

  /**
   * posts_to_tags findUniqueOrThrow
   */
  export type posts_to_tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_to_tags
     */
    select?: posts_to_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_to_tags
     */
    omit?: posts_to_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_to_tagsInclude<ExtArgs> | null
    /**
     * Filter, which posts_to_tags to fetch.
     */
    where: posts_to_tagsWhereUniqueInput
  }

  /**
   * posts_to_tags findFirst
   */
  export type posts_to_tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_to_tags
     */
    select?: posts_to_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_to_tags
     */
    omit?: posts_to_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_to_tagsInclude<ExtArgs> | null
    /**
     * Filter, which posts_to_tags to fetch.
     */
    where?: posts_to_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts_to_tags to fetch.
     */
    orderBy?: posts_to_tagsOrderByWithRelationInput | posts_to_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts_to_tags.
     */
    cursor?: posts_to_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts_to_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts_to_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts_to_tags.
     */
    distinct?: Posts_to_tagsScalarFieldEnum | Posts_to_tagsScalarFieldEnum[]
  }

  /**
   * posts_to_tags findFirstOrThrow
   */
  export type posts_to_tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_to_tags
     */
    select?: posts_to_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_to_tags
     */
    omit?: posts_to_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_to_tagsInclude<ExtArgs> | null
    /**
     * Filter, which posts_to_tags to fetch.
     */
    where?: posts_to_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts_to_tags to fetch.
     */
    orderBy?: posts_to_tagsOrderByWithRelationInput | posts_to_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for posts_to_tags.
     */
    cursor?: posts_to_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts_to_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts_to_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of posts_to_tags.
     */
    distinct?: Posts_to_tagsScalarFieldEnum | Posts_to_tagsScalarFieldEnum[]
  }

  /**
   * posts_to_tags findMany
   */
  export type posts_to_tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_to_tags
     */
    select?: posts_to_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_to_tags
     */
    omit?: posts_to_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_to_tagsInclude<ExtArgs> | null
    /**
     * Filter, which posts_to_tags to fetch.
     */
    where?: posts_to_tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of posts_to_tags to fetch.
     */
    orderBy?: posts_to_tagsOrderByWithRelationInput | posts_to_tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing posts_to_tags.
     */
    cursor?: posts_to_tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` posts_to_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` posts_to_tags.
     */
    skip?: number
    distinct?: Posts_to_tagsScalarFieldEnum | Posts_to_tagsScalarFieldEnum[]
  }

  /**
   * posts_to_tags create
   */
  export type posts_to_tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_to_tags
     */
    select?: posts_to_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_to_tags
     */
    omit?: posts_to_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_to_tagsInclude<ExtArgs> | null
    /**
     * The data needed to create a posts_to_tags.
     */
    data: XOR<posts_to_tagsCreateInput, posts_to_tagsUncheckedCreateInput>
  }

  /**
   * posts_to_tags createMany
   */
  export type posts_to_tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many posts_to_tags.
     */
    data: posts_to_tagsCreateManyInput | posts_to_tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * posts_to_tags createManyAndReturn
   */
  export type posts_to_tagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_to_tags
     */
    select?: posts_to_tagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the posts_to_tags
     */
    omit?: posts_to_tagsOmit<ExtArgs> | null
    /**
     * The data used to create many posts_to_tags.
     */
    data: posts_to_tagsCreateManyInput | posts_to_tagsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_to_tagsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * posts_to_tags update
   */
  export type posts_to_tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_to_tags
     */
    select?: posts_to_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_to_tags
     */
    omit?: posts_to_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_to_tagsInclude<ExtArgs> | null
    /**
     * The data needed to update a posts_to_tags.
     */
    data: XOR<posts_to_tagsUpdateInput, posts_to_tagsUncheckedUpdateInput>
    /**
     * Choose, which posts_to_tags to update.
     */
    where: posts_to_tagsWhereUniqueInput
  }

  /**
   * posts_to_tags updateMany
   */
  export type posts_to_tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update posts_to_tags.
     */
    data: XOR<posts_to_tagsUpdateManyMutationInput, posts_to_tagsUncheckedUpdateManyInput>
    /**
     * Filter which posts_to_tags to update
     */
    where?: posts_to_tagsWhereInput
    /**
     * Limit how many posts_to_tags to update.
     */
    limit?: number
  }

  /**
   * posts_to_tags updateManyAndReturn
   */
  export type posts_to_tagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_to_tags
     */
    select?: posts_to_tagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the posts_to_tags
     */
    omit?: posts_to_tagsOmit<ExtArgs> | null
    /**
     * The data used to update posts_to_tags.
     */
    data: XOR<posts_to_tagsUpdateManyMutationInput, posts_to_tagsUncheckedUpdateManyInput>
    /**
     * Filter which posts_to_tags to update
     */
    where?: posts_to_tagsWhereInput
    /**
     * Limit how many posts_to_tags to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_to_tagsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * posts_to_tags upsert
   */
  export type posts_to_tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_to_tags
     */
    select?: posts_to_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_to_tags
     */
    omit?: posts_to_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_to_tagsInclude<ExtArgs> | null
    /**
     * The filter to search for the posts_to_tags to update in case it exists.
     */
    where: posts_to_tagsWhereUniqueInput
    /**
     * In case the posts_to_tags found by the `where` argument doesn't exist, create a new posts_to_tags with this data.
     */
    create: XOR<posts_to_tagsCreateInput, posts_to_tagsUncheckedCreateInput>
    /**
     * In case the posts_to_tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<posts_to_tagsUpdateInput, posts_to_tagsUncheckedUpdateInput>
  }

  /**
   * posts_to_tags delete
   */
  export type posts_to_tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_to_tags
     */
    select?: posts_to_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_to_tags
     */
    omit?: posts_to_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_to_tagsInclude<ExtArgs> | null
    /**
     * Filter which posts_to_tags to delete.
     */
    where: posts_to_tagsWhereUniqueInput
  }

  /**
   * posts_to_tags deleteMany
   */
  export type posts_to_tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which posts_to_tags to delete
     */
    where?: posts_to_tagsWhereInput
    /**
     * Limit how many posts_to_tags to delete.
     */
    limit?: number
  }

  /**
   * posts_to_tags without action
   */
  export type posts_to_tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_to_tags
     */
    select?: posts_to_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_to_tags
     */
    omit?: posts_to_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_to_tagsInclude<ExtArgs> | null
  }


  /**
   * Model tags
   */

  export type AggregateTags = {
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  export type TagsAvgAggregateOutputType = {
    id: number | null
  }

  export type TagsSumAggregateOutputType = {
    id: number | null
  }

  export type TagsMinAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
  }

  export type TagsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    created_at: Date | null
  }

  export type TagsCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    _all: number
  }


  export type TagsAvgAggregateInputType = {
    id?: true
  }

  export type TagsSumAggregateInputType = {
    id?: true
  }

  export type TagsMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
  }

  export type TagsMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
  }

  export type TagsCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    _all?: true
  }

  export type TagsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to aggregate.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tags
    **/
    _count?: true | TagsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagsMaxAggregateInputType
  }

  export type GetTagsAggregateType<T extends TagsAggregateArgs> = {
        [P in keyof T & keyof AggregateTags]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTags[P]>
      : GetScalarType<T[P], AggregateTags[P]>
  }




  export type tagsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tagsWhereInput
    orderBy?: tagsOrderByWithAggregationInput | tagsOrderByWithAggregationInput[]
    by: TagsScalarFieldEnum[] | TagsScalarFieldEnum
    having?: tagsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagsCountAggregateInputType | true
    _avg?: TagsAvgAggregateInputType
    _sum?: TagsSumAggregateInputType
    _min?: TagsMinAggregateInputType
    _max?: TagsMaxAggregateInputType
  }

  export type TagsGroupByOutputType = {
    id: number
    name: string | null
    created_at: Date | null
    _count: TagsCountAggregateOutputType | null
    _avg: TagsAvgAggregateOutputType | null
    _sum: TagsSumAggregateOutputType | null
    _min: TagsMinAggregateOutputType | null
    _max: TagsMaxAggregateOutputType | null
  }

  type GetTagsGroupByPayload<T extends tagsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagsGroupByOutputType[P]>
            : GetScalarType<T[P], TagsGroupByOutputType[P]>
        }
      >
    >


  export type tagsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    posts_to_tags?: boolean | tags$posts_to_tagsArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["tags"]>

  export type tagsSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
  }

  export type tagsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at", ExtArgs["result"]["tags"]>
  export type tagsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts_to_tags?: boolean | tags$posts_to_tagsArgs<ExtArgs>
    _count?: boolean | TagsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type tagsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type tagsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $tagsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tags"
    objects: {
      posts_to_tags: Prisma.$posts_to_tagsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      created_at: Date | null
    }, ExtArgs["result"]["tags"]>
    composites: {}
  }

  type tagsGetPayload<S extends boolean | null | undefined | tagsDefaultArgs> = $Result.GetResult<Prisma.$tagsPayload, S>

  type tagsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tagsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagsCountAggregateInputType | true
    }

  export interface tagsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tags'], meta: { name: 'tags' } }
    /**
     * Find zero or one Tags that matches the filter.
     * @param {tagsFindUniqueArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tagsFindUniqueArgs>(args: SelectSubset<T, tagsFindUniqueArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tags that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tagsFindUniqueOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tagsFindUniqueOrThrowArgs>(args: SelectSubset<T, tagsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tagsFindFirstArgs>(args?: SelectSubset<T, tagsFindFirstArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tags that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindFirstOrThrowArgs} args - Arguments to find a Tags
     * @example
     * // Get one Tags
     * const tags = await prisma.tags.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tagsFindFirstOrThrowArgs>(args?: SelectSubset<T, tagsFindFirstOrThrowArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tags.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tags.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagsWithIdOnly = await prisma.tags.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tagsFindManyArgs>(args?: SelectSubset<T, tagsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tags.
     * @param {tagsCreateArgs} args - Arguments to create a Tags.
     * @example
     * // Create one Tags
     * const Tags = await prisma.tags.create({
     *   data: {
     *     // ... data to create a Tags
     *   }
     * })
     * 
     */
    create<T extends tagsCreateArgs>(args: SelectSubset<T, tagsCreateArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {tagsCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tagsCreateManyArgs>(args?: SelectSubset<T, tagsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tags and returns the data saved in the database.
     * @param {tagsCreateManyAndReturnArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tags = await prisma.tags.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tags and only return the `id`
     * const tagsWithIdOnly = await prisma.tags.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends tagsCreateManyAndReturnArgs>(args?: SelectSubset<T, tagsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Tags.
     * @param {tagsDeleteArgs} args - Arguments to delete one Tags.
     * @example
     * // Delete one Tags
     * const Tags = await prisma.tags.delete({
     *   where: {
     *     // ... filter to delete one Tags
     *   }
     * })
     * 
     */
    delete<T extends tagsDeleteArgs>(args: SelectSubset<T, tagsDeleteArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tags.
     * @param {tagsUpdateArgs} args - Arguments to update one Tags.
     * @example
     * // Update one Tags
     * const tags = await prisma.tags.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tagsUpdateArgs>(args: SelectSubset<T, tagsUpdateArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {tagsDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tags.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tagsDeleteManyArgs>(args?: SelectSubset<T, tagsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tagsUpdateManyArgs>(args: SelectSubset<T, tagsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags and returns the data updated in the database.
     * @param {tagsUpdateManyAndReturnArgs} args - Arguments to update many Tags.
     * @example
     * // Update many Tags
     * const tags = await prisma.tags.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tags and only return the `id`
     * const tagsWithIdOnly = await prisma.tags.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends tagsUpdateManyAndReturnArgs>(args: SelectSubset<T, tagsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Tags.
     * @param {tagsUpsertArgs} args - Arguments to update or create a Tags.
     * @example
     * // Update or create a Tags
     * const tags = await prisma.tags.upsert({
     *   create: {
     *     // ... data to create a Tags
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tags we want to update
     *   }
     * })
     */
    upsert<T extends tagsUpsertArgs>(args: SelectSubset<T, tagsUpsertArgs<ExtArgs>>): Prisma__tagsClient<$Result.GetResult<Prisma.$tagsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tags.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends tagsCountArgs>(
      args?: Subset<T, tagsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagsAggregateArgs>(args: Subset<T, TagsAggregateArgs>): Prisma.PrismaPromise<GetTagsAggregateType<T>>

    /**
     * Group by Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends tagsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tagsGroupByArgs['orderBy'] }
        : { orderBy?: tagsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, tagsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tags model
   */
  readonly fields: tagsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tags.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tagsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts_to_tags<T extends tags$posts_to_tagsArgs<ExtArgs> = {}>(args?: Subset<T, tags$posts_to_tagsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$posts_to_tagsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the tags model
   */
  interface tagsFieldRefs {
    readonly id: FieldRef<"tags", 'Int'>
    readonly name: FieldRef<"tags", 'String'>
    readonly created_at: FieldRef<"tags", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * tags findUnique
   */
  export type tagsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags findUniqueOrThrow
   */
  export type tagsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags findFirst
   */
  export type tagsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags findFirstOrThrow
   */
  export type tagsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags findMany
   */
  export type tagsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagsOrderByWithRelationInput | tagsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tags.
     */
    cursor?: tagsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    distinct?: TagsScalarFieldEnum | TagsScalarFieldEnum[]
  }

  /**
   * tags create
   */
  export type tagsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The data needed to create a tags.
     */
    data?: XOR<tagsCreateInput, tagsUncheckedCreateInput>
  }

  /**
   * tags createMany
   */
  export type tagsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tags.
     */
    data: tagsCreateManyInput | tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tags createManyAndReturn
   */
  export type tagsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * The data used to create many tags.
     */
    data: tagsCreateManyInput | tagsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tags update
   */
  export type tagsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The data needed to update a tags.
     */
    data: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
    /**
     * Choose, which tags to update.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags updateMany
   */
  export type tagsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tags.
     */
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
  }

  /**
   * tags updateManyAndReturn
   */
  export type tagsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * The data used to update tags.
     */
    data: XOR<tagsUpdateManyMutationInput, tagsUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
  }

  /**
   * tags upsert
   */
  export type tagsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * The filter to search for the tags to update in case it exists.
     */
    where: tagsWhereUniqueInput
    /**
     * In case the tags found by the `where` argument doesn't exist, create a new tags with this data.
     */
    create: XOR<tagsCreateInput, tagsUncheckedCreateInput>
    /**
     * In case the tags was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tagsUpdateInput, tagsUncheckedUpdateInput>
  }

  /**
   * tags delete
   */
  export type tagsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
    /**
     * Filter which tags to delete.
     */
    where: tagsWhereUniqueInput
  }

  /**
   * tags deleteMany
   */
  export type tagsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to delete
     */
    where?: tagsWhereInput
    /**
     * Limit how many tags to delete.
     */
    limit?: number
  }

  /**
   * tags.posts_to_tags
   */
  export type tags$posts_to_tagsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts_to_tags
     */
    select?: posts_to_tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts_to_tags
     */
    omit?: posts_to_tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: posts_to_tagsInclude<ExtArgs> | null
    where?: posts_to_tagsWhereInput
    orderBy?: posts_to_tagsOrderByWithRelationInput | posts_to_tagsOrderByWithRelationInput[]
    cursor?: posts_to_tagsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Posts_to_tagsScalarFieldEnum | Posts_to_tagsScalarFieldEnum[]
  }

  /**
   * tags without action
   */
  export type tagsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tags
     */
    select?: tagsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tags
     */
    omit?: tagsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagsInclude<ExtArgs> | null
  }


  /**
   * Model files
   */

  export type AggregateFiles = {
    _count: FilesCountAggregateOutputType | null
    _avg: FilesAvgAggregateOutputType | null
    _sum: FilesSumAggregateOutputType | null
    _min: FilesMinAggregateOutputType | null
    _max: FilesMaxAggregateOutputType | null
  }

  export type FilesAvgAggregateOutputType = {
    size: number | null
  }

  export type FilesSumAggregateOutputType = {
    size: number | null
  }

  export type FilesMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    name: string | null
    path: string | null
    size: number | null
    type: string | null
    created_by: string | null
  }

  export type FilesMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    name: string | null
    path: string | null
    size: number | null
    type: string | null
    created_by: string | null
  }

  export type FilesCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    deleted_at: number
    name: number
    path: number
    size: number
    type: number
    created_by: number
    _all: number
  }


  export type FilesAvgAggregateInputType = {
    size?: true
  }

  export type FilesSumAggregateInputType = {
    size?: true
  }

  export type FilesMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    name?: true
    path?: true
    size?: true
    type?: true
    created_by?: true
  }

  export type FilesMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    name?: true
    path?: true
    size?: true
    type?: true
    created_by?: true
  }

  export type FilesCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    name?: true
    path?: true
    size?: true
    type?: true
    created_by?: true
    _all?: true
  }

  export type FilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which files to aggregate.
     */
    where?: filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: filesOrderByWithRelationInput | filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned files
    **/
    _count?: true | FilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilesMaxAggregateInputType
  }

  export type GetFilesAggregateType<T extends FilesAggregateArgs> = {
        [P in keyof T & keyof AggregateFiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFiles[P]>
      : GetScalarType<T[P], AggregateFiles[P]>
  }




  export type filesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: filesWhereInput
    orderBy?: filesOrderByWithAggregationInput | filesOrderByWithAggregationInput[]
    by: FilesScalarFieldEnum[] | FilesScalarFieldEnum
    having?: filesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilesCountAggregateInputType | true
    _avg?: FilesAvgAggregateInputType
    _sum?: FilesSumAggregateInputType
    _min?: FilesMinAggregateInputType
    _max?: FilesMaxAggregateInputType
  }

  export type FilesGroupByOutputType = {
    id: string
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    name: string | null
    path: string | null
    size: number | null
    type: string | null
    created_by: string | null
    _count: FilesCountAggregateOutputType | null
    _avg: FilesAvgAggregateOutputType | null
    _sum: FilesSumAggregateOutputType | null
    _min: FilesMinAggregateOutputType | null
    _max: FilesMaxAggregateOutputType | null
  }

  type GetFilesGroupByPayload<T extends filesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilesGroupByOutputType[P]>
            : GetScalarType<T[P], FilesGroupByOutputType[P]>
        }
      >
    >


  export type filesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    name?: boolean
    path?: boolean
    size?: boolean
    type?: boolean
    created_by?: boolean
    users?: boolean | files$usersArgs<ExtArgs>
  }, ExtArgs["result"]["files"]>

  export type filesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    name?: boolean
    path?: boolean
    size?: boolean
    type?: boolean
    created_by?: boolean
    users?: boolean | files$usersArgs<ExtArgs>
  }, ExtArgs["result"]["files"]>

  export type filesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    name?: boolean
    path?: boolean
    size?: boolean
    type?: boolean
    created_by?: boolean
    users?: boolean | files$usersArgs<ExtArgs>
  }, ExtArgs["result"]["files"]>

  export type filesSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    name?: boolean
    path?: boolean
    size?: boolean
    type?: boolean
    created_by?: boolean
  }

  export type filesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "updated_at" | "deleted_at" | "name" | "path" | "size" | "type" | "created_by", ExtArgs["result"]["files"]>
  export type filesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | files$usersArgs<ExtArgs>
  }
  export type filesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | files$usersArgs<ExtArgs>
  }
  export type filesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | files$usersArgs<ExtArgs>
  }

  export type $filesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "files"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
      name: string | null
      path: string | null
      size: number | null
      type: string | null
      created_by: string | null
    }, ExtArgs["result"]["files"]>
    composites: {}
  }

  type filesGetPayload<S extends boolean | null | undefined | filesDefaultArgs> = $Result.GetResult<Prisma.$filesPayload, S>

  type filesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<filesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilesCountAggregateInputType | true
    }

  export interface filesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['files'], meta: { name: 'files' } }
    /**
     * Find zero or one Files that matches the filter.
     * @param {filesFindUniqueArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends filesFindUniqueArgs>(args: SelectSubset<T, filesFindUniqueArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Files that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {filesFindUniqueOrThrowArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends filesFindUniqueOrThrowArgs>(args: SelectSubset<T, filesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filesFindFirstArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends filesFindFirstArgs>(args?: SelectSubset<T, filesFindFirstArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Files that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filesFindFirstOrThrowArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends filesFindFirstOrThrowArgs>(args?: SelectSubset<T, filesFindFirstOrThrowArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.files.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.files.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filesWithIdOnly = await prisma.files.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends filesFindManyArgs>(args?: SelectSubset<T, filesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Files.
     * @param {filesCreateArgs} args - Arguments to create a Files.
     * @example
     * // Create one Files
     * const Files = await prisma.files.create({
     *   data: {
     *     // ... data to create a Files
     *   }
     * })
     * 
     */
    create<T extends filesCreateArgs>(args: SelectSubset<T, filesCreateArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Files.
     * @param {filesCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const files = await prisma.files.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends filesCreateManyArgs>(args?: SelectSubset<T, filesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Files and returns the data saved in the database.
     * @param {filesCreateManyAndReturnArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const files = await prisma.files.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Files and only return the `id`
     * const filesWithIdOnly = await prisma.files.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends filesCreateManyAndReturnArgs>(args?: SelectSubset<T, filesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Files.
     * @param {filesDeleteArgs} args - Arguments to delete one Files.
     * @example
     * // Delete one Files
     * const Files = await prisma.files.delete({
     *   where: {
     *     // ... filter to delete one Files
     *   }
     * })
     * 
     */
    delete<T extends filesDeleteArgs>(args: SelectSubset<T, filesDeleteArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Files.
     * @param {filesUpdateArgs} args - Arguments to update one Files.
     * @example
     * // Update one Files
     * const files = await prisma.files.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends filesUpdateArgs>(args: SelectSubset<T, filesUpdateArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Files.
     * @param {filesDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.files.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends filesDeleteManyArgs>(args?: SelectSubset<T, filesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const files = await prisma.files.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends filesUpdateManyArgs>(args: SelectSubset<T, filesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files and returns the data updated in the database.
     * @param {filesUpdateManyAndReturnArgs} args - Arguments to update many Files.
     * @example
     * // Update many Files
     * const files = await prisma.files.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Files and only return the `id`
     * const filesWithIdOnly = await prisma.files.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends filesUpdateManyAndReturnArgs>(args: SelectSubset<T, filesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Files.
     * @param {filesUpsertArgs} args - Arguments to update or create a Files.
     * @example
     * // Update or create a Files
     * const files = await prisma.files.upsert({
     *   create: {
     *     // ... data to create a Files
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Files we want to update
     *   }
     * })
     */
    upsert<T extends filesUpsertArgs>(args: SelectSubset<T, filesUpsertArgs<ExtArgs>>): Prisma__filesClient<$Result.GetResult<Prisma.$filesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filesCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.files.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends filesCountArgs>(
      args?: Subset<T, filesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FilesAggregateArgs>(args: Subset<T, FilesAggregateArgs>): Prisma.PrismaPromise<GetFilesAggregateType<T>>

    /**
     * Group by Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {filesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends filesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: filesGroupByArgs['orderBy'] }
        : { orderBy?: filesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, filesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the files model
   */
  readonly fields: filesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for files.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__filesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends files$usersArgs<ExtArgs> = {}>(args?: Subset<T, files$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the files model
   */
  interface filesFieldRefs {
    readonly id: FieldRef<"files", 'String'>
    readonly created_at: FieldRef<"files", 'DateTime'>
    readonly updated_at: FieldRef<"files", 'DateTime'>
    readonly deleted_at: FieldRef<"files", 'DateTime'>
    readonly name: FieldRef<"files", 'String'>
    readonly path: FieldRef<"files", 'String'>
    readonly size: FieldRef<"files", 'Int'>
    readonly type: FieldRef<"files", 'String'>
    readonly created_by: FieldRef<"files", 'String'>
  }
    

  // Custom InputTypes
  /**
   * files findUnique
   */
  export type filesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * Filter, which files to fetch.
     */
    where: filesWhereUniqueInput
  }

  /**
   * files findUniqueOrThrow
   */
  export type filesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * Filter, which files to fetch.
     */
    where: filesWhereUniqueInput
  }

  /**
   * files findFirst
   */
  export type filesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * Filter, which files to fetch.
     */
    where?: filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: filesOrderByWithRelationInput | filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for files.
     */
    cursor?: filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of files.
     */
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * files findFirstOrThrow
   */
  export type filesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * Filter, which files to fetch.
     */
    where?: filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: filesOrderByWithRelationInput | filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for files.
     */
    cursor?: filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of files.
     */
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * files findMany
   */
  export type filesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * Filter, which files to fetch.
     */
    where?: filesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of files to fetch.
     */
    orderBy?: filesOrderByWithRelationInput | filesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing files.
     */
    cursor?: filesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` files.
     */
    skip?: number
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * files create
   */
  export type filesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * The data needed to create a files.
     */
    data?: XOR<filesCreateInput, filesUncheckedCreateInput>
  }

  /**
   * files createMany
   */
  export type filesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many files.
     */
    data: filesCreateManyInput | filesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * files createManyAndReturn
   */
  export type filesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * The data used to create many files.
     */
    data: filesCreateManyInput | filesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * files update
   */
  export type filesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * The data needed to update a files.
     */
    data: XOR<filesUpdateInput, filesUncheckedUpdateInput>
    /**
     * Choose, which files to update.
     */
    where: filesWhereUniqueInput
  }

  /**
   * files updateMany
   */
  export type filesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update files.
     */
    data: XOR<filesUpdateManyMutationInput, filesUncheckedUpdateManyInput>
    /**
     * Filter which files to update
     */
    where?: filesWhereInput
    /**
     * Limit how many files to update.
     */
    limit?: number
  }

  /**
   * files updateManyAndReturn
   */
  export type filesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * The data used to update files.
     */
    data: XOR<filesUpdateManyMutationInput, filesUncheckedUpdateManyInput>
    /**
     * Filter which files to update
     */
    where?: filesWhereInput
    /**
     * Limit how many files to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * files upsert
   */
  export type filesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * The filter to search for the files to update in case it exists.
     */
    where: filesWhereUniqueInput
    /**
     * In case the files found by the `where` argument doesn't exist, create a new files with this data.
     */
    create: XOR<filesCreateInput, filesUncheckedCreateInput>
    /**
     * In case the files was found with the provided `where` argument, update it with this data.
     */
    update: XOR<filesUpdateInput, filesUncheckedUpdateInput>
  }

  /**
   * files delete
   */
  export type filesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
    /**
     * Filter which files to delete.
     */
    where: filesWhereUniqueInput
  }

  /**
   * files deleteMany
   */
  export type filesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which files to delete
     */
    where?: filesWhereInput
    /**
     * Limit how many files to delete.
     */
    limit?: number
  }

  /**
   * files.users
   */
  export type files$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * files without action
   */
  export type filesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the files
     */
    select?: filesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the files
     */
    omit?: filesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: filesInclude<ExtArgs> | null
  }


  /**
   * Model likes
   */

  export type AggregateLikes = {
    _count: LikesCountAggregateOutputType | null
    _avg: LikesAvgAggregateOutputType | null
    _sum: LikesSumAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  export type LikesAvgAggregateOutputType = {
    id: number | null
  }

  export type LikesSumAggregateOutputType = {
    id: number | null
  }

  export type LikesMinAggregateOutputType = {
    id: number | null
    created_at: Date | null
    post_id: string | null
    created_by: string | null
  }

  export type LikesMaxAggregateOutputType = {
    id: number | null
    created_at: Date | null
    post_id: string | null
    created_by: string | null
  }

  export type LikesCountAggregateOutputType = {
    id: number
    created_at: number
    post_id: number
    created_by: number
    _all: number
  }


  export type LikesAvgAggregateInputType = {
    id?: true
  }

  export type LikesSumAggregateInputType = {
    id?: true
  }

  export type LikesMinAggregateInputType = {
    id?: true
    created_at?: true
    post_id?: true
    created_by?: true
  }

  export type LikesMaxAggregateInputType = {
    id?: true
    created_at?: true
    post_id?: true
    created_by?: true
  }

  export type LikesCountAggregateInputType = {
    id?: true
    created_at?: true
    post_id?: true
    created_by?: true
    _all?: true
  }

  export type LikesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which likes to aggregate.
     */
    where?: likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned likes
    **/
    _count?: true | LikesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikesMaxAggregateInputType
  }

  export type GetLikesAggregateType<T extends LikesAggregateArgs> = {
        [P in keyof T & keyof AggregateLikes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikes[P]>
      : GetScalarType<T[P], AggregateLikes[P]>
  }




  export type likesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: likesWhereInput
    orderBy?: likesOrderByWithAggregationInput | likesOrderByWithAggregationInput[]
    by: LikesScalarFieldEnum[] | LikesScalarFieldEnum
    having?: likesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikesCountAggregateInputType | true
    _avg?: LikesAvgAggregateInputType
    _sum?: LikesSumAggregateInputType
    _min?: LikesMinAggregateInputType
    _max?: LikesMaxAggregateInputType
  }

  export type LikesGroupByOutputType = {
    id: number
    created_at: Date | null
    post_id: string | null
    created_by: string | null
    _count: LikesCountAggregateOutputType | null
    _avg: LikesAvgAggregateOutputType | null
    _sum: LikesSumAggregateOutputType | null
    _min: LikesMinAggregateOutputType | null
    _max: LikesMaxAggregateOutputType | null
  }

  type GetLikesGroupByPayload<T extends likesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikesGroupByOutputType[P]>
            : GetScalarType<T[P], LikesGroupByOutputType[P]>
        }
      >
    >


  export type likesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    post_id?: boolean
    created_by?: boolean
    users?: boolean | likes$usersArgs<ExtArgs>
    posts?: boolean | likes$postsArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type likesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    post_id?: boolean
    created_by?: boolean
    users?: boolean | likes$usersArgs<ExtArgs>
    posts?: boolean | likes$postsArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type likesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    post_id?: boolean
    created_by?: boolean
    users?: boolean | likes$usersArgs<ExtArgs>
    posts?: boolean | likes$postsArgs<ExtArgs>
  }, ExtArgs["result"]["likes"]>

  export type likesSelectScalar = {
    id?: boolean
    created_at?: boolean
    post_id?: boolean
    created_by?: boolean
  }

  export type likesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "post_id" | "created_by", ExtArgs["result"]["likes"]>
  export type likesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | likes$usersArgs<ExtArgs>
    posts?: boolean | likes$postsArgs<ExtArgs>
  }
  export type likesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | likes$usersArgs<ExtArgs>
    posts?: boolean | likes$postsArgs<ExtArgs>
  }
  export type likesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | likes$usersArgs<ExtArgs>
    posts?: boolean | likes$postsArgs<ExtArgs>
  }

  export type $likesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "likes"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
      posts: Prisma.$postsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      created_at: Date | null
      post_id: string | null
      created_by: string | null
    }, ExtArgs["result"]["likes"]>
    composites: {}
  }

  type likesGetPayload<S extends boolean | null | undefined | likesDefaultArgs> = $Result.GetResult<Prisma.$likesPayload, S>

  type likesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<likesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LikesCountAggregateInputType | true
    }

  export interface likesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['likes'], meta: { name: 'likes' } }
    /**
     * Find zero or one Likes that matches the filter.
     * @param {likesFindUniqueArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends likesFindUniqueArgs>(args: SelectSubset<T, likesFindUniqueArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Likes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {likesFindUniqueOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends likesFindUniqueOrThrowArgs>(args: SelectSubset<T, likesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesFindFirstArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends likesFindFirstArgs>(args?: SelectSubset<T, likesFindFirstArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Likes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesFindFirstOrThrowArgs} args - Arguments to find a Likes
     * @example
     * // Get one Likes
     * const likes = await prisma.likes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends likesFindFirstOrThrowArgs>(args?: SelectSubset<T, likesFindFirstOrThrowArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Likes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Likes
     * const likes = await prisma.likes.findMany()
     * 
     * // Get first 10 Likes
     * const likes = await prisma.likes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likesWithIdOnly = await prisma.likes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends likesFindManyArgs>(args?: SelectSubset<T, likesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Likes.
     * @param {likesCreateArgs} args - Arguments to create a Likes.
     * @example
     * // Create one Likes
     * const Likes = await prisma.likes.create({
     *   data: {
     *     // ... data to create a Likes
     *   }
     * })
     * 
     */
    create<T extends likesCreateArgs>(args: SelectSubset<T, likesCreateArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Likes.
     * @param {likesCreateManyArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const likes = await prisma.likes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends likesCreateManyArgs>(args?: SelectSubset<T, likesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Likes and returns the data saved in the database.
     * @param {likesCreateManyAndReturnArgs} args - Arguments to create many Likes.
     * @example
     * // Create many Likes
     * const likes = await prisma.likes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Likes and only return the `id`
     * const likesWithIdOnly = await prisma.likes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends likesCreateManyAndReturnArgs>(args?: SelectSubset<T, likesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Likes.
     * @param {likesDeleteArgs} args - Arguments to delete one Likes.
     * @example
     * // Delete one Likes
     * const Likes = await prisma.likes.delete({
     *   where: {
     *     // ... filter to delete one Likes
     *   }
     * })
     * 
     */
    delete<T extends likesDeleteArgs>(args: SelectSubset<T, likesDeleteArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Likes.
     * @param {likesUpdateArgs} args - Arguments to update one Likes.
     * @example
     * // Update one Likes
     * const likes = await prisma.likes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends likesUpdateArgs>(args: SelectSubset<T, likesUpdateArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Likes.
     * @param {likesDeleteManyArgs} args - Arguments to filter Likes to delete.
     * @example
     * // Delete a few Likes
     * const { count } = await prisma.likes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends likesDeleteManyArgs>(args?: SelectSubset<T, likesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Likes
     * const likes = await prisma.likes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends likesUpdateManyArgs>(args: SelectSubset<T, likesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Likes and returns the data updated in the database.
     * @param {likesUpdateManyAndReturnArgs} args - Arguments to update many Likes.
     * @example
     * // Update many Likes
     * const likes = await prisma.likes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Likes and only return the `id`
     * const likesWithIdOnly = await prisma.likes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends likesUpdateManyAndReturnArgs>(args: SelectSubset<T, likesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Likes.
     * @param {likesUpsertArgs} args - Arguments to update or create a Likes.
     * @example
     * // Update or create a Likes
     * const likes = await prisma.likes.upsert({
     *   create: {
     *     // ... data to create a Likes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Likes we want to update
     *   }
     * })
     */
    upsert<T extends likesUpsertArgs>(args: SelectSubset<T, likesUpsertArgs<ExtArgs>>): Prisma__likesClient<$Result.GetResult<Prisma.$likesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesCountArgs} args - Arguments to filter Likes to count.
     * @example
     * // Count the number of Likes
     * const count = await prisma.likes.count({
     *   where: {
     *     // ... the filter for the Likes we want to count
     *   }
     * })
    **/
    count<T extends likesCountArgs>(
      args?: Subset<T, likesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends LikesAggregateArgs>(args: Subset<T, LikesAggregateArgs>): Prisma.PrismaPromise<GetLikesAggregateType<T>>

    /**
     * Group by Likes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {likesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends likesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: likesGroupByArgs['orderBy'] }
        : { orderBy?: likesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, likesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the likes model
   */
  readonly fields: likesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for likes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__likesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends likes$usersArgs<ExtArgs> = {}>(args?: Subset<T, likes$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    posts<T extends likes$postsArgs<ExtArgs> = {}>(args?: Subset<T, likes$postsArgs<ExtArgs>>): Prisma__postsClient<$Result.GetResult<Prisma.$postsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the likes model
   */
  interface likesFieldRefs {
    readonly id: FieldRef<"likes", 'Int'>
    readonly created_at: FieldRef<"likes", 'DateTime'>
    readonly post_id: FieldRef<"likes", 'String'>
    readonly created_by: FieldRef<"likes", 'String'>
  }
    

  // Custom InputTypes
  /**
   * likes findUnique
   */
  export type likesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where: likesWhereUniqueInput
  }

  /**
   * likes findUniqueOrThrow
   */
  export type likesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where: likesWhereUniqueInput
  }

  /**
   * likes findFirst
   */
  export type likesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where?: likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for likes.
     */
    cursor?: likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * likes findFirstOrThrow
   */
  export type likesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where?: likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for likes.
     */
    cursor?: likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of likes.
     */
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * likes findMany
   */
  export type likesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter, which likes to fetch.
     */
    where?: likesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of likes to fetch.
     */
    orderBy?: likesOrderByWithRelationInput | likesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing likes.
     */
    cursor?: likesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` likes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` likes.
     */
    skip?: number
    distinct?: LikesScalarFieldEnum | LikesScalarFieldEnum[]
  }

  /**
   * likes create
   */
  export type likesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * The data needed to create a likes.
     */
    data?: XOR<likesCreateInput, likesUncheckedCreateInput>
  }

  /**
   * likes createMany
   */
  export type likesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many likes.
     */
    data: likesCreateManyInput | likesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * likes createManyAndReturn
   */
  export type likesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * The data used to create many likes.
     */
    data: likesCreateManyInput | likesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * likes update
   */
  export type likesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * The data needed to update a likes.
     */
    data: XOR<likesUpdateInput, likesUncheckedUpdateInput>
    /**
     * Choose, which likes to update.
     */
    where: likesWhereUniqueInput
  }

  /**
   * likes updateMany
   */
  export type likesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update likes.
     */
    data: XOR<likesUpdateManyMutationInput, likesUncheckedUpdateManyInput>
    /**
     * Filter which likes to update
     */
    where?: likesWhereInput
    /**
     * Limit how many likes to update.
     */
    limit?: number
  }

  /**
   * likes updateManyAndReturn
   */
  export type likesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * The data used to update likes.
     */
    data: XOR<likesUpdateManyMutationInput, likesUncheckedUpdateManyInput>
    /**
     * Filter which likes to update
     */
    where?: likesWhereInput
    /**
     * Limit how many likes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * likes upsert
   */
  export type likesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * The filter to search for the likes to update in case it exists.
     */
    where: likesWhereUniqueInput
    /**
     * In case the likes found by the `where` argument doesn't exist, create a new likes with this data.
     */
    create: XOR<likesCreateInput, likesUncheckedCreateInput>
    /**
     * In case the likes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<likesUpdateInput, likesUncheckedUpdateInput>
  }

  /**
   * likes delete
   */
  export type likesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
    /**
     * Filter which likes to delete.
     */
    where: likesWhereUniqueInput
  }

  /**
   * likes deleteMany
   */
  export type likesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which likes to delete
     */
    where?: likesWhereInput
    /**
     * Limit how many likes to delete.
     */
    limit?: number
  }

  /**
   * likes.users
   */
  export type likes$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * likes.posts
   */
  export type likes$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the posts
     */
    select?: postsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the posts
     */
    omit?: postsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postsInclude<ExtArgs> | null
    where?: postsWhereInput
  }

  /**
   * likes without action
   */
  export type likesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the likes
     */
    select?: likesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the likes
     */
    omit?: likesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: likesInclude<ExtArgs> | null
  }


  /**
   * Model profiles
   */

  export type AggregateProfiles = {
    _count: ProfilesCountAggregateOutputType | null
    _avg: ProfilesAvgAggregateOutputType | null
    _sum: ProfilesSumAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  export type ProfilesAvgAggregateOutputType = {
    id: number | null
  }

  export type ProfilesSumAggregateOutputType = {
    id: number | null
  }

  export type ProfilesMinAggregateOutputType = {
    id: number | null
    user_id: string | null
    created_at: Date | null
    updated_at: Date | null
    bio: string | null
    website: string | null
    phone: string | null
    location: string | null
  }

  export type ProfilesMaxAggregateOutputType = {
    id: number | null
    user_id: string | null
    created_at: Date | null
    updated_at: Date | null
    bio: string | null
    website: string | null
    phone: string | null
    location: string | null
  }

  export type ProfilesCountAggregateOutputType = {
    id: number
    user_id: number
    created_at: number
    updated_at: number
    bio: number
    website: number
    phone: number
    location: number
    _all: number
  }


  export type ProfilesAvgAggregateInputType = {
    id?: true
  }

  export type ProfilesSumAggregateInputType = {
    id?: true
  }

  export type ProfilesMinAggregateInputType = {
    id?: true
    user_id?: true
    created_at?: true
    updated_at?: true
    bio?: true
    website?: true
    phone?: true
    location?: true
  }

  export type ProfilesMaxAggregateInputType = {
    id?: true
    user_id?: true
    created_at?: true
    updated_at?: true
    bio?: true
    website?: true
    phone?: true
    location?: true
  }

  export type ProfilesCountAggregateInputType = {
    id?: true
    user_id?: true
    created_at?: true
    updated_at?: true
    bio?: true
    website?: true
    phone?: true
    location?: true
    _all?: true
  }

  export type ProfilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profiles to aggregate.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned profiles
    **/
    _count?: true | ProfilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProfilesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProfilesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfilesMaxAggregateInputType
  }

  export type GetProfilesAggregateType<T extends ProfilesAggregateArgs> = {
        [P in keyof T & keyof AggregateProfiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfiles[P]>
      : GetScalarType<T[P], AggregateProfiles[P]>
  }




  export type profilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: profilesWhereInput
    orderBy?: profilesOrderByWithAggregationInput | profilesOrderByWithAggregationInput[]
    by: ProfilesScalarFieldEnum[] | ProfilesScalarFieldEnum
    having?: profilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfilesCountAggregateInputType | true
    _avg?: ProfilesAvgAggregateInputType
    _sum?: ProfilesSumAggregateInputType
    _min?: ProfilesMinAggregateInputType
    _max?: ProfilesMaxAggregateInputType
  }

  export type ProfilesGroupByOutputType = {
    id: number
    user_id: string
    created_at: Date | null
    updated_at: Date | null
    bio: string | null
    website: string | null
    phone: string | null
    location: string | null
    _count: ProfilesCountAggregateOutputType | null
    _avg: ProfilesAvgAggregateOutputType | null
    _sum: ProfilesSumAggregateOutputType | null
    _min: ProfilesMinAggregateOutputType | null
    _max: ProfilesMaxAggregateOutputType | null
  }

  type GetProfilesGroupByPayload<T extends profilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
            : GetScalarType<T[P], ProfilesGroupByOutputType[P]>
        }
      >
    >


  export type profilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    bio?: boolean
    website?: boolean
    phone?: boolean
    location?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profiles"]>

  export type profilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    bio?: boolean
    website?: boolean
    phone?: boolean
    location?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profiles"]>

  export type profilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    bio?: boolean
    website?: boolean
    phone?: boolean
    location?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profiles"]>

  export type profilesSelectScalar = {
    id?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    bio?: boolean
    website?: boolean
    phone?: boolean
    location?: boolean
  }

  export type profilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "created_at" | "updated_at" | "bio" | "website" | "phone" | "location", ExtArgs["result"]["profiles"]>
  export type profilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type profilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type profilesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $profilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "profiles"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: string
      created_at: Date | null
      updated_at: Date | null
      bio: string | null
      website: string | null
      phone: string | null
      location: string | null
    }, ExtArgs["result"]["profiles"]>
    composites: {}
  }

  type profilesGetPayload<S extends boolean | null | undefined | profilesDefaultArgs> = $Result.GetResult<Prisma.$profilesPayload, S>

  type profilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<profilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfilesCountAggregateInputType | true
    }

  export interface profilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['profiles'], meta: { name: 'profiles' } }
    /**
     * Find zero or one Profiles that matches the filter.
     * @param {profilesFindUniqueArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends profilesFindUniqueArgs>(args: SelectSubset<T, profilesFindUniqueArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profiles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {profilesFindUniqueOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends profilesFindUniqueOrThrowArgs>(args: SelectSubset<T, profilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesFindFirstArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends profilesFindFirstArgs>(args?: SelectSubset<T, profilesFindFirstArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profiles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesFindFirstOrThrowArgs} args - Arguments to find a Profiles
     * @example
     * // Get one Profiles
     * const profiles = await prisma.profiles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends profilesFindFirstOrThrowArgs>(args?: SelectSubset<T, profilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profiles.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profiles.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profilesWithIdOnly = await prisma.profiles.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends profilesFindManyArgs>(args?: SelectSubset<T, profilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profiles.
     * @param {profilesCreateArgs} args - Arguments to create a Profiles.
     * @example
     * // Create one Profiles
     * const Profiles = await prisma.profiles.create({
     *   data: {
     *     // ... data to create a Profiles
     *   }
     * })
     * 
     */
    create<T extends profilesCreateArgs>(args: SelectSubset<T, profilesCreateArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {profilesCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profiles = await prisma.profiles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends profilesCreateManyArgs>(args?: SelectSubset<T, profilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {profilesCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profiles = await prisma.profiles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profilesWithIdOnly = await prisma.profiles.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends profilesCreateManyAndReturnArgs>(args?: SelectSubset<T, profilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profiles.
     * @param {profilesDeleteArgs} args - Arguments to delete one Profiles.
     * @example
     * // Delete one Profiles
     * const Profiles = await prisma.profiles.delete({
     *   where: {
     *     // ... filter to delete one Profiles
     *   }
     * })
     * 
     */
    delete<T extends profilesDeleteArgs>(args: SelectSubset<T, profilesDeleteArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profiles.
     * @param {profilesUpdateArgs} args - Arguments to update one Profiles.
     * @example
     * // Update one Profiles
     * const profiles = await prisma.profiles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends profilesUpdateArgs>(args: SelectSubset<T, profilesUpdateArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {profilesDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profiles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends profilesDeleteManyArgs>(args?: SelectSubset<T, profilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profiles = await prisma.profiles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends profilesUpdateManyArgs>(args: SelectSubset<T, profilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {profilesUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profiles = await prisma.profiles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profilesWithIdOnly = await prisma.profiles.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends profilesUpdateManyAndReturnArgs>(args: SelectSubset<T, profilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profiles.
     * @param {profilesUpsertArgs} args - Arguments to update or create a Profiles.
     * @example
     * // Update or create a Profiles
     * const profiles = await prisma.profiles.upsert({
     *   create: {
     *     // ... data to create a Profiles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profiles we want to update
     *   }
     * })
     */
    upsert<T extends profilesUpsertArgs>(args: SelectSubset<T, profilesUpsertArgs<ExtArgs>>): Prisma__profilesClient<$Result.GetResult<Prisma.$profilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profiles.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends profilesCountArgs>(
      args?: Subset<T, profilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfilesAggregateArgs>(args: Subset<T, ProfilesAggregateArgs>): Prisma.PrismaPromise<GetProfilesAggregateType<T>>

    /**
     * Group by Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {profilesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends profilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: profilesGroupByArgs['orderBy'] }
        : { orderBy?: profilesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, profilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the profiles model
   */
  readonly fields: profilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for profiles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__profilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the profiles model
   */
  interface profilesFieldRefs {
    readonly id: FieldRef<"profiles", 'Int'>
    readonly user_id: FieldRef<"profiles", 'String'>
    readonly created_at: FieldRef<"profiles", 'DateTime'>
    readonly updated_at: FieldRef<"profiles", 'DateTime'>
    readonly bio: FieldRef<"profiles", 'String'>
    readonly website: FieldRef<"profiles", 'String'>
    readonly phone: FieldRef<"profiles", 'String'>
    readonly location: FieldRef<"profiles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * profiles findUnique
   */
  export type profilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles findUniqueOrThrow
   */
  export type profilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles findFirst
   */
  export type profilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     */
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * profiles findFirstOrThrow
   */
  export type profilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for profiles.
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of profiles.
     */
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * profiles findMany
   */
  export type profilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter, which profiles to fetch.
     */
    where?: profilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of profiles to fetch.
     */
    orderBy?: profilesOrderByWithRelationInput | profilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing profiles.
     */
    cursor?: profilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` profiles.
     */
    skip?: number
    distinct?: ProfilesScalarFieldEnum | ProfilesScalarFieldEnum[]
  }

  /**
   * profiles create
   */
  export type profilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * The data needed to create a profiles.
     */
    data: XOR<profilesCreateInput, profilesUncheckedCreateInput>
  }

  /**
   * profiles createMany
   */
  export type profilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many profiles.
     */
    data: profilesCreateManyInput | profilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * profiles createManyAndReturn
   */
  export type profilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * The data used to create many profiles.
     */
    data: profilesCreateManyInput | profilesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * profiles update
   */
  export type profilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * The data needed to update a profiles.
     */
    data: XOR<profilesUpdateInput, profilesUncheckedUpdateInput>
    /**
     * Choose, which profiles to update.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles updateMany
   */
  export type profilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update profiles.
     */
    data: XOR<profilesUpdateManyMutationInput, profilesUncheckedUpdateManyInput>
    /**
     * Filter which profiles to update
     */
    where?: profilesWhereInput
    /**
     * Limit how many profiles to update.
     */
    limit?: number
  }

  /**
   * profiles updateManyAndReturn
   */
  export type profilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * The data used to update profiles.
     */
    data: XOR<profilesUpdateManyMutationInput, profilesUncheckedUpdateManyInput>
    /**
     * Filter which profiles to update
     */
    where?: profilesWhereInput
    /**
     * Limit how many profiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * profiles upsert
   */
  export type profilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * The filter to search for the profiles to update in case it exists.
     */
    where: profilesWhereUniqueInput
    /**
     * In case the profiles found by the `where` argument doesn't exist, create a new profiles with this data.
     */
    create: XOR<profilesCreateInput, profilesUncheckedCreateInput>
    /**
     * In case the profiles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<profilesUpdateInput, profilesUncheckedUpdateInput>
  }

  /**
   * profiles delete
   */
  export type profilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
    /**
     * Filter which profiles to delete.
     */
    where: profilesWhereUniqueInput
  }

  /**
   * profiles deleteMany
   */
  export type profilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which profiles to delete
     */
    where?: profilesWhereInput
    /**
     * Limit how many profiles to delete.
     */
    limit?: number
  }

  /**
   * profiles without action
   */
  export type profilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the profiles
     */
    select?: profilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the profiles
     */
    omit?: profilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: profilesInclude<ExtArgs> | null
  }


  /**
   * Model workspaces
   */

  export type AggregateWorkspaces = {
    _count: WorkspacesCountAggregateOutputType | null
    _min: WorkspacesMinAggregateOutputType | null
    _max: WorkspacesMaxAggregateOutputType | null
  }

  export type WorkspacesMinAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    name: string | null
  }

  export type WorkspacesMaxAggregateOutputType = {
    id: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    name: string | null
  }

  export type WorkspacesCountAggregateOutputType = {
    id: number
    created_at: number
    updated_at: number
    deleted_at: number
    name: number
    _all: number
  }


  export type WorkspacesMinAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    name?: true
  }

  export type WorkspacesMaxAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    name?: true
  }

  export type WorkspacesCountAggregateInputType = {
    id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    name?: true
    _all?: true
  }

  export type WorkspacesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workspaces to aggregate.
     */
    where?: workspacesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspaces to fetch.
     */
    orderBy?: workspacesOrderByWithRelationInput | workspacesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workspacesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned workspaces
    **/
    _count?: true | WorkspacesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspacesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspacesMaxAggregateInputType
  }

  export type GetWorkspacesAggregateType<T extends WorkspacesAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspaces]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspaces[P]>
      : GetScalarType<T[P], AggregateWorkspaces[P]>
  }




  export type workspacesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspacesWhereInput
    orderBy?: workspacesOrderByWithAggregationInput | workspacesOrderByWithAggregationInput[]
    by: WorkspacesScalarFieldEnum[] | WorkspacesScalarFieldEnum
    having?: workspacesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspacesCountAggregateInputType | true
    _min?: WorkspacesMinAggregateInputType
    _max?: WorkspacesMaxAggregateInputType
  }

  export type WorkspacesGroupByOutputType = {
    id: string
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    name: string | null
    _count: WorkspacesCountAggregateOutputType | null
    _min: WorkspacesMinAggregateOutputType | null
    _max: WorkspacesMaxAggregateOutputType | null
  }

  type GetWorkspacesGroupByPayload<T extends workspacesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkspacesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspacesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspacesGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspacesGroupByOutputType[P]>
        }
      >
    >


  export type workspacesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    name?: boolean
    users?: boolean | workspaces$usersArgs<ExtArgs>
    workspace_users?: boolean | workspaces$workspace_usersArgs<ExtArgs>
    _count?: boolean | WorkspacesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspaces"]>

  export type workspacesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    name?: boolean
  }, ExtArgs["result"]["workspaces"]>

  export type workspacesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    name?: boolean
  }, ExtArgs["result"]["workspaces"]>

  export type workspacesSelectScalar = {
    id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    name?: boolean
  }

  export type workspacesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "created_at" | "updated_at" | "deleted_at" | "name", ExtArgs["result"]["workspaces"]>
  export type workspacesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | workspaces$usersArgs<ExtArgs>
    workspace_users?: boolean | workspaces$workspace_usersArgs<ExtArgs>
    _count?: boolean | WorkspacesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type workspacesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type workspacesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $workspacesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "workspaces"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>[]
      workspace_users: Prisma.$workspace_usersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
      name: string | null
    }, ExtArgs["result"]["workspaces"]>
    composites: {}
  }

  type workspacesGetPayload<S extends boolean | null | undefined | workspacesDefaultArgs> = $Result.GetResult<Prisma.$workspacesPayload, S>

  type workspacesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<workspacesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkspacesCountAggregateInputType | true
    }

  export interface workspacesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['workspaces'], meta: { name: 'workspaces' } }
    /**
     * Find zero or one Workspaces that matches the filter.
     * @param {workspacesFindUniqueArgs} args - Arguments to find a Workspaces
     * @example
     * // Get one Workspaces
     * const workspaces = await prisma.workspaces.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends workspacesFindUniqueArgs>(args: SelectSubset<T, workspacesFindUniqueArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workspaces that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {workspacesFindUniqueOrThrowArgs} args - Arguments to find a Workspaces
     * @example
     * // Get one Workspaces
     * const workspaces = await prisma.workspaces.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends workspacesFindUniqueOrThrowArgs>(args: SelectSubset<T, workspacesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacesFindFirstArgs} args - Arguments to find a Workspaces
     * @example
     * // Get one Workspaces
     * const workspaces = await prisma.workspaces.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends workspacesFindFirstArgs>(args?: SelectSubset<T, workspacesFindFirstArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspaces that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacesFindFirstOrThrowArgs} args - Arguments to find a Workspaces
     * @example
     * // Get one Workspaces
     * const workspaces = await prisma.workspaces.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends workspacesFindFirstOrThrowArgs>(args?: SelectSubset<T, workspacesFindFirstOrThrowArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workspaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workspaces
     * const workspaces = await prisma.workspaces.findMany()
     * 
     * // Get first 10 Workspaces
     * const workspaces = await prisma.workspaces.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workspacesWithIdOnly = await prisma.workspaces.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends workspacesFindManyArgs>(args?: SelectSubset<T, workspacesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workspaces.
     * @param {workspacesCreateArgs} args - Arguments to create a Workspaces.
     * @example
     * // Create one Workspaces
     * const Workspaces = await prisma.workspaces.create({
     *   data: {
     *     // ... data to create a Workspaces
     *   }
     * })
     * 
     */
    create<T extends workspacesCreateArgs>(args: SelectSubset<T, workspacesCreateArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workspaces.
     * @param {workspacesCreateManyArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspaces = await prisma.workspaces.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends workspacesCreateManyArgs>(args?: SelectSubset<T, workspacesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workspaces and returns the data saved in the database.
     * @param {workspacesCreateManyAndReturnArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspaces = await prisma.workspaces.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workspaces and only return the `id`
     * const workspacesWithIdOnly = await prisma.workspaces.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends workspacesCreateManyAndReturnArgs>(args?: SelectSubset<T, workspacesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workspaces.
     * @param {workspacesDeleteArgs} args - Arguments to delete one Workspaces.
     * @example
     * // Delete one Workspaces
     * const Workspaces = await prisma.workspaces.delete({
     *   where: {
     *     // ... filter to delete one Workspaces
     *   }
     * })
     * 
     */
    delete<T extends workspacesDeleteArgs>(args: SelectSubset<T, workspacesDeleteArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workspaces.
     * @param {workspacesUpdateArgs} args - Arguments to update one Workspaces.
     * @example
     * // Update one Workspaces
     * const workspaces = await prisma.workspaces.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends workspacesUpdateArgs>(args: SelectSubset<T, workspacesUpdateArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workspaces.
     * @param {workspacesDeleteManyArgs} args - Arguments to filter Workspaces to delete.
     * @example
     * // Delete a few Workspaces
     * const { count } = await prisma.workspaces.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends workspacesDeleteManyArgs>(args?: SelectSubset<T, workspacesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workspaces
     * const workspaces = await prisma.workspaces.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends workspacesUpdateManyArgs>(args: SelectSubset<T, workspacesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces and returns the data updated in the database.
     * @param {workspacesUpdateManyAndReturnArgs} args - Arguments to update many Workspaces.
     * @example
     * // Update many Workspaces
     * const workspaces = await prisma.workspaces.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workspaces and only return the `id`
     * const workspacesWithIdOnly = await prisma.workspaces.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends workspacesUpdateManyAndReturnArgs>(args: SelectSubset<T, workspacesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workspaces.
     * @param {workspacesUpsertArgs} args - Arguments to update or create a Workspaces.
     * @example
     * // Update or create a Workspaces
     * const workspaces = await prisma.workspaces.upsert({
     *   create: {
     *     // ... data to create a Workspaces
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workspaces we want to update
     *   }
     * })
     */
    upsert<T extends workspacesUpsertArgs>(args: SelectSubset<T, workspacesUpsertArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacesCountArgs} args - Arguments to filter Workspaces to count.
     * @example
     * // Count the number of Workspaces
     * const count = await prisma.workspaces.count({
     *   where: {
     *     // ... the filter for the Workspaces we want to count
     *   }
     * })
    **/
    count<T extends workspacesCountArgs>(
      args?: Subset<T, workspacesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspacesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspacesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkspacesAggregateArgs>(args: Subset<T, WorkspacesAggregateArgs>): Prisma.PrismaPromise<GetWorkspacesAggregateType<T>>

    /**
     * Group by Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspacesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends workspacesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workspacesGroupByArgs['orderBy'] }
        : { orderBy?: workspacesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, workspacesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspacesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the workspaces model
   */
  readonly fields: workspacesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for workspaces.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workspacesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends workspaces$usersArgs<ExtArgs> = {}>(args?: Subset<T, workspaces$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    workspace_users<T extends workspaces$workspace_usersArgs<ExtArgs> = {}>(args?: Subset<T, workspaces$workspace_usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspace_usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the workspaces model
   */
  interface workspacesFieldRefs {
    readonly id: FieldRef<"workspaces", 'String'>
    readonly created_at: FieldRef<"workspaces", 'DateTime'>
    readonly updated_at: FieldRef<"workspaces", 'DateTime'>
    readonly deleted_at: FieldRef<"workspaces", 'DateTime'>
    readonly name: FieldRef<"workspaces", 'String'>
  }
    

  // Custom InputTypes
  /**
   * workspaces findUnique
   */
  export type workspacesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * Filter, which workspaces to fetch.
     */
    where: workspacesWhereUniqueInput
  }

  /**
   * workspaces findUniqueOrThrow
   */
  export type workspacesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * Filter, which workspaces to fetch.
     */
    where: workspacesWhereUniqueInput
  }

  /**
   * workspaces findFirst
   */
  export type workspacesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * Filter, which workspaces to fetch.
     */
    where?: workspacesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspaces to fetch.
     */
    orderBy?: workspacesOrderByWithRelationInput | workspacesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workspaces.
     */
    cursor?: workspacesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workspaces.
     */
    distinct?: WorkspacesScalarFieldEnum | WorkspacesScalarFieldEnum[]
  }

  /**
   * workspaces findFirstOrThrow
   */
  export type workspacesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * Filter, which workspaces to fetch.
     */
    where?: workspacesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspaces to fetch.
     */
    orderBy?: workspacesOrderByWithRelationInput | workspacesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workspaces.
     */
    cursor?: workspacesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workspaces.
     */
    distinct?: WorkspacesScalarFieldEnum | WorkspacesScalarFieldEnum[]
  }

  /**
   * workspaces findMany
   */
  export type workspacesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * Filter, which workspaces to fetch.
     */
    where?: workspacesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspaces to fetch.
     */
    orderBy?: workspacesOrderByWithRelationInput | workspacesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing workspaces.
     */
    cursor?: workspacesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspaces.
     */
    skip?: number
    distinct?: WorkspacesScalarFieldEnum | WorkspacesScalarFieldEnum[]
  }

  /**
   * workspaces create
   */
  export type workspacesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * The data needed to create a workspaces.
     */
    data?: XOR<workspacesCreateInput, workspacesUncheckedCreateInput>
  }

  /**
   * workspaces createMany
   */
  export type workspacesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workspaces.
     */
    data: workspacesCreateManyInput | workspacesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workspaces createManyAndReturn
   */
  export type workspacesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * The data used to create many workspaces.
     */
    data: workspacesCreateManyInput | workspacesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workspaces update
   */
  export type workspacesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * The data needed to update a workspaces.
     */
    data: XOR<workspacesUpdateInput, workspacesUncheckedUpdateInput>
    /**
     * Choose, which workspaces to update.
     */
    where: workspacesWhereUniqueInput
  }

  /**
   * workspaces updateMany
   */
  export type workspacesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workspaces.
     */
    data: XOR<workspacesUpdateManyMutationInput, workspacesUncheckedUpdateManyInput>
    /**
     * Filter which workspaces to update
     */
    where?: workspacesWhereInput
    /**
     * Limit how many workspaces to update.
     */
    limit?: number
  }

  /**
   * workspaces updateManyAndReturn
   */
  export type workspacesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * The data used to update workspaces.
     */
    data: XOR<workspacesUpdateManyMutationInput, workspacesUncheckedUpdateManyInput>
    /**
     * Filter which workspaces to update
     */
    where?: workspacesWhereInput
    /**
     * Limit how many workspaces to update.
     */
    limit?: number
  }

  /**
   * workspaces upsert
   */
  export type workspacesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * The filter to search for the workspaces to update in case it exists.
     */
    where: workspacesWhereUniqueInput
    /**
     * In case the workspaces found by the `where` argument doesn't exist, create a new workspaces with this data.
     */
    create: XOR<workspacesCreateInput, workspacesUncheckedCreateInput>
    /**
     * In case the workspaces was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workspacesUpdateInput, workspacesUncheckedUpdateInput>
  }

  /**
   * workspaces delete
   */
  export type workspacesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
    /**
     * Filter which workspaces to delete.
     */
    where: workspacesWhereUniqueInput
  }

  /**
   * workspaces deleteMany
   */
  export type workspacesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workspaces to delete
     */
    where?: workspacesWhereInput
    /**
     * Limit how many workspaces to delete.
     */
    limit?: number
  }

  /**
   * workspaces.users
   */
  export type workspaces$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    cursor?: usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * workspaces.workspace_users
   */
  export type workspaces$workspace_usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_users
     */
    select?: workspace_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_users
     */
    omit?: workspace_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_usersInclude<ExtArgs> | null
    where?: workspace_usersWhereInput
    orderBy?: workspace_usersOrderByWithRelationInput | workspace_usersOrderByWithRelationInput[]
    cursor?: workspace_usersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Workspace_usersScalarFieldEnum | Workspace_usersScalarFieldEnum[]
  }

  /**
   * workspaces without action
   */
  export type workspacesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspaces
     */
    select?: workspacesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspaces
     */
    omit?: workspacesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspacesInclude<ExtArgs> | null
  }


  /**
   * Model workspace_users
   */

  export type AggregateWorkspace_users = {
    _count: Workspace_usersCountAggregateOutputType | null
    _min: Workspace_usersMinAggregateOutputType | null
    _max: Workspace_usersMaxAggregateOutputType | null
  }

  export type Workspace_usersMinAggregateOutputType = {
    workspace_id: string | null
    user_id: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Workspace_usersMaxAggregateOutputType = {
    workspace_id: string | null
    user_id: string | null
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
  }

  export type Workspace_usersCountAggregateOutputType = {
    workspace_id: number
    user_id: number
    created_at: number
    updated_at: number
    deleted_at: number
    _all: number
  }


  export type Workspace_usersMinAggregateInputType = {
    workspace_id?: true
    user_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Workspace_usersMaxAggregateInputType = {
    workspace_id?: true
    user_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
  }

  export type Workspace_usersCountAggregateInputType = {
    workspace_id?: true
    user_id?: true
    created_at?: true
    updated_at?: true
    deleted_at?: true
    _all?: true
  }

  export type Workspace_usersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workspace_users to aggregate.
     */
    where?: workspace_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspace_users to fetch.
     */
    orderBy?: workspace_usersOrderByWithRelationInput | workspace_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: workspace_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspace_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspace_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned workspace_users
    **/
    _count?: true | Workspace_usersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Workspace_usersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Workspace_usersMaxAggregateInputType
  }

  export type GetWorkspace_usersAggregateType<T extends Workspace_usersAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspace_users]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspace_users[P]>
      : GetScalarType<T[P], AggregateWorkspace_users[P]>
  }




  export type workspace_usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: workspace_usersWhereInput
    orderBy?: workspace_usersOrderByWithAggregationInput | workspace_usersOrderByWithAggregationInput[]
    by: Workspace_usersScalarFieldEnum[] | Workspace_usersScalarFieldEnum
    having?: workspace_usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Workspace_usersCountAggregateInputType | true
    _min?: Workspace_usersMinAggregateInputType
    _max?: Workspace_usersMaxAggregateInputType
  }

  export type Workspace_usersGroupByOutputType = {
    workspace_id: string
    user_id: string
    created_at: Date | null
    updated_at: Date | null
    deleted_at: Date | null
    _count: Workspace_usersCountAggregateOutputType | null
    _min: Workspace_usersMinAggregateOutputType | null
    _max: Workspace_usersMaxAggregateOutputType | null
  }

  type GetWorkspace_usersGroupByPayload<T extends workspace_usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Workspace_usersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Workspace_usersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Workspace_usersGroupByOutputType[P]>
            : GetScalarType<T[P], Workspace_usersGroupByOutputType[P]>
        }
      >
    >


  export type workspace_usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workspace_id?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    workspace?: boolean | workspacesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace_users"]>

  export type workspace_usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workspace_id?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    workspace?: boolean | workspacesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace_users"]>

  export type workspace_usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    workspace_id?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
    workspace?: boolean | workspacesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace_users"]>

  export type workspace_usersSelectScalar = {
    workspace_id?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    deleted_at?: boolean
  }

  export type workspace_usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"workspace_id" | "user_id" | "created_at" | "updated_at" | "deleted_at", ExtArgs["result"]["workspace_users"]>
  export type workspace_usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | workspacesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type workspace_usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | workspacesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type workspace_usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | workspacesDefaultArgs<ExtArgs>
    user?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $workspace_usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "workspace_users"
    objects: {
      workspace: Prisma.$workspacesPayload<ExtArgs>
      user: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      workspace_id: string
      user_id: string
      created_at: Date | null
      updated_at: Date | null
      deleted_at: Date | null
    }, ExtArgs["result"]["workspace_users"]>
    composites: {}
  }

  type workspace_usersGetPayload<S extends boolean | null | undefined | workspace_usersDefaultArgs> = $Result.GetResult<Prisma.$workspace_usersPayload, S>

  type workspace_usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<workspace_usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Workspace_usersCountAggregateInputType | true
    }

  export interface workspace_usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['workspace_users'], meta: { name: 'workspace_users' } }
    /**
     * Find zero or one Workspace_users that matches the filter.
     * @param {workspace_usersFindUniqueArgs} args - Arguments to find a Workspace_users
     * @example
     * // Get one Workspace_users
     * const workspace_users = await prisma.workspace_users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends workspace_usersFindUniqueArgs>(args: SelectSubset<T, workspace_usersFindUniqueArgs<ExtArgs>>): Prisma__workspace_usersClient<$Result.GetResult<Prisma.$workspace_usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workspace_users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {workspace_usersFindUniqueOrThrowArgs} args - Arguments to find a Workspace_users
     * @example
     * // Get one Workspace_users
     * const workspace_users = await prisma.workspace_users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends workspace_usersFindUniqueOrThrowArgs>(args: SelectSubset<T, workspace_usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__workspace_usersClient<$Result.GetResult<Prisma.$workspace_usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspace_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspace_usersFindFirstArgs} args - Arguments to find a Workspace_users
     * @example
     * // Get one Workspace_users
     * const workspace_users = await prisma.workspace_users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends workspace_usersFindFirstArgs>(args?: SelectSubset<T, workspace_usersFindFirstArgs<ExtArgs>>): Prisma__workspace_usersClient<$Result.GetResult<Prisma.$workspace_usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workspace_users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspace_usersFindFirstOrThrowArgs} args - Arguments to find a Workspace_users
     * @example
     * // Get one Workspace_users
     * const workspace_users = await prisma.workspace_users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends workspace_usersFindFirstOrThrowArgs>(args?: SelectSubset<T, workspace_usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__workspace_usersClient<$Result.GetResult<Prisma.$workspace_usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workspace_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspace_usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workspace_users
     * const workspace_users = await prisma.workspace_users.findMany()
     * 
     * // Get first 10 Workspace_users
     * const workspace_users = await prisma.workspace_users.findMany({ take: 10 })
     * 
     * // Only select the `workspace_id`
     * const workspace_usersWithWorkspace_idOnly = await prisma.workspace_users.findMany({ select: { workspace_id: true } })
     * 
     */
    findMany<T extends workspace_usersFindManyArgs>(args?: SelectSubset<T, workspace_usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspace_usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workspace_users.
     * @param {workspace_usersCreateArgs} args - Arguments to create a Workspace_users.
     * @example
     * // Create one Workspace_users
     * const Workspace_users = await prisma.workspace_users.create({
     *   data: {
     *     // ... data to create a Workspace_users
     *   }
     * })
     * 
     */
    create<T extends workspace_usersCreateArgs>(args: SelectSubset<T, workspace_usersCreateArgs<ExtArgs>>): Prisma__workspace_usersClient<$Result.GetResult<Prisma.$workspace_usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workspace_users.
     * @param {workspace_usersCreateManyArgs} args - Arguments to create many Workspace_users.
     * @example
     * // Create many Workspace_users
     * const workspace_users = await prisma.workspace_users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends workspace_usersCreateManyArgs>(args?: SelectSubset<T, workspace_usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workspace_users and returns the data saved in the database.
     * @param {workspace_usersCreateManyAndReturnArgs} args - Arguments to create many Workspace_users.
     * @example
     * // Create many Workspace_users
     * const workspace_users = await prisma.workspace_users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workspace_users and only return the `workspace_id`
     * const workspace_usersWithWorkspace_idOnly = await prisma.workspace_users.createManyAndReturn({
     *   select: { workspace_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends workspace_usersCreateManyAndReturnArgs>(args?: SelectSubset<T, workspace_usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspace_usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workspace_users.
     * @param {workspace_usersDeleteArgs} args - Arguments to delete one Workspace_users.
     * @example
     * // Delete one Workspace_users
     * const Workspace_users = await prisma.workspace_users.delete({
     *   where: {
     *     // ... filter to delete one Workspace_users
     *   }
     * })
     * 
     */
    delete<T extends workspace_usersDeleteArgs>(args: SelectSubset<T, workspace_usersDeleteArgs<ExtArgs>>): Prisma__workspace_usersClient<$Result.GetResult<Prisma.$workspace_usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workspace_users.
     * @param {workspace_usersUpdateArgs} args - Arguments to update one Workspace_users.
     * @example
     * // Update one Workspace_users
     * const workspace_users = await prisma.workspace_users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends workspace_usersUpdateArgs>(args: SelectSubset<T, workspace_usersUpdateArgs<ExtArgs>>): Prisma__workspace_usersClient<$Result.GetResult<Prisma.$workspace_usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workspace_users.
     * @param {workspace_usersDeleteManyArgs} args - Arguments to filter Workspace_users to delete.
     * @example
     * // Delete a few Workspace_users
     * const { count } = await prisma.workspace_users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends workspace_usersDeleteManyArgs>(args?: SelectSubset<T, workspace_usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspace_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspace_usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workspace_users
     * const workspace_users = await prisma.workspace_users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends workspace_usersUpdateManyArgs>(args: SelectSubset<T, workspace_usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspace_users and returns the data updated in the database.
     * @param {workspace_usersUpdateManyAndReturnArgs} args - Arguments to update many Workspace_users.
     * @example
     * // Update many Workspace_users
     * const workspace_users = await prisma.workspace_users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workspace_users and only return the `workspace_id`
     * const workspace_usersWithWorkspace_idOnly = await prisma.workspace_users.updateManyAndReturn({
     *   select: { workspace_id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends workspace_usersUpdateManyAndReturnArgs>(args: SelectSubset<T, workspace_usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$workspace_usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workspace_users.
     * @param {workspace_usersUpsertArgs} args - Arguments to update or create a Workspace_users.
     * @example
     * // Update or create a Workspace_users
     * const workspace_users = await prisma.workspace_users.upsert({
     *   create: {
     *     // ... data to create a Workspace_users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workspace_users we want to update
     *   }
     * })
     */
    upsert<T extends workspace_usersUpsertArgs>(args: SelectSubset<T, workspace_usersUpsertArgs<ExtArgs>>): Prisma__workspace_usersClient<$Result.GetResult<Prisma.$workspace_usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workspace_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspace_usersCountArgs} args - Arguments to filter Workspace_users to count.
     * @example
     * // Count the number of Workspace_users
     * const count = await prisma.workspace_users.count({
     *   where: {
     *     // ... the filter for the Workspace_users we want to count
     *   }
     * })
    **/
    count<T extends workspace_usersCountArgs>(
      args?: Subset<T, workspace_usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Workspace_usersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workspace_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Workspace_usersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Workspace_usersAggregateArgs>(args: Subset<T, Workspace_usersAggregateArgs>): Prisma.PrismaPromise<GetWorkspace_usersAggregateType<T>>

    /**
     * Group by Workspace_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {workspace_usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends workspace_usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: workspace_usersGroupByArgs['orderBy'] }
        : { orderBy?: workspace_usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, workspace_usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspace_usersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the workspace_users model
   */
  readonly fields: workspace_usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for workspace_users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__workspace_usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends workspacesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, workspacesDefaultArgs<ExtArgs>>): Prisma__workspacesClient<$Result.GetResult<Prisma.$workspacesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the workspace_users model
   */
  interface workspace_usersFieldRefs {
    readonly workspace_id: FieldRef<"workspace_users", 'String'>
    readonly user_id: FieldRef<"workspace_users", 'String'>
    readonly created_at: FieldRef<"workspace_users", 'DateTime'>
    readonly updated_at: FieldRef<"workspace_users", 'DateTime'>
    readonly deleted_at: FieldRef<"workspace_users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * workspace_users findUnique
   */
  export type workspace_usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_users
     */
    select?: workspace_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_users
     */
    omit?: workspace_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_usersInclude<ExtArgs> | null
    /**
     * Filter, which workspace_users to fetch.
     */
    where: workspace_usersWhereUniqueInput
  }

  /**
   * workspace_users findUniqueOrThrow
   */
  export type workspace_usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_users
     */
    select?: workspace_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_users
     */
    omit?: workspace_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_usersInclude<ExtArgs> | null
    /**
     * Filter, which workspace_users to fetch.
     */
    where: workspace_usersWhereUniqueInput
  }

  /**
   * workspace_users findFirst
   */
  export type workspace_usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_users
     */
    select?: workspace_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_users
     */
    omit?: workspace_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_usersInclude<ExtArgs> | null
    /**
     * Filter, which workspace_users to fetch.
     */
    where?: workspace_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspace_users to fetch.
     */
    orderBy?: workspace_usersOrderByWithRelationInput | workspace_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workspace_users.
     */
    cursor?: workspace_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspace_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspace_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workspace_users.
     */
    distinct?: Workspace_usersScalarFieldEnum | Workspace_usersScalarFieldEnum[]
  }

  /**
   * workspace_users findFirstOrThrow
   */
  export type workspace_usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_users
     */
    select?: workspace_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_users
     */
    omit?: workspace_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_usersInclude<ExtArgs> | null
    /**
     * Filter, which workspace_users to fetch.
     */
    where?: workspace_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspace_users to fetch.
     */
    orderBy?: workspace_usersOrderByWithRelationInput | workspace_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for workspace_users.
     */
    cursor?: workspace_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspace_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspace_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of workspace_users.
     */
    distinct?: Workspace_usersScalarFieldEnum | Workspace_usersScalarFieldEnum[]
  }

  /**
   * workspace_users findMany
   */
  export type workspace_usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_users
     */
    select?: workspace_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_users
     */
    omit?: workspace_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_usersInclude<ExtArgs> | null
    /**
     * Filter, which workspace_users to fetch.
     */
    where?: workspace_usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of workspace_users to fetch.
     */
    orderBy?: workspace_usersOrderByWithRelationInput | workspace_usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing workspace_users.
     */
    cursor?: workspace_usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` workspace_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` workspace_users.
     */
    skip?: number
    distinct?: Workspace_usersScalarFieldEnum | Workspace_usersScalarFieldEnum[]
  }

  /**
   * workspace_users create
   */
  export type workspace_usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_users
     */
    select?: workspace_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_users
     */
    omit?: workspace_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_usersInclude<ExtArgs> | null
    /**
     * The data needed to create a workspace_users.
     */
    data: XOR<workspace_usersCreateInput, workspace_usersUncheckedCreateInput>
  }

  /**
   * workspace_users createMany
   */
  export type workspace_usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many workspace_users.
     */
    data: workspace_usersCreateManyInput | workspace_usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * workspace_users createManyAndReturn
   */
  export type workspace_usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_users
     */
    select?: workspace_usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_users
     */
    omit?: workspace_usersOmit<ExtArgs> | null
    /**
     * The data used to create many workspace_users.
     */
    data: workspace_usersCreateManyInput | workspace_usersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_usersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * workspace_users update
   */
  export type workspace_usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_users
     */
    select?: workspace_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_users
     */
    omit?: workspace_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_usersInclude<ExtArgs> | null
    /**
     * The data needed to update a workspace_users.
     */
    data: XOR<workspace_usersUpdateInput, workspace_usersUncheckedUpdateInput>
    /**
     * Choose, which workspace_users to update.
     */
    where: workspace_usersWhereUniqueInput
  }

  /**
   * workspace_users updateMany
   */
  export type workspace_usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update workspace_users.
     */
    data: XOR<workspace_usersUpdateManyMutationInput, workspace_usersUncheckedUpdateManyInput>
    /**
     * Filter which workspace_users to update
     */
    where?: workspace_usersWhereInput
    /**
     * Limit how many workspace_users to update.
     */
    limit?: number
  }

  /**
   * workspace_users updateManyAndReturn
   */
  export type workspace_usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_users
     */
    select?: workspace_usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_users
     */
    omit?: workspace_usersOmit<ExtArgs> | null
    /**
     * The data used to update workspace_users.
     */
    data: XOR<workspace_usersUpdateManyMutationInput, workspace_usersUncheckedUpdateManyInput>
    /**
     * Filter which workspace_users to update
     */
    where?: workspace_usersWhereInput
    /**
     * Limit how many workspace_users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_usersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * workspace_users upsert
   */
  export type workspace_usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_users
     */
    select?: workspace_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_users
     */
    omit?: workspace_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_usersInclude<ExtArgs> | null
    /**
     * The filter to search for the workspace_users to update in case it exists.
     */
    where: workspace_usersWhereUniqueInput
    /**
     * In case the workspace_users found by the `where` argument doesn't exist, create a new workspace_users with this data.
     */
    create: XOR<workspace_usersCreateInput, workspace_usersUncheckedCreateInput>
    /**
     * In case the workspace_users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<workspace_usersUpdateInput, workspace_usersUncheckedUpdateInput>
  }

  /**
   * workspace_users delete
   */
  export type workspace_usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_users
     */
    select?: workspace_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_users
     */
    omit?: workspace_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_usersInclude<ExtArgs> | null
    /**
     * Filter which workspace_users to delete.
     */
    where: workspace_usersWhereUniqueInput
  }

  /**
   * workspace_users deleteMany
   */
  export type workspace_usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which workspace_users to delete
     */
    where?: workspace_usersWhereInput
    /**
     * Limit how many workspace_users to delete.
     */
    limit?: number
  }

  /**
   * workspace_users without action
   */
  export type workspace_usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the workspace_users
     */
    select?: workspace_usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the workspace_users
     */
    omit?: workspace_usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: workspace_usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Post_commentsScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    text: 'text',
    post_id: 'post_id',
    parrent_comment_id: 'parrent_comment_id',
    created_by: 'created_by'
  };

  export type Post_commentsScalarFieldEnum = (typeof Post_commentsScalarFieldEnum)[keyof typeof Post_commentsScalarFieldEnum]


  export const PostsScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    title: 'title',
    created_by: 'created_by',
    body: 'body',
    slug: 'slug',
    photo_url: 'photo_url',
    published: 'published'
  };

  export type PostsScalarFieldEnum = (typeof PostsScalarFieldEnum)[keyof typeof PostsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    first_name: 'first_name',
    last_name: 'last_name',
    email: 'email',
    password: 'password',
    image: 'image',
    is_super_admin: 'is_super_admin',
    username: 'username'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const Posts_to_tagsScalarFieldEnum: {
    post_id: 'post_id',
    tag_id: 'tag_id'
  };

  export type Posts_to_tagsScalarFieldEnum = (typeof Posts_to_tagsScalarFieldEnum)[keyof typeof Posts_to_tagsScalarFieldEnum]


  export const TagsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at'
  };

  export type TagsScalarFieldEnum = (typeof TagsScalarFieldEnum)[keyof typeof TagsScalarFieldEnum]


  export const FilesScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    name: 'name',
    path: 'path',
    size: 'size',
    type: 'type',
    created_by: 'created_by'
  };

  export type FilesScalarFieldEnum = (typeof FilesScalarFieldEnum)[keyof typeof FilesScalarFieldEnum]


  export const LikesScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    post_id: 'post_id',
    created_by: 'created_by'
  };

  export type LikesScalarFieldEnum = (typeof LikesScalarFieldEnum)[keyof typeof LikesScalarFieldEnum]


  export const ProfilesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    bio: 'bio',
    website: 'website',
    phone: 'phone',
    location: 'location'
  };

  export type ProfilesScalarFieldEnum = (typeof ProfilesScalarFieldEnum)[keyof typeof ProfilesScalarFieldEnum]


  export const WorkspacesScalarFieldEnum: {
    id: 'id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at',
    name: 'name'
  };

  export type WorkspacesScalarFieldEnum = (typeof WorkspacesScalarFieldEnum)[keyof typeof WorkspacesScalarFieldEnum]


  export const Workspace_usersScalarFieldEnum: {
    workspace_id: 'workspace_id',
    user_id: 'user_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    deleted_at: 'deleted_at'
  };

  export type Workspace_usersScalarFieldEnum = (typeof Workspace_usersScalarFieldEnum)[keyof typeof Workspace_usersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type post_commentsWhereInput = {
    AND?: post_commentsWhereInput | post_commentsWhereInput[]
    OR?: post_commentsWhereInput[]
    NOT?: post_commentsWhereInput | post_commentsWhereInput[]
    id?: UuidFilter<"post_comments"> | string
    created_at?: DateTimeNullableFilter<"post_comments"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"post_comments"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"post_comments"> | Date | string | null
    text?: StringNullableFilter<"post_comments"> | string | null
    post_id?: UuidNullableFilter<"post_comments"> | string | null
    parrent_comment_id?: BigIntNullableFilter<"post_comments"> | bigint | number | null
    created_by?: UuidNullableFilter<"post_comments"> | string | null
    creator?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    posts?: XOR<PostsNullableScalarRelationFilter, postsWhereInput> | null
  }

  export type post_commentsOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
    post_id?: SortOrderInput | SortOrder
    parrent_comment_id?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    creator?: usersOrderByWithRelationInput
    posts?: postsOrderByWithRelationInput
  }

  export type post_commentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: post_commentsWhereInput | post_commentsWhereInput[]
    OR?: post_commentsWhereInput[]
    NOT?: post_commentsWhereInput | post_commentsWhereInput[]
    created_at?: DateTimeNullableFilter<"post_comments"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"post_comments"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"post_comments"> | Date | string | null
    text?: StringNullableFilter<"post_comments"> | string | null
    post_id?: UuidNullableFilter<"post_comments"> | string | null
    parrent_comment_id?: BigIntNullableFilter<"post_comments"> | bigint | number | null
    created_by?: UuidNullableFilter<"post_comments"> | string | null
    creator?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    posts?: XOR<PostsNullableScalarRelationFilter, postsWhereInput> | null
  }, "id">

  export type post_commentsOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    text?: SortOrderInput | SortOrder
    post_id?: SortOrderInput | SortOrder
    parrent_comment_id?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    _count?: post_commentsCountOrderByAggregateInput
    _avg?: post_commentsAvgOrderByAggregateInput
    _max?: post_commentsMaxOrderByAggregateInput
    _min?: post_commentsMinOrderByAggregateInput
    _sum?: post_commentsSumOrderByAggregateInput
  }

  export type post_commentsScalarWhereWithAggregatesInput = {
    AND?: post_commentsScalarWhereWithAggregatesInput | post_commentsScalarWhereWithAggregatesInput[]
    OR?: post_commentsScalarWhereWithAggregatesInput[]
    NOT?: post_commentsScalarWhereWithAggregatesInput | post_commentsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"post_comments"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"post_comments"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"post_comments"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"post_comments"> | Date | string | null
    text?: StringNullableWithAggregatesFilter<"post_comments"> | string | null
    post_id?: UuidNullableWithAggregatesFilter<"post_comments"> | string | null
    parrent_comment_id?: BigIntNullableWithAggregatesFilter<"post_comments"> | bigint | number | null
    created_by?: UuidNullableWithAggregatesFilter<"post_comments"> | string | null
  }

  export type postsWhereInput = {
    AND?: postsWhereInput | postsWhereInput[]
    OR?: postsWhereInput[]
    NOT?: postsWhereInput | postsWhereInput[]
    id?: UuidFilter<"posts"> | string
    created_at?: DateTimeNullableFilter<"posts"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"posts"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"posts"> | Date | string | null
    title?: StringNullableFilter<"posts"> | string | null
    created_by?: UuidNullableFilter<"posts"> | string | null
    body?: StringNullableFilter<"posts"> | string | null
    slug?: StringNullableFilter<"posts"> | string | null
    photo_url?: StringNullableFilter<"posts"> | string | null
    published?: BoolNullableFilter<"posts"> | boolean | null
    likes?: LikesListRelationFilter
    post_comments?: Post_commentsListRelationFilter
    creator?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    tags?: Posts_to_tagsListRelationFilter
  }

  export type postsOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    body?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    photo_url?: SortOrderInput | SortOrder
    published?: SortOrderInput | SortOrder
    likes?: likesOrderByRelationAggregateInput
    post_comments?: post_commentsOrderByRelationAggregateInput
    creator?: usersOrderByWithRelationInput
    tags?: posts_to_tagsOrderByRelationAggregateInput
  }

  export type postsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: postsWhereInput | postsWhereInput[]
    OR?: postsWhereInput[]
    NOT?: postsWhereInput | postsWhereInput[]
    created_at?: DateTimeNullableFilter<"posts"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"posts"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"posts"> | Date | string | null
    title?: StringNullableFilter<"posts"> | string | null
    created_by?: UuidNullableFilter<"posts"> | string | null
    body?: StringNullableFilter<"posts"> | string | null
    photo_url?: StringNullableFilter<"posts"> | string | null
    published?: BoolNullableFilter<"posts"> | boolean | null
    likes?: LikesListRelationFilter
    post_comments?: Post_commentsListRelationFilter
    creator?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    tags?: Posts_to_tagsListRelationFilter
  }, "id" | "slug">

  export type postsOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    body?: SortOrderInput | SortOrder
    slug?: SortOrderInput | SortOrder
    photo_url?: SortOrderInput | SortOrder
    published?: SortOrderInput | SortOrder
    _count?: postsCountOrderByAggregateInput
    _max?: postsMaxOrderByAggregateInput
    _min?: postsMinOrderByAggregateInput
  }

  export type postsScalarWhereWithAggregatesInput = {
    AND?: postsScalarWhereWithAggregatesInput | postsScalarWhereWithAggregatesInput[]
    OR?: postsScalarWhereWithAggregatesInput[]
    NOT?: postsScalarWhereWithAggregatesInput | postsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"posts"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"posts"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"posts"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"posts"> | Date | string | null
    title?: StringNullableWithAggregatesFilter<"posts"> | string | null
    created_by?: UuidNullableWithAggregatesFilter<"posts"> | string | null
    body?: StringNullableWithAggregatesFilter<"posts"> | string | null
    slug?: StringNullableWithAggregatesFilter<"posts"> | string | null
    photo_url?: StringNullableWithAggregatesFilter<"posts"> | string | null
    published?: BoolNullableWithAggregatesFilter<"posts"> | boolean | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"users"> | Date | string | null
    first_name?: StringNullableFilter<"users"> | string | null
    last_name?: StringNullableFilter<"users"> | string | null
    email?: StringFilter<"users"> | string
    password?: StringNullableFilter<"users"> | string | null
    image?: StringNullableFilter<"users"> | string | null
    is_super_admin?: BoolNullableFilter<"users"> | boolean | null
    username?: StringNullableFilter<"users"> | string | null
    files?: FilesListRelationFilter
    likes?: LikesListRelationFilter
    post_comments?: Post_commentsListRelationFilter
    posts?: PostsListRelationFilter
    profiles?: XOR<ProfilesNullableScalarRelationFilter, profilesWhereInput> | null
    workspaces?: WorkspacesListRelationFilter
    workspace_users?: Workspace_usersListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    is_super_admin?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    files?: filesOrderByRelationAggregateInput
    likes?: likesOrderByRelationAggregateInput
    post_comments?: post_commentsOrderByRelationAggregateInput
    posts?: postsOrderByRelationAggregateInput
    profiles?: profilesOrderByWithRelationInput
    workspaces?: workspacesOrderByRelationAggregateInput
    workspace_users?: workspace_usersOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    username?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"users"> | Date | string | null
    first_name?: StringNullableFilter<"users"> | string | null
    last_name?: StringNullableFilter<"users"> | string | null
    password?: StringNullableFilter<"users"> | string | null
    image?: StringNullableFilter<"users"> | string | null
    is_super_admin?: BoolNullableFilter<"users"> | boolean | null
    files?: FilesListRelationFilter
    likes?: LikesListRelationFilter
    post_comments?: Post_commentsListRelationFilter
    posts?: PostsListRelationFilter
    profiles?: XOR<ProfilesNullableScalarRelationFilter, profilesWhereInput> | null
    workspaces?: WorkspacesListRelationFilter
    workspace_users?: Workspace_usersListRelationFilter
  }, "id" | "email" | "username">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    is_super_admin?: SortOrderInput | SortOrder
    username?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    first_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    email?: StringWithAggregatesFilter<"users"> | string
    password?: StringNullableWithAggregatesFilter<"users"> | string | null
    image?: StringNullableWithAggregatesFilter<"users"> | string | null
    is_super_admin?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    username?: StringNullableWithAggregatesFilter<"users"> | string | null
  }

  export type posts_to_tagsWhereInput = {
    AND?: posts_to_tagsWhereInput | posts_to_tagsWhereInput[]
    OR?: posts_to_tagsWhereInput[]
    NOT?: posts_to_tagsWhereInput | posts_to_tagsWhereInput[]
    post_id?: UuidFilter<"posts_to_tags"> | string
    tag_id?: IntFilter<"posts_to_tags"> | number
    post?: XOR<PostsScalarRelationFilter, postsWhereInput>
    tag?: XOR<TagsScalarRelationFilter, tagsWhereInput>
  }

  export type posts_to_tagsOrderByWithRelationInput = {
    post_id?: SortOrder
    tag_id?: SortOrder
    post?: postsOrderByWithRelationInput
    tag?: tagsOrderByWithRelationInput
  }

  export type posts_to_tagsWhereUniqueInput = Prisma.AtLeast<{
    post_id_tag_id?: posts_to_tagsPost_idTag_idCompoundUniqueInput
    AND?: posts_to_tagsWhereInput | posts_to_tagsWhereInput[]
    OR?: posts_to_tagsWhereInput[]
    NOT?: posts_to_tagsWhereInput | posts_to_tagsWhereInput[]
    post_id?: UuidFilter<"posts_to_tags"> | string
    tag_id?: IntFilter<"posts_to_tags"> | number
    post?: XOR<PostsScalarRelationFilter, postsWhereInput>
    tag?: XOR<TagsScalarRelationFilter, tagsWhereInput>
  }, "post_id_tag_id">

  export type posts_to_tagsOrderByWithAggregationInput = {
    post_id?: SortOrder
    tag_id?: SortOrder
    _count?: posts_to_tagsCountOrderByAggregateInput
    _avg?: posts_to_tagsAvgOrderByAggregateInput
    _max?: posts_to_tagsMaxOrderByAggregateInput
    _min?: posts_to_tagsMinOrderByAggregateInput
    _sum?: posts_to_tagsSumOrderByAggregateInput
  }

  export type posts_to_tagsScalarWhereWithAggregatesInput = {
    AND?: posts_to_tagsScalarWhereWithAggregatesInput | posts_to_tagsScalarWhereWithAggregatesInput[]
    OR?: posts_to_tagsScalarWhereWithAggregatesInput[]
    NOT?: posts_to_tagsScalarWhereWithAggregatesInput | posts_to_tagsScalarWhereWithAggregatesInput[]
    post_id?: UuidWithAggregatesFilter<"posts_to_tags"> | string
    tag_id?: IntWithAggregatesFilter<"posts_to_tags"> | number
  }

  export type tagsWhereInput = {
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    id?: IntFilter<"tags"> | number
    name?: StringNullableFilter<"tags"> | string | null
    created_at?: DateTimeNullableFilter<"tags"> | Date | string | null
    posts_to_tags?: Posts_to_tagsListRelationFilter
  }

  export type tagsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    posts_to_tags?: posts_to_tagsOrderByRelationAggregateInput
  }

  export type tagsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: tagsWhereInput | tagsWhereInput[]
    OR?: tagsWhereInput[]
    NOT?: tagsWhereInput | tagsWhereInput[]
    created_at?: DateTimeNullableFilter<"tags"> | Date | string | null
    posts_to_tags?: Posts_to_tagsListRelationFilter
  }, "id" | "name">

  export type tagsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: tagsCountOrderByAggregateInput
    _avg?: tagsAvgOrderByAggregateInput
    _max?: tagsMaxOrderByAggregateInput
    _min?: tagsMinOrderByAggregateInput
    _sum?: tagsSumOrderByAggregateInput
  }

  export type tagsScalarWhereWithAggregatesInput = {
    AND?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    OR?: tagsScalarWhereWithAggregatesInput[]
    NOT?: tagsScalarWhereWithAggregatesInput | tagsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tags"> | number
    name?: StringNullableWithAggregatesFilter<"tags"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"tags"> | Date | string | null
  }

  export type filesWhereInput = {
    AND?: filesWhereInput | filesWhereInput[]
    OR?: filesWhereInput[]
    NOT?: filesWhereInput | filesWhereInput[]
    id?: UuidFilter<"files"> | string
    created_at?: DateTimeNullableFilter<"files"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"files"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"files"> | Date | string | null
    name?: StringNullableFilter<"files"> | string | null
    path?: StringNullableFilter<"files"> | string | null
    size?: IntNullableFilter<"files"> | number | null
    type?: StringNullableFilter<"files"> | string | null
    created_by?: UuidNullableFilter<"files"> | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type filesOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    path?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type filesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: filesWhereInput | filesWhereInput[]
    OR?: filesWhereInput[]
    NOT?: filesWhereInput | filesWhereInput[]
    created_at?: DateTimeNullableFilter<"files"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"files"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"files"> | Date | string | null
    name?: StringNullableFilter<"files"> | string | null
    path?: StringNullableFilter<"files"> | string | null
    size?: IntNullableFilter<"files"> | number | null
    type?: StringNullableFilter<"files"> | string | null
    created_by?: UuidNullableFilter<"files"> | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type filesOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    path?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    _count?: filesCountOrderByAggregateInput
    _avg?: filesAvgOrderByAggregateInput
    _max?: filesMaxOrderByAggregateInput
    _min?: filesMinOrderByAggregateInput
    _sum?: filesSumOrderByAggregateInput
  }

  export type filesScalarWhereWithAggregatesInput = {
    AND?: filesScalarWhereWithAggregatesInput | filesScalarWhereWithAggregatesInput[]
    OR?: filesScalarWhereWithAggregatesInput[]
    NOT?: filesScalarWhereWithAggregatesInput | filesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"files"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"files"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"files"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"files"> | Date | string | null
    name?: StringNullableWithAggregatesFilter<"files"> | string | null
    path?: StringNullableWithAggregatesFilter<"files"> | string | null
    size?: IntNullableWithAggregatesFilter<"files"> | number | null
    type?: StringNullableWithAggregatesFilter<"files"> | string | null
    created_by?: UuidNullableWithAggregatesFilter<"files"> | string | null
  }

  export type likesWhereInput = {
    AND?: likesWhereInput | likesWhereInput[]
    OR?: likesWhereInput[]
    NOT?: likesWhereInput | likesWhereInput[]
    id?: IntFilter<"likes"> | number
    created_at?: DateTimeNullableFilter<"likes"> | Date | string | null
    post_id?: UuidNullableFilter<"likes"> | string | null
    created_by?: UuidNullableFilter<"likes"> | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    posts?: XOR<PostsNullableScalarRelationFilter, postsWhereInput> | null
  }

  export type likesOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    post_id?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    posts?: postsOrderByWithRelationInput
  }

  export type likesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    post_id_created_by?: likesPost_idCreated_byCompoundUniqueInput
    AND?: likesWhereInput | likesWhereInput[]
    OR?: likesWhereInput[]
    NOT?: likesWhereInput | likesWhereInput[]
    created_at?: DateTimeNullableFilter<"likes"> | Date | string | null
    post_id?: UuidNullableFilter<"likes"> | string | null
    created_by?: UuidNullableFilter<"likes"> | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    posts?: XOR<PostsNullableScalarRelationFilter, postsWhereInput> | null
  }, "id" | "post_id_created_by">

  export type likesOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    post_id?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    _count?: likesCountOrderByAggregateInput
    _avg?: likesAvgOrderByAggregateInput
    _max?: likesMaxOrderByAggregateInput
    _min?: likesMinOrderByAggregateInput
    _sum?: likesSumOrderByAggregateInput
  }

  export type likesScalarWhereWithAggregatesInput = {
    AND?: likesScalarWhereWithAggregatesInput | likesScalarWhereWithAggregatesInput[]
    OR?: likesScalarWhereWithAggregatesInput[]
    NOT?: likesScalarWhereWithAggregatesInput | likesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"likes"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"likes"> | Date | string | null
    post_id?: UuidNullableWithAggregatesFilter<"likes"> | string | null
    created_by?: UuidNullableWithAggregatesFilter<"likes"> | string | null
  }

  export type profilesWhereInput = {
    AND?: profilesWhereInput | profilesWhereInput[]
    OR?: profilesWhereInput[]
    NOT?: profilesWhereInput | profilesWhereInput[]
    id?: IntFilter<"profiles"> | number
    user_id?: UuidFilter<"profiles"> | string
    created_at?: DateTimeNullableFilter<"profiles"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"profiles"> | Date | string | null
    bio?: StringNullableFilter<"profiles"> | string | null
    website?: StringNullableFilter<"profiles"> | string | null
    phone?: StringNullableFilter<"profiles"> | string | null
    location?: StringNullableFilter<"profiles"> | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type profilesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type profilesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    user_id?: string
    AND?: profilesWhereInput | profilesWhereInput[]
    OR?: profilesWhereInput[]
    NOT?: profilesWhereInput | profilesWhereInput[]
    created_at?: DateTimeNullableFilter<"profiles"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"profiles"> | Date | string | null
    bio?: StringNullableFilter<"profiles"> | string | null
    website?: StringNullableFilter<"profiles"> | string | null
    phone?: StringNullableFilter<"profiles"> | string | null
    location?: StringNullableFilter<"profiles"> | string | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "user_id">

  export type profilesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    _count?: profilesCountOrderByAggregateInput
    _avg?: profilesAvgOrderByAggregateInput
    _max?: profilesMaxOrderByAggregateInput
    _min?: profilesMinOrderByAggregateInput
    _sum?: profilesSumOrderByAggregateInput
  }

  export type profilesScalarWhereWithAggregatesInput = {
    AND?: profilesScalarWhereWithAggregatesInput | profilesScalarWhereWithAggregatesInput[]
    OR?: profilesScalarWhereWithAggregatesInput[]
    NOT?: profilesScalarWhereWithAggregatesInput | profilesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"profiles"> | number
    user_id?: UuidWithAggregatesFilter<"profiles"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"profiles"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"profiles"> | Date | string | null
    bio?: StringNullableWithAggregatesFilter<"profiles"> | string | null
    website?: StringNullableWithAggregatesFilter<"profiles"> | string | null
    phone?: StringNullableWithAggregatesFilter<"profiles"> | string | null
    location?: StringNullableWithAggregatesFilter<"profiles"> | string | null
  }

  export type workspacesWhereInput = {
    AND?: workspacesWhereInput | workspacesWhereInput[]
    OR?: workspacesWhereInput[]
    NOT?: workspacesWhereInput | workspacesWhereInput[]
    id?: UuidFilter<"workspaces"> | string
    created_at?: DateTimeNullableFilter<"workspaces"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"workspaces"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"workspaces"> | Date | string | null
    name?: StringNullableFilter<"workspaces"> | string | null
    users?: UsersListRelationFilter
    workspace_users?: Workspace_usersListRelationFilter
  }

  export type workspacesOrderByWithRelationInput = {
    id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    users?: usersOrderByRelationAggregateInput
    workspace_users?: workspace_usersOrderByRelationAggregateInput
  }

  export type workspacesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: workspacesWhereInput | workspacesWhereInput[]
    OR?: workspacesWhereInput[]
    NOT?: workspacesWhereInput | workspacesWhereInput[]
    created_at?: DateTimeNullableFilter<"workspaces"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"workspaces"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"workspaces"> | Date | string | null
    name?: StringNullableFilter<"workspaces"> | string | null
    users?: UsersListRelationFilter
    workspace_users?: Workspace_usersListRelationFilter
  }, "id">

  export type workspacesOrderByWithAggregationInput = {
    id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    _count?: workspacesCountOrderByAggregateInput
    _max?: workspacesMaxOrderByAggregateInput
    _min?: workspacesMinOrderByAggregateInput
  }

  export type workspacesScalarWhereWithAggregatesInput = {
    AND?: workspacesScalarWhereWithAggregatesInput | workspacesScalarWhereWithAggregatesInput[]
    OR?: workspacesScalarWhereWithAggregatesInput[]
    NOT?: workspacesScalarWhereWithAggregatesInput | workspacesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"workspaces"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"workspaces"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"workspaces"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"workspaces"> | Date | string | null
    name?: StringNullableWithAggregatesFilter<"workspaces"> | string | null
  }

  export type workspace_usersWhereInput = {
    AND?: workspace_usersWhereInput | workspace_usersWhereInput[]
    OR?: workspace_usersWhereInput[]
    NOT?: workspace_usersWhereInput | workspace_usersWhereInput[]
    workspace_id?: UuidFilter<"workspace_users"> | string
    user_id?: UuidFilter<"workspace_users"> | string
    created_at?: DateTimeNullableFilter<"workspace_users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"workspace_users"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"workspace_users"> | Date | string | null
    workspace?: XOR<WorkspacesScalarRelationFilter, workspacesWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type workspace_usersOrderByWithRelationInput = {
    workspace_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    workspace?: workspacesOrderByWithRelationInput
    user?: usersOrderByWithRelationInput
  }

  export type workspace_usersWhereUniqueInput = Prisma.AtLeast<{
    workspace_id?: string
    user_id?: string
    workspace_id_user_id?: workspace_usersWorkspace_idUser_idCompoundUniqueInput
    AND?: workspace_usersWhereInput | workspace_usersWhereInput[]
    OR?: workspace_usersWhereInput[]
    NOT?: workspace_usersWhereInput | workspace_usersWhereInput[]
    created_at?: DateTimeNullableFilter<"workspace_users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"workspace_users"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"workspace_users"> | Date | string | null
    workspace?: XOR<WorkspacesScalarRelationFilter, workspacesWhereInput>
    user?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "workspace_id_user_id" | "workspace_id" | "user_id">

  export type workspace_usersOrderByWithAggregationInput = {
    workspace_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    deleted_at?: SortOrderInput | SortOrder
    _count?: workspace_usersCountOrderByAggregateInput
    _max?: workspace_usersMaxOrderByAggregateInput
    _min?: workspace_usersMinOrderByAggregateInput
  }

  export type workspace_usersScalarWhereWithAggregatesInput = {
    AND?: workspace_usersScalarWhereWithAggregatesInput | workspace_usersScalarWhereWithAggregatesInput[]
    OR?: workspace_usersScalarWhereWithAggregatesInput[]
    NOT?: workspace_usersScalarWhereWithAggregatesInput | workspace_usersScalarWhereWithAggregatesInput[]
    workspace_id?: UuidWithAggregatesFilter<"workspace_users"> | string
    user_id?: UuidWithAggregatesFilter<"workspace_users"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"workspace_users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"workspace_users"> | Date | string | null
    deleted_at?: DateTimeNullableWithAggregatesFilter<"workspace_users"> | Date | string | null
  }

  export type post_commentsCreateInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    text?: string | null
    parrent_comment_id?: bigint | number | null
    creator?: usersCreateNestedOneWithoutPost_commentsInput
    posts?: postsCreateNestedOneWithoutPost_commentsInput
  }

  export type post_commentsUncheckedCreateInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    text?: string | null
    post_id?: string | null
    parrent_comment_id?: bigint | number | null
    created_by?: string | null
  }

  export type post_commentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    parrent_comment_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    creator?: usersUpdateOneWithoutPost_commentsNestedInput
    posts?: postsUpdateOneWithoutPost_commentsNestedInput
  }

  export type post_commentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    post_id?: NullableStringFieldUpdateOperationsInput | string | null
    parrent_comment_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type post_commentsCreateManyInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    text?: string | null
    post_id?: string | null
    parrent_comment_id?: bigint | number | null
    created_by?: string | null
  }

  export type post_commentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    parrent_comment_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type post_commentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    post_id?: NullableStringFieldUpdateOperationsInput | string | null
    parrent_comment_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type postsCreateInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    title?: string | null
    body?: string | null
    slug?: string | null
    photo_url?: string | null
    published?: boolean | null
    likes?: likesCreateNestedManyWithoutPostsInput
    post_comments?: post_commentsCreateNestedManyWithoutPostsInput
    creator?: usersCreateNestedOneWithoutPostsInput
    tags?: posts_to_tagsCreateNestedManyWithoutPostInput
  }

  export type postsUncheckedCreateInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    title?: string | null
    created_by?: string | null
    body?: string | null
    slug?: string | null
    photo_url?: string | null
    published?: boolean | null
    likes?: likesUncheckedCreateNestedManyWithoutPostsInput
    post_comments?: post_commentsUncheckedCreateNestedManyWithoutPostsInput
    tags?: posts_to_tagsUncheckedCreateNestedManyWithoutPostInput
  }

  export type postsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableBoolFieldUpdateOperationsInput | boolean | null
    likes?: likesUpdateManyWithoutPostsNestedInput
    post_comments?: post_commentsUpdateManyWithoutPostsNestedInput
    creator?: usersUpdateOneWithoutPostsNestedInput
    tags?: posts_to_tagsUpdateManyWithoutPostNestedInput
  }

  export type postsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableBoolFieldUpdateOperationsInput | boolean | null
    likes?: likesUncheckedUpdateManyWithoutPostsNestedInput
    post_comments?: post_commentsUncheckedUpdateManyWithoutPostsNestedInput
    tags?: posts_to_tagsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type postsCreateManyInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    title?: string | null
    created_by?: string | null
    body?: string | null
    slug?: string | null
    photo_url?: string | null
    published?: boolean | null
  }

  export type postsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type postsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type usersCreateInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    first_name?: string | null
    last_name?: string | null
    email: string
    password?: string | null
    image?: string | null
    is_super_admin?: boolean | null
    username?: string | null
    files?: filesCreateNestedManyWithoutUsersInput
    likes?: likesCreateNestedManyWithoutUsersInput
    post_comments?: post_commentsCreateNestedManyWithoutCreatorInput
    posts?: postsCreateNestedManyWithoutCreatorInput
    profiles?: profilesCreateNestedOneWithoutUsersInput
    workspaces?: workspacesCreateNestedManyWithoutUsersInput
    workspace_users?: workspace_usersCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    first_name?: string | null
    last_name?: string | null
    email: string
    password?: string | null
    image?: string | null
    is_super_admin?: boolean | null
    username?: string | null
    files?: filesUncheckedCreateNestedManyWithoutUsersInput
    likes?: likesUncheckedCreateNestedManyWithoutUsersInput
    post_comments?: post_commentsUncheckedCreateNestedManyWithoutCreatorInput
    posts?: postsUncheckedCreateNestedManyWithoutCreatorInput
    profiles?: profilesUncheckedCreateNestedOneWithoutUsersInput
    workspaces?: workspacesUncheckedCreateNestedManyWithoutUsersInput
    workspace_users?: workspace_usersUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    is_super_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    files?: filesUpdateManyWithoutUsersNestedInput
    likes?: likesUpdateManyWithoutUsersNestedInput
    post_comments?: post_commentsUpdateManyWithoutCreatorNestedInput
    posts?: postsUpdateManyWithoutCreatorNestedInput
    profiles?: profilesUpdateOneWithoutUsersNestedInput
    workspaces?: workspacesUpdateManyWithoutUsersNestedInput
    workspace_users?: workspace_usersUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    is_super_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    files?: filesUncheckedUpdateManyWithoutUsersNestedInput
    likes?: likesUncheckedUpdateManyWithoutUsersNestedInput
    post_comments?: post_commentsUncheckedUpdateManyWithoutCreatorNestedInput
    posts?: postsUncheckedUpdateManyWithoutCreatorNestedInput
    profiles?: profilesUncheckedUpdateOneWithoutUsersNestedInput
    workspaces?: workspacesUncheckedUpdateManyWithoutUsersNestedInput
    workspace_users?: workspace_usersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    first_name?: string | null
    last_name?: string | null
    email: string
    password?: string | null
    image?: string | null
    is_super_admin?: boolean | null
    username?: string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    is_super_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    is_super_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type posts_to_tagsCreateInput = {
    post: postsCreateNestedOneWithoutTagsInput
    tag: tagsCreateNestedOneWithoutPosts_to_tagsInput
  }

  export type posts_to_tagsUncheckedCreateInput = {
    post_id: string
    tag_id: number
  }

  export type posts_to_tagsUpdateInput = {
    post?: postsUpdateOneRequiredWithoutTagsNestedInput
    tag?: tagsUpdateOneRequiredWithoutPosts_to_tagsNestedInput
  }

  export type posts_to_tagsUncheckedUpdateInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type posts_to_tagsCreateManyInput = {
    post_id: string
    tag_id: number
  }

  export type posts_to_tagsUpdateManyMutationInput = {

  }

  export type posts_to_tagsUncheckedUpdateManyInput = {
    post_id?: StringFieldUpdateOperationsInput | string
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type tagsCreateInput = {
    name?: string | null
    created_at?: Date | string | null
    posts_to_tags?: posts_to_tagsCreateNestedManyWithoutTagInput
  }

  export type tagsUncheckedCreateInput = {
    id?: number
    name?: string | null
    created_at?: Date | string | null
    posts_to_tags?: posts_to_tagsUncheckedCreateNestedManyWithoutTagInput
  }

  export type tagsUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts_to_tags?: posts_to_tagsUpdateManyWithoutTagNestedInput
  }

  export type tagsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts_to_tags?: posts_to_tagsUncheckedUpdateManyWithoutTagNestedInput
  }

  export type tagsCreateManyInput = {
    id?: number
    name?: string | null
    created_at?: Date | string | null
  }

  export type tagsUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tagsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type filesCreateInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    name?: string | null
    path?: string | null
    size?: number | null
    type?: string | null
    users?: usersCreateNestedOneWithoutFilesInput
  }

  export type filesUncheckedCreateInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    name?: string | null
    path?: string | null
    size?: number | null
    type?: string | null
    created_by?: string | null
  }

  export type filesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneWithoutFilesNestedInput
  }

  export type filesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type filesCreateManyInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    name?: string | null
    path?: string | null
    size?: number | null
    type?: string | null
    created_by?: string | null
  }

  export type filesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type filesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type likesCreateInput = {
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutLikesInput
    posts?: postsCreateNestedOneWithoutLikesInput
  }

  export type likesUncheckedCreateInput = {
    id?: number
    created_at?: Date | string | null
    post_id?: string | null
    created_by?: string | null
  }

  export type likesUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutLikesNestedInput
    posts?: postsUpdateOneWithoutLikesNestedInput
  }

  export type likesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    post_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type likesCreateManyInput = {
    id?: number
    created_at?: Date | string | null
    post_id?: string | null
    created_by?: string | null
  }

  export type likesUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type likesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    post_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profilesCreateInput = {
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bio?: string | null
    website?: string | null
    phone?: string | null
    location?: string | null
    users: usersCreateNestedOneWithoutProfilesInput
  }

  export type profilesUncheckedCreateInput = {
    id?: number
    user_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bio?: string | null
    website?: string | null
    phone?: string | null
    location?: string | null
  }

  export type profilesUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneRequiredWithoutProfilesNestedInput
  }

  export type profilesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profilesCreateManyInput = {
    id?: number
    user_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bio?: string | null
    website?: string | null
    phone?: string | null
    location?: string | null
  }

  export type profilesUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profilesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type workspacesCreateInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    name?: string | null
    users?: usersCreateNestedManyWithoutWorkspacesInput
    workspace_users?: workspace_usersCreateNestedManyWithoutWorkspaceInput
  }

  export type workspacesUncheckedCreateInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    name?: string | null
    users?: usersUncheckedCreateNestedManyWithoutWorkspacesInput
    workspace_users?: workspace_usersUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type workspacesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateManyWithoutWorkspacesNestedInput
    workspace_users?: workspace_usersUpdateManyWithoutWorkspaceNestedInput
  }

  export type workspacesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUncheckedUpdateManyWithoutWorkspacesNestedInput
    workspace_users?: workspace_usersUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type workspacesCreateManyInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    name?: string | null
  }

  export type workspacesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type workspacesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type workspace_usersCreateInput = {
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    workspace: workspacesCreateNestedOneWithoutWorkspace_usersInput
    user: usersCreateNestedOneWithoutWorkspace_usersInput
  }

  export type workspace_usersUncheckedCreateInput = {
    workspace_id: string
    user_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type workspace_usersUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspace?: workspacesUpdateOneRequiredWithoutWorkspace_usersNestedInput
    user?: usersUpdateOneRequiredWithoutWorkspace_usersNestedInput
  }

  export type workspace_usersUncheckedUpdateInput = {
    workspace_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workspace_usersCreateManyInput = {
    workspace_id: string
    user_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type workspace_usersUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workspace_usersUncheckedUpdateManyInput = {
    workspace_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type PostsNullableScalarRelationFilter = {
    is?: postsWhereInput | null
    isNot?: postsWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type post_commentsCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    text?: SortOrder
    post_id?: SortOrder
    parrent_comment_id?: SortOrder
    created_by?: SortOrder
  }

  export type post_commentsAvgOrderByAggregateInput = {
    parrent_comment_id?: SortOrder
  }

  export type post_commentsMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    text?: SortOrder
    post_id?: SortOrder
    parrent_comment_id?: SortOrder
    created_by?: SortOrder
  }

  export type post_commentsMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    text?: SortOrder
    post_id?: SortOrder
    parrent_comment_id?: SortOrder
    created_by?: SortOrder
  }

  export type post_commentsSumOrderByAggregateInput = {
    parrent_comment_id?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type LikesListRelationFilter = {
    every?: likesWhereInput
    some?: likesWhereInput
    none?: likesWhereInput
  }

  export type Post_commentsListRelationFilter = {
    every?: post_commentsWhereInput
    some?: post_commentsWhereInput
    none?: post_commentsWhereInput
  }

  export type Posts_to_tagsListRelationFilter = {
    every?: posts_to_tagsWhereInput
    some?: posts_to_tagsWhereInput
    none?: posts_to_tagsWhereInput
  }

  export type likesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type post_commentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type posts_to_tagsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type postsCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    title?: SortOrder
    created_by?: SortOrder
    body?: SortOrder
    slug?: SortOrder
    photo_url?: SortOrder
    published?: SortOrder
  }

  export type postsMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    title?: SortOrder
    created_by?: SortOrder
    body?: SortOrder
    slug?: SortOrder
    photo_url?: SortOrder
    published?: SortOrder
  }

  export type postsMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    title?: SortOrder
    created_by?: SortOrder
    body?: SortOrder
    slug?: SortOrder
    photo_url?: SortOrder
    published?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type FilesListRelationFilter = {
    every?: filesWhereInput
    some?: filesWhereInput
    none?: filesWhereInput
  }

  export type PostsListRelationFilter = {
    every?: postsWhereInput
    some?: postsWhereInput
    none?: postsWhereInput
  }

  export type ProfilesNullableScalarRelationFilter = {
    is?: profilesWhereInput | null
    isNot?: profilesWhereInput | null
  }

  export type WorkspacesListRelationFilter = {
    every?: workspacesWhereInput
    some?: workspacesWhereInput
    none?: workspacesWhereInput
  }

  export type Workspace_usersListRelationFilter = {
    every?: workspace_usersWhereInput
    some?: workspace_usersWhereInput
    none?: workspace_usersWhereInput
  }

  export type filesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type postsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type workspacesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type workspace_usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    is_super_admin?: SortOrder
    username?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    is_super_admin?: SortOrder
    username?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    is_super_admin?: SortOrder
    username?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type PostsScalarRelationFilter = {
    is?: postsWhereInput
    isNot?: postsWhereInput
  }

  export type TagsScalarRelationFilter = {
    is?: tagsWhereInput
    isNot?: tagsWhereInput
  }

  export type posts_to_tagsPost_idTag_idCompoundUniqueInput = {
    post_id: string
    tag_id: number
  }

  export type posts_to_tagsCountOrderByAggregateInput = {
    post_id?: SortOrder
    tag_id?: SortOrder
  }

  export type posts_to_tagsAvgOrderByAggregateInput = {
    tag_id?: SortOrder
  }

  export type posts_to_tagsMaxOrderByAggregateInput = {
    post_id?: SortOrder
    tag_id?: SortOrder
  }

  export type posts_to_tagsMinOrderByAggregateInput = {
    post_id?: SortOrder
    tag_id?: SortOrder
  }

  export type posts_to_tagsSumOrderByAggregateInput = {
    tag_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type tagsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type tagsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tagsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type tagsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
  }

  export type tagsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type filesCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
    path?: SortOrder
    size?: SortOrder
    type?: SortOrder
    created_by?: SortOrder
  }

  export type filesAvgOrderByAggregateInput = {
    size?: SortOrder
  }

  export type filesMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
    path?: SortOrder
    size?: SortOrder
    type?: SortOrder
    created_by?: SortOrder
  }

  export type filesMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
    path?: SortOrder
    size?: SortOrder
    type?: SortOrder
    created_by?: SortOrder
  }

  export type filesSumOrderByAggregateInput = {
    size?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type likesPost_idCreated_byCompoundUniqueInput = {
    post_id: string
    created_by: string
  }

  export type likesCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    post_id?: SortOrder
    created_by?: SortOrder
  }

  export type likesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type likesMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    post_id?: SortOrder
    created_by?: SortOrder
  }

  export type likesMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    post_id?: SortOrder
    created_by?: SortOrder
  }

  export type likesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type profilesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    bio?: SortOrder
    website?: SortOrder
    phone?: SortOrder
    location?: SortOrder
  }

  export type profilesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type profilesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    bio?: SortOrder
    website?: SortOrder
    phone?: SortOrder
    location?: SortOrder
  }

  export type profilesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    bio?: SortOrder
    website?: SortOrder
    phone?: SortOrder
    location?: SortOrder
  }

  export type profilesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsersListRelationFilter = {
    every?: usersWhereInput
    some?: usersWhereInput
    none?: usersWhereInput
  }

  export type usersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type workspacesCountOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
  }

  export type workspacesMaxOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
  }

  export type workspacesMinOrderByAggregateInput = {
    id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
    name?: SortOrder
  }

  export type WorkspacesScalarRelationFilter = {
    is?: workspacesWhereInput
    isNot?: workspacesWhereInput
  }

  export type workspace_usersWorkspace_idUser_idCompoundUniqueInput = {
    workspace_id: string
    user_id: string
  }

  export type workspace_usersCountOrderByAggregateInput = {
    workspace_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type workspace_usersMaxOrderByAggregateInput = {
    workspace_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type workspace_usersMinOrderByAggregateInput = {
    workspace_id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    deleted_at?: SortOrder
  }

  export type usersCreateNestedOneWithoutPost_commentsInput = {
    create?: XOR<usersCreateWithoutPost_commentsInput, usersUncheckedCreateWithoutPost_commentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPost_commentsInput
    connect?: usersWhereUniqueInput
  }

  export type postsCreateNestedOneWithoutPost_commentsInput = {
    create?: XOR<postsCreateWithoutPost_commentsInput, postsUncheckedCreateWithoutPost_commentsInput>
    connectOrCreate?: postsCreateOrConnectWithoutPost_commentsInput
    connect?: postsWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type usersUpdateOneWithoutPost_commentsNestedInput = {
    create?: XOR<usersCreateWithoutPost_commentsInput, usersUncheckedCreateWithoutPost_commentsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPost_commentsInput
    upsert?: usersUpsertWithoutPost_commentsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPost_commentsInput, usersUpdateWithoutPost_commentsInput>, usersUncheckedUpdateWithoutPost_commentsInput>
  }

  export type postsUpdateOneWithoutPost_commentsNestedInput = {
    create?: XOR<postsCreateWithoutPost_commentsInput, postsUncheckedCreateWithoutPost_commentsInput>
    connectOrCreate?: postsCreateOrConnectWithoutPost_commentsInput
    upsert?: postsUpsertWithoutPost_commentsInput
    disconnect?: postsWhereInput | boolean
    delete?: postsWhereInput | boolean
    connect?: postsWhereUniqueInput
    update?: XOR<XOR<postsUpdateToOneWithWhereWithoutPost_commentsInput, postsUpdateWithoutPost_commentsInput>, postsUncheckedUpdateWithoutPost_commentsInput>
  }

  export type likesCreateNestedManyWithoutPostsInput = {
    create?: XOR<likesCreateWithoutPostsInput, likesUncheckedCreateWithoutPostsInput> | likesCreateWithoutPostsInput[] | likesUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: likesCreateOrConnectWithoutPostsInput | likesCreateOrConnectWithoutPostsInput[]
    createMany?: likesCreateManyPostsInputEnvelope
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
  }

  export type post_commentsCreateNestedManyWithoutPostsInput = {
    create?: XOR<post_commentsCreateWithoutPostsInput, post_commentsUncheckedCreateWithoutPostsInput> | post_commentsCreateWithoutPostsInput[] | post_commentsUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: post_commentsCreateOrConnectWithoutPostsInput | post_commentsCreateOrConnectWithoutPostsInput[]
    createMany?: post_commentsCreateManyPostsInputEnvelope
    connect?: post_commentsWhereUniqueInput | post_commentsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutPostsInput = {
    create?: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPostsInput
    connect?: usersWhereUniqueInput
  }

  export type posts_to_tagsCreateNestedManyWithoutPostInput = {
    create?: XOR<posts_to_tagsCreateWithoutPostInput, posts_to_tagsUncheckedCreateWithoutPostInput> | posts_to_tagsCreateWithoutPostInput[] | posts_to_tagsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: posts_to_tagsCreateOrConnectWithoutPostInput | posts_to_tagsCreateOrConnectWithoutPostInput[]
    createMany?: posts_to_tagsCreateManyPostInputEnvelope
    connect?: posts_to_tagsWhereUniqueInput | posts_to_tagsWhereUniqueInput[]
  }

  export type likesUncheckedCreateNestedManyWithoutPostsInput = {
    create?: XOR<likesCreateWithoutPostsInput, likesUncheckedCreateWithoutPostsInput> | likesCreateWithoutPostsInput[] | likesUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: likesCreateOrConnectWithoutPostsInput | likesCreateOrConnectWithoutPostsInput[]
    createMany?: likesCreateManyPostsInputEnvelope
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
  }

  export type post_commentsUncheckedCreateNestedManyWithoutPostsInput = {
    create?: XOR<post_commentsCreateWithoutPostsInput, post_commentsUncheckedCreateWithoutPostsInput> | post_commentsCreateWithoutPostsInput[] | post_commentsUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: post_commentsCreateOrConnectWithoutPostsInput | post_commentsCreateOrConnectWithoutPostsInput[]
    createMany?: post_commentsCreateManyPostsInputEnvelope
    connect?: post_commentsWhereUniqueInput | post_commentsWhereUniqueInput[]
  }

  export type posts_to_tagsUncheckedCreateNestedManyWithoutPostInput = {
    create?: XOR<posts_to_tagsCreateWithoutPostInput, posts_to_tagsUncheckedCreateWithoutPostInput> | posts_to_tagsCreateWithoutPostInput[] | posts_to_tagsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: posts_to_tagsCreateOrConnectWithoutPostInput | posts_to_tagsCreateOrConnectWithoutPostInput[]
    createMany?: posts_to_tagsCreateManyPostInputEnvelope
    connect?: posts_to_tagsWhereUniqueInput | posts_to_tagsWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type likesUpdateManyWithoutPostsNestedInput = {
    create?: XOR<likesCreateWithoutPostsInput, likesUncheckedCreateWithoutPostsInput> | likesCreateWithoutPostsInput[] | likesUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: likesCreateOrConnectWithoutPostsInput | likesCreateOrConnectWithoutPostsInput[]
    upsert?: likesUpsertWithWhereUniqueWithoutPostsInput | likesUpsertWithWhereUniqueWithoutPostsInput[]
    createMany?: likesCreateManyPostsInputEnvelope
    set?: likesWhereUniqueInput | likesWhereUniqueInput[]
    disconnect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    delete?: likesWhereUniqueInput | likesWhereUniqueInput[]
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    update?: likesUpdateWithWhereUniqueWithoutPostsInput | likesUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: likesUpdateManyWithWhereWithoutPostsInput | likesUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: likesScalarWhereInput | likesScalarWhereInput[]
  }

  export type post_commentsUpdateManyWithoutPostsNestedInput = {
    create?: XOR<post_commentsCreateWithoutPostsInput, post_commentsUncheckedCreateWithoutPostsInput> | post_commentsCreateWithoutPostsInput[] | post_commentsUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: post_commentsCreateOrConnectWithoutPostsInput | post_commentsCreateOrConnectWithoutPostsInput[]
    upsert?: post_commentsUpsertWithWhereUniqueWithoutPostsInput | post_commentsUpsertWithWhereUniqueWithoutPostsInput[]
    createMany?: post_commentsCreateManyPostsInputEnvelope
    set?: post_commentsWhereUniqueInput | post_commentsWhereUniqueInput[]
    disconnect?: post_commentsWhereUniqueInput | post_commentsWhereUniqueInput[]
    delete?: post_commentsWhereUniqueInput | post_commentsWhereUniqueInput[]
    connect?: post_commentsWhereUniqueInput | post_commentsWhereUniqueInput[]
    update?: post_commentsUpdateWithWhereUniqueWithoutPostsInput | post_commentsUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: post_commentsUpdateManyWithWhereWithoutPostsInput | post_commentsUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: post_commentsScalarWhereInput | post_commentsScalarWhereInput[]
  }

  export type usersUpdateOneWithoutPostsNestedInput = {
    create?: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
    connectOrCreate?: usersCreateOrConnectWithoutPostsInput
    upsert?: usersUpsertWithoutPostsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutPostsInput, usersUpdateWithoutPostsInput>, usersUncheckedUpdateWithoutPostsInput>
  }

  export type posts_to_tagsUpdateManyWithoutPostNestedInput = {
    create?: XOR<posts_to_tagsCreateWithoutPostInput, posts_to_tagsUncheckedCreateWithoutPostInput> | posts_to_tagsCreateWithoutPostInput[] | posts_to_tagsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: posts_to_tagsCreateOrConnectWithoutPostInput | posts_to_tagsCreateOrConnectWithoutPostInput[]
    upsert?: posts_to_tagsUpsertWithWhereUniqueWithoutPostInput | posts_to_tagsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: posts_to_tagsCreateManyPostInputEnvelope
    set?: posts_to_tagsWhereUniqueInput | posts_to_tagsWhereUniqueInput[]
    disconnect?: posts_to_tagsWhereUniqueInput | posts_to_tagsWhereUniqueInput[]
    delete?: posts_to_tagsWhereUniqueInput | posts_to_tagsWhereUniqueInput[]
    connect?: posts_to_tagsWhereUniqueInput | posts_to_tagsWhereUniqueInput[]
    update?: posts_to_tagsUpdateWithWhereUniqueWithoutPostInput | posts_to_tagsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: posts_to_tagsUpdateManyWithWhereWithoutPostInput | posts_to_tagsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: posts_to_tagsScalarWhereInput | posts_to_tagsScalarWhereInput[]
  }

  export type likesUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: XOR<likesCreateWithoutPostsInput, likesUncheckedCreateWithoutPostsInput> | likesCreateWithoutPostsInput[] | likesUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: likesCreateOrConnectWithoutPostsInput | likesCreateOrConnectWithoutPostsInput[]
    upsert?: likesUpsertWithWhereUniqueWithoutPostsInput | likesUpsertWithWhereUniqueWithoutPostsInput[]
    createMany?: likesCreateManyPostsInputEnvelope
    set?: likesWhereUniqueInput | likesWhereUniqueInput[]
    disconnect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    delete?: likesWhereUniqueInput | likesWhereUniqueInput[]
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    update?: likesUpdateWithWhereUniqueWithoutPostsInput | likesUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: likesUpdateManyWithWhereWithoutPostsInput | likesUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: likesScalarWhereInput | likesScalarWhereInput[]
  }

  export type post_commentsUncheckedUpdateManyWithoutPostsNestedInput = {
    create?: XOR<post_commentsCreateWithoutPostsInput, post_commentsUncheckedCreateWithoutPostsInput> | post_commentsCreateWithoutPostsInput[] | post_commentsUncheckedCreateWithoutPostsInput[]
    connectOrCreate?: post_commentsCreateOrConnectWithoutPostsInput | post_commentsCreateOrConnectWithoutPostsInput[]
    upsert?: post_commentsUpsertWithWhereUniqueWithoutPostsInput | post_commentsUpsertWithWhereUniqueWithoutPostsInput[]
    createMany?: post_commentsCreateManyPostsInputEnvelope
    set?: post_commentsWhereUniqueInput | post_commentsWhereUniqueInput[]
    disconnect?: post_commentsWhereUniqueInput | post_commentsWhereUniqueInput[]
    delete?: post_commentsWhereUniqueInput | post_commentsWhereUniqueInput[]
    connect?: post_commentsWhereUniqueInput | post_commentsWhereUniqueInput[]
    update?: post_commentsUpdateWithWhereUniqueWithoutPostsInput | post_commentsUpdateWithWhereUniqueWithoutPostsInput[]
    updateMany?: post_commentsUpdateManyWithWhereWithoutPostsInput | post_commentsUpdateManyWithWhereWithoutPostsInput[]
    deleteMany?: post_commentsScalarWhereInput | post_commentsScalarWhereInput[]
  }

  export type posts_to_tagsUncheckedUpdateManyWithoutPostNestedInput = {
    create?: XOR<posts_to_tagsCreateWithoutPostInput, posts_to_tagsUncheckedCreateWithoutPostInput> | posts_to_tagsCreateWithoutPostInput[] | posts_to_tagsUncheckedCreateWithoutPostInput[]
    connectOrCreate?: posts_to_tagsCreateOrConnectWithoutPostInput | posts_to_tagsCreateOrConnectWithoutPostInput[]
    upsert?: posts_to_tagsUpsertWithWhereUniqueWithoutPostInput | posts_to_tagsUpsertWithWhereUniqueWithoutPostInput[]
    createMany?: posts_to_tagsCreateManyPostInputEnvelope
    set?: posts_to_tagsWhereUniqueInput | posts_to_tagsWhereUniqueInput[]
    disconnect?: posts_to_tagsWhereUniqueInput | posts_to_tagsWhereUniqueInput[]
    delete?: posts_to_tagsWhereUniqueInput | posts_to_tagsWhereUniqueInput[]
    connect?: posts_to_tagsWhereUniqueInput | posts_to_tagsWhereUniqueInput[]
    update?: posts_to_tagsUpdateWithWhereUniqueWithoutPostInput | posts_to_tagsUpdateWithWhereUniqueWithoutPostInput[]
    updateMany?: posts_to_tagsUpdateManyWithWhereWithoutPostInput | posts_to_tagsUpdateManyWithWhereWithoutPostInput[]
    deleteMany?: posts_to_tagsScalarWhereInput | posts_to_tagsScalarWhereInput[]
  }

  export type filesCreateNestedManyWithoutUsersInput = {
    create?: XOR<filesCreateWithoutUsersInput, filesUncheckedCreateWithoutUsersInput> | filesCreateWithoutUsersInput[] | filesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: filesCreateOrConnectWithoutUsersInput | filesCreateOrConnectWithoutUsersInput[]
    createMany?: filesCreateManyUsersInputEnvelope
    connect?: filesWhereUniqueInput | filesWhereUniqueInput[]
  }

  export type likesCreateNestedManyWithoutUsersInput = {
    create?: XOR<likesCreateWithoutUsersInput, likesUncheckedCreateWithoutUsersInput> | likesCreateWithoutUsersInput[] | likesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: likesCreateOrConnectWithoutUsersInput | likesCreateOrConnectWithoutUsersInput[]
    createMany?: likesCreateManyUsersInputEnvelope
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
  }

  export type post_commentsCreateNestedManyWithoutCreatorInput = {
    create?: XOR<post_commentsCreateWithoutCreatorInput, post_commentsUncheckedCreateWithoutCreatorInput> | post_commentsCreateWithoutCreatorInput[] | post_commentsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: post_commentsCreateOrConnectWithoutCreatorInput | post_commentsCreateOrConnectWithoutCreatorInput[]
    createMany?: post_commentsCreateManyCreatorInputEnvelope
    connect?: post_commentsWhereUniqueInput | post_commentsWhereUniqueInput[]
  }

  export type postsCreateNestedManyWithoutCreatorInput = {
    create?: XOR<postsCreateWithoutCreatorInput, postsUncheckedCreateWithoutCreatorInput> | postsCreateWithoutCreatorInput[] | postsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: postsCreateOrConnectWithoutCreatorInput | postsCreateOrConnectWithoutCreatorInput[]
    createMany?: postsCreateManyCreatorInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type profilesCreateNestedOneWithoutUsersInput = {
    create?: XOR<profilesCreateWithoutUsersInput, profilesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: profilesCreateOrConnectWithoutUsersInput
    connect?: profilesWhereUniqueInput
  }

  export type workspacesCreateNestedManyWithoutUsersInput = {
    create?: XOR<workspacesCreateWithoutUsersInput, workspacesUncheckedCreateWithoutUsersInput> | workspacesCreateWithoutUsersInput[] | workspacesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: workspacesCreateOrConnectWithoutUsersInput | workspacesCreateOrConnectWithoutUsersInput[]
    connect?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
  }

  export type workspace_usersCreateNestedManyWithoutUserInput = {
    create?: XOR<workspace_usersCreateWithoutUserInput, workspace_usersUncheckedCreateWithoutUserInput> | workspace_usersCreateWithoutUserInput[] | workspace_usersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: workspace_usersCreateOrConnectWithoutUserInput | workspace_usersCreateOrConnectWithoutUserInput[]
    createMany?: workspace_usersCreateManyUserInputEnvelope
    connect?: workspace_usersWhereUniqueInput | workspace_usersWhereUniqueInput[]
  }

  export type filesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<filesCreateWithoutUsersInput, filesUncheckedCreateWithoutUsersInput> | filesCreateWithoutUsersInput[] | filesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: filesCreateOrConnectWithoutUsersInput | filesCreateOrConnectWithoutUsersInput[]
    createMany?: filesCreateManyUsersInputEnvelope
    connect?: filesWhereUniqueInput | filesWhereUniqueInput[]
  }

  export type likesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<likesCreateWithoutUsersInput, likesUncheckedCreateWithoutUsersInput> | likesCreateWithoutUsersInput[] | likesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: likesCreateOrConnectWithoutUsersInput | likesCreateOrConnectWithoutUsersInput[]
    createMany?: likesCreateManyUsersInputEnvelope
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
  }

  export type post_commentsUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<post_commentsCreateWithoutCreatorInput, post_commentsUncheckedCreateWithoutCreatorInput> | post_commentsCreateWithoutCreatorInput[] | post_commentsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: post_commentsCreateOrConnectWithoutCreatorInput | post_commentsCreateOrConnectWithoutCreatorInput[]
    createMany?: post_commentsCreateManyCreatorInputEnvelope
    connect?: post_commentsWhereUniqueInput | post_commentsWhereUniqueInput[]
  }

  export type postsUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<postsCreateWithoutCreatorInput, postsUncheckedCreateWithoutCreatorInput> | postsCreateWithoutCreatorInput[] | postsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: postsCreateOrConnectWithoutCreatorInput | postsCreateOrConnectWithoutCreatorInput[]
    createMany?: postsCreateManyCreatorInputEnvelope
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
  }

  export type profilesUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<profilesCreateWithoutUsersInput, profilesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: profilesCreateOrConnectWithoutUsersInput
    connect?: profilesWhereUniqueInput
  }

  export type workspacesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<workspacesCreateWithoutUsersInput, workspacesUncheckedCreateWithoutUsersInput> | workspacesCreateWithoutUsersInput[] | workspacesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: workspacesCreateOrConnectWithoutUsersInput | workspacesCreateOrConnectWithoutUsersInput[]
    connect?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
  }

  export type workspace_usersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<workspace_usersCreateWithoutUserInput, workspace_usersUncheckedCreateWithoutUserInput> | workspace_usersCreateWithoutUserInput[] | workspace_usersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: workspace_usersCreateOrConnectWithoutUserInput | workspace_usersCreateOrConnectWithoutUserInput[]
    createMany?: workspace_usersCreateManyUserInputEnvelope
    connect?: workspace_usersWhereUniqueInput | workspace_usersWhereUniqueInput[]
  }

  export type filesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<filesCreateWithoutUsersInput, filesUncheckedCreateWithoutUsersInput> | filesCreateWithoutUsersInput[] | filesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: filesCreateOrConnectWithoutUsersInput | filesCreateOrConnectWithoutUsersInput[]
    upsert?: filesUpsertWithWhereUniqueWithoutUsersInput | filesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: filesCreateManyUsersInputEnvelope
    set?: filesWhereUniqueInput | filesWhereUniqueInput[]
    disconnect?: filesWhereUniqueInput | filesWhereUniqueInput[]
    delete?: filesWhereUniqueInput | filesWhereUniqueInput[]
    connect?: filesWhereUniqueInput | filesWhereUniqueInput[]
    update?: filesUpdateWithWhereUniqueWithoutUsersInput | filesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: filesUpdateManyWithWhereWithoutUsersInput | filesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: filesScalarWhereInput | filesScalarWhereInput[]
  }

  export type likesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<likesCreateWithoutUsersInput, likesUncheckedCreateWithoutUsersInput> | likesCreateWithoutUsersInput[] | likesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: likesCreateOrConnectWithoutUsersInput | likesCreateOrConnectWithoutUsersInput[]
    upsert?: likesUpsertWithWhereUniqueWithoutUsersInput | likesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: likesCreateManyUsersInputEnvelope
    set?: likesWhereUniqueInput | likesWhereUniqueInput[]
    disconnect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    delete?: likesWhereUniqueInput | likesWhereUniqueInput[]
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    update?: likesUpdateWithWhereUniqueWithoutUsersInput | likesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: likesUpdateManyWithWhereWithoutUsersInput | likesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: likesScalarWhereInput | likesScalarWhereInput[]
  }

  export type post_commentsUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<post_commentsCreateWithoutCreatorInput, post_commentsUncheckedCreateWithoutCreatorInput> | post_commentsCreateWithoutCreatorInput[] | post_commentsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: post_commentsCreateOrConnectWithoutCreatorInput | post_commentsCreateOrConnectWithoutCreatorInput[]
    upsert?: post_commentsUpsertWithWhereUniqueWithoutCreatorInput | post_commentsUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: post_commentsCreateManyCreatorInputEnvelope
    set?: post_commentsWhereUniqueInput | post_commentsWhereUniqueInput[]
    disconnect?: post_commentsWhereUniqueInput | post_commentsWhereUniqueInput[]
    delete?: post_commentsWhereUniqueInput | post_commentsWhereUniqueInput[]
    connect?: post_commentsWhereUniqueInput | post_commentsWhereUniqueInput[]
    update?: post_commentsUpdateWithWhereUniqueWithoutCreatorInput | post_commentsUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: post_commentsUpdateManyWithWhereWithoutCreatorInput | post_commentsUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: post_commentsScalarWhereInput | post_commentsScalarWhereInput[]
  }

  export type postsUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<postsCreateWithoutCreatorInput, postsUncheckedCreateWithoutCreatorInput> | postsCreateWithoutCreatorInput[] | postsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: postsCreateOrConnectWithoutCreatorInput | postsCreateOrConnectWithoutCreatorInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutCreatorInput | postsUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: postsCreateManyCreatorInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutCreatorInput | postsUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: postsUpdateManyWithWhereWithoutCreatorInput | postsUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type profilesUpdateOneWithoutUsersNestedInput = {
    create?: XOR<profilesCreateWithoutUsersInput, profilesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: profilesCreateOrConnectWithoutUsersInput
    upsert?: profilesUpsertWithoutUsersInput
    disconnect?: profilesWhereInput | boolean
    delete?: profilesWhereInput | boolean
    connect?: profilesWhereUniqueInput
    update?: XOR<XOR<profilesUpdateToOneWithWhereWithoutUsersInput, profilesUpdateWithoutUsersInput>, profilesUncheckedUpdateWithoutUsersInput>
  }

  export type workspacesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<workspacesCreateWithoutUsersInput, workspacesUncheckedCreateWithoutUsersInput> | workspacesCreateWithoutUsersInput[] | workspacesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: workspacesCreateOrConnectWithoutUsersInput | workspacesCreateOrConnectWithoutUsersInput[]
    upsert?: workspacesUpsertWithWhereUniqueWithoutUsersInput | workspacesUpsertWithWhereUniqueWithoutUsersInput[]
    set?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
    disconnect?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
    delete?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
    connect?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
    update?: workspacesUpdateWithWhereUniqueWithoutUsersInput | workspacesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: workspacesUpdateManyWithWhereWithoutUsersInput | workspacesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: workspacesScalarWhereInput | workspacesScalarWhereInput[]
  }

  export type workspace_usersUpdateManyWithoutUserNestedInput = {
    create?: XOR<workspace_usersCreateWithoutUserInput, workspace_usersUncheckedCreateWithoutUserInput> | workspace_usersCreateWithoutUserInput[] | workspace_usersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: workspace_usersCreateOrConnectWithoutUserInput | workspace_usersCreateOrConnectWithoutUserInput[]
    upsert?: workspace_usersUpsertWithWhereUniqueWithoutUserInput | workspace_usersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: workspace_usersCreateManyUserInputEnvelope
    set?: workspace_usersWhereUniqueInput | workspace_usersWhereUniqueInput[]
    disconnect?: workspace_usersWhereUniqueInput | workspace_usersWhereUniqueInput[]
    delete?: workspace_usersWhereUniqueInput | workspace_usersWhereUniqueInput[]
    connect?: workspace_usersWhereUniqueInput | workspace_usersWhereUniqueInput[]
    update?: workspace_usersUpdateWithWhereUniqueWithoutUserInput | workspace_usersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: workspace_usersUpdateManyWithWhereWithoutUserInput | workspace_usersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: workspace_usersScalarWhereInput | workspace_usersScalarWhereInput[]
  }

  export type filesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<filesCreateWithoutUsersInput, filesUncheckedCreateWithoutUsersInput> | filesCreateWithoutUsersInput[] | filesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: filesCreateOrConnectWithoutUsersInput | filesCreateOrConnectWithoutUsersInput[]
    upsert?: filesUpsertWithWhereUniqueWithoutUsersInput | filesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: filesCreateManyUsersInputEnvelope
    set?: filesWhereUniqueInput | filesWhereUniqueInput[]
    disconnect?: filesWhereUniqueInput | filesWhereUniqueInput[]
    delete?: filesWhereUniqueInput | filesWhereUniqueInput[]
    connect?: filesWhereUniqueInput | filesWhereUniqueInput[]
    update?: filesUpdateWithWhereUniqueWithoutUsersInput | filesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: filesUpdateManyWithWhereWithoutUsersInput | filesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: filesScalarWhereInput | filesScalarWhereInput[]
  }

  export type likesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<likesCreateWithoutUsersInput, likesUncheckedCreateWithoutUsersInput> | likesCreateWithoutUsersInput[] | likesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: likesCreateOrConnectWithoutUsersInput | likesCreateOrConnectWithoutUsersInput[]
    upsert?: likesUpsertWithWhereUniqueWithoutUsersInput | likesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: likesCreateManyUsersInputEnvelope
    set?: likesWhereUniqueInput | likesWhereUniqueInput[]
    disconnect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    delete?: likesWhereUniqueInput | likesWhereUniqueInput[]
    connect?: likesWhereUniqueInput | likesWhereUniqueInput[]
    update?: likesUpdateWithWhereUniqueWithoutUsersInput | likesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: likesUpdateManyWithWhereWithoutUsersInput | likesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: likesScalarWhereInput | likesScalarWhereInput[]
  }

  export type post_commentsUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<post_commentsCreateWithoutCreatorInput, post_commentsUncheckedCreateWithoutCreatorInput> | post_commentsCreateWithoutCreatorInput[] | post_commentsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: post_commentsCreateOrConnectWithoutCreatorInput | post_commentsCreateOrConnectWithoutCreatorInput[]
    upsert?: post_commentsUpsertWithWhereUniqueWithoutCreatorInput | post_commentsUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: post_commentsCreateManyCreatorInputEnvelope
    set?: post_commentsWhereUniqueInput | post_commentsWhereUniqueInput[]
    disconnect?: post_commentsWhereUniqueInput | post_commentsWhereUniqueInput[]
    delete?: post_commentsWhereUniqueInput | post_commentsWhereUniqueInput[]
    connect?: post_commentsWhereUniqueInput | post_commentsWhereUniqueInput[]
    update?: post_commentsUpdateWithWhereUniqueWithoutCreatorInput | post_commentsUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: post_commentsUpdateManyWithWhereWithoutCreatorInput | post_commentsUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: post_commentsScalarWhereInput | post_commentsScalarWhereInput[]
  }

  export type postsUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<postsCreateWithoutCreatorInput, postsUncheckedCreateWithoutCreatorInput> | postsCreateWithoutCreatorInput[] | postsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: postsCreateOrConnectWithoutCreatorInput | postsCreateOrConnectWithoutCreatorInput[]
    upsert?: postsUpsertWithWhereUniqueWithoutCreatorInput | postsUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: postsCreateManyCreatorInputEnvelope
    set?: postsWhereUniqueInput | postsWhereUniqueInput[]
    disconnect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    delete?: postsWhereUniqueInput | postsWhereUniqueInput[]
    connect?: postsWhereUniqueInput | postsWhereUniqueInput[]
    update?: postsUpdateWithWhereUniqueWithoutCreatorInput | postsUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: postsUpdateManyWithWhereWithoutCreatorInput | postsUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: postsScalarWhereInput | postsScalarWhereInput[]
  }

  export type profilesUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<profilesCreateWithoutUsersInput, profilesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: profilesCreateOrConnectWithoutUsersInput
    upsert?: profilesUpsertWithoutUsersInput
    disconnect?: profilesWhereInput | boolean
    delete?: profilesWhereInput | boolean
    connect?: profilesWhereUniqueInput
    update?: XOR<XOR<profilesUpdateToOneWithWhereWithoutUsersInput, profilesUpdateWithoutUsersInput>, profilesUncheckedUpdateWithoutUsersInput>
  }

  export type workspacesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<workspacesCreateWithoutUsersInput, workspacesUncheckedCreateWithoutUsersInput> | workspacesCreateWithoutUsersInput[] | workspacesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: workspacesCreateOrConnectWithoutUsersInput | workspacesCreateOrConnectWithoutUsersInput[]
    upsert?: workspacesUpsertWithWhereUniqueWithoutUsersInput | workspacesUpsertWithWhereUniqueWithoutUsersInput[]
    set?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
    disconnect?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
    delete?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
    connect?: workspacesWhereUniqueInput | workspacesWhereUniqueInput[]
    update?: workspacesUpdateWithWhereUniqueWithoutUsersInput | workspacesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: workspacesUpdateManyWithWhereWithoutUsersInput | workspacesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: workspacesScalarWhereInput | workspacesScalarWhereInput[]
  }

  export type workspace_usersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<workspace_usersCreateWithoutUserInput, workspace_usersUncheckedCreateWithoutUserInput> | workspace_usersCreateWithoutUserInput[] | workspace_usersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: workspace_usersCreateOrConnectWithoutUserInput | workspace_usersCreateOrConnectWithoutUserInput[]
    upsert?: workspace_usersUpsertWithWhereUniqueWithoutUserInput | workspace_usersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: workspace_usersCreateManyUserInputEnvelope
    set?: workspace_usersWhereUniqueInput | workspace_usersWhereUniqueInput[]
    disconnect?: workspace_usersWhereUniqueInput | workspace_usersWhereUniqueInput[]
    delete?: workspace_usersWhereUniqueInput | workspace_usersWhereUniqueInput[]
    connect?: workspace_usersWhereUniqueInput | workspace_usersWhereUniqueInput[]
    update?: workspace_usersUpdateWithWhereUniqueWithoutUserInput | workspace_usersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: workspace_usersUpdateManyWithWhereWithoutUserInput | workspace_usersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: workspace_usersScalarWhereInput | workspace_usersScalarWhereInput[]
  }

  export type postsCreateNestedOneWithoutTagsInput = {
    create?: XOR<postsCreateWithoutTagsInput, postsUncheckedCreateWithoutTagsInput>
    connectOrCreate?: postsCreateOrConnectWithoutTagsInput
    connect?: postsWhereUniqueInput
  }

  export type tagsCreateNestedOneWithoutPosts_to_tagsInput = {
    create?: XOR<tagsCreateWithoutPosts_to_tagsInput, tagsUncheckedCreateWithoutPosts_to_tagsInput>
    connectOrCreate?: tagsCreateOrConnectWithoutPosts_to_tagsInput
    connect?: tagsWhereUniqueInput
  }

  export type postsUpdateOneRequiredWithoutTagsNestedInput = {
    create?: XOR<postsCreateWithoutTagsInput, postsUncheckedCreateWithoutTagsInput>
    connectOrCreate?: postsCreateOrConnectWithoutTagsInput
    upsert?: postsUpsertWithoutTagsInput
    connect?: postsWhereUniqueInput
    update?: XOR<XOR<postsUpdateToOneWithWhereWithoutTagsInput, postsUpdateWithoutTagsInput>, postsUncheckedUpdateWithoutTagsInput>
  }

  export type tagsUpdateOneRequiredWithoutPosts_to_tagsNestedInput = {
    create?: XOR<tagsCreateWithoutPosts_to_tagsInput, tagsUncheckedCreateWithoutPosts_to_tagsInput>
    connectOrCreate?: tagsCreateOrConnectWithoutPosts_to_tagsInput
    upsert?: tagsUpsertWithoutPosts_to_tagsInput
    connect?: tagsWhereUniqueInput
    update?: XOR<XOR<tagsUpdateToOneWithWhereWithoutPosts_to_tagsInput, tagsUpdateWithoutPosts_to_tagsInput>, tagsUncheckedUpdateWithoutPosts_to_tagsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type posts_to_tagsCreateNestedManyWithoutTagInput = {
    create?: XOR<posts_to_tagsCreateWithoutTagInput, posts_to_tagsUncheckedCreateWithoutTagInput> | posts_to_tagsCreateWithoutTagInput[] | posts_to_tagsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: posts_to_tagsCreateOrConnectWithoutTagInput | posts_to_tagsCreateOrConnectWithoutTagInput[]
    createMany?: posts_to_tagsCreateManyTagInputEnvelope
    connect?: posts_to_tagsWhereUniqueInput | posts_to_tagsWhereUniqueInput[]
  }

  export type posts_to_tagsUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<posts_to_tagsCreateWithoutTagInput, posts_to_tagsUncheckedCreateWithoutTagInput> | posts_to_tagsCreateWithoutTagInput[] | posts_to_tagsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: posts_to_tagsCreateOrConnectWithoutTagInput | posts_to_tagsCreateOrConnectWithoutTagInput[]
    createMany?: posts_to_tagsCreateManyTagInputEnvelope
    connect?: posts_to_tagsWhereUniqueInput | posts_to_tagsWhereUniqueInput[]
  }

  export type posts_to_tagsUpdateManyWithoutTagNestedInput = {
    create?: XOR<posts_to_tagsCreateWithoutTagInput, posts_to_tagsUncheckedCreateWithoutTagInput> | posts_to_tagsCreateWithoutTagInput[] | posts_to_tagsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: posts_to_tagsCreateOrConnectWithoutTagInput | posts_to_tagsCreateOrConnectWithoutTagInput[]
    upsert?: posts_to_tagsUpsertWithWhereUniqueWithoutTagInput | posts_to_tagsUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: posts_to_tagsCreateManyTagInputEnvelope
    set?: posts_to_tagsWhereUniqueInput | posts_to_tagsWhereUniqueInput[]
    disconnect?: posts_to_tagsWhereUniqueInput | posts_to_tagsWhereUniqueInput[]
    delete?: posts_to_tagsWhereUniqueInput | posts_to_tagsWhereUniqueInput[]
    connect?: posts_to_tagsWhereUniqueInput | posts_to_tagsWhereUniqueInput[]
    update?: posts_to_tagsUpdateWithWhereUniqueWithoutTagInput | posts_to_tagsUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: posts_to_tagsUpdateManyWithWhereWithoutTagInput | posts_to_tagsUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: posts_to_tagsScalarWhereInput | posts_to_tagsScalarWhereInput[]
  }

  export type posts_to_tagsUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<posts_to_tagsCreateWithoutTagInput, posts_to_tagsUncheckedCreateWithoutTagInput> | posts_to_tagsCreateWithoutTagInput[] | posts_to_tagsUncheckedCreateWithoutTagInput[]
    connectOrCreate?: posts_to_tagsCreateOrConnectWithoutTagInput | posts_to_tagsCreateOrConnectWithoutTagInput[]
    upsert?: posts_to_tagsUpsertWithWhereUniqueWithoutTagInput | posts_to_tagsUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: posts_to_tagsCreateManyTagInputEnvelope
    set?: posts_to_tagsWhereUniqueInput | posts_to_tagsWhereUniqueInput[]
    disconnect?: posts_to_tagsWhereUniqueInput | posts_to_tagsWhereUniqueInput[]
    delete?: posts_to_tagsWhereUniqueInput | posts_to_tagsWhereUniqueInput[]
    connect?: posts_to_tagsWhereUniqueInput | posts_to_tagsWhereUniqueInput[]
    update?: posts_to_tagsUpdateWithWhereUniqueWithoutTagInput | posts_to_tagsUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: posts_to_tagsUpdateManyWithWhereWithoutTagInput | posts_to_tagsUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: posts_to_tagsScalarWhereInput | posts_to_tagsScalarWhereInput[]
  }

  export type usersCreateNestedOneWithoutFilesInput = {
    create?: XOR<usersCreateWithoutFilesInput, usersUncheckedCreateWithoutFilesInput>
    connectOrCreate?: usersCreateOrConnectWithoutFilesInput
    connect?: usersWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type usersUpdateOneWithoutFilesNestedInput = {
    create?: XOR<usersCreateWithoutFilesInput, usersUncheckedCreateWithoutFilesInput>
    connectOrCreate?: usersCreateOrConnectWithoutFilesInput
    upsert?: usersUpsertWithoutFilesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutFilesInput, usersUpdateWithoutFilesInput>, usersUncheckedUpdateWithoutFilesInput>
  }

  export type usersCreateNestedOneWithoutLikesInput = {
    create?: XOR<usersCreateWithoutLikesInput, usersUncheckedCreateWithoutLikesInput>
    connectOrCreate?: usersCreateOrConnectWithoutLikesInput
    connect?: usersWhereUniqueInput
  }

  export type postsCreateNestedOneWithoutLikesInput = {
    create?: XOR<postsCreateWithoutLikesInput, postsUncheckedCreateWithoutLikesInput>
    connectOrCreate?: postsCreateOrConnectWithoutLikesInput
    connect?: postsWhereUniqueInput
  }

  export type usersUpdateOneWithoutLikesNestedInput = {
    create?: XOR<usersCreateWithoutLikesInput, usersUncheckedCreateWithoutLikesInput>
    connectOrCreate?: usersCreateOrConnectWithoutLikesInput
    upsert?: usersUpsertWithoutLikesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutLikesInput, usersUpdateWithoutLikesInput>, usersUncheckedUpdateWithoutLikesInput>
  }

  export type postsUpdateOneWithoutLikesNestedInput = {
    create?: XOR<postsCreateWithoutLikesInput, postsUncheckedCreateWithoutLikesInput>
    connectOrCreate?: postsCreateOrConnectWithoutLikesInput
    upsert?: postsUpsertWithoutLikesInput
    disconnect?: postsWhereInput | boolean
    delete?: postsWhereInput | boolean
    connect?: postsWhereUniqueInput
    update?: XOR<XOR<postsUpdateToOneWithWhereWithoutLikesInput, postsUpdateWithoutLikesInput>, postsUncheckedUpdateWithoutLikesInput>
  }

  export type usersCreateNestedOneWithoutProfilesInput = {
    create?: XOR<usersCreateWithoutProfilesInput, usersUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: usersCreateOrConnectWithoutProfilesInput
    connect?: usersWhereUniqueInput
  }

  export type usersUpdateOneRequiredWithoutProfilesNestedInput = {
    create?: XOR<usersCreateWithoutProfilesInput, usersUncheckedCreateWithoutProfilesInput>
    connectOrCreate?: usersCreateOrConnectWithoutProfilesInput
    upsert?: usersUpsertWithoutProfilesInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProfilesInput, usersUpdateWithoutProfilesInput>, usersUncheckedUpdateWithoutProfilesInput>
  }

  export type usersCreateNestedManyWithoutWorkspacesInput = {
    create?: XOR<usersCreateWithoutWorkspacesInput, usersUncheckedCreateWithoutWorkspacesInput> | usersCreateWithoutWorkspacesInput[] | usersUncheckedCreateWithoutWorkspacesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutWorkspacesInput | usersCreateOrConnectWithoutWorkspacesInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type workspace_usersCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<workspace_usersCreateWithoutWorkspaceInput, workspace_usersUncheckedCreateWithoutWorkspaceInput> | workspace_usersCreateWithoutWorkspaceInput[] | workspace_usersUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: workspace_usersCreateOrConnectWithoutWorkspaceInput | workspace_usersCreateOrConnectWithoutWorkspaceInput[]
    createMany?: workspace_usersCreateManyWorkspaceInputEnvelope
    connect?: workspace_usersWhereUniqueInput | workspace_usersWhereUniqueInput[]
  }

  export type usersUncheckedCreateNestedManyWithoutWorkspacesInput = {
    create?: XOR<usersCreateWithoutWorkspacesInput, usersUncheckedCreateWithoutWorkspacesInput> | usersCreateWithoutWorkspacesInput[] | usersUncheckedCreateWithoutWorkspacesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutWorkspacesInput | usersCreateOrConnectWithoutWorkspacesInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
  }

  export type workspace_usersUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<workspace_usersCreateWithoutWorkspaceInput, workspace_usersUncheckedCreateWithoutWorkspaceInput> | workspace_usersCreateWithoutWorkspaceInput[] | workspace_usersUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: workspace_usersCreateOrConnectWithoutWorkspaceInput | workspace_usersCreateOrConnectWithoutWorkspaceInput[]
    createMany?: workspace_usersCreateManyWorkspaceInputEnvelope
    connect?: workspace_usersWhereUniqueInput | workspace_usersWhereUniqueInput[]
  }

  export type usersUpdateManyWithoutWorkspacesNestedInput = {
    create?: XOR<usersCreateWithoutWorkspacesInput, usersUncheckedCreateWithoutWorkspacesInput> | usersCreateWithoutWorkspacesInput[] | usersUncheckedCreateWithoutWorkspacesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutWorkspacesInput | usersCreateOrConnectWithoutWorkspacesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutWorkspacesInput | usersUpsertWithWhereUniqueWithoutWorkspacesInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutWorkspacesInput | usersUpdateWithWhereUniqueWithoutWorkspacesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutWorkspacesInput | usersUpdateManyWithWhereWithoutWorkspacesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type workspace_usersUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<workspace_usersCreateWithoutWorkspaceInput, workspace_usersUncheckedCreateWithoutWorkspaceInput> | workspace_usersCreateWithoutWorkspaceInput[] | workspace_usersUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: workspace_usersCreateOrConnectWithoutWorkspaceInput | workspace_usersCreateOrConnectWithoutWorkspaceInput[]
    upsert?: workspace_usersUpsertWithWhereUniqueWithoutWorkspaceInput | workspace_usersUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: workspace_usersCreateManyWorkspaceInputEnvelope
    set?: workspace_usersWhereUniqueInput | workspace_usersWhereUniqueInput[]
    disconnect?: workspace_usersWhereUniqueInput | workspace_usersWhereUniqueInput[]
    delete?: workspace_usersWhereUniqueInput | workspace_usersWhereUniqueInput[]
    connect?: workspace_usersWhereUniqueInput | workspace_usersWhereUniqueInput[]
    update?: workspace_usersUpdateWithWhereUniqueWithoutWorkspaceInput | workspace_usersUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: workspace_usersUpdateManyWithWhereWithoutWorkspaceInput | workspace_usersUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: workspace_usersScalarWhereInput | workspace_usersScalarWhereInput[]
  }

  export type usersUncheckedUpdateManyWithoutWorkspacesNestedInput = {
    create?: XOR<usersCreateWithoutWorkspacesInput, usersUncheckedCreateWithoutWorkspacesInput> | usersCreateWithoutWorkspacesInput[] | usersUncheckedCreateWithoutWorkspacesInput[]
    connectOrCreate?: usersCreateOrConnectWithoutWorkspacesInput | usersCreateOrConnectWithoutWorkspacesInput[]
    upsert?: usersUpsertWithWhereUniqueWithoutWorkspacesInput | usersUpsertWithWhereUniqueWithoutWorkspacesInput[]
    set?: usersWhereUniqueInput | usersWhereUniqueInput[]
    disconnect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    delete?: usersWhereUniqueInput | usersWhereUniqueInput[]
    connect?: usersWhereUniqueInput | usersWhereUniqueInput[]
    update?: usersUpdateWithWhereUniqueWithoutWorkspacesInput | usersUpdateWithWhereUniqueWithoutWorkspacesInput[]
    updateMany?: usersUpdateManyWithWhereWithoutWorkspacesInput | usersUpdateManyWithWhereWithoutWorkspacesInput[]
    deleteMany?: usersScalarWhereInput | usersScalarWhereInput[]
  }

  export type workspace_usersUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<workspace_usersCreateWithoutWorkspaceInput, workspace_usersUncheckedCreateWithoutWorkspaceInput> | workspace_usersCreateWithoutWorkspaceInput[] | workspace_usersUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: workspace_usersCreateOrConnectWithoutWorkspaceInput | workspace_usersCreateOrConnectWithoutWorkspaceInput[]
    upsert?: workspace_usersUpsertWithWhereUniqueWithoutWorkspaceInput | workspace_usersUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: workspace_usersCreateManyWorkspaceInputEnvelope
    set?: workspace_usersWhereUniqueInput | workspace_usersWhereUniqueInput[]
    disconnect?: workspace_usersWhereUniqueInput | workspace_usersWhereUniqueInput[]
    delete?: workspace_usersWhereUniqueInput | workspace_usersWhereUniqueInput[]
    connect?: workspace_usersWhereUniqueInput | workspace_usersWhereUniqueInput[]
    update?: workspace_usersUpdateWithWhereUniqueWithoutWorkspaceInput | workspace_usersUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: workspace_usersUpdateManyWithWhereWithoutWorkspaceInput | workspace_usersUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: workspace_usersScalarWhereInput | workspace_usersScalarWhereInput[]
  }

  export type workspacesCreateNestedOneWithoutWorkspace_usersInput = {
    create?: XOR<workspacesCreateWithoutWorkspace_usersInput, workspacesUncheckedCreateWithoutWorkspace_usersInput>
    connectOrCreate?: workspacesCreateOrConnectWithoutWorkspace_usersInput
    connect?: workspacesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutWorkspace_usersInput = {
    create?: XOR<usersCreateWithoutWorkspace_usersInput, usersUncheckedCreateWithoutWorkspace_usersInput>
    connectOrCreate?: usersCreateOrConnectWithoutWorkspace_usersInput
    connect?: usersWhereUniqueInput
  }

  export type workspacesUpdateOneRequiredWithoutWorkspace_usersNestedInput = {
    create?: XOR<workspacesCreateWithoutWorkspace_usersInput, workspacesUncheckedCreateWithoutWorkspace_usersInput>
    connectOrCreate?: workspacesCreateOrConnectWithoutWorkspace_usersInput
    upsert?: workspacesUpsertWithoutWorkspace_usersInput
    connect?: workspacesWhereUniqueInput
    update?: XOR<XOR<workspacesUpdateToOneWithWhereWithoutWorkspace_usersInput, workspacesUpdateWithoutWorkspace_usersInput>, workspacesUncheckedUpdateWithoutWorkspace_usersInput>
  }

  export type usersUpdateOneRequiredWithoutWorkspace_usersNestedInput = {
    create?: XOR<usersCreateWithoutWorkspace_usersInput, usersUncheckedCreateWithoutWorkspace_usersInput>
    connectOrCreate?: usersCreateOrConnectWithoutWorkspace_usersInput
    upsert?: usersUpsertWithoutWorkspace_usersInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutWorkspace_usersInput, usersUpdateWithoutWorkspace_usersInput>, usersUncheckedUpdateWithoutWorkspace_usersInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type usersCreateWithoutPost_commentsInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    first_name?: string | null
    last_name?: string | null
    email: string
    password?: string | null
    image?: string | null
    is_super_admin?: boolean | null
    username?: string | null
    files?: filesCreateNestedManyWithoutUsersInput
    likes?: likesCreateNestedManyWithoutUsersInput
    posts?: postsCreateNestedManyWithoutCreatorInput
    profiles?: profilesCreateNestedOneWithoutUsersInput
    workspaces?: workspacesCreateNestedManyWithoutUsersInput
    workspace_users?: workspace_usersCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutPost_commentsInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    first_name?: string | null
    last_name?: string | null
    email: string
    password?: string | null
    image?: string | null
    is_super_admin?: boolean | null
    username?: string | null
    files?: filesUncheckedCreateNestedManyWithoutUsersInput
    likes?: likesUncheckedCreateNestedManyWithoutUsersInput
    posts?: postsUncheckedCreateNestedManyWithoutCreatorInput
    profiles?: profilesUncheckedCreateNestedOneWithoutUsersInput
    workspaces?: workspacesUncheckedCreateNestedManyWithoutUsersInput
    workspace_users?: workspace_usersUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutPost_commentsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPost_commentsInput, usersUncheckedCreateWithoutPost_commentsInput>
  }

  export type postsCreateWithoutPost_commentsInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    title?: string | null
    body?: string | null
    slug?: string | null
    photo_url?: string | null
    published?: boolean | null
    likes?: likesCreateNestedManyWithoutPostsInput
    creator?: usersCreateNestedOneWithoutPostsInput
    tags?: posts_to_tagsCreateNestedManyWithoutPostInput
  }

  export type postsUncheckedCreateWithoutPost_commentsInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    title?: string | null
    created_by?: string | null
    body?: string | null
    slug?: string | null
    photo_url?: string | null
    published?: boolean | null
    likes?: likesUncheckedCreateNestedManyWithoutPostsInput
    tags?: posts_to_tagsUncheckedCreateNestedManyWithoutPostInput
  }

  export type postsCreateOrConnectWithoutPost_commentsInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutPost_commentsInput, postsUncheckedCreateWithoutPost_commentsInput>
  }

  export type usersUpsertWithoutPost_commentsInput = {
    update: XOR<usersUpdateWithoutPost_commentsInput, usersUncheckedUpdateWithoutPost_commentsInput>
    create: XOR<usersCreateWithoutPost_commentsInput, usersUncheckedCreateWithoutPost_commentsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPost_commentsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPost_commentsInput, usersUncheckedUpdateWithoutPost_commentsInput>
  }

  export type usersUpdateWithoutPost_commentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    is_super_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    files?: filesUpdateManyWithoutUsersNestedInput
    likes?: likesUpdateManyWithoutUsersNestedInput
    posts?: postsUpdateManyWithoutCreatorNestedInput
    profiles?: profilesUpdateOneWithoutUsersNestedInput
    workspaces?: workspacesUpdateManyWithoutUsersNestedInput
    workspace_users?: workspace_usersUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutPost_commentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    is_super_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    files?: filesUncheckedUpdateManyWithoutUsersNestedInput
    likes?: likesUncheckedUpdateManyWithoutUsersNestedInput
    posts?: postsUncheckedUpdateManyWithoutCreatorNestedInput
    profiles?: profilesUncheckedUpdateOneWithoutUsersNestedInput
    workspaces?: workspacesUncheckedUpdateManyWithoutUsersNestedInput
    workspace_users?: workspace_usersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type postsUpsertWithoutPost_commentsInput = {
    update: XOR<postsUpdateWithoutPost_commentsInput, postsUncheckedUpdateWithoutPost_commentsInput>
    create: XOR<postsCreateWithoutPost_commentsInput, postsUncheckedCreateWithoutPost_commentsInput>
    where?: postsWhereInput
  }

  export type postsUpdateToOneWithWhereWithoutPost_commentsInput = {
    where?: postsWhereInput
    data: XOR<postsUpdateWithoutPost_commentsInput, postsUncheckedUpdateWithoutPost_commentsInput>
  }

  export type postsUpdateWithoutPost_commentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableBoolFieldUpdateOperationsInput | boolean | null
    likes?: likesUpdateManyWithoutPostsNestedInput
    creator?: usersUpdateOneWithoutPostsNestedInput
    tags?: posts_to_tagsUpdateManyWithoutPostNestedInput
  }

  export type postsUncheckedUpdateWithoutPost_commentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableBoolFieldUpdateOperationsInput | boolean | null
    likes?: likesUncheckedUpdateManyWithoutPostsNestedInput
    tags?: posts_to_tagsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type likesCreateWithoutPostsInput = {
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutLikesInput
  }

  export type likesUncheckedCreateWithoutPostsInput = {
    id?: number
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type likesCreateOrConnectWithoutPostsInput = {
    where: likesWhereUniqueInput
    create: XOR<likesCreateWithoutPostsInput, likesUncheckedCreateWithoutPostsInput>
  }

  export type likesCreateManyPostsInputEnvelope = {
    data: likesCreateManyPostsInput | likesCreateManyPostsInput[]
    skipDuplicates?: boolean
  }

  export type post_commentsCreateWithoutPostsInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    text?: string | null
    parrent_comment_id?: bigint | number | null
    creator?: usersCreateNestedOneWithoutPost_commentsInput
  }

  export type post_commentsUncheckedCreateWithoutPostsInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    text?: string | null
    parrent_comment_id?: bigint | number | null
    created_by?: string | null
  }

  export type post_commentsCreateOrConnectWithoutPostsInput = {
    where: post_commentsWhereUniqueInput
    create: XOR<post_commentsCreateWithoutPostsInput, post_commentsUncheckedCreateWithoutPostsInput>
  }

  export type post_commentsCreateManyPostsInputEnvelope = {
    data: post_commentsCreateManyPostsInput | post_commentsCreateManyPostsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutPostsInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    first_name?: string | null
    last_name?: string | null
    email: string
    password?: string | null
    image?: string | null
    is_super_admin?: boolean | null
    username?: string | null
    files?: filesCreateNestedManyWithoutUsersInput
    likes?: likesCreateNestedManyWithoutUsersInput
    post_comments?: post_commentsCreateNestedManyWithoutCreatorInput
    profiles?: profilesCreateNestedOneWithoutUsersInput
    workspaces?: workspacesCreateNestedManyWithoutUsersInput
    workspace_users?: workspace_usersCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutPostsInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    first_name?: string | null
    last_name?: string | null
    email: string
    password?: string | null
    image?: string | null
    is_super_admin?: boolean | null
    username?: string | null
    files?: filesUncheckedCreateNestedManyWithoutUsersInput
    likes?: likesUncheckedCreateNestedManyWithoutUsersInput
    post_comments?: post_commentsUncheckedCreateNestedManyWithoutCreatorInput
    profiles?: profilesUncheckedCreateNestedOneWithoutUsersInput
    workspaces?: workspacesUncheckedCreateNestedManyWithoutUsersInput
    workspace_users?: workspace_usersUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutPostsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
  }

  export type posts_to_tagsCreateWithoutPostInput = {
    tag: tagsCreateNestedOneWithoutPosts_to_tagsInput
  }

  export type posts_to_tagsUncheckedCreateWithoutPostInput = {
    tag_id: number
  }

  export type posts_to_tagsCreateOrConnectWithoutPostInput = {
    where: posts_to_tagsWhereUniqueInput
    create: XOR<posts_to_tagsCreateWithoutPostInput, posts_to_tagsUncheckedCreateWithoutPostInput>
  }

  export type posts_to_tagsCreateManyPostInputEnvelope = {
    data: posts_to_tagsCreateManyPostInput | posts_to_tagsCreateManyPostInput[]
    skipDuplicates?: boolean
  }

  export type likesUpsertWithWhereUniqueWithoutPostsInput = {
    where: likesWhereUniqueInput
    update: XOR<likesUpdateWithoutPostsInput, likesUncheckedUpdateWithoutPostsInput>
    create: XOR<likesCreateWithoutPostsInput, likesUncheckedCreateWithoutPostsInput>
  }

  export type likesUpdateWithWhereUniqueWithoutPostsInput = {
    where: likesWhereUniqueInput
    data: XOR<likesUpdateWithoutPostsInput, likesUncheckedUpdateWithoutPostsInput>
  }

  export type likesUpdateManyWithWhereWithoutPostsInput = {
    where: likesScalarWhereInput
    data: XOR<likesUpdateManyMutationInput, likesUncheckedUpdateManyWithoutPostsInput>
  }

  export type likesScalarWhereInput = {
    AND?: likesScalarWhereInput | likesScalarWhereInput[]
    OR?: likesScalarWhereInput[]
    NOT?: likesScalarWhereInput | likesScalarWhereInput[]
    id?: IntFilter<"likes"> | number
    created_at?: DateTimeNullableFilter<"likes"> | Date | string | null
    post_id?: UuidNullableFilter<"likes"> | string | null
    created_by?: UuidNullableFilter<"likes"> | string | null
  }

  export type post_commentsUpsertWithWhereUniqueWithoutPostsInput = {
    where: post_commentsWhereUniqueInput
    update: XOR<post_commentsUpdateWithoutPostsInput, post_commentsUncheckedUpdateWithoutPostsInput>
    create: XOR<post_commentsCreateWithoutPostsInput, post_commentsUncheckedCreateWithoutPostsInput>
  }

  export type post_commentsUpdateWithWhereUniqueWithoutPostsInput = {
    where: post_commentsWhereUniqueInput
    data: XOR<post_commentsUpdateWithoutPostsInput, post_commentsUncheckedUpdateWithoutPostsInput>
  }

  export type post_commentsUpdateManyWithWhereWithoutPostsInput = {
    where: post_commentsScalarWhereInput
    data: XOR<post_commentsUpdateManyMutationInput, post_commentsUncheckedUpdateManyWithoutPostsInput>
  }

  export type post_commentsScalarWhereInput = {
    AND?: post_commentsScalarWhereInput | post_commentsScalarWhereInput[]
    OR?: post_commentsScalarWhereInput[]
    NOT?: post_commentsScalarWhereInput | post_commentsScalarWhereInput[]
    id?: UuidFilter<"post_comments"> | string
    created_at?: DateTimeNullableFilter<"post_comments"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"post_comments"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"post_comments"> | Date | string | null
    text?: StringNullableFilter<"post_comments"> | string | null
    post_id?: UuidNullableFilter<"post_comments"> | string | null
    parrent_comment_id?: BigIntNullableFilter<"post_comments"> | bigint | number | null
    created_by?: UuidNullableFilter<"post_comments"> | string | null
  }

  export type usersUpsertWithoutPostsInput = {
    update: XOR<usersUpdateWithoutPostsInput, usersUncheckedUpdateWithoutPostsInput>
    create: XOR<usersCreateWithoutPostsInput, usersUncheckedCreateWithoutPostsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutPostsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutPostsInput, usersUncheckedUpdateWithoutPostsInput>
  }

  export type usersUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    is_super_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    files?: filesUpdateManyWithoutUsersNestedInput
    likes?: likesUpdateManyWithoutUsersNestedInput
    post_comments?: post_commentsUpdateManyWithoutCreatorNestedInput
    profiles?: profilesUpdateOneWithoutUsersNestedInput
    workspaces?: workspacesUpdateManyWithoutUsersNestedInput
    workspace_users?: workspace_usersUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    is_super_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    files?: filesUncheckedUpdateManyWithoutUsersNestedInput
    likes?: likesUncheckedUpdateManyWithoutUsersNestedInput
    post_comments?: post_commentsUncheckedUpdateManyWithoutCreatorNestedInput
    profiles?: profilesUncheckedUpdateOneWithoutUsersNestedInput
    workspaces?: workspacesUncheckedUpdateManyWithoutUsersNestedInput
    workspace_users?: workspace_usersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type posts_to_tagsUpsertWithWhereUniqueWithoutPostInput = {
    where: posts_to_tagsWhereUniqueInput
    update: XOR<posts_to_tagsUpdateWithoutPostInput, posts_to_tagsUncheckedUpdateWithoutPostInput>
    create: XOR<posts_to_tagsCreateWithoutPostInput, posts_to_tagsUncheckedCreateWithoutPostInput>
  }

  export type posts_to_tagsUpdateWithWhereUniqueWithoutPostInput = {
    where: posts_to_tagsWhereUniqueInput
    data: XOR<posts_to_tagsUpdateWithoutPostInput, posts_to_tagsUncheckedUpdateWithoutPostInput>
  }

  export type posts_to_tagsUpdateManyWithWhereWithoutPostInput = {
    where: posts_to_tagsScalarWhereInput
    data: XOR<posts_to_tagsUpdateManyMutationInput, posts_to_tagsUncheckedUpdateManyWithoutPostInput>
  }

  export type posts_to_tagsScalarWhereInput = {
    AND?: posts_to_tagsScalarWhereInput | posts_to_tagsScalarWhereInput[]
    OR?: posts_to_tagsScalarWhereInput[]
    NOT?: posts_to_tagsScalarWhereInput | posts_to_tagsScalarWhereInput[]
    post_id?: UuidFilter<"posts_to_tags"> | string
    tag_id?: IntFilter<"posts_to_tags"> | number
  }

  export type filesCreateWithoutUsersInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    name?: string | null
    path?: string | null
    size?: number | null
    type?: string | null
  }

  export type filesUncheckedCreateWithoutUsersInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    name?: string | null
    path?: string | null
    size?: number | null
    type?: string | null
  }

  export type filesCreateOrConnectWithoutUsersInput = {
    where: filesWhereUniqueInput
    create: XOR<filesCreateWithoutUsersInput, filesUncheckedCreateWithoutUsersInput>
  }

  export type filesCreateManyUsersInputEnvelope = {
    data: filesCreateManyUsersInput | filesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type likesCreateWithoutUsersInput = {
    created_at?: Date | string | null
    posts?: postsCreateNestedOneWithoutLikesInput
  }

  export type likesUncheckedCreateWithoutUsersInput = {
    id?: number
    created_at?: Date | string | null
    post_id?: string | null
  }

  export type likesCreateOrConnectWithoutUsersInput = {
    where: likesWhereUniqueInput
    create: XOR<likesCreateWithoutUsersInput, likesUncheckedCreateWithoutUsersInput>
  }

  export type likesCreateManyUsersInputEnvelope = {
    data: likesCreateManyUsersInput | likesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type post_commentsCreateWithoutCreatorInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    text?: string | null
    parrent_comment_id?: bigint | number | null
    posts?: postsCreateNestedOneWithoutPost_commentsInput
  }

  export type post_commentsUncheckedCreateWithoutCreatorInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    text?: string | null
    post_id?: string | null
    parrent_comment_id?: bigint | number | null
  }

  export type post_commentsCreateOrConnectWithoutCreatorInput = {
    where: post_commentsWhereUniqueInput
    create: XOR<post_commentsCreateWithoutCreatorInput, post_commentsUncheckedCreateWithoutCreatorInput>
  }

  export type post_commentsCreateManyCreatorInputEnvelope = {
    data: post_commentsCreateManyCreatorInput | post_commentsCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type postsCreateWithoutCreatorInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    title?: string | null
    body?: string | null
    slug?: string | null
    photo_url?: string | null
    published?: boolean | null
    likes?: likesCreateNestedManyWithoutPostsInput
    post_comments?: post_commentsCreateNestedManyWithoutPostsInput
    tags?: posts_to_tagsCreateNestedManyWithoutPostInput
  }

  export type postsUncheckedCreateWithoutCreatorInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    title?: string | null
    body?: string | null
    slug?: string | null
    photo_url?: string | null
    published?: boolean | null
    likes?: likesUncheckedCreateNestedManyWithoutPostsInput
    post_comments?: post_commentsUncheckedCreateNestedManyWithoutPostsInput
    tags?: posts_to_tagsUncheckedCreateNestedManyWithoutPostInput
  }

  export type postsCreateOrConnectWithoutCreatorInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutCreatorInput, postsUncheckedCreateWithoutCreatorInput>
  }

  export type postsCreateManyCreatorInputEnvelope = {
    data: postsCreateManyCreatorInput | postsCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type profilesCreateWithoutUsersInput = {
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bio?: string | null
    website?: string | null
    phone?: string | null
    location?: string | null
  }

  export type profilesUncheckedCreateWithoutUsersInput = {
    id?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    bio?: string | null
    website?: string | null
    phone?: string | null
    location?: string | null
  }

  export type profilesCreateOrConnectWithoutUsersInput = {
    where: profilesWhereUniqueInput
    create: XOR<profilesCreateWithoutUsersInput, profilesUncheckedCreateWithoutUsersInput>
  }

  export type workspacesCreateWithoutUsersInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    name?: string | null
    workspace_users?: workspace_usersCreateNestedManyWithoutWorkspaceInput
  }

  export type workspacesUncheckedCreateWithoutUsersInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    name?: string | null
    workspace_users?: workspace_usersUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type workspacesCreateOrConnectWithoutUsersInput = {
    where: workspacesWhereUniqueInput
    create: XOR<workspacesCreateWithoutUsersInput, workspacesUncheckedCreateWithoutUsersInput>
  }

  export type workspace_usersCreateWithoutUserInput = {
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    workspace: workspacesCreateNestedOneWithoutWorkspace_usersInput
  }

  export type workspace_usersUncheckedCreateWithoutUserInput = {
    workspace_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type workspace_usersCreateOrConnectWithoutUserInput = {
    where: workspace_usersWhereUniqueInput
    create: XOR<workspace_usersCreateWithoutUserInput, workspace_usersUncheckedCreateWithoutUserInput>
  }

  export type workspace_usersCreateManyUserInputEnvelope = {
    data: workspace_usersCreateManyUserInput | workspace_usersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type filesUpsertWithWhereUniqueWithoutUsersInput = {
    where: filesWhereUniqueInput
    update: XOR<filesUpdateWithoutUsersInput, filesUncheckedUpdateWithoutUsersInput>
    create: XOR<filesCreateWithoutUsersInput, filesUncheckedCreateWithoutUsersInput>
  }

  export type filesUpdateWithWhereUniqueWithoutUsersInput = {
    where: filesWhereUniqueInput
    data: XOR<filesUpdateWithoutUsersInput, filesUncheckedUpdateWithoutUsersInput>
  }

  export type filesUpdateManyWithWhereWithoutUsersInput = {
    where: filesScalarWhereInput
    data: XOR<filesUpdateManyMutationInput, filesUncheckedUpdateManyWithoutUsersInput>
  }

  export type filesScalarWhereInput = {
    AND?: filesScalarWhereInput | filesScalarWhereInput[]
    OR?: filesScalarWhereInput[]
    NOT?: filesScalarWhereInput | filesScalarWhereInput[]
    id?: UuidFilter<"files"> | string
    created_at?: DateTimeNullableFilter<"files"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"files"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"files"> | Date | string | null
    name?: StringNullableFilter<"files"> | string | null
    path?: StringNullableFilter<"files"> | string | null
    size?: IntNullableFilter<"files"> | number | null
    type?: StringNullableFilter<"files"> | string | null
    created_by?: UuidNullableFilter<"files"> | string | null
  }

  export type likesUpsertWithWhereUniqueWithoutUsersInput = {
    where: likesWhereUniqueInput
    update: XOR<likesUpdateWithoutUsersInput, likesUncheckedUpdateWithoutUsersInput>
    create: XOR<likesCreateWithoutUsersInput, likesUncheckedCreateWithoutUsersInput>
  }

  export type likesUpdateWithWhereUniqueWithoutUsersInput = {
    where: likesWhereUniqueInput
    data: XOR<likesUpdateWithoutUsersInput, likesUncheckedUpdateWithoutUsersInput>
  }

  export type likesUpdateManyWithWhereWithoutUsersInput = {
    where: likesScalarWhereInput
    data: XOR<likesUpdateManyMutationInput, likesUncheckedUpdateManyWithoutUsersInput>
  }

  export type post_commentsUpsertWithWhereUniqueWithoutCreatorInput = {
    where: post_commentsWhereUniqueInput
    update: XOR<post_commentsUpdateWithoutCreatorInput, post_commentsUncheckedUpdateWithoutCreatorInput>
    create: XOR<post_commentsCreateWithoutCreatorInput, post_commentsUncheckedCreateWithoutCreatorInput>
  }

  export type post_commentsUpdateWithWhereUniqueWithoutCreatorInput = {
    where: post_commentsWhereUniqueInput
    data: XOR<post_commentsUpdateWithoutCreatorInput, post_commentsUncheckedUpdateWithoutCreatorInput>
  }

  export type post_commentsUpdateManyWithWhereWithoutCreatorInput = {
    where: post_commentsScalarWhereInput
    data: XOR<post_commentsUpdateManyMutationInput, post_commentsUncheckedUpdateManyWithoutCreatorInput>
  }

  export type postsUpsertWithWhereUniqueWithoutCreatorInput = {
    where: postsWhereUniqueInput
    update: XOR<postsUpdateWithoutCreatorInput, postsUncheckedUpdateWithoutCreatorInput>
    create: XOR<postsCreateWithoutCreatorInput, postsUncheckedCreateWithoutCreatorInput>
  }

  export type postsUpdateWithWhereUniqueWithoutCreatorInput = {
    where: postsWhereUniqueInput
    data: XOR<postsUpdateWithoutCreatorInput, postsUncheckedUpdateWithoutCreatorInput>
  }

  export type postsUpdateManyWithWhereWithoutCreatorInput = {
    where: postsScalarWhereInput
    data: XOR<postsUpdateManyMutationInput, postsUncheckedUpdateManyWithoutCreatorInput>
  }

  export type postsScalarWhereInput = {
    AND?: postsScalarWhereInput | postsScalarWhereInput[]
    OR?: postsScalarWhereInput[]
    NOT?: postsScalarWhereInput | postsScalarWhereInput[]
    id?: UuidFilter<"posts"> | string
    created_at?: DateTimeNullableFilter<"posts"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"posts"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"posts"> | Date | string | null
    title?: StringNullableFilter<"posts"> | string | null
    created_by?: UuidNullableFilter<"posts"> | string | null
    body?: StringNullableFilter<"posts"> | string | null
    slug?: StringNullableFilter<"posts"> | string | null
    photo_url?: StringNullableFilter<"posts"> | string | null
    published?: BoolNullableFilter<"posts"> | boolean | null
  }

  export type profilesUpsertWithoutUsersInput = {
    update: XOR<profilesUpdateWithoutUsersInput, profilesUncheckedUpdateWithoutUsersInput>
    create: XOR<profilesCreateWithoutUsersInput, profilesUncheckedCreateWithoutUsersInput>
    where?: profilesWhereInput
  }

  export type profilesUpdateToOneWithWhereWithoutUsersInput = {
    where?: profilesWhereInput
    data: XOR<profilesUpdateWithoutUsersInput, profilesUncheckedUpdateWithoutUsersInput>
  }

  export type profilesUpdateWithoutUsersInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type profilesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type workspacesUpsertWithWhereUniqueWithoutUsersInput = {
    where: workspacesWhereUniqueInput
    update: XOR<workspacesUpdateWithoutUsersInput, workspacesUncheckedUpdateWithoutUsersInput>
    create: XOR<workspacesCreateWithoutUsersInput, workspacesUncheckedCreateWithoutUsersInput>
  }

  export type workspacesUpdateWithWhereUniqueWithoutUsersInput = {
    where: workspacesWhereUniqueInput
    data: XOR<workspacesUpdateWithoutUsersInput, workspacesUncheckedUpdateWithoutUsersInput>
  }

  export type workspacesUpdateManyWithWhereWithoutUsersInput = {
    where: workspacesScalarWhereInput
    data: XOR<workspacesUpdateManyMutationInput, workspacesUncheckedUpdateManyWithoutUsersInput>
  }

  export type workspacesScalarWhereInput = {
    AND?: workspacesScalarWhereInput | workspacesScalarWhereInput[]
    OR?: workspacesScalarWhereInput[]
    NOT?: workspacesScalarWhereInput | workspacesScalarWhereInput[]
    id?: UuidFilter<"workspaces"> | string
    created_at?: DateTimeNullableFilter<"workspaces"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"workspaces"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"workspaces"> | Date | string | null
    name?: StringNullableFilter<"workspaces"> | string | null
  }

  export type workspace_usersUpsertWithWhereUniqueWithoutUserInput = {
    where: workspace_usersWhereUniqueInput
    update: XOR<workspace_usersUpdateWithoutUserInput, workspace_usersUncheckedUpdateWithoutUserInput>
    create: XOR<workspace_usersCreateWithoutUserInput, workspace_usersUncheckedCreateWithoutUserInput>
  }

  export type workspace_usersUpdateWithWhereUniqueWithoutUserInput = {
    where: workspace_usersWhereUniqueInput
    data: XOR<workspace_usersUpdateWithoutUserInput, workspace_usersUncheckedUpdateWithoutUserInput>
  }

  export type workspace_usersUpdateManyWithWhereWithoutUserInput = {
    where: workspace_usersScalarWhereInput
    data: XOR<workspace_usersUpdateManyMutationInput, workspace_usersUncheckedUpdateManyWithoutUserInput>
  }

  export type workspace_usersScalarWhereInput = {
    AND?: workspace_usersScalarWhereInput | workspace_usersScalarWhereInput[]
    OR?: workspace_usersScalarWhereInput[]
    NOT?: workspace_usersScalarWhereInput | workspace_usersScalarWhereInput[]
    workspace_id?: UuidFilter<"workspace_users"> | string
    user_id?: UuidFilter<"workspace_users"> | string
    created_at?: DateTimeNullableFilter<"workspace_users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"workspace_users"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"workspace_users"> | Date | string | null
  }

  export type postsCreateWithoutTagsInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    title?: string | null
    body?: string | null
    slug?: string | null
    photo_url?: string | null
    published?: boolean | null
    likes?: likesCreateNestedManyWithoutPostsInput
    post_comments?: post_commentsCreateNestedManyWithoutPostsInput
    creator?: usersCreateNestedOneWithoutPostsInput
  }

  export type postsUncheckedCreateWithoutTagsInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    title?: string | null
    created_by?: string | null
    body?: string | null
    slug?: string | null
    photo_url?: string | null
    published?: boolean | null
    likes?: likesUncheckedCreateNestedManyWithoutPostsInput
    post_comments?: post_commentsUncheckedCreateNestedManyWithoutPostsInput
  }

  export type postsCreateOrConnectWithoutTagsInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutTagsInput, postsUncheckedCreateWithoutTagsInput>
  }

  export type tagsCreateWithoutPosts_to_tagsInput = {
    name?: string | null
    created_at?: Date | string | null
  }

  export type tagsUncheckedCreateWithoutPosts_to_tagsInput = {
    id?: number
    name?: string | null
    created_at?: Date | string | null
  }

  export type tagsCreateOrConnectWithoutPosts_to_tagsInput = {
    where: tagsWhereUniqueInput
    create: XOR<tagsCreateWithoutPosts_to_tagsInput, tagsUncheckedCreateWithoutPosts_to_tagsInput>
  }

  export type postsUpsertWithoutTagsInput = {
    update: XOR<postsUpdateWithoutTagsInput, postsUncheckedUpdateWithoutTagsInput>
    create: XOR<postsCreateWithoutTagsInput, postsUncheckedCreateWithoutTagsInput>
    where?: postsWhereInput
  }

  export type postsUpdateToOneWithWhereWithoutTagsInput = {
    where?: postsWhereInput
    data: XOR<postsUpdateWithoutTagsInput, postsUncheckedUpdateWithoutTagsInput>
  }

  export type postsUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableBoolFieldUpdateOperationsInput | boolean | null
    likes?: likesUpdateManyWithoutPostsNestedInput
    post_comments?: post_commentsUpdateManyWithoutPostsNestedInput
    creator?: usersUpdateOneWithoutPostsNestedInput
  }

  export type postsUncheckedUpdateWithoutTagsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableBoolFieldUpdateOperationsInput | boolean | null
    likes?: likesUncheckedUpdateManyWithoutPostsNestedInput
    post_comments?: post_commentsUncheckedUpdateManyWithoutPostsNestedInput
  }

  export type tagsUpsertWithoutPosts_to_tagsInput = {
    update: XOR<tagsUpdateWithoutPosts_to_tagsInput, tagsUncheckedUpdateWithoutPosts_to_tagsInput>
    create: XOR<tagsCreateWithoutPosts_to_tagsInput, tagsUncheckedCreateWithoutPosts_to_tagsInput>
    where?: tagsWhereInput
  }

  export type tagsUpdateToOneWithWhereWithoutPosts_to_tagsInput = {
    where?: tagsWhereInput
    data: XOR<tagsUpdateWithoutPosts_to_tagsInput, tagsUncheckedUpdateWithoutPosts_to_tagsInput>
  }

  export type tagsUpdateWithoutPosts_to_tagsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type tagsUncheckedUpdateWithoutPosts_to_tagsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type posts_to_tagsCreateWithoutTagInput = {
    post: postsCreateNestedOneWithoutTagsInput
  }

  export type posts_to_tagsUncheckedCreateWithoutTagInput = {
    post_id: string
  }

  export type posts_to_tagsCreateOrConnectWithoutTagInput = {
    where: posts_to_tagsWhereUniqueInput
    create: XOR<posts_to_tagsCreateWithoutTagInput, posts_to_tagsUncheckedCreateWithoutTagInput>
  }

  export type posts_to_tagsCreateManyTagInputEnvelope = {
    data: posts_to_tagsCreateManyTagInput | posts_to_tagsCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type posts_to_tagsUpsertWithWhereUniqueWithoutTagInput = {
    where: posts_to_tagsWhereUniqueInput
    update: XOR<posts_to_tagsUpdateWithoutTagInput, posts_to_tagsUncheckedUpdateWithoutTagInput>
    create: XOR<posts_to_tagsCreateWithoutTagInput, posts_to_tagsUncheckedCreateWithoutTagInput>
  }

  export type posts_to_tagsUpdateWithWhereUniqueWithoutTagInput = {
    where: posts_to_tagsWhereUniqueInput
    data: XOR<posts_to_tagsUpdateWithoutTagInput, posts_to_tagsUncheckedUpdateWithoutTagInput>
  }

  export type posts_to_tagsUpdateManyWithWhereWithoutTagInput = {
    where: posts_to_tagsScalarWhereInput
    data: XOR<posts_to_tagsUpdateManyMutationInput, posts_to_tagsUncheckedUpdateManyWithoutTagInput>
  }

  export type usersCreateWithoutFilesInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    first_name?: string | null
    last_name?: string | null
    email: string
    password?: string | null
    image?: string | null
    is_super_admin?: boolean | null
    username?: string | null
    likes?: likesCreateNestedManyWithoutUsersInput
    post_comments?: post_commentsCreateNestedManyWithoutCreatorInput
    posts?: postsCreateNestedManyWithoutCreatorInput
    profiles?: profilesCreateNestedOneWithoutUsersInput
    workspaces?: workspacesCreateNestedManyWithoutUsersInput
    workspace_users?: workspace_usersCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutFilesInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    first_name?: string | null
    last_name?: string | null
    email: string
    password?: string | null
    image?: string | null
    is_super_admin?: boolean | null
    username?: string | null
    likes?: likesUncheckedCreateNestedManyWithoutUsersInput
    post_comments?: post_commentsUncheckedCreateNestedManyWithoutCreatorInput
    posts?: postsUncheckedCreateNestedManyWithoutCreatorInput
    profiles?: profilesUncheckedCreateNestedOneWithoutUsersInput
    workspaces?: workspacesUncheckedCreateNestedManyWithoutUsersInput
    workspace_users?: workspace_usersUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutFilesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutFilesInput, usersUncheckedCreateWithoutFilesInput>
  }

  export type usersUpsertWithoutFilesInput = {
    update: XOR<usersUpdateWithoutFilesInput, usersUncheckedUpdateWithoutFilesInput>
    create: XOR<usersCreateWithoutFilesInput, usersUncheckedCreateWithoutFilesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutFilesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutFilesInput, usersUncheckedUpdateWithoutFilesInput>
  }

  export type usersUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    is_super_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: likesUpdateManyWithoutUsersNestedInput
    post_comments?: post_commentsUpdateManyWithoutCreatorNestedInput
    posts?: postsUpdateManyWithoutCreatorNestedInput
    profiles?: profilesUpdateOneWithoutUsersNestedInput
    workspaces?: workspacesUpdateManyWithoutUsersNestedInput
    workspace_users?: workspace_usersUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    is_super_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    likes?: likesUncheckedUpdateManyWithoutUsersNestedInput
    post_comments?: post_commentsUncheckedUpdateManyWithoutCreatorNestedInput
    posts?: postsUncheckedUpdateManyWithoutCreatorNestedInput
    profiles?: profilesUncheckedUpdateOneWithoutUsersNestedInput
    workspaces?: workspacesUncheckedUpdateManyWithoutUsersNestedInput
    workspace_users?: workspace_usersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutLikesInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    first_name?: string | null
    last_name?: string | null
    email: string
    password?: string | null
    image?: string | null
    is_super_admin?: boolean | null
    username?: string | null
    files?: filesCreateNestedManyWithoutUsersInput
    post_comments?: post_commentsCreateNestedManyWithoutCreatorInput
    posts?: postsCreateNestedManyWithoutCreatorInput
    profiles?: profilesCreateNestedOneWithoutUsersInput
    workspaces?: workspacesCreateNestedManyWithoutUsersInput
    workspace_users?: workspace_usersCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutLikesInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    first_name?: string | null
    last_name?: string | null
    email: string
    password?: string | null
    image?: string | null
    is_super_admin?: boolean | null
    username?: string | null
    files?: filesUncheckedCreateNestedManyWithoutUsersInput
    post_comments?: post_commentsUncheckedCreateNestedManyWithoutCreatorInput
    posts?: postsUncheckedCreateNestedManyWithoutCreatorInput
    profiles?: profilesUncheckedCreateNestedOneWithoutUsersInput
    workspaces?: workspacesUncheckedCreateNestedManyWithoutUsersInput
    workspace_users?: workspace_usersUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutLikesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutLikesInput, usersUncheckedCreateWithoutLikesInput>
  }

  export type postsCreateWithoutLikesInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    title?: string | null
    body?: string | null
    slug?: string | null
    photo_url?: string | null
    published?: boolean | null
    post_comments?: post_commentsCreateNestedManyWithoutPostsInput
    creator?: usersCreateNestedOneWithoutPostsInput
    tags?: posts_to_tagsCreateNestedManyWithoutPostInput
  }

  export type postsUncheckedCreateWithoutLikesInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    title?: string | null
    created_by?: string | null
    body?: string | null
    slug?: string | null
    photo_url?: string | null
    published?: boolean | null
    post_comments?: post_commentsUncheckedCreateNestedManyWithoutPostsInput
    tags?: posts_to_tagsUncheckedCreateNestedManyWithoutPostInput
  }

  export type postsCreateOrConnectWithoutLikesInput = {
    where: postsWhereUniqueInput
    create: XOR<postsCreateWithoutLikesInput, postsUncheckedCreateWithoutLikesInput>
  }

  export type usersUpsertWithoutLikesInput = {
    update: XOR<usersUpdateWithoutLikesInput, usersUncheckedUpdateWithoutLikesInput>
    create: XOR<usersCreateWithoutLikesInput, usersUncheckedCreateWithoutLikesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutLikesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutLikesInput, usersUncheckedUpdateWithoutLikesInput>
  }

  export type usersUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    is_super_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    files?: filesUpdateManyWithoutUsersNestedInput
    post_comments?: post_commentsUpdateManyWithoutCreatorNestedInput
    posts?: postsUpdateManyWithoutCreatorNestedInput
    profiles?: profilesUpdateOneWithoutUsersNestedInput
    workspaces?: workspacesUpdateManyWithoutUsersNestedInput
    workspace_users?: workspace_usersUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    is_super_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    files?: filesUncheckedUpdateManyWithoutUsersNestedInput
    post_comments?: post_commentsUncheckedUpdateManyWithoutCreatorNestedInput
    posts?: postsUncheckedUpdateManyWithoutCreatorNestedInput
    profiles?: profilesUncheckedUpdateOneWithoutUsersNestedInput
    workspaces?: workspacesUncheckedUpdateManyWithoutUsersNestedInput
    workspace_users?: workspace_usersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type postsUpsertWithoutLikesInput = {
    update: XOR<postsUpdateWithoutLikesInput, postsUncheckedUpdateWithoutLikesInput>
    create: XOR<postsCreateWithoutLikesInput, postsUncheckedCreateWithoutLikesInput>
    where?: postsWhereInput
  }

  export type postsUpdateToOneWithWhereWithoutLikesInput = {
    where?: postsWhereInput
    data: XOR<postsUpdateWithoutLikesInput, postsUncheckedUpdateWithoutLikesInput>
  }

  export type postsUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableBoolFieldUpdateOperationsInput | boolean | null
    post_comments?: post_commentsUpdateManyWithoutPostsNestedInput
    creator?: usersUpdateOneWithoutPostsNestedInput
    tags?: posts_to_tagsUpdateManyWithoutPostNestedInput
  }

  export type postsUncheckedUpdateWithoutLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableBoolFieldUpdateOperationsInput | boolean | null
    post_comments?: post_commentsUncheckedUpdateManyWithoutPostsNestedInput
    tags?: posts_to_tagsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type usersCreateWithoutProfilesInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    first_name?: string | null
    last_name?: string | null
    email: string
    password?: string | null
    image?: string | null
    is_super_admin?: boolean | null
    username?: string | null
    files?: filesCreateNestedManyWithoutUsersInput
    likes?: likesCreateNestedManyWithoutUsersInput
    post_comments?: post_commentsCreateNestedManyWithoutCreatorInput
    posts?: postsCreateNestedManyWithoutCreatorInput
    workspaces?: workspacesCreateNestedManyWithoutUsersInput
    workspace_users?: workspace_usersCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutProfilesInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    first_name?: string | null
    last_name?: string | null
    email: string
    password?: string | null
    image?: string | null
    is_super_admin?: boolean | null
    username?: string | null
    files?: filesUncheckedCreateNestedManyWithoutUsersInput
    likes?: likesUncheckedCreateNestedManyWithoutUsersInput
    post_comments?: post_commentsUncheckedCreateNestedManyWithoutCreatorInput
    posts?: postsUncheckedCreateNestedManyWithoutCreatorInput
    workspaces?: workspacesUncheckedCreateNestedManyWithoutUsersInput
    workspace_users?: workspace_usersUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutProfilesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProfilesInput, usersUncheckedCreateWithoutProfilesInput>
  }

  export type usersUpsertWithoutProfilesInput = {
    update: XOR<usersUpdateWithoutProfilesInput, usersUncheckedUpdateWithoutProfilesInput>
    create: XOR<usersCreateWithoutProfilesInput, usersUncheckedCreateWithoutProfilesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProfilesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProfilesInput, usersUncheckedUpdateWithoutProfilesInput>
  }

  export type usersUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    is_super_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    files?: filesUpdateManyWithoutUsersNestedInput
    likes?: likesUpdateManyWithoutUsersNestedInput
    post_comments?: post_commentsUpdateManyWithoutCreatorNestedInput
    posts?: postsUpdateManyWithoutCreatorNestedInput
    workspaces?: workspacesUpdateManyWithoutUsersNestedInput
    workspace_users?: workspace_usersUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutProfilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    is_super_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    files?: filesUncheckedUpdateManyWithoutUsersNestedInput
    likes?: likesUncheckedUpdateManyWithoutUsersNestedInput
    post_comments?: post_commentsUncheckedUpdateManyWithoutCreatorNestedInput
    posts?: postsUncheckedUpdateManyWithoutCreatorNestedInput
    workspaces?: workspacesUncheckedUpdateManyWithoutUsersNestedInput
    workspace_users?: workspace_usersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersCreateWithoutWorkspacesInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    first_name?: string | null
    last_name?: string | null
    email: string
    password?: string | null
    image?: string | null
    is_super_admin?: boolean | null
    username?: string | null
    files?: filesCreateNestedManyWithoutUsersInput
    likes?: likesCreateNestedManyWithoutUsersInput
    post_comments?: post_commentsCreateNestedManyWithoutCreatorInput
    posts?: postsCreateNestedManyWithoutCreatorInput
    profiles?: profilesCreateNestedOneWithoutUsersInput
    workspace_users?: workspace_usersCreateNestedManyWithoutUserInput
  }

  export type usersUncheckedCreateWithoutWorkspacesInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    first_name?: string | null
    last_name?: string | null
    email: string
    password?: string | null
    image?: string | null
    is_super_admin?: boolean | null
    username?: string | null
    files?: filesUncheckedCreateNestedManyWithoutUsersInput
    likes?: likesUncheckedCreateNestedManyWithoutUsersInput
    post_comments?: post_commentsUncheckedCreateNestedManyWithoutCreatorInput
    posts?: postsUncheckedCreateNestedManyWithoutCreatorInput
    profiles?: profilesUncheckedCreateNestedOneWithoutUsersInput
    workspace_users?: workspace_usersUncheckedCreateNestedManyWithoutUserInput
  }

  export type usersCreateOrConnectWithoutWorkspacesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutWorkspacesInput, usersUncheckedCreateWithoutWorkspacesInput>
  }

  export type workspace_usersCreateWithoutWorkspaceInput = {
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    user: usersCreateNestedOneWithoutWorkspace_usersInput
  }

  export type workspace_usersUncheckedCreateWithoutWorkspaceInput = {
    user_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type workspace_usersCreateOrConnectWithoutWorkspaceInput = {
    where: workspace_usersWhereUniqueInput
    create: XOR<workspace_usersCreateWithoutWorkspaceInput, workspace_usersUncheckedCreateWithoutWorkspaceInput>
  }

  export type workspace_usersCreateManyWorkspaceInputEnvelope = {
    data: workspace_usersCreateManyWorkspaceInput | workspace_usersCreateManyWorkspaceInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithWhereUniqueWithoutWorkspacesInput = {
    where: usersWhereUniqueInput
    update: XOR<usersUpdateWithoutWorkspacesInput, usersUncheckedUpdateWithoutWorkspacesInput>
    create: XOR<usersCreateWithoutWorkspacesInput, usersUncheckedCreateWithoutWorkspacesInput>
  }

  export type usersUpdateWithWhereUniqueWithoutWorkspacesInput = {
    where: usersWhereUniqueInput
    data: XOR<usersUpdateWithoutWorkspacesInput, usersUncheckedUpdateWithoutWorkspacesInput>
  }

  export type usersUpdateManyWithWhereWithoutWorkspacesInput = {
    where: usersScalarWhereInput
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyWithoutWorkspacesInput>
  }

  export type usersScalarWhereInput = {
    AND?: usersScalarWhereInput | usersScalarWhereInput[]
    OR?: usersScalarWhereInput[]
    NOT?: usersScalarWhereInput | usersScalarWhereInput[]
    id?: UuidFilter<"users"> | string
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    deleted_at?: DateTimeNullableFilter<"users"> | Date | string | null
    first_name?: StringNullableFilter<"users"> | string | null
    last_name?: StringNullableFilter<"users"> | string | null
    email?: StringFilter<"users"> | string
    password?: StringNullableFilter<"users"> | string | null
    image?: StringNullableFilter<"users"> | string | null
    is_super_admin?: BoolNullableFilter<"users"> | boolean | null
    username?: StringNullableFilter<"users"> | string | null
  }

  export type workspace_usersUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: workspace_usersWhereUniqueInput
    update: XOR<workspace_usersUpdateWithoutWorkspaceInput, workspace_usersUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<workspace_usersCreateWithoutWorkspaceInput, workspace_usersUncheckedCreateWithoutWorkspaceInput>
  }

  export type workspace_usersUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: workspace_usersWhereUniqueInput
    data: XOR<workspace_usersUpdateWithoutWorkspaceInput, workspace_usersUncheckedUpdateWithoutWorkspaceInput>
  }

  export type workspace_usersUpdateManyWithWhereWithoutWorkspaceInput = {
    where: workspace_usersScalarWhereInput
    data: XOR<workspace_usersUpdateManyMutationInput, workspace_usersUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type workspacesCreateWithoutWorkspace_usersInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    name?: string | null
    users?: usersCreateNestedManyWithoutWorkspacesInput
  }

  export type workspacesUncheckedCreateWithoutWorkspace_usersInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    name?: string | null
    users?: usersUncheckedCreateNestedManyWithoutWorkspacesInput
  }

  export type workspacesCreateOrConnectWithoutWorkspace_usersInput = {
    where: workspacesWhereUniqueInput
    create: XOR<workspacesCreateWithoutWorkspace_usersInput, workspacesUncheckedCreateWithoutWorkspace_usersInput>
  }

  export type usersCreateWithoutWorkspace_usersInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    first_name?: string | null
    last_name?: string | null
    email: string
    password?: string | null
    image?: string | null
    is_super_admin?: boolean | null
    username?: string | null
    files?: filesCreateNestedManyWithoutUsersInput
    likes?: likesCreateNestedManyWithoutUsersInput
    post_comments?: post_commentsCreateNestedManyWithoutCreatorInput
    posts?: postsCreateNestedManyWithoutCreatorInput
    profiles?: profilesCreateNestedOneWithoutUsersInput
    workspaces?: workspacesCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutWorkspace_usersInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    first_name?: string | null
    last_name?: string | null
    email: string
    password?: string | null
    image?: string | null
    is_super_admin?: boolean | null
    username?: string | null
    files?: filesUncheckedCreateNestedManyWithoutUsersInput
    likes?: likesUncheckedCreateNestedManyWithoutUsersInput
    post_comments?: post_commentsUncheckedCreateNestedManyWithoutCreatorInput
    posts?: postsUncheckedCreateNestedManyWithoutCreatorInput
    profiles?: profilesUncheckedCreateNestedOneWithoutUsersInput
    workspaces?: workspacesUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutWorkspace_usersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutWorkspace_usersInput, usersUncheckedCreateWithoutWorkspace_usersInput>
  }

  export type workspacesUpsertWithoutWorkspace_usersInput = {
    update: XOR<workspacesUpdateWithoutWorkspace_usersInput, workspacesUncheckedUpdateWithoutWorkspace_usersInput>
    create: XOR<workspacesCreateWithoutWorkspace_usersInput, workspacesUncheckedCreateWithoutWorkspace_usersInput>
    where?: workspacesWhereInput
  }

  export type workspacesUpdateToOneWithWhereWithoutWorkspace_usersInput = {
    where?: workspacesWhereInput
    data: XOR<workspacesUpdateWithoutWorkspace_usersInput, workspacesUncheckedUpdateWithoutWorkspace_usersInput>
  }

  export type workspacesUpdateWithoutWorkspace_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateManyWithoutWorkspacesNestedInput
  }

  export type workspacesUncheckedUpdateWithoutWorkspace_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUncheckedUpdateManyWithoutWorkspacesNestedInput
  }

  export type usersUpsertWithoutWorkspace_usersInput = {
    update: XOR<usersUpdateWithoutWorkspace_usersInput, usersUncheckedUpdateWithoutWorkspace_usersInput>
    create: XOR<usersCreateWithoutWorkspace_usersInput, usersUncheckedCreateWithoutWorkspace_usersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutWorkspace_usersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutWorkspace_usersInput, usersUncheckedUpdateWithoutWorkspace_usersInput>
  }

  export type usersUpdateWithoutWorkspace_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    is_super_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    files?: filesUpdateManyWithoutUsersNestedInput
    likes?: likesUpdateManyWithoutUsersNestedInput
    post_comments?: post_commentsUpdateManyWithoutCreatorNestedInput
    posts?: postsUpdateManyWithoutCreatorNestedInput
    profiles?: profilesUpdateOneWithoutUsersNestedInput
    workspaces?: workspacesUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutWorkspace_usersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    is_super_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    files?: filesUncheckedUpdateManyWithoutUsersNestedInput
    likes?: likesUncheckedUpdateManyWithoutUsersNestedInput
    post_comments?: post_commentsUncheckedUpdateManyWithoutCreatorNestedInput
    posts?: postsUncheckedUpdateManyWithoutCreatorNestedInput
    profiles?: profilesUncheckedUpdateOneWithoutUsersNestedInput
    workspaces?: workspacesUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type likesCreateManyPostsInput = {
    id?: number
    created_at?: Date | string | null
    created_by?: string | null
  }

  export type post_commentsCreateManyPostsInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    text?: string | null
    parrent_comment_id?: bigint | number | null
    created_by?: string | null
  }

  export type posts_to_tagsCreateManyPostInput = {
    tag_id: number
  }

  export type likesUpdateWithoutPostsInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutLikesNestedInput
  }

  export type likesUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type likesUncheckedUpdateManyWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type post_commentsUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    parrent_comment_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    creator?: usersUpdateOneWithoutPost_commentsNestedInput
  }

  export type post_commentsUncheckedUpdateWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    parrent_comment_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type post_commentsUncheckedUpdateManyWithoutPostsInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    parrent_comment_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    created_by?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type posts_to_tagsUpdateWithoutPostInput = {
    tag?: tagsUpdateOneRequiredWithoutPosts_to_tagsNestedInput
  }

  export type posts_to_tagsUncheckedUpdateWithoutPostInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type posts_to_tagsUncheckedUpdateManyWithoutPostInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type filesCreateManyUsersInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    name?: string | null
    path?: string | null
    size?: number | null
    type?: string | null
  }

  export type likesCreateManyUsersInput = {
    id?: number
    created_at?: Date | string | null
    post_id?: string | null
  }

  export type post_commentsCreateManyCreatorInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    text?: string | null
    post_id?: string | null
    parrent_comment_id?: bigint | number | null
  }

  export type postsCreateManyCreatorInput = {
    id?: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
    title?: string | null
    body?: string | null
    slug?: string | null
    photo_url?: string | null
    published?: boolean | null
  }

  export type workspace_usersCreateManyUserInput = {
    workspace_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type filesUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type filesUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type filesUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    path?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type likesUpdateWithoutUsersInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    posts?: postsUpdateOneWithoutLikesNestedInput
  }

  export type likesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    post_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type likesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    post_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type post_commentsUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    parrent_comment_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    posts?: postsUpdateOneWithoutPost_commentsNestedInput
  }

  export type post_commentsUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    post_id?: NullableStringFieldUpdateOperationsInput | string | null
    parrent_comment_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type post_commentsUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    text?: NullableStringFieldUpdateOperationsInput | string | null
    post_id?: NullableStringFieldUpdateOperationsInput | string | null
    parrent_comment_id?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
  }

  export type postsUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableBoolFieldUpdateOperationsInput | boolean | null
    likes?: likesUpdateManyWithoutPostsNestedInput
    post_comments?: post_commentsUpdateManyWithoutPostsNestedInput
    tags?: posts_to_tagsUpdateManyWithoutPostNestedInput
  }

  export type postsUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableBoolFieldUpdateOperationsInput | boolean | null
    likes?: likesUncheckedUpdateManyWithoutPostsNestedInput
    post_comments?: post_commentsUncheckedUpdateManyWithoutPostsNestedInput
    tags?: posts_to_tagsUncheckedUpdateManyWithoutPostNestedInput
  }

  export type postsUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    body?: NullableStringFieldUpdateOperationsInput | string | null
    slug?: NullableStringFieldUpdateOperationsInput | string | null
    photo_url?: NullableStringFieldUpdateOperationsInput | string | null
    published?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type workspacesUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    workspace_users?: workspace_usersUpdateManyWithoutWorkspaceNestedInput
  }

  export type workspacesUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    workspace_users?: workspace_usersUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type workspacesUncheckedUpdateManyWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type workspace_usersUpdateWithoutUserInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    workspace?: workspacesUpdateOneRequiredWithoutWorkspace_usersNestedInput
  }

  export type workspace_usersUncheckedUpdateWithoutUserInput = {
    workspace_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workspace_usersUncheckedUpdateManyWithoutUserInput = {
    workspace_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type posts_to_tagsCreateManyTagInput = {
    post_id: string
  }

  export type posts_to_tagsUpdateWithoutTagInput = {
    post?: postsUpdateOneRequiredWithoutTagsNestedInput
  }

  export type posts_to_tagsUncheckedUpdateWithoutTagInput = {
    post_id?: StringFieldUpdateOperationsInput | string
  }

  export type posts_to_tagsUncheckedUpdateManyWithoutTagInput = {
    post_id?: StringFieldUpdateOperationsInput | string
  }

  export type workspace_usersCreateManyWorkspaceInput = {
    user_id: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    deleted_at?: Date | string | null
  }

  export type usersUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    is_super_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    files?: filesUpdateManyWithoutUsersNestedInput
    likes?: likesUpdateManyWithoutUsersNestedInput
    post_comments?: post_commentsUpdateManyWithoutCreatorNestedInput
    posts?: postsUpdateManyWithoutCreatorNestedInput
    profiles?: profilesUpdateOneWithoutUsersNestedInput
    workspace_users?: workspace_usersUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    is_super_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
    files?: filesUncheckedUpdateManyWithoutUsersNestedInput
    likes?: likesUncheckedUpdateManyWithoutUsersNestedInput
    post_comments?: post_commentsUncheckedUpdateManyWithoutCreatorNestedInput
    posts?: postsUncheckedUpdateManyWithoutCreatorNestedInput
    profiles?: profilesUncheckedUpdateOneWithoutUsersNestedInput
    workspace_users?: workspace_usersUncheckedUpdateManyWithoutUserNestedInput
  }

  export type usersUncheckedUpdateManyWithoutWorkspacesInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    is_super_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    username?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type workspace_usersUpdateWithoutWorkspaceInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: usersUpdateOneRequiredWithoutWorkspace_usersNestedInput
  }

  export type workspace_usersUncheckedUpdateWithoutWorkspaceInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type workspace_usersUncheckedUpdateManyWithoutWorkspaceInput = {
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deleted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}