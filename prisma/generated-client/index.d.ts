
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Template
 * 
 */
export type Template = $Result.DefaultSelection<Prisma.$TemplatePayload>
/**
 * Model TemplateField
 * 
 */
export type TemplateField = $Result.DefaultSelection<Prisma.$TemplateFieldPayload>
/**
 * Model GeneratedDocument
 * 
 */
export type GeneratedDocument = $Result.DefaultSelection<Prisma.$GeneratedDocumentPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.template`: Exposes CRUD operations for the **Template** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Templates
    * const templates = await prisma.template.findMany()
    * ```
    */
  get template(): Prisma.TemplateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.templateField`: Exposes CRUD operations for the **TemplateField** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TemplateFields
    * const templateFields = await prisma.templateField.findMany()
    * ```
    */
  get templateField(): Prisma.TemplateFieldDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.generatedDocument`: Exposes CRUD operations for the **GeneratedDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GeneratedDocuments
    * const generatedDocuments = await prisma.generatedDocument.findMany()
    * ```
    */
  get generatedDocument(): Prisma.GeneratedDocumentDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    User: 'User',
    Template: 'Template',
    TemplateField: 'TemplateField',
    GeneratedDocument: 'GeneratedDocument'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "template" | "templateField" | "generatedDocument"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Template: {
        payload: Prisma.$TemplatePayload<ExtArgs>
        fields: Prisma.TemplateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findFirst: {
            args: Prisma.TemplateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          findMany: {
            args: Prisma.TemplateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          create: {
            args: Prisma.TemplateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          createMany: {
            args: Prisma.TemplateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          delete: {
            args: Prisma.TemplateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          update: {
            args: Prisma.TemplateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          deleteMany: {
            args: Prisma.TemplateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemplateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>[]
          }
          upsert: {
            args: Prisma.TemplateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplatePayload>
          }
          aggregate: {
            args: Prisma.TemplateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplate>
          }
          groupBy: {
            args: Prisma.TemplateGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateCountAggregateOutputType> | number
          }
        }
      }
      TemplateField: {
        payload: Prisma.$TemplateFieldPayload<ExtArgs>
        fields: Prisma.TemplateFieldFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TemplateFieldFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TemplateFieldFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>
          }
          findFirst: {
            args: Prisma.TemplateFieldFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TemplateFieldFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>
          }
          findMany: {
            args: Prisma.TemplateFieldFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>[]
          }
          create: {
            args: Prisma.TemplateFieldCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>
          }
          createMany: {
            args: Prisma.TemplateFieldCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TemplateFieldCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>[]
          }
          delete: {
            args: Prisma.TemplateFieldDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>
          }
          update: {
            args: Prisma.TemplateFieldUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>
          }
          deleteMany: {
            args: Prisma.TemplateFieldDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TemplateFieldUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TemplateFieldUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>[]
          }
          upsert: {
            args: Prisma.TemplateFieldUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TemplateFieldPayload>
          }
          aggregate: {
            args: Prisma.TemplateFieldAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTemplateField>
          }
          groupBy: {
            args: Prisma.TemplateFieldGroupByArgs<ExtArgs>
            result: $Utils.Optional<TemplateFieldGroupByOutputType>[]
          }
          count: {
            args: Prisma.TemplateFieldCountArgs<ExtArgs>
            result: $Utils.Optional<TemplateFieldCountAggregateOutputType> | number
          }
        }
      }
      GeneratedDocument: {
        payload: Prisma.$GeneratedDocumentPayload<ExtArgs>
        fields: Prisma.GeneratedDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GeneratedDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GeneratedDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedDocumentPayload>
          }
          findFirst: {
            args: Prisma.GeneratedDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GeneratedDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedDocumentPayload>
          }
          findMany: {
            args: Prisma.GeneratedDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedDocumentPayload>[]
          }
          create: {
            args: Prisma.GeneratedDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedDocumentPayload>
          }
          createMany: {
            args: Prisma.GeneratedDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GeneratedDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedDocumentPayload>[]
          }
          delete: {
            args: Prisma.GeneratedDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedDocumentPayload>
          }
          update: {
            args: Prisma.GeneratedDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedDocumentPayload>
          }
          deleteMany: {
            args: Prisma.GeneratedDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GeneratedDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GeneratedDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedDocumentPayload>[]
          }
          upsert: {
            args: Prisma.GeneratedDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GeneratedDocumentPayload>
          }
          aggregate: {
            args: Prisma.GeneratedDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGeneratedDocument>
          }
          groupBy: {
            args: Prisma.GeneratedDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<GeneratedDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.GeneratedDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<GeneratedDocumentCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    template?: TemplateOmit
    templateField?: TemplateFieldOmit
    generatedDocument?: GeneratedDocumentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    generatedDocs: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generatedDocs?: boolean | UserCountOutputTypeCountGeneratedDocsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGeneratedDocsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneratedDocumentWhereInput
  }


  /**
   * Count Type TemplateCountOutputType
   */

  export type TemplateCountOutputType = {
    fields: number
    generatedDocuments: number
  }

  export type TemplateCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fields?: boolean | TemplateCountOutputTypeCountFieldsArgs
    generatedDocuments?: boolean | TemplateCountOutputTypeCountGeneratedDocumentsArgs
  }

  // Custom InputTypes
  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateCountOutputType
     */
    select?: TemplateCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeCountFieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateFieldWhereInput
  }

  /**
   * TemplateCountOutputType without action
   */
  export type TemplateCountOutputTypeCountGeneratedDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneratedDocumentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    username: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    firstName: number
    lastName: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    username: string
    email: string
    password: string
    firstName: string | null
    lastName: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
    generatedDocs?: boolean | User$generatedDocsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "firstName" | "lastName" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    generatedDocs?: boolean | User$generatedDocsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      generatedDocs: Prisma.$GeneratedDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      email: string
      password: string
      firstName: string | null
      lastName: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    generatedDocs<T extends User$generatedDocsArgs<ExtArgs> = {}>(args?: Subset<T, User$generatedDocsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.generatedDocs
   */
  export type User$generatedDocsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
    where?: GeneratedDocumentWhereInput
    orderBy?: GeneratedDocumentOrderByWithRelationInput | GeneratedDocumentOrderByWithRelationInput[]
    cursor?: GeneratedDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GeneratedDocumentScalarFieldEnum | GeneratedDocumentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Template
   */

  export type AggregateTemplate = {
    _count: TemplateCountAggregateOutputType | null
    _avg: TemplateAvgAggregateOutputType | null
    _sum: TemplateSumAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  export type TemplateAvgAggregateOutputType = {
    id: number | null
  }

  export type TemplateSumAggregateOutputType = {
    id: number | null
  }

  export type TemplateMinAggregateOutputType = {
    id: number | null
    name: string | null
    templateFile: string | null
    parsedTemplateFile: string | null
    createdAt: Date | null
    active: boolean | null
  }

  export type TemplateMaxAggregateOutputType = {
    id: number | null
    name: string | null
    templateFile: string | null
    parsedTemplateFile: string | null
    createdAt: Date | null
    active: boolean | null
  }

  export type TemplateCountAggregateOutputType = {
    id: number
    name: number
    templateFile: number
    parsedTemplateFile: number
    createdAt: number
    active: number
    _all: number
  }


  export type TemplateAvgAggregateInputType = {
    id?: true
  }

  export type TemplateSumAggregateInputType = {
    id?: true
  }

  export type TemplateMinAggregateInputType = {
    id?: true
    name?: true
    templateFile?: true
    parsedTemplateFile?: true
    createdAt?: true
    active?: true
  }

  export type TemplateMaxAggregateInputType = {
    id?: true
    name?: true
    templateFile?: true
    parsedTemplateFile?: true
    createdAt?: true
    active?: true
  }

  export type TemplateCountAggregateInputType = {
    id?: true
    name?: true
    templateFile?: true
    parsedTemplateFile?: true
    createdAt?: true
    active?: true
    _all?: true
  }

  export type TemplateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Template to aggregate.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Templates
    **/
    _count?: true | TemplateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemplateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemplateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateMaxAggregateInputType
  }

  export type GetTemplateAggregateType<T extends TemplateAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplate[P]>
      : GetScalarType<T[P], AggregateTemplate[P]>
  }




  export type TemplateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateWhereInput
    orderBy?: TemplateOrderByWithAggregationInput | TemplateOrderByWithAggregationInput[]
    by: TemplateScalarFieldEnum[] | TemplateScalarFieldEnum
    having?: TemplateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateCountAggregateInputType | true
    _avg?: TemplateAvgAggregateInputType
    _sum?: TemplateSumAggregateInputType
    _min?: TemplateMinAggregateInputType
    _max?: TemplateMaxAggregateInputType
  }

  export type TemplateGroupByOutputType = {
    id: number
    name: string
    templateFile: string
    parsedTemplateFile: string | null
    createdAt: Date
    active: boolean
    _count: TemplateCountAggregateOutputType | null
    _avg: TemplateAvgAggregateOutputType | null
    _sum: TemplateSumAggregateOutputType | null
    _min: TemplateMinAggregateOutputType | null
    _max: TemplateMaxAggregateOutputType | null
  }

  type GetTemplateGroupByPayload<T extends TemplateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateGroupByOutputType[P]>
        }
      >
    >


  export type TemplateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    templateFile?: boolean
    parsedTemplateFile?: boolean
    createdAt?: boolean
    active?: boolean
    fields?: boolean | Template$fieldsArgs<ExtArgs>
    generatedDocuments?: boolean | Template$generatedDocumentsArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    templateFile?: boolean
    parsedTemplateFile?: boolean
    createdAt?: boolean
    active?: boolean
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    templateFile?: boolean
    parsedTemplateFile?: boolean
    createdAt?: boolean
    active?: boolean
  }, ExtArgs["result"]["template"]>

  export type TemplateSelectScalar = {
    id?: boolean
    name?: boolean
    templateFile?: boolean
    parsedTemplateFile?: boolean
    createdAt?: boolean
    active?: boolean
  }

  export type TemplateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "templateFile" | "parsedTemplateFile" | "createdAt" | "active", ExtArgs["result"]["template"]>
  export type TemplateInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    fields?: boolean | Template$fieldsArgs<ExtArgs>
    generatedDocuments?: boolean | Template$generatedDocumentsArgs<ExtArgs>
    _count?: boolean | TemplateCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TemplateIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TemplateIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TemplatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Template"
    objects: {
      fields: Prisma.$TemplateFieldPayload<ExtArgs>[]
      generatedDocuments: Prisma.$GeneratedDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      templateFile: string
      parsedTemplateFile: string | null
      createdAt: Date
      active: boolean
    }, ExtArgs["result"]["template"]>
    composites: {}
  }

  type TemplateGetPayload<S extends boolean | null | undefined | TemplateDefaultArgs> = $Result.GetResult<Prisma.$TemplatePayload, S>

  type TemplateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateCountAggregateInputType | true
    }

  export interface TemplateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Template'], meta: { name: 'Template' } }
    /**
     * Find zero or one Template that matches the filter.
     * @param {TemplateFindUniqueArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateFindUniqueArgs>(args: SelectSubset<T, TemplateFindUniqueArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Template that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateFindUniqueOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateFindFirstArgs>(args?: SelectSubset<T, TemplateFindFirstArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Template that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindFirstOrThrowArgs} args - Arguments to find a Template
     * @example
     * // Get one Template
     * const template = await prisma.template.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Templates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Templates
     * const templates = await prisma.template.findMany()
     * 
     * // Get first 10 Templates
     * const templates = await prisma.template.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateWithIdOnly = await prisma.template.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateFindManyArgs>(args?: SelectSubset<T, TemplateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Template.
     * @param {TemplateCreateArgs} args - Arguments to create a Template.
     * @example
     * // Create one Template
     * const Template = await prisma.template.create({
     *   data: {
     *     // ... data to create a Template
     *   }
     * })
     * 
     */
    create<T extends TemplateCreateArgs>(args: SelectSubset<T, TemplateCreateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Templates.
     * @param {TemplateCreateManyArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateCreateManyArgs>(args?: SelectSubset<T, TemplateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Templates and returns the data saved in the database.
     * @param {TemplateCreateManyAndReturnArgs} args - Arguments to create many Templates.
     * @example
     * // Create many Templates
     * const template = await prisma.template.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Template.
     * @param {TemplateDeleteArgs} args - Arguments to delete one Template.
     * @example
     * // Delete one Template
     * const Template = await prisma.template.delete({
     *   where: {
     *     // ... filter to delete one Template
     *   }
     * })
     * 
     */
    delete<T extends TemplateDeleteArgs>(args: SelectSubset<T, TemplateDeleteArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Template.
     * @param {TemplateUpdateArgs} args - Arguments to update one Template.
     * @example
     * // Update one Template
     * const template = await prisma.template.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateUpdateArgs>(args: SelectSubset<T, TemplateUpdateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Templates.
     * @param {TemplateDeleteManyArgs} args - Arguments to filter Templates to delete.
     * @example
     * // Delete a few Templates
     * const { count } = await prisma.template.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateDeleteManyArgs>(args?: SelectSubset<T, TemplateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateUpdateManyArgs>(args: SelectSubset<T, TemplateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Templates and returns the data updated in the database.
     * @param {TemplateUpdateManyAndReturnArgs} args - Arguments to update many Templates.
     * @example
     * // Update many Templates
     * const template = await prisma.template.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Templates and only return the `id`
     * const templateWithIdOnly = await prisma.template.updateManyAndReturn({
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
    updateManyAndReturn<T extends TemplateUpdateManyAndReturnArgs>(args: SelectSubset<T, TemplateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Template.
     * @param {TemplateUpsertArgs} args - Arguments to update or create a Template.
     * @example
     * // Update or create a Template
     * const template = await prisma.template.upsert({
     *   create: {
     *     // ... data to create a Template
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Template we want to update
     *   }
     * })
     */
    upsert<T extends TemplateUpsertArgs>(args: SelectSubset<T, TemplateUpsertArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Templates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateCountArgs} args - Arguments to filter Templates to count.
     * @example
     * // Count the number of Templates
     * const count = await prisma.template.count({
     *   where: {
     *     // ... the filter for the Templates we want to count
     *   }
     * })
    **/
    count<T extends TemplateCountArgs>(
      args?: Subset<T, TemplateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TemplateAggregateArgs>(args: Subset<T, TemplateAggregateArgs>): Prisma.PrismaPromise<GetTemplateAggregateType<T>>

    /**
     * Group by Template.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateGroupByArgs} args - Group by arguments.
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
      T extends TemplateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateGroupByArgs['orderBy'] }
        : { orderBy?: TemplateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TemplateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Template model
   */
  readonly fields: TemplateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Template.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    fields<T extends Template$fieldsArgs<ExtArgs> = {}>(args?: Subset<T, Template$fieldsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    generatedDocuments<T extends Template$generatedDocumentsArgs<ExtArgs> = {}>(args?: Subset<T, Template$generatedDocumentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Template model
   */
  interface TemplateFieldRefs {
    readonly id: FieldRef<"Template", 'Int'>
    readonly name: FieldRef<"Template", 'String'>
    readonly templateFile: FieldRef<"Template", 'String'>
    readonly parsedTemplateFile: FieldRef<"Template", 'String'>
    readonly createdAt: FieldRef<"Template", 'DateTime'>
    readonly active: FieldRef<"Template", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Template findUnique
   */
  export type TemplateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findUniqueOrThrow
   */
  export type TemplateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template findFirst
   */
  export type TemplateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findFirstOrThrow
   */
  export type TemplateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Template to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template findMany
   */
  export type TemplateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter, which Templates to fetch.
     */
    where?: TemplateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Templates to fetch.
     */
    orderBy?: TemplateOrderByWithRelationInput | TemplateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Templates.
     */
    cursor?: TemplateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Templates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Templates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Templates.
     */
    distinct?: TemplateScalarFieldEnum | TemplateScalarFieldEnum[]
  }

  /**
   * Template create
   */
  export type TemplateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to create a Template.
     */
    data: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
  }

  /**
   * Template createMany
   */
  export type TemplateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
  }

  /**
   * Template createManyAndReturn
   */
  export type TemplateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to create many Templates.
     */
    data: TemplateCreateManyInput | TemplateCreateManyInput[]
  }

  /**
   * Template update
   */
  export type TemplateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The data needed to update a Template.
     */
    data: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
    /**
     * Choose, which Template to update.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template updateMany
   */
  export type TemplateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
  }

  /**
   * Template updateManyAndReturn
   */
  export type TemplateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * The data used to update Templates.
     */
    data: XOR<TemplateUpdateManyMutationInput, TemplateUncheckedUpdateManyInput>
    /**
     * Filter which Templates to update
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to update.
     */
    limit?: number
  }

  /**
   * Template upsert
   */
  export type TemplateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * The filter to search for the Template to update in case it exists.
     */
    where: TemplateWhereUniqueInput
    /**
     * In case the Template found by the `where` argument doesn't exist, create a new Template with this data.
     */
    create: XOR<TemplateCreateInput, TemplateUncheckedCreateInput>
    /**
     * In case the Template was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateUpdateInput, TemplateUncheckedUpdateInput>
  }

  /**
   * Template delete
   */
  export type TemplateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    /**
     * Filter which Template to delete.
     */
    where: TemplateWhereUniqueInput
  }

  /**
   * Template deleteMany
   */
  export type TemplateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Templates to delete
     */
    where?: TemplateWhereInput
    /**
     * Limit how many Templates to delete.
     */
    limit?: number
  }

  /**
   * Template.fields
   */
  export type Template$fieldsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    where?: TemplateFieldWhereInput
    orderBy?: TemplateFieldOrderByWithRelationInput | TemplateFieldOrderByWithRelationInput[]
    cursor?: TemplateFieldWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TemplateFieldScalarFieldEnum | TemplateFieldScalarFieldEnum[]
  }

  /**
   * Template.generatedDocuments
   */
  export type Template$generatedDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
    where?: GeneratedDocumentWhereInput
    orderBy?: GeneratedDocumentOrderByWithRelationInput | GeneratedDocumentOrderByWithRelationInput[]
    cursor?: GeneratedDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GeneratedDocumentScalarFieldEnum | GeneratedDocumentScalarFieldEnum[]
  }

  /**
   * Template without action
   */
  export type TemplateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
  }


  /**
   * Model TemplateField
   */

  export type AggregateTemplateField = {
    _count: TemplateFieldCountAggregateOutputType | null
    _avg: TemplateFieldAvgAggregateOutputType | null
    _sum: TemplateFieldSumAggregateOutputType | null
    _min: TemplateFieldMinAggregateOutputType | null
    _max: TemplateFieldMaxAggregateOutputType | null
  }

  export type TemplateFieldAvgAggregateOutputType = {
    id: number | null
    templateId: number | null
  }

  export type TemplateFieldSumAggregateOutputType = {
    id: number | null
    templateId: number | null
  }

  export type TemplateFieldMinAggregateOutputType = {
    id: number | null
    templateId: number | null
    fieldName: string | null
    label: string | null
    fieldType: string | null
    isTable: boolean | null
  }

  export type TemplateFieldMaxAggregateOutputType = {
    id: number | null
    templateId: number | null
    fieldName: string | null
    label: string | null
    fieldType: string | null
    isTable: boolean | null
  }

  export type TemplateFieldCountAggregateOutputType = {
    id: number
    templateId: number
    fieldName: number
    label: number
    fieldType: number
    isTable: number
    _all: number
  }


  export type TemplateFieldAvgAggregateInputType = {
    id?: true
    templateId?: true
  }

  export type TemplateFieldSumAggregateInputType = {
    id?: true
    templateId?: true
  }

  export type TemplateFieldMinAggregateInputType = {
    id?: true
    templateId?: true
    fieldName?: true
    label?: true
    fieldType?: true
    isTable?: true
  }

  export type TemplateFieldMaxAggregateInputType = {
    id?: true
    templateId?: true
    fieldName?: true
    label?: true
    fieldType?: true
    isTable?: true
  }

  export type TemplateFieldCountAggregateInputType = {
    id?: true
    templateId?: true
    fieldName?: true
    label?: true
    fieldType?: true
    isTable?: true
    _all?: true
  }

  export type TemplateFieldAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateField to aggregate.
     */
    where?: TemplateFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateFields to fetch.
     */
    orderBy?: TemplateFieldOrderByWithRelationInput | TemplateFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TemplateFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TemplateFields
    **/
    _count?: true | TemplateFieldCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TemplateFieldAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TemplateFieldSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TemplateFieldMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TemplateFieldMaxAggregateInputType
  }

  export type GetTemplateFieldAggregateType<T extends TemplateFieldAggregateArgs> = {
        [P in keyof T & keyof AggregateTemplateField]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTemplateField[P]>
      : GetScalarType<T[P], AggregateTemplateField[P]>
  }




  export type TemplateFieldGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TemplateFieldWhereInput
    orderBy?: TemplateFieldOrderByWithAggregationInput | TemplateFieldOrderByWithAggregationInput[]
    by: TemplateFieldScalarFieldEnum[] | TemplateFieldScalarFieldEnum
    having?: TemplateFieldScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TemplateFieldCountAggregateInputType | true
    _avg?: TemplateFieldAvgAggregateInputType
    _sum?: TemplateFieldSumAggregateInputType
    _min?: TemplateFieldMinAggregateInputType
    _max?: TemplateFieldMaxAggregateInputType
  }

  export type TemplateFieldGroupByOutputType = {
    id: number
    templateId: number
    fieldName: string
    label: string
    fieldType: string
    isTable: boolean
    _count: TemplateFieldCountAggregateOutputType | null
    _avg: TemplateFieldAvgAggregateOutputType | null
    _sum: TemplateFieldSumAggregateOutputType | null
    _min: TemplateFieldMinAggregateOutputType | null
    _max: TemplateFieldMaxAggregateOutputType | null
  }

  type GetTemplateFieldGroupByPayload<T extends TemplateFieldGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TemplateFieldGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TemplateFieldGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TemplateFieldGroupByOutputType[P]>
            : GetScalarType<T[P], TemplateFieldGroupByOutputType[P]>
        }
      >
    >


  export type TemplateFieldSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    fieldName?: boolean
    label?: boolean
    fieldType?: boolean
    isTable?: boolean
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templateField"]>

  export type TemplateFieldSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    fieldName?: boolean
    label?: boolean
    fieldType?: boolean
    isTable?: boolean
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templateField"]>

  export type TemplateFieldSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    fieldName?: boolean
    label?: boolean
    fieldType?: boolean
    isTable?: boolean
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["templateField"]>

  export type TemplateFieldSelectScalar = {
    id?: boolean
    templateId?: boolean
    fieldName?: boolean
    label?: boolean
    fieldType?: boolean
    isTable?: boolean
  }

  export type TemplateFieldOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "templateId" | "fieldName" | "label" | "fieldType" | "isTable", ExtArgs["result"]["templateField"]>
  export type TemplateFieldInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }
  export type TemplateFieldIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }
  export type TemplateFieldIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | TemplateDefaultArgs<ExtArgs>
  }

  export type $TemplateFieldPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TemplateField"
    objects: {
      template: Prisma.$TemplatePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      templateId: number
      fieldName: string
      label: string
      fieldType: string
      isTable: boolean
    }, ExtArgs["result"]["templateField"]>
    composites: {}
  }

  type TemplateFieldGetPayload<S extends boolean | null | undefined | TemplateFieldDefaultArgs> = $Result.GetResult<Prisma.$TemplateFieldPayload, S>

  type TemplateFieldCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TemplateFieldFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TemplateFieldCountAggregateInputType | true
    }

  export interface TemplateFieldDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TemplateField'], meta: { name: 'TemplateField' } }
    /**
     * Find zero or one TemplateField that matches the filter.
     * @param {TemplateFieldFindUniqueArgs} args - Arguments to find a TemplateField
     * @example
     * // Get one TemplateField
     * const templateField = await prisma.templateField.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TemplateFieldFindUniqueArgs>(args: SelectSubset<T, TemplateFieldFindUniqueArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TemplateField that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TemplateFieldFindUniqueOrThrowArgs} args - Arguments to find a TemplateField
     * @example
     * // Get one TemplateField
     * const templateField = await prisma.templateField.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TemplateFieldFindUniqueOrThrowArgs>(args: SelectSubset<T, TemplateFieldFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemplateField that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFieldFindFirstArgs} args - Arguments to find a TemplateField
     * @example
     * // Get one TemplateField
     * const templateField = await prisma.templateField.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TemplateFieldFindFirstArgs>(args?: SelectSubset<T, TemplateFieldFindFirstArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TemplateField that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFieldFindFirstOrThrowArgs} args - Arguments to find a TemplateField
     * @example
     * // Get one TemplateField
     * const templateField = await prisma.templateField.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TemplateFieldFindFirstOrThrowArgs>(args?: SelectSubset<T, TemplateFieldFindFirstOrThrowArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TemplateFields that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFieldFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TemplateFields
     * const templateFields = await prisma.templateField.findMany()
     * 
     * // Get first 10 TemplateFields
     * const templateFields = await prisma.templateField.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const templateFieldWithIdOnly = await prisma.templateField.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TemplateFieldFindManyArgs>(args?: SelectSubset<T, TemplateFieldFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TemplateField.
     * @param {TemplateFieldCreateArgs} args - Arguments to create a TemplateField.
     * @example
     * // Create one TemplateField
     * const TemplateField = await prisma.templateField.create({
     *   data: {
     *     // ... data to create a TemplateField
     *   }
     * })
     * 
     */
    create<T extends TemplateFieldCreateArgs>(args: SelectSubset<T, TemplateFieldCreateArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TemplateFields.
     * @param {TemplateFieldCreateManyArgs} args - Arguments to create many TemplateFields.
     * @example
     * // Create many TemplateFields
     * const templateField = await prisma.templateField.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TemplateFieldCreateManyArgs>(args?: SelectSubset<T, TemplateFieldCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TemplateFields and returns the data saved in the database.
     * @param {TemplateFieldCreateManyAndReturnArgs} args - Arguments to create many TemplateFields.
     * @example
     * // Create many TemplateFields
     * const templateField = await prisma.templateField.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TemplateFields and only return the `id`
     * const templateFieldWithIdOnly = await prisma.templateField.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TemplateFieldCreateManyAndReturnArgs>(args?: SelectSubset<T, TemplateFieldCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TemplateField.
     * @param {TemplateFieldDeleteArgs} args - Arguments to delete one TemplateField.
     * @example
     * // Delete one TemplateField
     * const TemplateField = await prisma.templateField.delete({
     *   where: {
     *     // ... filter to delete one TemplateField
     *   }
     * })
     * 
     */
    delete<T extends TemplateFieldDeleteArgs>(args: SelectSubset<T, TemplateFieldDeleteArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TemplateField.
     * @param {TemplateFieldUpdateArgs} args - Arguments to update one TemplateField.
     * @example
     * // Update one TemplateField
     * const templateField = await prisma.templateField.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TemplateFieldUpdateArgs>(args: SelectSubset<T, TemplateFieldUpdateArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TemplateFields.
     * @param {TemplateFieldDeleteManyArgs} args - Arguments to filter TemplateFields to delete.
     * @example
     * // Delete a few TemplateFields
     * const { count } = await prisma.templateField.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TemplateFieldDeleteManyArgs>(args?: SelectSubset<T, TemplateFieldDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemplateFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFieldUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TemplateFields
     * const templateField = await prisma.templateField.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TemplateFieldUpdateManyArgs>(args: SelectSubset<T, TemplateFieldUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TemplateFields and returns the data updated in the database.
     * @param {TemplateFieldUpdateManyAndReturnArgs} args - Arguments to update many TemplateFields.
     * @example
     * // Update many TemplateFields
     * const templateField = await prisma.templateField.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TemplateFields and only return the `id`
     * const templateFieldWithIdOnly = await prisma.templateField.updateManyAndReturn({
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
    updateManyAndReturn<T extends TemplateFieldUpdateManyAndReturnArgs>(args: SelectSubset<T, TemplateFieldUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TemplateField.
     * @param {TemplateFieldUpsertArgs} args - Arguments to update or create a TemplateField.
     * @example
     * // Update or create a TemplateField
     * const templateField = await prisma.templateField.upsert({
     *   create: {
     *     // ... data to create a TemplateField
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TemplateField we want to update
     *   }
     * })
     */
    upsert<T extends TemplateFieldUpsertArgs>(args: SelectSubset<T, TemplateFieldUpsertArgs<ExtArgs>>): Prisma__TemplateFieldClient<$Result.GetResult<Prisma.$TemplateFieldPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TemplateFields.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFieldCountArgs} args - Arguments to filter TemplateFields to count.
     * @example
     * // Count the number of TemplateFields
     * const count = await prisma.templateField.count({
     *   where: {
     *     // ... the filter for the TemplateFields we want to count
     *   }
     * })
    **/
    count<T extends TemplateFieldCountArgs>(
      args?: Subset<T, TemplateFieldCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TemplateFieldCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TemplateField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFieldAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TemplateFieldAggregateArgs>(args: Subset<T, TemplateFieldAggregateArgs>): Prisma.PrismaPromise<GetTemplateFieldAggregateType<T>>

    /**
     * Group by TemplateField.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TemplateFieldGroupByArgs} args - Group by arguments.
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
      T extends TemplateFieldGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TemplateFieldGroupByArgs['orderBy'] }
        : { orderBy?: TemplateFieldGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TemplateFieldGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTemplateFieldGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TemplateField model
   */
  readonly fields: TemplateFieldFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TemplateField.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TemplateFieldClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    template<T extends TemplateDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TemplateDefaultArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the TemplateField model
   */
  interface TemplateFieldFieldRefs {
    readonly id: FieldRef<"TemplateField", 'Int'>
    readonly templateId: FieldRef<"TemplateField", 'Int'>
    readonly fieldName: FieldRef<"TemplateField", 'String'>
    readonly label: FieldRef<"TemplateField", 'String'>
    readonly fieldType: FieldRef<"TemplateField", 'String'>
    readonly isTable: FieldRef<"TemplateField", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * TemplateField findUnique
   */
  export type TemplateFieldFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * Filter, which TemplateField to fetch.
     */
    where: TemplateFieldWhereUniqueInput
  }

  /**
   * TemplateField findUniqueOrThrow
   */
  export type TemplateFieldFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * Filter, which TemplateField to fetch.
     */
    where: TemplateFieldWhereUniqueInput
  }

  /**
   * TemplateField findFirst
   */
  export type TemplateFieldFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * Filter, which TemplateField to fetch.
     */
    where?: TemplateFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateFields to fetch.
     */
    orderBy?: TemplateFieldOrderByWithRelationInput | TemplateFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateFields.
     */
    cursor?: TemplateFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateFields.
     */
    distinct?: TemplateFieldScalarFieldEnum | TemplateFieldScalarFieldEnum[]
  }

  /**
   * TemplateField findFirstOrThrow
   */
  export type TemplateFieldFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * Filter, which TemplateField to fetch.
     */
    where?: TemplateFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateFields to fetch.
     */
    orderBy?: TemplateFieldOrderByWithRelationInput | TemplateFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TemplateFields.
     */
    cursor?: TemplateFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateFields.
     */
    distinct?: TemplateFieldScalarFieldEnum | TemplateFieldScalarFieldEnum[]
  }

  /**
   * TemplateField findMany
   */
  export type TemplateFieldFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * Filter, which TemplateFields to fetch.
     */
    where?: TemplateFieldWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TemplateFields to fetch.
     */
    orderBy?: TemplateFieldOrderByWithRelationInput | TemplateFieldOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TemplateFields.
     */
    cursor?: TemplateFieldWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TemplateFields from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TemplateFields.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TemplateFields.
     */
    distinct?: TemplateFieldScalarFieldEnum | TemplateFieldScalarFieldEnum[]
  }

  /**
   * TemplateField create
   */
  export type TemplateFieldCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * The data needed to create a TemplateField.
     */
    data: XOR<TemplateFieldCreateInput, TemplateFieldUncheckedCreateInput>
  }

  /**
   * TemplateField createMany
   */
  export type TemplateFieldCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TemplateFields.
     */
    data: TemplateFieldCreateManyInput | TemplateFieldCreateManyInput[]
  }

  /**
   * TemplateField createManyAndReturn
   */
  export type TemplateFieldCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * The data used to create many TemplateFields.
     */
    data: TemplateFieldCreateManyInput | TemplateFieldCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TemplateField update
   */
  export type TemplateFieldUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * The data needed to update a TemplateField.
     */
    data: XOR<TemplateFieldUpdateInput, TemplateFieldUncheckedUpdateInput>
    /**
     * Choose, which TemplateField to update.
     */
    where: TemplateFieldWhereUniqueInput
  }

  /**
   * TemplateField updateMany
   */
  export type TemplateFieldUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TemplateFields.
     */
    data: XOR<TemplateFieldUpdateManyMutationInput, TemplateFieldUncheckedUpdateManyInput>
    /**
     * Filter which TemplateFields to update
     */
    where?: TemplateFieldWhereInput
    /**
     * Limit how many TemplateFields to update.
     */
    limit?: number
  }

  /**
   * TemplateField updateManyAndReturn
   */
  export type TemplateFieldUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * The data used to update TemplateFields.
     */
    data: XOR<TemplateFieldUpdateManyMutationInput, TemplateFieldUncheckedUpdateManyInput>
    /**
     * Filter which TemplateFields to update
     */
    where?: TemplateFieldWhereInput
    /**
     * Limit how many TemplateFields to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TemplateField upsert
   */
  export type TemplateFieldUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * The filter to search for the TemplateField to update in case it exists.
     */
    where: TemplateFieldWhereUniqueInput
    /**
     * In case the TemplateField found by the `where` argument doesn't exist, create a new TemplateField with this data.
     */
    create: XOR<TemplateFieldCreateInput, TemplateFieldUncheckedCreateInput>
    /**
     * In case the TemplateField was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TemplateFieldUpdateInput, TemplateFieldUncheckedUpdateInput>
  }

  /**
   * TemplateField delete
   */
  export type TemplateFieldDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
    /**
     * Filter which TemplateField to delete.
     */
    where: TemplateFieldWhereUniqueInput
  }

  /**
   * TemplateField deleteMany
   */
  export type TemplateFieldDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TemplateFields to delete
     */
    where?: TemplateFieldWhereInput
    /**
     * Limit how many TemplateFields to delete.
     */
    limit?: number
  }

  /**
   * TemplateField without action
   */
  export type TemplateFieldDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TemplateField
     */
    select?: TemplateFieldSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TemplateField
     */
    omit?: TemplateFieldOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateFieldInclude<ExtArgs> | null
  }


  /**
   * Model GeneratedDocument
   */

  export type AggregateGeneratedDocument = {
    _count: GeneratedDocumentCountAggregateOutputType | null
    _avg: GeneratedDocumentAvgAggregateOutputType | null
    _sum: GeneratedDocumentSumAggregateOutputType | null
    _min: GeneratedDocumentMinAggregateOutputType | null
    _max: GeneratedDocumentMaxAggregateOutputType | null
  }

  export type GeneratedDocumentAvgAggregateOutputType = {
    id: number | null
    templateId: number | null
    createdById: number | null
  }

  export type GeneratedDocumentSumAggregateOutputType = {
    id: number | null
    templateId: number | null
    createdById: number | null
  }

  export type GeneratedDocumentMinAggregateOutputType = {
    id: number | null
    templateId: number | null
    filePath: string | null
    createdAt: Date | null
    createdById: number | null
  }

  export type GeneratedDocumentMaxAggregateOutputType = {
    id: number | null
    templateId: number | null
    filePath: string | null
    createdAt: Date | null
    createdById: number | null
  }

  export type GeneratedDocumentCountAggregateOutputType = {
    id: number
    templateId: number
    filePath: number
    createdAt: number
    createdById: number
    _all: number
  }


  export type GeneratedDocumentAvgAggregateInputType = {
    id?: true
    templateId?: true
    createdById?: true
  }

  export type GeneratedDocumentSumAggregateInputType = {
    id?: true
    templateId?: true
    createdById?: true
  }

  export type GeneratedDocumentMinAggregateInputType = {
    id?: true
    templateId?: true
    filePath?: true
    createdAt?: true
    createdById?: true
  }

  export type GeneratedDocumentMaxAggregateInputType = {
    id?: true
    templateId?: true
    filePath?: true
    createdAt?: true
    createdById?: true
  }

  export type GeneratedDocumentCountAggregateInputType = {
    id?: true
    templateId?: true
    filePath?: true
    createdAt?: true
    createdById?: true
    _all?: true
  }

  export type GeneratedDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneratedDocument to aggregate.
     */
    where?: GeneratedDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedDocuments to fetch.
     */
    orderBy?: GeneratedDocumentOrderByWithRelationInput | GeneratedDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GeneratedDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GeneratedDocuments
    **/
    _count?: true | GeneratedDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GeneratedDocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GeneratedDocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GeneratedDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GeneratedDocumentMaxAggregateInputType
  }

  export type GetGeneratedDocumentAggregateType<T extends GeneratedDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateGeneratedDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGeneratedDocument[P]>
      : GetScalarType<T[P], AggregateGeneratedDocument[P]>
  }




  export type GeneratedDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GeneratedDocumentWhereInput
    orderBy?: GeneratedDocumentOrderByWithAggregationInput | GeneratedDocumentOrderByWithAggregationInput[]
    by: GeneratedDocumentScalarFieldEnum[] | GeneratedDocumentScalarFieldEnum
    having?: GeneratedDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GeneratedDocumentCountAggregateInputType | true
    _avg?: GeneratedDocumentAvgAggregateInputType
    _sum?: GeneratedDocumentSumAggregateInputType
    _min?: GeneratedDocumentMinAggregateInputType
    _max?: GeneratedDocumentMaxAggregateInputType
  }

  export type GeneratedDocumentGroupByOutputType = {
    id: number
    templateId: number | null
    filePath: string
    createdAt: Date
    createdById: number | null
    _count: GeneratedDocumentCountAggregateOutputType | null
    _avg: GeneratedDocumentAvgAggregateOutputType | null
    _sum: GeneratedDocumentSumAggregateOutputType | null
    _min: GeneratedDocumentMinAggregateOutputType | null
    _max: GeneratedDocumentMaxAggregateOutputType | null
  }

  type GetGeneratedDocumentGroupByPayload<T extends GeneratedDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GeneratedDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GeneratedDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GeneratedDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], GeneratedDocumentGroupByOutputType[P]>
        }
      >
    >


  export type GeneratedDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    filePath?: boolean
    createdAt?: boolean
    createdById?: boolean
    template?: boolean | GeneratedDocument$templateArgs<ExtArgs>
    createdBy?: boolean | GeneratedDocument$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["generatedDocument"]>

  export type GeneratedDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    filePath?: boolean
    createdAt?: boolean
    createdById?: boolean
    template?: boolean | GeneratedDocument$templateArgs<ExtArgs>
    createdBy?: boolean | GeneratedDocument$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["generatedDocument"]>

  export type GeneratedDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    templateId?: boolean
    filePath?: boolean
    createdAt?: boolean
    createdById?: boolean
    template?: boolean | GeneratedDocument$templateArgs<ExtArgs>
    createdBy?: boolean | GeneratedDocument$createdByArgs<ExtArgs>
  }, ExtArgs["result"]["generatedDocument"]>

  export type GeneratedDocumentSelectScalar = {
    id?: boolean
    templateId?: boolean
    filePath?: boolean
    createdAt?: boolean
    createdById?: boolean
  }

  export type GeneratedDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "templateId" | "filePath" | "createdAt" | "createdById", ExtArgs["result"]["generatedDocument"]>
  export type GeneratedDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | GeneratedDocument$templateArgs<ExtArgs>
    createdBy?: boolean | GeneratedDocument$createdByArgs<ExtArgs>
  }
  export type GeneratedDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | GeneratedDocument$templateArgs<ExtArgs>
    createdBy?: boolean | GeneratedDocument$createdByArgs<ExtArgs>
  }
  export type GeneratedDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    template?: boolean | GeneratedDocument$templateArgs<ExtArgs>
    createdBy?: boolean | GeneratedDocument$createdByArgs<ExtArgs>
  }

  export type $GeneratedDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GeneratedDocument"
    objects: {
      template: Prisma.$TemplatePayload<ExtArgs> | null
      createdBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      templateId: number | null
      filePath: string
      createdAt: Date
      createdById: number | null
    }, ExtArgs["result"]["generatedDocument"]>
    composites: {}
  }

  type GeneratedDocumentGetPayload<S extends boolean | null | undefined | GeneratedDocumentDefaultArgs> = $Result.GetResult<Prisma.$GeneratedDocumentPayload, S>

  type GeneratedDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GeneratedDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GeneratedDocumentCountAggregateInputType | true
    }

  export interface GeneratedDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GeneratedDocument'], meta: { name: 'GeneratedDocument' } }
    /**
     * Find zero or one GeneratedDocument that matches the filter.
     * @param {GeneratedDocumentFindUniqueArgs} args - Arguments to find a GeneratedDocument
     * @example
     * // Get one GeneratedDocument
     * const generatedDocument = await prisma.generatedDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GeneratedDocumentFindUniqueArgs>(args: SelectSubset<T, GeneratedDocumentFindUniqueArgs<ExtArgs>>): Prisma__GeneratedDocumentClient<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GeneratedDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GeneratedDocumentFindUniqueOrThrowArgs} args - Arguments to find a GeneratedDocument
     * @example
     * // Get one GeneratedDocument
     * const generatedDocument = await prisma.generatedDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GeneratedDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, GeneratedDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GeneratedDocumentClient<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneratedDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedDocumentFindFirstArgs} args - Arguments to find a GeneratedDocument
     * @example
     * // Get one GeneratedDocument
     * const generatedDocument = await prisma.generatedDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GeneratedDocumentFindFirstArgs>(args?: SelectSubset<T, GeneratedDocumentFindFirstArgs<ExtArgs>>): Prisma__GeneratedDocumentClient<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GeneratedDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedDocumentFindFirstOrThrowArgs} args - Arguments to find a GeneratedDocument
     * @example
     * // Get one GeneratedDocument
     * const generatedDocument = await prisma.generatedDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GeneratedDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, GeneratedDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__GeneratedDocumentClient<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GeneratedDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GeneratedDocuments
     * const generatedDocuments = await prisma.generatedDocument.findMany()
     * 
     * // Get first 10 GeneratedDocuments
     * const generatedDocuments = await prisma.generatedDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const generatedDocumentWithIdOnly = await prisma.generatedDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GeneratedDocumentFindManyArgs>(args?: SelectSubset<T, GeneratedDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GeneratedDocument.
     * @param {GeneratedDocumentCreateArgs} args - Arguments to create a GeneratedDocument.
     * @example
     * // Create one GeneratedDocument
     * const GeneratedDocument = await prisma.generatedDocument.create({
     *   data: {
     *     // ... data to create a GeneratedDocument
     *   }
     * })
     * 
     */
    create<T extends GeneratedDocumentCreateArgs>(args: SelectSubset<T, GeneratedDocumentCreateArgs<ExtArgs>>): Prisma__GeneratedDocumentClient<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GeneratedDocuments.
     * @param {GeneratedDocumentCreateManyArgs} args - Arguments to create many GeneratedDocuments.
     * @example
     * // Create many GeneratedDocuments
     * const generatedDocument = await prisma.generatedDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GeneratedDocumentCreateManyArgs>(args?: SelectSubset<T, GeneratedDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GeneratedDocuments and returns the data saved in the database.
     * @param {GeneratedDocumentCreateManyAndReturnArgs} args - Arguments to create many GeneratedDocuments.
     * @example
     * // Create many GeneratedDocuments
     * const generatedDocument = await prisma.generatedDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GeneratedDocuments and only return the `id`
     * const generatedDocumentWithIdOnly = await prisma.generatedDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GeneratedDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, GeneratedDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GeneratedDocument.
     * @param {GeneratedDocumentDeleteArgs} args - Arguments to delete one GeneratedDocument.
     * @example
     * // Delete one GeneratedDocument
     * const GeneratedDocument = await prisma.generatedDocument.delete({
     *   where: {
     *     // ... filter to delete one GeneratedDocument
     *   }
     * })
     * 
     */
    delete<T extends GeneratedDocumentDeleteArgs>(args: SelectSubset<T, GeneratedDocumentDeleteArgs<ExtArgs>>): Prisma__GeneratedDocumentClient<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GeneratedDocument.
     * @param {GeneratedDocumentUpdateArgs} args - Arguments to update one GeneratedDocument.
     * @example
     * // Update one GeneratedDocument
     * const generatedDocument = await prisma.generatedDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GeneratedDocumentUpdateArgs>(args: SelectSubset<T, GeneratedDocumentUpdateArgs<ExtArgs>>): Prisma__GeneratedDocumentClient<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GeneratedDocuments.
     * @param {GeneratedDocumentDeleteManyArgs} args - Arguments to filter GeneratedDocuments to delete.
     * @example
     * // Delete a few GeneratedDocuments
     * const { count } = await prisma.generatedDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GeneratedDocumentDeleteManyArgs>(args?: SelectSubset<T, GeneratedDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneratedDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GeneratedDocuments
     * const generatedDocument = await prisma.generatedDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GeneratedDocumentUpdateManyArgs>(args: SelectSubset<T, GeneratedDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GeneratedDocuments and returns the data updated in the database.
     * @param {GeneratedDocumentUpdateManyAndReturnArgs} args - Arguments to update many GeneratedDocuments.
     * @example
     * // Update many GeneratedDocuments
     * const generatedDocument = await prisma.generatedDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GeneratedDocuments and only return the `id`
     * const generatedDocumentWithIdOnly = await prisma.generatedDocument.updateManyAndReturn({
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
    updateManyAndReturn<T extends GeneratedDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, GeneratedDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GeneratedDocument.
     * @param {GeneratedDocumentUpsertArgs} args - Arguments to update or create a GeneratedDocument.
     * @example
     * // Update or create a GeneratedDocument
     * const generatedDocument = await prisma.generatedDocument.upsert({
     *   create: {
     *     // ... data to create a GeneratedDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GeneratedDocument we want to update
     *   }
     * })
     */
    upsert<T extends GeneratedDocumentUpsertArgs>(args: SelectSubset<T, GeneratedDocumentUpsertArgs<ExtArgs>>): Prisma__GeneratedDocumentClient<$Result.GetResult<Prisma.$GeneratedDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GeneratedDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedDocumentCountArgs} args - Arguments to filter GeneratedDocuments to count.
     * @example
     * // Count the number of GeneratedDocuments
     * const count = await prisma.generatedDocument.count({
     *   where: {
     *     // ... the filter for the GeneratedDocuments we want to count
     *   }
     * })
    **/
    count<T extends GeneratedDocumentCountArgs>(
      args?: Subset<T, GeneratedDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GeneratedDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GeneratedDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GeneratedDocumentAggregateArgs>(args: Subset<T, GeneratedDocumentAggregateArgs>): Prisma.PrismaPromise<GetGeneratedDocumentAggregateType<T>>

    /**
     * Group by GeneratedDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GeneratedDocumentGroupByArgs} args - Group by arguments.
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
      T extends GeneratedDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GeneratedDocumentGroupByArgs['orderBy'] }
        : { orderBy?: GeneratedDocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GeneratedDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGeneratedDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GeneratedDocument model
   */
  readonly fields: GeneratedDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GeneratedDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GeneratedDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    template<T extends GeneratedDocument$templateArgs<ExtArgs> = {}>(args?: Subset<T, GeneratedDocument$templateArgs<ExtArgs>>): Prisma__TemplateClient<$Result.GetResult<Prisma.$TemplatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends GeneratedDocument$createdByArgs<ExtArgs> = {}>(args?: Subset<T, GeneratedDocument$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the GeneratedDocument model
   */
  interface GeneratedDocumentFieldRefs {
    readonly id: FieldRef<"GeneratedDocument", 'Int'>
    readonly templateId: FieldRef<"GeneratedDocument", 'Int'>
    readonly filePath: FieldRef<"GeneratedDocument", 'String'>
    readonly createdAt: FieldRef<"GeneratedDocument", 'DateTime'>
    readonly createdById: FieldRef<"GeneratedDocument", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * GeneratedDocument findUnique
   */
  export type GeneratedDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedDocument to fetch.
     */
    where: GeneratedDocumentWhereUniqueInput
  }

  /**
   * GeneratedDocument findUniqueOrThrow
   */
  export type GeneratedDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedDocument to fetch.
     */
    where: GeneratedDocumentWhereUniqueInput
  }

  /**
   * GeneratedDocument findFirst
   */
  export type GeneratedDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedDocument to fetch.
     */
    where?: GeneratedDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedDocuments to fetch.
     */
    orderBy?: GeneratedDocumentOrderByWithRelationInput | GeneratedDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneratedDocuments.
     */
    cursor?: GeneratedDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratedDocuments.
     */
    distinct?: GeneratedDocumentScalarFieldEnum | GeneratedDocumentScalarFieldEnum[]
  }

  /**
   * GeneratedDocument findFirstOrThrow
   */
  export type GeneratedDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedDocument to fetch.
     */
    where?: GeneratedDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedDocuments to fetch.
     */
    orderBy?: GeneratedDocumentOrderByWithRelationInput | GeneratedDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GeneratedDocuments.
     */
    cursor?: GeneratedDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratedDocuments.
     */
    distinct?: GeneratedDocumentScalarFieldEnum | GeneratedDocumentScalarFieldEnum[]
  }

  /**
   * GeneratedDocument findMany
   */
  export type GeneratedDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
    /**
     * Filter, which GeneratedDocuments to fetch.
     */
    where?: GeneratedDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GeneratedDocuments to fetch.
     */
    orderBy?: GeneratedDocumentOrderByWithRelationInput | GeneratedDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GeneratedDocuments.
     */
    cursor?: GeneratedDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GeneratedDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GeneratedDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GeneratedDocuments.
     */
    distinct?: GeneratedDocumentScalarFieldEnum | GeneratedDocumentScalarFieldEnum[]
  }

  /**
   * GeneratedDocument create
   */
  export type GeneratedDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a GeneratedDocument.
     */
    data: XOR<GeneratedDocumentCreateInput, GeneratedDocumentUncheckedCreateInput>
  }

  /**
   * GeneratedDocument createMany
   */
  export type GeneratedDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GeneratedDocuments.
     */
    data: GeneratedDocumentCreateManyInput | GeneratedDocumentCreateManyInput[]
  }

  /**
   * GeneratedDocument createManyAndReturn
   */
  export type GeneratedDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many GeneratedDocuments.
     */
    data: GeneratedDocumentCreateManyInput | GeneratedDocumentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GeneratedDocument update
   */
  export type GeneratedDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a GeneratedDocument.
     */
    data: XOR<GeneratedDocumentUpdateInput, GeneratedDocumentUncheckedUpdateInput>
    /**
     * Choose, which GeneratedDocument to update.
     */
    where: GeneratedDocumentWhereUniqueInput
  }

  /**
   * GeneratedDocument updateMany
   */
  export type GeneratedDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GeneratedDocuments.
     */
    data: XOR<GeneratedDocumentUpdateManyMutationInput, GeneratedDocumentUncheckedUpdateManyInput>
    /**
     * Filter which GeneratedDocuments to update
     */
    where?: GeneratedDocumentWhereInput
    /**
     * Limit how many GeneratedDocuments to update.
     */
    limit?: number
  }

  /**
   * GeneratedDocument updateManyAndReturn
   */
  export type GeneratedDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * The data used to update GeneratedDocuments.
     */
    data: XOR<GeneratedDocumentUpdateManyMutationInput, GeneratedDocumentUncheckedUpdateManyInput>
    /**
     * Filter which GeneratedDocuments to update
     */
    where?: GeneratedDocumentWhereInput
    /**
     * Limit how many GeneratedDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GeneratedDocument upsert
   */
  export type GeneratedDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the GeneratedDocument to update in case it exists.
     */
    where: GeneratedDocumentWhereUniqueInput
    /**
     * In case the GeneratedDocument found by the `where` argument doesn't exist, create a new GeneratedDocument with this data.
     */
    create: XOR<GeneratedDocumentCreateInput, GeneratedDocumentUncheckedCreateInput>
    /**
     * In case the GeneratedDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GeneratedDocumentUpdateInput, GeneratedDocumentUncheckedUpdateInput>
  }

  /**
   * GeneratedDocument delete
   */
  export type GeneratedDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
    /**
     * Filter which GeneratedDocument to delete.
     */
    where: GeneratedDocumentWhereUniqueInput
  }

  /**
   * GeneratedDocument deleteMany
   */
  export type GeneratedDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GeneratedDocuments to delete
     */
    where?: GeneratedDocumentWhereInput
    /**
     * Limit how many GeneratedDocuments to delete.
     */
    limit?: number
  }

  /**
   * GeneratedDocument.template
   */
  export type GeneratedDocument$templateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Template
     */
    select?: TemplateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Template
     */
    omit?: TemplateOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TemplateInclude<ExtArgs> | null
    where?: TemplateWhereInput
  }

  /**
   * GeneratedDocument.createdBy
   */
  export type GeneratedDocument$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * GeneratedDocument without action
   */
  export type GeneratedDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GeneratedDocument
     */
    select?: GeneratedDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GeneratedDocument
     */
    omit?: GeneratedDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GeneratedDocumentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TemplateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    templateFile: 'templateFile',
    parsedTemplateFile: 'parsedTemplateFile',
    createdAt: 'createdAt',
    active: 'active'
  };

  export type TemplateScalarFieldEnum = (typeof TemplateScalarFieldEnum)[keyof typeof TemplateScalarFieldEnum]


  export const TemplateFieldScalarFieldEnum: {
    id: 'id',
    templateId: 'templateId',
    fieldName: 'fieldName',
    label: 'label',
    fieldType: 'fieldType',
    isTable: 'isTable'
  };

  export type TemplateFieldScalarFieldEnum = (typeof TemplateFieldScalarFieldEnum)[keyof typeof TemplateFieldScalarFieldEnum]


  export const GeneratedDocumentScalarFieldEnum: {
    id: 'id',
    templateId: 'templateId',
    filePath: 'filePath',
    createdAt: 'createdAt',
    createdById: 'createdById'
  };

  export type GeneratedDocumentScalarFieldEnum = (typeof GeneratedDocumentScalarFieldEnum)[keyof typeof GeneratedDocumentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    generatedDocs?: GeneratedDocumentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    generatedDocs?: GeneratedDocumentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    generatedDocs?: GeneratedDocumentListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TemplateWhereInput = {
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    id?: IntFilter<"Template"> | number
    name?: StringFilter<"Template"> | string
    templateFile?: StringFilter<"Template"> | string
    parsedTemplateFile?: StringNullableFilter<"Template"> | string | null
    createdAt?: DateTimeFilter<"Template"> | Date | string
    active?: BoolFilter<"Template"> | boolean
    fields?: TemplateFieldListRelationFilter
    generatedDocuments?: GeneratedDocumentListRelationFilter
  }

  export type TemplateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    templateFile?: SortOrder
    parsedTemplateFile?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    fields?: TemplateFieldOrderByRelationAggregateInput
    generatedDocuments?: GeneratedDocumentOrderByRelationAggregateInput
  }

  export type TemplateWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TemplateWhereInput | TemplateWhereInput[]
    OR?: TemplateWhereInput[]
    NOT?: TemplateWhereInput | TemplateWhereInput[]
    name?: StringFilter<"Template"> | string
    templateFile?: StringFilter<"Template"> | string
    parsedTemplateFile?: StringNullableFilter<"Template"> | string | null
    createdAt?: DateTimeFilter<"Template"> | Date | string
    active?: BoolFilter<"Template"> | boolean
    fields?: TemplateFieldListRelationFilter
    generatedDocuments?: GeneratedDocumentListRelationFilter
  }, "id">

  export type TemplateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    templateFile?: SortOrder
    parsedTemplateFile?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    active?: SortOrder
    _count?: TemplateCountOrderByAggregateInput
    _avg?: TemplateAvgOrderByAggregateInput
    _max?: TemplateMaxOrderByAggregateInput
    _min?: TemplateMinOrderByAggregateInput
    _sum?: TemplateSumOrderByAggregateInput
  }

  export type TemplateScalarWhereWithAggregatesInput = {
    AND?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    OR?: TemplateScalarWhereWithAggregatesInput[]
    NOT?: TemplateScalarWhereWithAggregatesInput | TemplateScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Template"> | number
    name?: StringWithAggregatesFilter<"Template"> | string
    templateFile?: StringWithAggregatesFilter<"Template"> | string
    parsedTemplateFile?: StringNullableWithAggregatesFilter<"Template"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Template"> | Date | string
    active?: BoolWithAggregatesFilter<"Template"> | boolean
  }

  export type TemplateFieldWhereInput = {
    AND?: TemplateFieldWhereInput | TemplateFieldWhereInput[]
    OR?: TemplateFieldWhereInput[]
    NOT?: TemplateFieldWhereInput | TemplateFieldWhereInput[]
    id?: IntFilter<"TemplateField"> | number
    templateId?: IntFilter<"TemplateField"> | number
    fieldName?: StringFilter<"TemplateField"> | string
    label?: StringFilter<"TemplateField"> | string
    fieldType?: StringFilter<"TemplateField"> | string
    isTable?: BoolFilter<"TemplateField"> | boolean
    template?: XOR<TemplateScalarRelationFilter, TemplateWhereInput>
  }

  export type TemplateFieldOrderByWithRelationInput = {
    id?: SortOrder
    templateId?: SortOrder
    fieldName?: SortOrder
    label?: SortOrder
    fieldType?: SortOrder
    isTable?: SortOrder
    template?: TemplateOrderByWithRelationInput
  }

  export type TemplateFieldWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    templateId_fieldName?: TemplateFieldTemplateIdFieldNameCompoundUniqueInput
    AND?: TemplateFieldWhereInput | TemplateFieldWhereInput[]
    OR?: TemplateFieldWhereInput[]
    NOT?: TemplateFieldWhereInput | TemplateFieldWhereInput[]
    templateId?: IntFilter<"TemplateField"> | number
    fieldName?: StringFilter<"TemplateField"> | string
    label?: StringFilter<"TemplateField"> | string
    fieldType?: StringFilter<"TemplateField"> | string
    isTable?: BoolFilter<"TemplateField"> | boolean
    template?: XOR<TemplateScalarRelationFilter, TemplateWhereInput>
  }, "id" | "templateId_fieldName">

  export type TemplateFieldOrderByWithAggregationInput = {
    id?: SortOrder
    templateId?: SortOrder
    fieldName?: SortOrder
    label?: SortOrder
    fieldType?: SortOrder
    isTable?: SortOrder
    _count?: TemplateFieldCountOrderByAggregateInput
    _avg?: TemplateFieldAvgOrderByAggregateInput
    _max?: TemplateFieldMaxOrderByAggregateInput
    _min?: TemplateFieldMinOrderByAggregateInput
    _sum?: TemplateFieldSumOrderByAggregateInput
  }

  export type TemplateFieldScalarWhereWithAggregatesInput = {
    AND?: TemplateFieldScalarWhereWithAggregatesInput | TemplateFieldScalarWhereWithAggregatesInput[]
    OR?: TemplateFieldScalarWhereWithAggregatesInput[]
    NOT?: TemplateFieldScalarWhereWithAggregatesInput | TemplateFieldScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TemplateField"> | number
    templateId?: IntWithAggregatesFilter<"TemplateField"> | number
    fieldName?: StringWithAggregatesFilter<"TemplateField"> | string
    label?: StringWithAggregatesFilter<"TemplateField"> | string
    fieldType?: StringWithAggregatesFilter<"TemplateField"> | string
    isTable?: BoolWithAggregatesFilter<"TemplateField"> | boolean
  }

  export type GeneratedDocumentWhereInput = {
    AND?: GeneratedDocumentWhereInput | GeneratedDocumentWhereInput[]
    OR?: GeneratedDocumentWhereInput[]
    NOT?: GeneratedDocumentWhereInput | GeneratedDocumentWhereInput[]
    id?: IntFilter<"GeneratedDocument"> | number
    templateId?: IntNullableFilter<"GeneratedDocument"> | number | null
    filePath?: StringFilter<"GeneratedDocument"> | string
    createdAt?: DateTimeFilter<"GeneratedDocument"> | Date | string
    createdById?: IntNullableFilter<"GeneratedDocument"> | number | null
    template?: XOR<TemplateNullableScalarRelationFilter, TemplateWhereInput> | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type GeneratedDocumentOrderByWithRelationInput = {
    id?: SortOrder
    templateId?: SortOrderInput | SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrderInput | SortOrder
    template?: TemplateOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
  }

  export type GeneratedDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GeneratedDocumentWhereInput | GeneratedDocumentWhereInput[]
    OR?: GeneratedDocumentWhereInput[]
    NOT?: GeneratedDocumentWhereInput | GeneratedDocumentWhereInput[]
    templateId?: IntNullableFilter<"GeneratedDocument"> | number | null
    filePath?: StringFilter<"GeneratedDocument"> | string
    createdAt?: DateTimeFilter<"GeneratedDocument"> | Date | string
    createdById?: IntNullableFilter<"GeneratedDocument"> | number | null
    template?: XOR<TemplateNullableScalarRelationFilter, TemplateWhereInput> | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type GeneratedDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    templateId?: SortOrderInput | SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrderInput | SortOrder
    _count?: GeneratedDocumentCountOrderByAggregateInput
    _avg?: GeneratedDocumentAvgOrderByAggregateInput
    _max?: GeneratedDocumentMaxOrderByAggregateInput
    _min?: GeneratedDocumentMinOrderByAggregateInput
    _sum?: GeneratedDocumentSumOrderByAggregateInput
  }

  export type GeneratedDocumentScalarWhereWithAggregatesInput = {
    AND?: GeneratedDocumentScalarWhereWithAggregatesInput | GeneratedDocumentScalarWhereWithAggregatesInput[]
    OR?: GeneratedDocumentScalarWhereWithAggregatesInput[]
    NOT?: GeneratedDocumentScalarWhereWithAggregatesInput | GeneratedDocumentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GeneratedDocument"> | number
    templateId?: IntNullableWithAggregatesFilter<"GeneratedDocument"> | number | null
    filePath?: StringWithAggregatesFilter<"GeneratedDocument"> | string
    createdAt?: DateTimeWithAggregatesFilter<"GeneratedDocument"> | Date | string
    createdById?: IntNullableWithAggregatesFilter<"GeneratedDocument"> | number | null
  }

  export type UserCreateInput = {
    username: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    generatedDocs?: GeneratedDocumentCreateNestedManyWithoutCreatedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    username: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
    generatedDocs?: GeneratedDocumentUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generatedDocs?: GeneratedDocumentUpdateManyWithoutCreatedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    generatedDocs?: GeneratedDocumentUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    username: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateCreateInput = {
    name: string
    templateFile: string
    parsedTemplateFile?: string | null
    createdAt?: Date | string
    active?: boolean
    fields?: TemplateFieldCreateNestedManyWithoutTemplateInput
    generatedDocuments?: GeneratedDocumentCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateInput = {
    id?: number
    name: string
    templateFile: string
    parsedTemplateFile?: string | null
    createdAt?: Date | string
    active?: boolean
    fields?: TemplateFieldUncheckedCreateNestedManyWithoutTemplateInput
    generatedDocuments?: GeneratedDocumentUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    templateFile?: StringFieldUpdateOperationsInput | string
    parsedTemplateFile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    fields?: TemplateFieldUpdateManyWithoutTemplateNestedInput
    generatedDocuments?: GeneratedDocumentUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    templateFile?: StringFieldUpdateOperationsInput | string
    parsedTemplateFile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    fields?: TemplateFieldUncheckedUpdateManyWithoutTemplateNestedInput
    generatedDocuments?: GeneratedDocumentUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateCreateManyInput = {
    id?: number
    name: string
    templateFile: string
    parsedTemplateFile?: string | null
    createdAt?: Date | string
    active?: boolean
  }

  export type TemplateUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    templateFile?: StringFieldUpdateOperationsInput | string
    parsedTemplateFile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TemplateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    templateFile?: StringFieldUpdateOperationsInput | string
    parsedTemplateFile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TemplateFieldCreateInput = {
    fieldName: string
    label: string
    fieldType?: string
    isTable?: boolean
    template: TemplateCreateNestedOneWithoutFieldsInput
  }

  export type TemplateFieldUncheckedCreateInput = {
    id?: number
    templateId: number
    fieldName: string
    label: string
    fieldType?: string
    isTable?: boolean
  }

  export type TemplateFieldUpdateInput = {
    fieldName?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    fieldType?: StringFieldUpdateOperationsInput | string
    isTable?: BoolFieldUpdateOperationsInput | boolean
    template?: TemplateUpdateOneRequiredWithoutFieldsNestedInput
  }

  export type TemplateFieldUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    templateId?: IntFieldUpdateOperationsInput | number
    fieldName?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    fieldType?: StringFieldUpdateOperationsInput | string
    isTable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TemplateFieldCreateManyInput = {
    id?: number
    templateId: number
    fieldName: string
    label: string
    fieldType?: string
    isTable?: boolean
  }

  export type TemplateFieldUpdateManyMutationInput = {
    fieldName?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    fieldType?: StringFieldUpdateOperationsInput | string
    isTable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TemplateFieldUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    templateId?: IntFieldUpdateOperationsInput | number
    fieldName?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    fieldType?: StringFieldUpdateOperationsInput | string
    isTable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GeneratedDocumentCreateInput = {
    filePath: string
    createdAt?: Date | string
    template?: TemplateCreateNestedOneWithoutGeneratedDocumentsInput
    createdBy?: UserCreateNestedOneWithoutGeneratedDocsInput
  }

  export type GeneratedDocumentUncheckedCreateInput = {
    id?: number
    templateId?: number | null
    filePath: string
    createdAt?: Date | string
    createdById?: number | null
  }

  export type GeneratedDocumentUpdateInput = {
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: TemplateUpdateOneWithoutGeneratedDocumentsNestedInput
    createdBy?: UserUpdateOneWithoutGeneratedDocsNestedInput
  }

  export type GeneratedDocumentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    templateId?: NullableIntFieldUpdateOperationsInput | number | null
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GeneratedDocumentCreateManyInput = {
    id?: number
    templateId?: number | null
    filePath: string
    createdAt?: Date | string
    createdById?: number | null
  }

  export type GeneratedDocumentUpdateManyMutationInput = {
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedDocumentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    templateId?: NullableIntFieldUpdateOperationsInput | number | null
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type GeneratedDocumentListRelationFilter = {
    every?: GeneratedDocumentWhereInput
    some?: GeneratedDocumentWhereInput
    none?: GeneratedDocumentWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GeneratedDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type TemplateFieldListRelationFilter = {
    every?: TemplateFieldWhereInput
    some?: TemplateFieldWhereInput
    none?: TemplateFieldWhereInput
  }

  export type TemplateFieldOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TemplateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    templateFile?: SortOrder
    parsedTemplateFile?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
  }

  export type TemplateAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TemplateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    templateFile?: SortOrder
    parsedTemplateFile?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
  }

  export type TemplateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    templateFile?: SortOrder
    parsedTemplateFile?: SortOrder
    createdAt?: SortOrder
    active?: SortOrder
  }

  export type TemplateSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type TemplateScalarRelationFilter = {
    is?: TemplateWhereInput
    isNot?: TemplateWhereInput
  }

  export type TemplateFieldTemplateIdFieldNameCompoundUniqueInput = {
    templateId: number
    fieldName: string
  }

  export type TemplateFieldCountOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    fieldName?: SortOrder
    label?: SortOrder
    fieldType?: SortOrder
    isTable?: SortOrder
  }

  export type TemplateFieldAvgOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
  }

  export type TemplateFieldMaxOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    fieldName?: SortOrder
    label?: SortOrder
    fieldType?: SortOrder
    isTable?: SortOrder
  }

  export type TemplateFieldMinOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    fieldName?: SortOrder
    label?: SortOrder
    fieldType?: SortOrder
    isTable?: SortOrder
  }

  export type TemplateFieldSumOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TemplateNullableScalarRelationFilter = {
    is?: TemplateWhereInput | null
    isNot?: TemplateWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type GeneratedDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
  }

  export type GeneratedDocumentAvgOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    createdById?: SortOrder
  }

  export type GeneratedDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
  }

  export type GeneratedDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    filePath?: SortOrder
    createdAt?: SortOrder
    createdById?: SortOrder
  }

  export type GeneratedDocumentSumOrderByAggregateInput = {
    id?: SortOrder
    templateId?: SortOrder
    createdById?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type GeneratedDocumentCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<GeneratedDocumentCreateWithoutCreatedByInput, GeneratedDocumentUncheckedCreateWithoutCreatedByInput> | GeneratedDocumentCreateWithoutCreatedByInput[] | GeneratedDocumentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: GeneratedDocumentCreateOrConnectWithoutCreatedByInput | GeneratedDocumentCreateOrConnectWithoutCreatedByInput[]
    createMany?: GeneratedDocumentCreateManyCreatedByInputEnvelope
    connect?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
  }

  export type GeneratedDocumentUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<GeneratedDocumentCreateWithoutCreatedByInput, GeneratedDocumentUncheckedCreateWithoutCreatedByInput> | GeneratedDocumentCreateWithoutCreatedByInput[] | GeneratedDocumentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: GeneratedDocumentCreateOrConnectWithoutCreatedByInput | GeneratedDocumentCreateOrConnectWithoutCreatedByInput[]
    createMany?: GeneratedDocumentCreateManyCreatedByInputEnvelope
    connect?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GeneratedDocumentUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<GeneratedDocumentCreateWithoutCreatedByInput, GeneratedDocumentUncheckedCreateWithoutCreatedByInput> | GeneratedDocumentCreateWithoutCreatedByInput[] | GeneratedDocumentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: GeneratedDocumentCreateOrConnectWithoutCreatedByInput | GeneratedDocumentCreateOrConnectWithoutCreatedByInput[]
    upsert?: GeneratedDocumentUpsertWithWhereUniqueWithoutCreatedByInput | GeneratedDocumentUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: GeneratedDocumentCreateManyCreatedByInputEnvelope
    set?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    disconnect?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    delete?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    connect?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    update?: GeneratedDocumentUpdateWithWhereUniqueWithoutCreatedByInput | GeneratedDocumentUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: GeneratedDocumentUpdateManyWithWhereWithoutCreatedByInput | GeneratedDocumentUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: GeneratedDocumentScalarWhereInput | GeneratedDocumentScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GeneratedDocumentUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<GeneratedDocumentCreateWithoutCreatedByInput, GeneratedDocumentUncheckedCreateWithoutCreatedByInput> | GeneratedDocumentCreateWithoutCreatedByInput[] | GeneratedDocumentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: GeneratedDocumentCreateOrConnectWithoutCreatedByInput | GeneratedDocumentCreateOrConnectWithoutCreatedByInput[]
    upsert?: GeneratedDocumentUpsertWithWhereUniqueWithoutCreatedByInput | GeneratedDocumentUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: GeneratedDocumentCreateManyCreatedByInputEnvelope
    set?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    disconnect?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    delete?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    connect?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    update?: GeneratedDocumentUpdateWithWhereUniqueWithoutCreatedByInput | GeneratedDocumentUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: GeneratedDocumentUpdateManyWithWhereWithoutCreatedByInput | GeneratedDocumentUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: GeneratedDocumentScalarWhereInput | GeneratedDocumentScalarWhereInput[]
  }

  export type TemplateFieldCreateNestedManyWithoutTemplateInput = {
    create?: XOR<TemplateFieldCreateWithoutTemplateInput, TemplateFieldUncheckedCreateWithoutTemplateInput> | TemplateFieldCreateWithoutTemplateInput[] | TemplateFieldUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateFieldCreateOrConnectWithoutTemplateInput | TemplateFieldCreateOrConnectWithoutTemplateInput[]
    createMany?: TemplateFieldCreateManyTemplateInputEnvelope
    connect?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
  }

  export type GeneratedDocumentCreateNestedManyWithoutTemplateInput = {
    create?: XOR<GeneratedDocumentCreateWithoutTemplateInput, GeneratedDocumentUncheckedCreateWithoutTemplateInput> | GeneratedDocumentCreateWithoutTemplateInput[] | GeneratedDocumentUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: GeneratedDocumentCreateOrConnectWithoutTemplateInput | GeneratedDocumentCreateOrConnectWithoutTemplateInput[]
    createMany?: GeneratedDocumentCreateManyTemplateInputEnvelope
    connect?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
  }

  export type TemplateFieldUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<TemplateFieldCreateWithoutTemplateInput, TemplateFieldUncheckedCreateWithoutTemplateInput> | TemplateFieldCreateWithoutTemplateInput[] | TemplateFieldUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateFieldCreateOrConnectWithoutTemplateInput | TemplateFieldCreateOrConnectWithoutTemplateInput[]
    createMany?: TemplateFieldCreateManyTemplateInputEnvelope
    connect?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
  }

  export type GeneratedDocumentUncheckedCreateNestedManyWithoutTemplateInput = {
    create?: XOR<GeneratedDocumentCreateWithoutTemplateInput, GeneratedDocumentUncheckedCreateWithoutTemplateInput> | GeneratedDocumentCreateWithoutTemplateInput[] | GeneratedDocumentUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: GeneratedDocumentCreateOrConnectWithoutTemplateInput | GeneratedDocumentCreateOrConnectWithoutTemplateInput[]
    createMany?: GeneratedDocumentCreateManyTemplateInputEnvelope
    connect?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type TemplateFieldUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<TemplateFieldCreateWithoutTemplateInput, TemplateFieldUncheckedCreateWithoutTemplateInput> | TemplateFieldCreateWithoutTemplateInput[] | TemplateFieldUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateFieldCreateOrConnectWithoutTemplateInput | TemplateFieldCreateOrConnectWithoutTemplateInput[]
    upsert?: TemplateFieldUpsertWithWhereUniqueWithoutTemplateInput | TemplateFieldUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: TemplateFieldCreateManyTemplateInputEnvelope
    set?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
    disconnect?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
    delete?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
    connect?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
    update?: TemplateFieldUpdateWithWhereUniqueWithoutTemplateInput | TemplateFieldUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: TemplateFieldUpdateManyWithWhereWithoutTemplateInput | TemplateFieldUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: TemplateFieldScalarWhereInput | TemplateFieldScalarWhereInput[]
  }

  export type GeneratedDocumentUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<GeneratedDocumentCreateWithoutTemplateInput, GeneratedDocumentUncheckedCreateWithoutTemplateInput> | GeneratedDocumentCreateWithoutTemplateInput[] | GeneratedDocumentUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: GeneratedDocumentCreateOrConnectWithoutTemplateInput | GeneratedDocumentCreateOrConnectWithoutTemplateInput[]
    upsert?: GeneratedDocumentUpsertWithWhereUniqueWithoutTemplateInput | GeneratedDocumentUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: GeneratedDocumentCreateManyTemplateInputEnvelope
    set?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    disconnect?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    delete?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    connect?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    update?: GeneratedDocumentUpdateWithWhereUniqueWithoutTemplateInput | GeneratedDocumentUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: GeneratedDocumentUpdateManyWithWhereWithoutTemplateInput | GeneratedDocumentUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: GeneratedDocumentScalarWhereInput | GeneratedDocumentScalarWhereInput[]
  }

  export type TemplateFieldUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<TemplateFieldCreateWithoutTemplateInput, TemplateFieldUncheckedCreateWithoutTemplateInput> | TemplateFieldCreateWithoutTemplateInput[] | TemplateFieldUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: TemplateFieldCreateOrConnectWithoutTemplateInput | TemplateFieldCreateOrConnectWithoutTemplateInput[]
    upsert?: TemplateFieldUpsertWithWhereUniqueWithoutTemplateInput | TemplateFieldUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: TemplateFieldCreateManyTemplateInputEnvelope
    set?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
    disconnect?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
    delete?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
    connect?: TemplateFieldWhereUniqueInput | TemplateFieldWhereUniqueInput[]
    update?: TemplateFieldUpdateWithWhereUniqueWithoutTemplateInput | TemplateFieldUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: TemplateFieldUpdateManyWithWhereWithoutTemplateInput | TemplateFieldUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: TemplateFieldScalarWhereInput | TemplateFieldScalarWhereInput[]
  }

  export type GeneratedDocumentUncheckedUpdateManyWithoutTemplateNestedInput = {
    create?: XOR<GeneratedDocumentCreateWithoutTemplateInput, GeneratedDocumentUncheckedCreateWithoutTemplateInput> | GeneratedDocumentCreateWithoutTemplateInput[] | GeneratedDocumentUncheckedCreateWithoutTemplateInput[]
    connectOrCreate?: GeneratedDocumentCreateOrConnectWithoutTemplateInput | GeneratedDocumentCreateOrConnectWithoutTemplateInput[]
    upsert?: GeneratedDocumentUpsertWithWhereUniqueWithoutTemplateInput | GeneratedDocumentUpsertWithWhereUniqueWithoutTemplateInput[]
    createMany?: GeneratedDocumentCreateManyTemplateInputEnvelope
    set?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    disconnect?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    delete?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    connect?: GeneratedDocumentWhereUniqueInput | GeneratedDocumentWhereUniqueInput[]
    update?: GeneratedDocumentUpdateWithWhereUniqueWithoutTemplateInput | GeneratedDocumentUpdateWithWhereUniqueWithoutTemplateInput[]
    updateMany?: GeneratedDocumentUpdateManyWithWhereWithoutTemplateInput | GeneratedDocumentUpdateManyWithWhereWithoutTemplateInput[]
    deleteMany?: GeneratedDocumentScalarWhereInput | GeneratedDocumentScalarWhereInput[]
  }

  export type TemplateCreateNestedOneWithoutFieldsInput = {
    create?: XOR<TemplateCreateWithoutFieldsInput, TemplateUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutFieldsInput
    connect?: TemplateWhereUniqueInput
  }

  export type TemplateUpdateOneRequiredWithoutFieldsNestedInput = {
    create?: XOR<TemplateCreateWithoutFieldsInput, TemplateUncheckedCreateWithoutFieldsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutFieldsInput
    upsert?: TemplateUpsertWithoutFieldsInput
    connect?: TemplateWhereUniqueInput
    update?: XOR<XOR<TemplateUpdateToOneWithWhereWithoutFieldsInput, TemplateUpdateWithoutFieldsInput>, TemplateUncheckedUpdateWithoutFieldsInput>
  }

  export type TemplateCreateNestedOneWithoutGeneratedDocumentsInput = {
    create?: XOR<TemplateCreateWithoutGeneratedDocumentsInput, TemplateUncheckedCreateWithoutGeneratedDocumentsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutGeneratedDocumentsInput
    connect?: TemplateWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutGeneratedDocsInput = {
    create?: XOR<UserCreateWithoutGeneratedDocsInput, UserUncheckedCreateWithoutGeneratedDocsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGeneratedDocsInput
    connect?: UserWhereUniqueInput
  }

  export type TemplateUpdateOneWithoutGeneratedDocumentsNestedInput = {
    create?: XOR<TemplateCreateWithoutGeneratedDocumentsInput, TemplateUncheckedCreateWithoutGeneratedDocumentsInput>
    connectOrCreate?: TemplateCreateOrConnectWithoutGeneratedDocumentsInput
    upsert?: TemplateUpsertWithoutGeneratedDocumentsInput
    disconnect?: TemplateWhereInput | boolean
    delete?: TemplateWhereInput | boolean
    connect?: TemplateWhereUniqueInput
    update?: XOR<XOR<TemplateUpdateToOneWithWhereWithoutGeneratedDocumentsInput, TemplateUpdateWithoutGeneratedDocumentsInput>, TemplateUncheckedUpdateWithoutGeneratedDocumentsInput>
  }

  export type UserUpdateOneWithoutGeneratedDocsNestedInput = {
    create?: XOR<UserCreateWithoutGeneratedDocsInput, UserUncheckedCreateWithoutGeneratedDocsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGeneratedDocsInput
    upsert?: UserUpsertWithoutGeneratedDocsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGeneratedDocsInput, UserUpdateWithoutGeneratedDocsInput>, UserUncheckedUpdateWithoutGeneratedDocsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type GeneratedDocumentCreateWithoutCreatedByInput = {
    filePath: string
    createdAt?: Date | string
    template?: TemplateCreateNestedOneWithoutGeneratedDocumentsInput
  }

  export type GeneratedDocumentUncheckedCreateWithoutCreatedByInput = {
    id?: number
    templateId?: number | null
    filePath: string
    createdAt?: Date | string
  }

  export type GeneratedDocumentCreateOrConnectWithoutCreatedByInput = {
    where: GeneratedDocumentWhereUniqueInput
    create: XOR<GeneratedDocumentCreateWithoutCreatedByInput, GeneratedDocumentUncheckedCreateWithoutCreatedByInput>
  }

  export type GeneratedDocumentCreateManyCreatedByInputEnvelope = {
    data: GeneratedDocumentCreateManyCreatedByInput | GeneratedDocumentCreateManyCreatedByInput[]
  }

  export type GeneratedDocumentUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: GeneratedDocumentWhereUniqueInput
    update: XOR<GeneratedDocumentUpdateWithoutCreatedByInput, GeneratedDocumentUncheckedUpdateWithoutCreatedByInput>
    create: XOR<GeneratedDocumentCreateWithoutCreatedByInput, GeneratedDocumentUncheckedCreateWithoutCreatedByInput>
  }

  export type GeneratedDocumentUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: GeneratedDocumentWhereUniqueInput
    data: XOR<GeneratedDocumentUpdateWithoutCreatedByInput, GeneratedDocumentUncheckedUpdateWithoutCreatedByInput>
  }

  export type GeneratedDocumentUpdateManyWithWhereWithoutCreatedByInput = {
    where: GeneratedDocumentScalarWhereInput
    data: XOR<GeneratedDocumentUpdateManyMutationInput, GeneratedDocumentUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type GeneratedDocumentScalarWhereInput = {
    AND?: GeneratedDocumentScalarWhereInput | GeneratedDocumentScalarWhereInput[]
    OR?: GeneratedDocumentScalarWhereInput[]
    NOT?: GeneratedDocumentScalarWhereInput | GeneratedDocumentScalarWhereInput[]
    id?: IntFilter<"GeneratedDocument"> | number
    templateId?: IntNullableFilter<"GeneratedDocument"> | number | null
    filePath?: StringFilter<"GeneratedDocument"> | string
    createdAt?: DateTimeFilter<"GeneratedDocument"> | Date | string
    createdById?: IntNullableFilter<"GeneratedDocument"> | number | null
  }

  export type TemplateFieldCreateWithoutTemplateInput = {
    fieldName: string
    label: string
    fieldType?: string
    isTable?: boolean
  }

  export type TemplateFieldUncheckedCreateWithoutTemplateInput = {
    id?: number
    fieldName: string
    label: string
    fieldType?: string
    isTable?: boolean
  }

  export type TemplateFieldCreateOrConnectWithoutTemplateInput = {
    where: TemplateFieldWhereUniqueInput
    create: XOR<TemplateFieldCreateWithoutTemplateInput, TemplateFieldUncheckedCreateWithoutTemplateInput>
  }

  export type TemplateFieldCreateManyTemplateInputEnvelope = {
    data: TemplateFieldCreateManyTemplateInput | TemplateFieldCreateManyTemplateInput[]
  }

  export type GeneratedDocumentCreateWithoutTemplateInput = {
    filePath: string
    createdAt?: Date | string
    createdBy?: UserCreateNestedOneWithoutGeneratedDocsInput
  }

  export type GeneratedDocumentUncheckedCreateWithoutTemplateInput = {
    id?: number
    filePath: string
    createdAt?: Date | string
    createdById?: number | null
  }

  export type GeneratedDocumentCreateOrConnectWithoutTemplateInput = {
    where: GeneratedDocumentWhereUniqueInput
    create: XOR<GeneratedDocumentCreateWithoutTemplateInput, GeneratedDocumentUncheckedCreateWithoutTemplateInput>
  }

  export type GeneratedDocumentCreateManyTemplateInputEnvelope = {
    data: GeneratedDocumentCreateManyTemplateInput | GeneratedDocumentCreateManyTemplateInput[]
  }

  export type TemplateFieldUpsertWithWhereUniqueWithoutTemplateInput = {
    where: TemplateFieldWhereUniqueInput
    update: XOR<TemplateFieldUpdateWithoutTemplateInput, TemplateFieldUncheckedUpdateWithoutTemplateInput>
    create: XOR<TemplateFieldCreateWithoutTemplateInput, TemplateFieldUncheckedCreateWithoutTemplateInput>
  }

  export type TemplateFieldUpdateWithWhereUniqueWithoutTemplateInput = {
    where: TemplateFieldWhereUniqueInput
    data: XOR<TemplateFieldUpdateWithoutTemplateInput, TemplateFieldUncheckedUpdateWithoutTemplateInput>
  }

  export type TemplateFieldUpdateManyWithWhereWithoutTemplateInput = {
    where: TemplateFieldScalarWhereInput
    data: XOR<TemplateFieldUpdateManyMutationInput, TemplateFieldUncheckedUpdateManyWithoutTemplateInput>
  }

  export type TemplateFieldScalarWhereInput = {
    AND?: TemplateFieldScalarWhereInput | TemplateFieldScalarWhereInput[]
    OR?: TemplateFieldScalarWhereInput[]
    NOT?: TemplateFieldScalarWhereInput | TemplateFieldScalarWhereInput[]
    id?: IntFilter<"TemplateField"> | number
    templateId?: IntFilter<"TemplateField"> | number
    fieldName?: StringFilter<"TemplateField"> | string
    label?: StringFilter<"TemplateField"> | string
    fieldType?: StringFilter<"TemplateField"> | string
    isTable?: BoolFilter<"TemplateField"> | boolean
  }

  export type GeneratedDocumentUpsertWithWhereUniqueWithoutTemplateInput = {
    where: GeneratedDocumentWhereUniqueInput
    update: XOR<GeneratedDocumentUpdateWithoutTemplateInput, GeneratedDocumentUncheckedUpdateWithoutTemplateInput>
    create: XOR<GeneratedDocumentCreateWithoutTemplateInput, GeneratedDocumentUncheckedCreateWithoutTemplateInput>
  }

  export type GeneratedDocumentUpdateWithWhereUniqueWithoutTemplateInput = {
    where: GeneratedDocumentWhereUniqueInput
    data: XOR<GeneratedDocumentUpdateWithoutTemplateInput, GeneratedDocumentUncheckedUpdateWithoutTemplateInput>
  }

  export type GeneratedDocumentUpdateManyWithWhereWithoutTemplateInput = {
    where: GeneratedDocumentScalarWhereInput
    data: XOR<GeneratedDocumentUpdateManyMutationInput, GeneratedDocumentUncheckedUpdateManyWithoutTemplateInput>
  }

  export type TemplateCreateWithoutFieldsInput = {
    name: string
    templateFile: string
    parsedTemplateFile?: string | null
    createdAt?: Date | string
    active?: boolean
    generatedDocuments?: GeneratedDocumentCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateWithoutFieldsInput = {
    id?: number
    name: string
    templateFile: string
    parsedTemplateFile?: string | null
    createdAt?: Date | string
    active?: boolean
    generatedDocuments?: GeneratedDocumentUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateCreateOrConnectWithoutFieldsInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutFieldsInput, TemplateUncheckedCreateWithoutFieldsInput>
  }

  export type TemplateUpsertWithoutFieldsInput = {
    update: XOR<TemplateUpdateWithoutFieldsInput, TemplateUncheckedUpdateWithoutFieldsInput>
    create: XOR<TemplateCreateWithoutFieldsInput, TemplateUncheckedCreateWithoutFieldsInput>
    where?: TemplateWhereInput
  }

  export type TemplateUpdateToOneWithWhereWithoutFieldsInput = {
    where?: TemplateWhereInput
    data: XOR<TemplateUpdateWithoutFieldsInput, TemplateUncheckedUpdateWithoutFieldsInput>
  }

  export type TemplateUpdateWithoutFieldsInput = {
    name?: StringFieldUpdateOperationsInput | string
    templateFile?: StringFieldUpdateOperationsInput | string
    parsedTemplateFile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    generatedDocuments?: GeneratedDocumentUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateWithoutFieldsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    templateFile?: StringFieldUpdateOperationsInput | string
    parsedTemplateFile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    generatedDocuments?: GeneratedDocumentUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateCreateWithoutGeneratedDocumentsInput = {
    name: string
    templateFile: string
    parsedTemplateFile?: string | null
    createdAt?: Date | string
    active?: boolean
    fields?: TemplateFieldCreateNestedManyWithoutTemplateInput
  }

  export type TemplateUncheckedCreateWithoutGeneratedDocumentsInput = {
    id?: number
    name: string
    templateFile: string
    parsedTemplateFile?: string | null
    createdAt?: Date | string
    active?: boolean
    fields?: TemplateFieldUncheckedCreateNestedManyWithoutTemplateInput
  }

  export type TemplateCreateOrConnectWithoutGeneratedDocumentsInput = {
    where: TemplateWhereUniqueInput
    create: XOR<TemplateCreateWithoutGeneratedDocumentsInput, TemplateUncheckedCreateWithoutGeneratedDocumentsInput>
  }

  export type UserCreateWithoutGeneratedDocsInput = {
    username: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutGeneratedDocsInput = {
    id?: number
    username: string
    email: string
    password: string
    firstName?: string | null
    lastName?: string | null
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutGeneratedDocsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGeneratedDocsInput, UserUncheckedCreateWithoutGeneratedDocsInput>
  }

  export type TemplateUpsertWithoutGeneratedDocumentsInput = {
    update: XOR<TemplateUpdateWithoutGeneratedDocumentsInput, TemplateUncheckedUpdateWithoutGeneratedDocumentsInput>
    create: XOR<TemplateCreateWithoutGeneratedDocumentsInput, TemplateUncheckedCreateWithoutGeneratedDocumentsInput>
    where?: TemplateWhereInput
  }

  export type TemplateUpdateToOneWithWhereWithoutGeneratedDocumentsInput = {
    where?: TemplateWhereInput
    data: XOR<TemplateUpdateWithoutGeneratedDocumentsInput, TemplateUncheckedUpdateWithoutGeneratedDocumentsInput>
  }

  export type TemplateUpdateWithoutGeneratedDocumentsInput = {
    name?: StringFieldUpdateOperationsInput | string
    templateFile?: StringFieldUpdateOperationsInput | string
    parsedTemplateFile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    fields?: TemplateFieldUpdateManyWithoutTemplateNestedInput
  }

  export type TemplateUncheckedUpdateWithoutGeneratedDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    templateFile?: StringFieldUpdateOperationsInput | string
    parsedTemplateFile?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    active?: BoolFieldUpdateOperationsInput | boolean
    fields?: TemplateFieldUncheckedUpdateManyWithoutTemplateNestedInput
  }

  export type UserUpsertWithoutGeneratedDocsInput = {
    update: XOR<UserUpdateWithoutGeneratedDocsInput, UserUncheckedUpdateWithoutGeneratedDocsInput>
    create: XOR<UserCreateWithoutGeneratedDocsInput, UserUncheckedCreateWithoutGeneratedDocsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGeneratedDocsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGeneratedDocsInput, UserUncheckedUpdateWithoutGeneratedDocsInput>
  }

  export type UserUpdateWithoutGeneratedDocsInput = {
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutGeneratedDocsInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedDocumentCreateManyCreatedByInput = {
    id?: number
    templateId?: number | null
    filePath: string
    createdAt?: Date | string
  }

  export type GeneratedDocumentUpdateWithoutCreatedByInput = {
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    template?: TemplateUpdateOneWithoutGeneratedDocumentsNestedInput
  }

  export type GeneratedDocumentUncheckedUpdateWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    templateId?: NullableIntFieldUpdateOperationsInput | number | null
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GeneratedDocumentUncheckedUpdateManyWithoutCreatedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    templateId?: NullableIntFieldUpdateOperationsInput | number | null
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TemplateFieldCreateManyTemplateInput = {
    id?: number
    fieldName: string
    label: string
    fieldType?: string
    isTable?: boolean
  }

  export type GeneratedDocumentCreateManyTemplateInput = {
    id?: number
    filePath: string
    createdAt?: Date | string
    createdById?: number | null
  }

  export type TemplateFieldUpdateWithoutTemplateInput = {
    fieldName?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    fieldType?: StringFieldUpdateOperationsInput | string
    isTable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TemplateFieldUncheckedUpdateWithoutTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fieldName?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    fieldType?: StringFieldUpdateOperationsInput | string
    isTable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TemplateFieldUncheckedUpdateManyWithoutTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fieldName?: StringFieldUpdateOperationsInput | string
    label?: StringFieldUpdateOperationsInput | string
    fieldType?: StringFieldUpdateOperationsInput | string
    isTable?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GeneratedDocumentUpdateWithoutTemplateInput = {
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdBy?: UserUpdateOneWithoutGeneratedDocsNestedInput
  }

  export type GeneratedDocumentUncheckedUpdateWithoutTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type GeneratedDocumentUncheckedUpdateManyWithoutTemplateInput = {
    id?: IntFieldUpdateOperationsInput | number
    filePath?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdById?: NullableIntFieldUpdateOperationsInput | number | null
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