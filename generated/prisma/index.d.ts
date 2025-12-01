
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
 * Model Users
 * 
 */
export type Users = $Result.DefaultSelection<Prisma.$UsersPayload>
/**
 * Model Rules
 * 
 */
export type Rules = $Result.DefaultSelection<Prisma.$RulesPayload>
/**
 * Model Companies
 * 
 */
export type Companies = $Result.DefaultSelection<Prisma.$CompaniesPayload>
/**
 * Model Warehouses
 * 
 */
export type Warehouses = $Result.DefaultSelection<Prisma.$WarehousesPayload>
/**
 * Model Stocks
 * 
 */
export type Stocks = $Result.DefaultSelection<Prisma.$StocksPayload>
/**
 * Model Products
 * 
 */
export type Products = $Result.DefaultSelection<Prisma.$ProductsPayload>
/**
 * Model Brands
 * 
 */
export type Brands = $Result.DefaultSelection<Prisma.$BrandsPayload>
/**
 * Model Banners
 * 
 */
export type Banners = $Result.DefaultSelection<Prisma.$BannersPayload>
/**
 * Model Categories
 * 
 */
export type Categories = $Result.DefaultSelection<Prisma.$CategoriesPayload>
/**
 * Model Suppliers
 * 
 */
export type Suppliers = $Result.DefaultSelection<Prisma.$SuppliersPayload>
/**
 * Model Orders
 * 
 */
export type Orders = $Result.DefaultSelection<Prisma.$OrdersPayload>
/**
 * Model Status
 * 
 */
export type Status = $Result.DefaultSelection<Prisma.$StatusPayload>
/**
 * Model Method_Payments
 * 
 */
export type Method_Payments = $Result.DefaultSelection<Prisma.$Method_PaymentsPayload>
/**
 * Model Orders_Itens
 * 
 */
export type Orders_Itens = $Result.DefaultSelection<Prisma.$Orders_ItensPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.users.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.users.findMany()
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
   * `prisma.users`: Exposes CRUD operations for the **Users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.UsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rules`: Exposes CRUD operations for the **Rules** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rules
    * const rules = await prisma.rules.findMany()
    * ```
    */
  get rules(): Prisma.RulesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companies`: Exposes CRUD operations for the **Companies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Companies
    * const companies = await prisma.companies.findMany()
    * ```
    */
  get companies(): Prisma.CompaniesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.warehouses`: Exposes CRUD operations for the **Warehouses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Warehouses
    * const warehouses = await prisma.warehouses.findMany()
    * ```
    */
  get warehouses(): Prisma.WarehousesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stocks`: Exposes CRUD operations for the **Stocks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stocks
    * const stocks = await prisma.stocks.findMany()
    * ```
    */
  get stocks(): Prisma.StocksDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **Products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.ProductsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.brands`: Exposes CRUD operations for the **Brands** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Brands
    * const brands = await prisma.brands.findMany()
    * ```
    */
  get brands(): Prisma.BrandsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.banners`: Exposes CRUD operations for the **Banners** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banners
    * const banners = await prisma.banners.findMany()
    * ```
    */
  get banners(): Prisma.BannersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **Categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.CategoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.suppliers`: Exposes CRUD operations for the **Suppliers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.suppliers.findMany()
    * ```
    */
  get suppliers(): Prisma.SuppliersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **Orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.OrdersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.status`: Exposes CRUD operations for the **Status** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Statuses
    * const statuses = await prisma.status.findMany()
    * ```
    */
  get status(): Prisma.StatusDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.method_Payments`: Exposes CRUD operations for the **Method_Payments** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Method_Payments
    * const method_Payments = await prisma.method_Payments.findMany()
    * ```
    */
  get method_Payments(): Prisma.Method_PaymentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders_Itens`: Exposes CRUD operations for the **Orders_Itens** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders_Itens
    * const orders_Itens = await prisma.orders_Itens.findMany()
    * ```
    */
  get orders_Itens(): Prisma.Orders_ItensDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.0
   * Query Engine version: c0aafc03b8ef6cdced8654b9a817999e02457d6a
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
    Users: 'Users',
    Rules: 'Rules',
    Companies: 'Companies',
    Warehouses: 'Warehouses',
    Stocks: 'Stocks',
    Products: 'Products',
    Brands: 'Brands',
    Banners: 'Banners',
    Categories: 'Categories',
    Suppliers: 'Suppliers',
    Orders: 'Orders',
    Status: 'Status',
    Method_Payments: 'Method_Payments',
    Orders_Itens: 'Orders_Itens'
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
      modelProps: "users" | "rules" | "companies" | "warehouses" | "stocks" | "products" | "brands" | "banners" | "categories" | "suppliers" | "orders" | "status" | "method_Payments" | "orders_Itens"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Users: {
        payload: Prisma.$UsersPayload<ExtArgs>
        fields: Prisma.UsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findFirst: {
            args: Prisma.UsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          findMany: {
            args: Prisma.UsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          create: {
            args: Prisma.UsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          createMany: {
            args: Prisma.UsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          delete: {
            args: Prisma.UsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          update: {
            args: Prisma.UsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          deleteMany: {
            args: Prisma.UsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>[]
          }
          upsert: {
            args: Prisma.UsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.UsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      Rules: {
        payload: Prisma.$RulesPayload<ExtArgs>
        fields: Prisma.RulesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RulesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RulesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulesPayload>
          }
          findFirst: {
            args: Prisma.RulesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RulesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulesPayload>
          }
          findMany: {
            args: Prisma.RulesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulesPayload>[]
          }
          create: {
            args: Prisma.RulesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulesPayload>
          }
          createMany: {
            args: Prisma.RulesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RulesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulesPayload>[]
          }
          delete: {
            args: Prisma.RulesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulesPayload>
          }
          update: {
            args: Prisma.RulesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulesPayload>
          }
          deleteMany: {
            args: Prisma.RulesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RulesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RulesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulesPayload>[]
          }
          upsert: {
            args: Prisma.RulesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RulesPayload>
          }
          aggregate: {
            args: Prisma.RulesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRules>
          }
          groupBy: {
            args: Prisma.RulesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RulesGroupByOutputType>[]
          }
          count: {
            args: Prisma.RulesCountArgs<ExtArgs>
            result: $Utils.Optional<RulesCountAggregateOutputType> | number
          }
        }
      }
      Companies: {
        payload: Prisma.$CompaniesPayload<ExtArgs>
        fields: Prisma.CompaniesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompaniesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompaniesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>
          }
          findFirst: {
            args: Prisma.CompaniesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompaniesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>
          }
          findMany: {
            args: Prisma.CompaniesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>[]
          }
          create: {
            args: Prisma.CompaniesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>
          }
          createMany: {
            args: Prisma.CompaniesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompaniesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>[]
          }
          delete: {
            args: Prisma.CompaniesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>
          }
          update: {
            args: Prisma.CompaniesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>
          }
          deleteMany: {
            args: Prisma.CompaniesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompaniesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompaniesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>[]
          }
          upsert: {
            args: Prisma.CompaniesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompaniesPayload>
          }
          aggregate: {
            args: Prisma.CompaniesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanies>
          }
          groupBy: {
            args: Prisma.CompaniesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompaniesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompaniesCountArgs<ExtArgs>
            result: $Utils.Optional<CompaniesCountAggregateOutputType> | number
          }
        }
      }
      Warehouses: {
        payload: Prisma.$WarehousesPayload<ExtArgs>
        fields: Prisma.WarehousesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WarehousesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WarehousesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousesPayload>
          }
          findFirst: {
            args: Prisma.WarehousesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WarehousesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousesPayload>
          }
          findMany: {
            args: Prisma.WarehousesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousesPayload>[]
          }
          create: {
            args: Prisma.WarehousesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousesPayload>
          }
          createMany: {
            args: Prisma.WarehousesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WarehousesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousesPayload>[]
          }
          delete: {
            args: Prisma.WarehousesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousesPayload>
          }
          update: {
            args: Prisma.WarehousesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousesPayload>
          }
          deleteMany: {
            args: Prisma.WarehousesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WarehousesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WarehousesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousesPayload>[]
          }
          upsert: {
            args: Prisma.WarehousesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehousesPayload>
          }
          aggregate: {
            args: Prisma.WarehousesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWarehouses>
          }
          groupBy: {
            args: Prisma.WarehousesGroupByArgs<ExtArgs>
            result: $Utils.Optional<WarehousesGroupByOutputType>[]
          }
          count: {
            args: Prisma.WarehousesCountArgs<ExtArgs>
            result: $Utils.Optional<WarehousesCountAggregateOutputType> | number
          }
        }
      }
      Stocks: {
        payload: Prisma.$StocksPayload<ExtArgs>
        fields: Prisma.StocksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StocksFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StocksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StocksFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StocksPayload>
          }
          findFirst: {
            args: Prisma.StocksFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StocksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StocksFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StocksPayload>
          }
          findMany: {
            args: Prisma.StocksFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StocksPayload>[]
          }
          create: {
            args: Prisma.StocksCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StocksPayload>
          }
          createMany: {
            args: Prisma.StocksCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StocksCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StocksPayload>[]
          }
          delete: {
            args: Prisma.StocksDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StocksPayload>
          }
          update: {
            args: Prisma.StocksUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StocksPayload>
          }
          deleteMany: {
            args: Prisma.StocksDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StocksUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StocksUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StocksPayload>[]
          }
          upsert: {
            args: Prisma.StocksUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StocksPayload>
          }
          aggregate: {
            args: Prisma.StocksAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStocks>
          }
          groupBy: {
            args: Prisma.StocksGroupByArgs<ExtArgs>
            result: $Utils.Optional<StocksGroupByOutputType>[]
          }
          count: {
            args: Prisma.StocksCountArgs<ExtArgs>
            result: $Utils.Optional<StocksCountAggregateOutputType> | number
          }
        }
      }
      Products: {
        payload: Prisma.$ProductsPayload<ExtArgs>
        fields: Prisma.ProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findFirst: {
            args: Prisma.ProductsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          findMany: {
            args: Prisma.ProductsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          create: {
            args: Prisma.ProductsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          createMany: {
            args: Prisma.ProductsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          delete: {
            args: Prisma.ProductsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          update: {
            args: Prisma.ProductsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          deleteMany: {
            args: Prisma.ProductsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>[]
          }
          upsert: {
            args: Prisma.ProductsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.ProductsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      Brands: {
        payload: Prisma.$BrandsPayload<ExtArgs>
        fields: Prisma.BrandsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BrandsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BrandsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>
          }
          findFirst: {
            args: Prisma.BrandsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BrandsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>
          }
          findMany: {
            args: Prisma.BrandsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>[]
          }
          create: {
            args: Prisma.BrandsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>
          }
          createMany: {
            args: Prisma.BrandsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BrandsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>[]
          }
          delete: {
            args: Prisma.BrandsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>
          }
          update: {
            args: Prisma.BrandsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>
          }
          deleteMany: {
            args: Prisma.BrandsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BrandsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BrandsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>[]
          }
          upsert: {
            args: Prisma.BrandsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BrandsPayload>
          }
          aggregate: {
            args: Prisma.BrandsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBrands>
          }
          groupBy: {
            args: Prisma.BrandsGroupByArgs<ExtArgs>
            result: $Utils.Optional<BrandsGroupByOutputType>[]
          }
          count: {
            args: Prisma.BrandsCountArgs<ExtArgs>
            result: $Utils.Optional<BrandsCountAggregateOutputType> | number
          }
        }
      }
      Banners: {
        payload: Prisma.$BannersPayload<ExtArgs>
        fields: Prisma.BannersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BannersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BannersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannersPayload>
          }
          findFirst: {
            args: Prisma.BannersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BannersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannersPayload>
          }
          findMany: {
            args: Prisma.BannersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannersPayload>[]
          }
          create: {
            args: Prisma.BannersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannersPayload>
          }
          createMany: {
            args: Prisma.BannersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BannersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannersPayload>[]
          }
          delete: {
            args: Prisma.BannersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannersPayload>
          }
          update: {
            args: Prisma.BannersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannersPayload>
          }
          deleteMany: {
            args: Prisma.BannersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BannersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BannersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannersPayload>[]
          }
          upsert: {
            args: Prisma.BannersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BannersPayload>
          }
          aggregate: {
            args: Prisma.BannersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBanners>
          }
          groupBy: {
            args: Prisma.BannersGroupByArgs<ExtArgs>
            result: $Utils.Optional<BannersGroupByOutputType>[]
          }
          count: {
            args: Prisma.BannersCountArgs<ExtArgs>
            result: $Utils.Optional<BannersCountAggregateOutputType> | number
          }
        }
      }
      Categories: {
        payload: Prisma.$CategoriesPayload<ExtArgs>
        fields: Prisma.CategoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findFirst: {
            args: Prisma.CategoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          findMany: {
            args: Prisma.CategoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          create: {
            args: Prisma.CategoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          createMany: {
            args: Prisma.CategoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          delete: {
            args: Prisma.CategoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          update: {
            args: Prisma.CategoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          deleteMany: {
            args: Prisma.CategoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>[]
          }
          upsert: {
            args: Prisma.CategoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.CategoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      Suppliers: {
        payload: Prisma.$SuppliersPayload<ExtArgs>
        fields: Prisma.SuppliersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SuppliersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuppliersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SuppliersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuppliersPayload>
          }
          findFirst: {
            args: Prisma.SuppliersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuppliersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SuppliersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuppliersPayload>
          }
          findMany: {
            args: Prisma.SuppliersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuppliersPayload>[]
          }
          create: {
            args: Prisma.SuppliersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuppliersPayload>
          }
          createMany: {
            args: Prisma.SuppliersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SuppliersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuppliersPayload>[]
          }
          delete: {
            args: Prisma.SuppliersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuppliersPayload>
          }
          update: {
            args: Prisma.SuppliersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuppliersPayload>
          }
          deleteMany: {
            args: Prisma.SuppliersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SuppliersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SuppliersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuppliersPayload>[]
          }
          upsert: {
            args: Prisma.SuppliersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SuppliersPayload>
          }
          aggregate: {
            args: Prisma.SuppliersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSuppliers>
          }
          groupBy: {
            args: Prisma.SuppliersGroupByArgs<ExtArgs>
            result: $Utils.Optional<SuppliersGroupByOutputType>[]
          }
          count: {
            args: Prisma.SuppliersCountArgs<ExtArgs>
            result: $Utils.Optional<SuppliersCountAggregateOutputType> | number
          }
        }
      }
      Orders: {
        payload: Prisma.$OrdersPayload<ExtArgs>
        fields: Prisma.OrdersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrdersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrdersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findFirst: {
            args: Prisma.OrdersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrdersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          findMany: {
            args: Prisma.OrdersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          create: {
            args: Prisma.OrdersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          createMany: {
            args: Prisma.OrdersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrdersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          delete: {
            args: Prisma.OrdersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          update: {
            args: Prisma.OrdersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          deleteMany: {
            args: Prisma.OrdersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrdersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrdersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>[]
          }
          upsert: {
            args: Prisma.OrdersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrdersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.OrdersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrdersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      Status: {
        payload: Prisma.$StatusPayload<ExtArgs>
        fields: Prisma.StatusFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StatusFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StatusFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          findFirst: {
            args: Prisma.StatusFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StatusFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          findMany: {
            args: Prisma.StatusFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>[]
          }
          create: {
            args: Prisma.StatusCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          createMany: {
            args: Prisma.StatusCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StatusCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>[]
          }
          delete: {
            args: Prisma.StatusDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          update: {
            args: Prisma.StatusUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          deleteMany: {
            args: Prisma.StatusDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StatusUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StatusUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>[]
          }
          upsert: {
            args: Prisma.StatusUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StatusPayload>
          }
          aggregate: {
            args: Prisma.StatusAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStatus>
          }
          groupBy: {
            args: Prisma.StatusGroupByArgs<ExtArgs>
            result: $Utils.Optional<StatusGroupByOutputType>[]
          }
          count: {
            args: Prisma.StatusCountArgs<ExtArgs>
            result: $Utils.Optional<StatusCountAggregateOutputType> | number
          }
        }
      }
      Method_Payments: {
        payload: Prisma.$Method_PaymentsPayload<ExtArgs>
        fields: Prisma.Method_PaymentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Method_PaymentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Method_PaymentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Method_PaymentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Method_PaymentsPayload>
          }
          findFirst: {
            args: Prisma.Method_PaymentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Method_PaymentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Method_PaymentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Method_PaymentsPayload>
          }
          findMany: {
            args: Prisma.Method_PaymentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Method_PaymentsPayload>[]
          }
          create: {
            args: Prisma.Method_PaymentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Method_PaymentsPayload>
          }
          createMany: {
            args: Prisma.Method_PaymentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Method_PaymentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Method_PaymentsPayload>[]
          }
          delete: {
            args: Prisma.Method_PaymentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Method_PaymentsPayload>
          }
          update: {
            args: Prisma.Method_PaymentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Method_PaymentsPayload>
          }
          deleteMany: {
            args: Prisma.Method_PaymentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Method_PaymentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Method_PaymentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Method_PaymentsPayload>[]
          }
          upsert: {
            args: Prisma.Method_PaymentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Method_PaymentsPayload>
          }
          aggregate: {
            args: Prisma.Method_PaymentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMethod_Payments>
          }
          groupBy: {
            args: Prisma.Method_PaymentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Method_PaymentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Method_PaymentsCountArgs<ExtArgs>
            result: $Utils.Optional<Method_PaymentsCountAggregateOutputType> | number
          }
        }
      }
      Orders_Itens: {
        payload: Prisma.$Orders_ItensPayload<ExtArgs>
        fields: Prisma.Orders_ItensFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Orders_ItensFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Orders_ItensPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Orders_ItensFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Orders_ItensPayload>
          }
          findFirst: {
            args: Prisma.Orders_ItensFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Orders_ItensPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Orders_ItensFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Orders_ItensPayload>
          }
          findMany: {
            args: Prisma.Orders_ItensFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Orders_ItensPayload>[]
          }
          create: {
            args: Prisma.Orders_ItensCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Orders_ItensPayload>
          }
          createMany: {
            args: Prisma.Orders_ItensCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Orders_ItensCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Orders_ItensPayload>[]
          }
          delete: {
            args: Prisma.Orders_ItensDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Orders_ItensPayload>
          }
          update: {
            args: Prisma.Orders_ItensUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Orders_ItensPayload>
          }
          deleteMany: {
            args: Prisma.Orders_ItensDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Orders_ItensUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Orders_ItensUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Orders_ItensPayload>[]
          }
          upsert: {
            args: Prisma.Orders_ItensUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Orders_ItensPayload>
          }
          aggregate: {
            args: Prisma.Orders_ItensAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders_Itens>
          }
          groupBy: {
            args: Prisma.Orders_ItensGroupByArgs<ExtArgs>
            result: $Utils.Optional<Orders_ItensGroupByOutputType>[]
          }
          count: {
            args: Prisma.Orders_ItensCountArgs<ExtArgs>
            result: $Utils.Optional<Orders_ItensCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    users?: UsersOmit
    rules?: RulesOmit
    companies?: CompaniesOmit
    warehouses?: WarehousesOmit
    stocks?: StocksOmit
    products?: ProductsOmit
    brands?: BrandsOmit
    banners?: BannersOmit
    categories?: CategoriesOmit
    suppliers?: SuppliersOmit
    orders?: OrdersOmit
    status?: StatusOmit
    method_Payments?: Method_PaymentsOmit
    orders_Itens?: Orders_ItensOmit
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
   * Count Type RulesCountOutputType
   */

  export type RulesCountOutputType = {
    Users: number
  }

  export type RulesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | RulesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RulesCountOutputType without action
   */
  export type RulesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RulesCountOutputType
     */
    select?: RulesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RulesCountOutputType without action
   */
  export type RulesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }


  /**
   * Count Type CompaniesCountOutputType
   */

  export type CompaniesCountOutputType = {
    Users: number
  }

  export type CompaniesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | CompaniesCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompaniesCountOutputType
     */
    select?: CompaniesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompaniesCountOutputType without action
   */
  export type CompaniesCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
  }


  /**
   * Count Type WarehousesCountOutputType
   */

  export type WarehousesCountOutputType = {
    Stocks: number
  }

  export type WarehousesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Stocks?: boolean | WarehousesCountOutputTypeCountStocksArgs
  }

  // Custom InputTypes
  /**
   * WarehousesCountOutputType without action
   */
  export type WarehousesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehousesCountOutputType
     */
    select?: WarehousesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WarehousesCountOutputType without action
   */
  export type WarehousesCountOutputTypeCountStocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StocksWhereInput
  }


  /**
   * Count Type StocksCountOutputType
   */

  export type StocksCountOutputType = {
    Products: number
  }

  export type StocksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | StocksCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * StocksCountOutputType without action
   */
  export type StocksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StocksCountOutputType
     */
    select?: StocksCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StocksCountOutputType without action
   */
  export type StocksCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    banners: number
    supliers: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    banners?: boolean | ProductsCountOutputTypeCountBannersArgs
    supliers?: boolean | ProductsCountOutputTypeCountSupliersArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountBannersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BannersWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountSupliersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuppliersWhereInput
  }


  /**
   * Count Type BrandsCountOutputType
   */

  export type BrandsCountOutputType = {
    Products: number
  }

  export type BrandsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | BrandsCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * BrandsCountOutputType without action
   */
  export type BrandsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BrandsCountOutputType
     */
    select?: BrandsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BrandsCountOutputType without action
   */
  export type BrandsCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    Products: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | CategoriesCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }


  /**
   * Count Type SuppliersCountOutputType
   */

  export type SuppliersCountOutputType = {
    products: number
  }

  export type SuppliersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | SuppliersCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * SuppliersCountOutputType without action
   */
  export type SuppliersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SuppliersCountOutputType
     */
    select?: SuppliersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SuppliersCountOutputType without action
   */
  export type SuppliersCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    method_payments: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    method_payments?: boolean | OrdersCountOutputTypeCountMethod_paymentsArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountMethod_paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Method_PaymentsWhereInput
  }


  /**
   * Count Type StatusCountOutputType
   */

  export type StatusCountOutputType = {
    Orders: number
  }

  export type StatusCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Orders?: boolean | StatusCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * StatusCountOutputType without action
   */
  export type StatusCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StatusCountOutputType
     */
    select?: StatusCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StatusCountOutputType without action
   */
  export type StatusCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }


  /**
   * Count Type Method_PaymentsCountOutputType
   */

  export type Method_PaymentsCountOutputType = {
    orders: number
  }

  export type Method_PaymentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Method_PaymentsCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * Method_PaymentsCountOutputType without action
   */
  export type Method_PaymentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Method_PaymentsCountOutputType
     */
    select?: Method_PaymentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Method_PaymentsCountOutputType without action
   */
  export type Method_PaymentsCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    name: string | null
    surname: string | null
    phone: string | null
    cep: string | null
    photo: string | null
    is_active: boolean | null
    checked: boolean | null
    rule_id: string | null
    validation_id: string | null
    created_at: Date | null
    updated_at: Date | null
    email: string | null
    enterprise_id: string | null
    passoword: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    name: string | null
    surname: string | null
    phone: string | null
    cep: string | null
    photo: string | null
    is_active: boolean | null
    checked: boolean | null
    rule_id: string | null
    validation_id: string | null
    created_at: Date | null
    updated_at: Date | null
    email: string | null
    enterprise_id: string | null
    passoword: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    name: number
    surname: number
    phone: number
    cep: number
    photo: number
    is_active: number
    checked: number
    rule_id: number
    validation_id: number
    created_at: number
    updated_at: number
    email: number
    enterprise_id: number
    passoword: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    phone?: true
    cep?: true
    photo?: true
    is_active?: true
    checked?: true
    rule_id?: true
    validation_id?: true
    created_at?: true
    updated_at?: true
    email?: true
    enterprise_id?: true
    passoword?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    phone?: true
    cep?: true
    photo?: true
    is_active?: true
    checked?: true
    rule_id?: true
    validation_id?: true
    created_at?: true
    updated_at?: true
    email?: true
    enterprise_id?: true
    passoword?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    name?: true
    surname?: true
    phone?: true
    cep?: true
    photo?: true
    is_active?: true
    checked?: true
    rule_id?: true
    validation_id?: true
    created_at?: true
    updated_at?: true
    email?: true
    enterprise_id?: true
    passoword?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to aggregate.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsersWhereUniqueInput
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




  export type UsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithAggregationInput | UsersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: UsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    name: string
    surname: string
    phone: string
    cep: string | null
    photo: string | null
    is_active: boolean
    checked: boolean
    rule_id: string
    validation_id: string | null
    created_at: Date | null
    updated_at: Date | null
    email: string | null
    enterprise_id: string | null
    passoword: string | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends UsersGroupByArgs> = Prisma.PrismaPromise<
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


  export type UsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    phone?: boolean
    cep?: boolean
    photo?: boolean
    is_active?: boolean
    checked?: boolean
    rule_id?: boolean
    validation_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    email?: boolean
    enterprise_id?: boolean
    passoword?: boolean
    enterprise?: boolean | Users$enterpriseArgs<ExtArgs>
    rule?: boolean | RulesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    phone?: boolean
    cep?: boolean
    photo?: boolean
    is_active?: boolean
    checked?: boolean
    rule_id?: boolean
    validation_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    email?: boolean
    enterprise_id?: boolean
    passoword?: boolean
    enterprise?: boolean | Users$enterpriseArgs<ExtArgs>
    rule?: boolean | RulesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    surname?: boolean
    phone?: boolean
    cep?: boolean
    photo?: boolean
    is_active?: boolean
    checked?: boolean
    rule_id?: boolean
    validation_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    email?: boolean
    enterprise_id?: boolean
    passoword?: boolean
    enterprise?: boolean | Users$enterpriseArgs<ExtArgs>
    rule?: boolean | RulesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type UsersSelectScalar = {
    id?: boolean
    name?: boolean
    surname?: boolean
    phone?: boolean
    cep?: boolean
    photo?: boolean
    is_active?: boolean
    checked?: boolean
    rule_id?: boolean
    validation_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    email?: boolean
    enterprise_id?: boolean
    passoword?: boolean
  }

  export type UsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "surname" | "phone" | "cep" | "photo" | "is_active" | "checked" | "rule_id" | "validation_id" | "created_at" | "updated_at" | "email" | "enterprise_id" | "passoword", ExtArgs["result"]["users"]>
  export type UsersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enterprise?: boolean | Users$enterpriseArgs<ExtArgs>
    rule?: boolean | RulesDefaultArgs<ExtArgs>
  }
  export type UsersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enterprise?: boolean | Users$enterpriseArgs<ExtArgs>
    rule?: boolean | RulesDefaultArgs<ExtArgs>
  }
  export type UsersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    enterprise?: boolean | Users$enterpriseArgs<ExtArgs>
    rule?: boolean | RulesDefaultArgs<ExtArgs>
  }

  export type $UsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users"
    objects: {
      enterprise: Prisma.$CompaniesPayload<ExtArgs> | null
      rule: Prisma.$RulesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      surname: string
      phone: string
      cep: string | null
      photo: string | null
      is_active: boolean
      checked: boolean
      rule_id: string
      validation_id: string | null
      created_at: Date | null
      updated_at: Date | null
      email: string | null
      enterprise_id: string | null
      passoword: string | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type UsersGetPayload<S extends boolean | null | undefined | UsersDefaultArgs> = $Result.GetResult<Prisma.$UsersPayload, S>

  type UsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface UsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users'], meta: { name: 'Users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {UsersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsersFindUniqueArgs>(args: SelectSubset<T, UsersFindUniqueArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsersFindUniqueOrThrowArgs>(args: SelectSubset<T, UsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsersFindFirstArgs>(args?: SelectSubset<T, UsersFindFirstArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsersFindFirstOrThrowArgs>(args?: SelectSubset<T, UsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends UsersFindManyArgs>(args?: SelectSubset<T, UsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {UsersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends UsersCreateArgs>(args: SelectSubset<T, UsersCreateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UsersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsersCreateManyArgs>(args?: SelectSubset<T, UsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UsersCreateManyAndReturnArgs} args - Arguments to create many Users.
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
    createManyAndReturn<T extends UsersCreateManyAndReturnArgs>(args?: SelectSubset<T, UsersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {UsersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends UsersDeleteArgs>(args: SelectSubset<T, UsersDeleteArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {UsersUpdateArgs} args - Arguments to update one Users.
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
    update<T extends UsersUpdateArgs>(args: SelectSubset<T, UsersUpdateArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UsersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsersDeleteManyArgs>(args?: SelectSubset<T, UsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends UsersUpdateManyArgs>(args: SelectSubset<T, UsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UsersUpdateManyAndReturnArgs} args - Arguments to update many Users.
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
    updateManyAndReturn<T extends UsersUpdateManyAndReturnArgs>(args: SelectSubset<T, UsersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {UsersUpsertArgs} args - Arguments to update or create a Users.
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
    upsert<T extends UsersUpsertArgs>(args: SelectSubset<T, UsersUpsertArgs<ExtArgs>>): Prisma__UsersClient<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UsersCountArgs>(
      args?: Subset<T, UsersCountArgs>,
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
     * @param {UsersGroupByArgs} args - Group by arguments.
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
      T extends UsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsersGroupByArgs['orderBy'] }
        : { orderBy?: UsersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users model
   */
  readonly fields: UsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    enterprise<T extends Users$enterpriseArgs<ExtArgs> = {}>(args?: Subset<T, Users$enterpriseArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    rule<T extends RulesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RulesDefaultArgs<ExtArgs>>): Prisma__RulesClient<$Result.GetResult<Prisma.$RulesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Users model
   */
  interface UsersFieldRefs {
    readonly id: FieldRef<"Users", 'String'>
    readonly name: FieldRef<"Users", 'String'>
    readonly surname: FieldRef<"Users", 'String'>
    readonly phone: FieldRef<"Users", 'String'>
    readonly cep: FieldRef<"Users", 'String'>
    readonly photo: FieldRef<"Users", 'String'>
    readonly is_active: FieldRef<"Users", 'Boolean'>
    readonly checked: FieldRef<"Users", 'Boolean'>
    readonly rule_id: FieldRef<"Users", 'String'>
    readonly validation_id: FieldRef<"Users", 'String'>
    readonly created_at: FieldRef<"Users", 'DateTime'>
    readonly updated_at: FieldRef<"Users", 'DateTime'>
    readonly email: FieldRef<"Users", 'String'>
    readonly enterprise_id: FieldRef<"Users", 'String'>
    readonly passoword: FieldRef<"Users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users findUnique
   */
  export type UsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findUniqueOrThrow
   */
  export type UsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users findFirst
   */
  export type UsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findFirstOrThrow
   */
  export type UsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users findMany
   */
  export type UsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UsersWhereUniqueInput
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
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Users create
   */
  export type UsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to create a Users.
     */
    data: XOR<UsersCreateInput, UsersUncheckedCreateInput>
  }

  /**
   * Users createMany
   */
  export type UsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users createManyAndReturn
   */
  export type UsersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UsersCreateManyInput | UsersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Users update
   */
  export type UsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The data needed to update a Users.
     */
    data: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
    /**
     * Choose, which Users to update.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users updateMany
   */
  export type UsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * Users updateManyAndReturn
   */
  export type UsersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Users upsert
   */
  export type UsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * The filter to search for the Users to update in case it exists.
     */
    where: UsersWhereUniqueInput
    /**
     * In case the Users found by the `where` argument doesn't exist, create a new Users with this data.
     */
    create: XOR<UsersCreateInput, UsersUncheckedCreateInput>
    /**
     * In case the Users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsersUpdateInput, UsersUncheckedUpdateInput>
  }

  /**
   * Users delete
   */
  export type UsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    /**
     * Filter which Users to delete.
     */
    where: UsersWhereUniqueInput
  }

  /**
   * Users deleteMany
   */
  export type UsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UsersWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * Users.enterprise
   */
  export type Users$enterpriseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    where?: CompaniesWhereInput
  }

  /**
   * Users without action
   */
  export type UsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
  }


  /**
   * Model Rules
   */

  export type AggregateRules = {
    _count: RulesCountAggregateOutputType | null
    _min: RulesMinAggregateOutputType | null
    _max: RulesMaxAggregateOutputType | null
  }

  export type RulesMinAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RulesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type RulesCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type RulesMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type RulesMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type RulesCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type RulesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rules to aggregate.
     */
    where?: RulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RulesOrderByWithRelationInput | RulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Rules
    **/
    _count?: true | RulesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RulesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RulesMaxAggregateInputType
  }

  export type GetRulesAggregateType<T extends RulesAggregateArgs> = {
        [P in keyof T & keyof AggregateRules]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRules[P]>
      : GetScalarType<T[P], AggregateRules[P]>
  }




  export type RulesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RulesWhereInput
    orderBy?: RulesOrderByWithAggregationInput | RulesOrderByWithAggregationInput[]
    by: RulesScalarFieldEnum[] | RulesScalarFieldEnum
    having?: RulesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RulesCountAggregateInputType | true
    _min?: RulesMinAggregateInputType
    _max?: RulesMaxAggregateInputType
  }

  export type RulesGroupByOutputType = {
    id: string
    name: string
    created_at: Date | null
    updated_at: Date | null
    _count: RulesCountAggregateOutputType | null
    _min: RulesMinAggregateOutputType | null
    _max: RulesMaxAggregateOutputType | null
  }

  type GetRulesGroupByPayload<T extends RulesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RulesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RulesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RulesGroupByOutputType[P]>
            : GetScalarType<T[P], RulesGroupByOutputType[P]>
        }
      >
    >


  export type RulesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    Users?: boolean | Rules$UsersArgs<ExtArgs>
    _count?: boolean | RulesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rules"]>

  export type RulesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["rules"]>

  export type RulesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["rules"]>

  export type RulesSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type RulesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["rules"]>
  export type RulesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Users?: boolean | Rules$UsersArgs<ExtArgs>
    _count?: boolean | RulesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RulesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RulesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RulesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Rules"
    objects: {
      Users: Prisma.$UsersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["rules"]>
    composites: {}
  }

  type RulesGetPayload<S extends boolean | null | undefined | RulesDefaultArgs> = $Result.GetResult<Prisma.$RulesPayload, S>

  type RulesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RulesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RulesCountAggregateInputType | true
    }

  export interface RulesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rules'], meta: { name: 'Rules' } }
    /**
     * Find zero or one Rules that matches the filter.
     * @param {RulesFindUniqueArgs} args - Arguments to find a Rules
     * @example
     * // Get one Rules
     * const rules = await prisma.rules.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RulesFindUniqueArgs>(args: SelectSubset<T, RulesFindUniqueArgs<ExtArgs>>): Prisma__RulesClient<$Result.GetResult<Prisma.$RulesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rules that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RulesFindUniqueOrThrowArgs} args - Arguments to find a Rules
     * @example
     * // Get one Rules
     * const rules = await prisma.rules.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RulesFindUniqueOrThrowArgs>(args: SelectSubset<T, RulesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RulesClient<$Result.GetResult<Prisma.$RulesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RulesFindFirstArgs} args - Arguments to find a Rules
     * @example
     * // Get one Rules
     * const rules = await prisma.rules.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RulesFindFirstArgs>(args?: SelectSubset<T, RulesFindFirstArgs<ExtArgs>>): Prisma__RulesClient<$Result.GetResult<Prisma.$RulesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rules that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RulesFindFirstOrThrowArgs} args - Arguments to find a Rules
     * @example
     * // Get one Rules
     * const rules = await prisma.rules.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RulesFindFirstOrThrowArgs>(args?: SelectSubset<T, RulesFindFirstOrThrowArgs<ExtArgs>>): Prisma__RulesClient<$Result.GetResult<Prisma.$RulesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RulesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rules
     * const rules = await prisma.rules.findMany()
     * 
     * // Get first 10 Rules
     * const rules = await prisma.rules.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rulesWithIdOnly = await prisma.rules.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RulesFindManyArgs>(args?: SelectSubset<T, RulesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Rules.
     * @param {RulesCreateArgs} args - Arguments to create a Rules.
     * @example
     * // Create one Rules
     * const Rules = await prisma.rules.create({
     *   data: {
     *     // ... data to create a Rules
     *   }
     * })
     * 
     */
    create<T extends RulesCreateArgs>(args: SelectSubset<T, RulesCreateArgs<ExtArgs>>): Prisma__RulesClient<$Result.GetResult<Prisma.$RulesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Rules.
     * @param {RulesCreateManyArgs} args - Arguments to create many Rules.
     * @example
     * // Create many Rules
     * const rules = await prisma.rules.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RulesCreateManyArgs>(args?: SelectSubset<T, RulesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Rules and returns the data saved in the database.
     * @param {RulesCreateManyAndReturnArgs} args - Arguments to create many Rules.
     * @example
     * // Create many Rules
     * const rules = await prisma.rules.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Rules and only return the `id`
     * const rulesWithIdOnly = await prisma.rules.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RulesCreateManyAndReturnArgs>(args?: SelectSubset<T, RulesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Rules.
     * @param {RulesDeleteArgs} args - Arguments to delete one Rules.
     * @example
     * // Delete one Rules
     * const Rules = await prisma.rules.delete({
     *   where: {
     *     // ... filter to delete one Rules
     *   }
     * })
     * 
     */
    delete<T extends RulesDeleteArgs>(args: SelectSubset<T, RulesDeleteArgs<ExtArgs>>): Prisma__RulesClient<$Result.GetResult<Prisma.$RulesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rules.
     * @param {RulesUpdateArgs} args - Arguments to update one Rules.
     * @example
     * // Update one Rules
     * const rules = await prisma.rules.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RulesUpdateArgs>(args: SelectSubset<T, RulesUpdateArgs<ExtArgs>>): Prisma__RulesClient<$Result.GetResult<Prisma.$RulesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rules.
     * @param {RulesDeleteManyArgs} args - Arguments to filter Rules to delete.
     * @example
     * // Delete a few Rules
     * const { count } = await prisma.rules.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RulesDeleteManyArgs>(args?: SelectSubset<T, RulesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RulesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rules
     * const rules = await prisma.rules.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RulesUpdateManyArgs>(args: SelectSubset<T, RulesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rules and returns the data updated in the database.
     * @param {RulesUpdateManyAndReturnArgs} args - Arguments to update many Rules.
     * @example
     * // Update many Rules
     * const rules = await prisma.rules.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rules and only return the `id`
     * const rulesWithIdOnly = await prisma.rules.updateManyAndReturn({
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
    updateManyAndReturn<T extends RulesUpdateManyAndReturnArgs>(args: SelectSubset<T, RulesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RulesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Rules.
     * @param {RulesUpsertArgs} args - Arguments to update or create a Rules.
     * @example
     * // Update or create a Rules
     * const rules = await prisma.rules.upsert({
     *   create: {
     *     // ... data to create a Rules
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rules we want to update
     *   }
     * })
     */
    upsert<T extends RulesUpsertArgs>(args: SelectSubset<T, RulesUpsertArgs<ExtArgs>>): Prisma__RulesClient<$Result.GetResult<Prisma.$RulesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Rules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RulesCountArgs} args - Arguments to filter Rules to count.
     * @example
     * // Count the number of Rules
     * const count = await prisma.rules.count({
     *   where: {
     *     // ... the filter for the Rules we want to count
     *   }
     * })
    **/
    count<T extends RulesCountArgs>(
      args?: Subset<T, RulesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RulesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RulesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RulesAggregateArgs>(args: Subset<T, RulesAggregateArgs>): Prisma.PrismaPromise<GetRulesAggregateType<T>>

    /**
     * Group by Rules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RulesGroupByArgs} args - Group by arguments.
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
      T extends RulesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RulesGroupByArgs['orderBy'] }
        : { orderBy?: RulesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RulesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRulesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rules model
   */
  readonly fields: RulesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rules.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RulesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Users<T extends Rules$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Rules$UsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Rules model
   */
  interface RulesFieldRefs {
    readonly id: FieldRef<"Rules", 'String'>
    readonly name: FieldRef<"Rules", 'String'>
    readonly created_at: FieldRef<"Rules", 'DateTime'>
    readonly updated_at: FieldRef<"Rules", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Rules findUnique
   */
  export type RulesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rules
     */
    select?: RulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rules
     */
    omit?: RulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RulesInclude<ExtArgs> | null
    /**
     * Filter, which Rules to fetch.
     */
    where: RulesWhereUniqueInput
  }

  /**
   * Rules findUniqueOrThrow
   */
  export type RulesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rules
     */
    select?: RulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rules
     */
    omit?: RulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RulesInclude<ExtArgs> | null
    /**
     * Filter, which Rules to fetch.
     */
    where: RulesWhereUniqueInput
  }

  /**
   * Rules findFirst
   */
  export type RulesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rules
     */
    select?: RulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rules
     */
    omit?: RulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RulesInclude<ExtArgs> | null
    /**
     * Filter, which Rules to fetch.
     */
    where?: RulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RulesOrderByWithRelationInput | RulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rules.
     */
    cursor?: RulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rules.
     */
    distinct?: RulesScalarFieldEnum | RulesScalarFieldEnum[]
  }

  /**
   * Rules findFirstOrThrow
   */
  export type RulesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rules
     */
    select?: RulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rules
     */
    omit?: RulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RulesInclude<ExtArgs> | null
    /**
     * Filter, which Rules to fetch.
     */
    where?: RulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RulesOrderByWithRelationInput | RulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Rules.
     */
    cursor?: RulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Rules.
     */
    distinct?: RulesScalarFieldEnum | RulesScalarFieldEnum[]
  }

  /**
   * Rules findMany
   */
  export type RulesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rules
     */
    select?: RulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rules
     */
    omit?: RulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RulesInclude<ExtArgs> | null
    /**
     * Filter, which Rules to fetch.
     */
    where?: RulesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Rules to fetch.
     */
    orderBy?: RulesOrderByWithRelationInput | RulesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Rules.
     */
    cursor?: RulesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Rules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Rules.
     */
    skip?: number
    distinct?: RulesScalarFieldEnum | RulesScalarFieldEnum[]
  }

  /**
   * Rules create
   */
  export type RulesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rules
     */
    select?: RulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rules
     */
    omit?: RulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RulesInclude<ExtArgs> | null
    /**
     * The data needed to create a Rules.
     */
    data: XOR<RulesCreateInput, RulesUncheckedCreateInput>
  }

  /**
   * Rules createMany
   */
  export type RulesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Rules.
     */
    data: RulesCreateManyInput | RulesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rules createManyAndReturn
   */
  export type RulesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rules
     */
    select?: RulesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rules
     */
    omit?: RulesOmit<ExtArgs> | null
    /**
     * The data used to create many Rules.
     */
    data: RulesCreateManyInput | RulesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Rules update
   */
  export type RulesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rules
     */
    select?: RulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rules
     */
    omit?: RulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RulesInclude<ExtArgs> | null
    /**
     * The data needed to update a Rules.
     */
    data: XOR<RulesUpdateInput, RulesUncheckedUpdateInput>
    /**
     * Choose, which Rules to update.
     */
    where: RulesWhereUniqueInput
  }

  /**
   * Rules updateMany
   */
  export type RulesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Rules.
     */
    data: XOR<RulesUpdateManyMutationInput, RulesUncheckedUpdateManyInput>
    /**
     * Filter which Rules to update
     */
    where?: RulesWhereInput
    /**
     * Limit how many Rules to update.
     */
    limit?: number
  }

  /**
   * Rules updateManyAndReturn
   */
  export type RulesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rules
     */
    select?: RulesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Rules
     */
    omit?: RulesOmit<ExtArgs> | null
    /**
     * The data used to update Rules.
     */
    data: XOR<RulesUpdateManyMutationInput, RulesUncheckedUpdateManyInput>
    /**
     * Filter which Rules to update
     */
    where?: RulesWhereInput
    /**
     * Limit how many Rules to update.
     */
    limit?: number
  }

  /**
   * Rules upsert
   */
  export type RulesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rules
     */
    select?: RulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rules
     */
    omit?: RulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RulesInclude<ExtArgs> | null
    /**
     * The filter to search for the Rules to update in case it exists.
     */
    where: RulesWhereUniqueInput
    /**
     * In case the Rules found by the `where` argument doesn't exist, create a new Rules with this data.
     */
    create: XOR<RulesCreateInput, RulesUncheckedCreateInput>
    /**
     * In case the Rules was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RulesUpdateInput, RulesUncheckedUpdateInput>
  }

  /**
   * Rules delete
   */
  export type RulesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rules
     */
    select?: RulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rules
     */
    omit?: RulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RulesInclude<ExtArgs> | null
    /**
     * Filter which Rules to delete.
     */
    where: RulesWhereUniqueInput
  }

  /**
   * Rules deleteMany
   */
  export type RulesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rules to delete
     */
    where?: RulesWhereInput
    /**
     * Limit how many Rules to delete.
     */
    limit?: number
  }

  /**
   * Rules.Users
   */
  export type Rules$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Rules without action
   */
  export type RulesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rules
     */
    select?: RulesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Rules
     */
    omit?: RulesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RulesInclude<ExtArgs> | null
  }


  /**
   * Model Companies
   */

  export type AggregateCompanies = {
    _count: CompaniesCountAggregateOutputType | null
    _avg: CompaniesAvgAggregateOutputType | null
    _sum: CompaniesSumAggregateOutputType | null
    _min: CompaniesMinAggregateOutputType | null
    _max: CompaniesMaxAggregateOutputType | null
  }

  export type CompaniesAvgAggregateOutputType = {
    company_number: number | null
  }

  export type CompaniesSumAggregateOutputType = {
    company_number: number | null
  }

  export type CompaniesMinAggregateOutputType = {
    id: string | null
    company_fantasy: string | null
    company_reason: string | null
    company_acronym: string | null
    logo_company: string | null
    cnpj: string | null
    cep_address: string | null
    phone: string | null
    is_active: boolean | null
    warehouse_id: string | null
    opening_hours: Date | null
    close_hours: Date | null
    created_at: Date | null
    updated_at: Date | null
    company_number: number | null
  }

  export type CompaniesMaxAggregateOutputType = {
    id: string | null
    company_fantasy: string | null
    company_reason: string | null
    company_acronym: string | null
    logo_company: string | null
    cnpj: string | null
    cep_address: string | null
    phone: string | null
    is_active: boolean | null
    warehouse_id: string | null
    opening_hours: Date | null
    close_hours: Date | null
    created_at: Date | null
    updated_at: Date | null
    company_number: number | null
  }

  export type CompaniesCountAggregateOutputType = {
    id: number
    company_fantasy: number
    company_reason: number
    company_acronym: number
    logo_company: number
    cnpj: number
    cep_address: number
    phone: number
    is_active: number
    warehouse_id: number
    opening_hours: number
    close_hours: number
    created_at: number
    updated_at: number
    company_number: number
    _all: number
  }


  export type CompaniesAvgAggregateInputType = {
    company_number?: true
  }

  export type CompaniesSumAggregateInputType = {
    company_number?: true
  }

  export type CompaniesMinAggregateInputType = {
    id?: true
    company_fantasy?: true
    company_reason?: true
    company_acronym?: true
    logo_company?: true
    cnpj?: true
    cep_address?: true
    phone?: true
    is_active?: true
    warehouse_id?: true
    opening_hours?: true
    close_hours?: true
    created_at?: true
    updated_at?: true
    company_number?: true
  }

  export type CompaniesMaxAggregateInputType = {
    id?: true
    company_fantasy?: true
    company_reason?: true
    company_acronym?: true
    logo_company?: true
    cnpj?: true
    cep_address?: true
    phone?: true
    is_active?: true
    warehouse_id?: true
    opening_hours?: true
    close_hours?: true
    created_at?: true
    updated_at?: true
    company_number?: true
  }

  export type CompaniesCountAggregateInputType = {
    id?: true
    company_fantasy?: true
    company_reason?: true
    company_acronym?: true
    logo_company?: true
    cnpj?: true
    cep_address?: true
    phone?: true
    is_active?: true
    warehouse_id?: true
    opening_hours?: true
    close_hours?: true
    created_at?: true
    updated_at?: true
    company_number?: true
    _all?: true
  }

  export type CompaniesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to aggregate.
     */
    where?: CompaniesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompaniesOrderByWithRelationInput | CompaniesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompaniesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Companies
    **/
    _count?: true | CompaniesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompaniesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompaniesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompaniesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompaniesMaxAggregateInputType
  }

  export type GetCompaniesAggregateType<T extends CompaniesAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanies[P]>
      : GetScalarType<T[P], AggregateCompanies[P]>
  }




  export type CompaniesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompaniesWhereInput
    orderBy?: CompaniesOrderByWithAggregationInput | CompaniesOrderByWithAggregationInput[]
    by: CompaniesScalarFieldEnum[] | CompaniesScalarFieldEnum
    having?: CompaniesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompaniesCountAggregateInputType | true
    _avg?: CompaniesAvgAggregateInputType
    _sum?: CompaniesSumAggregateInputType
    _min?: CompaniesMinAggregateInputType
    _max?: CompaniesMaxAggregateInputType
  }

  export type CompaniesGroupByOutputType = {
    id: string
    company_fantasy: string
    company_reason: string
    company_acronym: string
    logo_company: string | null
    cnpj: string
    cep_address: string
    phone: string | null
    is_active: boolean
    warehouse_id: string | null
    opening_hours: Date
    close_hours: Date
    created_at: Date | null
    updated_at: Date | null
    company_number: number
    _count: CompaniesCountAggregateOutputType | null
    _avg: CompaniesAvgAggregateOutputType | null
    _sum: CompaniesSumAggregateOutputType | null
    _min: CompaniesMinAggregateOutputType | null
    _max: CompaniesMaxAggregateOutputType | null
  }

  type GetCompaniesGroupByPayload<T extends CompaniesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompaniesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompaniesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompaniesGroupByOutputType[P]>
            : GetScalarType<T[P], CompaniesGroupByOutputType[P]>
        }
      >
    >


  export type CompaniesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_fantasy?: boolean
    company_reason?: boolean
    company_acronym?: boolean
    logo_company?: boolean
    cnpj?: boolean
    cep_address?: boolean
    phone?: boolean
    is_active?: boolean
    warehouse_id?: boolean
    opening_hours?: boolean
    close_hours?: boolean
    created_at?: boolean
    updated_at?: boolean
    company_number?: boolean
    warehouse?: boolean | Companies$warehouseArgs<ExtArgs>
    Users?: boolean | Companies$UsersArgs<ExtArgs>
    _count?: boolean | CompaniesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companies"]>

  export type CompaniesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_fantasy?: boolean
    company_reason?: boolean
    company_acronym?: boolean
    logo_company?: boolean
    cnpj?: boolean
    cep_address?: boolean
    phone?: boolean
    is_active?: boolean
    warehouse_id?: boolean
    opening_hours?: boolean
    close_hours?: boolean
    created_at?: boolean
    updated_at?: boolean
    company_number?: boolean
    warehouse?: boolean | Companies$warehouseArgs<ExtArgs>
  }, ExtArgs["result"]["companies"]>

  export type CompaniesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_fantasy?: boolean
    company_reason?: boolean
    company_acronym?: boolean
    logo_company?: boolean
    cnpj?: boolean
    cep_address?: boolean
    phone?: boolean
    is_active?: boolean
    warehouse_id?: boolean
    opening_hours?: boolean
    close_hours?: boolean
    created_at?: boolean
    updated_at?: boolean
    company_number?: boolean
    warehouse?: boolean | Companies$warehouseArgs<ExtArgs>
  }, ExtArgs["result"]["companies"]>

  export type CompaniesSelectScalar = {
    id?: boolean
    company_fantasy?: boolean
    company_reason?: boolean
    company_acronym?: boolean
    logo_company?: boolean
    cnpj?: boolean
    cep_address?: boolean
    phone?: boolean
    is_active?: boolean
    warehouse_id?: boolean
    opening_hours?: boolean
    close_hours?: boolean
    created_at?: boolean
    updated_at?: boolean
    company_number?: boolean
  }

  export type CompaniesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company_fantasy" | "company_reason" | "company_acronym" | "logo_company" | "cnpj" | "cep_address" | "phone" | "is_active" | "warehouse_id" | "opening_hours" | "close_hours" | "created_at" | "updated_at" | "company_number", ExtArgs["result"]["companies"]>
  export type CompaniesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warehouse?: boolean | Companies$warehouseArgs<ExtArgs>
    Users?: boolean | Companies$UsersArgs<ExtArgs>
    _count?: boolean | CompaniesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompaniesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warehouse?: boolean | Companies$warehouseArgs<ExtArgs>
  }
  export type CompaniesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warehouse?: boolean | Companies$warehouseArgs<ExtArgs>
  }

  export type $CompaniesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Companies"
    objects: {
      warehouse: Prisma.$WarehousesPayload<ExtArgs> | null
      Users: Prisma.$UsersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company_fantasy: string
      company_reason: string
      company_acronym: string
      logo_company: string | null
      cnpj: string
      cep_address: string
      phone: string | null
      is_active: boolean
      warehouse_id: string | null
      opening_hours: Date
      close_hours: Date
      created_at: Date | null
      updated_at: Date | null
      company_number: number
    }, ExtArgs["result"]["companies"]>
    composites: {}
  }

  type CompaniesGetPayload<S extends boolean | null | undefined | CompaniesDefaultArgs> = $Result.GetResult<Prisma.$CompaniesPayload, S>

  type CompaniesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompaniesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompaniesCountAggregateInputType | true
    }

  export interface CompaniesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Companies'], meta: { name: 'Companies' } }
    /**
     * Find zero or one Companies that matches the filter.
     * @param {CompaniesFindUniqueArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompaniesFindUniqueArgs>(args: SelectSubset<T, CompaniesFindUniqueArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Companies that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompaniesFindUniqueOrThrowArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompaniesFindUniqueOrThrowArgs>(args: SelectSubset<T, CompaniesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesFindFirstArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompaniesFindFirstArgs>(args?: SelectSubset<T, CompaniesFindFirstArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Companies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesFindFirstOrThrowArgs} args - Arguments to find a Companies
     * @example
     * // Get one Companies
     * const companies = await prisma.companies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompaniesFindFirstOrThrowArgs>(args?: SelectSubset<T, CompaniesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Companies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Companies
     * const companies = await prisma.companies.findMany()
     * 
     * // Get first 10 Companies
     * const companies = await prisma.companies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companiesWithIdOnly = await prisma.companies.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompaniesFindManyArgs>(args?: SelectSubset<T, CompaniesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Companies.
     * @param {CompaniesCreateArgs} args - Arguments to create a Companies.
     * @example
     * // Create one Companies
     * const Companies = await prisma.companies.create({
     *   data: {
     *     // ... data to create a Companies
     *   }
     * })
     * 
     */
    create<T extends CompaniesCreateArgs>(args: SelectSubset<T, CompaniesCreateArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Companies.
     * @param {CompaniesCreateManyArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const companies = await prisma.companies.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompaniesCreateManyArgs>(args?: SelectSubset<T, CompaniesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Companies and returns the data saved in the database.
     * @param {CompaniesCreateManyAndReturnArgs} args - Arguments to create many Companies.
     * @example
     * // Create many Companies
     * const companies = await prisma.companies.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Companies and only return the `id`
     * const companiesWithIdOnly = await prisma.companies.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompaniesCreateManyAndReturnArgs>(args?: SelectSubset<T, CompaniesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Companies.
     * @param {CompaniesDeleteArgs} args - Arguments to delete one Companies.
     * @example
     * // Delete one Companies
     * const Companies = await prisma.companies.delete({
     *   where: {
     *     // ... filter to delete one Companies
     *   }
     * })
     * 
     */
    delete<T extends CompaniesDeleteArgs>(args: SelectSubset<T, CompaniesDeleteArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Companies.
     * @param {CompaniesUpdateArgs} args - Arguments to update one Companies.
     * @example
     * // Update one Companies
     * const companies = await prisma.companies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompaniesUpdateArgs>(args: SelectSubset<T, CompaniesUpdateArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Companies.
     * @param {CompaniesDeleteManyArgs} args - Arguments to filter Companies to delete.
     * @example
     * // Delete a few Companies
     * const { count } = await prisma.companies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompaniesDeleteManyArgs>(args?: SelectSubset<T, CompaniesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Companies
     * const companies = await prisma.companies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompaniesUpdateManyArgs>(args: SelectSubset<T, CompaniesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Companies and returns the data updated in the database.
     * @param {CompaniesUpdateManyAndReturnArgs} args - Arguments to update many Companies.
     * @example
     * // Update many Companies
     * const companies = await prisma.companies.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Companies and only return the `id`
     * const companiesWithIdOnly = await prisma.companies.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompaniesUpdateManyAndReturnArgs>(args: SelectSubset<T, CompaniesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Companies.
     * @param {CompaniesUpsertArgs} args - Arguments to update or create a Companies.
     * @example
     * // Update or create a Companies
     * const companies = await prisma.companies.upsert({
     *   create: {
     *     // ... data to create a Companies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Companies we want to update
     *   }
     * })
     */
    upsert<T extends CompaniesUpsertArgs>(args: SelectSubset<T, CompaniesUpsertArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesCountArgs} args - Arguments to filter Companies to count.
     * @example
     * // Count the number of Companies
     * const count = await prisma.companies.count({
     *   where: {
     *     // ... the filter for the Companies we want to count
     *   }
     * })
    **/
    count<T extends CompaniesCountArgs>(
      args?: Subset<T, CompaniesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompaniesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompaniesAggregateArgs>(args: Subset<T, CompaniesAggregateArgs>): Prisma.PrismaPromise<GetCompaniesAggregateType<T>>

    /**
     * Group by Companies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompaniesGroupByArgs} args - Group by arguments.
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
      T extends CompaniesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompaniesGroupByArgs['orderBy'] }
        : { orderBy?: CompaniesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompaniesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompaniesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Companies model
   */
  readonly fields: CompaniesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Companies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompaniesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    warehouse<T extends Companies$warehouseArgs<ExtArgs> = {}>(args?: Subset<T, Companies$warehouseArgs<ExtArgs>>): Prisma__WarehousesClient<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Users<T extends Companies$UsersArgs<ExtArgs> = {}>(args?: Subset<T, Companies$UsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Companies model
   */
  interface CompaniesFieldRefs {
    readonly id: FieldRef<"Companies", 'String'>
    readonly company_fantasy: FieldRef<"Companies", 'String'>
    readonly company_reason: FieldRef<"Companies", 'String'>
    readonly company_acronym: FieldRef<"Companies", 'String'>
    readonly logo_company: FieldRef<"Companies", 'String'>
    readonly cnpj: FieldRef<"Companies", 'String'>
    readonly cep_address: FieldRef<"Companies", 'String'>
    readonly phone: FieldRef<"Companies", 'String'>
    readonly is_active: FieldRef<"Companies", 'Boolean'>
    readonly warehouse_id: FieldRef<"Companies", 'String'>
    readonly opening_hours: FieldRef<"Companies", 'DateTime'>
    readonly close_hours: FieldRef<"Companies", 'DateTime'>
    readonly created_at: FieldRef<"Companies", 'DateTime'>
    readonly updated_at: FieldRef<"Companies", 'DateTime'>
    readonly company_number: FieldRef<"Companies", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Companies findUnique
   */
  export type CompaniesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where: CompaniesWhereUniqueInput
  }

  /**
   * Companies findUniqueOrThrow
   */
  export type CompaniesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where: CompaniesWhereUniqueInput
  }

  /**
   * Companies findFirst
   */
  export type CompaniesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompaniesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompaniesOrderByWithRelationInput | CompaniesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompaniesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * Companies findFirstOrThrow
   */
  export type CompaniesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompaniesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompaniesOrderByWithRelationInput | CompaniesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Companies.
     */
    cursor?: CompaniesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Companies.
     */
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * Companies findMany
   */
  export type CompaniesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * Filter, which Companies to fetch.
     */
    where?: CompaniesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Companies to fetch.
     */
    orderBy?: CompaniesOrderByWithRelationInput | CompaniesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Companies.
     */
    cursor?: CompaniesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Companies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Companies.
     */
    skip?: number
    distinct?: CompaniesScalarFieldEnum | CompaniesScalarFieldEnum[]
  }

  /**
   * Companies create
   */
  export type CompaniesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * The data needed to create a Companies.
     */
    data: XOR<CompaniesCreateInput, CompaniesUncheckedCreateInput>
  }

  /**
   * Companies createMany
   */
  export type CompaniesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Companies.
     */
    data: CompaniesCreateManyInput | CompaniesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Companies createManyAndReturn
   */
  export type CompaniesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * The data used to create many Companies.
     */
    data: CompaniesCreateManyInput | CompaniesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Companies update
   */
  export type CompaniesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * The data needed to update a Companies.
     */
    data: XOR<CompaniesUpdateInput, CompaniesUncheckedUpdateInput>
    /**
     * Choose, which Companies to update.
     */
    where: CompaniesWhereUniqueInput
  }

  /**
   * Companies updateMany
   */
  export type CompaniesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Companies.
     */
    data: XOR<CompaniesUpdateManyMutationInput, CompaniesUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompaniesWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
  }

  /**
   * Companies updateManyAndReturn
   */
  export type CompaniesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * The data used to update Companies.
     */
    data: XOR<CompaniesUpdateManyMutationInput, CompaniesUncheckedUpdateManyInput>
    /**
     * Filter which Companies to update
     */
    where?: CompaniesWhereInput
    /**
     * Limit how many Companies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Companies upsert
   */
  export type CompaniesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * The filter to search for the Companies to update in case it exists.
     */
    where: CompaniesWhereUniqueInput
    /**
     * In case the Companies found by the `where` argument doesn't exist, create a new Companies with this data.
     */
    create: XOR<CompaniesCreateInput, CompaniesUncheckedCreateInput>
    /**
     * In case the Companies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompaniesUpdateInput, CompaniesUncheckedUpdateInput>
  }

  /**
   * Companies delete
   */
  export type CompaniesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    /**
     * Filter which Companies to delete.
     */
    where: CompaniesWhereUniqueInput
  }

  /**
   * Companies deleteMany
   */
  export type CompaniesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Companies to delete
     */
    where?: CompaniesWhereInput
    /**
     * Limit how many Companies to delete.
     */
    limit?: number
  }

  /**
   * Companies.warehouse
   */
  export type Companies$warehouseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehousesInclude<ExtArgs> | null
    where?: WarehousesWhereInput
  }

  /**
   * Companies.Users
   */
  export type Companies$UsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users
     */
    select?: UsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users
     */
    omit?: UsersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsersInclude<ExtArgs> | null
    where?: UsersWhereInput
    orderBy?: UsersOrderByWithRelationInput | UsersOrderByWithRelationInput[]
    cursor?: UsersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * Companies without action
   */
  export type CompaniesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
  }


  /**
   * Model Warehouses
   */

  export type AggregateWarehouses = {
    _count: WarehousesCountAggregateOutputType | null
    _min: WarehousesMinAggregateOutputType | null
    _max: WarehousesMaxAggregateOutputType | null
  }

  export type WarehousesMinAggregateOutputType = {
    id: string | null
    name: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WarehousesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type WarehousesCountAggregateOutputType = {
    id: number
    name: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type WarehousesMinAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type WarehousesMaxAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type WarehousesCountAggregateInputType = {
    id?: true
    name?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type WarehousesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warehouses to aggregate.
     */
    where?: WarehousesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehousesOrderByWithRelationInput | WarehousesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WarehousesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Warehouses
    **/
    _count?: true | WarehousesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WarehousesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WarehousesMaxAggregateInputType
  }

  export type GetWarehousesAggregateType<T extends WarehousesAggregateArgs> = {
        [P in keyof T & keyof AggregateWarehouses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarehouses[P]>
      : GetScalarType<T[P], AggregateWarehouses[P]>
  }




  export type WarehousesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehousesWhereInput
    orderBy?: WarehousesOrderByWithAggregationInput | WarehousesOrderByWithAggregationInput[]
    by: WarehousesScalarFieldEnum[] | WarehousesScalarFieldEnum
    having?: WarehousesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WarehousesCountAggregateInputType | true
    _min?: WarehousesMinAggregateInputType
    _max?: WarehousesMaxAggregateInputType
  }

  export type WarehousesGroupByOutputType = {
    id: string
    name: string
    is_active: boolean
    created_at: Date | null
    updated_at: Date | null
    _count: WarehousesCountAggregateOutputType | null
    _min: WarehousesMinAggregateOutputType | null
    _max: WarehousesMaxAggregateOutputType | null
  }

  type GetWarehousesGroupByPayload<T extends WarehousesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WarehousesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WarehousesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WarehousesGroupByOutputType[P]>
            : GetScalarType<T[P], WarehousesGroupByOutputType[P]>
        }
      >
    >


  export type WarehousesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    Companies?: boolean | Warehouses$CompaniesArgs<ExtArgs>
    Stocks?: boolean | Warehouses$StocksArgs<ExtArgs>
    _count?: boolean | WarehousesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouses"]>

  export type WarehousesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["warehouses"]>

  export type WarehousesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["warehouses"]>

  export type WarehousesSelectScalar = {
    id?: boolean
    name?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type WarehousesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["warehouses"]>
  export type WarehousesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Companies?: boolean | Warehouses$CompaniesArgs<ExtArgs>
    Stocks?: boolean | Warehouses$StocksArgs<ExtArgs>
    _count?: boolean | WarehousesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WarehousesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WarehousesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WarehousesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Warehouses"
    objects: {
      Companies: Prisma.$CompaniesPayload<ExtArgs> | null
      Stocks: Prisma.$StocksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      is_active: boolean
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["warehouses"]>
    composites: {}
  }

  type WarehousesGetPayload<S extends boolean | null | undefined | WarehousesDefaultArgs> = $Result.GetResult<Prisma.$WarehousesPayload, S>

  type WarehousesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WarehousesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WarehousesCountAggregateInputType | true
    }

  export interface WarehousesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Warehouses'], meta: { name: 'Warehouses' } }
    /**
     * Find zero or one Warehouses that matches the filter.
     * @param {WarehousesFindUniqueArgs} args - Arguments to find a Warehouses
     * @example
     * // Get one Warehouses
     * const warehouses = await prisma.warehouses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WarehousesFindUniqueArgs>(args: SelectSubset<T, WarehousesFindUniqueArgs<ExtArgs>>): Prisma__WarehousesClient<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Warehouses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WarehousesFindUniqueOrThrowArgs} args - Arguments to find a Warehouses
     * @example
     * // Get one Warehouses
     * const warehouses = await prisma.warehouses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WarehousesFindUniqueOrThrowArgs>(args: SelectSubset<T, WarehousesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WarehousesClient<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warehouses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehousesFindFirstArgs} args - Arguments to find a Warehouses
     * @example
     * // Get one Warehouses
     * const warehouses = await prisma.warehouses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WarehousesFindFirstArgs>(args?: SelectSubset<T, WarehousesFindFirstArgs<ExtArgs>>): Prisma__WarehousesClient<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Warehouses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehousesFindFirstOrThrowArgs} args - Arguments to find a Warehouses
     * @example
     * // Get one Warehouses
     * const warehouses = await prisma.warehouses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WarehousesFindFirstOrThrowArgs>(args?: SelectSubset<T, WarehousesFindFirstOrThrowArgs<ExtArgs>>): Prisma__WarehousesClient<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Warehouses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehousesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Warehouses
     * const warehouses = await prisma.warehouses.findMany()
     * 
     * // Get first 10 Warehouses
     * const warehouses = await prisma.warehouses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const warehousesWithIdOnly = await prisma.warehouses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WarehousesFindManyArgs>(args?: SelectSubset<T, WarehousesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Warehouses.
     * @param {WarehousesCreateArgs} args - Arguments to create a Warehouses.
     * @example
     * // Create one Warehouses
     * const Warehouses = await prisma.warehouses.create({
     *   data: {
     *     // ... data to create a Warehouses
     *   }
     * })
     * 
     */
    create<T extends WarehousesCreateArgs>(args: SelectSubset<T, WarehousesCreateArgs<ExtArgs>>): Prisma__WarehousesClient<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Warehouses.
     * @param {WarehousesCreateManyArgs} args - Arguments to create many Warehouses.
     * @example
     * // Create many Warehouses
     * const warehouses = await prisma.warehouses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WarehousesCreateManyArgs>(args?: SelectSubset<T, WarehousesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Warehouses and returns the data saved in the database.
     * @param {WarehousesCreateManyAndReturnArgs} args - Arguments to create many Warehouses.
     * @example
     * // Create many Warehouses
     * const warehouses = await prisma.warehouses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Warehouses and only return the `id`
     * const warehousesWithIdOnly = await prisma.warehouses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WarehousesCreateManyAndReturnArgs>(args?: SelectSubset<T, WarehousesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Warehouses.
     * @param {WarehousesDeleteArgs} args - Arguments to delete one Warehouses.
     * @example
     * // Delete one Warehouses
     * const Warehouses = await prisma.warehouses.delete({
     *   where: {
     *     // ... filter to delete one Warehouses
     *   }
     * })
     * 
     */
    delete<T extends WarehousesDeleteArgs>(args: SelectSubset<T, WarehousesDeleteArgs<ExtArgs>>): Prisma__WarehousesClient<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Warehouses.
     * @param {WarehousesUpdateArgs} args - Arguments to update one Warehouses.
     * @example
     * // Update one Warehouses
     * const warehouses = await prisma.warehouses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WarehousesUpdateArgs>(args: SelectSubset<T, WarehousesUpdateArgs<ExtArgs>>): Prisma__WarehousesClient<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Warehouses.
     * @param {WarehousesDeleteManyArgs} args - Arguments to filter Warehouses to delete.
     * @example
     * // Delete a few Warehouses
     * const { count } = await prisma.warehouses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WarehousesDeleteManyArgs>(args?: SelectSubset<T, WarehousesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehousesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Warehouses
     * const warehouses = await prisma.warehouses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WarehousesUpdateManyArgs>(args: SelectSubset<T, WarehousesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Warehouses and returns the data updated in the database.
     * @param {WarehousesUpdateManyAndReturnArgs} args - Arguments to update many Warehouses.
     * @example
     * // Update many Warehouses
     * const warehouses = await prisma.warehouses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Warehouses and only return the `id`
     * const warehousesWithIdOnly = await prisma.warehouses.updateManyAndReturn({
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
    updateManyAndReturn<T extends WarehousesUpdateManyAndReturnArgs>(args: SelectSubset<T, WarehousesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Warehouses.
     * @param {WarehousesUpsertArgs} args - Arguments to update or create a Warehouses.
     * @example
     * // Update or create a Warehouses
     * const warehouses = await prisma.warehouses.upsert({
     *   create: {
     *     // ... data to create a Warehouses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Warehouses we want to update
     *   }
     * })
     */
    upsert<T extends WarehousesUpsertArgs>(args: SelectSubset<T, WarehousesUpsertArgs<ExtArgs>>): Prisma__WarehousesClient<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehousesCountArgs} args - Arguments to filter Warehouses to count.
     * @example
     * // Count the number of Warehouses
     * const count = await prisma.warehouses.count({
     *   where: {
     *     // ... the filter for the Warehouses we want to count
     *   }
     * })
    **/
    count<T extends WarehousesCountArgs>(
      args?: Subset<T, WarehousesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WarehousesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehousesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WarehousesAggregateArgs>(args: Subset<T, WarehousesAggregateArgs>): Prisma.PrismaPromise<GetWarehousesAggregateType<T>>

    /**
     * Group by Warehouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehousesGroupByArgs} args - Group by arguments.
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
      T extends WarehousesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WarehousesGroupByArgs['orderBy'] }
        : { orderBy?: WarehousesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WarehousesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarehousesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Warehouses model
   */
  readonly fields: WarehousesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Warehouses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WarehousesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Companies<T extends Warehouses$CompaniesArgs<ExtArgs> = {}>(args?: Subset<T, Warehouses$CompaniesArgs<ExtArgs>>): Prisma__CompaniesClient<$Result.GetResult<Prisma.$CompaniesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    Stocks<T extends Warehouses$StocksArgs<ExtArgs> = {}>(args?: Subset<T, Warehouses$StocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StocksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Warehouses model
   */
  interface WarehousesFieldRefs {
    readonly id: FieldRef<"Warehouses", 'String'>
    readonly name: FieldRef<"Warehouses", 'String'>
    readonly is_active: FieldRef<"Warehouses", 'Boolean'>
    readonly created_at: FieldRef<"Warehouses", 'DateTime'>
    readonly updated_at: FieldRef<"Warehouses", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Warehouses findUnique
   */
  export type WarehousesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehousesInclude<ExtArgs> | null
    /**
     * Filter, which Warehouses to fetch.
     */
    where: WarehousesWhereUniqueInput
  }

  /**
   * Warehouses findUniqueOrThrow
   */
  export type WarehousesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehousesInclude<ExtArgs> | null
    /**
     * Filter, which Warehouses to fetch.
     */
    where: WarehousesWhereUniqueInput
  }

  /**
   * Warehouses findFirst
   */
  export type WarehousesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehousesInclude<ExtArgs> | null
    /**
     * Filter, which Warehouses to fetch.
     */
    where?: WarehousesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehousesOrderByWithRelationInput | WarehousesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warehouses.
     */
    cursor?: WarehousesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warehouses.
     */
    distinct?: WarehousesScalarFieldEnum | WarehousesScalarFieldEnum[]
  }

  /**
   * Warehouses findFirstOrThrow
   */
  export type WarehousesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehousesInclude<ExtArgs> | null
    /**
     * Filter, which Warehouses to fetch.
     */
    where?: WarehousesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehousesOrderByWithRelationInput | WarehousesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Warehouses.
     */
    cursor?: WarehousesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Warehouses.
     */
    distinct?: WarehousesScalarFieldEnum | WarehousesScalarFieldEnum[]
  }

  /**
   * Warehouses findMany
   */
  export type WarehousesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehousesInclude<ExtArgs> | null
    /**
     * Filter, which Warehouses to fetch.
     */
    where?: WarehousesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Warehouses to fetch.
     */
    orderBy?: WarehousesOrderByWithRelationInput | WarehousesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Warehouses.
     */
    cursor?: WarehousesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Warehouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Warehouses.
     */
    skip?: number
    distinct?: WarehousesScalarFieldEnum | WarehousesScalarFieldEnum[]
  }

  /**
   * Warehouses create
   */
  export type WarehousesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehousesInclude<ExtArgs> | null
    /**
     * The data needed to create a Warehouses.
     */
    data: XOR<WarehousesCreateInput, WarehousesUncheckedCreateInput>
  }

  /**
   * Warehouses createMany
   */
  export type WarehousesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Warehouses.
     */
    data: WarehousesCreateManyInput | WarehousesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Warehouses createManyAndReturn
   */
  export type WarehousesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * The data used to create many Warehouses.
     */
    data: WarehousesCreateManyInput | WarehousesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Warehouses update
   */
  export type WarehousesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehousesInclude<ExtArgs> | null
    /**
     * The data needed to update a Warehouses.
     */
    data: XOR<WarehousesUpdateInput, WarehousesUncheckedUpdateInput>
    /**
     * Choose, which Warehouses to update.
     */
    where: WarehousesWhereUniqueInput
  }

  /**
   * Warehouses updateMany
   */
  export type WarehousesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Warehouses.
     */
    data: XOR<WarehousesUpdateManyMutationInput, WarehousesUncheckedUpdateManyInput>
    /**
     * Filter which Warehouses to update
     */
    where?: WarehousesWhereInput
    /**
     * Limit how many Warehouses to update.
     */
    limit?: number
  }

  /**
   * Warehouses updateManyAndReturn
   */
  export type WarehousesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * The data used to update Warehouses.
     */
    data: XOR<WarehousesUpdateManyMutationInput, WarehousesUncheckedUpdateManyInput>
    /**
     * Filter which Warehouses to update
     */
    where?: WarehousesWhereInput
    /**
     * Limit how many Warehouses to update.
     */
    limit?: number
  }

  /**
   * Warehouses upsert
   */
  export type WarehousesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehousesInclude<ExtArgs> | null
    /**
     * The filter to search for the Warehouses to update in case it exists.
     */
    where: WarehousesWhereUniqueInput
    /**
     * In case the Warehouses found by the `where` argument doesn't exist, create a new Warehouses with this data.
     */
    create: XOR<WarehousesCreateInput, WarehousesUncheckedCreateInput>
    /**
     * In case the Warehouses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WarehousesUpdateInput, WarehousesUncheckedUpdateInput>
  }

  /**
   * Warehouses delete
   */
  export type WarehousesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehousesInclude<ExtArgs> | null
    /**
     * Filter which Warehouses to delete.
     */
    where: WarehousesWhereUniqueInput
  }

  /**
   * Warehouses deleteMany
   */
  export type WarehousesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Warehouses to delete
     */
    where?: WarehousesWhereInput
    /**
     * Limit how many Warehouses to delete.
     */
    limit?: number
  }

  /**
   * Warehouses.Companies
   */
  export type Warehouses$CompaniesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Companies
     */
    select?: CompaniesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Companies
     */
    omit?: CompaniesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompaniesInclude<ExtArgs> | null
    where?: CompaniesWhereInput
  }

  /**
   * Warehouses.Stocks
   */
  export type Warehouses$StocksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stocks
     */
    select?: StocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stocks
     */
    omit?: StocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocksInclude<ExtArgs> | null
    where?: StocksWhereInput
    orderBy?: StocksOrderByWithRelationInput | StocksOrderByWithRelationInput[]
    cursor?: StocksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StocksScalarFieldEnum | StocksScalarFieldEnum[]
  }

  /**
   * Warehouses without action
   */
  export type WarehousesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Warehouses
     */
    select?: WarehousesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Warehouses
     */
    omit?: WarehousesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehousesInclude<ExtArgs> | null
  }


  /**
   * Model Stocks
   */

  export type AggregateStocks = {
    _count: StocksCountAggregateOutputType | null
    _avg: StocksAvgAggregateOutputType | null
    _sum: StocksSumAggregateOutputType | null
    _min: StocksMinAggregateOutputType | null
    _max: StocksMaxAggregateOutputType | null
  }

  export type StocksAvgAggregateOutputType = {
    current_quantity: number | null
    minimium_quantity: number | null
    maximum_quantity: number | null
    price: number | null
    purchase_price: number | null
    cost_price: number | null
    discount_percentage: number | null
  }

  export type StocksSumAggregateOutputType = {
    current_quantity: number | null
    minimium_quantity: number | null
    maximum_quantity: number | null
    price: number | null
    purchase_price: number | null
    cost_price: number | null
    discount_percentage: number | null
  }

  export type StocksMinAggregateOutputType = {
    id: string | null
    warehouse_id: string | null
    current_quantity: number | null
    minimium_quantity: number | null
    maximum_quantity: number | null
    price: number | null
    purchase_price: number | null
    cost_price: number | null
    has_discount: boolean | null
    discount_percentage: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StocksMaxAggregateOutputType = {
    id: string | null
    warehouse_id: string | null
    current_quantity: number | null
    minimium_quantity: number | null
    maximum_quantity: number | null
    price: number | null
    purchase_price: number | null
    cost_price: number | null
    has_discount: boolean | null
    discount_percentage: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StocksCountAggregateOutputType = {
    id: number
    warehouse_id: number
    current_quantity: number
    minimium_quantity: number
    maximum_quantity: number
    price: number
    purchase_price: number
    cost_price: number
    has_discount: number
    discount_percentage: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type StocksAvgAggregateInputType = {
    current_quantity?: true
    minimium_quantity?: true
    maximum_quantity?: true
    price?: true
    purchase_price?: true
    cost_price?: true
    discount_percentage?: true
  }

  export type StocksSumAggregateInputType = {
    current_quantity?: true
    minimium_quantity?: true
    maximum_quantity?: true
    price?: true
    purchase_price?: true
    cost_price?: true
    discount_percentage?: true
  }

  export type StocksMinAggregateInputType = {
    id?: true
    warehouse_id?: true
    current_quantity?: true
    minimium_quantity?: true
    maximum_quantity?: true
    price?: true
    purchase_price?: true
    cost_price?: true
    has_discount?: true
    discount_percentage?: true
    created_at?: true
    updated_at?: true
  }

  export type StocksMaxAggregateInputType = {
    id?: true
    warehouse_id?: true
    current_quantity?: true
    minimium_quantity?: true
    maximum_quantity?: true
    price?: true
    purchase_price?: true
    cost_price?: true
    has_discount?: true
    discount_percentage?: true
    created_at?: true
    updated_at?: true
  }

  export type StocksCountAggregateInputType = {
    id?: true
    warehouse_id?: true
    current_quantity?: true
    minimium_quantity?: true
    maximum_quantity?: true
    price?: true
    purchase_price?: true
    cost_price?: true
    has_discount?: true
    discount_percentage?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type StocksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stocks to aggregate.
     */
    where?: StocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StocksOrderByWithRelationInput | StocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Stocks
    **/
    _count?: true | StocksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StocksAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StocksSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StocksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StocksMaxAggregateInputType
  }

  export type GetStocksAggregateType<T extends StocksAggregateArgs> = {
        [P in keyof T & keyof AggregateStocks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStocks[P]>
      : GetScalarType<T[P], AggregateStocks[P]>
  }




  export type StocksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StocksWhereInput
    orderBy?: StocksOrderByWithAggregationInput | StocksOrderByWithAggregationInput[]
    by: StocksScalarFieldEnum[] | StocksScalarFieldEnum
    having?: StocksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StocksCountAggregateInputType | true
    _avg?: StocksAvgAggregateInputType
    _sum?: StocksSumAggregateInputType
    _min?: StocksMinAggregateInputType
    _max?: StocksMaxAggregateInputType
  }

  export type StocksGroupByOutputType = {
    id: string
    warehouse_id: string
    current_quantity: number
    minimium_quantity: number
    maximum_quantity: number
    price: number
    purchase_price: number
    cost_price: number
    has_discount: boolean
    discount_percentage: number | null
    created_at: Date | null
    updated_at: Date | null
    _count: StocksCountAggregateOutputType | null
    _avg: StocksAvgAggregateOutputType | null
    _sum: StocksSumAggregateOutputType | null
    _min: StocksMinAggregateOutputType | null
    _max: StocksMaxAggregateOutputType | null
  }

  type GetStocksGroupByPayload<T extends StocksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StocksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StocksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StocksGroupByOutputType[P]>
            : GetScalarType<T[P], StocksGroupByOutputType[P]>
        }
      >
    >


  export type StocksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    warehouse_id?: boolean
    current_quantity?: boolean
    minimium_quantity?: boolean
    maximum_quantity?: boolean
    price?: boolean
    purchase_price?: boolean
    cost_price?: boolean
    has_discount?: boolean
    discount_percentage?: boolean
    created_at?: boolean
    updated_at?: boolean
    Products?: boolean | Stocks$ProductsArgs<ExtArgs>
    warehouse?: boolean | WarehousesDefaultArgs<ExtArgs>
    _count?: boolean | StocksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stocks"]>

  export type StocksSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    warehouse_id?: boolean
    current_quantity?: boolean
    minimium_quantity?: boolean
    maximum_quantity?: boolean
    price?: boolean
    purchase_price?: boolean
    cost_price?: boolean
    has_discount?: boolean
    discount_percentage?: boolean
    created_at?: boolean
    updated_at?: boolean
    warehouse?: boolean | WarehousesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stocks"]>

  export type StocksSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    warehouse_id?: boolean
    current_quantity?: boolean
    minimium_quantity?: boolean
    maximum_quantity?: boolean
    price?: boolean
    purchase_price?: boolean
    cost_price?: boolean
    has_discount?: boolean
    discount_percentage?: boolean
    created_at?: boolean
    updated_at?: boolean
    warehouse?: boolean | WarehousesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stocks"]>

  export type StocksSelectScalar = {
    id?: boolean
    warehouse_id?: boolean
    current_quantity?: boolean
    minimium_quantity?: boolean
    maximum_quantity?: boolean
    price?: boolean
    purchase_price?: boolean
    cost_price?: boolean
    has_discount?: boolean
    discount_percentage?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type StocksOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "warehouse_id" | "current_quantity" | "minimium_quantity" | "maximum_quantity" | "price" | "purchase_price" | "cost_price" | "has_discount" | "discount_percentage" | "created_at" | "updated_at", ExtArgs["result"]["stocks"]>
  export type StocksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | Stocks$ProductsArgs<ExtArgs>
    warehouse?: boolean | WarehousesDefaultArgs<ExtArgs>
    _count?: boolean | StocksCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StocksIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warehouse?: boolean | WarehousesDefaultArgs<ExtArgs>
  }
  export type StocksIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    warehouse?: boolean | WarehousesDefaultArgs<ExtArgs>
  }

  export type $StocksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Stocks"
    objects: {
      Products: Prisma.$ProductsPayload<ExtArgs>[]
      warehouse: Prisma.$WarehousesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      warehouse_id: string
      current_quantity: number
      minimium_quantity: number
      maximum_quantity: number
      price: number
      purchase_price: number
      cost_price: number
      has_discount: boolean
      discount_percentage: number | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["stocks"]>
    composites: {}
  }

  type StocksGetPayload<S extends boolean | null | undefined | StocksDefaultArgs> = $Result.GetResult<Prisma.$StocksPayload, S>

  type StocksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StocksFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StocksCountAggregateInputType | true
    }

  export interface StocksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Stocks'], meta: { name: 'Stocks' } }
    /**
     * Find zero or one Stocks that matches the filter.
     * @param {StocksFindUniqueArgs} args - Arguments to find a Stocks
     * @example
     * // Get one Stocks
     * const stocks = await prisma.stocks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StocksFindUniqueArgs>(args: SelectSubset<T, StocksFindUniqueArgs<ExtArgs>>): Prisma__StocksClient<$Result.GetResult<Prisma.$StocksPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stocks that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StocksFindUniqueOrThrowArgs} args - Arguments to find a Stocks
     * @example
     * // Get one Stocks
     * const stocks = await prisma.stocks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StocksFindUniqueOrThrowArgs>(args: SelectSubset<T, StocksFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StocksClient<$Result.GetResult<Prisma.$StocksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StocksFindFirstArgs} args - Arguments to find a Stocks
     * @example
     * // Get one Stocks
     * const stocks = await prisma.stocks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StocksFindFirstArgs>(args?: SelectSubset<T, StocksFindFirstArgs<ExtArgs>>): Prisma__StocksClient<$Result.GetResult<Prisma.$StocksPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stocks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StocksFindFirstOrThrowArgs} args - Arguments to find a Stocks
     * @example
     * // Get one Stocks
     * const stocks = await prisma.stocks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StocksFindFirstOrThrowArgs>(args?: SelectSubset<T, StocksFindFirstOrThrowArgs<ExtArgs>>): Prisma__StocksClient<$Result.GetResult<Prisma.$StocksPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StocksFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stocks
     * const stocks = await prisma.stocks.findMany()
     * 
     * // Get first 10 Stocks
     * const stocks = await prisma.stocks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stocksWithIdOnly = await prisma.stocks.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StocksFindManyArgs>(args?: SelectSubset<T, StocksFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StocksPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stocks.
     * @param {StocksCreateArgs} args - Arguments to create a Stocks.
     * @example
     * // Create one Stocks
     * const Stocks = await prisma.stocks.create({
     *   data: {
     *     // ... data to create a Stocks
     *   }
     * })
     * 
     */
    create<T extends StocksCreateArgs>(args: SelectSubset<T, StocksCreateArgs<ExtArgs>>): Prisma__StocksClient<$Result.GetResult<Prisma.$StocksPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stocks.
     * @param {StocksCreateManyArgs} args - Arguments to create many Stocks.
     * @example
     * // Create many Stocks
     * const stocks = await prisma.stocks.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StocksCreateManyArgs>(args?: SelectSubset<T, StocksCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stocks and returns the data saved in the database.
     * @param {StocksCreateManyAndReturnArgs} args - Arguments to create many Stocks.
     * @example
     * // Create many Stocks
     * const stocks = await prisma.stocks.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stocks and only return the `id`
     * const stocksWithIdOnly = await prisma.stocks.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StocksCreateManyAndReturnArgs>(args?: SelectSubset<T, StocksCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StocksPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stocks.
     * @param {StocksDeleteArgs} args - Arguments to delete one Stocks.
     * @example
     * // Delete one Stocks
     * const Stocks = await prisma.stocks.delete({
     *   where: {
     *     // ... filter to delete one Stocks
     *   }
     * })
     * 
     */
    delete<T extends StocksDeleteArgs>(args: SelectSubset<T, StocksDeleteArgs<ExtArgs>>): Prisma__StocksClient<$Result.GetResult<Prisma.$StocksPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stocks.
     * @param {StocksUpdateArgs} args - Arguments to update one Stocks.
     * @example
     * // Update one Stocks
     * const stocks = await prisma.stocks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StocksUpdateArgs>(args: SelectSubset<T, StocksUpdateArgs<ExtArgs>>): Prisma__StocksClient<$Result.GetResult<Prisma.$StocksPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stocks.
     * @param {StocksDeleteManyArgs} args - Arguments to filter Stocks to delete.
     * @example
     * // Delete a few Stocks
     * const { count } = await prisma.stocks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StocksDeleteManyArgs>(args?: SelectSubset<T, StocksDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StocksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stocks
     * const stocks = await prisma.stocks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StocksUpdateManyArgs>(args: SelectSubset<T, StocksUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stocks and returns the data updated in the database.
     * @param {StocksUpdateManyAndReturnArgs} args - Arguments to update many Stocks.
     * @example
     * // Update many Stocks
     * const stocks = await prisma.stocks.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stocks and only return the `id`
     * const stocksWithIdOnly = await prisma.stocks.updateManyAndReturn({
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
    updateManyAndReturn<T extends StocksUpdateManyAndReturnArgs>(args: SelectSubset<T, StocksUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StocksPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stocks.
     * @param {StocksUpsertArgs} args - Arguments to update or create a Stocks.
     * @example
     * // Update or create a Stocks
     * const stocks = await prisma.stocks.upsert({
     *   create: {
     *     // ... data to create a Stocks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stocks we want to update
     *   }
     * })
     */
    upsert<T extends StocksUpsertArgs>(args: SelectSubset<T, StocksUpsertArgs<ExtArgs>>): Prisma__StocksClient<$Result.GetResult<Prisma.$StocksPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StocksCountArgs} args - Arguments to filter Stocks to count.
     * @example
     * // Count the number of Stocks
     * const count = await prisma.stocks.count({
     *   where: {
     *     // ... the filter for the Stocks we want to count
     *   }
     * })
    **/
    count<T extends StocksCountArgs>(
      args?: Subset<T, StocksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StocksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StocksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StocksAggregateArgs>(args: Subset<T, StocksAggregateArgs>): Prisma.PrismaPromise<GetStocksAggregateType<T>>

    /**
     * Group by Stocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StocksGroupByArgs} args - Group by arguments.
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
      T extends StocksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StocksGroupByArgs['orderBy'] }
        : { orderBy?: StocksGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StocksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStocksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Stocks model
   */
  readonly fields: StocksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Stocks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StocksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Products<T extends Stocks$ProductsArgs<ExtArgs> = {}>(args?: Subset<T, Stocks$ProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    warehouse<T extends WarehousesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WarehousesDefaultArgs<ExtArgs>>): Prisma__WarehousesClient<$Result.GetResult<Prisma.$WarehousesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Stocks model
   */
  interface StocksFieldRefs {
    readonly id: FieldRef<"Stocks", 'String'>
    readonly warehouse_id: FieldRef<"Stocks", 'String'>
    readonly current_quantity: FieldRef<"Stocks", 'Int'>
    readonly minimium_quantity: FieldRef<"Stocks", 'Int'>
    readonly maximum_quantity: FieldRef<"Stocks", 'Int'>
    readonly price: FieldRef<"Stocks", 'Float'>
    readonly purchase_price: FieldRef<"Stocks", 'Float'>
    readonly cost_price: FieldRef<"Stocks", 'Float'>
    readonly has_discount: FieldRef<"Stocks", 'Boolean'>
    readonly discount_percentage: FieldRef<"Stocks", 'Float'>
    readonly created_at: FieldRef<"Stocks", 'DateTime'>
    readonly updated_at: FieldRef<"Stocks", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Stocks findUnique
   */
  export type StocksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stocks
     */
    select?: StocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stocks
     */
    omit?: StocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocksInclude<ExtArgs> | null
    /**
     * Filter, which Stocks to fetch.
     */
    where: StocksWhereUniqueInput
  }

  /**
   * Stocks findUniqueOrThrow
   */
  export type StocksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stocks
     */
    select?: StocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stocks
     */
    omit?: StocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocksInclude<ExtArgs> | null
    /**
     * Filter, which Stocks to fetch.
     */
    where: StocksWhereUniqueInput
  }

  /**
   * Stocks findFirst
   */
  export type StocksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stocks
     */
    select?: StocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stocks
     */
    omit?: StocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocksInclude<ExtArgs> | null
    /**
     * Filter, which Stocks to fetch.
     */
    where?: StocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StocksOrderByWithRelationInput | StocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stocks.
     */
    cursor?: StocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stocks.
     */
    distinct?: StocksScalarFieldEnum | StocksScalarFieldEnum[]
  }

  /**
   * Stocks findFirstOrThrow
   */
  export type StocksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stocks
     */
    select?: StocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stocks
     */
    omit?: StocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocksInclude<ExtArgs> | null
    /**
     * Filter, which Stocks to fetch.
     */
    where?: StocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StocksOrderByWithRelationInput | StocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Stocks.
     */
    cursor?: StocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Stocks.
     */
    distinct?: StocksScalarFieldEnum | StocksScalarFieldEnum[]
  }

  /**
   * Stocks findMany
   */
  export type StocksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stocks
     */
    select?: StocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stocks
     */
    omit?: StocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocksInclude<ExtArgs> | null
    /**
     * Filter, which Stocks to fetch.
     */
    where?: StocksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Stocks to fetch.
     */
    orderBy?: StocksOrderByWithRelationInput | StocksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Stocks.
     */
    cursor?: StocksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Stocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Stocks.
     */
    skip?: number
    distinct?: StocksScalarFieldEnum | StocksScalarFieldEnum[]
  }

  /**
   * Stocks create
   */
  export type StocksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stocks
     */
    select?: StocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stocks
     */
    omit?: StocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocksInclude<ExtArgs> | null
    /**
     * The data needed to create a Stocks.
     */
    data: XOR<StocksCreateInput, StocksUncheckedCreateInput>
  }

  /**
   * Stocks createMany
   */
  export type StocksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Stocks.
     */
    data: StocksCreateManyInput | StocksCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Stocks createManyAndReturn
   */
  export type StocksCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stocks
     */
    select?: StocksSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stocks
     */
    omit?: StocksOmit<ExtArgs> | null
    /**
     * The data used to create many Stocks.
     */
    data: StocksCreateManyInput | StocksCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocksIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stocks update
   */
  export type StocksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stocks
     */
    select?: StocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stocks
     */
    omit?: StocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocksInclude<ExtArgs> | null
    /**
     * The data needed to update a Stocks.
     */
    data: XOR<StocksUpdateInput, StocksUncheckedUpdateInput>
    /**
     * Choose, which Stocks to update.
     */
    where: StocksWhereUniqueInput
  }

  /**
   * Stocks updateMany
   */
  export type StocksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Stocks.
     */
    data: XOR<StocksUpdateManyMutationInput, StocksUncheckedUpdateManyInput>
    /**
     * Filter which Stocks to update
     */
    where?: StocksWhereInput
    /**
     * Limit how many Stocks to update.
     */
    limit?: number
  }

  /**
   * Stocks updateManyAndReturn
   */
  export type StocksUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stocks
     */
    select?: StocksSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Stocks
     */
    omit?: StocksOmit<ExtArgs> | null
    /**
     * The data used to update Stocks.
     */
    data: XOR<StocksUpdateManyMutationInput, StocksUncheckedUpdateManyInput>
    /**
     * Filter which Stocks to update
     */
    where?: StocksWhereInput
    /**
     * Limit how many Stocks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocksIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Stocks upsert
   */
  export type StocksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stocks
     */
    select?: StocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stocks
     */
    omit?: StocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocksInclude<ExtArgs> | null
    /**
     * The filter to search for the Stocks to update in case it exists.
     */
    where: StocksWhereUniqueInput
    /**
     * In case the Stocks found by the `where` argument doesn't exist, create a new Stocks with this data.
     */
    create: XOR<StocksCreateInput, StocksUncheckedCreateInput>
    /**
     * In case the Stocks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StocksUpdateInput, StocksUncheckedUpdateInput>
  }

  /**
   * Stocks delete
   */
  export type StocksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stocks
     */
    select?: StocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stocks
     */
    omit?: StocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocksInclude<ExtArgs> | null
    /**
     * Filter which Stocks to delete.
     */
    where: StocksWhereUniqueInput
  }

  /**
   * Stocks deleteMany
   */
  export type StocksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Stocks to delete
     */
    where?: StocksWhereInput
    /**
     * Limit how many Stocks to delete.
     */
    limit?: number
  }

  /**
   * Stocks.Products
   */
  export type Stocks$ProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Stocks without action
   */
  export type StocksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stocks
     */
    select?: StocksSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Stocks
     */
    omit?: StocksOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StocksInclude<ExtArgs> | null
  }


  /**
   * Model Products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsMinAggregateOutputType = {
    id: string | null
    name: string | null
    stock_id: string | null
    category_id: string | null
    brand_id: string | null
    product_code: string | null
    description: string | null
    sales_unit: string | null
    is_active: boolean | null
    date_of_inactivation: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    stock_id: string | null
    category_id: string | null
    brand_id: string | null
    product_code: string | null
    description: string | null
    sales_unit: string | null
    is_active: boolean | null
    date_of_inactivation: Date | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    name: number
    stock_id: number
    category_id: number
    brand_id: number
    product_code: number
    description: number
    sales_unit: number
    is_active: number
    date_of_inactivation: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductsMinAggregateInputType = {
    id?: true
    name?: true
    stock_id?: true
    category_id?: true
    brand_id?: true
    product_code?: true
    description?: true
    sales_unit?: true
    is_active?: true
    date_of_inactivation?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    name?: true
    stock_id?: true
    category_id?: true
    brand_id?: true
    product_code?: true
    description?: true
    sales_unit?: true
    is_active?: true
    date_of_inactivation?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    name?: true
    stock_id?: true
    category_id?: true
    brand_id?: true
    product_code?: true
    description?: true
    sales_unit?: true
    is_active?: true
    date_of_inactivation?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to aggregate.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type ProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithAggregationInput | ProductsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: ProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: string
    name: string
    stock_id: string
    category_id: string
    brand_id: string
    product_code: string
    description: string | null
    sales_unit: string
    is_active: boolean
    date_of_inactivation: Date | null
    created_at: Date | null
    updated_at: Date | null
    _count: ProductsCountAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends ProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type ProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stock_id?: boolean
    category_id?: boolean
    brand_id?: boolean
    product_code?: boolean
    description?: boolean
    sales_unit?: boolean
    is_active?: boolean
    date_of_inactivation?: boolean
    created_at?: boolean
    updated_at?: boolean
    items?: boolean | Products$itemsArgs<ExtArgs>
    brand?: boolean | BrandsDefaultArgs<ExtArgs>
    stock?: boolean | StocksDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    banners?: boolean | Products$bannersArgs<ExtArgs>
    supliers?: boolean | Products$supliersArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stock_id?: boolean
    category_id?: boolean
    brand_id?: boolean
    product_code?: boolean
    description?: boolean
    sales_unit?: boolean
    is_active?: boolean
    date_of_inactivation?: boolean
    created_at?: boolean
    updated_at?: boolean
    brand?: boolean | BrandsDefaultArgs<ExtArgs>
    stock?: boolean | StocksDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    stock_id?: boolean
    category_id?: boolean
    brand_id?: boolean
    product_code?: boolean
    description?: boolean
    sales_unit?: boolean
    is_active?: boolean
    date_of_inactivation?: boolean
    created_at?: boolean
    updated_at?: boolean
    brand?: boolean | BrandsDefaultArgs<ExtArgs>
    stock?: boolean | StocksDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type ProductsSelectScalar = {
    id?: boolean
    name?: boolean
    stock_id?: boolean
    category_id?: boolean
    brand_id?: boolean
    product_code?: boolean
    description?: boolean
    sales_unit?: boolean
    is_active?: boolean
    date_of_inactivation?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ProductsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "stock_id" | "category_id" | "brand_id" | "product_code" | "description" | "sales_unit" | "is_active" | "date_of_inactivation" | "created_at" | "updated_at", ExtArgs["result"]["products"]>
  export type ProductsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | Products$itemsArgs<ExtArgs>
    brand?: boolean | BrandsDefaultArgs<ExtArgs>
    stock?: boolean | StocksDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
    banners?: boolean | Products$bannersArgs<ExtArgs>
    supliers?: boolean | Products$supliersArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandsDefaultArgs<ExtArgs>
    stock?: boolean | StocksDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }
  export type ProductsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    brand?: boolean | BrandsDefaultArgs<ExtArgs>
    stock?: boolean | StocksDefaultArgs<ExtArgs>
    category?: boolean | CategoriesDefaultArgs<ExtArgs>
  }

  export type $ProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Products"
    objects: {
      items: Prisma.$Orders_ItensPayload<ExtArgs> | null
      brand: Prisma.$BrandsPayload<ExtArgs>
      stock: Prisma.$StocksPayload<ExtArgs>
      category: Prisma.$CategoriesPayload<ExtArgs>
      banners: Prisma.$BannersPayload<ExtArgs>[]
      supliers: Prisma.$SuppliersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      stock_id: string
      category_id: string
      brand_id: string
      product_code: string
      description: string | null
      sales_unit: string
      is_active: boolean
      date_of_inactivation: Date | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type ProductsGetPayload<S extends boolean | null | undefined | ProductsDefaultArgs> = $Result.GetResult<Prisma.$ProductsPayload, S>

  type ProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface ProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Products'], meta: { name: 'Products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {ProductsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductsFindUniqueArgs>(args: SelectSubset<T, ProductsFindUniqueArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductsFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductsFindFirstArgs>(args?: SelectSubset<T, ProductsFindFirstArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductsFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductsFindManyArgs>(args?: SelectSubset<T, ProductsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {ProductsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends ProductsCreateArgs>(args: SelectSubset<T, ProductsCreateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductsCreateManyArgs>(args?: SelectSubset<T, ProductsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductsCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {ProductsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends ProductsDeleteArgs>(args: SelectSubset<T, ProductsDeleteArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {ProductsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductsUpdateArgs>(args: SelectSubset<T, ProductsUpdateArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductsDeleteManyArgs>(args?: SelectSubset<T, ProductsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductsUpdateManyArgs>(args: SelectSubset<T, ProductsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductsUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {ProductsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends ProductsUpsertArgs>(args: SelectSubset<T, ProductsUpsertArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductsCountArgs>(
      args?: Subset<T, ProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsGroupByArgs} args - Group by arguments.
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
      T extends ProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsGroupByArgs['orderBy'] }
        : { orderBy?: ProductsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Products model
   */
  readonly fields: ProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends Products$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Products$itemsArgs<ExtArgs>>): Prisma__Orders_ItensClient<$Result.GetResult<Prisma.$Orders_ItensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    brand<T extends BrandsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BrandsDefaultArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stock<T extends StocksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StocksDefaultArgs<ExtArgs>>): Prisma__StocksClient<$Result.GetResult<Prisma.$StocksPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoriesDefaultArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    banners<T extends Products$bannersArgs<ExtArgs> = {}>(args?: Subset<T, Products$bannersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    supliers<T extends Products$supliersArgs<ExtArgs> = {}>(args?: Subset<T, Products$supliersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Products model
   */
  interface ProductsFieldRefs {
    readonly id: FieldRef<"Products", 'String'>
    readonly name: FieldRef<"Products", 'String'>
    readonly stock_id: FieldRef<"Products", 'String'>
    readonly category_id: FieldRef<"Products", 'String'>
    readonly brand_id: FieldRef<"Products", 'String'>
    readonly product_code: FieldRef<"Products", 'String'>
    readonly description: FieldRef<"Products", 'String'>
    readonly sales_unit: FieldRef<"Products", 'String'>
    readonly is_active: FieldRef<"Products", 'Boolean'>
    readonly date_of_inactivation: FieldRef<"Products", 'DateTime'>
    readonly created_at: FieldRef<"Products", 'DateTime'>
    readonly updated_at: FieldRef<"Products", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Products findUnique
   */
  export type ProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findUniqueOrThrow
   */
  export type ProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products findFirst
   */
  export type ProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findFirstOrThrow
   */
  export type ProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products findMany
   */
  export type ProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Products create
   */
  export type ProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a Products.
     */
    data: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
  }

  /**
   * Products createMany
   */
  export type ProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Products createManyAndReturn
   */
  export type ProductsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductsCreateManyInput | ProductsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products update
   */
  export type ProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a Products.
     */
    data: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
    /**
     * Choose, which Products to update.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products updateMany
   */
  export type ProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Products updateManyAndReturn
   */
  export type ProductsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Products upsert
   */
  export type ProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the Products to update in case it exists.
     */
    where: ProductsWhereUniqueInput
    /**
     * In case the Products found by the `where` argument doesn't exist, create a new Products with this data.
     */
    create: XOR<ProductsCreateInput, ProductsUncheckedCreateInput>
    /**
     * In case the Products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsUpdateInput, ProductsUncheckedUpdateInput>
  }

  /**
   * Products delete
   */
  export type ProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    /**
     * Filter which Products to delete.
     */
    where: ProductsWhereUniqueInput
  }

  /**
   * Products deleteMany
   */
  export type ProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductsWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Products.items
   */
  export type Products$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders_Itens
     */
    select?: Orders_ItensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders_Itens
     */
    omit?: Orders_ItensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Orders_ItensInclude<ExtArgs> | null
    where?: Orders_ItensWhereInput
  }

  /**
   * Products.banners
   */
  export type Products$bannersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banners
     */
    select?: BannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banners
     */
    omit?: BannersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannersInclude<ExtArgs> | null
    where?: BannersWhereInput
    orderBy?: BannersOrderByWithRelationInput | BannersOrderByWithRelationInput[]
    cursor?: BannersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BannersScalarFieldEnum | BannersScalarFieldEnum[]
  }

  /**
   * Products.supliers
   */
  export type Products$supliersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuppliersInclude<ExtArgs> | null
    where?: SuppliersWhereInput
    orderBy?: SuppliersOrderByWithRelationInput | SuppliersOrderByWithRelationInput[]
    cursor?: SuppliersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SuppliersScalarFieldEnum | SuppliersScalarFieldEnum[]
  }

  /**
   * Products without action
   */
  export type ProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
  }


  /**
   * Model Brands
   */

  export type AggregateBrands = {
    _count: BrandsCountAggregateOutputType | null
    _min: BrandsMinAggregateOutputType | null
    _max: BrandsMaxAggregateOutputType | null
  }

  export type BrandsMinAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BrandsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BrandsCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type BrandsMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type BrandsMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type BrandsCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type BrandsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to aggregate.
     */
    where?: BrandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandsOrderByWithRelationInput | BrandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BrandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Brands
    **/
    _count?: true | BrandsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BrandsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BrandsMaxAggregateInputType
  }

  export type GetBrandsAggregateType<T extends BrandsAggregateArgs> = {
        [P in keyof T & keyof AggregateBrands]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBrands[P]>
      : GetScalarType<T[P], AggregateBrands[P]>
  }




  export type BrandsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BrandsWhereInput
    orderBy?: BrandsOrderByWithAggregationInput | BrandsOrderByWithAggregationInput[]
    by: BrandsScalarFieldEnum[] | BrandsScalarFieldEnum
    having?: BrandsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BrandsCountAggregateInputType | true
    _min?: BrandsMinAggregateInputType
    _max?: BrandsMaxAggregateInputType
  }

  export type BrandsGroupByOutputType = {
    id: string
    name: string
    created_at: Date | null
    updated_at: Date | null
    _count: BrandsCountAggregateOutputType | null
    _min: BrandsMinAggregateOutputType | null
    _max: BrandsMaxAggregateOutputType | null
  }

  type GetBrandsGroupByPayload<T extends BrandsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BrandsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BrandsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BrandsGroupByOutputType[P]>
            : GetScalarType<T[P], BrandsGroupByOutputType[P]>
        }
      >
    >


  export type BrandsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    Products?: boolean | Brands$ProductsArgs<ExtArgs>
    _count?: boolean | BrandsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["brands"]>

  export type BrandsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["brands"]>

  export type BrandsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["brands"]>

  export type BrandsSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type BrandsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["brands"]>
  export type BrandsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | Brands$ProductsArgs<ExtArgs>
    _count?: boolean | BrandsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BrandsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BrandsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BrandsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Brands"
    objects: {
      Products: Prisma.$ProductsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["brands"]>
    composites: {}
  }

  type BrandsGetPayload<S extends boolean | null | undefined | BrandsDefaultArgs> = $Result.GetResult<Prisma.$BrandsPayload, S>

  type BrandsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BrandsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BrandsCountAggregateInputType | true
    }

  export interface BrandsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Brands'], meta: { name: 'Brands' } }
    /**
     * Find zero or one Brands that matches the filter.
     * @param {BrandsFindUniqueArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BrandsFindUniqueArgs>(args: SelectSubset<T, BrandsFindUniqueArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Brands that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BrandsFindUniqueOrThrowArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BrandsFindUniqueOrThrowArgs>(args: SelectSubset<T, BrandsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsFindFirstArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BrandsFindFirstArgs>(args?: SelectSubset<T, BrandsFindFirstArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Brands that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsFindFirstOrThrowArgs} args - Arguments to find a Brands
     * @example
     * // Get one Brands
     * const brands = await prisma.brands.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BrandsFindFirstOrThrowArgs>(args?: SelectSubset<T, BrandsFindFirstOrThrowArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Brands that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Brands
     * const brands = await prisma.brands.findMany()
     * 
     * // Get first 10 Brands
     * const brands = await prisma.brands.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const brandsWithIdOnly = await prisma.brands.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BrandsFindManyArgs>(args?: SelectSubset<T, BrandsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Brands.
     * @param {BrandsCreateArgs} args - Arguments to create a Brands.
     * @example
     * // Create one Brands
     * const Brands = await prisma.brands.create({
     *   data: {
     *     // ... data to create a Brands
     *   }
     * })
     * 
     */
    create<T extends BrandsCreateArgs>(args: SelectSubset<T, BrandsCreateArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Brands.
     * @param {BrandsCreateManyArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brands = await prisma.brands.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BrandsCreateManyArgs>(args?: SelectSubset<T, BrandsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Brands and returns the data saved in the database.
     * @param {BrandsCreateManyAndReturnArgs} args - Arguments to create many Brands.
     * @example
     * // Create many Brands
     * const brands = await prisma.brands.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Brands and only return the `id`
     * const brandsWithIdOnly = await prisma.brands.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BrandsCreateManyAndReturnArgs>(args?: SelectSubset<T, BrandsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Brands.
     * @param {BrandsDeleteArgs} args - Arguments to delete one Brands.
     * @example
     * // Delete one Brands
     * const Brands = await prisma.brands.delete({
     *   where: {
     *     // ... filter to delete one Brands
     *   }
     * })
     * 
     */
    delete<T extends BrandsDeleteArgs>(args: SelectSubset<T, BrandsDeleteArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Brands.
     * @param {BrandsUpdateArgs} args - Arguments to update one Brands.
     * @example
     * // Update one Brands
     * const brands = await prisma.brands.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BrandsUpdateArgs>(args: SelectSubset<T, BrandsUpdateArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Brands.
     * @param {BrandsDeleteManyArgs} args - Arguments to filter Brands to delete.
     * @example
     * // Delete a few Brands
     * const { count } = await prisma.brands.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BrandsDeleteManyArgs>(args?: SelectSubset<T, BrandsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Brands
     * const brands = await prisma.brands.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BrandsUpdateManyArgs>(args: SelectSubset<T, BrandsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Brands and returns the data updated in the database.
     * @param {BrandsUpdateManyAndReturnArgs} args - Arguments to update many Brands.
     * @example
     * // Update many Brands
     * const brands = await prisma.brands.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Brands and only return the `id`
     * const brandsWithIdOnly = await prisma.brands.updateManyAndReturn({
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
    updateManyAndReturn<T extends BrandsUpdateManyAndReturnArgs>(args: SelectSubset<T, BrandsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Brands.
     * @param {BrandsUpsertArgs} args - Arguments to update or create a Brands.
     * @example
     * // Update or create a Brands
     * const brands = await prisma.brands.upsert({
     *   create: {
     *     // ... data to create a Brands
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Brands we want to update
     *   }
     * })
     */
    upsert<T extends BrandsUpsertArgs>(args: SelectSubset<T, BrandsUpsertArgs<ExtArgs>>): Prisma__BrandsClient<$Result.GetResult<Prisma.$BrandsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsCountArgs} args - Arguments to filter Brands to count.
     * @example
     * // Count the number of Brands
     * const count = await prisma.brands.count({
     *   where: {
     *     // ... the filter for the Brands we want to count
     *   }
     * })
    **/
    count<T extends BrandsCountArgs>(
      args?: Subset<T, BrandsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BrandsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BrandsAggregateArgs>(args: Subset<T, BrandsAggregateArgs>): Prisma.PrismaPromise<GetBrandsAggregateType<T>>

    /**
     * Group by Brands.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BrandsGroupByArgs} args - Group by arguments.
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
      T extends BrandsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BrandsGroupByArgs['orderBy'] }
        : { orderBy?: BrandsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BrandsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBrandsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Brands model
   */
  readonly fields: BrandsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Brands.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BrandsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Products<T extends Brands$ProductsArgs<ExtArgs> = {}>(args?: Subset<T, Brands$ProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Brands model
   */
  interface BrandsFieldRefs {
    readonly id: FieldRef<"Brands", 'String'>
    readonly name: FieldRef<"Brands", 'String'>
    readonly created_at: FieldRef<"Brands", 'DateTime'>
    readonly updated_at: FieldRef<"Brands", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Brands findUnique
   */
  export type BrandsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where: BrandsWhereUniqueInput
  }

  /**
   * Brands findUniqueOrThrow
   */
  export type BrandsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where: BrandsWhereUniqueInput
  }

  /**
   * Brands findFirst
   */
  export type BrandsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandsOrderByWithRelationInput | BrandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandsScalarFieldEnum | BrandsScalarFieldEnum[]
  }

  /**
   * Brands findFirstOrThrow
   */
  export type BrandsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandsOrderByWithRelationInput | BrandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Brands.
     */
    cursor?: BrandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Brands.
     */
    distinct?: BrandsScalarFieldEnum | BrandsScalarFieldEnum[]
  }

  /**
   * Brands findMany
   */
  export type BrandsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * Filter, which Brands to fetch.
     */
    where?: BrandsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Brands to fetch.
     */
    orderBy?: BrandsOrderByWithRelationInput | BrandsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Brands.
     */
    cursor?: BrandsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Brands from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Brands.
     */
    skip?: number
    distinct?: BrandsScalarFieldEnum | BrandsScalarFieldEnum[]
  }

  /**
   * Brands create
   */
  export type BrandsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * The data needed to create a Brands.
     */
    data: XOR<BrandsCreateInput, BrandsUncheckedCreateInput>
  }

  /**
   * Brands createMany
   */
  export type BrandsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Brands.
     */
    data: BrandsCreateManyInput | BrandsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brands createManyAndReturn
   */
  export type BrandsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * The data used to create many Brands.
     */
    data: BrandsCreateManyInput | BrandsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Brands update
   */
  export type BrandsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * The data needed to update a Brands.
     */
    data: XOR<BrandsUpdateInput, BrandsUncheckedUpdateInput>
    /**
     * Choose, which Brands to update.
     */
    where: BrandsWhereUniqueInput
  }

  /**
   * Brands updateMany
   */
  export type BrandsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandsUpdateManyMutationInput, BrandsUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandsWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brands updateManyAndReturn
   */
  export type BrandsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * The data used to update Brands.
     */
    data: XOR<BrandsUpdateManyMutationInput, BrandsUncheckedUpdateManyInput>
    /**
     * Filter which Brands to update
     */
    where?: BrandsWhereInput
    /**
     * Limit how many Brands to update.
     */
    limit?: number
  }

  /**
   * Brands upsert
   */
  export type BrandsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * The filter to search for the Brands to update in case it exists.
     */
    where: BrandsWhereUniqueInput
    /**
     * In case the Brands found by the `where` argument doesn't exist, create a new Brands with this data.
     */
    create: XOR<BrandsCreateInput, BrandsUncheckedCreateInput>
    /**
     * In case the Brands was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BrandsUpdateInput, BrandsUncheckedUpdateInput>
  }

  /**
   * Brands delete
   */
  export type BrandsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null
    /**
     * Filter which Brands to delete.
     */
    where: BrandsWhereUniqueInput
  }

  /**
   * Brands deleteMany
   */
  export type BrandsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Brands to delete
     */
    where?: BrandsWhereInput
    /**
     * Limit how many Brands to delete.
     */
    limit?: number
  }

  /**
   * Brands.Products
   */
  export type Brands$ProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Brands without action
   */
  export type BrandsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Brands
     */
    select?: BrandsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Brands
     */
    omit?: BrandsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BrandsInclude<ExtArgs> | null
  }


  /**
   * Model Banners
   */

  export type AggregateBanners = {
    _count: BannersCountAggregateOutputType | null
    _avg: BannersAvgAggregateOutputType | null
    _sum: BannersSumAggregateOutputType | null
    _min: BannersMinAggregateOutputType | null
    _max: BannersMaxAggregateOutputType | null
  }

  export type BannersAvgAggregateOutputType = {
    display_order: number | null
  }

  export type BannersSumAggregateOutputType = {
    display_order: number | null
  }

  export type BannersMinAggregateOutputType = {
    id: string | null
    url_imagem: string | null
    display_order: number | null
    product_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BannersMaxAggregateOutputType = {
    id: string | null
    url_imagem: string | null
    display_order: number | null
    product_id: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type BannersCountAggregateOutputType = {
    id: number
    url_imagem: number
    display_order: number
    product_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type BannersAvgAggregateInputType = {
    display_order?: true
  }

  export type BannersSumAggregateInputType = {
    display_order?: true
  }

  export type BannersMinAggregateInputType = {
    id?: true
    url_imagem?: true
    display_order?: true
    product_id?: true
    created_at?: true
    updated_at?: true
  }

  export type BannersMaxAggregateInputType = {
    id?: true
    url_imagem?: true
    display_order?: true
    product_id?: true
    created_at?: true
    updated_at?: true
  }

  export type BannersCountAggregateInputType = {
    id?: true
    url_imagem?: true
    display_order?: true
    product_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type BannersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banners to aggregate.
     */
    where?: BannersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannersOrderByWithRelationInput | BannersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BannersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Banners
    **/
    _count?: true | BannersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BannersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BannersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BannersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BannersMaxAggregateInputType
  }

  export type GetBannersAggregateType<T extends BannersAggregateArgs> = {
        [P in keyof T & keyof AggregateBanners]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanners[P]>
      : GetScalarType<T[P], AggregateBanners[P]>
  }




  export type BannersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BannersWhereInput
    orderBy?: BannersOrderByWithAggregationInput | BannersOrderByWithAggregationInput[]
    by: BannersScalarFieldEnum[] | BannersScalarFieldEnum
    having?: BannersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BannersCountAggregateInputType | true
    _avg?: BannersAvgAggregateInputType
    _sum?: BannersSumAggregateInputType
    _min?: BannersMinAggregateInputType
    _max?: BannersMaxAggregateInputType
  }

  export type BannersGroupByOutputType = {
    id: string
    url_imagem: string
    display_order: number | null
    product_id: string | null
    created_at: Date
    updated_at: Date | null
    _count: BannersCountAggregateOutputType | null
    _avg: BannersAvgAggregateOutputType | null
    _sum: BannersSumAggregateOutputType | null
    _min: BannersMinAggregateOutputType | null
    _max: BannersMaxAggregateOutputType | null
  }

  type GetBannersGroupByPayload<T extends BannersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BannersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BannersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BannersGroupByOutputType[P]>
            : GetScalarType<T[P], BannersGroupByOutputType[P]>
        }
      >
    >


  export type BannersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url_imagem?: boolean
    display_order?: boolean
    product_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    products?: boolean | Banners$productsArgs<ExtArgs>
  }, ExtArgs["result"]["banners"]>

  export type BannersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url_imagem?: boolean
    display_order?: boolean
    product_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    products?: boolean | Banners$productsArgs<ExtArgs>
  }, ExtArgs["result"]["banners"]>

  export type BannersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url_imagem?: boolean
    display_order?: boolean
    product_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    products?: boolean | Banners$productsArgs<ExtArgs>
  }, ExtArgs["result"]["banners"]>

  export type BannersSelectScalar = {
    id?: boolean
    url_imagem?: boolean
    display_order?: boolean
    product_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type BannersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url_imagem" | "display_order" | "product_id" | "created_at" | "updated_at", ExtArgs["result"]["banners"]>
  export type BannersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Banners$productsArgs<ExtArgs>
  }
  export type BannersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Banners$productsArgs<ExtArgs>
  }
  export type BannersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Banners$productsArgs<ExtArgs>
  }

  export type $BannersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Banners"
    objects: {
      products: Prisma.$ProductsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url_imagem: string
      display_order: number | null
      product_id: string | null
      created_at: Date
      updated_at: Date | null
    }, ExtArgs["result"]["banners"]>
    composites: {}
  }

  type BannersGetPayload<S extends boolean | null | undefined | BannersDefaultArgs> = $Result.GetResult<Prisma.$BannersPayload, S>

  type BannersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BannersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BannersCountAggregateInputType | true
    }

  export interface BannersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Banners'], meta: { name: 'Banners' } }
    /**
     * Find zero or one Banners that matches the filter.
     * @param {BannersFindUniqueArgs} args - Arguments to find a Banners
     * @example
     * // Get one Banners
     * const banners = await prisma.banners.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BannersFindUniqueArgs>(args: SelectSubset<T, BannersFindUniqueArgs<ExtArgs>>): Prisma__BannersClient<$Result.GetResult<Prisma.$BannersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Banners that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BannersFindUniqueOrThrowArgs} args - Arguments to find a Banners
     * @example
     * // Get one Banners
     * const banners = await prisma.banners.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BannersFindUniqueOrThrowArgs>(args: SelectSubset<T, BannersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BannersClient<$Result.GetResult<Prisma.$BannersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannersFindFirstArgs} args - Arguments to find a Banners
     * @example
     * // Get one Banners
     * const banners = await prisma.banners.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BannersFindFirstArgs>(args?: SelectSubset<T, BannersFindFirstArgs<ExtArgs>>): Prisma__BannersClient<$Result.GetResult<Prisma.$BannersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banners that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannersFindFirstOrThrowArgs} args - Arguments to find a Banners
     * @example
     * // Get one Banners
     * const banners = await prisma.banners.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BannersFindFirstOrThrowArgs>(args?: SelectSubset<T, BannersFindFirstOrThrowArgs<ExtArgs>>): Prisma__BannersClient<$Result.GetResult<Prisma.$BannersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Banners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banners
     * const banners = await prisma.banners.findMany()
     * 
     * // Get first 10 Banners
     * const banners = await prisma.banners.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bannersWithIdOnly = await prisma.banners.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BannersFindManyArgs>(args?: SelectSubset<T, BannersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Banners.
     * @param {BannersCreateArgs} args - Arguments to create a Banners.
     * @example
     * // Create one Banners
     * const Banners = await prisma.banners.create({
     *   data: {
     *     // ... data to create a Banners
     *   }
     * })
     * 
     */
    create<T extends BannersCreateArgs>(args: SelectSubset<T, BannersCreateArgs<ExtArgs>>): Prisma__BannersClient<$Result.GetResult<Prisma.$BannersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Banners.
     * @param {BannersCreateManyArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banners = await prisma.banners.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BannersCreateManyArgs>(args?: SelectSubset<T, BannersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Banners and returns the data saved in the database.
     * @param {BannersCreateManyAndReturnArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banners = await prisma.banners.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Banners and only return the `id`
     * const bannersWithIdOnly = await prisma.banners.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BannersCreateManyAndReturnArgs>(args?: SelectSubset<T, BannersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Banners.
     * @param {BannersDeleteArgs} args - Arguments to delete one Banners.
     * @example
     * // Delete one Banners
     * const Banners = await prisma.banners.delete({
     *   where: {
     *     // ... filter to delete one Banners
     *   }
     * })
     * 
     */
    delete<T extends BannersDeleteArgs>(args: SelectSubset<T, BannersDeleteArgs<ExtArgs>>): Prisma__BannersClient<$Result.GetResult<Prisma.$BannersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Banners.
     * @param {BannersUpdateArgs} args - Arguments to update one Banners.
     * @example
     * // Update one Banners
     * const banners = await prisma.banners.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BannersUpdateArgs>(args: SelectSubset<T, BannersUpdateArgs<ExtArgs>>): Prisma__BannersClient<$Result.GetResult<Prisma.$BannersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Banners.
     * @param {BannersDeleteManyArgs} args - Arguments to filter Banners to delete.
     * @example
     * // Delete a few Banners
     * const { count } = await prisma.banners.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BannersDeleteManyArgs>(args?: SelectSubset<T, BannersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banners
     * const banners = await prisma.banners.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BannersUpdateManyArgs>(args: SelectSubset<T, BannersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners and returns the data updated in the database.
     * @param {BannersUpdateManyAndReturnArgs} args - Arguments to update many Banners.
     * @example
     * // Update many Banners
     * const banners = await prisma.banners.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Banners and only return the `id`
     * const bannersWithIdOnly = await prisma.banners.updateManyAndReturn({
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
    updateManyAndReturn<T extends BannersUpdateManyAndReturnArgs>(args: SelectSubset<T, BannersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BannersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Banners.
     * @param {BannersUpsertArgs} args - Arguments to update or create a Banners.
     * @example
     * // Update or create a Banners
     * const banners = await prisma.banners.upsert({
     *   create: {
     *     // ... data to create a Banners
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banners we want to update
     *   }
     * })
     */
    upsert<T extends BannersUpsertArgs>(args: SelectSubset<T, BannersUpsertArgs<ExtArgs>>): Prisma__BannersClient<$Result.GetResult<Prisma.$BannersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannersCountArgs} args - Arguments to filter Banners to count.
     * @example
     * // Count the number of Banners
     * const count = await prisma.banners.count({
     *   where: {
     *     // ... the filter for the Banners we want to count
     *   }
     * })
    **/
    count<T extends BannersCountArgs>(
      args?: Subset<T, BannersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BannersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BannersAggregateArgs>(args: Subset<T, BannersAggregateArgs>): Prisma.PrismaPromise<GetBannersAggregateType<T>>

    /**
     * Group by Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannersGroupByArgs} args - Group by arguments.
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
      T extends BannersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BannersGroupByArgs['orderBy'] }
        : { orderBy?: BannersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BannersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBannersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Banners model
   */
  readonly fields: BannersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Banners.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BannersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Banners$productsArgs<ExtArgs> = {}>(args?: Subset<T, Banners$productsArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Banners model
   */
  interface BannersFieldRefs {
    readonly id: FieldRef<"Banners", 'String'>
    readonly url_imagem: FieldRef<"Banners", 'String'>
    readonly display_order: FieldRef<"Banners", 'Int'>
    readonly product_id: FieldRef<"Banners", 'String'>
    readonly created_at: FieldRef<"Banners", 'DateTime'>
    readonly updated_at: FieldRef<"Banners", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Banners findUnique
   */
  export type BannersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banners
     */
    select?: BannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banners
     */
    omit?: BannersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannersInclude<ExtArgs> | null
    /**
     * Filter, which Banners to fetch.
     */
    where: BannersWhereUniqueInput
  }

  /**
   * Banners findUniqueOrThrow
   */
  export type BannersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banners
     */
    select?: BannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banners
     */
    omit?: BannersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannersInclude<ExtArgs> | null
    /**
     * Filter, which Banners to fetch.
     */
    where: BannersWhereUniqueInput
  }

  /**
   * Banners findFirst
   */
  export type BannersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banners
     */
    select?: BannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banners
     */
    omit?: BannersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannersInclude<ExtArgs> | null
    /**
     * Filter, which Banners to fetch.
     */
    where?: BannersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannersOrderByWithRelationInput | BannersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannersScalarFieldEnum | BannersScalarFieldEnum[]
  }

  /**
   * Banners findFirstOrThrow
   */
  export type BannersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banners
     */
    select?: BannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banners
     */
    omit?: BannersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannersInclude<ExtArgs> | null
    /**
     * Filter, which Banners to fetch.
     */
    where?: BannersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannersOrderByWithRelationInput | BannersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Banners.
     */
    cursor?: BannersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Banners.
     */
    distinct?: BannersScalarFieldEnum | BannersScalarFieldEnum[]
  }

  /**
   * Banners findMany
   */
  export type BannersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banners
     */
    select?: BannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banners
     */
    omit?: BannersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannersInclude<ExtArgs> | null
    /**
     * Filter, which Banners to fetch.
     */
    where?: BannersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Banners to fetch.
     */
    orderBy?: BannersOrderByWithRelationInput | BannersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Banners.
     */
    cursor?: BannersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Banners.
     */
    skip?: number
    distinct?: BannersScalarFieldEnum | BannersScalarFieldEnum[]
  }

  /**
   * Banners create
   */
  export type BannersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banners
     */
    select?: BannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banners
     */
    omit?: BannersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannersInclude<ExtArgs> | null
    /**
     * The data needed to create a Banners.
     */
    data: XOR<BannersCreateInput, BannersUncheckedCreateInput>
  }

  /**
   * Banners createMany
   */
  export type BannersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Banners.
     */
    data: BannersCreateManyInput | BannersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Banners createManyAndReturn
   */
  export type BannersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banners
     */
    select?: BannersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Banners
     */
    omit?: BannersOmit<ExtArgs> | null
    /**
     * The data used to create many Banners.
     */
    data: BannersCreateManyInput | BannersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Banners update
   */
  export type BannersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banners
     */
    select?: BannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banners
     */
    omit?: BannersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannersInclude<ExtArgs> | null
    /**
     * The data needed to update a Banners.
     */
    data: XOR<BannersUpdateInput, BannersUncheckedUpdateInput>
    /**
     * Choose, which Banners to update.
     */
    where: BannersWhereUniqueInput
  }

  /**
   * Banners updateMany
   */
  export type BannersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Banners.
     */
    data: XOR<BannersUpdateManyMutationInput, BannersUncheckedUpdateManyInput>
    /**
     * Filter which Banners to update
     */
    where?: BannersWhereInput
    /**
     * Limit how many Banners to update.
     */
    limit?: number
  }

  /**
   * Banners updateManyAndReturn
   */
  export type BannersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banners
     */
    select?: BannersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Banners
     */
    omit?: BannersOmit<ExtArgs> | null
    /**
     * The data used to update Banners.
     */
    data: XOR<BannersUpdateManyMutationInput, BannersUncheckedUpdateManyInput>
    /**
     * Filter which Banners to update
     */
    where?: BannersWhereInput
    /**
     * Limit how many Banners to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Banners upsert
   */
  export type BannersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banners
     */
    select?: BannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banners
     */
    omit?: BannersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannersInclude<ExtArgs> | null
    /**
     * The filter to search for the Banners to update in case it exists.
     */
    where: BannersWhereUniqueInput
    /**
     * In case the Banners found by the `where` argument doesn't exist, create a new Banners with this data.
     */
    create: XOR<BannersCreateInput, BannersUncheckedCreateInput>
    /**
     * In case the Banners was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BannersUpdateInput, BannersUncheckedUpdateInput>
  }

  /**
   * Banners delete
   */
  export type BannersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banners
     */
    select?: BannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banners
     */
    omit?: BannersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannersInclude<ExtArgs> | null
    /**
     * Filter which Banners to delete.
     */
    where: BannersWhereUniqueInput
  }

  /**
   * Banners deleteMany
   */
  export type BannersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Banners to delete
     */
    where?: BannersWhereInput
    /**
     * Limit how many Banners to delete.
     */
    limit?: number
  }

  /**
   * Banners.products
   */
  export type Banners$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
  }

  /**
   * Banners without action
   */
  export type BannersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Banners
     */
    select?: BannersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Banners
     */
    omit?: BannersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BannersInclude<ExtArgs> | null
  }


  /**
   * Model Categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to aggregate.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type CategoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoriesWhereInput
    orderBy?: CategoriesOrderByWithAggregationInput | CategoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: CategoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: string
    name: string
    created_at: Date | null
    updated_at: Date | null
    _count: CategoriesCountAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends CategoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type CategoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    Products?: boolean | Categories$ProductsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["categories"]>

  export type CategoriesSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type CategoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["categories"]>
  export type CategoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Products?: boolean | Categories$ProductsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Categories"
    objects: {
      Products: Prisma.$ProductsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type CategoriesGetPayload<S extends boolean | null | undefined | CategoriesDefaultArgs> = $Result.GetResult<Prisma.$CategoriesPayload, S>

  type CategoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface CategoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Categories'], meta: { name: 'Categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {CategoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoriesFindUniqueArgs>(args: SelectSubset<T, CategoriesFindUniqueArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoriesFindFirstArgs>(args?: SelectSubset<T, CategoriesFindFirstArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoriesFindManyArgs>(args?: SelectSubset<T, CategoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {CategoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends CategoriesCreateArgs>(args: SelectSubset<T, CategoriesCreateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoriesCreateManyArgs>(args?: SelectSubset<T, CategoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {CategoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends CategoriesDeleteArgs>(args: SelectSubset<T, CategoriesDeleteArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {CategoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoriesUpdateArgs>(args: SelectSubset<T, CategoriesUpdateArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoriesDeleteManyArgs>(args?: SelectSubset<T, CategoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoriesUpdateManyArgs>(args: SelectSubset<T, CategoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {CategoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends CategoriesUpsertArgs>(args: SelectSubset<T, CategoriesUpsertArgs<ExtArgs>>): Prisma__CategoriesClient<$Result.GetResult<Prisma.$CategoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoriesCountArgs>(
      args?: Subset<T, CategoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesGroupByArgs} args - Group by arguments.
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
      T extends CategoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoriesGroupByArgs['orderBy'] }
        : { orderBy?: CategoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Categories model
   */
  readonly fields: CategoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Products<T extends Categories$ProductsArgs<ExtArgs> = {}>(args?: Subset<T, Categories$ProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Categories model
   */
  interface CategoriesFieldRefs {
    readonly id: FieldRef<"Categories", 'String'>
    readonly name: FieldRef<"Categories", 'String'>
    readonly created_at: FieldRef<"Categories", 'DateTime'>
    readonly updated_at: FieldRef<"Categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Categories findUnique
   */
  export type CategoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findUniqueOrThrow
   */
  export type CategoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories findFirst
   */
  export type CategoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findFirstOrThrow
   */
  export type CategoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories findMany
   */
  export type CategoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoriesOrderByWithRelationInput | CategoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * Categories create
   */
  export type CategoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Categories.
     */
    data: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
  }

  /**
   * Categories createMany
   */
  export type CategoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories createManyAndReturn
   */
  export type CategoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoriesCreateManyInput | CategoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Categories update
   */
  export type CategoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Categories.
     */
    data: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
    /**
     * Choose, which Categories to update.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories updateMany
   */
  export type CategoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories updateManyAndReturn
   */
  export type CategoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoriesUpdateManyMutationInput, CategoriesUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Categories upsert
   */
  export type CategoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Categories to update in case it exists.
     */
    where: CategoriesWhereUniqueInput
    /**
     * In case the Categories found by the `where` argument doesn't exist, create a new Categories with this data.
     */
    create: XOR<CategoriesCreateInput, CategoriesUncheckedCreateInput>
    /**
     * In case the Categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoriesUpdateInput, CategoriesUncheckedUpdateInput>
  }

  /**
   * Categories delete
   */
  export type CategoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
    /**
     * Filter which Categories to delete.
     */
    where: CategoriesWhereUniqueInput
  }

  /**
   * Categories deleteMany
   */
  export type CategoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoriesWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Categories.Products
   */
  export type Categories$ProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Categories without action
   */
  export type CategoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Categories
     */
    select?: CategoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Categories
     */
    omit?: CategoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoriesInclude<ExtArgs> | null
  }


  /**
   * Model Suppliers
   */

  export type AggregateSuppliers = {
    _count: SuppliersCountAggregateOutputType | null
    _min: SuppliersMinAggregateOutputType | null
    _max: SuppliersMaxAggregateOutputType | null
  }

  export type SuppliersMinAggregateOutputType = {
    id: string | null
    company_fantasy: string | null
    company_reason: string | null
    company_acronym: string | null
    cnpj: string | null
    email: string | null
    phone: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SuppliersMaxAggregateOutputType = {
    id: string | null
    company_fantasy: string | null
    company_reason: string | null
    company_acronym: string | null
    cnpj: string | null
    email: string | null
    phone: string | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type SuppliersCountAggregateOutputType = {
    id: number
    company_fantasy: number
    company_reason: number
    company_acronym: number
    cnpj: number
    email: number
    phone: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type SuppliersMinAggregateInputType = {
    id?: true
    company_fantasy?: true
    company_reason?: true
    company_acronym?: true
    cnpj?: true
    email?: true
    phone?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type SuppliersMaxAggregateInputType = {
    id?: true
    company_fantasy?: true
    company_reason?: true
    company_acronym?: true
    cnpj?: true
    email?: true
    phone?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type SuppliersCountAggregateInputType = {
    id?: true
    company_fantasy?: true
    company_reason?: true
    company_acronym?: true
    cnpj?: true
    email?: true
    phone?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type SuppliersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to aggregate.
     */
    where?: SuppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SuppliersOrderByWithRelationInput | SuppliersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SuppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SuppliersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SuppliersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SuppliersMaxAggregateInputType
  }

  export type GetSuppliersAggregateType<T extends SuppliersAggregateArgs> = {
        [P in keyof T & keyof AggregateSuppliers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSuppliers[P]>
      : GetScalarType<T[P], AggregateSuppliers[P]>
  }




  export type SuppliersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SuppliersWhereInput
    orderBy?: SuppliersOrderByWithAggregationInput | SuppliersOrderByWithAggregationInput[]
    by: SuppliersScalarFieldEnum[] | SuppliersScalarFieldEnum
    having?: SuppliersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SuppliersCountAggregateInputType | true
    _min?: SuppliersMinAggregateInputType
    _max?: SuppliersMaxAggregateInputType
  }

  export type SuppliersGroupByOutputType = {
    id: string
    company_fantasy: string
    company_reason: string
    company_acronym: string
    cnpj: string
    email: string
    phone: string
    is_active: boolean
    created_at: Date | null
    updated_at: Date | null
    _count: SuppliersCountAggregateOutputType | null
    _min: SuppliersMinAggregateOutputType | null
    _max: SuppliersMaxAggregateOutputType | null
  }

  type GetSuppliersGroupByPayload<T extends SuppliersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SuppliersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SuppliersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SuppliersGroupByOutputType[P]>
            : GetScalarType<T[P], SuppliersGroupByOutputType[P]>
        }
      >
    >


  export type SuppliersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_fantasy?: boolean
    company_reason?: boolean
    company_acronym?: boolean
    cnpj?: boolean
    email?: boolean
    phone?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    products?: boolean | Suppliers$productsArgs<ExtArgs>
    _count?: boolean | SuppliersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["suppliers"]>

  export type SuppliersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_fantasy?: boolean
    company_reason?: boolean
    company_acronym?: boolean
    cnpj?: boolean
    email?: boolean
    phone?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["suppliers"]>

  export type SuppliersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    company_fantasy?: boolean
    company_reason?: boolean
    company_acronym?: boolean
    cnpj?: boolean
    email?: boolean
    phone?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["suppliers"]>

  export type SuppliersSelectScalar = {
    id?: boolean
    company_fantasy?: boolean
    company_reason?: boolean
    company_acronym?: boolean
    cnpj?: boolean
    email?: boolean
    phone?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type SuppliersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "company_fantasy" | "company_reason" | "company_acronym" | "cnpj" | "email" | "phone" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["suppliers"]>
  export type SuppliersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Suppliers$productsArgs<ExtArgs>
    _count?: boolean | SuppliersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SuppliersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SuppliersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SuppliersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Suppliers"
    objects: {
      products: Prisma.$ProductsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      company_fantasy: string
      company_reason: string
      company_acronym: string
      cnpj: string
      email: string
      phone: string
      is_active: boolean
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["suppliers"]>
    composites: {}
  }

  type SuppliersGetPayload<S extends boolean | null | undefined | SuppliersDefaultArgs> = $Result.GetResult<Prisma.$SuppliersPayload, S>

  type SuppliersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SuppliersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SuppliersCountAggregateInputType | true
    }

  export interface SuppliersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Suppliers'], meta: { name: 'Suppliers' } }
    /**
     * Find zero or one Suppliers that matches the filter.
     * @param {SuppliersFindUniqueArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SuppliersFindUniqueArgs>(args: SelectSubset<T, SuppliersFindUniqueArgs<ExtArgs>>): Prisma__SuppliersClient<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Suppliers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SuppliersFindUniqueOrThrowArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SuppliersFindUniqueOrThrowArgs>(args: SelectSubset<T, SuppliersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SuppliersClient<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersFindFirstArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SuppliersFindFirstArgs>(args?: SelectSubset<T, SuppliersFindFirstArgs<ExtArgs>>): Prisma__SuppliersClient<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Suppliers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersFindFirstOrThrowArgs} args - Arguments to find a Suppliers
     * @example
     * // Get one Suppliers
     * const suppliers = await prisma.suppliers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SuppliersFindFirstOrThrowArgs>(args?: SelectSubset<T, SuppliersFindFirstOrThrowArgs<ExtArgs>>): Prisma__SuppliersClient<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.suppliers.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.suppliers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const suppliersWithIdOnly = await prisma.suppliers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SuppliersFindManyArgs>(args?: SelectSubset<T, SuppliersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Suppliers.
     * @param {SuppliersCreateArgs} args - Arguments to create a Suppliers.
     * @example
     * // Create one Suppliers
     * const Suppliers = await prisma.suppliers.create({
     *   data: {
     *     // ... data to create a Suppliers
     *   }
     * })
     * 
     */
    create<T extends SuppliersCreateArgs>(args: SelectSubset<T, SuppliersCreateArgs<ExtArgs>>): Prisma__SuppliersClient<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {SuppliersCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const suppliers = await prisma.suppliers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SuppliersCreateManyArgs>(args?: SelectSubset<T, SuppliersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {SuppliersCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const suppliers = await prisma.suppliers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `id`
     * const suppliersWithIdOnly = await prisma.suppliers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SuppliersCreateManyAndReturnArgs>(args?: SelectSubset<T, SuppliersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Suppliers.
     * @param {SuppliersDeleteArgs} args - Arguments to delete one Suppliers.
     * @example
     * // Delete one Suppliers
     * const Suppliers = await prisma.suppliers.delete({
     *   where: {
     *     // ... filter to delete one Suppliers
     *   }
     * })
     * 
     */
    delete<T extends SuppliersDeleteArgs>(args: SelectSubset<T, SuppliersDeleteArgs<ExtArgs>>): Prisma__SuppliersClient<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Suppliers.
     * @param {SuppliersUpdateArgs} args - Arguments to update one Suppliers.
     * @example
     * // Update one Suppliers
     * const suppliers = await prisma.suppliers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SuppliersUpdateArgs>(args: SelectSubset<T, SuppliersUpdateArgs<ExtArgs>>): Prisma__SuppliersClient<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {SuppliersDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.suppliers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SuppliersDeleteManyArgs>(args?: SelectSubset<T, SuppliersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const suppliers = await prisma.suppliers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SuppliersUpdateManyArgs>(args: SelectSubset<T, SuppliersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers and returns the data updated in the database.
     * @param {SuppliersUpdateManyAndReturnArgs} args - Arguments to update many Suppliers.
     * @example
     * // Update many Suppliers
     * const suppliers = await prisma.suppliers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suppliers and only return the `id`
     * const suppliersWithIdOnly = await prisma.suppliers.updateManyAndReturn({
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
    updateManyAndReturn<T extends SuppliersUpdateManyAndReturnArgs>(args: SelectSubset<T, SuppliersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Suppliers.
     * @param {SuppliersUpsertArgs} args - Arguments to update or create a Suppliers.
     * @example
     * // Update or create a Suppliers
     * const suppliers = await prisma.suppliers.upsert({
     *   create: {
     *     // ... data to create a Suppliers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Suppliers we want to update
     *   }
     * })
     */
    upsert<T extends SuppliersUpsertArgs>(args: SelectSubset<T, SuppliersUpsertArgs<ExtArgs>>): Prisma__SuppliersClient<$Result.GetResult<Prisma.$SuppliersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.suppliers.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SuppliersCountArgs>(
      args?: Subset<T, SuppliersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SuppliersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SuppliersAggregateArgs>(args: Subset<T, SuppliersAggregateArgs>): Prisma.PrismaPromise<GetSuppliersAggregateType<T>>

    /**
     * Group by Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SuppliersGroupByArgs} args - Group by arguments.
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
      T extends SuppliersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SuppliersGroupByArgs['orderBy'] }
        : { orderBy?: SuppliersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SuppliersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSuppliersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Suppliers model
   */
  readonly fields: SuppliersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Suppliers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SuppliersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Suppliers$productsArgs<ExtArgs> = {}>(args?: Subset<T, Suppliers$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Suppliers model
   */
  interface SuppliersFieldRefs {
    readonly id: FieldRef<"Suppliers", 'String'>
    readonly company_fantasy: FieldRef<"Suppliers", 'String'>
    readonly company_reason: FieldRef<"Suppliers", 'String'>
    readonly company_acronym: FieldRef<"Suppliers", 'String'>
    readonly cnpj: FieldRef<"Suppliers", 'String'>
    readonly email: FieldRef<"Suppliers", 'String'>
    readonly phone: FieldRef<"Suppliers", 'String'>
    readonly is_active: FieldRef<"Suppliers", 'Boolean'>
    readonly created_at: FieldRef<"Suppliers", 'DateTime'>
    readonly updated_at: FieldRef<"Suppliers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Suppliers findUnique
   */
  export type SuppliersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuppliersInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where: SuppliersWhereUniqueInput
  }

  /**
   * Suppliers findUniqueOrThrow
   */
  export type SuppliersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuppliersInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where: SuppliersWhereUniqueInput
  }

  /**
   * Suppliers findFirst
   */
  export type SuppliersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuppliersInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SuppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SuppliersOrderByWithRelationInput | SuppliersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SuppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SuppliersScalarFieldEnum | SuppliersScalarFieldEnum[]
  }

  /**
   * Suppliers findFirstOrThrow
   */
  export type SuppliersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuppliersInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SuppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SuppliersOrderByWithRelationInput | SuppliersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SuppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SuppliersScalarFieldEnum | SuppliersScalarFieldEnum[]
  }

  /**
   * Suppliers findMany
   */
  export type SuppliersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuppliersInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SuppliersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SuppliersOrderByWithRelationInput | SuppliersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     */
    cursor?: SuppliersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    distinct?: SuppliersScalarFieldEnum | SuppliersScalarFieldEnum[]
  }

  /**
   * Suppliers create
   */
  export type SuppliersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuppliersInclude<ExtArgs> | null
    /**
     * The data needed to create a Suppliers.
     */
    data: XOR<SuppliersCreateInput, SuppliersUncheckedCreateInput>
  }

  /**
   * Suppliers createMany
   */
  export type SuppliersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: SuppliersCreateManyInput | SuppliersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Suppliers createManyAndReturn
   */
  export type SuppliersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * The data used to create many Suppliers.
     */
    data: SuppliersCreateManyInput | SuppliersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Suppliers update
   */
  export type SuppliersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuppliersInclude<ExtArgs> | null
    /**
     * The data needed to update a Suppliers.
     */
    data: XOR<SuppliersUpdateInput, SuppliersUncheckedUpdateInput>
    /**
     * Choose, which Suppliers to update.
     */
    where: SuppliersWhereUniqueInput
  }

  /**
   * Suppliers updateMany
   */
  export type SuppliersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SuppliersUpdateManyMutationInput, SuppliersUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SuppliersWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Suppliers updateManyAndReturn
   */
  export type SuppliersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SuppliersUpdateManyMutationInput, SuppliersUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SuppliersWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Suppliers upsert
   */
  export type SuppliersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuppliersInclude<ExtArgs> | null
    /**
     * The filter to search for the Suppliers to update in case it exists.
     */
    where: SuppliersWhereUniqueInput
    /**
     * In case the Suppliers found by the `where` argument doesn't exist, create a new Suppliers with this data.
     */
    create: XOR<SuppliersCreateInput, SuppliersUncheckedCreateInput>
    /**
     * In case the Suppliers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SuppliersUpdateInput, SuppliersUncheckedUpdateInput>
  }

  /**
   * Suppliers delete
   */
  export type SuppliersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuppliersInclude<ExtArgs> | null
    /**
     * Filter which Suppliers to delete.
     */
    where: SuppliersWhereUniqueInput
  }

  /**
   * Suppliers deleteMany
   */
  export type SuppliersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: SuppliersWhereInput
    /**
     * Limit how many Suppliers to delete.
     */
    limit?: number
  }

  /**
   * Suppliers.products
   */
  export type Suppliers$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Products
     */
    select?: ProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Products
     */
    omit?: ProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsInclude<ExtArgs> | null
    where?: ProductsWhereInput
    orderBy?: ProductsOrderByWithRelationInput | ProductsOrderByWithRelationInput[]
    cursor?: ProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * Suppliers without action
   */
  export type SuppliersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Suppliers
     */
    select?: SuppliersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Suppliers
     */
    omit?: SuppliersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SuppliersInclude<ExtArgs> | null
  }


  /**
   * Model Orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    gross_value: number | null
    net_value: number | null
    shipping_price: number | null
  }

  export type OrdersSumAggregateOutputType = {
    gross_value: number | null
    net_value: number | null
    shipping_price: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: string | null
    release_date: Date | null
    completion_date: Date | null
    status_id: string | null
    cancellation_date: Date | null
    delivery_date: Date | null
    gross_value: number | null
    net_value: number | null
    shipping_price: number | null
    type_sale: string | null
    cep_addres: string | null
    addres_number: string | null
    delivery_code: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: string | null
    release_date: Date | null
    completion_date: Date | null
    status_id: string | null
    cancellation_date: Date | null
    delivery_date: Date | null
    gross_value: number | null
    net_value: number | null
    shipping_price: number | null
    type_sale: string | null
    cep_addres: string | null
    addres_number: string | null
    delivery_code: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    release_date: number
    completion_date: number
    status_id: number
    cancellation_date: number
    delivery_date: number
    gross_value: number
    net_value: number
    shipping_price: number
    type_sale: number
    cep_addres: number
    addres_number: number
    delivery_code: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    gross_value?: true
    net_value?: true
    shipping_price?: true
  }

  export type OrdersSumAggregateInputType = {
    gross_value?: true
    net_value?: true
    shipping_price?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    release_date?: true
    completion_date?: true
    status_id?: true
    cancellation_date?: true
    delivery_date?: true
    gross_value?: true
    net_value?: true
    shipping_price?: true
    type_sale?: true
    cep_addres?: true
    addres_number?: true
    delivery_code?: true
    created_at?: true
    updated_at?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    release_date?: true
    completion_date?: true
    status_id?: true
    cancellation_date?: true
    delivery_date?: true
    gross_value?: true
    net_value?: true
    shipping_price?: true
    type_sale?: true
    cep_addres?: true
    addres_number?: true
    delivery_code?: true
    created_at?: true
    updated_at?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    release_date?: true
    completion_date?: true
    status_id?: true
    cancellation_date?: true
    delivery_date?: true
    gross_value?: true
    net_value?: true
    shipping_price?: true
    type_sale?: true
    cep_addres?: true
    addres_number?: true
    delivery_code?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to aggregate.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type OrdersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithAggregationInput | OrdersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: OrdersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: string
    release_date: Date
    completion_date: Date
    status_id: string
    cancellation_date: Date | null
    delivery_date: Date | null
    gross_value: number
    net_value: number
    shipping_price: number
    type_sale: string
    cep_addres: string | null
    addres_number: string | null
    delivery_code: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends OrdersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type OrdersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    release_date?: boolean
    completion_date?: boolean
    status_id?: boolean
    cancellation_date?: boolean
    delivery_date?: boolean
    gross_value?: boolean
    net_value?: boolean
    shipping_price?: boolean
    type_sale?: boolean
    cep_addres?: boolean
    addres_number?: boolean
    delivery_code?: boolean
    created_at?: boolean
    updated_at?: boolean
    status?: boolean | StatusDefaultArgs<ExtArgs>
    items?: boolean | Orders$itemsArgs<ExtArgs>
    method_payments?: boolean | Orders$method_paymentsArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    release_date?: boolean
    completion_date?: boolean
    status_id?: boolean
    cancellation_date?: boolean
    delivery_date?: boolean
    gross_value?: boolean
    net_value?: boolean
    shipping_price?: boolean
    type_sale?: boolean
    cep_addres?: boolean
    addres_number?: boolean
    delivery_code?: boolean
    created_at?: boolean
    updated_at?: boolean
    status?: boolean | StatusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    release_date?: boolean
    completion_date?: boolean
    status_id?: boolean
    cancellation_date?: boolean
    delivery_date?: boolean
    gross_value?: boolean
    net_value?: boolean
    shipping_price?: boolean
    type_sale?: boolean
    cep_addres?: boolean
    addres_number?: boolean
    delivery_code?: boolean
    created_at?: boolean
    updated_at?: boolean
    status?: boolean | StatusDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type OrdersSelectScalar = {
    id?: boolean
    release_date?: boolean
    completion_date?: boolean
    status_id?: boolean
    cancellation_date?: boolean
    delivery_date?: boolean
    gross_value?: boolean
    net_value?: boolean
    shipping_price?: boolean
    type_sale?: boolean
    cep_addres?: boolean
    addres_number?: boolean
    delivery_code?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type OrdersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "release_date" | "completion_date" | "status_id" | "cancellation_date" | "delivery_date" | "gross_value" | "net_value" | "shipping_price" | "type_sale" | "cep_addres" | "addres_number" | "delivery_code" | "created_at" | "updated_at", ExtArgs["result"]["orders"]>
  export type OrdersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    status?: boolean | StatusDefaultArgs<ExtArgs>
    items?: boolean | Orders$itemsArgs<ExtArgs>
    method_payments?: boolean | Orders$method_paymentsArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrdersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    status?: boolean | StatusDefaultArgs<ExtArgs>
  }
  export type OrdersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    status?: boolean | StatusDefaultArgs<ExtArgs>
  }

  export type $OrdersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders"
    objects: {
      status: Prisma.$StatusPayload<ExtArgs>
      items: Prisma.$Orders_ItensPayload<ExtArgs> | null
      method_payments: Prisma.$Method_PaymentsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      release_date: Date
      completion_date: Date
      status_id: string
      cancellation_date: Date | null
      delivery_date: Date | null
      gross_value: number
      net_value: number
      shipping_price: number
      type_sale: string
      cep_addres: string | null
      addres_number: string | null
      delivery_code: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type OrdersGetPayload<S extends boolean | null | undefined | OrdersDefaultArgs> = $Result.GetResult<Prisma.$OrdersPayload, S>

  type OrdersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrdersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface OrdersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders'], meta: { name: 'Orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {OrdersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrdersFindUniqueArgs>(args: SelectSubset<T, OrdersFindUniqueArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrdersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrdersFindUniqueOrThrowArgs>(args: SelectSubset<T, OrdersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrdersFindFirstArgs>(args?: SelectSubset<T, OrdersFindFirstArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrdersFindFirstOrThrowArgs>(args?: SelectSubset<T, OrdersFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrdersFindManyArgs>(args?: SelectSubset<T, OrdersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {OrdersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends OrdersCreateArgs>(args: SelectSubset<T, OrdersCreateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrdersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrdersCreateManyArgs>(args?: SelectSubset<T, OrdersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrdersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrdersCreateManyAndReturnArgs>(args?: SelectSubset<T, OrdersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {OrdersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends OrdersDeleteArgs>(args: SelectSubset<T, OrdersDeleteArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {OrdersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrdersUpdateArgs>(args: SelectSubset<T, OrdersUpdateArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrdersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrdersDeleteManyArgs>(args?: SelectSubset<T, OrdersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrdersUpdateManyArgs>(args: SelectSubset<T, OrdersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrdersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrdersUpdateManyAndReturnArgs>(args: SelectSubset<T, OrdersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {OrdersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends OrdersUpsertArgs>(args: SelectSubset<T, OrdersUpsertArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrdersCountArgs>(
      args?: Subset<T, OrdersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersGroupByArgs} args - Group by arguments.
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
      T extends OrdersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrdersGroupByArgs['orderBy'] }
        : { orderBy?: OrdersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrdersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders model
   */
  readonly fields: OrdersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrdersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    status<T extends StatusDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StatusDefaultArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends Orders$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Orders$itemsArgs<ExtArgs>>): Prisma__Orders_ItensClient<$Result.GetResult<Prisma.$Orders_ItensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    method_payments<T extends Orders$method_paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Orders$method_paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Method_PaymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Orders model
   */
  interface OrdersFieldRefs {
    readonly id: FieldRef<"Orders", 'String'>
    readonly release_date: FieldRef<"Orders", 'DateTime'>
    readonly completion_date: FieldRef<"Orders", 'DateTime'>
    readonly status_id: FieldRef<"Orders", 'String'>
    readonly cancellation_date: FieldRef<"Orders", 'DateTime'>
    readonly delivery_date: FieldRef<"Orders", 'DateTime'>
    readonly gross_value: FieldRef<"Orders", 'Float'>
    readonly net_value: FieldRef<"Orders", 'Float'>
    readonly shipping_price: FieldRef<"Orders", 'Float'>
    readonly type_sale: FieldRef<"Orders", 'String'>
    readonly cep_addres: FieldRef<"Orders", 'String'>
    readonly addres_number: FieldRef<"Orders", 'String'>
    readonly delivery_code: FieldRef<"Orders", 'String'>
    readonly created_at: FieldRef<"Orders", 'DateTime'>
    readonly updated_at: FieldRef<"Orders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Orders findUnique
   */
  export type OrdersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findUniqueOrThrow
   */
  export type OrdersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders findFirst
   */
  export type OrdersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findFirstOrThrow
   */
  export type OrdersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders findMany
   */
  export type OrdersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrdersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrdersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Orders create
   */
  export type OrdersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders.
     */
    data: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
  }

  /**
   * Orders createMany
   */
  export type OrdersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orders createManyAndReturn
   */
  export type OrdersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrdersCreateManyInput | OrdersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders update
   */
  export type OrdersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders.
     */
    data: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
    /**
     * Choose, which Orders to update.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders updateMany
   */
  export type OrdersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Orders updateManyAndReturn
   */
  export type OrdersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders upsert
   */
  export type OrdersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders to update in case it exists.
     */
    where: OrdersWhereUniqueInput
    /**
     * In case the Orders found by the `where` argument doesn't exist, create a new Orders with this data.
     */
    create: XOR<OrdersCreateInput, OrdersUncheckedCreateInput>
    /**
     * In case the Orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrdersUpdateInput, OrdersUncheckedUpdateInput>
  }

  /**
   * Orders delete
   */
  export type OrdersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    /**
     * Filter which Orders to delete.
     */
    where: OrdersWhereUniqueInput
  }

  /**
   * Orders deleteMany
   */
  export type OrdersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrdersWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Orders.items
   */
  export type Orders$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders_Itens
     */
    select?: Orders_ItensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders_Itens
     */
    omit?: Orders_ItensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Orders_ItensInclude<ExtArgs> | null
    where?: Orders_ItensWhereInput
  }

  /**
   * Orders.method_payments
   */
  export type Orders$method_paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Method_Payments
     */
    select?: Method_PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Method_Payments
     */
    omit?: Method_PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Method_PaymentsInclude<ExtArgs> | null
    where?: Method_PaymentsWhereInput
    orderBy?: Method_PaymentsOrderByWithRelationInput | Method_PaymentsOrderByWithRelationInput[]
    cursor?: Method_PaymentsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Method_PaymentsScalarFieldEnum | Method_PaymentsScalarFieldEnum[]
  }

  /**
   * Orders without action
   */
  export type OrdersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
  }


  /**
   * Model Status
   */

  export type AggregateStatus = {
    _count: StatusCountAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  export type StatusMinAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StatusMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type StatusCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type StatusMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type StatusMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type StatusCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type StatusAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Status to aggregate.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Statuses
    **/
    _count?: true | StatusCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StatusMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StatusMaxAggregateInputType
  }

  export type GetStatusAggregateType<T extends StatusAggregateArgs> = {
        [P in keyof T & keyof AggregateStatus]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStatus[P]>
      : GetScalarType<T[P], AggregateStatus[P]>
  }




  export type StatusGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StatusWhereInput
    orderBy?: StatusOrderByWithAggregationInput | StatusOrderByWithAggregationInput[]
    by: StatusScalarFieldEnum[] | StatusScalarFieldEnum
    having?: StatusScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StatusCountAggregateInputType | true
    _min?: StatusMinAggregateInputType
    _max?: StatusMaxAggregateInputType
  }

  export type StatusGroupByOutputType = {
    id: string
    name: string
    created_at: Date | null
    updated_at: Date | null
    _count: StatusCountAggregateOutputType | null
    _min: StatusMinAggregateOutputType | null
    _max: StatusMaxAggregateOutputType | null
  }

  type GetStatusGroupByPayload<T extends StatusGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StatusGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StatusGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StatusGroupByOutputType[P]>
            : GetScalarType<T[P], StatusGroupByOutputType[P]>
        }
      >
    >


  export type StatusSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    Orders?: boolean | Status$OrdersArgs<ExtArgs>
    _count?: boolean | StatusCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["status"]>

  export type StatusSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["status"]>

  export type StatusSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["status"]>

  export type StatusSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type StatusOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["status"]>
  export type StatusInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Orders?: boolean | Status$OrdersArgs<ExtArgs>
    _count?: boolean | StatusCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StatusIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StatusIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StatusPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Status"
    objects: {
      Orders: Prisma.$OrdersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["status"]>
    composites: {}
  }

  type StatusGetPayload<S extends boolean | null | undefined | StatusDefaultArgs> = $Result.GetResult<Prisma.$StatusPayload, S>

  type StatusCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StatusFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StatusCountAggregateInputType | true
    }

  export interface StatusDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Status'], meta: { name: 'Status' } }
    /**
     * Find zero or one Status that matches the filter.
     * @param {StatusFindUniqueArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StatusFindUniqueArgs>(args: SelectSubset<T, StatusFindUniqueArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Status that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StatusFindUniqueOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StatusFindUniqueOrThrowArgs>(args: SelectSubset<T, StatusFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Status that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindFirstArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StatusFindFirstArgs>(args?: SelectSubset<T, StatusFindFirstArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Status that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindFirstOrThrowArgs} args - Arguments to find a Status
     * @example
     * // Get one Status
     * const status = await prisma.status.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StatusFindFirstOrThrowArgs>(args?: SelectSubset<T, StatusFindFirstOrThrowArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Statuses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Statuses
     * const statuses = await prisma.status.findMany()
     * 
     * // Get first 10 Statuses
     * const statuses = await prisma.status.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const statusWithIdOnly = await prisma.status.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StatusFindManyArgs>(args?: SelectSubset<T, StatusFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Status.
     * @param {StatusCreateArgs} args - Arguments to create a Status.
     * @example
     * // Create one Status
     * const Status = await prisma.status.create({
     *   data: {
     *     // ... data to create a Status
     *   }
     * })
     * 
     */
    create<T extends StatusCreateArgs>(args: SelectSubset<T, StatusCreateArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Statuses.
     * @param {StatusCreateManyArgs} args - Arguments to create many Statuses.
     * @example
     * // Create many Statuses
     * const status = await prisma.status.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StatusCreateManyArgs>(args?: SelectSubset<T, StatusCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Statuses and returns the data saved in the database.
     * @param {StatusCreateManyAndReturnArgs} args - Arguments to create many Statuses.
     * @example
     * // Create many Statuses
     * const status = await prisma.status.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Statuses and only return the `id`
     * const statusWithIdOnly = await prisma.status.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StatusCreateManyAndReturnArgs>(args?: SelectSubset<T, StatusCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Status.
     * @param {StatusDeleteArgs} args - Arguments to delete one Status.
     * @example
     * // Delete one Status
     * const Status = await prisma.status.delete({
     *   where: {
     *     // ... filter to delete one Status
     *   }
     * })
     * 
     */
    delete<T extends StatusDeleteArgs>(args: SelectSubset<T, StatusDeleteArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Status.
     * @param {StatusUpdateArgs} args - Arguments to update one Status.
     * @example
     * // Update one Status
     * const status = await prisma.status.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StatusUpdateArgs>(args: SelectSubset<T, StatusUpdateArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Statuses.
     * @param {StatusDeleteManyArgs} args - Arguments to filter Statuses to delete.
     * @example
     * // Delete a few Statuses
     * const { count } = await prisma.status.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StatusDeleteManyArgs>(args?: SelectSubset<T, StatusDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Statuses
     * const status = await prisma.status.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StatusUpdateManyArgs>(args: SelectSubset<T, StatusUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Statuses and returns the data updated in the database.
     * @param {StatusUpdateManyAndReturnArgs} args - Arguments to update many Statuses.
     * @example
     * // Update many Statuses
     * const status = await prisma.status.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Statuses and only return the `id`
     * const statusWithIdOnly = await prisma.status.updateManyAndReturn({
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
    updateManyAndReturn<T extends StatusUpdateManyAndReturnArgs>(args: SelectSubset<T, StatusUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Status.
     * @param {StatusUpsertArgs} args - Arguments to update or create a Status.
     * @example
     * // Update or create a Status
     * const status = await prisma.status.upsert({
     *   create: {
     *     // ... data to create a Status
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Status we want to update
     *   }
     * })
     */
    upsert<T extends StatusUpsertArgs>(args: SelectSubset<T, StatusUpsertArgs<ExtArgs>>): Prisma__StatusClient<$Result.GetResult<Prisma.$StatusPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Statuses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusCountArgs} args - Arguments to filter Statuses to count.
     * @example
     * // Count the number of Statuses
     * const count = await prisma.status.count({
     *   where: {
     *     // ... the filter for the Statuses we want to count
     *   }
     * })
    **/
    count<T extends StatusCountArgs>(
      args?: Subset<T, StatusCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StatusCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StatusAggregateArgs>(args: Subset<T, StatusAggregateArgs>): Prisma.PrismaPromise<GetStatusAggregateType<T>>

    /**
     * Group by Status.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StatusGroupByArgs} args - Group by arguments.
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
      T extends StatusGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StatusGroupByArgs['orderBy'] }
        : { orderBy?: StatusGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StatusGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatusGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Status model
   */
  readonly fields: StatusFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Status.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StatusClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Orders<T extends Status$OrdersArgs<ExtArgs> = {}>(args?: Subset<T, Status$OrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Status model
   */
  interface StatusFieldRefs {
    readonly id: FieldRef<"Status", 'String'>
    readonly name: FieldRef<"Status", 'String'>
    readonly created_at: FieldRef<"Status", 'DateTime'>
    readonly updated_at: FieldRef<"Status", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Status findUnique
   */
  export type StatusFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status findUniqueOrThrow
   */
  export type StatusFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status findFirst
   */
  export type StatusFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statuses.
     */
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * Status findFirstOrThrow
   */
  export type StatusFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Status to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Statuses.
     */
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * Status findMany
   */
  export type StatusFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter, which Statuses to fetch.
     */
    where?: StatusWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Statuses to fetch.
     */
    orderBy?: StatusOrderByWithRelationInput | StatusOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Statuses.
     */
    cursor?: StatusWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Statuses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Statuses.
     */
    skip?: number
    distinct?: StatusScalarFieldEnum | StatusScalarFieldEnum[]
  }

  /**
   * Status create
   */
  export type StatusCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * The data needed to create a Status.
     */
    data: XOR<StatusCreateInput, StatusUncheckedCreateInput>
  }

  /**
   * Status createMany
   */
  export type StatusCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Statuses.
     */
    data: StatusCreateManyInput | StatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Status createManyAndReturn
   */
  export type StatusCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * The data used to create many Statuses.
     */
    data: StatusCreateManyInput | StatusCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Status update
   */
  export type StatusUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * The data needed to update a Status.
     */
    data: XOR<StatusUpdateInput, StatusUncheckedUpdateInput>
    /**
     * Choose, which Status to update.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status updateMany
   */
  export type StatusUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Statuses.
     */
    data: XOR<StatusUpdateManyMutationInput, StatusUncheckedUpdateManyInput>
    /**
     * Filter which Statuses to update
     */
    where?: StatusWhereInput
    /**
     * Limit how many Statuses to update.
     */
    limit?: number
  }

  /**
   * Status updateManyAndReturn
   */
  export type StatusUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * The data used to update Statuses.
     */
    data: XOR<StatusUpdateManyMutationInput, StatusUncheckedUpdateManyInput>
    /**
     * Filter which Statuses to update
     */
    where?: StatusWhereInput
    /**
     * Limit how many Statuses to update.
     */
    limit?: number
  }

  /**
   * Status upsert
   */
  export type StatusUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * The filter to search for the Status to update in case it exists.
     */
    where: StatusWhereUniqueInput
    /**
     * In case the Status found by the `where` argument doesn't exist, create a new Status with this data.
     */
    create: XOR<StatusCreateInput, StatusUncheckedCreateInput>
    /**
     * In case the Status was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StatusUpdateInput, StatusUncheckedUpdateInput>
  }

  /**
   * Status delete
   */
  export type StatusDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
    /**
     * Filter which Status to delete.
     */
    where: StatusWhereUniqueInput
  }

  /**
   * Status deleteMany
   */
  export type StatusDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Statuses to delete
     */
    where?: StatusWhereInput
    /**
     * Limit how many Statuses to delete.
     */
    limit?: number
  }

  /**
   * Status.Orders
   */
  export type Status$OrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Status without action
   */
  export type StatusDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Status
     */
    select?: StatusSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Status
     */
    omit?: StatusOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StatusInclude<ExtArgs> | null
  }


  /**
   * Model Method_Payments
   */

  export type AggregateMethod_Payments = {
    _count: Method_PaymentsCountAggregateOutputType | null
    _min: Method_PaymentsMinAggregateOutputType | null
    _max: Method_PaymentsMaxAggregateOutputType | null
  }

  export type Method_PaymentsMinAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Method_PaymentsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Method_PaymentsCountAggregateOutputType = {
    id: number
    name: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Method_PaymentsMinAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type Method_PaymentsMaxAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
  }

  export type Method_PaymentsCountAggregateInputType = {
    id?: true
    name?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Method_PaymentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Method_Payments to aggregate.
     */
    where?: Method_PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Method_Payments to fetch.
     */
    orderBy?: Method_PaymentsOrderByWithRelationInput | Method_PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Method_PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Method_Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Method_Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Method_Payments
    **/
    _count?: true | Method_PaymentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Method_PaymentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Method_PaymentsMaxAggregateInputType
  }

  export type GetMethod_PaymentsAggregateType<T extends Method_PaymentsAggregateArgs> = {
        [P in keyof T & keyof AggregateMethod_Payments]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMethod_Payments[P]>
      : GetScalarType<T[P], AggregateMethod_Payments[P]>
  }




  export type Method_PaymentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Method_PaymentsWhereInput
    orderBy?: Method_PaymentsOrderByWithAggregationInput | Method_PaymentsOrderByWithAggregationInput[]
    by: Method_PaymentsScalarFieldEnum[] | Method_PaymentsScalarFieldEnum
    having?: Method_PaymentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Method_PaymentsCountAggregateInputType | true
    _min?: Method_PaymentsMinAggregateInputType
    _max?: Method_PaymentsMaxAggregateInputType
  }

  export type Method_PaymentsGroupByOutputType = {
    id: string
    name: string
    created_at: Date | null
    updated_at: Date | null
    _count: Method_PaymentsCountAggregateOutputType | null
    _min: Method_PaymentsMinAggregateOutputType | null
    _max: Method_PaymentsMaxAggregateOutputType | null
  }

  type GetMethod_PaymentsGroupByPayload<T extends Method_PaymentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Method_PaymentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Method_PaymentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Method_PaymentsGroupByOutputType[P]>
            : GetScalarType<T[P], Method_PaymentsGroupByOutputType[P]>
        }
      >
    >


  export type Method_PaymentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
    orders?: boolean | Method_Payments$ordersArgs<ExtArgs>
    _count?: boolean | Method_PaymentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["method_Payments"]>

  export type Method_PaymentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["method_Payments"]>

  export type Method_PaymentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["method_Payments"]>

  export type Method_PaymentsSelectScalar = {
    id?: boolean
    name?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type Method_PaymentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "created_at" | "updated_at", ExtArgs["result"]["method_Payments"]>
  export type Method_PaymentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Method_Payments$ordersArgs<ExtArgs>
    _count?: boolean | Method_PaymentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type Method_PaymentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type Method_PaymentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $Method_PaymentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Method_Payments"
    objects: {
      orders: Prisma.$OrdersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["method_Payments"]>
    composites: {}
  }

  type Method_PaymentsGetPayload<S extends boolean | null | undefined | Method_PaymentsDefaultArgs> = $Result.GetResult<Prisma.$Method_PaymentsPayload, S>

  type Method_PaymentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Method_PaymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Method_PaymentsCountAggregateInputType | true
    }

  export interface Method_PaymentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Method_Payments'], meta: { name: 'Method_Payments' } }
    /**
     * Find zero or one Method_Payments that matches the filter.
     * @param {Method_PaymentsFindUniqueArgs} args - Arguments to find a Method_Payments
     * @example
     * // Get one Method_Payments
     * const method_Payments = await prisma.method_Payments.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Method_PaymentsFindUniqueArgs>(args: SelectSubset<T, Method_PaymentsFindUniqueArgs<ExtArgs>>): Prisma__Method_PaymentsClient<$Result.GetResult<Prisma.$Method_PaymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Method_Payments that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Method_PaymentsFindUniqueOrThrowArgs} args - Arguments to find a Method_Payments
     * @example
     * // Get one Method_Payments
     * const method_Payments = await prisma.method_Payments.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Method_PaymentsFindUniqueOrThrowArgs>(args: SelectSubset<T, Method_PaymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Method_PaymentsClient<$Result.GetResult<Prisma.$Method_PaymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Method_Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Method_PaymentsFindFirstArgs} args - Arguments to find a Method_Payments
     * @example
     * // Get one Method_Payments
     * const method_Payments = await prisma.method_Payments.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Method_PaymentsFindFirstArgs>(args?: SelectSubset<T, Method_PaymentsFindFirstArgs<ExtArgs>>): Prisma__Method_PaymentsClient<$Result.GetResult<Prisma.$Method_PaymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Method_Payments that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Method_PaymentsFindFirstOrThrowArgs} args - Arguments to find a Method_Payments
     * @example
     * // Get one Method_Payments
     * const method_Payments = await prisma.method_Payments.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Method_PaymentsFindFirstOrThrowArgs>(args?: SelectSubset<T, Method_PaymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Method_PaymentsClient<$Result.GetResult<Prisma.$Method_PaymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Method_Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Method_PaymentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Method_Payments
     * const method_Payments = await prisma.method_Payments.findMany()
     * 
     * // Get first 10 Method_Payments
     * const method_Payments = await prisma.method_Payments.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const method_PaymentsWithIdOnly = await prisma.method_Payments.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Method_PaymentsFindManyArgs>(args?: SelectSubset<T, Method_PaymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Method_PaymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Method_Payments.
     * @param {Method_PaymentsCreateArgs} args - Arguments to create a Method_Payments.
     * @example
     * // Create one Method_Payments
     * const Method_Payments = await prisma.method_Payments.create({
     *   data: {
     *     // ... data to create a Method_Payments
     *   }
     * })
     * 
     */
    create<T extends Method_PaymentsCreateArgs>(args: SelectSubset<T, Method_PaymentsCreateArgs<ExtArgs>>): Prisma__Method_PaymentsClient<$Result.GetResult<Prisma.$Method_PaymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Method_Payments.
     * @param {Method_PaymentsCreateManyArgs} args - Arguments to create many Method_Payments.
     * @example
     * // Create many Method_Payments
     * const method_Payments = await prisma.method_Payments.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Method_PaymentsCreateManyArgs>(args?: SelectSubset<T, Method_PaymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Method_Payments and returns the data saved in the database.
     * @param {Method_PaymentsCreateManyAndReturnArgs} args - Arguments to create many Method_Payments.
     * @example
     * // Create many Method_Payments
     * const method_Payments = await prisma.method_Payments.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Method_Payments and only return the `id`
     * const method_PaymentsWithIdOnly = await prisma.method_Payments.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Method_PaymentsCreateManyAndReturnArgs>(args?: SelectSubset<T, Method_PaymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Method_PaymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Method_Payments.
     * @param {Method_PaymentsDeleteArgs} args - Arguments to delete one Method_Payments.
     * @example
     * // Delete one Method_Payments
     * const Method_Payments = await prisma.method_Payments.delete({
     *   where: {
     *     // ... filter to delete one Method_Payments
     *   }
     * })
     * 
     */
    delete<T extends Method_PaymentsDeleteArgs>(args: SelectSubset<T, Method_PaymentsDeleteArgs<ExtArgs>>): Prisma__Method_PaymentsClient<$Result.GetResult<Prisma.$Method_PaymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Method_Payments.
     * @param {Method_PaymentsUpdateArgs} args - Arguments to update one Method_Payments.
     * @example
     * // Update one Method_Payments
     * const method_Payments = await prisma.method_Payments.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Method_PaymentsUpdateArgs>(args: SelectSubset<T, Method_PaymentsUpdateArgs<ExtArgs>>): Prisma__Method_PaymentsClient<$Result.GetResult<Prisma.$Method_PaymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Method_Payments.
     * @param {Method_PaymentsDeleteManyArgs} args - Arguments to filter Method_Payments to delete.
     * @example
     * // Delete a few Method_Payments
     * const { count } = await prisma.method_Payments.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Method_PaymentsDeleteManyArgs>(args?: SelectSubset<T, Method_PaymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Method_Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Method_PaymentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Method_Payments
     * const method_Payments = await prisma.method_Payments.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Method_PaymentsUpdateManyArgs>(args: SelectSubset<T, Method_PaymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Method_Payments and returns the data updated in the database.
     * @param {Method_PaymentsUpdateManyAndReturnArgs} args - Arguments to update many Method_Payments.
     * @example
     * // Update many Method_Payments
     * const method_Payments = await prisma.method_Payments.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Method_Payments and only return the `id`
     * const method_PaymentsWithIdOnly = await prisma.method_Payments.updateManyAndReturn({
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
    updateManyAndReturn<T extends Method_PaymentsUpdateManyAndReturnArgs>(args: SelectSubset<T, Method_PaymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Method_PaymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Method_Payments.
     * @param {Method_PaymentsUpsertArgs} args - Arguments to update or create a Method_Payments.
     * @example
     * // Update or create a Method_Payments
     * const method_Payments = await prisma.method_Payments.upsert({
     *   create: {
     *     // ... data to create a Method_Payments
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Method_Payments we want to update
     *   }
     * })
     */
    upsert<T extends Method_PaymentsUpsertArgs>(args: SelectSubset<T, Method_PaymentsUpsertArgs<ExtArgs>>): Prisma__Method_PaymentsClient<$Result.GetResult<Prisma.$Method_PaymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Method_Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Method_PaymentsCountArgs} args - Arguments to filter Method_Payments to count.
     * @example
     * // Count the number of Method_Payments
     * const count = await prisma.method_Payments.count({
     *   where: {
     *     // ... the filter for the Method_Payments we want to count
     *   }
     * })
    **/
    count<T extends Method_PaymentsCountArgs>(
      args?: Subset<T, Method_PaymentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Method_PaymentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Method_Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Method_PaymentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Method_PaymentsAggregateArgs>(args: Subset<T, Method_PaymentsAggregateArgs>): Prisma.PrismaPromise<GetMethod_PaymentsAggregateType<T>>

    /**
     * Group by Method_Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Method_PaymentsGroupByArgs} args - Group by arguments.
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
      T extends Method_PaymentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Method_PaymentsGroupByArgs['orderBy'] }
        : { orderBy?: Method_PaymentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Method_PaymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMethod_PaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Method_Payments model
   */
  readonly fields: Method_PaymentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Method_Payments.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Method_PaymentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Method_Payments$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Method_Payments$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Method_Payments model
   */
  interface Method_PaymentsFieldRefs {
    readonly id: FieldRef<"Method_Payments", 'String'>
    readonly name: FieldRef<"Method_Payments", 'String'>
    readonly created_at: FieldRef<"Method_Payments", 'DateTime'>
    readonly updated_at: FieldRef<"Method_Payments", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Method_Payments findUnique
   */
  export type Method_PaymentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Method_Payments
     */
    select?: Method_PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Method_Payments
     */
    omit?: Method_PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Method_PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Method_Payments to fetch.
     */
    where: Method_PaymentsWhereUniqueInput
  }

  /**
   * Method_Payments findUniqueOrThrow
   */
  export type Method_PaymentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Method_Payments
     */
    select?: Method_PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Method_Payments
     */
    omit?: Method_PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Method_PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Method_Payments to fetch.
     */
    where: Method_PaymentsWhereUniqueInput
  }

  /**
   * Method_Payments findFirst
   */
  export type Method_PaymentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Method_Payments
     */
    select?: Method_PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Method_Payments
     */
    omit?: Method_PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Method_PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Method_Payments to fetch.
     */
    where?: Method_PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Method_Payments to fetch.
     */
    orderBy?: Method_PaymentsOrderByWithRelationInput | Method_PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Method_Payments.
     */
    cursor?: Method_PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Method_Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Method_Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Method_Payments.
     */
    distinct?: Method_PaymentsScalarFieldEnum | Method_PaymentsScalarFieldEnum[]
  }

  /**
   * Method_Payments findFirstOrThrow
   */
  export type Method_PaymentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Method_Payments
     */
    select?: Method_PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Method_Payments
     */
    omit?: Method_PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Method_PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Method_Payments to fetch.
     */
    where?: Method_PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Method_Payments to fetch.
     */
    orderBy?: Method_PaymentsOrderByWithRelationInput | Method_PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Method_Payments.
     */
    cursor?: Method_PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Method_Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Method_Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Method_Payments.
     */
    distinct?: Method_PaymentsScalarFieldEnum | Method_PaymentsScalarFieldEnum[]
  }

  /**
   * Method_Payments findMany
   */
  export type Method_PaymentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Method_Payments
     */
    select?: Method_PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Method_Payments
     */
    omit?: Method_PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Method_PaymentsInclude<ExtArgs> | null
    /**
     * Filter, which Method_Payments to fetch.
     */
    where?: Method_PaymentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Method_Payments to fetch.
     */
    orderBy?: Method_PaymentsOrderByWithRelationInput | Method_PaymentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Method_Payments.
     */
    cursor?: Method_PaymentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Method_Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Method_Payments.
     */
    skip?: number
    distinct?: Method_PaymentsScalarFieldEnum | Method_PaymentsScalarFieldEnum[]
  }

  /**
   * Method_Payments create
   */
  export type Method_PaymentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Method_Payments
     */
    select?: Method_PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Method_Payments
     */
    omit?: Method_PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Method_PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Method_Payments.
     */
    data: XOR<Method_PaymentsCreateInput, Method_PaymentsUncheckedCreateInput>
  }

  /**
   * Method_Payments createMany
   */
  export type Method_PaymentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Method_Payments.
     */
    data: Method_PaymentsCreateManyInput | Method_PaymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Method_Payments createManyAndReturn
   */
  export type Method_PaymentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Method_Payments
     */
    select?: Method_PaymentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Method_Payments
     */
    omit?: Method_PaymentsOmit<ExtArgs> | null
    /**
     * The data used to create many Method_Payments.
     */
    data: Method_PaymentsCreateManyInput | Method_PaymentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Method_Payments update
   */
  export type Method_PaymentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Method_Payments
     */
    select?: Method_PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Method_Payments
     */
    omit?: Method_PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Method_PaymentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Method_Payments.
     */
    data: XOR<Method_PaymentsUpdateInput, Method_PaymentsUncheckedUpdateInput>
    /**
     * Choose, which Method_Payments to update.
     */
    where: Method_PaymentsWhereUniqueInput
  }

  /**
   * Method_Payments updateMany
   */
  export type Method_PaymentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Method_Payments.
     */
    data: XOR<Method_PaymentsUpdateManyMutationInput, Method_PaymentsUncheckedUpdateManyInput>
    /**
     * Filter which Method_Payments to update
     */
    where?: Method_PaymentsWhereInput
    /**
     * Limit how many Method_Payments to update.
     */
    limit?: number
  }

  /**
   * Method_Payments updateManyAndReturn
   */
  export type Method_PaymentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Method_Payments
     */
    select?: Method_PaymentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Method_Payments
     */
    omit?: Method_PaymentsOmit<ExtArgs> | null
    /**
     * The data used to update Method_Payments.
     */
    data: XOR<Method_PaymentsUpdateManyMutationInput, Method_PaymentsUncheckedUpdateManyInput>
    /**
     * Filter which Method_Payments to update
     */
    where?: Method_PaymentsWhereInput
    /**
     * Limit how many Method_Payments to update.
     */
    limit?: number
  }

  /**
   * Method_Payments upsert
   */
  export type Method_PaymentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Method_Payments
     */
    select?: Method_PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Method_Payments
     */
    omit?: Method_PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Method_PaymentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Method_Payments to update in case it exists.
     */
    where: Method_PaymentsWhereUniqueInput
    /**
     * In case the Method_Payments found by the `where` argument doesn't exist, create a new Method_Payments with this data.
     */
    create: XOR<Method_PaymentsCreateInput, Method_PaymentsUncheckedCreateInput>
    /**
     * In case the Method_Payments was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Method_PaymentsUpdateInput, Method_PaymentsUncheckedUpdateInput>
  }

  /**
   * Method_Payments delete
   */
  export type Method_PaymentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Method_Payments
     */
    select?: Method_PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Method_Payments
     */
    omit?: Method_PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Method_PaymentsInclude<ExtArgs> | null
    /**
     * Filter which Method_Payments to delete.
     */
    where: Method_PaymentsWhereUniqueInput
  }

  /**
   * Method_Payments deleteMany
   */
  export type Method_PaymentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Method_Payments to delete
     */
    where?: Method_PaymentsWhereInput
    /**
     * Limit how many Method_Payments to delete.
     */
    limit?: number
  }

  /**
   * Method_Payments.orders
   */
  export type Method_Payments$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders
     */
    select?: OrdersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders
     */
    omit?: OrdersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrdersInclude<ExtArgs> | null
    where?: OrdersWhereInput
    orderBy?: OrdersOrderByWithRelationInput | OrdersOrderByWithRelationInput[]
    cursor?: OrdersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * Method_Payments without action
   */
  export type Method_PaymentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Method_Payments
     */
    select?: Method_PaymentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Method_Payments
     */
    omit?: Method_PaymentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Method_PaymentsInclude<ExtArgs> | null
  }


  /**
   * Model Orders_Itens
   */

  export type AggregateOrders_Itens = {
    _count: Orders_ItensCountAggregateOutputType | null
    _min: Orders_ItensMinAggregateOutputType | null
    _max: Orders_ItensMaxAggregateOutputType | null
  }

  export type Orders_ItensMinAggregateOutputType = {
    orders_id: string | null
    products_id: string | null
  }

  export type Orders_ItensMaxAggregateOutputType = {
    orders_id: string | null
    products_id: string | null
  }

  export type Orders_ItensCountAggregateOutputType = {
    orders_id: number
    products_id: number
    _all: number
  }


  export type Orders_ItensMinAggregateInputType = {
    orders_id?: true
    products_id?: true
  }

  export type Orders_ItensMaxAggregateInputType = {
    orders_id?: true
    products_id?: true
  }

  export type Orders_ItensCountAggregateInputType = {
    orders_id?: true
    products_id?: true
    _all?: true
  }

  export type Orders_ItensAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders_Itens to aggregate.
     */
    where?: Orders_ItensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders_Itens to fetch.
     */
    orderBy?: Orders_ItensOrderByWithRelationInput | Orders_ItensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Orders_ItensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders_Itens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders_Itens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders_Itens
    **/
    _count?: true | Orders_ItensCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Orders_ItensMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Orders_ItensMaxAggregateInputType
  }

  export type GetOrders_ItensAggregateType<T extends Orders_ItensAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders_Itens]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders_Itens[P]>
      : GetScalarType<T[P], AggregateOrders_Itens[P]>
  }




  export type Orders_ItensGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Orders_ItensWhereInput
    orderBy?: Orders_ItensOrderByWithAggregationInput | Orders_ItensOrderByWithAggregationInput[]
    by: Orders_ItensScalarFieldEnum[] | Orders_ItensScalarFieldEnum
    having?: Orders_ItensScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Orders_ItensCountAggregateInputType | true
    _min?: Orders_ItensMinAggregateInputType
    _max?: Orders_ItensMaxAggregateInputType
  }

  export type Orders_ItensGroupByOutputType = {
    orders_id: string
    products_id: string
    _count: Orders_ItensCountAggregateOutputType | null
    _min: Orders_ItensMinAggregateOutputType | null
    _max: Orders_ItensMaxAggregateOutputType | null
  }

  type GetOrders_ItensGroupByPayload<T extends Orders_ItensGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Orders_ItensGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Orders_ItensGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Orders_ItensGroupByOutputType[P]>
            : GetScalarType<T[P], Orders_ItensGroupByOutputType[P]>
        }
      >
    >


  export type Orders_ItensSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orders_id?: boolean
    products_id?: boolean
    Orders?: boolean | OrdersDefaultArgs<ExtArgs>
    Products?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders_Itens"]>

  export type Orders_ItensSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orders_id?: boolean
    products_id?: boolean
    Orders?: boolean | OrdersDefaultArgs<ExtArgs>
    Products?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders_Itens"]>

  export type Orders_ItensSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    orders_id?: boolean
    products_id?: boolean
    Orders?: boolean | OrdersDefaultArgs<ExtArgs>
    Products?: boolean | ProductsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders_Itens"]>

  export type Orders_ItensSelectScalar = {
    orders_id?: boolean
    products_id?: boolean
  }

  export type Orders_ItensOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"orders_id" | "products_id", ExtArgs["result"]["orders_Itens"]>
  export type Orders_ItensInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Orders?: boolean | OrdersDefaultArgs<ExtArgs>
    Products?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type Orders_ItensIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Orders?: boolean | OrdersDefaultArgs<ExtArgs>
    Products?: boolean | ProductsDefaultArgs<ExtArgs>
  }
  export type Orders_ItensIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Orders?: boolean | OrdersDefaultArgs<ExtArgs>
    Products?: boolean | ProductsDefaultArgs<ExtArgs>
  }

  export type $Orders_ItensPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Orders_Itens"
    objects: {
      Orders: Prisma.$OrdersPayload<ExtArgs>
      Products: Prisma.$ProductsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      orders_id: string
      products_id: string
    }, ExtArgs["result"]["orders_Itens"]>
    composites: {}
  }

  type Orders_ItensGetPayload<S extends boolean | null | undefined | Orders_ItensDefaultArgs> = $Result.GetResult<Prisma.$Orders_ItensPayload, S>

  type Orders_ItensCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Orders_ItensFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Orders_ItensCountAggregateInputType | true
    }

  export interface Orders_ItensDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Orders_Itens'], meta: { name: 'Orders_Itens' } }
    /**
     * Find zero or one Orders_Itens that matches the filter.
     * @param {Orders_ItensFindUniqueArgs} args - Arguments to find a Orders_Itens
     * @example
     * // Get one Orders_Itens
     * const orders_Itens = await prisma.orders_Itens.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Orders_ItensFindUniqueArgs>(args: SelectSubset<T, Orders_ItensFindUniqueArgs<ExtArgs>>): Prisma__Orders_ItensClient<$Result.GetResult<Prisma.$Orders_ItensPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders_Itens that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Orders_ItensFindUniqueOrThrowArgs} args - Arguments to find a Orders_Itens
     * @example
     * // Get one Orders_Itens
     * const orders_Itens = await prisma.orders_Itens.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Orders_ItensFindUniqueOrThrowArgs>(args: SelectSubset<T, Orders_ItensFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Orders_ItensClient<$Result.GetResult<Prisma.$Orders_ItensPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders_Itens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Orders_ItensFindFirstArgs} args - Arguments to find a Orders_Itens
     * @example
     * // Get one Orders_Itens
     * const orders_Itens = await prisma.orders_Itens.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Orders_ItensFindFirstArgs>(args?: SelectSubset<T, Orders_ItensFindFirstArgs<ExtArgs>>): Prisma__Orders_ItensClient<$Result.GetResult<Prisma.$Orders_ItensPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders_Itens that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Orders_ItensFindFirstOrThrowArgs} args - Arguments to find a Orders_Itens
     * @example
     * // Get one Orders_Itens
     * const orders_Itens = await prisma.orders_Itens.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Orders_ItensFindFirstOrThrowArgs>(args?: SelectSubset<T, Orders_ItensFindFirstOrThrowArgs<ExtArgs>>): Prisma__Orders_ItensClient<$Result.GetResult<Prisma.$Orders_ItensPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders_Itens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Orders_ItensFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders_Itens
     * const orders_Itens = await prisma.orders_Itens.findMany()
     * 
     * // Get first 10 Orders_Itens
     * const orders_Itens = await prisma.orders_Itens.findMany({ take: 10 })
     * 
     * // Only select the `orders_id`
     * const orders_ItensWithOrders_idOnly = await prisma.orders_Itens.findMany({ select: { orders_id: true } })
     * 
     */
    findMany<T extends Orders_ItensFindManyArgs>(args?: SelectSubset<T, Orders_ItensFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Orders_ItensPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders_Itens.
     * @param {Orders_ItensCreateArgs} args - Arguments to create a Orders_Itens.
     * @example
     * // Create one Orders_Itens
     * const Orders_Itens = await prisma.orders_Itens.create({
     *   data: {
     *     // ... data to create a Orders_Itens
     *   }
     * })
     * 
     */
    create<T extends Orders_ItensCreateArgs>(args: SelectSubset<T, Orders_ItensCreateArgs<ExtArgs>>): Prisma__Orders_ItensClient<$Result.GetResult<Prisma.$Orders_ItensPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders_Itens.
     * @param {Orders_ItensCreateManyArgs} args - Arguments to create many Orders_Itens.
     * @example
     * // Create many Orders_Itens
     * const orders_Itens = await prisma.orders_Itens.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Orders_ItensCreateManyArgs>(args?: SelectSubset<T, Orders_ItensCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders_Itens and returns the data saved in the database.
     * @param {Orders_ItensCreateManyAndReturnArgs} args - Arguments to create many Orders_Itens.
     * @example
     * // Create many Orders_Itens
     * const orders_Itens = await prisma.orders_Itens.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders_Itens and only return the `orders_id`
     * const orders_ItensWithOrders_idOnly = await prisma.orders_Itens.createManyAndReturn({
     *   select: { orders_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Orders_ItensCreateManyAndReturnArgs>(args?: SelectSubset<T, Orders_ItensCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Orders_ItensPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders_Itens.
     * @param {Orders_ItensDeleteArgs} args - Arguments to delete one Orders_Itens.
     * @example
     * // Delete one Orders_Itens
     * const Orders_Itens = await prisma.orders_Itens.delete({
     *   where: {
     *     // ... filter to delete one Orders_Itens
     *   }
     * })
     * 
     */
    delete<T extends Orders_ItensDeleteArgs>(args: SelectSubset<T, Orders_ItensDeleteArgs<ExtArgs>>): Prisma__Orders_ItensClient<$Result.GetResult<Prisma.$Orders_ItensPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders_Itens.
     * @param {Orders_ItensUpdateArgs} args - Arguments to update one Orders_Itens.
     * @example
     * // Update one Orders_Itens
     * const orders_Itens = await prisma.orders_Itens.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Orders_ItensUpdateArgs>(args: SelectSubset<T, Orders_ItensUpdateArgs<ExtArgs>>): Prisma__Orders_ItensClient<$Result.GetResult<Prisma.$Orders_ItensPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders_Itens.
     * @param {Orders_ItensDeleteManyArgs} args - Arguments to filter Orders_Itens to delete.
     * @example
     * // Delete a few Orders_Itens
     * const { count } = await prisma.orders_Itens.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Orders_ItensDeleteManyArgs>(args?: SelectSubset<T, Orders_ItensDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders_Itens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Orders_ItensUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders_Itens
     * const orders_Itens = await prisma.orders_Itens.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Orders_ItensUpdateManyArgs>(args: SelectSubset<T, Orders_ItensUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders_Itens and returns the data updated in the database.
     * @param {Orders_ItensUpdateManyAndReturnArgs} args - Arguments to update many Orders_Itens.
     * @example
     * // Update many Orders_Itens
     * const orders_Itens = await prisma.orders_Itens.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders_Itens and only return the `orders_id`
     * const orders_ItensWithOrders_idOnly = await prisma.orders_Itens.updateManyAndReturn({
     *   select: { orders_id: true },
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
    updateManyAndReturn<T extends Orders_ItensUpdateManyAndReturnArgs>(args: SelectSubset<T, Orders_ItensUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Orders_ItensPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders_Itens.
     * @param {Orders_ItensUpsertArgs} args - Arguments to update or create a Orders_Itens.
     * @example
     * // Update or create a Orders_Itens
     * const orders_Itens = await prisma.orders_Itens.upsert({
     *   create: {
     *     // ... data to create a Orders_Itens
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders_Itens we want to update
     *   }
     * })
     */
    upsert<T extends Orders_ItensUpsertArgs>(args: SelectSubset<T, Orders_ItensUpsertArgs<ExtArgs>>): Prisma__Orders_ItensClient<$Result.GetResult<Prisma.$Orders_ItensPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders_Itens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Orders_ItensCountArgs} args - Arguments to filter Orders_Itens to count.
     * @example
     * // Count the number of Orders_Itens
     * const count = await prisma.orders_Itens.count({
     *   where: {
     *     // ... the filter for the Orders_Itens we want to count
     *   }
     * })
    **/
    count<T extends Orders_ItensCountArgs>(
      args?: Subset<T, Orders_ItensCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Orders_ItensCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders_Itens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Orders_ItensAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Orders_ItensAggregateArgs>(args: Subset<T, Orders_ItensAggregateArgs>): Prisma.PrismaPromise<GetOrders_ItensAggregateType<T>>

    /**
     * Group by Orders_Itens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Orders_ItensGroupByArgs} args - Group by arguments.
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
      T extends Orders_ItensGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Orders_ItensGroupByArgs['orderBy'] }
        : { orderBy?: Orders_ItensGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Orders_ItensGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrders_ItensGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Orders_Itens model
   */
  readonly fields: Orders_ItensFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Orders_Itens.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Orders_ItensClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Orders<T extends OrdersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrdersDefaultArgs<ExtArgs>>): Prisma__OrdersClient<$Result.GetResult<Prisma.$OrdersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Products<T extends ProductsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductsDefaultArgs<ExtArgs>>): Prisma__ProductsClient<$Result.GetResult<Prisma.$ProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Orders_Itens model
   */
  interface Orders_ItensFieldRefs {
    readonly orders_id: FieldRef<"Orders_Itens", 'String'>
    readonly products_id: FieldRef<"Orders_Itens", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Orders_Itens findUnique
   */
  export type Orders_ItensFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders_Itens
     */
    select?: Orders_ItensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders_Itens
     */
    omit?: Orders_ItensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Orders_ItensInclude<ExtArgs> | null
    /**
     * Filter, which Orders_Itens to fetch.
     */
    where: Orders_ItensWhereUniqueInput
  }

  /**
   * Orders_Itens findUniqueOrThrow
   */
  export type Orders_ItensFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders_Itens
     */
    select?: Orders_ItensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders_Itens
     */
    omit?: Orders_ItensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Orders_ItensInclude<ExtArgs> | null
    /**
     * Filter, which Orders_Itens to fetch.
     */
    where: Orders_ItensWhereUniqueInput
  }

  /**
   * Orders_Itens findFirst
   */
  export type Orders_ItensFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders_Itens
     */
    select?: Orders_ItensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders_Itens
     */
    omit?: Orders_ItensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Orders_ItensInclude<ExtArgs> | null
    /**
     * Filter, which Orders_Itens to fetch.
     */
    where?: Orders_ItensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders_Itens to fetch.
     */
    orderBy?: Orders_ItensOrderByWithRelationInput | Orders_ItensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders_Itens.
     */
    cursor?: Orders_ItensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders_Itens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders_Itens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders_Itens.
     */
    distinct?: Orders_ItensScalarFieldEnum | Orders_ItensScalarFieldEnum[]
  }

  /**
   * Orders_Itens findFirstOrThrow
   */
  export type Orders_ItensFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders_Itens
     */
    select?: Orders_ItensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders_Itens
     */
    omit?: Orders_ItensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Orders_ItensInclude<ExtArgs> | null
    /**
     * Filter, which Orders_Itens to fetch.
     */
    where?: Orders_ItensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders_Itens to fetch.
     */
    orderBy?: Orders_ItensOrderByWithRelationInput | Orders_ItensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders_Itens.
     */
    cursor?: Orders_ItensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders_Itens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders_Itens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders_Itens.
     */
    distinct?: Orders_ItensScalarFieldEnum | Orders_ItensScalarFieldEnum[]
  }

  /**
   * Orders_Itens findMany
   */
  export type Orders_ItensFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders_Itens
     */
    select?: Orders_ItensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders_Itens
     */
    omit?: Orders_ItensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Orders_ItensInclude<ExtArgs> | null
    /**
     * Filter, which Orders_Itens to fetch.
     */
    where?: Orders_ItensWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders_Itens to fetch.
     */
    orderBy?: Orders_ItensOrderByWithRelationInput | Orders_ItensOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders_Itens.
     */
    cursor?: Orders_ItensWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders_Itens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders_Itens.
     */
    skip?: number
    distinct?: Orders_ItensScalarFieldEnum | Orders_ItensScalarFieldEnum[]
  }

  /**
   * Orders_Itens create
   */
  export type Orders_ItensCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders_Itens
     */
    select?: Orders_ItensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders_Itens
     */
    omit?: Orders_ItensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Orders_ItensInclude<ExtArgs> | null
    /**
     * The data needed to create a Orders_Itens.
     */
    data: XOR<Orders_ItensCreateInput, Orders_ItensUncheckedCreateInput>
  }

  /**
   * Orders_Itens createMany
   */
  export type Orders_ItensCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders_Itens.
     */
    data: Orders_ItensCreateManyInput | Orders_ItensCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Orders_Itens createManyAndReturn
   */
  export type Orders_ItensCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders_Itens
     */
    select?: Orders_ItensSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders_Itens
     */
    omit?: Orders_ItensOmit<ExtArgs> | null
    /**
     * The data used to create many Orders_Itens.
     */
    data: Orders_ItensCreateManyInput | Orders_ItensCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Orders_ItensIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders_Itens update
   */
  export type Orders_ItensUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders_Itens
     */
    select?: Orders_ItensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders_Itens
     */
    omit?: Orders_ItensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Orders_ItensInclude<ExtArgs> | null
    /**
     * The data needed to update a Orders_Itens.
     */
    data: XOR<Orders_ItensUpdateInput, Orders_ItensUncheckedUpdateInput>
    /**
     * Choose, which Orders_Itens to update.
     */
    where: Orders_ItensWhereUniqueInput
  }

  /**
   * Orders_Itens updateMany
   */
  export type Orders_ItensUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders_Itens.
     */
    data: XOR<Orders_ItensUpdateManyMutationInput, Orders_ItensUncheckedUpdateManyInput>
    /**
     * Filter which Orders_Itens to update
     */
    where?: Orders_ItensWhereInput
    /**
     * Limit how many Orders_Itens to update.
     */
    limit?: number
  }

  /**
   * Orders_Itens updateManyAndReturn
   */
  export type Orders_ItensUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders_Itens
     */
    select?: Orders_ItensSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Orders_Itens
     */
    omit?: Orders_ItensOmit<ExtArgs> | null
    /**
     * The data used to update Orders_Itens.
     */
    data: XOR<Orders_ItensUpdateManyMutationInput, Orders_ItensUncheckedUpdateManyInput>
    /**
     * Filter which Orders_Itens to update
     */
    where?: Orders_ItensWhereInput
    /**
     * Limit how many Orders_Itens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Orders_ItensIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Orders_Itens upsert
   */
  export type Orders_ItensUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders_Itens
     */
    select?: Orders_ItensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders_Itens
     */
    omit?: Orders_ItensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Orders_ItensInclude<ExtArgs> | null
    /**
     * The filter to search for the Orders_Itens to update in case it exists.
     */
    where: Orders_ItensWhereUniqueInput
    /**
     * In case the Orders_Itens found by the `where` argument doesn't exist, create a new Orders_Itens with this data.
     */
    create: XOR<Orders_ItensCreateInput, Orders_ItensUncheckedCreateInput>
    /**
     * In case the Orders_Itens was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Orders_ItensUpdateInput, Orders_ItensUncheckedUpdateInput>
  }

  /**
   * Orders_Itens delete
   */
  export type Orders_ItensDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders_Itens
     */
    select?: Orders_ItensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders_Itens
     */
    omit?: Orders_ItensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Orders_ItensInclude<ExtArgs> | null
    /**
     * Filter which Orders_Itens to delete.
     */
    where: Orders_ItensWhereUniqueInput
  }

  /**
   * Orders_Itens deleteMany
   */
  export type Orders_ItensDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders_Itens to delete
     */
    where?: Orders_ItensWhereInput
    /**
     * Limit how many Orders_Itens to delete.
     */
    limit?: number
  }

  /**
   * Orders_Itens without action
   */
  export type Orders_ItensDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Orders_Itens
     */
    select?: Orders_ItensSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Orders_Itens
     */
    omit?: Orders_ItensOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Orders_ItensInclude<ExtArgs> | null
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


  export const UsersScalarFieldEnum: {
    id: 'id',
    name: 'name',
    surname: 'surname',
    phone: 'phone',
    cep: 'cep',
    photo: 'photo',
    is_active: 'is_active',
    checked: 'checked',
    rule_id: 'rule_id',
    validation_id: 'validation_id',
    created_at: 'created_at',
    updated_at: 'updated_at',
    email: 'email',
    enterprise_id: 'enterprise_id',
    passoword: 'passoword'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const RulesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type RulesScalarFieldEnum = (typeof RulesScalarFieldEnum)[keyof typeof RulesScalarFieldEnum]


  export const CompaniesScalarFieldEnum: {
    id: 'id',
    company_fantasy: 'company_fantasy',
    company_reason: 'company_reason',
    company_acronym: 'company_acronym',
    logo_company: 'logo_company',
    cnpj: 'cnpj',
    cep_address: 'cep_address',
    phone: 'phone',
    is_active: 'is_active',
    warehouse_id: 'warehouse_id',
    opening_hours: 'opening_hours',
    close_hours: 'close_hours',
    created_at: 'created_at',
    updated_at: 'updated_at',
    company_number: 'company_number'
  };

  export type CompaniesScalarFieldEnum = (typeof CompaniesScalarFieldEnum)[keyof typeof CompaniesScalarFieldEnum]


  export const WarehousesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type WarehousesScalarFieldEnum = (typeof WarehousesScalarFieldEnum)[keyof typeof WarehousesScalarFieldEnum]


  export const StocksScalarFieldEnum: {
    id: 'id',
    warehouse_id: 'warehouse_id',
    current_quantity: 'current_quantity',
    minimium_quantity: 'minimium_quantity',
    maximum_quantity: 'maximum_quantity',
    price: 'price',
    purchase_price: 'purchase_price',
    cost_price: 'cost_price',
    has_discount: 'has_discount',
    discount_percentage: 'discount_percentage',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type StocksScalarFieldEnum = (typeof StocksScalarFieldEnum)[keyof typeof StocksScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    stock_id: 'stock_id',
    category_id: 'category_id',
    brand_id: 'brand_id',
    product_code: 'product_code',
    description: 'description',
    sales_unit: 'sales_unit',
    is_active: 'is_active',
    date_of_inactivation: 'date_of_inactivation',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const BrandsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type BrandsScalarFieldEnum = (typeof BrandsScalarFieldEnum)[keyof typeof BrandsScalarFieldEnum]


  export const BannersScalarFieldEnum: {
    id: 'id',
    url_imagem: 'url_imagem',
    display_order: 'display_order',
    product_id: 'product_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type BannersScalarFieldEnum = (typeof BannersScalarFieldEnum)[keyof typeof BannersScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const SuppliersScalarFieldEnum: {
    id: 'id',
    company_fantasy: 'company_fantasy',
    company_reason: 'company_reason',
    company_acronym: 'company_acronym',
    cnpj: 'cnpj',
    email: 'email',
    phone: 'phone',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type SuppliersScalarFieldEnum = (typeof SuppliersScalarFieldEnum)[keyof typeof SuppliersScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    release_date: 'release_date',
    completion_date: 'completion_date',
    status_id: 'status_id',
    cancellation_date: 'cancellation_date',
    delivery_date: 'delivery_date',
    gross_value: 'gross_value',
    net_value: 'net_value',
    shipping_price: 'shipping_price',
    type_sale: 'type_sale',
    cep_addres: 'cep_addres',
    addres_number: 'addres_number',
    delivery_code: 'delivery_code',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const StatusScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type StatusScalarFieldEnum = (typeof StatusScalarFieldEnum)[keyof typeof StatusScalarFieldEnum]


  export const Method_PaymentsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Method_PaymentsScalarFieldEnum = (typeof Method_PaymentsScalarFieldEnum)[keyof typeof Method_PaymentsScalarFieldEnum]


  export const Orders_ItensScalarFieldEnum: {
    orders_id: 'orders_id',
    products_id: 'products_id'
  };

  export type Orders_ItensScalarFieldEnum = (typeof Orders_ItensScalarFieldEnum)[keyof typeof Orders_ItensScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type UsersWhereInput = {
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    id?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    surname?: StringFilter<"Users"> | string
    phone?: StringFilter<"Users"> | string
    cep?: StringNullableFilter<"Users"> | string | null
    photo?: StringNullableFilter<"Users"> | string | null
    is_active?: BoolFilter<"Users"> | boolean
    checked?: BoolFilter<"Users"> | boolean
    rule_id?: StringFilter<"Users"> | string
    validation_id?: StringNullableFilter<"Users"> | string | null
    created_at?: DateTimeNullableFilter<"Users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Users"> | Date | string | null
    email?: StringNullableFilter<"Users"> | string | null
    enterprise_id?: StringNullableFilter<"Users"> | string | null
    passoword?: StringNullableFilter<"Users"> | string | null
    enterprise?: XOR<CompaniesNullableScalarRelationFilter, CompaniesWhereInput> | null
    rule?: XOR<RulesScalarRelationFilter, RulesWhereInput>
  }

  export type UsersOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    phone?: SortOrder
    cep?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    is_active?: SortOrder
    checked?: SortOrder
    rule_id?: SortOrder
    validation_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    enterprise_id?: SortOrderInput | SortOrder
    passoword?: SortOrderInput | SortOrder
    enterprise?: CompaniesOrderByWithRelationInput
    rule?: RulesOrderByWithRelationInput
  }

  export type UsersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    validation_id?: string
    AND?: UsersWhereInput | UsersWhereInput[]
    OR?: UsersWhereInput[]
    NOT?: UsersWhereInput | UsersWhereInput[]
    name?: StringFilter<"Users"> | string
    surname?: StringFilter<"Users"> | string
    phone?: StringFilter<"Users"> | string
    cep?: StringNullableFilter<"Users"> | string | null
    photo?: StringNullableFilter<"Users"> | string | null
    is_active?: BoolFilter<"Users"> | boolean
    checked?: BoolFilter<"Users"> | boolean
    rule_id?: StringFilter<"Users"> | string
    created_at?: DateTimeNullableFilter<"Users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Users"> | Date | string | null
    email?: StringNullableFilter<"Users"> | string | null
    enterprise_id?: StringNullableFilter<"Users"> | string | null
    passoword?: StringNullableFilter<"Users"> | string | null
    enterprise?: XOR<CompaniesNullableScalarRelationFilter, CompaniesWhereInput> | null
    rule?: XOR<RulesScalarRelationFilter, RulesWhereInput>
  }, "id" | "validation_id">

  export type UsersOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    phone?: SortOrder
    cep?: SortOrderInput | SortOrder
    photo?: SortOrderInput | SortOrder
    is_active?: SortOrder
    checked?: SortOrder
    rule_id?: SortOrder
    validation_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    enterprise_id?: SortOrderInput | SortOrder
    passoword?: SortOrderInput | SortOrder
    _count?: UsersCountOrderByAggregateInput
    _max?: UsersMaxOrderByAggregateInput
    _min?: UsersMinOrderByAggregateInput
  }

  export type UsersScalarWhereWithAggregatesInput = {
    AND?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    OR?: UsersScalarWhereWithAggregatesInput[]
    NOT?: UsersScalarWhereWithAggregatesInput | UsersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Users"> | string
    name?: StringWithAggregatesFilter<"Users"> | string
    surname?: StringWithAggregatesFilter<"Users"> | string
    phone?: StringWithAggregatesFilter<"Users"> | string
    cep?: StringNullableWithAggregatesFilter<"Users"> | string | null
    photo?: StringNullableWithAggregatesFilter<"Users"> | string | null
    is_active?: BoolWithAggregatesFilter<"Users"> | boolean
    checked?: BoolWithAggregatesFilter<"Users"> | boolean
    rule_id?: StringWithAggregatesFilter<"Users"> | string
    validation_id?: StringNullableWithAggregatesFilter<"Users"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Users"> | Date | string | null
    email?: StringNullableWithAggregatesFilter<"Users"> | string | null
    enterprise_id?: StringNullableWithAggregatesFilter<"Users"> | string | null
    passoword?: StringNullableWithAggregatesFilter<"Users"> | string | null
  }

  export type RulesWhereInput = {
    AND?: RulesWhereInput | RulesWhereInput[]
    OR?: RulesWhereInput[]
    NOT?: RulesWhereInput | RulesWhereInput[]
    id?: StringFilter<"Rules"> | string
    name?: StringFilter<"Rules"> | string
    created_at?: DateTimeNullableFilter<"Rules"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Rules"> | Date | string | null
    Users?: UsersListRelationFilter
  }

  export type RulesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    Users?: UsersOrderByRelationAggregateInput
  }

  export type RulesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: RulesWhereInput | RulesWhereInput[]
    OR?: RulesWhereInput[]
    NOT?: RulesWhereInput | RulesWhereInput[]
    created_at?: DateTimeNullableFilter<"Rules"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Rules"> | Date | string | null
    Users?: UsersListRelationFilter
  }, "id" | "name">

  export type RulesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: RulesCountOrderByAggregateInput
    _max?: RulesMaxOrderByAggregateInput
    _min?: RulesMinOrderByAggregateInput
  }

  export type RulesScalarWhereWithAggregatesInput = {
    AND?: RulesScalarWhereWithAggregatesInput | RulesScalarWhereWithAggregatesInput[]
    OR?: RulesScalarWhereWithAggregatesInput[]
    NOT?: RulesScalarWhereWithAggregatesInput | RulesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Rules"> | string
    name?: StringWithAggregatesFilter<"Rules"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"Rules"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Rules"> | Date | string | null
  }

  export type CompaniesWhereInput = {
    AND?: CompaniesWhereInput | CompaniesWhereInput[]
    OR?: CompaniesWhereInput[]
    NOT?: CompaniesWhereInput | CompaniesWhereInput[]
    id?: StringFilter<"Companies"> | string
    company_fantasy?: StringFilter<"Companies"> | string
    company_reason?: StringFilter<"Companies"> | string
    company_acronym?: StringFilter<"Companies"> | string
    logo_company?: StringNullableFilter<"Companies"> | string | null
    cnpj?: StringFilter<"Companies"> | string
    cep_address?: StringFilter<"Companies"> | string
    phone?: StringNullableFilter<"Companies"> | string | null
    is_active?: BoolFilter<"Companies"> | boolean
    warehouse_id?: StringNullableFilter<"Companies"> | string | null
    opening_hours?: DateTimeFilter<"Companies"> | Date | string
    close_hours?: DateTimeFilter<"Companies"> | Date | string
    created_at?: DateTimeNullableFilter<"Companies"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Companies"> | Date | string | null
    company_number?: IntFilter<"Companies"> | number
    warehouse?: XOR<WarehousesNullableScalarRelationFilter, WarehousesWhereInput> | null
    Users?: UsersListRelationFilter
  }

  export type CompaniesOrderByWithRelationInput = {
    id?: SortOrder
    company_fantasy?: SortOrder
    company_reason?: SortOrder
    company_acronym?: SortOrder
    logo_company?: SortOrderInput | SortOrder
    cnpj?: SortOrder
    cep_address?: SortOrder
    phone?: SortOrderInput | SortOrder
    is_active?: SortOrder
    warehouse_id?: SortOrderInput | SortOrder
    opening_hours?: SortOrder
    close_hours?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    company_number?: SortOrder
    warehouse?: WarehousesOrderByWithRelationInput
    Users?: UsersOrderByRelationAggregateInput
  }

  export type CompaniesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    warehouse_id?: string
    AND?: CompaniesWhereInput | CompaniesWhereInput[]
    OR?: CompaniesWhereInput[]
    NOT?: CompaniesWhereInput | CompaniesWhereInput[]
    company_fantasy?: StringFilter<"Companies"> | string
    company_reason?: StringFilter<"Companies"> | string
    company_acronym?: StringFilter<"Companies"> | string
    logo_company?: StringNullableFilter<"Companies"> | string | null
    cnpj?: StringFilter<"Companies"> | string
    cep_address?: StringFilter<"Companies"> | string
    phone?: StringNullableFilter<"Companies"> | string | null
    is_active?: BoolFilter<"Companies"> | boolean
    opening_hours?: DateTimeFilter<"Companies"> | Date | string
    close_hours?: DateTimeFilter<"Companies"> | Date | string
    created_at?: DateTimeNullableFilter<"Companies"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Companies"> | Date | string | null
    company_number?: IntFilter<"Companies"> | number
    warehouse?: XOR<WarehousesNullableScalarRelationFilter, WarehousesWhereInput> | null
    Users?: UsersListRelationFilter
  }, "id" | "warehouse_id">

  export type CompaniesOrderByWithAggregationInput = {
    id?: SortOrder
    company_fantasy?: SortOrder
    company_reason?: SortOrder
    company_acronym?: SortOrder
    logo_company?: SortOrderInput | SortOrder
    cnpj?: SortOrder
    cep_address?: SortOrder
    phone?: SortOrderInput | SortOrder
    is_active?: SortOrder
    warehouse_id?: SortOrderInput | SortOrder
    opening_hours?: SortOrder
    close_hours?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    company_number?: SortOrder
    _count?: CompaniesCountOrderByAggregateInput
    _avg?: CompaniesAvgOrderByAggregateInput
    _max?: CompaniesMaxOrderByAggregateInput
    _min?: CompaniesMinOrderByAggregateInput
    _sum?: CompaniesSumOrderByAggregateInput
  }

  export type CompaniesScalarWhereWithAggregatesInput = {
    AND?: CompaniesScalarWhereWithAggregatesInput | CompaniesScalarWhereWithAggregatesInput[]
    OR?: CompaniesScalarWhereWithAggregatesInput[]
    NOT?: CompaniesScalarWhereWithAggregatesInput | CompaniesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Companies"> | string
    company_fantasy?: StringWithAggregatesFilter<"Companies"> | string
    company_reason?: StringWithAggregatesFilter<"Companies"> | string
    company_acronym?: StringWithAggregatesFilter<"Companies"> | string
    logo_company?: StringNullableWithAggregatesFilter<"Companies"> | string | null
    cnpj?: StringWithAggregatesFilter<"Companies"> | string
    cep_address?: StringWithAggregatesFilter<"Companies"> | string
    phone?: StringNullableWithAggregatesFilter<"Companies"> | string | null
    is_active?: BoolWithAggregatesFilter<"Companies"> | boolean
    warehouse_id?: StringNullableWithAggregatesFilter<"Companies"> | string | null
    opening_hours?: DateTimeWithAggregatesFilter<"Companies"> | Date | string
    close_hours?: DateTimeWithAggregatesFilter<"Companies"> | Date | string
    created_at?: DateTimeNullableWithAggregatesFilter<"Companies"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Companies"> | Date | string | null
    company_number?: IntWithAggregatesFilter<"Companies"> | number
  }

  export type WarehousesWhereInput = {
    AND?: WarehousesWhereInput | WarehousesWhereInput[]
    OR?: WarehousesWhereInput[]
    NOT?: WarehousesWhereInput | WarehousesWhereInput[]
    id?: StringFilter<"Warehouses"> | string
    name?: StringFilter<"Warehouses"> | string
    is_active?: BoolFilter<"Warehouses"> | boolean
    created_at?: DateTimeNullableFilter<"Warehouses"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Warehouses"> | Date | string | null
    Companies?: XOR<CompaniesNullableScalarRelationFilter, CompaniesWhereInput> | null
    Stocks?: StocksListRelationFilter
  }

  export type WarehousesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    Companies?: CompaniesOrderByWithRelationInput
    Stocks?: StocksOrderByRelationAggregateInput
  }

  export type WarehousesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: WarehousesWhereInput | WarehousesWhereInput[]
    OR?: WarehousesWhereInput[]
    NOT?: WarehousesWhereInput | WarehousesWhereInput[]
    is_active?: BoolFilter<"Warehouses"> | boolean
    created_at?: DateTimeNullableFilter<"Warehouses"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Warehouses"> | Date | string | null
    Companies?: XOR<CompaniesNullableScalarRelationFilter, CompaniesWhereInput> | null
    Stocks?: StocksListRelationFilter
  }, "id" | "name">

  export type WarehousesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: WarehousesCountOrderByAggregateInput
    _max?: WarehousesMaxOrderByAggregateInput
    _min?: WarehousesMinOrderByAggregateInput
  }

  export type WarehousesScalarWhereWithAggregatesInput = {
    AND?: WarehousesScalarWhereWithAggregatesInput | WarehousesScalarWhereWithAggregatesInput[]
    OR?: WarehousesScalarWhereWithAggregatesInput[]
    NOT?: WarehousesScalarWhereWithAggregatesInput | WarehousesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Warehouses"> | string
    name?: StringWithAggregatesFilter<"Warehouses"> | string
    is_active?: BoolWithAggregatesFilter<"Warehouses"> | boolean
    created_at?: DateTimeNullableWithAggregatesFilter<"Warehouses"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Warehouses"> | Date | string | null
  }

  export type StocksWhereInput = {
    AND?: StocksWhereInput | StocksWhereInput[]
    OR?: StocksWhereInput[]
    NOT?: StocksWhereInput | StocksWhereInput[]
    id?: StringFilter<"Stocks"> | string
    warehouse_id?: StringFilter<"Stocks"> | string
    current_quantity?: IntFilter<"Stocks"> | number
    minimium_quantity?: IntFilter<"Stocks"> | number
    maximum_quantity?: IntFilter<"Stocks"> | number
    price?: FloatFilter<"Stocks"> | number
    purchase_price?: FloatFilter<"Stocks"> | number
    cost_price?: FloatFilter<"Stocks"> | number
    has_discount?: BoolFilter<"Stocks"> | boolean
    discount_percentage?: FloatNullableFilter<"Stocks"> | number | null
    created_at?: DateTimeNullableFilter<"Stocks"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Stocks"> | Date | string | null
    Products?: ProductsListRelationFilter
    warehouse?: XOR<WarehousesScalarRelationFilter, WarehousesWhereInput>
  }

  export type StocksOrderByWithRelationInput = {
    id?: SortOrder
    warehouse_id?: SortOrder
    current_quantity?: SortOrder
    minimium_quantity?: SortOrder
    maximum_quantity?: SortOrder
    price?: SortOrder
    purchase_price?: SortOrder
    cost_price?: SortOrder
    has_discount?: SortOrder
    discount_percentage?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    Products?: ProductsOrderByRelationAggregateInput
    warehouse?: WarehousesOrderByWithRelationInput
  }

  export type StocksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StocksWhereInput | StocksWhereInput[]
    OR?: StocksWhereInput[]
    NOT?: StocksWhereInput | StocksWhereInput[]
    warehouse_id?: StringFilter<"Stocks"> | string
    current_quantity?: IntFilter<"Stocks"> | number
    minimium_quantity?: IntFilter<"Stocks"> | number
    maximum_quantity?: IntFilter<"Stocks"> | number
    price?: FloatFilter<"Stocks"> | number
    purchase_price?: FloatFilter<"Stocks"> | number
    cost_price?: FloatFilter<"Stocks"> | number
    has_discount?: BoolFilter<"Stocks"> | boolean
    discount_percentage?: FloatNullableFilter<"Stocks"> | number | null
    created_at?: DateTimeNullableFilter<"Stocks"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Stocks"> | Date | string | null
    Products?: ProductsListRelationFilter
    warehouse?: XOR<WarehousesScalarRelationFilter, WarehousesWhereInput>
  }, "id">

  export type StocksOrderByWithAggregationInput = {
    id?: SortOrder
    warehouse_id?: SortOrder
    current_quantity?: SortOrder
    minimium_quantity?: SortOrder
    maximum_quantity?: SortOrder
    price?: SortOrder
    purchase_price?: SortOrder
    cost_price?: SortOrder
    has_discount?: SortOrder
    discount_percentage?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: StocksCountOrderByAggregateInput
    _avg?: StocksAvgOrderByAggregateInput
    _max?: StocksMaxOrderByAggregateInput
    _min?: StocksMinOrderByAggregateInput
    _sum?: StocksSumOrderByAggregateInput
  }

  export type StocksScalarWhereWithAggregatesInput = {
    AND?: StocksScalarWhereWithAggregatesInput | StocksScalarWhereWithAggregatesInput[]
    OR?: StocksScalarWhereWithAggregatesInput[]
    NOT?: StocksScalarWhereWithAggregatesInput | StocksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Stocks"> | string
    warehouse_id?: StringWithAggregatesFilter<"Stocks"> | string
    current_quantity?: IntWithAggregatesFilter<"Stocks"> | number
    minimium_quantity?: IntWithAggregatesFilter<"Stocks"> | number
    maximum_quantity?: IntWithAggregatesFilter<"Stocks"> | number
    price?: FloatWithAggregatesFilter<"Stocks"> | number
    purchase_price?: FloatWithAggregatesFilter<"Stocks"> | number
    cost_price?: FloatWithAggregatesFilter<"Stocks"> | number
    has_discount?: BoolWithAggregatesFilter<"Stocks"> | boolean
    discount_percentage?: FloatNullableWithAggregatesFilter<"Stocks"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Stocks"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Stocks"> | Date | string | null
  }

  export type ProductsWhereInput = {
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    id?: StringFilter<"Products"> | string
    name?: StringFilter<"Products"> | string
    stock_id?: StringFilter<"Products"> | string
    category_id?: StringFilter<"Products"> | string
    brand_id?: StringFilter<"Products"> | string
    product_code?: StringFilter<"Products"> | string
    description?: StringNullableFilter<"Products"> | string | null
    sales_unit?: StringFilter<"Products"> | string
    is_active?: BoolFilter<"Products"> | boolean
    date_of_inactivation?: DateTimeNullableFilter<"Products"> | Date | string | null
    created_at?: DateTimeNullableFilter<"Products"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Products"> | Date | string | null
    items?: XOR<Orders_ItensNullableScalarRelationFilter, Orders_ItensWhereInput> | null
    brand?: XOR<BrandsScalarRelationFilter, BrandsWhereInput>
    stock?: XOR<StocksScalarRelationFilter, StocksWhereInput>
    category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
    banners?: BannersListRelationFilter
    supliers?: SuppliersListRelationFilter
  }

  export type ProductsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    stock_id?: SortOrder
    category_id?: SortOrder
    brand_id?: SortOrder
    product_code?: SortOrder
    description?: SortOrderInput | SortOrder
    sales_unit?: SortOrder
    is_active?: SortOrder
    date_of_inactivation?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    items?: Orders_ItensOrderByWithRelationInput
    brand?: BrandsOrderByWithRelationInput
    stock?: StocksOrderByWithRelationInput
    category?: CategoriesOrderByWithRelationInput
    banners?: BannersOrderByRelationAggregateInput
    supliers?: SuppliersOrderByRelationAggregateInput
  }

  export type ProductsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    product_code?: string
    AND?: ProductsWhereInput | ProductsWhereInput[]
    OR?: ProductsWhereInput[]
    NOT?: ProductsWhereInput | ProductsWhereInput[]
    name?: StringFilter<"Products"> | string
    stock_id?: StringFilter<"Products"> | string
    category_id?: StringFilter<"Products"> | string
    brand_id?: StringFilter<"Products"> | string
    description?: StringNullableFilter<"Products"> | string | null
    sales_unit?: StringFilter<"Products"> | string
    is_active?: BoolFilter<"Products"> | boolean
    date_of_inactivation?: DateTimeNullableFilter<"Products"> | Date | string | null
    created_at?: DateTimeNullableFilter<"Products"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Products"> | Date | string | null
    items?: XOR<Orders_ItensNullableScalarRelationFilter, Orders_ItensWhereInput> | null
    brand?: XOR<BrandsScalarRelationFilter, BrandsWhereInput>
    stock?: XOR<StocksScalarRelationFilter, StocksWhereInput>
    category?: XOR<CategoriesScalarRelationFilter, CategoriesWhereInput>
    banners?: BannersListRelationFilter
    supliers?: SuppliersListRelationFilter
  }, "id" | "product_code">

  export type ProductsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    stock_id?: SortOrder
    category_id?: SortOrder
    brand_id?: SortOrder
    product_code?: SortOrder
    description?: SortOrderInput | SortOrder
    sales_unit?: SortOrder
    is_active?: SortOrder
    date_of_inactivation?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: ProductsCountOrderByAggregateInput
    _max?: ProductsMaxOrderByAggregateInput
    _min?: ProductsMinOrderByAggregateInput
  }

  export type ProductsScalarWhereWithAggregatesInput = {
    AND?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    OR?: ProductsScalarWhereWithAggregatesInput[]
    NOT?: ProductsScalarWhereWithAggregatesInput | ProductsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Products"> | string
    name?: StringWithAggregatesFilter<"Products"> | string
    stock_id?: StringWithAggregatesFilter<"Products"> | string
    category_id?: StringWithAggregatesFilter<"Products"> | string
    brand_id?: StringWithAggregatesFilter<"Products"> | string
    product_code?: StringWithAggregatesFilter<"Products"> | string
    description?: StringNullableWithAggregatesFilter<"Products"> | string | null
    sales_unit?: StringWithAggregatesFilter<"Products"> | string
    is_active?: BoolWithAggregatesFilter<"Products"> | boolean
    date_of_inactivation?: DateTimeNullableWithAggregatesFilter<"Products"> | Date | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Products"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Products"> | Date | string | null
  }

  export type BrandsWhereInput = {
    AND?: BrandsWhereInput | BrandsWhereInput[]
    OR?: BrandsWhereInput[]
    NOT?: BrandsWhereInput | BrandsWhereInput[]
    id?: StringFilter<"Brands"> | string
    name?: StringFilter<"Brands"> | string
    created_at?: DateTimeNullableFilter<"Brands"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Brands"> | Date | string | null
    Products?: ProductsListRelationFilter
  }

  export type BrandsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    Products?: ProductsOrderByRelationAggregateInput
  }

  export type BrandsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: BrandsWhereInput | BrandsWhereInput[]
    OR?: BrandsWhereInput[]
    NOT?: BrandsWhereInput | BrandsWhereInput[]
    name?: StringFilter<"Brands"> | string
    created_at?: DateTimeNullableFilter<"Brands"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Brands"> | Date | string | null
    Products?: ProductsListRelationFilter
  }, "id">

  export type BrandsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: BrandsCountOrderByAggregateInput
    _max?: BrandsMaxOrderByAggregateInput
    _min?: BrandsMinOrderByAggregateInput
  }

  export type BrandsScalarWhereWithAggregatesInput = {
    AND?: BrandsScalarWhereWithAggregatesInput | BrandsScalarWhereWithAggregatesInput[]
    OR?: BrandsScalarWhereWithAggregatesInput[]
    NOT?: BrandsScalarWhereWithAggregatesInput | BrandsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Brands"> | string
    name?: StringWithAggregatesFilter<"Brands"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"Brands"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Brands"> | Date | string | null
  }

  export type BannersWhereInput = {
    AND?: BannersWhereInput | BannersWhereInput[]
    OR?: BannersWhereInput[]
    NOT?: BannersWhereInput | BannersWhereInput[]
    id?: StringFilter<"Banners"> | string
    url_imagem?: StringFilter<"Banners"> | string
    display_order?: IntNullableFilter<"Banners"> | number | null
    product_id?: StringNullableFilter<"Banners"> | string | null
    created_at?: DateTimeFilter<"Banners"> | Date | string
    updated_at?: DateTimeNullableFilter<"Banners"> | Date | string | null
    products?: XOR<ProductsNullableScalarRelationFilter, ProductsWhereInput> | null
  }

  export type BannersOrderByWithRelationInput = {
    id?: SortOrder
    url_imagem?: SortOrder
    display_order?: SortOrderInput | SortOrder
    product_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    products?: ProductsOrderByWithRelationInput
  }

  export type BannersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    display_order?: number
    AND?: BannersWhereInput | BannersWhereInput[]
    OR?: BannersWhereInput[]
    NOT?: BannersWhereInput | BannersWhereInput[]
    url_imagem?: StringFilter<"Banners"> | string
    product_id?: StringNullableFilter<"Banners"> | string | null
    created_at?: DateTimeFilter<"Banners"> | Date | string
    updated_at?: DateTimeNullableFilter<"Banners"> | Date | string | null
    products?: XOR<ProductsNullableScalarRelationFilter, ProductsWhereInput> | null
  }, "id" | "display_order">

  export type BannersOrderByWithAggregationInput = {
    id?: SortOrder
    url_imagem?: SortOrder
    display_order?: SortOrderInput | SortOrder
    product_id?: SortOrderInput | SortOrder
    created_at?: SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: BannersCountOrderByAggregateInput
    _avg?: BannersAvgOrderByAggregateInput
    _max?: BannersMaxOrderByAggregateInput
    _min?: BannersMinOrderByAggregateInput
    _sum?: BannersSumOrderByAggregateInput
  }

  export type BannersScalarWhereWithAggregatesInput = {
    AND?: BannersScalarWhereWithAggregatesInput | BannersScalarWhereWithAggregatesInput[]
    OR?: BannersScalarWhereWithAggregatesInput[]
    NOT?: BannersScalarWhereWithAggregatesInput | BannersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Banners"> | string
    url_imagem?: StringWithAggregatesFilter<"Banners"> | string
    display_order?: IntNullableWithAggregatesFilter<"Banners"> | number | null
    product_id?: StringNullableWithAggregatesFilter<"Banners"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Banners"> | Date | string
    updated_at?: DateTimeNullableWithAggregatesFilter<"Banners"> | Date | string | null
  }

  export type CategoriesWhereInput = {
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    id?: StringFilter<"Categories"> | string
    name?: StringFilter<"Categories"> | string
    created_at?: DateTimeNullableFilter<"Categories"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Categories"> | Date | string | null
    Products?: ProductsListRelationFilter
  }

  export type CategoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    Products?: ProductsOrderByRelationAggregateInput
  }

  export type CategoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoriesWhereInput | CategoriesWhereInput[]
    OR?: CategoriesWhereInput[]
    NOT?: CategoriesWhereInput | CategoriesWhereInput[]
    name?: StringFilter<"Categories"> | string
    created_at?: DateTimeNullableFilter<"Categories"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Categories"> | Date | string | null
    Products?: ProductsListRelationFilter
  }, "id">

  export type CategoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: CategoriesCountOrderByAggregateInput
    _max?: CategoriesMaxOrderByAggregateInput
    _min?: CategoriesMinOrderByAggregateInput
  }

  export type CategoriesScalarWhereWithAggregatesInput = {
    AND?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    OR?: CategoriesScalarWhereWithAggregatesInput[]
    NOT?: CategoriesScalarWhereWithAggregatesInput | CategoriesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Categories"> | string
    name?: StringWithAggregatesFilter<"Categories"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"Categories"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Categories"> | Date | string | null
  }

  export type SuppliersWhereInput = {
    AND?: SuppliersWhereInput | SuppliersWhereInput[]
    OR?: SuppliersWhereInput[]
    NOT?: SuppliersWhereInput | SuppliersWhereInput[]
    id?: StringFilter<"Suppliers"> | string
    company_fantasy?: StringFilter<"Suppliers"> | string
    company_reason?: StringFilter<"Suppliers"> | string
    company_acronym?: StringFilter<"Suppliers"> | string
    cnpj?: StringFilter<"Suppliers"> | string
    email?: StringFilter<"Suppliers"> | string
    phone?: StringFilter<"Suppliers"> | string
    is_active?: BoolFilter<"Suppliers"> | boolean
    created_at?: DateTimeNullableFilter<"Suppliers"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Suppliers"> | Date | string | null
    products?: ProductsListRelationFilter
  }

  export type SuppliersOrderByWithRelationInput = {
    id?: SortOrder
    company_fantasy?: SortOrder
    company_reason?: SortOrder
    company_acronym?: SortOrder
    cnpj?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    products?: ProductsOrderByRelationAggregateInput
  }

  export type SuppliersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SuppliersWhereInput | SuppliersWhereInput[]
    OR?: SuppliersWhereInput[]
    NOT?: SuppliersWhereInput | SuppliersWhereInput[]
    company_fantasy?: StringFilter<"Suppliers"> | string
    company_reason?: StringFilter<"Suppliers"> | string
    company_acronym?: StringFilter<"Suppliers"> | string
    cnpj?: StringFilter<"Suppliers"> | string
    email?: StringFilter<"Suppliers"> | string
    phone?: StringFilter<"Suppliers"> | string
    is_active?: BoolFilter<"Suppliers"> | boolean
    created_at?: DateTimeNullableFilter<"Suppliers"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Suppliers"> | Date | string | null
    products?: ProductsListRelationFilter
  }, "id">

  export type SuppliersOrderByWithAggregationInput = {
    id?: SortOrder
    company_fantasy?: SortOrder
    company_reason?: SortOrder
    company_acronym?: SortOrder
    cnpj?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: SuppliersCountOrderByAggregateInput
    _max?: SuppliersMaxOrderByAggregateInput
    _min?: SuppliersMinOrderByAggregateInput
  }

  export type SuppliersScalarWhereWithAggregatesInput = {
    AND?: SuppliersScalarWhereWithAggregatesInput | SuppliersScalarWhereWithAggregatesInput[]
    OR?: SuppliersScalarWhereWithAggregatesInput[]
    NOT?: SuppliersScalarWhereWithAggregatesInput | SuppliersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Suppliers"> | string
    company_fantasy?: StringWithAggregatesFilter<"Suppliers"> | string
    company_reason?: StringWithAggregatesFilter<"Suppliers"> | string
    company_acronym?: StringWithAggregatesFilter<"Suppliers"> | string
    cnpj?: StringWithAggregatesFilter<"Suppliers"> | string
    email?: StringWithAggregatesFilter<"Suppliers"> | string
    phone?: StringWithAggregatesFilter<"Suppliers"> | string
    is_active?: BoolWithAggregatesFilter<"Suppliers"> | boolean
    created_at?: DateTimeNullableWithAggregatesFilter<"Suppliers"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Suppliers"> | Date | string | null
  }

  export type OrdersWhereInput = {
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    id?: StringFilter<"Orders"> | string
    release_date?: DateTimeFilter<"Orders"> | Date | string
    completion_date?: DateTimeFilter<"Orders"> | Date | string
    status_id?: StringFilter<"Orders"> | string
    cancellation_date?: DateTimeNullableFilter<"Orders"> | Date | string | null
    delivery_date?: DateTimeNullableFilter<"Orders"> | Date | string | null
    gross_value?: FloatFilter<"Orders"> | number
    net_value?: FloatFilter<"Orders"> | number
    shipping_price?: FloatFilter<"Orders"> | number
    type_sale?: StringFilter<"Orders"> | string
    cep_addres?: StringNullableFilter<"Orders"> | string | null
    addres_number?: StringNullableFilter<"Orders"> | string | null
    delivery_code?: StringNullableFilter<"Orders"> | string | null
    created_at?: DateTimeNullableFilter<"Orders"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Orders"> | Date | string | null
    status?: XOR<StatusScalarRelationFilter, StatusWhereInput>
    items?: XOR<Orders_ItensNullableScalarRelationFilter, Orders_ItensWhereInput> | null
    method_payments?: Method_PaymentsListRelationFilter
  }

  export type OrdersOrderByWithRelationInput = {
    id?: SortOrder
    release_date?: SortOrder
    completion_date?: SortOrder
    status_id?: SortOrder
    cancellation_date?: SortOrderInput | SortOrder
    delivery_date?: SortOrderInput | SortOrder
    gross_value?: SortOrder
    net_value?: SortOrder
    shipping_price?: SortOrder
    type_sale?: SortOrder
    cep_addres?: SortOrderInput | SortOrder
    addres_number?: SortOrderInput | SortOrder
    delivery_code?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    status?: StatusOrderByWithRelationInput
    items?: Orders_ItensOrderByWithRelationInput
    method_payments?: Method_PaymentsOrderByRelationAggregateInput
  }

  export type OrdersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrdersWhereInput | OrdersWhereInput[]
    OR?: OrdersWhereInput[]
    NOT?: OrdersWhereInput | OrdersWhereInput[]
    release_date?: DateTimeFilter<"Orders"> | Date | string
    completion_date?: DateTimeFilter<"Orders"> | Date | string
    status_id?: StringFilter<"Orders"> | string
    cancellation_date?: DateTimeNullableFilter<"Orders"> | Date | string | null
    delivery_date?: DateTimeNullableFilter<"Orders"> | Date | string | null
    gross_value?: FloatFilter<"Orders"> | number
    net_value?: FloatFilter<"Orders"> | number
    shipping_price?: FloatFilter<"Orders"> | number
    type_sale?: StringFilter<"Orders"> | string
    cep_addres?: StringNullableFilter<"Orders"> | string | null
    addres_number?: StringNullableFilter<"Orders"> | string | null
    delivery_code?: StringNullableFilter<"Orders"> | string | null
    created_at?: DateTimeNullableFilter<"Orders"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Orders"> | Date | string | null
    status?: XOR<StatusScalarRelationFilter, StatusWhereInput>
    items?: XOR<Orders_ItensNullableScalarRelationFilter, Orders_ItensWhereInput> | null
    method_payments?: Method_PaymentsListRelationFilter
  }, "id">

  export type OrdersOrderByWithAggregationInput = {
    id?: SortOrder
    release_date?: SortOrder
    completion_date?: SortOrder
    status_id?: SortOrder
    cancellation_date?: SortOrderInput | SortOrder
    delivery_date?: SortOrderInput | SortOrder
    gross_value?: SortOrder
    net_value?: SortOrder
    shipping_price?: SortOrder
    type_sale?: SortOrder
    cep_addres?: SortOrderInput | SortOrder
    addres_number?: SortOrderInput | SortOrder
    delivery_code?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: OrdersCountOrderByAggregateInput
    _avg?: OrdersAvgOrderByAggregateInput
    _max?: OrdersMaxOrderByAggregateInput
    _min?: OrdersMinOrderByAggregateInput
    _sum?: OrdersSumOrderByAggregateInput
  }

  export type OrdersScalarWhereWithAggregatesInput = {
    AND?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    OR?: OrdersScalarWhereWithAggregatesInput[]
    NOT?: OrdersScalarWhereWithAggregatesInput | OrdersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Orders"> | string
    release_date?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    completion_date?: DateTimeWithAggregatesFilter<"Orders"> | Date | string
    status_id?: StringWithAggregatesFilter<"Orders"> | string
    cancellation_date?: DateTimeNullableWithAggregatesFilter<"Orders"> | Date | string | null
    delivery_date?: DateTimeNullableWithAggregatesFilter<"Orders"> | Date | string | null
    gross_value?: FloatWithAggregatesFilter<"Orders"> | number
    net_value?: FloatWithAggregatesFilter<"Orders"> | number
    shipping_price?: FloatWithAggregatesFilter<"Orders"> | number
    type_sale?: StringWithAggregatesFilter<"Orders"> | string
    cep_addres?: StringNullableWithAggregatesFilter<"Orders"> | string | null
    addres_number?: StringNullableWithAggregatesFilter<"Orders"> | string | null
    delivery_code?: StringNullableWithAggregatesFilter<"Orders"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Orders"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Orders"> | Date | string | null
  }

  export type StatusWhereInput = {
    AND?: StatusWhereInput | StatusWhereInput[]
    OR?: StatusWhereInput[]
    NOT?: StatusWhereInput | StatusWhereInput[]
    id?: StringFilter<"Status"> | string
    name?: StringFilter<"Status"> | string
    created_at?: DateTimeNullableFilter<"Status"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Status"> | Date | string | null
    Orders?: OrdersListRelationFilter
  }

  export type StatusOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    Orders?: OrdersOrderByRelationAggregateInput
  }

  export type StatusWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StatusWhereInput | StatusWhereInput[]
    OR?: StatusWhereInput[]
    NOT?: StatusWhereInput | StatusWhereInput[]
    name?: StringFilter<"Status"> | string
    created_at?: DateTimeNullableFilter<"Status"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Status"> | Date | string | null
    Orders?: OrdersListRelationFilter
  }, "id">

  export type StatusOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: StatusCountOrderByAggregateInput
    _max?: StatusMaxOrderByAggregateInput
    _min?: StatusMinOrderByAggregateInput
  }

  export type StatusScalarWhereWithAggregatesInput = {
    AND?: StatusScalarWhereWithAggregatesInput | StatusScalarWhereWithAggregatesInput[]
    OR?: StatusScalarWhereWithAggregatesInput[]
    NOT?: StatusScalarWhereWithAggregatesInput | StatusScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Status"> | string
    name?: StringWithAggregatesFilter<"Status"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"Status"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Status"> | Date | string | null
  }

  export type Method_PaymentsWhereInput = {
    AND?: Method_PaymentsWhereInput | Method_PaymentsWhereInput[]
    OR?: Method_PaymentsWhereInput[]
    NOT?: Method_PaymentsWhereInput | Method_PaymentsWhereInput[]
    id?: StringFilter<"Method_Payments"> | string
    name?: StringFilter<"Method_Payments"> | string
    created_at?: DateTimeNullableFilter<"Method_Payments"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Method_Payments"> | Date | string | null
    orders?: OrdersListRelationFilter
  }

  export type Method_PaymentsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    orders?: OrdersOrderByRelationAggregateInput
  }

  export type Method_PaymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Method_PaymentsWhereInput | Method_PaymentsWhereInput[]
    OR?: Method_PaymentsWhereInput[]
    NOT?: Method_PaymentsWhereInput | Method_PaymentsWhereInput[]
    name?: StringFilter<"Method_Payments"> | string
    created_at?: DateTimeNullableFilter<"Method_Payments"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Method_Payments"> | Date | string | null
    orders?: OrdersListRelationFilter
  }, "id">

  export type Method_PaymentsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: Method_PaymentsCountOrderByAggregateInput
    _max?: Method_PaymentsMaxOrderByAggregateInput
    _min?: Method_PaymentsMinOrderByAggregateInput
  }

  export type Method_PaymentsScalarWhereWithAggregatesInput = {
    AND?: Method_PaymentsScalarWhereWithAggregatesInput | Method_PaymentsScalarWhereWithAggregatesInput[]
    OR?: Method_PaymentsScalarWhereWithAggregatesInput[]
    NOT?: Method_PaymentsScalarWhereWithAggregatesInput | Method_PaymentsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Method_Payments"> | string
    name?: StringWithAggregatesFilter<"Method_Payments"> | string
    created_at?: DateTimeNullableWithAggregatesFilter<"Method_Payments"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Method_Payments"> | Date | string | null
  }

  export type Orders_ItensWhereInput = {
    AND?: Orders_ItensWhereInput | Orders_ItensWhereInput[]
    OR?: Orders_ItensWhereInput[]
    NOT?: Orders_ItensWhereInput | Orders_ItensWhereInput[]
    orders_id?: StringFilter<"Orders_Itens"> | string
    products_id?: StringFilter<"Orders_Itens"> | string
    Orders?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
    Products?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }

  export type Orders_ItensOrderByWithRelationInput = {
    orders_id?: SortOrder
    products_id?: SortOrder
    Orders?: OrdersOrderByWithRelationInput
    Products?: ProductsOrderByWithRelationInput
  }

  export type Orders_ItensWhereUniqueInput = Prisma.AtLeast<{
    orders_id?: string
    products_id?: string
    AND?: Orders_ItensWhereInput | Orders_ItensWhereInput[]
    OR?: Orders_ItensWhereInput[]
    NOT?: Orders_ItensWhereInput | Orders_ItensWhereInput[]
    Orders?: XOR<OrdersScalarRelationFilter, OrdersWhereInput>
    Products?: XOR<ProductsScalarRelationFilter, ProductsWhereInput>
  }, "orders_id" | "products_id">

  export type Orders_ItensOrderByWithAggregationInput = {
    orders_id?: SortOrder
    products_id?: SortOrder
    _count?: Orders_ItensCountOrderByAggregateInput
    _max?: Orders_ItensMaxOrderByAggregateInput
    _min?: Orders_ItensMinOrderByAggregateInput
  }

  export type Orders_ItensScalarWhereWithAggregatesInput = {
    AND?: Orders_ItensScalarWhereWithAggregatesInput | Orders_ItensScalarWhereWithAggregatesInput[]
    OR?: Orders_ItensScalarWhereWithAggregatesInput[]
    NOT?: Orders_ItensScalarWhereWithAggregatesInput | Orders_ItensScalarWhereWithAggregatesInput[]
    orders_id?: StringWithAggregatesFilter<"Orders_Itens"> | string
    products_id?: StringWithAggregatesFilter<"Orders_Itens"> | string
  }

  export type UsersCreateInput = {
    id?: string
    name: string
    surname: string
    phone: string
    cep?: string | null
    photo?: string | null
    is_active?: boolean
    checked?: boolean
    validation_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    email?: string | null
    passoword?: string | null
    enterprise?: CompaniesCreateNestedOneWithoutUsersInput
    rule: RulesCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateInput = {
    id?: string
    name: string
    surname: string
    phone: string
    cep?: string | null
    photo?: string | null
    is_active?: boolean
    checked?: boolean
    rule_id: string
    validation_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    email?: string | null
    enterprise_id?: string | null
    passoword?: string | null
  }

  export type UsersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    checked?: BoolFieldUpdateOperationsInput | boolean
    validation_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passoword?: NullableStringFieldUpdateOperationsInput | string | null
    enterprise?: CompaniesUpdateOneWithoutUsersNestedInput
    rule?: RulesUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    checked?: BoolFieldUpdateOperationsInput | boolean
    rule_id?: StringFieldUpdateOperationsInput | string
    validation_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    enterprise_id?: NullableStringFieldUpdateOperationsInput | string | null
    passoword?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersCreateManyInput = {
    id?: string
    name: string
    surname: string
    phone: string
    cep?: string | null
    photo?: string | null
    is_active?: boolean
    checked?: boolean
    rule_id: string
    validation_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    email?: string | null
    enterprise_id?: string | null
    passoword?: string | null
  }

  export type UsersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    checked?: BoolFieldUpdateOperationsInput | boolean
    validation_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passoword?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    checked?: BoolFieldUpdateOperationsInput | boolean
    rule_id?: StringFieldUpdateOperationsInput | string
    validation_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    enterprise_id?: NullableStringFieldUpdateOperationsInput | string | null
    passoword?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RulesCreateInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Users?: UsersCreateNestedManyWithoutRuleInput
  }

  export type RulesUncheckedCreateInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Users?: UsersUncheckedCreateNestedManyWithoutRuleInput
  }

  export type RulesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Users?: UsersUpdateManyWithoutRuleNestedInput
  }

  export type RulesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Users?: UsersUncheckedUpdateManyWithoutRuleNestedInput
  }

  export type RulesCreateManyInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type RulesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RulesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CompaniesCreateInput = {
    id?: string
    company_fantasy: string
    company_reason: string
    company_acronym: string
    logo_company?: string | null
    cnpj: string
    cep_address: string
    phone?: string | null
    is_active?: boolean
    opening_hours: Date | string
    close_hours: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    company_number: number
    warehouse?: WarehousesCreateNestedOneWithoutCompaniesInput
    Users?: UsersCreateNestedManyWithoutEnterpriseInput
  }

  export type CompaniesUncheckedCreateInput = {
    id?: string
    company_fantasy: string
    company_reason: string
    company_acronym: string
    logo_company?: string | null
    cnpj: string
    cep_address: string
    phone?: string | null
    is_active?: boolean
    warehouse_id?: string | null
    opening_hours: Date | string
    close_hours: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    company_number: number
    Users?: UsersUncheckedCreateNestedManyWithoutEnterpriseInput
  }

  export type CompaniesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_fantasy?: StringFieldUpdateOperationsInput | string
    company_reason?: StringFieldUpdateOperationsInput | string
    company_acronym?: StringFieldUpdateOperationsInput | string
    logo_company?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    cep_address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    opening_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    close_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_number?: IntFieldUpdateOperationsInput | number
    warehouse?: WarehousesUpdateOneWithoutCompaniesNestedInput
    Users?: UsersUpdateManyWithoutEnterpriseNestedInput
  }

  export type CompaniesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_fantasy?: StringFieldUpdateOperationsInput | string
    company_reason?: StringFieldUpdateOperationsInput | string
    company_acronym?: StringFieldUpdateOperationsInput | string
    logo_company?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    cep_address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    warehouse_id?: NullableStringFieldUpdateOperationsInput | string | null
    opening_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    close_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_number?: IntFieldUpdateOperationsInput | number
    Users?: UsersUncheckedUpdateManyWithoutEnterpriseNestedInput
  }

  export type CompaniesCreateManyInput = {
    id?: string
    company_fantasy: string
    company_reason: string
    company_acronym: string
    logo_company?: string | null
    cnpj: string
    cep_address: string
    phone?: string | null
    is_active?: boolean
    warehouse_id?: string | null
    opening_hours: Date | string
    close_hours: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    company_number: number
  }

  export type CompaniesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_fantasy?: StringFieldUpdateOperationsInput | string
    company_reason?: StringFieldUpdateOperationsInput | string
    company_acronym?: StringFieldUpdateOperationsInput | string
    logo_company?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    cep_address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    opening_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    close_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_number?: IntFieldUpdateOperationsInput | number
  }

  export type CompaniesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_fantasy?: StringFieldUpdateOperationsInput | string
    company_reason?: StringFieldUpdateOperationsInput | string
    company_acronym?: StringFieldUpdateOperationsInput | string
    logo_company?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    cep_address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    warehouse_id?: NullableStringFieldUpdateOperationsInput | string | null
    opening_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    close_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_number?: IntFieldUpdateOperationsInput | number
  }

  export type WarehousesCreateInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Companies?: CompaniesCreateNestedOneWithoutWarehouseInput
    Stocks?: StocksCreateNestedManyWithoutWarehouseInput
  }

  export type WarehousesUncheckedCreateInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Companies?: CompaniesUncheckedCreateNestedOneWithoutWarehouseInput
    Stocks?: StocksUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehousesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Companies?: CompaniesUpdateOneWithoutWarehouseNestedInput
    Stocks?: StocksUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehousesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Companies?: CompaniesUncheckedUpdateOneWithoutWarehouseNestedInput
    Stocks?: StocksUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehousesCreateManyInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type WarehousesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type WarehousesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StocksCreateInput = {
    id?: string
    current_quantity: number
    minimium_quantity: number
    maximum_quantity: number
    price: number
    purchase_price: number
    cost_price: number
    has_discount?: boolean
    discount_percentage?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Products?: ProductsCreateNestedManyWithoutStockInput
    warehouse: WarehousesCreateNestedOneWithoutStocksInput
  }

  export type StocksUncheckedCreateInput = {
    id?: string
    warehouse_id: string
    current_quantity: number
    minimium_quantity: number
    maximum_quantity: number
    price: number
    purchase_price: number
    cost_price: number
    has_discount?: boolean
    discount_percentage?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Products?: ProductsUncheckedCreateNestedManyWithoutStockInput
  }

  export type StocksUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    current_quantity?: IntFieldUpdateOperationsInput | number
    minimium_quantity?: IntFieldUpdateOperationsInput | number
    maximum_quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    purchase_price?: FloatFieldUpdateOperationsInput | number
    cost_price?: FloatFieldUpdateOperationsInput | number
    has_discount?: BoolFieldUpdateOperationsInput | boolean
    discount_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Products?: ProductsUpdateManyWithoutStockNestedInput
    warehouse?: WarehousesUpdateOneRequiredWithoutStocksNestedInput
  }

  export type StocksUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    warehouse_id?: StringFieldUpdateOperationsInput | string
    current_quantity?: IntFieldUpdateOperationsInput | number
    minimium_quantity?: IntFieldUpdateOperationsInput | number
    maximum_quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    purchase_price?: FloatFieldUpdateOperationsInput | number
    cost_price?: FloatFieldUpdateOperationsInput | number
    has_discount?: BoolFieldUpdateOperationsInput | boolean
    discount_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Products?: ProductsUncheckedUpdateManyWithoutStockNestedInput
  }

  export type StocksCreateManyInput = {
    id?: string
    warehouse_id: string
    current_quantity: number
    minimium_quantity: number
    maximum_quantity: number
    price: number
    purchase_price: number
    cost_price: number
    has_discount?: boolean
    discount_percentage?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type StocksUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    current_quantity?: IntFieldUpdateOperationsInput | number
    minimium_quantity?: IntFieldUpdateOperationsInput | number
    maximum_quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    purchase_price?: FloatFieldUpdateOperationsInput | number
    cost_price?: FloatFieldUpdateOperationsInput | number
    has_discount?: BoolFieldUpdateOperationsInput | boolean
    discount_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StocksUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    warehouse_id?: StringFieldUpdateOperationsInput | string
    current_quantity?: IntFieldUpdateOperationsInput | number
    minimium_quantity?: IntFieldUpdateOperationsInput | number
    maximum_quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    purchase_price?: FloatFieldUpdateOperationsInput | number
    cost_price?: FloatFieldUpdateOperationsInput | number
    has_discount?: BoolFieldUpdateOperationsInput | boolean
    discount_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductsCreateInput = {
    id?: string
    name: string
    product_code: string
    description?: string | null
    sales_unit: string
    is_active?: boolean
    date_of_inactivation?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    items?: Orders_ItensCreateNestedOneWithoutProductsInput
    brand: BrandsCreateNestedOneWithoutProductsInput
    stock: StocksCreateNestedOneWithoutProductsInput
    category: CategoriesCreateNestedOneWithoutProductsInput
    banners?: BannersCreateNestedManyWithoutProductsInput
    supliers?: SuppliersCreateNestedManyWithoutProductsInput
  }

  export type ProductsUncheckedCreateInput = {
    id?: string
    name: string
    stock_id: string
    category_id: string
    brand_id: string
    product_code: string
    description?: string | null
    sales_unit: string
    is_active?: boolean
    date_of_inactivation?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    items?: Orders_ItensUncheckedCreateNestedOneWithoutProductsInput
    banners?: BannersUncheckedCreateNestedManyWithoutProductsInput
    supliers?: SuppliersUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    product_code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sales_unit?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_of_inactivation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: Orders_ItensUpdateOneWithoutProductsNestedInput
    brand?: BrandsUpdateOneRequiredWithoutProductsNestedInput
    stock?: StocksUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoriesUpdateOneRequiredWithoutProductsNestedInput
    banners?: BannersUpdateManyWithoutProductsNestedInput
    supliers?: SuppliersUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stock_id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    brand_id?: StringFieldUpdateOperationsInput | string
    product_code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sales_unit?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_of_inactivation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: Orders_ItensUncheckedUpdateOneWithoutProductsNestedInput
    banners?: BannersUncheckedUpdateManyWithoutProductsNestedInput
    supliers?: SuppliersUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ProductsCreateManyInput = {
    id?: string
    name: string
    stock_id: string
    category_id: string
    brand_id: string
    product_code: string
    description?: string | null
    sales_unit: string
    is_active?: boolean
    date_of_inactivation?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ProductsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    product_code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sales_unit?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_of_inactivation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stock_id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    brand_id?: StringFieldUpdateOperationsInput | string
    product_code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sales_unit?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_of_inactivation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BrandsCreateInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Products?: ProductsCreateNestedManyWithoutBrandInput
  }

  export type BrandsUncheckedCreateInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Products?: ProductsUncheckedCreateNestedManyWithoutBrandInput
  }

  export type BrandsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Products?: ProductsUpdateManyWithoutBrandNestedInput
  }

  export type BrandsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Products?: ProductsUncheckedUpdateManyWithoutBrandNestedInput
  }

  export type BrandsCreateManyInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type BrandsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BrandsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BannersCreateInput = {
    id?: string
    url_imagem: string
    display_order?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
    products?: ProductsCreateNestedOneWithoutBannersInput
  }

  export type BannersUncheckedCreateInput = {
    id?: string
    url_imagem: string
    display_order?: number | null
    product_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type BannersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url_imagem?: StringFieldUpdateOperationsInput | string
    display_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: ProductsUpdateOneWithoutBannersNestedInput
  }

  export type BannersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url_imagem?: StringFieldUpdateOperationsInput | string
    display_order?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BannersCreateManyInput = {
    id?: string
    url_imagem: string
    display_order?: number | null
    product_id?: string | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type BannersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url_imagem?: StringFieldUpdateOperationsInput | string
    display_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BannersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url_imagem?: StringFieldUpdateOperationsInput | string
    display_order?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoriesCreateInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Products?: ProductsCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUncheckedCreateInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Products?: ProductsUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Products?: ProductsUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Products?: ProductsUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoriesCreateManyInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type CategoriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SuppliersCreateInput = {
    id?: string
    company_fantasy: string
    company_reason: string
    company_acronym: string
    cnpj: string
    email: string
    phone: string
    is_active?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    products?: ProductsCreateNestedManyWithoutSupliersInput
  }

  export type SuppliersUncheckedCreateInput = {
    id?: string
    company_fantasy: string
    company_reason: string
    company_acronym: string
    cnpj: string
    email: string
    phone: string
    is_active?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    products?: ProductsUncheckedCreateNestedManyWithoutSupliersInput
  }

  export type SuppliersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_fantasy?: StringFieldUpdateOperationsInput | string
    company_reason?: StringFieldUpdateOperationsInput | string
    company_acronym?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: ProductsUpdateManyWithoutSupliersNestedInput
  }

  export type SuppliersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_fantasy?: StringFieldUpdateOperationsInput | string
    company_reason?: StringFieldUpdateOperationsInput | string
    company_acronym?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: ProductsUncheckedUpdateManyWithoutSupliersNestedInput
  }

  export type SuppliersCreateManyInput = {
    id?: string
    company_fantasy: string
    company_reason: string
    company_acronym: string
    cnpj: string
    email: string
    phone: string
    is_active?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type SuppliersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_fantasy?: StringFieldUpdateOperationsInput | string
    company_reason?: StringFieldUpdateOperationsInput | string
    company_acronym?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SuppliersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_fantasy?: StringFieldUpdateOperationsInput | string
    company_reason?: StringFieldUpdateOperationsInput | string
    company_acronym?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrdersCreateInput = {
    id?: string
    release_date: Date | string
    completion_date: Date | string
    cancellation_date?: Date | string | null
    delivery_date?: Date | string | null
    gross_value: number
    net_value: number
    shipping_price: number
    type_sale: string
    cep_addres?: string | null
    addres_number?: string | null
    delivery_code?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    status: StatusCreateNestedOneWithoutOrdersInput
    items?: Orders_ItensCreateNestedOneWithoutOrdersInput
    method_payments?: Method_PaymentsCreateNestedManyWithoutOrdersInput
  }

  export type OrdersUncheckedCreateInput = {
    id?: string
    release_date: Date | string
    completion_date: Date | string
    status_id: string
    cancellation_date?: Date | string | null
    delivery_date?: Date | string | null
    gross_value: number
    net_value: number
    shipping_price: number
    type_sale: string
    cep_addres?: string | null
    addres_number?: string | null
    delivery_code?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    items?: Orders_ItensUncheckedCreateNestedOneWithoutOrdersInput
    method_payments?: Method_PaymentsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type OrdersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    completion_date?: DateTimeFieldUpdateOperationsInput | Date | string
    cancellation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gross_value?: FloatFieldUpdateOperationsInput | number
    net_value?: FloatFieldUpdateOperationsInput | number
    shipping_price?: FloatFieldUpdateOperationsInput | number
    type_sale?: StringFieldUpdateOperationsInput | string
    cep_addres?: NullableStringFieldUpdateOperationsInput | string | null
    addres_number?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StatusUpdateOneRequiredWithoutOrdersNestedInput
    items?: Orders_ItensUpdateOneWithoutOrdersNestedInput
    method_payments?: Method_PaymentsUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    completion_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status_id?: StringFieldUpdateOperationsInput | string
    cancellation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gross_value?: FloatFieldUpdateOperationsInput | number
    net_value?: FloatFieldUpdateOperationsInput | number
    shipping_price?: FloatFieldUpdateOperationsInput | number
    type_sale?: StringFieldUpdateOperationsInput | string
    cep_addres?: NullableStringFieldUpdateOperationsInput | string | null
    addres_number?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: Orders_ItensUncheckedUpdateOneWithoutOrdersNestedInput
    method_payments?: Method_PaymentsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersCreateManyInput = {
    id?: string
    release_date: Date | string
    completion_date: Date | string
    status_id: string
    cancellation_date?: Date | string | null
    delivery_date?: Date | string | null
    gross_value: number
    net_value: number
    shipping_price: number
    type_sale: string
    cep_addres?: string | null
    addres_number?: string | null
    delivery_code?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type OrdersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    completion_date?: DateTimeFieldUpdateOperationsInput | Date | string
    cancellation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gross_value?: FloatFieldUpdateOperationsInput | number
    net_value?: FloatFieldUpdateOperationsInput | number
    shipping_price?: FloatFieldUpdateOperationsInput | number
    type_sale?: StringFieldUpdateOperationsInput | string
    cep_addres?: NullableStringFieldUpdateOperationsInput | string | null
    addres_number?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrdersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    completion_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status_id?: StringFieldUpdateOperationsInput | string
    cancellation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gross_value?: FloatFieldUpdateOperationsInput | number
    net_value?: FloatFieldUpdateOperationsInput | number
    shipping_price?: FloatFieldUpdateOperationsInput | number
    type_sale?: StringFieldUpdateOperationsInput | string
    cep_addres?: NullableStringFieldUpdateOperationsInput | string | null
    addres_number?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StatusCreateInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Orders?: OrdersCreateNestedManyWithoutStatusInput
  }

  export type StatusUncheckedCreateInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Orders?: OrdersUncheckedCreateNestedManyWithoutStatusInput
  }

  export type StatusUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Orders?: OrdersUpdateManyWithoutStatusNestedInput
  }

  export type StatusUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Orders?: OrdersUncheckedUpdateManyWithoutStatusNestedInput
  }

  export type StatusCreateManyInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type StatusUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StatusUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Method_PaymentsCreateInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    orders?: OrdersCreateNestedManyWithoutMethod_paymentsInput
  }

  export type Method_PaymentsUncheckedCreateInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    orders?: OrdersUncheckedCreateNestedManyWithoutMethod_paymentsInput
  }

  export type Method_PaymentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: OrdersUpdateManyWithoutMethod_paymentsNestedInput
  }

  export type Method_PaymentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: OrdersUncheckedUpdateManyWithoutMethod_paymentsNestedInput
  }

  export type Method_PaymentsCreateManyInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type Method_PaymentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Method_PaymentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Orders_ItensCreateInput = {
    Orders: OrdersCreateNestedOneWithoutItemsInput
    Products: ProductsCreateNestedOneWithoutItemsInput
  }

  export type Orders_ItensUncheckedCreateInput = {
    orders_id: string
    products_id: string
  }

  export type Orders_ItensUpdateInput = {
    Orders?: OrdersUpdateOneRequiredWithoutItemsNestedInput
    Products?: ProductsUpdateOneRequiredWithoutItemsNestedInput
  }

  export type Orders_ItensUncheckedUpdateInput = {
    orders_id?: StringFieldUpdateOperationsInput | string
    products_id?: StringFieldUpdateOperationsInput | string
  }

  export type Orders_ItensCreateManyInput = {
    orders_id: string
    products_id: string
  }

  export type Orders_ItensUpdateManyMutationInput = {

  }

  export type Orders_ItensUncheckedUpdateManyInput = {
    orders_id?: StringFieldUpdateOperationsInput | string
    products_id?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type CompaniesNullableScalarRelationFilter = {
    is?: CompaniesWhereInput | null
    isNot?: CompaniesWhereInput | null
  }

  export type RulesScalarRelationFilter = {
    is?: RulesWhereInput
    isNot?: RulesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsersCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    phone?: SortOrder
    cep?: SortOrder
    photo?: SortOrder
    is_active?: SortOrder
    checked?: SortOrder
    rule_id?: SortOrder
    validation_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    email?: SortOrder
    enterprise_id?: SortOrder
    passoword?: SortOrder
  }

  export type UsersMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    phone?: SortOrder
    cep?: SortOrder
    photo?: SortOrder
    is_active?: SortOrder
    checked?: SortOrder
    rule_id?: SortOrder
    validation_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    email?: SortOrder
    enterprise_id?: SortOrder
    passoword?: SortOrder
  }

  export type UsersMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    surname?: SortOrder
    phone?: SortOrder
    cep?: SortOrder
    photo?: SortOrder
    is_active?: SortOrder
    checked?: SortOrder
    rule_id?: SortOrder
    validation_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    email?: SortOrder
    enterprise_id?: SortOrder
    passoword?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type UsersListRelationFilter = {
    every?: UsersWhereInput
    some?: UsersWhereInput
    none?: UsersWhereInput
  }

  export type UsersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RulesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RulesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type RulesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type WarehousesNullableScalarRelationFilter = {
    is?: WarehousesWhereInput | null
    isNot?: WarehousesWhereInput | null
  }

  export type CompaniesCountOrderByAggregateInput = {
    id?: SortOrder
    company_fantasy?: SortOrder
    company_reason?: SortOrder
    company_acronym?: SortOrder
    logo_company?: SortOrder
    cnpj?: SortOrder
    cep_address?: SortOrder
    phone?: SortOrder
    is_active?: SortOrder
    warehouse_id?: SortOrder
    opening_hours?: SortOrder
    close_hours?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    company_number?: SortOrder
  }

  export type CompaniesAvgOrderByAggregateInput = {
    company_number?: SortOrder
  }

  export type CompaniesMaxOrderByAggregateInput = {
    id?: SortOrder
    company_fantasy?: SortOrder
    company_reason?: SortOrder
    company_acronym?: SortOrder
    logo_company?: SortOrder
    cnpj?: SortOrder
    cep_address?: SortOrder
    phone?: SortOrder
    is_active?: SortOrder
    warehouse_id?: SortOrder
    opening_hours?: SortOrder
    close_hours?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    company_number?: SortOrder
  }

  export type CompaniesMinOrderByAggregateInput = {
    id?: SortOrder
    company_fantasy?: SortOrder
    company_reason?: SortOrder
    company_acronym?: SortOrder
    logo_company?: SortOrder
    cnpj?: SortOrder
    cep_address?: SortOrder
    phone?: SortOrder
    is_active?: SortOrder
    warehouse_id?: SortOrder
    opening_hours?: SortOrder
    close_hours?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    company_number?: SortOrder
  }

  export type CompaniesSumOrderByAggregateInput = {
    company_number?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type StocksListRelationFilter = {
    every?: StocksWhereInput
    some?: StocksWhereInput
    none?: StocksWhereInput
  }

  export type StocksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WarehousesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WarehousesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type WarehousesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ProductsListRelationFilter = {
    every?: ProductsWhereInput
    some?: ProductsWhereInput
    none?: ProductsWhereInput
  }

  export type WarehousesScalarRelationFilter = {
    is?: WarehousesWhereInput
    isNot?: WarehousesWhereInput
  }

  export type ProductsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StocksCountOrderByAggregateInput = {
    id?: SortOrder
    warehouse_id?: SortOrder
    current_quantity?: SortOrder
    minimium_quantity?: SortOrder
    maximum_quantity?: SortOrder
    price?: SortOrder
    purchase_price?: SortOrder
    cost_price?: SortOrder
    has_discount?: SortOrder
    discount_percentage?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StocksAvgOrderByAggregateInput = {
    current_quantity?: SortOrder
    minimium_quantity?: SortOrder
    maximum_quantity?: SortOrder
    price?: SortOrder
    purchase_price?: SortOrder
    cost_price?: SortOrder
    discount_percentage?: SortOrder
  }

  export type StocksMaxOrderByAggregateInput = {
    id?: SortOrder
    warehouse_id?: SortOrder
    current_quantity?: SortOrder
    minimium_quantity?: SortOrder
    maximum_quantity?: SortOrder
    price?: SortOrder
    purchase_price?: SortOrder
    cost_price?: SortOrder
    has_discount?: SortOrder
    discount_percentage?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StocksMinOrderByAggregateInput = {
    id?: SortOrder
    warehouse_id?: SortOrder
    current_quantity?: SortOrder
    minimium_quantity?: SortOrder
    maximum_quantity?: SortOrder
    price?: SortOrder
    purchase_price?: SortOrder
    cost_price?: SortOrder
    has_discount?: SortOrder
    discount_percentage?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StocksSumOrderByAggregateInput = {
    current_quantity?: SortOrder
    minimium_quantity?: SortOrder
    maximum_quantity?: SortOrder
    price?: SortOrder
    purchase_price?: SortOrder
    cost_price?: SortOrder
    discount_percentage?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type Orders_ItensNullableScalarRelationFilter = {
    is?: Orders_ItensWhereInput | null
    isNot?: Orders_ItensWhereInput | null
  }

  export type BrandsScalarRelationFilter = {
    is?: BrandsWhereInput
    isNot?: BrandsWhereInput
  }

  export type StocksScalarRelationFilter = {
    is?: StocksWhereInput
    isNot?: StocksWhereInput
  }

  export type CategoriesScalarRelationFilter = {
    is?: CategoriesWhereInput
    isNot?: CategoriesWhereInput
  }

  export type BannersListRelationFilter = {
    every?: BannersWhereInput
    some?: BannersWhereInput
    none?: BannersWhereInput
  }

  export type SuppliersListRelationFilter = {
    every?: SuppliersWhereInput
    some?: SuppliersWhereInput
    none?: SuppliersWhereInput
  }

  export type BannersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SuppliersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stock_id?: SortOrder
    category_id?: SortOrder
    brand_id?: SortOrder
    product_code?: SortOrder
    description?: SortOrder
    sales_unit?: SortOrder
    is_active?: SortOrder
    date_of_inactivation?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stock_id?: SortOrder
    category_id?: SortOrder
    brand_id?: SortOrder
    product_code?: SortOrder
    description?: SortOrder
    sales_unit?: SortOrder
    is_active?: SortOrder
    date_of_inactivation?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ProductsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    stock_id?: SortOrder
    category_id?: SortOrder
    brand_id?: SortOrder
    product_code?: SortOrder
    description?: SortOrder
    sales_unit?: SortOrder
    is_active?: SortOrder
    date_of_inactivation?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BrandsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BrandsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BrandsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
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

  export type ProductsNullableScalarRelationFilter = {
    is?: ProductsWhereInput | null
    isNot?: ProductsWhereInput | null
  }

  export type BannersCountOrderByAggregateInput = {
    id?: SortOrder
    url_imagem?: SortOrder
    display_order?: SortOrder
    product_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BannersAvgOrderByAggregateInput = {
    display_order?: SortOrder
  }

  export type BannersMaxOrderByAggregateInput = {
    id?: SortOrder
    url_imagem?: SortOrder
    display_order?: SortOrder
    product_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BannersMinOrderByAggregateInput = {
    id?: SortOrder
    url_imagem?: SortOrder
    display_order?: SortOrder
    product_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type BannersSumOrderByAggregateInput = {
    display_order?: SortOrder
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

  export type CategoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type CategoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SuppliersCountOrderByAggregateInput = {
    id?: SortOrder
    company_fantasy?: SortOrder
    company_reason?: SortOrder
    company_acronym?: SortOrder
    cnpj?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SuppliersMaxOrderByAggregateInput = {
    id?: SortOrder
    company_fantasy?: SortOrder
    company_reason?: SortOrder
    company_acronym?: SortOrder
    cnpj?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type SuppliersMinOrderByAggregateInput = {
    id?: SortOrder
    company_fantasy?: SortOrder
    company_reason?: SortOrder
    company_acronym?: SortOrder
    cnpj?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StatusScalarRelationFilter = {
    is?: StatusWhereInput
    isNot?: StatusWhereInput
  }

  export type Method_PaymentsListRelationFilter = {
    every?: Method_PaymentsWhereInput
    some?: Method_PaymentsWhereInput
    none?: Method_PaymentsWhereInput
  }

  export type Method_PaymentsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrdersCountOrderByAggregateInput = {
    id?: SortOrder
    release_date?: SortOrder
    completion_date?: SortOrder
    status_id?: SortOrder
    cancellation_date?: SortOrder
    delivery_date?: SortOrder
    gross_value?: SortOrder
    net_value?: SortOrder
    shipping_price?: SortOrder
    type_sale?: SortOrder
    cep_addres?: SortOrder
    addres_number?: SortOrder
    delivery_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrdersAvgOrderByAggregateInput = {
    gross_value?: SortOrder
    net_value?: SortOrder
    shipping_price?: SortOrder
  }

  export type OrdersMaxOrderByAggregateInput = {
    id?: SortOrder
    release_date?: SortOrder
    completion_date?: SortOrder
    status_id?: SortOrder
    cancellation_date?: SortOrder
    delivery_date?: SortOrder
    gross_value?: SortOrder
    net_value?: SortOrder
    shipping_price?: SortOrder
    type_sale?: SortOrder
    cep_addres?: SortOrder
    addres_number?: SortOrder
    delivery_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrdersMinOrderByAggregateInput = {
    id?: SortOrder
    release_date?: SortOrder
    completion_date?: SortOrder
    status_id?: SortOrder
    cancellation_date?: SortOrder
    delivery_date?: SortOrder
    gross_value?: SortOrder
    net_value?: SortOrder
    shipping_price?: SortOrder
    type_sale?: SortOrder
    cep_addres?: SortOrder
    addres_number?: SortOrder
    delivery_code?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrdersSumOrderByAggregateInput = {
    gross_value?: SortOrder
    net_value?: SortOrder
    shipping_price?: SortOrder
  }

  export type OrdersListRelationFilter = {
    every?: OrdersWhereInput
    some?: OrdersWhereInput
    none?: OrdersWhereInput
  }

  export type OrdersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StatusCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StatusMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type StatusMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Method_PaymentsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Method_PaymentsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type Method_PaymentsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type OrdersScalarRelationFilter = {
    is?: OrdersWhereInput
    isNot?: OrdersWhereInput
  }

  export type ProductsScalarRelationFilter = {
    is?: ProductsWhereInput
    isNot?: ProductsWhereInput
  }

  export type Orders_ItensCountOrderByAggregateInput = {
    orders_id?: SortOrder
    products_id?: SortOrder
  }

  export type Orders_ItensMaxOrderByAggregateInput = {
    orders_id?: SortOrder
    products_id?: SortOrder
  }

  export type Orders_ItensMinOrderByAggregateInput = {
    orders_id?: SortOrder
    products_id?: SortOrder
  }

  export type CompaniesCreateNestedOneWithoutUsersInput = {
    create?: XOR<CompaniesCreateWithoutUsersInput, CompaniesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompaniesCreateOrConnectWithoutUsersInput
    connect?: CompaniesWhereUniqueInput
  }

  export type RulesCreateNestedOneWithoutUsersInput = {
    create?: XOR<RulesCreateWithoutUsersInput, RulesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RulesCreateOrConnectWithoutUsersInput
    connect?: RulesWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type CompaniesUpdateOneWithoutUsersNestedInput = {
    create?: XOR<CompaniesCreateWithoutUsersInput, CompaniesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CompaniesCreateOrConnectWithoutUsersInput
    upsert?: CompaniesUpsertWithoutUsersInput
    disconnect?: CompaniesWhereInput | boolean
    delete?: CompaniesWhereInput | boolean
    connect?: CompaniesWhereUniqueInput
    update?: XOR<XOR<CompaniesUpdateToOneWithWhereWithoutUsersInput, CompaniesUpdateWithoutUsersInput>, CompaniesUncheckedUpdateWithoutUsersInput>
  }

  export type RulesUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RulesCreateWithoutUsersInput, RulesUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RulesCreateOrConnectWithoutUsersInput
    upsert?: RulesUpsertWithoutUsersInput
    connect?: RulesWhereUniqueInput
    update?: XOR<XOR<RulesUpdateToOneWithWhereWithoutUsersInput, RulesUpdateWithoutUsersInput>, RulesUncheckedUpdateWithoutUsersInput>
  }

  export type UsersCreateNestedManyWithoutRuleInput = {
    create?: XOR<UsersCreateWithoutRuleInput, UsersUncheckedCreateWithoutRuleInput> | UsersCreateWithoutRuleInput[] | UsersUncheckedCreateWithoutRuleInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRuleInput | UsersCreateOrConnectWithoutRuleInput[]
    createMany?: UsersCreateManyRuleInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedManyWithoutRuleInput = {
    create?: XOR<UsersCreateWithoutRuleInput, UsersUncheckedCreateWithoutRuleInput> | UsersCreateWithoutRuleInput[] | UsersUncheckedCreateWithoutRuleInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRuleInput | UsersCreateOrConnectWithoutRuleInput[]
    createMany?: UsersCreateManyRuleInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type UsersUpdateManyWithoutRuleNestedInput = {
    create?: XOR<UsersCreateWithoutRuleInput, UsersUncheckedCreateWithoutRuleInput> | UsersCreateWithoutRuleInput[] | UsersUncheckedCreateWithoutRuleInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRuleInput | UsersCreateOrConnectWithoutRuleInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutRuleInput | UsersUpsertWithWhereUniqueWithoutRuleInput[]
    createMany?: UsersCreateManyRuleInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutRuleInput | UsersUpdateWithWhereUniqueWithoutRuleInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutRuleInput | UsersUpdateManyWithWhereWithoutRuleInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type UsersUncheckedUpdateManyWithoutRuleNestedInput = {
    create?: XOR<UsersCreateWithoutRuleInput, UsersUncheckedCreateWithoutRuleInput> | UsersCreateWithoutRuleInput[] | UsersUncheckedCreateWithoutRuleInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutRuleInput | UsersCreateOrConnectWithoutRuleInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutRuleInput | UsersUpsertWithWhereUniqueWithoutRuleInput[]
    createMany?: UsersCreateManyRuleInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutRuleInput | UsersUpdateWithWhereUniqueWithoutRuleInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutRuleInput | UsersUpdateManyWithWhereWithoutRuleInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type WarehousesCreateNestedOneWithoutCompaniesInput = {
    create?: XOR<WarehousesCreateWithoutCompaniesInput, WarehousesUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: WarehousesCreateOrConnectWithoutCompaniesInput
    connect?: WarehousesWhereUniqueInput
  }

  export type UsersCreateNestedManyWithoutEnterpriseInput = {
    create?: XOR<UsersCreateWithoutEnterpriseInput, UsersUncheckedCreateWithoutEnterpriseInput> | UsersCreateWithoutEnterpriseInput[] | UsersUncheckedCreateWithoutEnterpriseInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutEnterpriseInput | UsersCreateOrConnectWithoutEnterpriseInput[]
    createMany?: UsersCreateManyEnterpriseInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type UsersUncheckedCreateNestedManyWithoutEnterpriseInput = {
    create?: XOR<UsersCreateWithoutEnterpriseInput, UsersUncheckedCreateWithoutEnterpriseInput> | UsersCreateWithoutEnterpriseInput[] | UsersUncheckedCreateWithoutEnterpriseInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutEnterpriseInput | UsersCreateOrConnectWithoutEnterpriseInput[]
    createMany?: UsersCreateManyEnterpriseInputEnvelope
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WarehousesUpdateOneWithoutCompaniesNestedInput = {
    create?: XOR<WarehousesCreateWithoutCompaniesInput, WarehousesUncheckedCreateWithoutCompaniesInput>
    connectOrCreate?: WarehousesCreateOrConnectWithoutCompaniesInput
    upsert?: WarehousesUpsertWithoutCompaniesInput
    disconnect?: WarehousesWhereInput | boolean
    delete?: WarehousesWhereInput | boolean
    connect?: WarehousesWhereUniqueInput
    update?: XOR<XOR<WarehousesUpdateToOneWithWhereWithoutCompaniesInput, WarehousesUpdateWithoutCompaniesInput>, WarehousesUncheckedUpdateWithoutCompaniesInput>
  }

  export type UsersUpdateManyWithoutEnterpriseNestedInput = {
    create?: XOR<UsersCreateWithoutEnterpriseInput, UsersUncheckedCreateWithoutEnterpriseInput> | UsersCreateWithoutEnterpriseInput[] | UsersUncheckedCreateWithoutEnterpriseInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutEnterpriseInput | UsersCreateOrConnectWithoutEnterpriseInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutEnterpriseInput | UsersUpsertWithWhereUniqueWithoutEnterpriseInput[]
    createMany?: UsersCreateManyEnterpriseInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutEnterpriseInput | UsersUpdateWithWhereUniqueWithoutEnterpriseInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutEnterpriseInput | UsersUpdateManyWithWhereWithoutEnterpriseInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type UsersUncheckedUpdateManyWithoutEnterpriseNestedInput = {
    create?: XOR<UsersCreateWithoutEnterpriseInput, UsersUncheckedCreateWithoutEnterpriseInput> | UsersCreateWithoutEnterpriseInput[] | UsersUncheckedCreateWithoutEnterpriseInput[]
    connectOrCreate?: UsersCreateOrConnectWithoutEnterpriseInput | UsersCreateOrConnectWithoutEnterpriseInput[]
    upsert?: UsersUpsertWithWhereUniqueWithoutEnterpriseInput | UsersUpsertWithWhereUniqueWithoutEnterpriseInput[]
    createMany?: UsersCreateManyEnterpriseInputEnvelope
    set?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    disconnect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    delete?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    connect?: UsersWhereUniqueInput | UsersWhereUniqueInput[]
    update?: UsersUpdateWithWhereUniqueWithoutEnterpriseInput | UsersUpdateWithWhereUniqueWithoutEnterpriseInput[]
    updateMany?: UsersUpdateManyWithWhereWithoutEnterpriseInput | UsersUpdateManyWithWhereWithoutEnterpriseInput[]
    deleteMany?: UsersScalarWhereInput | UsersScalarWhereInput[]
  }

  export type CompaniesCreateNestedOneWithoutWarehouseInput = {
    create?: XOR<CompaniesCreateWithoutWarehouseInput, CompaniesUncheckedCreateWithoutWarehouseInput>
    connectOrCreate?: CompaniesCreateOrConnectWithoutWarehouseInput
    connect?: CompaniesWhereUniqueInput
  }

  export type StocksCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<StocksCreateWithoutWarehouseInput, StocksUncheckedCreateWithoutWarehouseInput> | StocksCreateWithoutWarehouseInput[] | StocksUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: StocksCreateOrConnectWithoutWarehouseInput | StocksCreateOrConnectWithoutWarehouseInput[]
    createMany?: StocksCreateManyWarehouseInputEnvelope
    connect?: StocksWhereUniqueInput | StocksWhereUniqueInput[]
  }

  export type CompaniesUncheckedCreateNestedOneWithoutWarehouseInput = {
    create?: XOR<CompaniesCreateWithoutWarehouseInput, CompaniesUncheckedCreateWithoutWarehouseInput>
    connectOrCreate?: CompaniesCreateOrConnectWithoutWarehouseInput
    connect?: CompaniesWhereUniqueInput
  }

  export type StocksUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<StocksCreateWithoutWarehouseInput, StocksUncheckedCreateWithoutWarehouseInput> | StocksCreateWithoutWarehouseInput[] | StocksUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: StocksCreateOrConnectWithoutWarehouseInput | StocksCreateOrConnectWithoutWarehouseInput[]
    createMany?: StocksCreateManyWarehouseInputEnvelope
    connect?: StocksWhereUniqueInput | StocksWhereUniqueInput[]
  }

  export type CompaniesUpdateOneWithoutWarehouseNestedInput = {
    create?: XOR<CompaniesCreateWithoutWarehouseInput, CompaniesUncheckedCreateWithoutWarehouseInput>
    connectOrCreate?: CompaniesCreateOrConnectWithoutWarehouseInput
    upsert?: CompaniesUpsertWithoutWarehouseInput
    disconnect?: CompaniesWhereInput | boolean
    delete?: CompaniesWhereInput | boolean
    connect?: CompaniesWhereUniqueInput
    update?: XOR<XOR<CompaniesUpdateToOneWithWhereWithoutWarehouseInput, CompaniesUpdateWithoutWarehouseInput>, CompaniesUncheckedUpdateWithoutWarehouseInput>
  }

  export type StocksUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<StocksCreateWithoutWarehouseInput, StocksUncheckedCreateWithoutWarehouseInput> | StocksCreateWithoutWarehouseInput[] | StocksUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: StocksCreateOrConnectWithoutWarehouseInput | StocksCreateOrConnectWithoutWarehouseInput[]
    upsert?: StocksUpsertWithWhereUniqueWithoutWarehouseInput | StocksUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: StocksCreateManyWarehouseInputEnvelope
    set?: StocksWhereUniqueInput | StocksWhereUniqueInput[]
    disconnect?: StocksWhereUniqueInput | StocksWhereUniqueInput[]
    delete?: StocksWhereUniqueInput | StocksWhereUniqueInput[]
    connect?: StocksWhereUniqueInput | StocksWhereUniqueInput[]
    update?: StocksUpdateWithWhereUniqueWithoutWarehouseInput | StocksUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: StocksUpdateManyWithWhereWithoutWarehouseInput | StocksUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: StocksScalarWhereInput | StocksScalarWhereInput[]
  }

  export type CompaniesUncheckedUpdateOneWithoutWarehouseNestedInput = {
    create?: XOR<CompaniesCreateWithoutWarehouseInput, CompaniesUncheckedCreateWithoutWarehouseInput>
    connectOrCreate?: CompaniesCreateOrConnectWithoutWarehouseInput
    upsert?: CompaniesUpsertWithoutWarehouseInput
    disconnect?: CompaniesWhereInput | boolean
    delete?: CompaniesWhereInput | boolean
    connect?: CompaniesWhereUniqueInput
    update?: XOR<XOR<CompaniesUpdateToOneWithWhereWithoutWarehouseInput, CompaniesUpdateWithoutWarehouseInput>, CompaniesUncheckedUpdateWithoutWarehouseInput>
  }

  export type StocksUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<StocksCreateWithoutWarehouseInput, StocksUncheckedCreateWithoutWarehouseInput> | StocksCreateWithoutWarehouseInput[] | StocksUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: StocksCreateOrConnectWithoutWarehouseInput | StocksCreateOrConnectWithoutWarehouseInput[]
    upsert?: StocksUpsertWithWhereUniqueWithoutWarehouseInput | StocksUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: StocksCreateManyWarehouseInputEnvelope
    set?: StocksWhereUniqueInput | StocksWhereUniqueInput[]
    disconnect?: StocksWhereUniqueInput | StocksWhereUniqueInput[]
    delete?: StocksWhereUniqueInput | StocksWhereUniqueInput[]
    connect?: StocksWhereUniqueInput | StocksWhereUniqueInput[]
    update?: StocksUpdateWithWhereUniqueWithoutWarehouseInput | StocksUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: StocksUpdateManyWithWhereWithoutWarehouseInput | StocksUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: StocksScalarWhereInput | StocksScalarWhereInput[]
  }

  export type ProductsCreateNestedManyWithoutStockInput = {
    create?: XOR<ProductsCreateWithoutStockInput, ProductsUncheckedCreateWithoutStockInput> | ProductsCreateWithoutStockInput[] | ProductsUncheckedCreateWithoutStockInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutStockInput | ProductsCreateOrConnectWithoutStockInput[]
    createMany?: ProductsCreateManyStockInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type WarehousesCreateNestedOneWithoutStocksInput = {
    create?: XOR<WarehousesCreateWithoutStocksInput, WarehousesUncheckedCreateWithoutStocksInput>
    connectOrCreate?: WarehousesCreateOrConnectWithoutStocksInput
    connect?: WarehousesWhereUniqueInput
  }

  export type ProductsUncheckedCreateNestedManyWithoutStockInput = {
    create?: XOR<ProductsCreateWithoutStockInput, ProductsUncheckedCreateWithoutStockInput> | ProductsCreateWithoutStockInput[] | ProductsUncheckedCreateWithoutStockInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutStockInput | ProductsCreateOrConnectWithoutStockInput[]
    createMany?: ProductsCreateManyStockInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductsUpdateManyWithoutStockNestedInput = {
    create?: XOR<ProductsCreateWithoutStockInput, ProductsUncheckedCreateWithoutStockInput> | ProductsCreateWithoutStockInput[] | ProductsUncheckedCreateWithoutStockInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutStockInput | ProductsCreateOrConnectWithoutStockInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutStockInput | ProductsUpsertWithWhereUniqueWithoutStockInput[]
    createMany?: ProductsCreateManyStockInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutStockInput | ProductsUpdateWithWhereUniqueWithoutStockInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutStockInput | ProductsUpdateManyWithWhereWithoutStockInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type WarehousesUpdateOneRequiredWithoutStocksNestedInput = {
    create?: XOR<WarehousesCreateWithoutStocksInput, WarehousesUncheckedCreateWithoutStocksInput>
    connectOrCreate?: WarehousesCreateOrConnectWithoutStocksInput
    upsert?: WarehousesUpsertWithoutStocksInput
    connect?: WarehousesWhereUniqueInput
    update?: XOR<XOR<WarehousesUpdateToOneWithWhereWithoutStocksInput, WarehousesUpdateWithoutStocksInput>, WarehousesUncheckedUpdateWithoutStocksInput>
  }

  export type ProductsUncheckedUpdateManyWithoutStockNestedInput = {
    create?: XOR<ProductsCreateWithoutStockInput, ProductsUncheckedCreateWithoutStockInput> | ProductsCreateWithoutStockInput[] | ProductsUncheckedCreateWithoutStockInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutStockInput | ProductsCreateOrConnectWithoutStockInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutStockInput | ProductsUpsertWithWhereUniqueWithoutStockInput[]
    createMany?: ProductsCreateManyStockInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutStockInput | ProductsUpdateWithWhereUniqueWithoutStockInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutStockInput | ProductsUpdateManyWithWhereWithoutStockInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type Orders_ItensCreateNestedOneWithoutProductsInput = {
    create?: XOR<Orders_ItensCreateWithoutProductsInput, Orders_ItensUncheckedCreateWithoutProductsInput>
    connectOrCreate?: Orders_ItensCreateOrConnectWithoutProductsInput
    connect?: Orders_ItensWhereUniqueInput
  }

  export type BrandsCreateNestedOneWithoutProductsInput = {
    create?: XOR<BrandsCreateWithoutProductsInput, BrandsUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BrandsCreateOrConnectWithoutProductsInput
    connect?: BrandsWhereUniqueInput
  }

  export type StocksCreateNestedOneWithoutProductsInput = {
    create?: XOR<StocksCreateWithoutProductsInput, StocksUncheckedCreateWithoutProductsInput>
    connectOrCreate?: StocksCreateOrConnectWithoutProductsInput
    connect?: StocksWhereUniqueInput
  }

  export type CategoriesCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutProductsInput
    connect?: CategoriesWhereUniqueInput
  }

  export type BannersCreateNestedManyWithoutProductsInput = {
    create?: XOR<BannersCreateWithoutProductsInput, BannersUncheckedCreateWithoutProductsInput> | BannersCreateWithoutProductsInput[] | BannersUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: BannersCreateOrConnectWithoutProductsInput | BannersCreateOrConnectWithoutProductsInput[]
    createMany?: BannersCreateManyProductsInputEnvelope
    connect?: BannersWhereUniqueInput | BannersWhereUniqueInput[]
  }

  export type SuppliersCreateNestedManyWithoutProductsInput = {
    create?: XOR<SuppliersCreateWithoutProductsInput, SuppliersUncheckedCreateWithoutProductsInput> | SuppliersCreateWithoutProductsInput[] | SuppliersUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: SuppliersCreateOrConnectWithoutProductsInput | SuppliersCreateOrConnectWithoutProductsInput[]
    connect?: SuppliersWhereUniqueInput | SuppliersWhereUniqueInput[]
  }

  export type Orders_ItensUncheckedCreateNestedOneWithoutProductsInput = {
    create?: XOR<Orders_ItensCreateWithoutProductsInput, Orders_ItensUncheckedCreateWithoutProductsInput>
    connectOrCreate?: Orders_ItensCreateOrConnectWithoutProductsInput
    connect?: Orders_ItensWhereUniqueInput
  }

  export type BannersUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<BannersCreateWithoutProductsInput, BannersUncheckedCreateWithoutProductsInput> | BannersCreateWithoutProductsInput[] | BannersUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: BannersCreateOrConnectWithoutProductsInput | BannersCreateOrConnectWithoutProductsInput[]
    createMany?: BannersCreateManyProductsInputEnvelope
    connect?: BannersWhereUniqueInput | BannersWhereUniqueInput[]
  }

  export type SuppliersUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<SuppliersCreateWithoutProductsInput, SuppliersUncheckedCreateWithoutProductsInput> | SuppliersCreateWithoutProductsInput[] | SuppliersUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: SuppliersCreateOrConnectWithoutProductsInput | SuppliersCreateOrConnectWithoutProductsInput[]
    connect?: SuppliersWhereUniqueInput | SuppliersWhereUniqueInput[]
  }

  export type Orders_ItensUpdateOneWithoutProductsNestedInput = {
    create?: XOR<Orders_ItensCreateWithoutProductsInput, Orders_ItensUncheckedCreateWithoutProductsInput>
    connectOrCreate?: Orders_ItensCreateOrConnectWithoutProductsInput
    upsert?: Orders_ItensUpsertWithoutProductsInput
    disconnect?: Orders_ItensWhereInput | boolean
    delete?: Orders_ItensWhereInput | boolean
    connect?: Orders_ItensWhereUniqueInput
    update?: XOR<XOR<Orders_ItensUpdateToOneWithWhereWithoutProductsInput, Orders_ItensUpdateWithoutProductsInput>, Orders_ItensUncheckedUpdateWithoutProductsInput>
  }

  export type BrandsUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<BrandsCreateWithoutProductsInput, BrandsUncheckedCreateWithoutProductsInput>
    connectOrCreate?: BrandsCreateOrConnectWithoutProductsInput
    upsert?: BrandsUpsertWithoutProductsInput
    connect?: BrandsWhereUniqueInput
    update?: XOR<XOR<BrandsUpdateToOneWithWhereWithoutProductsInput, BrandsUpdateWithoutProductsInput>, BrandsUncheckedUpdateWithoutProductsInput>
  }

  export type StocksUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<StocksCreateWithoutProductsInput, StocksUncheckedCreateWithoutProductsInput>
    connectOrCreate?: StocksCreateOrConnectWithoutProductsInput
    upsert?: StocksUpsertWithoutProductsInput
    connect?: StocksWhereUniqueInput
    update?: XOR<XOR<StocksUpdateToOneWithWhereWithoutProductsInput, StocksUpdateWithoutProductsInput>, StocksUncheckedUpdateWithoutProductsInput>
  }

  export type CategoriesUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoriesCreateOrConnectWithoutProductsInput
    upsert?: CategoriesUpsertWithoutProductsInput
    connect?: CategoriesWhereUniqueInput
    update?: XOR<XOR<CategoriesUpdateToOneWithWhereWithoutProductsInput, CategoriesUpdateWithoutProductsInput>, CategoriesUncheckedUpdateWithoutProductsInput>
  }

  export type BannersUpdateManyWithoutProductsNestedInput = {
    create?: XOR<BannersCreateWithoutProductsInput, BannersUncheckedCreateWithoutProductsInput> | BannersCreateWithoutProductsInput[] | BannersUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: BannersCreateOrConnectWithoutProductsInput | BannersCreateOrConnectWithoutProductsInput[]
    upsert?: BannersUpsertWithWhereUniqueWithoutProductsInput | BannersUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: BannersCreateManyProductsInputEnvelope
    set?: BannersWhereUniqueInput | BannersWhereUniqueInput[]
    disconnect?: BannersWhereUniqueInput | BannersWhereUniqueInput[]
    delete?: BannersWhereUniqueInput | BannersWhereUniqueInput[]
    connect?: BannersWhereUniqueInput | BannersWhereUniqueInput[]
    update?: BannersUpdateWithWhereUniqueWithoutProductsInput | BannersUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: BannersUpdateManyWithWhereWithoutProductsInput | BannersUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: BannersScalarWhereInput | BannersScalarWhereInput[]
  }

  export type SuppliersUpdateManyWithoutProductsNestedInput = {
    create?: XOR<SuppliersCreateWithoutProductsInput, SuppliersUncheckedCreateWithoutProductsInput> | SuppliersCreateWithoutProductsInput[] | SuppliersUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: SuppliersCreateOrConnectWithoutProductsInput | SuppliersCreateOrConnectWithoutProductsInput[]
    upsert?: SuppliersUpsertWithWhereUniqueWithoutProductsInput | SuppliersUpsertWithWhereUniqueWithoutProductsInput[]
    set?: SuppliersWhereUniqueInput | SuppliersWhereUniqueInput[]
    disconnect?: SuppliersWhereUniqueInput | SuppliersWhereUniqueInput[]
    delete?: SuppliersWhereUniqueInput | SuppliersWhereUniqueInput[]
    connect?: SuppliersWhereUniqueInput | SuppliersWhereUniqueInput[]
    update?: SuppliersUpdateWithWhereUniqueWithoutProductsInput | SuppliersUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: SuppliersUpdateManyWithWhereWithoutProductsInput | SuppliersUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: SuppliersScalarWhereInput | SuppliersScalarWhereInput[]
  }

  export type Orders_ItensUncheckedUpdateOneWithoutProductsNestedInput = {
    create?: XOR<Orders_ItensCreateWithoutProductsInput, Orders_ItensUncheckedCreateWithoutProductsInput>
    connectOrCreate?: Orders_ItensCreateOrConnectWithoutProductsInput
    upsert?: Orders_ItensUpsertWithoutProductsInput
    disconnect?: Orders_ItensWhereInput | boolean
    delete?: Orders_ItensWhereInput | boolean
    connect?: Orders_ItensWhereUniqueInput
    update?: XOR<XOR<Orders_ItensUpdateToOneWithWhereWithoutProductsInput, Orders_ItensUpdateWithoutProductsInput>, Orders_ItensUncheckedUpdateWithoutProductsInput>
  }

  export type BannersUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<BannersCreateWithoutProductsInput, BannersUncheckedCreateWithoutProductsInput> | BannersCreateWithoutProductsInput[] | BannersUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: BannersCreateOrConnectWithoutProductsInput | BannersCreateOrConnectWithoutProductsInput[]
    upsert?: BannersUpsertWithWhereUniqueWithoutProductsInput | BannersUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: BannersCreateManyProductsInputEnvelope
    set?: BannersWhereUniqueInput | BannersWhereUniqueInput[]
    disconnect?: BannersWhereUniqueInput | BannersWhereUniqueInput[]
    delete?: BannersWhereUniqueInput | BannersWhereUniqueInput[]
    connect?: BannersWhereUniqueInput | BannersWhereUniqueInput[]
    update?: BannersUpdateWithWhereUniqueWithoutProductsInput | BannersUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: BannersUpdateManyWithWhereWithoutProductsInput | BannersUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: BannersScalarWhereInput | BannersScalarWhereInput[]
  }

  export type SuppliersUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<SuppliersCreateWithoutProductsInput, SuppliersUncheckedCreateWithoutProductsInput> | SuppliersCreateWithoutProductsInput[] | SuppliersUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: SuppliersCreateOrConnectWithoutProductsInput | SuppliersCreateOrConnectWithoutProductsInput[]
    upsert?: SuppliersUpsertWithWhereUniqueWithoutProductsInput | SuppliersUpsertWithWhereUniqueWithoutProductsInput[]
    set?: SuppliersWhereUniqueInput | SuppliersWhereUniqueInput[]
    disconnect?: SuppliersWhereUniqueInput | SuppliersWhereUniqueInput[]
    delete?: SuppliersWhereUniqueInput | SuppliersWhereUniqueInput[]
    connect?: SuppliersWhereUniqueInput | SuppliersWhereUniqueInput[]
    update?: SuppliersUpdateWithWhereUniqueWithoutProductsInput | SuppliersUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: SuppliersUpdateManyWithWhereWithoutProductsInput | SuppliersUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: SuppliersScalarWhereInput | SuppliersScalarWhereInput[]
  }

  export type ProductsCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProductsCreateWithoutBrandInput, ProductsUncheckedCreateWithoutBrandInput> | ProductsCreateWithoutBrandInput[] | ProductsUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutBrandInput | ProductsCreateOrConnectWithoutBrandInput[]
    createMany?: ProductsCreateManyBrandInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUncheckedCreateNestedManyWithoutBrandInput = {
    create?: XOR<ProductsCreateWithoutBrandInput, ProductsUncheckedCreateWithoutBrandInput> | ProductsCreateWithoutBrandInput[] | ProductsUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutBrandInput | ProductsCreateOrConnectWithoutBrandInput[]
    createMany?: ProductsCreateManyBrandInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProductsCreateWithoutBrandInput, ProductsUncheckedCreateWithoutBrandInput> | ProductsCreateWithoutBrandInput[] | ProductsUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutBrandInput | ProductsCreateOrConnectWithoutBrandInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutBrandInput | ProductsUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProductsCreateManyBrandInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutBrandInput | ProductsUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutBrandInput | ProductsUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type ProductsUncheckedUpdateManyWithoutBrandNestedInput = {
    create?: XOR<ProductsCreateWithoutBrandInput, ProductsUncheckedCreateWithoutBrandInput> | ProductsCreateWithoutBrandInput[] | ProductsUncheckedCreateWithoutBrandInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutBrandInput | ProductsCreateOrConnectWithoutBrandInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutBrandInput | ProductsUpsertWithWhereUniqueWithoutBrandInput[]
    createMany?: ProductsCreateManyBrandInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutBrandInput | ProductsUpdateWithWhereUniqueWithoutBrandInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutBrandInput | ProductsUpdateManyWithWhereWithoutBrandInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type ProductsCreateNestedOneWithoutBannersInput = {
    create?: XOR<ProductsCreateWithoutBannersInput, ProductsUncheckedCreateWithoutBannersInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutBannersInput
    connect?: ProductsWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductsUpdateOneWithoutBannersNestedInput = {
    create?: XOR<ProductsCreateWithoutBannersInput, ProductsUncheckedCreateWithoutBannersInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutBannersInput
    upsert?: ProductsUpsertWithoutBannersInput
    disconnect?: ProductsWhereInput | boolean
    delete?: ProductsWhereInput | boolean
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutBannersInput, ProductsUpdateWithoutBannersInput>, ProductsUncheckedUpdateWithoutBannersInput>
  }

  export type ProductsCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCategoryInput | ProductsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCategoryInput | ProductsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCategoryInput | ProductsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type ProductsUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput> | ProductsCreateWithoutCategoryInput[] | ProductsUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutCategoryInput | ProductsCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutCategoryInput | ProductsUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductsCreateManyCategoryInputEnvelope
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutCategoryInput | ProductsUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutCategoryInput | ProductsUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type ProductsCreateNestedManyWithoutSupliersInput = {
    create?: XOR<ProductsCreateWithoutSupliersInput, ProductsUncheckedCreateWithoutSupliersInput> | ProductsCreateWithoutSupliersInput[] | ProductsUncheckedCreateWithoutSupliersInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutSupliersInput | ProductsCreateOrConnectWithoutSupliersInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUncheckedCreateNestedManyWithoutSupliersInput = {
    create?: XOR<ProductsCreateWithoutSupliersInput, ProductsUncheckedCreateWithoutSupliersInput> | ProductsCreateWithoutSupliersInput[] | ProductsUncheckedCreateWithoutSupliersInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutSupliersInput | ProductsCreateOrConnectWithoutSupliersInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
  }

  export type ProductsUpdateManyWithoutSupliersNestedInput = {
    create?: XOR<ProductsCreateWithoutSupliersInput, ProductsUncheckedCreateWithoutSupliersInput> | ProductsCreateWithoutSupliersInput[] | ProductsUncheckedCreateWithoutSupliersInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutSupliersInput | ProductsCreateOrConnectWithoutSupliersInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutSupliersInput | ProductsUpsertWithWhereUniqueWithoutSupliersInput[]
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutSupliersInput | ProductsUpdateWithWhereUniqueWithoutSupliersInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutSupliersInput | ProductsUpdateManyWithWhereWithoutSupliersInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type ProductsUncheckedUpdateManyWithoutSupliersNestedInput = {
    create?: XOR<ProductsCreateWithoutSupliersInput, ProductsUncheckedCreateWithoutSupliersInput> | ProductsCreateWithoutSupliersInput[] | ProductsUncheckedCreateWithoutSupliersInput[]
    connectOrCreate?: ProductsCreateOrConnectWithoutSupliersInput | ProductsCreateOrConnectWithoutSupliersInput[]
    upsert?: ProductsUpsertWithWhereUniqueWithoutSupliersInput | ProductsUpsertWithWhereUniqueWithoutSupliersInput[]
    set?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    disconnect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    delete?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    connect?: ProductsWhereUniqueInput | ProductsWhereUniqueInput[]
    update?: ProductsUpdateWithWhereUniqueWithoutSupliersInput | ProductsUpdateWithWhereUniqueWithoutSupliersInput[]
    updateMany?: ProductsUpdateManyWithWhereWithoutSupliersInput | ProductsUpdateManyWithWhereWithoutSupliersInput[]
    deleteMany?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
  }

  export type StatusCreateNestedOneWithoutOrdersInput = {
    create?: XOR<StatusCreateWithoutOrdersInput, StatusUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: StatusCreateOrConnectWithoutOrdersInput
    connect?: StatusWhereUniqueInput
  }

  export type Orders_ItensCreateNestedOneWithoutOrdersInput = {
    create?: XOR<Orders_ItensCreateWithoutOrdersInput, Orders_ItensUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: Orders_ItensCreateOrConnectWithoutOrdersInput
    connect?: Orders_ItensWhereUniqueInput
  }

  export type Method_PaymentsCreateNestedManyWithoutOrdersInput = {
    create?: XOR<Method_PaymentsCreateWithoutOrdersInput, Method_PaymentsUncheckedCreateWithoutOrdersInput> | Method_PaymentsCreateWithoutOrdersInput[] | Method_PaymentsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: Method_PaymentsCreateOrConnectWithoutOrdersInput | Method_PaymentsCreateOrConnectWithoutOrdersInput[]
    connect?: Method_PaymentsWhereUniqueInput | Method_PaymentsWhereUniqueInput[]
  }

  export type Orders_ItensUncheckedCreateNestedOneWithoutOrdersInput = {
    create?: XOR<Orders_ItensCreateWithoutOrdersInput, Orders_ItensUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: Orders_ItensCreateOrConnectWithoutOrdersInput
    connect?: Orders_ItensWhereUniqueInput
  }

  export type Method_PaymentsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<Method_PaymentsCreateWithoutOrdersInput, Method_PaymentsUncheckedCreateWithoutOrdersInput> | Method_PaymentsCreateWithoutOrdersInput[] | Method_PaymentsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: Method_PaymentsCreateOrConnectWithoutOrdersInput | Method_PaymentsCreateOrConnectWithoutOrdersInput[]
    connect?: Method_PaymentsWhereUniqueInput | Method_PaymentsWhereUniqueInput[]
  }

  export type StatusUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<StatusCreateWithoutOrdersInput, StatusUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: StatusCreateOrConnectWithoutOrdersInput
    upsert?: StatusUpsertWithoutOrdersInput
    connect?: StatusWhereUniqueInput
    update?: XOR<XOR<StatusUpdateToOneWithWhereWithoutOrdersInput, StatusUpdateWithoutOrdersInput>, StatusUncheckedUpdateWithoutOrdersInput>
  }

  export type Orders_ItensUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<Orders_ItensCreateWithoutOrdersInput, Orders_ItensUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: Orders_ItensCreateOrConnectWithoutOrdersInput
    upsert?: Orders_ItensUpsertWithoutOrdersInput
    disconnect?: Orders_ItensWhereInput | boolean
    delete?: Orders_ItensWhereInput | boolean
    connect?: Orders_ItensWhereUniqueInput
    update?: XOR<XOR<Orders_ItensUpdateToOneWithWhereWithoutOrdersInput, Orders_ItensUpdateWithoutOrdersInput>, Orders_ItensUncheckedUpdateWithoutOrdersInput>
  }

  export type Method_PaymentsUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<Method_PaymentsCreateWithoutOrdersInput, Method_PaymentsUncheckedCreateWithoutOrdersInput> | Method_PaymentsCreateWithoutOrdersInput[] | Method_PaymentsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: Method_PaymentsCreateOrConnectWithoutOrdersInput | Method_PaymentsCreateOrConnectWithoutOrdersInput[]
    upsert?: Method_PaymentsUpsertWithWhereUniqueWithoutOrdersInput | Method_PaymentsUpsertWithWhereUniqueWithoutOrdersInput[]
    set?: Method_PaymentsWhereUniqueInput | Method_PaymentsWhereUniqueInput[]
    disconnect?: Method_PaymentsWhereUniqueInput | Method_PaymentsWhereUniqueInput[]
    delete?: Method_PaymentsWhereUniqueInput | Method_PaymentsWhereUniqueInput[]
    connect?: Method_PaymentsWhereUniqueInput | Method_PaymentsWhereUniqueInput[]
    update?: Method_PaymentsUpdateWithWhereUniqueWithoutOrdersInput | Method_PaymentsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: Method_PaymentsUpdateManyWithWhereWithoutOrdersInput | Method_PaymentsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: Method_PaymentsScalarWhereInput | Method_PaymentsScalarWhereInput[]
  }

  export type Orders_ItensUncheckedUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<Orders_ItensCreateWithoutOrdersInput, Orders_ItensUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: Orders_ItensCreateOrConnectWithoutOrdersInput
    upsert?: Orders_ItensUpsertWithoutOrdersInput
    disconnect?: Orders_ItensWhereInput | boolean
    delete?: Orders_ItensWhereInput | boolean
    connect?: Orders_ItensWhereUniqueInput
    update?: XOR<XOR<Orders_ItensUpdateToOneWithWhereWithoutOrdersInput, Orders_ItensUpdateWithoutOrdersInput>, Orders_ItensUncheckedUpdateWithoutOrdersInput>
  }

  export type Method_PaymentsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<Method_PaymentsCreateWithoutOrdersInput, Method_PaymentsUncheckedCreateWithoutOrdersInput> | Method_PaymentsCreateWithoutOrdersInput[] | Method_PaymentsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: Method_PaymentsCreateOrConnectWithoutOrdersInput | Method_PaymentsCreateOrConnectWithoutOrdersInput[]
    upsert?: Method_PaymentsUpsertWithWhereUniqueWithoutOrdersInput | Method_PaymentsUpsertWithWhereUniqueWithoutOrdersInput[]
    set?: Method_PaymentsWhereUniqueInput | Method_PaymentsWhereUniqueInput[]
    disconnect?: Method_PaymentsWhereUniqueInput | Method_PaymentsWhereUniqueInput[]
    delete?: Method_PaymentsWhereUniqueInput | Method_PaymentsWhereUniqueInput[]
    connect?: Method_PaymentsWhereUniqueInput | Method_PaymentsWhereUniqueInput[]
    update?: Method_PaymentsUpdateWithWhereUniqueWithoutOrdersInput | Method_PaymentsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: Method_PaymentsUpdateManyWithWhereWithoutOrdersInput | Method_PaymentsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: Method_PaymentsScalarWhereInput | Method_PaymentsScalarWhereInput[]
  }

  export type OrdersCreateNestedManyWithoutStatusInput = {
    create?: XOR<OrdersCreateWithoutStatusInput, OrdersUncheckedCreateWithoutStatusInput> | OrdersCreateWithoutStatusInput[] | OrdersUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutStatusInput | OrdersCreateOrConnectWithoutStatusInput[]
    createMany?: OrdersCreateManyStatusInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutStatusInput = {
    create?: XOR<OrdersCreateWithoutStatusInput, OrdersUncheckedCreateWithoutStatusInput> | OrdersCreateWithoutStatusInput[] | OrdersUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutStatusInput | OrdersCreateOrConnectWithoutStatusInput[]
    createMany?: OrdersCreateManyStatusInputEnvelope
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type OrdersUpdateManyWithoutStatusNestedInput = {
    create?: XOR<OrdersCreateWithoutStatusInput, OrdersUncheckedCreateWithoutStatusInput> | OrdersCreateWithoutStatusInput[] | OrdersUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutStatusInput | OrdersCreateOrConnectWithoutStatusInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutStatusInput | OrdersUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: OrdersCreateManyStatusInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutStatusInput | OrdersUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutStatusInput | OrdersUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutStatusNestedInput = {
    create?: XOR<OrdersCreateWithoutStatusInput, OrdersUncheckedCreateWithoutStatusInput> | OrdersCreateWithoutStatusInput[] | OrdersUncheckedCreateWithoutStatusInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutStatusInput | OrdersCreateOrConnectWithoutStatusInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutStatusInput | OrdersUpsertWithWhereUniqueWithoutStatusInput[]
    createMany?: OrdersCreateManyStatusInputEnvelope
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutStatusInput | OrdersUpdateWithWhereUniqueWithoutStatusInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutStatusInput | OrdersUpdateManyWithWhereWithoutStatusInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type OrdersCreateNestedManyWithoutMethod_paymentsInput = {
    create?: XOR<OrdersCreateWithoutMethod_paymentsInput, OrdersUncheckedCreateWithoutMethod_paymentsInput> | OrdersCreateWithoutMethod_paymentsInput[] | OrdersUncheckedCreateWithoutMethod_paymentsInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutMethod_paymentsInput | OrdersCreateOrConnectWithoutMethod_paymentsInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type OrdersUncheckedCreateNestedManyWithoutMethod_paymentsInput = {
    create?: XOR<OrdersCreateWithoutMethod_paymentsInput, OrdersUncheckedCreateWithoutMethod_paymentsInput> | OrdersCreateWithoutMethod_paymentsInput[] | OrdersUncheckedCreateWithoutMethod_paymentsInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutMethod_paymentsInput | OrdersCreateOrConnectWithoutMethod_paymentsInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
  }

  export type OrdersUpdateManyWithoutMethod_paymentsNestedInput = {
    create?: XOR<OrdersCreateWithoutMethod_paymentsInput, OrdersUncheckedCreateWithoutMethod_paymentsInput> | OrdersCreateWithoutMethod_paymentsInput[] | OrdersUncheckedCreateWithoutMethod_paymentsInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutMethod_paymentsInput | OrdersCreateOrConnectWithoutMethod_paymentsInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutMethod_paymentsInput | OrdersUpsertWithWhereUniqueWithoutMethod_paymentsInput[]
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutMethod_paymentsInput | OrdersUpdateWithWhereUniqueWithoutMethod_paymentsInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutMethod_paymentsInput | OrdersUpdateManyWithWhereWithoutMethod_paymentsInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type OrdersUncheckedUpdateManyWithoutMethod_paymentsNestedInput = {
    create?: XOR<OrdersCreateWithoutMethod_paymentsInput, OrdersUncheckedCreateWithoutMethod_paymentsInput> | OrdersCreateWithoutMethod_paymentsInput[] | OrdersUncheckedCreateWithoutMethod_paymentsInput[]
    connectOrCreate?: OrdersCreateOrConnectWithoutMethod_paymentsInput | OrdersCreateOrConnectWithoutMethod_paymentsInput[]
    upsert?: OrdersUpsertWithWhereUniqueWithoutMethod_paymentsInput | OrdersUpsertWithWhereUniqueWithoutMethod_paymentsInput[]
    set?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    disconnect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    delete?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    connect?: OrdersWhereUniqueInput | OrdersWhereUniqueInput[]
    update?: OrdersUpdateWithWhereUniqueWithoutMethod_paymentsInput | OrdersUpdateWithWhereUniqueWithoutMethod_paymentsInput[]
    updateMany?: OrdersUpdateManyWithWhereWithoutMethod_paymentsInput | OrdersUpdateManyWithWhereWithoutMethod_paymentsInput[]
    deleteMany?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
  }

  export type OrdersCreateNestedOneWithoutItemsInput = {
    create?: XOR<OrdersCreateWithoutItemsInput, OrdersUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutItemsInput
    connect?: OrdersWhereUniqueInput
  }

  export type ProductsCreateNestedOneWithoutItemsInput = {
    create?: XOR<ProductsCreateWithoutItemsInput, ProductsUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutItemsInput
    connect?: ProductsWhereUniqueInput
  }

  export type OrdersUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<OrdersCreateWithoutItemsInput, OrdersUncheckedCreateWithoutItemsInput>
    connectOrCreate?: OrdersCreateOrConnectWithoutItemsInput
    upsert?: OrdersUpsertWithoutItemsInput
    connect?: OrdersWhereUniqueInput
    update?: XOR<XOR<OrdersUpdateToOneWithWhereWithoutItemsInput, OrdersUpdateWithoutItemsInput>, OrdersUncheckedUpdateWithoutItemsInput>
  }

  export type ProductsUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<ProductsCreateWithoutItemsInput, ProductsUncheckedCreateWithoutItemsInput>
    connectOrCreate?: ProductsCreateOrConnectWithoutItemsInput
    upsert?: ProductsUpsertWithoutItemsInput
    connect?: ProductsWhereUniqueInput
    update?: XOR<XOR<ProductsUpdateToOneWithWhereWithoutItemsInput, ProductsUpdateWithoutItemsInput>, ProductsUncheckedUpdateWithoutItemsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
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

  export type CompaniesCreateWithoutUsersInput = {
    id?: string
    company_fantasy: string
    company_reason: string
    company_acronym: string
    logo_company?: string | null
    cnpj: string
    cep_address: string
    phone?: string | null
    is_active?: boolean
    opening_hours: Date | string
    close_hours: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    company_number: number
    warehouse?: WarehousesCreateNestedOneWithoutCompaniesInput
  }

  export type CompaniesUncheckedCreateWithoutUsersInput = {
    id?: string
    company_fantasy: string
    company_reason: string
    company_acronym: string
    logo_company?: string | null
    cnpj: string
    cep_address: string
    phone?: string | null
    is_active?: boolean
    warehouse_id?: string | null
    opening_hours: Date | string
    close_hours: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    company_number: number
  }

  export type CompaniesCreateOrConnectWithoutUsersInput = {
    where: CompaniesWhereUniqueInput
    create: XOR<CompaniesCreateWithoutUsersInput, CompaniesUncheckedCreateWithoutUsersInput>
  }

  export type RulesCreateWithoutUsersInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type RulesUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type RulesCreateOrConnectWithoutUsersInput = {
    where: RulesWhereUniqueInput
    create: XOR<RulesCreateWithoutUsersInput, RulesUncheckedCreateWithoutUsersInput>
  }

  export type CompaniesUpsertWithoutUsersInput = {
    update: XOR<CompaniesUpdateWithoutUsersInput, CompaniesUncheckedUpdateWithoutUsersInput>
    create: XOR<CompaniesCreateWithoutUsersInput, CompaniesUncheckedCreateWithoutUsersInput>
    where?: CompaniesWhereInput
  }

  export type CompaniesUpdateToOneWithWhereWithoutUsersInput = {
    where?: CompaniesWhereInput
    data: XOR<CompaniesUpdateWithoutUsersInput, CompaniesUncheckedUpdateWithoutUsersInput>
  }

  export type CompaniesUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_fantasy?: StringFieldUpdateOperationsInput | string
    company_reason?: StringFieldUpdateOperationsInput | string
    company_acronym?: StringFieldUpdateOperationsInput | string
    logo_company?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    cep_address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    opening_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    close_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_number?: IntFieldUpdateOperationsInput | number
    warehouse?: WarehousesUpdateOneWithoutCompaniesNestedInput
  }

  export type CompaniesUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_fantasy?: StringFieldUpdateOperationsInput | string
    company_reason?: StringFieldUpdateOperationsInput | string
    company_acronym?: StringFieldUpdateOperationsInput | string
    logo_company?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    cep_address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    warehouse_id?: NullableStringFieldUpdateOperationsInput | string | null
    opening_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    close_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_number?: IntFieldUpdateOperationsInput | number
  }

  export type RulesUpsertWithoutUsersInput = {
    update: XOR<RulesUpdateWithoutUsersInput, RulesUncheckedUpdateWithoutUsersInput>
    create: XOR<RulesCreateWithoutUsersInput, RulesUncheckedCreateWithoutUsersInput>
    where?: RulesWhereInput
  }

  export type RulesUpdateToOneWithWhereWithoutUsersInput = {
    where?: RulesWhereInput
    data: XOR<RulesUpdateWithoutUsersInput, RulesUncheckedUpdateWithoutUsersInput>
  }

  export type RulesUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type RulesUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UsersCreateWithoutRuleInput = {
    id?: string
    name: string
    surname: string
    phone: string
    cep?: string | null
    photo?: string | null
    is_active?: boolean
    checked?: boolean
    validation_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    email?: string | null
    passoword?: string | null
    enterprise?: CompaniesCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutRuleInput = {
    id?: string
    name: string
    surname: string
    phone: string
    cep?: string | null
    photo?: string | null
    is_active?: boolean
    checked?: boolean
    validation_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    email?: string | null
    enterprise_id?: string | null
    passoword?: string | null
  }

  export type UsersCreateOrConnectWithoutRuleInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutRuleInput, UsersUncheckedCreateWithoutRuleInput>
  }

  export type UsersCreateManyRuleInputEnvelope = {
    data: UsersCreateManyRuleInput | UsersCreateManyRuleInput[]
    skipDuplicates?: boolean
  }

  export type UsersUpsertWithWhereUniqueWithoutRuleInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutRuleInput, UsersUncheckedUpdateWithoutRuleInput>
    create: XOR<UsersCreateWithoutRuleInput, UsersUncheckedCreateWithoutRuleInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutRuleInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutRuleInput, UsersUncheckedUpdateWithoutRuleInput>
  }

  export type UsersUpdateManyWithWhereWithoutRuleInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutRuleInput>
  }

  export type UsersScalarWhereInput = {
    AND?: UsersScalarWhereInput | UsersScalarWhereInput[]
    OR?: UsersScalarWhereInput[]
    NOT?: UsersScalarWhereInput | UsersScalarWhereInput[]
    id?: StringFilter<"Users"> | string
    name?: StringFilter<"Users"> | string
    surname?: StringFilter<"Users"> | string
    phone?: StringFilter<"Users"> | string
    cep?: StringNullableFilter<"Users"> | string | null
    photo?: StringNullableFilter<"Users"> | string | null
    is_active?: BoolFilter<"Users"> | boolean
    checked?: BoolFilter<"Users"> | boolean
    rule_id?: StringFilter<"Users"> | string
    validation_id?: StringNullableFilter<"Users"> | string | null
    created_at?: DateTimeNullableFilter<"Users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Users"> | Date | string | null
    email?: StringNullableFilter<"Users"> | string | null
    enterprise_id?: StringNullableFilter<"Users"> | string | null
    passoword?: StringNullableFilter<"Users"> | string | null
  }

  export type WarehousesCreateWithoutCompaniesInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Stocks?: StocksCreateNestedManyWithoutWarehouseInput
  }

  export type WarehousesUncheckedCreateWithoutCompaniesInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Stocks?: StocksUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WarehousesCreateOrConnectWithoutCompaniesInput = {
    where: WarehousesWhereUniqueInput
    create: XOR<WarehousesCreateWithoutCompaniesInput, WarehousesUncheckedCreateWithoutCompaniesInput>
  }

  export type UsersCreateWithoutEnterpriseInput = {
    id?: string
    name: string
    surname: string
    phone: string
    cep?: string | null
    photo?: string | null
    is_active?: boolean
    checked?: boolean
    validation_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    email?: string | null
    passoword?: string | null
    rule: RulesCreateNestedOneWithoutUsersInput
  }

  export type UsersUncheckedCreateWithoutEnterpriseInput = {
    id?: string
    name: string
    surname: string
    phone: string
    cep?: string | null
    photo?: string | null
    is_active?: boolean
    checked?: boolean
    rule_id: string
    validation_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    email?: string | null
    passoword?: string | null
  }

  export type UsersCreateOrConnectWithoutEnterpriseInput = {
    where: UsersWhereUniqueInput
    create: XOR<UsersCreateWithoutEnterpriseInput, UsersUncheckedCreateWithoutEnterpriseInput>
  }

  export type UsersCreateManyEnterpriseInputEnvelope = {
    data: UsersCreateManyEnterpriseInput | UsersCreateManyEnterpriseInput[]
    skipDuplicates?: boolean
  }

  export type WarehousesUpsertWithoutCompaniesInput = {
    update: XOR<WarehousesUpdateWithoutCompaniesInput, WarehousesUncheckedUpdateWithoutCompaniesInput>
    create: XOR<WarehousesCreateWithoutCompaniesInput, WarehousesUncheckedCreateWithoutCompaniesInput>
    where?: WarehousesWhereInput
  }

  export type WarehousesUpdateToOneWithWhereWithoutCompaniesInput = {
    where?: WarehousesWhereInput
    data: XOR<WarehousesUpdateWithoutCompaniesInput, WarehousesUncheckedUpdateWithoutCompaniesInput>
  }

  export type WarehousesUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Stocks?: StocksUpdateManyWithoutWarehouseNestedInput
  }

  export type WarehousesUncheckedUpdateWithoutCompaniesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Stocks?: StocksUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type UsersUpsertWithWhereUniqueWithoutEnterpriseInput = {
    where: UsersWhereUniqueInput
    update: XOR<UsersUpdateWithoutEnterpriseInput, UsersUncheckedUpdateWithoutEnterpriseInput>
    create: XOR<UsersCreateWithoutEnterpriseInput, UsersUncheckedCreateWithoutEnterpriseInput>
  }

  export type UsersUpdateWithWhereUniqueWithoutEnterpriseInput = {
    where: UsersWhereUniqueInput
    data: XOR<UsersUpdateWithoutEnterpriseInput, UsersUncheckedUpdateWithoutEnterpriseInput>
  }

  export type UsersUpdateManyWithWhereWithoutEnterpriseInput = {
    where: UsersScalarWhereInput
    data: XOR<UsersUpdateManyMutationInput, UsersUncheckedUpdateManyWithoutEnterpriseInput>
  }

  export type CompaniesCreateWithoutWarehouseInput = {
    id?: string
    company_fantasy: string
    company_reason: string
    company_acronym: string
    logo_company?: string | null
    cnpj: string
    cep_address: string
    phone?: string | null
    is_active?: boolean
    opening_hours: Date | string
    close_hours: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    company_number: number
    Users?: UsersCreateNestedManyWithoutEnterpriseInput
  }

  export type CompaniesUncheckedCreateWithoutWarehouseInput = {
    id?: string
    company_fantasy: string
    company_reason: string
    company_acronym: string
    logo_company?: string | null
    cnpj: string
    cep_address: string
    phone?: string | null
    is_active?: boolean
    opening_hours: Date | string
    close_hours: Date | string
    created_at?: Date | string | null
    updated_at?: Date | string | null
    company_number: number
    Users?: UsersUncheckedCreateNestedManyWithoutEnterpriseInput
  }

  export type CompaniesCreateOrConnectWithoutWarehouseInput = {
    where: CompaniesWhereUniqueInput
    create: XOR<CompaniesCreateWithoutWarehouseInput, CompaniesUncheckedCreateWithoutWarehouseInput>
  }

  export type StocksCreateWithoutWarehouseInput = {
    id?: string
    current_quantity: number
    minimium_quantity: number
    maximum_quantity: number
    price: number
    purchase_price: number
    cost_price: number
    has_discount?: boolean
    discount_percentage?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Products?: ProductsCreateNestedManyWithoutStockInput
  }

  export type StocksUncheckedCreateWithoutWarehouseInput = {
    id?: string
    current_quantity: number
    minimium_quantity: number
    maximum_quantity: number
    price: number
    purchase_price: number
    cost_price: number
    has_discount?: boolean
    discount_percentage?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Products?: ProductsUncheckedCreateNestedManyWithoutStockInput
  }

  export type StocksCreateOrConnectWithoutWarehouseInput = {
    where: StocksWhereUniqueInput
    create: XOR<StocksCreateWithoutWarehouseInput, StocksUncheckedCreateWithoutWarehouseInput>
  }

  export type StocksCreateManyWarehouseInputEnvelope = {
    data: StocksCreateManyWarehouseInput | StocksCreateManyWarehouseInput[]
    skipDuplicates?: boolean
  }

  export type CompaniesUpsertWithoutWarehouseInput = {
    update: XOR<CompaniesUpdateWithoutWarehouseInput, CompaniesUncheckedUpdateWithoutWarehouseInput>
    create: XOR<CompaniesCreateWithoutWarehouseInput, CompaniesUncheckedCreateWithoutWarehouseInput>
    where?: CompaniesWhereInput
  }

  export type CompaniesUpdateToOneWithWhereWithoutWarehouseInput = {
    where?: CompaniesWhereInput
    data: XOR<CompaniesUpdateWithoutWarehouseInput, CompaniesUncheckedUpdateWithoutWarehouseInput>
  }

  export type CompaniesUpdateWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_fantasy?: StringFieldUpdateOperationsInput | string
    company_reason?: StringFieldUpdateOperationsInput | string
    company_acronym?: StringFieldUpdateOperationsInput | string
    logo_company?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    cep_address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    opening_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    close_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_number?: IntFieldUpdateOperationsInput | number
    Users?: UsersUpdateManyWithoutEnterpriseNestedInput
  }

  export type CompaniesUncheckedUpdateWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_fantasy?: StringFieldUpdateOperationsInput | string
    company_reason?: StringFieldUpdateOperationsInput | string
    company_acronym?: StringFieldUpdateOperationsInput | string
    logo_company?: NullableStringFieldUpdateOperationsInput | string | null
    cnpj?: StringFieldUpdateOperationsInput | string
    cep_address?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    opening_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    close_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    company_number?: IntFieldUpdateOperationsInput | number
    Users?: UsersUncheckedUpdateManyWithoutEnterpriseNestedInput
  }

  export type StocksUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: StocksWhereUniqueInput
    update: XOR<StocksUpdateWithoutWarehouseInput, StocksUncheckedUpdateWithoutWarehouseInput>
    create: XOR<StocksCreateWithoutWarehouseInput, StocksUncheckedCreateWithoutWarehouseInput>
  }

  export type StocksUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: StocksWhereUniqueInput
    data: XOR<StocksUpdateWithoutWarehouseInput, StocksUncheckedUpdateWithoutWarehouseInput>
  }

  export type StocksUpdateManyWithWhereWithoutWarehouseInput = {
    where: StocksScalarWhereInput
    data: XOR<StocksUpdateManyMutationInput, StocksUncheckedUpdateManyWithoutWarehouseInput>
  }

  export type StocksScalarWhereInput = {
    AND?: StocksScalarWhereInput | StocksScalarWhereInput[]
    OR?: StocksScalarWhereInput[]
    NOT?: StocksScalarWhereInput | StocksScalarWhereInput[]
    id?: StringFilter<"Stocks"> | string
    warehouse_id?: StringFilter<"Stocks"> | string
    current_quantity?: IntFilter<"Stocks"> | number
    minimium_quantity?: IntFilter<"Stocks"> | number
    maximum_quantity?: IntFilter<"Stocks"> | number
    price?: FloatFilter<"Stocks"> | number
    purchase_price?: FloatFilter<"Stocks"> | number
    cost_price?: FloatFilter<"Stocks"> | number
    has_discount?: BoolFilter<"Stocks"> | boolean
    discount_percentage?: FloatNullableFilter<"Stocks"> | number | null
    created_at?: DateTimeNullableFilter<"Stocks"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Stocks"> | Date | string | null
  }

  export type ProductsCreateWithoutStockInput = {
    id?: string
    name: string
    product_code: string
    description?: string | null
    sales_unit: string
    is_active?: boolean
    date_of_inactivation?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    items?: Orders_ItensCreateNestedOneWithoutProductsInput
    brand: BrandsCreateNestedOneWithoutProductsInput
    category: CategoriesCreateNestedOneWithoutProductsInput
    banners?: BannersCreateNestedManyWithoutProductsInput
    supliers?: SuppliersCreateNestedManyWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutStockInput = {
    id?: string
    name: string
    category_id: string
    brand_id: string
    product_code: string
    description?: string | null
    sales_unit: string
    is_active?: boolean
    date_of_inactivation?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    items?: Orders_ItensUncheckedCreateNestedOneWithoutProductsInput
    banners?: BannersUncheckedCreateNestedManyWithoutProductsInput
    supliers?: SuppliersUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsCreateOrConnectWithoutStockInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutStockInput, ProductsUncheckedCreateWithoutStockInput>
  }

  export type ProductsCreateManyStockInputEnvelope = {
    data: ProductsCreateManyStockInput | ProductsCreateManyStockInput[]
    skipDuplicates?: boolean
  }

  export type WarehousesCreateWithoutStocksInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Companies?: CompaniesCreateNestedOneWithoutWarehouseInput
  }

  export type WarehousesUncheckedCreateWithoutStocksInput = {
    id?: string
    name: string
    is_active?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
    Companies?: CompaniesUncheckedCreateNestedOneWithoutWarehouseInput
  }

  export type WarehousesCreateOrConnectWithoutStocksInput = {
    where: WarehousesWhereUniqueInput
    create: XOR<WarehousesCreateWithoutStocksInput, WarehousesUncheckedCreateWithoutStocksInput>
  }

  export type ProductsUpsertWithWhereUniqueWithoutStockInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutStockInput, ProductsUncheckedUpdateWithoutStockInput>
    create: XOR<ProductsCreateWithoutStockInput, ProductsUncheckedCreateWithoutStockInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutStockInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutStockInput, ProductsUncheckedUpdateWithoutStockInput>
  }

  export type ProductsUpdateManyWithWhereWithoutStockInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutStockInput>
  }

  export type ProductsScalarWhereInput = {
    AND?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    OR?: ProductsScalarWhereInput[]
    NOT?: ProductsScalarWhereInput | ProductsScalarWhereInput[]
    id?: StringFilter<"Products"> | string
    name?: StringFilter<"Products"> | string
    stock_id?: StringFilter<"Products"> | string
    category_id?: StringFilter<"Products"> | string
    brand_id?: StringFilter<"Products"> | string
    product_code?: StringFilter<"Products"> | string
    description?: StringNullableFilter<"Products"> | string | null
    sales_unit?: StringFilter<"Products"> | string
    is_active?: BoolFilter<"Products"> | boolean
    date_of_inactivation?: DateTimeNullableFilter<"Products"> | Date | string | null
    created_at?: DateTimeNullableFilter<"Products"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Products"> | Date | string | null
  }

  export type WarehousesUpsertWithoutStocksInput = {
    update: XOR<WarehousesUpdateWithoutStocksInput, WarehousesUncheckedUpdateWithoutStocksInput>
    create: XOR<WarehousesCreateWithoutStocksInput, WarehousesUncheckedCreateWithoutStocksInput>
    where?: WarehousesWhereInput
  }

  export type WarehousesUpdateToOneWithWhereWithoutStocksInput = {
    where?: WarehousesWhereInput
    data: XOR<WarehousesUpdateWithoutStocksInput, WarehousesUncheckedUpdateWithoutStocksInput>
  }

  export type WarehousesUpdateWithoutStocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Companies?: CompaniesUpdateOneWithoutWarehouseNestedInput
  }

  export type WarehousesUncheckedUpdateWithoutStocksInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Companies?: CompaniesUncheckedUpdateOneWithoutWarehouseNestedInput
  }

  export type Orders_ItensCreateWithoutProductsInput = {
    Orders: OrdersCreateNestedOneWithoutItemsInput
  }

  export type Orders_ItensUncheckedCreateWithoutProductsInput = {
    orders_id: string
  }

  export type Orders_ItensCreateOrConnectWithoutProductsInput = {
    where: Orders_ItensWhereUniqueInput
    create: XOR<Orders_ItensCreateWithoutProductsInput, Orders_ItensUncheckedCreateWithoutProductsInput>
  }

  export type BrandsCreateWithoutProductsInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type BrandsUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type BrandsCreateOrConnectWithoutProductsInput = {
    where: BrandsWhereUniqueInput
    create: XOR<BrandsCreateWithoutProductsInput, BrandsUncheckedCreateWithoutProductsInput>
  }

  export type StocksCreateWithoutProductsInput = {
    id?: string
    current_quantity: number
    minimium_quantity: number
    maximum_quantity: number
    price: number
    purchase_price: number
    cost_price: number
    has_discount?: boolean
    discount_percentage?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    warehouse: WarehousesCreateNestedOneWithoutStocksInput
  }

  export type StocksUncheckedCreateWithoutProductsInput = {
    id?: string
    warehouse_id: string
    current_quantity: number
    minimium_quantity: number
    maximum_quantity: number
    price: number
    purchase_price: number
    cost_price: number
    has_discount?: boolean
    discount_percentage?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type StocksCreateOrConnectWithoutProductsInput = {
    where: StocksWhereUniqueInput
    create: XOR<StocksCreateWithoutProductsInput, StocksUncheckedCreateWithoutProductsInput>
  }

  export type CategoriesCreateWithoutProductsInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type CategoriesUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type CategoriesCreateOrConnectWithoutProductsInput = {
    where: CategoriesWhereUniqueInput
    create: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
  }

  export type BannersCreateWithoutProductsInput = {
    id?: string
    url_imagem: string
    display_order?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type BannersUncheckedCreateWithoutProductsInput = {
    id?: string
    url_imagem: string
    display_order?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type BannersCreateOrConnectWithoutProductsInput = {
    where: BannersWhereUniqueInput
    create: XOR<BannersCreateWithoutProductsInput, BannersUncheckedCreateWithoutProductsInput>
  }

  export type BannersCreateManyProductsInputEnvelope = {
    data: BannersCreateManyProductsInput | BannersCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type SuppliersCreateWithoutProductsInput = {
    id?: string
    company_fantasy: string
    company_reason: string
    company_acronym: string
    cnpj: string
    email: string
    phone: string
    is_active?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type SuppliersUncheckedCreateWithoutProductsInput = {
    id?: string
    company_fantasy: string
    company_reason: string
    company_acronym: string
    cnpj: string
    email: string
    phone: string
    is_active?: boolean
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type SuppliersCreateOrConnectWithoutProductsInput = {
    where: SuppliersWhereUniqueInput
    create: XOR<SuppliersCreateWithoutProductsInput, SuppliersUncheckedCreateWithoutProductsInput>
  }

  export type Orders_ItensUpsertWithoutProductsInput = {
    update: XOR<Orders_ItensUpdateWithoutProductsInput, Orders_ItensUncheckedUpdateWithoutProductsInput>
    create: XOR<Orders_ItensCreateWithoutProductsInput, Orders_ItensUncheckedCreateWithoutProductsInput>
    where?: Orders_ItensWhereInput
  }

  export type Orders_ItensUpdateToOneWithWhereWithoutProductsInput = {
    where?: Orders_ItensWhereInput
    data: XOR<Orders_ItensUpdateWithoutProductsInput, Orders_ItensUncheckedUpdateWithoutProductsInput>
  }

  export type Orders_ItensUpdateWithoutProductsInput = {
    Orders?: OrdersUpdateOneRequiredWithoutItemsNestedInput
  }

  export type Orders_ItensUncheckedUpdateWithoutProductsInput = {
    orders_id?: StringFieldUpdateOperationsInput | string
  }

  export type BrandsUpsertWithoutProductsInput = {
    update: XOR<BrandsUpdateWithoutProductsInput, BrandsUncheckedUpdateWithoutProductsInput>
    create: XOR<BrandsCreateWithoutProductsInput, BrandsUncheckedCreateWithoutProductsInput>
    where?: BrandsWhereInput
  }

  export type BrandsUpdateToOneWithWhereWithoutProductsInput = {
    where?: BrandsWhereInput
    data: XOR<BrandsUpdateWithoutProductsInput, BrandsUncheckedUpdateWithoutProductsInput>
  }

  export type BrandsUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BrandsUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StocksUpsertWithoutProductsInput = {
    update: XOR<StocksUpdateWithoutProductsInput, StocksUncheckedUpdateWithoutProductsInput>
    create: XOR<StocksCreateWithoutProductsInput, StocksUncheckedCreateWithoutProductsInput>
    where?: StocksWhereInput
  }

  export type StocksUpdateToOneWithWhereWithoutProductsInput = {
    where?: StocksWhereInput
    data: XOR<StocksUpdateWithoutProductsInput, StocksUncheckedUpdateWithoutProductsInput>
  }

  export type StocksUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    current_quantity?: IntFieldUpdateOperationsInput | number
    minimium_quantity?: IntFieldUpdateOperationsInput | number
    maximum_quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    purchase_price?: FloatFieldUpdateOperationsInput | number
    cost_price?: FloatFieldUpdateOperationsInput | number
    has_discount?: BoolFieldUpdateOperationsInput | boolean
    discount_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    warehouse?: WarehousesUpdateOneRequiredWithoutStocksNestedInput
  }

  export type StocksUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    warehouse_id?: StringFieldUpdateOperationsInput | string
    current_quantity?: IntFieldUpdateOperationsInput | number
    minimium_quantity?: IntFieldUpdateOperationsInput | number
    maximum_quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    purchase_price?: FloatFieldUpdateOperationsInput | number
    cost_price?: FloatFieldUpdateOperationsInput | number
    has_discount?: BoolFieldUpdateOperationsInput | boolean
    discount_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoriesUpsertWithoutProductsInput = {
    update: XOR<CategoriesUpdateWithoutProductsInput, CategoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoriesCreateWithoutProductsInput, CategoriesUncheckedCreateWithoutProductsInput>
    where?: CategoriesWhereInput
  }

  export type CategoriesUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoriesWhereInput
    data: XOR<CategoriesUpdateWithoutProductsInput, CategoriesUncheckedUpdateWithoutProductsInput>
  }

  export type CategoriesUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type CategoriesUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BannersUpsertWithWhereUniqueWithoutProductsInput = {
    where: BannersWhereUniqueInput
    update: XOR<BannersUpdateWithoutProductsInput, BannersUncheckedUpdateWithoutProductsInput>
    create: XOR<BannersCreateWithoutProductsInput, BannersUncheckedCreateWithoutProductsInput>
  }

  export type BannersUpdateWithWhereUniqueWithoutProductsInput = {
    where: BannersWhereUniqueInput
    data: XOR<BannersUpdateWithoutProductsInput, BannersUncheckedUpdateWithoutProductsInput>
  }

  export type BannersUpdateManyWithWhereWithoutProductsInput = {
    where: BannersScalarWhereInput
    data: XOR<BannersUpdateManyMutationInput, BannersUncheckedUpdateManyWithoutProductsInput>
  }

  export type BannersScalarWhereInput = {
    AND?: BannersScalarWhereInput | BannersScalarWhereInput[]
    OR?: BannersScalarWhereInput[]
    NOT?: BannersScalarWhereInput | BannersScalarWhereInput[]
    id?: StringFilter<"Banners"> | string
    url_imagem?: StringFilter<"Banners"> | string
    display_order?: IntNullableFilter<"Banners"> | number | null
    product_id?: StringNullableFilter<"Banners"> | string | null
    created_at?: DateTimeFilter<"Banners"> | Date | string
    updated_at?: DateTimeNullableFilter<"Banners"> | Date | string | null
  }

  export type SuppliersUpsertWithWhereUniqueWithoutProductsInput = {
    where: SuppliersWhereUniqueInput
    update: XOR<SuppliersUpdateWithoutProductsInput, SuppliersUncheckedUpdateWithoutProductsInput>
    create: XOR<SuppliersCreateWithoutProductsInput, SuppliersUncheckedCreateWithoutProductsInput>
  }

  export type SuppliersUpdateWithWhereUniqueWithoutProductsInput = {
    where: SuppliersWhereUniqueInput
    data: XOR<SuppliersUpdateWithoutProductsInput, SuppliersUncheckedUpdateWithoutProductsInput>
  }

  export type SuppliersUpdateManyWithWhereWithoutProductsInput = {
    where: SuppliersScalarWhereInput
    data: XOR<SuppliersUpdateManyMutationInput, SuppliersUncheckedUpdateManyWithoutProductsInput>
  }

  export type SuppliersScalarWhereInput = {
    AND?: SuppliersScalarWhereInput | SuppliersScalarWhereInput[]
    OR?: SuppliersScalarWhereInput[]
    NOT?: SuppliersScalarWhereInput | SuppliersScalarWhereInput[]
    id?: StringFilter<"Suppliers"> | string
    company_fantasy?: StringFilter<"Suppliers"> | string
    company_reason?: StringFilter<"Suppliers"> | string
    company_acronym?: StringFilter<"Suppliers"> | string
    cnpj?: StringFilter<"Suppliers"> | string
    email?: StringFilter<"Suppliers"> | string
    phone?: StringFilter<"Suppliers"> | string
    is_active?: BoolFilter<"Suppliers"> | boolean
    created_at?: DateTimeNullableFilter<"Suppliers"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Suppliers"> | Date | string | null
  }

  export type ProductsCreateWithoutBrandInput = {
    id?: string
    name: string
    product_code: string
    description?: string | null
    sales_unit: string
    is_active?: boolean
    date_of_inactivation?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    items?: Orders_ItensCreateNestedOneWithoutProductsInput
    stock: StocksCreateNestedOneWithoutProductsInput
    category: CategoriesCreateNestedOneWithoutProductsInput
    banners?: BannersCreateNestedManyWithoutProductsInput
    supliers?: SuppliersCreateNestedManyWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutBrandInput = {
    id?: string
    name: string
    stock_id: string
    category_id: string
    product_code: string
    description?: string | null
    sales_unit: string
    is_active?: boolean
    date_of_inactivation?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    items?: Orders_ItensUncheckedCreateNestedOneWithoutProductsInput
    banners?: BannersUncheckedCreateNestedManyWithoutProductsInput
    supliers?: SuppliersUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsCreateOrConnectWithoutBrandInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutBrandInput, ProductsUncheckedCreateWithoutBrandInput>
  }

  export type ProductsCreateManyBrandInputEnvelope = {
    data: ProductsCreateManyBrandInput | ProductsCreateManyBrandInput[]
    skipDuplicates?: boolean
  }

  export type ProductsUpsertWithWhereUniqueWithoutBrandInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutBrandInput, ProductsUncheckedUpdateWithoutBrandInput>
    create: XOR<ProductsCreateWithoutBrandInput, ProductsUncheckedCreateWithoutBrandInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutBrandInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutBrandInput, ProductsUncheckedUpdateWithoutBrandInput>
  }

  export type ProductsUpdateManyWithWhereWithoutBrandInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutBrandInput>
  }

  export type ProductsCreateWithoutBannersInput = {
    id?: string
    name: string
    product_code: string
    description?: string | null
    sales_unit: string
    is_active?: boolean
    date_of_inactivation?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    items?: Orders_ItensCreateNestedOneWithoutProductsInput
    brand: BrandsCreateNestedOneWithoutProductsInput
    stock: StocksCreateNestedOneWithoutProductsInput
    category: CategoriesCreateNestedOneWithoutProductsInput
    supliers?: SuppliersCreateNestedManyWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutBannersInput = {
    id?: string
    name: string
    stock_id: string
    category_id: string
    brand_id: string
    product_code: string
    description?: string | null
    sales_unit: string
    is_active?: boolean
    date_of_inactivation?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    items?: Orders_ItensUncheckedCreateNestedOneWithoutProductsInput
    supliers?: SuppliersUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsCreateOrConnectWithoutBannersInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutBannersInput, ProductsUncheckedCreateWithoutBannersInput>
  }

  export type ProductsUpsertWithoutBannersInput = {
    update: XOR<ProductsUpdateWithoutBannersInput, ProductsUncheckedUpdateWithoutBannersInput>
    create: XOR<ProductsCreateWithoutBannersInput, ProductsUncheckedCreateWithoutBannersInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutBannersInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutBannersInput, ProductsUncheckedUpdateWithoutBannersInput>
  }

  export type ProductsUpdateWithoutBannersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    product_code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sales_unit?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_of_inactivation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: Orders_ItensUpdateOneWithoutProductsNestedInput
    brand?: BrandsUpdateOneRequiredWithoutProductsNestedInput
    stock?: StocksUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoriesUpdateOneRequiredWithoutProductsNestedInput
    supliers?: SuppliersUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutBannersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stock_id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    brand_id?: StringFieldUpdateOperationsInput | string
    product_code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sales_unit?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_of_inactivation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: Orders_ItensUncheckedUpdateOneWithoutProductsNestedInput
    supliers?: SuppliersUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ProductsCreateWithoutCategoryInput = {
    id?: string
    name: string
    product_code: string
    description?: string | null
    sales_unit: string
    is_active?: boolean
    date_of_inactivation?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    items?: Orders_ItensCreateNestedOneWithoutProductsInput
    brand: BrandsCreateNestedOneWithoutProductsInput
    stock: StocksCreateNestedOneWithoutProductsInput
    banners?: BannersCreateNestedManyWithoutProductsInput
    supliers?: SuppliersCreateNestedManyWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    stock_id: string
    brand_id: string
    product_code: string
    description?: string | null
    sales_unit: string
    is_active?: boolean
    date_of_inactivation?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    items?: Orders_ItensUncheckedCreateNestedOneWithoutProductsInput
    banners?: BannersUncheckedCreateNestedManyWithoutProductsInput
    supliers?: SuppliersUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsCreateOrConnectWithoutCategoryInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput>
  }

  export type ProductsCreateManyCategoryInputEnvelope = {
    data: ProductsCreateManyCategoryInput | ProductsCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductsUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutCategoryInput, ProductsUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductsCreateWithoutCategoryInput, ProductsUncheckedCreateWithoutCategoryInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutCategoryInput, ProductsUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductsUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductsCreateWithoutSupliersInput = {
    id?: string
    name: string
    product_code: string
    description?: string | null
    sales_unit: string
    is_active?: boolean
    date_of_inactivation?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    items?: Orders_ItensCreateNestedOneWithoutProductsInput
    brand: BrandsCreateNestedOneWithoutProductsInput
    stock: StocksCreateNestedOneWithoutProductsInput
    category: CategoriesCreateNestedOneWithoutProductsInput
    banners?: BannersCreateNestedManyWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutSupliersInput = {
    id?: string
    name: string
    stock_id: string
    category_id: string
    brand_id: string
    product_code: string
    description?: string | null
    sales_unit: string
    is_active?: boolean
    date_of_inactivation?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    items?: Orders_ItensUncheckedCreateNestedOneWithoutProductsInput
    banners?: BannersUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsCreateOrConnectWithoutSupliersInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutSupliersInput, ProductsUncheckedCreateWithoutSupliersInput>
  }

  export type ProductsUpsertWithWhereUniqueWithoutSupliersInput = {
    where: ProductsWhereUniqueInput
    update: XOR<ProductsUpdateWithoutSupliersInput, ProductsUncheckedUpdateWithoutSupliersInput>
    create: XOR<ProductsCreateWithoutSupliersInput, ProductsUncheckedCreateWithoutSupliersInput>
  }

  export type ProductsUpdateWithWhereUniqueWithoutSupliersInput = {
    where: ProductsWhereUniqueInput
    data: XOR<ProductsUpdateWithoutSupliersInput, ProductsUncheckedUpdateWithoutSupliersInput>
  }

  export type ProductsUpdateManyWithWhereWithoutSupliersInput = {
    where: ProductsScalarWhereInput
    data: XOR<ProductsUpdateManyMutationInput, ProductsUncheckedUpdateManyWithoutSupliersInput>
  }

  export type StatusCreateWithoutOrdersInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type StatusUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type StatusCreateOrConnectWithoutOrdersInput = {
    where: StatusWhereUniqueInput
    create: XOR<StatusCreateWithoutOrdersInput, StatusUncheckedCreateWithoutOrdersInput>
  }

  export type Orders_ItensCreateWithoutOrdersInput = {
    Products: ProductsCreateNestedOneWithoutItemsInput
  }

  export type Orders_ItensUncheckedCreateWithoutOrdersInput = {
    products_id: string
  }

  export type Orders_ItensCreateOrConnectWithoutOrdersInput = {
    where: Orders_ItensWhereUniqueInput
    create: XOR<Orders_ItensCreateWithoutOrdersInput, Orders_ItensUncheckedCreateWithoutOrdersInput>
  }

  export type Method_PaymentsCreateWithoutOrdersInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type Method_PaymentsUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type Method_PaymentsCreateOrConnectWithoutOrdersInput = {
    where: Method_PaymentsWhereUniqueInput
    create: XOR<Method_PaymentsCreateWithoutOrdersInput, Method_PaymentsUncheckedCreateWithoutOrdersInput>
  }

  export type StatusUpsertWithoutOrdersInput = {
    update: XOR<StatusUpdateWithoutOrdersInput, StatusUncheckedUpdateWithoutOrdersInput>
    create: XOR<StatusCreateWithoutOrdersInput, StatusUncheckedCreateWithoutOrdersInput>
    where?: StatusWhereInput
  }

  export type StatusUpdateToOneWithWhereWithoutOrdersInput = {
    where?: StatusWhereInput
    data: XOR<StatusUpdateWithoutOrdersInput, StatusUncheckedUpdateWithoutOrdersInput>
  }

  export type StatusUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type StatusUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Orders_ItensUpsertWithoutOrdersInput = {
    update: XOR<Orders_ItensUpdateWithoutOrdersInput, Orders_ItensUncheckedUpdateWithoutOrdersInput>
    create: XOR<Orders_ItensCreateWithoutOrdersInput, Orders_ItensUncheckedCreateWithoutOrdersInput>
    where?: Orders_ItensWhereInput
  }

  export type Orders_ItensUpdateToOneWithWhereWithoutOrdersInput = {
    where?: Orders_ItensWhereInput
    data: XOR<Orders_ItensUpdateWithoutOrdersInput, Orders_ItensUncheckedUpdateWithoutOrdersInput>
  }

  export type Orders_ItensUpdateWithoutOrdersInput = {
    Products?: ProductsUpdateOneRequiredWithoutItemsNestedInput
  }

  export type Orders_ItensUncheckedUpdateWithoutOrdersInput = {
    products_id?: StringFieldUpdateOperationsInput | string
  }

  export type Method_PaymentsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: Method_PaymentsWhereUniqueInput
    update: XOR<Method_PaymentsUpdateWithoutOrdersInput, Method_PaymentsUncheckedUpdateWithoutOrdersInput>
    create: XOR<Method_PaymentsCreateWithoutOrdersInput, Method_PaymentsUncheckedCreateWithoutOrdersInput>
  }

  export type Method_PaymentsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: Method_PaymentsWhereUniqueInput
    data: XOR<Method_PaymentsUpdateWithoutOrdersInput, Method_PaymentsUncheckedUpdateWithoutOrdersInput>
  }

  export type Method_PaymentsUpdateManyWithWhereWithoutOrdersInput = {
    where: Method_PaymentsScalarWhereInput
    data: XOR<Method_PaymentsUpdateManyMutationInput, Method_PaymentsUncheckedUpdateManyWithoutOrdersInput>
  }

  export type Method_PaymentsScalarWhereInput = {
    AND?: Method_PaymentsScalarWhereInput | Method_PaymentsScalarWhereInput[]
    OR?: Method_PaymentsScalarWhereInput[]
    NOT?: Method_PaymentsScalarWhereInput | Method_PaymentsScalarWhereInput[]
    id?: StringFilter<"Method_Payments"> | string
    name?: StringFilter<"Method_Payments"> | string
    created_at?: DateTimeNullableFilter<"Method_Payments"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Method_Payments"> | Date | string | null
  }

  export type OrdersCreateWithoutStatusInput = {
    id?: string
    release_date: Date | string
    completion_date: Date | string
    cancellation_date?: Date | string | null
    delivery_date?: Date | string | null
    gross_value: number
    net_value: number
    shipping_price: number
    type_sale: string
    cep_addres?: string | null
    addres_number?: string | null
    delivery_code?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    items?: Orders_ItensCreateNestedOneWithoutOrdersInput
    method_payments?: Method_PaymentsCreateNestedManyWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutStatusInput = {
    id?: string
    release_date: Date | string
    completion_date: Date | string
    cancellation_date?: Date | string | null
    delivery_date?: Date | string | null
    gross_value: number
    net_value: number
    shipping_price: number
    type_sale: string
    cep_addres?: string | null
    addres_number?: string | null
    delivery_code?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    items?: Orders_ItensUncheckedCreateNestedOneWithoutOrdersInput
    method_payments?: Method_PaymentsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type OrdersCreateOrConnectWithoutStatusInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutStatusInput, OrdersUncheckedCreateWithoutStatusInput>
  }

  export type OrdersCreateManyStatusInputEnvelope = {
    data: OrdersCreateManyStatusInput | OrdersCreateManyStatusInput[]
    skipDuplicates?: boolean
  }

  export type OrdersUpsertWithWhereUniqueWithoutStatusInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutStatusInput, OrdersUncheckedUpdateWithoutStatusInput>
    create: XOR<OrdersCreateWithoutStatusInput, OrdersUncheckedCreateWithoutStatusInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutStatusInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutStatusInput, OrdersUncheckedUpdateWithoutStatusInput>
  }

  export type OrdersUpdateManyWithWhereWithoutStatusInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutStatusInput>
  }

  export type OrdersScalarWhereInput = {
    AND?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    OR?: OrdersScalarWhereInput[]
    NOT?: OrdersScalarWhereInput | OrdersScalarWhereInput[]
    id?: StringFilter<"Orders"> | string
    release_date?: DateTimeFilter<"Orders"> | Date | string
    completion_date?: DateTimeFilter<"Orders"> | Date | string
    status_id?: StringFilter<"Orders"> | string
    cancellation_date?: DateTimeNullableFilter<"Orders"> | Date | string | null
    delivery_date?: DateTimeNullableFilter<"Orders"> | Date | string | null
    gross_value?: FloatFilter<"Orders"> | number
    net_value?: FloatFilter<"Orders"> | number
    shipping_price?: FloatFilter<"Orders"> | number
    type_sale?: StringFilter<"Orders"> | string
    cep_addres?: StringNullableFilter<"Orders"> | string | null
    addres_number?: StringNullableFilter<"Orders"> | string | null
    delivery_code?: StringNullableFilter<"Orders"> | string | null
    created_at?: DateTimeNullableFilter<"Orders"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Orders"> | Date | string | null
  }

  export type OrdersCreateWithoutMethod_paymentsInput = {
    id?: string
    release_date: Date | string
    completion_date: Date | string
    cancellation_date?: Date | string | null
    delivery_date?: Date | string | null
    gross_value: number
    net_value: number
    shipping_price: number
    type_sale: string
    cep_addres?: string | null
    addres_number?: string | null
    delivery_code?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    status: StatusCreateNestedOneWithoutOrdersInput
    items?: Orders_ItensCreateNestedOneWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutMethod_paymentsInput = {
    id?: string
    release_date: Date | string
    completion_date: Date | string
    status_id: string
    cancellation_date?: Date | string | null
    delivery_date?: Date | string | null
    gross_value: number
    net_value: number
    shipping_price: number
    type_sale: string
    cep_addres?: string | null
    addres_number?: string | null
    delivery_code?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    items?: Orders_ItensUncheckedCreateNestedOneWithoutOrdersInput
  }

  export type OrdersCreateOrConnectWithoutMethod_paymentsInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutMethod_paymentsInput, OrdersUncheckedCreateWithoutMethod_paymentsInput>
  }

  export type OrdersUpsertWithWhereUniqueWithoutMethod_paymentsInput = {
    where: OrdersWhereUniqueInput
    update: XOR<OrdersUpdateWithoutMethod_paymentsInput, OrdersUncheckedUpdateWithoutMethod_paymentsInput>
    create: XOR<OrdersCreateWithoutMethod_paymentsInput, OrdersUncheckedCreateWithoutMethod_paymentsInput>
  }

  export type OrdersUpdateWithWhereUniqueWithoutMethod_paymentsInput = {
    where: OrdersWhereUniqueInput
    data: XOR<OrdersUpdateWithoutMethod_paymentsInput, OrdersUncheckedUpdateWithoutMethod_paymentsInput>
  }

  export type OrdersUpdateManyWithWhereWithoutMethod_paymentsInput = {
    where: OrdersScalarWhereInput
    data: XOR<OrdersUpdateManyMutationInput, OrdersUncheckedUpdateManyWithoutMethod_paymentsInput>
  }

  export type OrdersCreateWithoutItemsInput = {
    id?: string
    release_date: Date | string
    completion_date: Date | string
    cancellation_date?: Date | string | null
    delivery_date?: Date | string | null
    gross_value: number
    net_value: number
    shipping_price: number
    type_sale: string
    cep_addres?: string | null
    addres_number?: string | null
    delivery_code?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    status: StatusCreateNestedOneWithoutOrdersInput
    method_payments?: Method_PaymentsCreateNestedManyWithoutOrdersInput
  }

  export type OrdersUncheckedCreateWithoutItemsInput = {
    id?: string
    release_date: Date | string
    completion_date: Date | string
    status_id: string
    cancellation_date?: Date | string | null
    delivery_date?: Date | string | null
    gross_value: number
    net_value: number
    shipping_price: number
    type_sale: string
    cep_addres?: string | null
    addres_number?: string | null
    delivery_code?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    method_payments?: Method_PaymentsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type OrdersCreateOrConnectWithoutItemsInput = {
    where: OrdersWhereUniqueInput
    create: XOR<OrdersCreateWithoutItemsInput, OrdersUncheckedCreateWithoutItemsInput>
  }

  export type ProductsCreateWithoutItemsInput = {
    id?: string
    name: string
    product_code: string
    description?: string | null
    sales_unit: string
    is_active?: boolean
    date_of_inactivation?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    brand: BrandsCreateNestedOneWithoutProductsInput
    stock: StocksCreateNestedOneWithoutProductsInput
    category: CategoriesCreateNestedOneWithoutProductsInput
    banners?: BannersCreateNestedManyWithoutProductsInput
    supliers?: SuppliersCreateNestedManyWithoutProductsInput
  }

  export type ProductsUncheckedCreateWithoutItemsInput = {
    id?: string
    name: string
    stock_id: string
    category_id: string
    brand_id: string
    product_code: string
    description?: string | null
    sales_unit: string
    is_active?: boolean
    date_of_inactivation?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    banners?: BannersUncheckedCreateNestedManyWithoutProductsInput
    supliers?: SuppliersUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductsCreateOrConnectWithoutItemsInput = {
    where: ProductsWhereUniqueInput
    create: XOR<ProductsCreateWithoutItemsInput, ProductsUncheckedCreateWithoutItemsInput>
  }

  export type OrdersUpsertWithoutItemsInput = {
    update: XOR<OrdersUpdateWithoutItemsInput, OrdersUncheckedUpdateWithoutItemsInput>
    create: XOR<OrdersCreateWithoutItemsInput, OrdersUncheckedCreateWithoutItemsInput>
    where?: OrdersWhereInput
  }

  export type OrdersUpdateToOneWithWhereWithoutItemsInput = {
    where?: OrdersWhereInput
    data: XOR<OrdersUpdateWithoutItemsInput, OrdersUncheckedUpdateWithoutItemsInput>
  }

  export type OrdersUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    completion_date?: DateTimeFieldUpdateOperationsInput | Date | string
    cancellation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gross_value?: FloatFieldUpdateOperationsInput | number
    net_value?: FloatFieldUpdateOperationsInput | number
    shipping_price?: FloatFieldUpdateOperationsInput | number
    type_sale?: StringFieldUpdateOperationsInput | string
    cep_addres?: NullableStringFieldUpdateOperationsInput | string | null
    addres_number?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StatusUpdateOneRequiredWithoutOrdersNestedInput
    method_payments?: Method_PaymentsUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    completion_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status_id?: StringFieldUpdateOperationsInput | string
    cancellation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gross_value?: FloatFieldUpdateOperationsInput | number
    net_value?: FloatFieldUpdateOperationsInput | number
    shipping_price?: FloatFieldUpdateOperationsInput | number
    type_sale?: StringFieldUpdateOperationsInput | string
    cep_addres?: NullableStringFieldUpdateOperationsInput | string | null
    addres_number?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    method_payments?: Method_PaymentsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ProductsUpsertWithoutItemsInput = {
    update: XOR<ProductsUpdateWithoutItemsInput, ProductsUncheckedUpdateWithoutItemsInput>
    create: XOR<ProductsCreateWithoutItemsInput, ProductsUncheckedCreateWithoutItemsInput>
    where?: ProductsWhereInput
  }

  export type ProductsUpdateToOneWithWhereWithoutItemsInput = {
    where?: ProductsWhereInput
    data: XOR<ProductsUpdateWithoutItemsInput, ProductsUncheckedUpdateWithoutItemsInput>
  }

  export type ProductsUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    product_code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sales_unit?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_of_inactivation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    brand?: BrandsUpdateOneRequiredWithoutProductsNestedInput
    stock?: StocksUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoriesUpdateOneRequiredWithoutProductsNestedInput
    banners?: BannersUpdateManyWithoutProductsNestedInput
    supliers?: SuppliersUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stock_id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    brand_id?: StringFieldUpdateOperationsInput | string
    product_code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sales_unit?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_of_inactivation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    banners?: BannersUncheckedUpdateManyWithoutProductsNestedInput
    supliers?: SuppliersUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type UsersCreateManyRuleInput = {
    id?: string
    name: string
    surname: string
    phone: string
    cep?: string | null
    photo?: string | null
    is_active?: boolean
    checked?: boolean
    validation_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    email?: string | null
    enterprise_id?: string | null
    passoword?: string | null
  }

  export type UsersUpdateWithoutRuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    checked?: BoolFieldUpdateOperationsInput | boolean
    validation_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passoword?: NullableStringFieldUpdateOperationsInput | string | null
    enterprise?: CompaniesUpdateOneWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutRuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    checked?: BoolFieldUpdateOperationsInput | boolean
    validation_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    enterprise_id?: NullableStringFieldUpdateOperationsInput | string | null
    passoword?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUncheckedUpdateManyWithoutRuleInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    checked?: BoolFieldUpdateOperationsInput | boolean
    validation_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    enterprise_id?: NullableStringFieldUpdateOperationsInput | string | null
    passoword?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersCreateManyEnterpriseInput = {
    id?: string
    name: string
    surname: string
    phone: string
    cep?: string | null
    photo?: string | null
    is_active?: boolean
    checked?: boolean
    rule_id: string
    validation_id?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    email?: string | null
    passoword?: string | null
  }

  export type UsersUpdateWithoutEnterpriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    checked?: BoolFieldUpdateOperationsInput | boolean
    validation_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passoword?: NullableStringFieldUpdateOperationsInput | string | null
    rule?: RulesUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UsersUncheckedUpdateWithoutEnterpriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    checked?: BoolFieldUpdateOperationsInput | boolean
    rule_id?: StringFieldUpdateOperationsInput | string
    validation_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passoword?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UsersUncheckedUpdateManyWithoutEnterpriseInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    surname?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    cep?: NullableStringFieldUpdateOperationsInput | string | null
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    checked?: BoolFieldUpdateOperationsInput | boolean
    rule_id?: StringFieldUpdateOperationsInput | string
    validation_id?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    passoword?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StocksCreateManyWarehouseInput = {
    id?: string
    current_quantity: number
    minimium_quantity: number
    maximum_quantity: number
    price: number
    purchase_price: number
    cost_price: number
    has_discount?: boolean
    discount_percentage?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type StocksUpdateWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    current_quantity?: IntFieldUpdateOperationsInput | number
    minimium_quantity?: IntFieldUpdateOperationsInput | number
    maximum_quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    purchase_price?: FloatFieldUpdateOperationsInput | number
    cost_price?: FloatFieldUpdateOperationsInput | number
    has_discount?: BoolFieldUpdateOperationsInput | boolean
    discount_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Products?: ProductsUpdateManyWithoutStockNestedInput
  }

  export type StocksUncheckedUpdateWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    current_quantity?: IntFieldUpdateOperationsInput | number
    minimium_quantity?: IntFieldUpdateOperationsInput | number
    maximum_quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    purchase_price?: FloatFieldUpdateOperationsInput | number
    cost_price?: FloatFieldUpdateOperationsInput | number
    has_discount?: BoolFieldUpdateOperationsInput | boolean
    discount_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Products?: ProductsUncheckedUpdateManyWithoutStockNestedInput
  }

  export type StocksUncheckedUpdateManyWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    current_quantity?: IntFieldUpdateOperationsInput | number
    minimium_quantity?: IntFieldUpdateOperationsInput | number
    maximum_quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    purchase_price?: FloatFieldUpdateOperationsInput | number
    cost_price?: FloatFieldUpdateOperationsInput | number
    has_discount?: BoolFieldUpdateOperationsInput | boolean
    discount_percentage?: NullableFloatFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductsCreateManyStockInput = {
    id?: string
    name: string
    category_id: string
    brand_id: string
    product_code: string
    description?: string | null
    sales_unit: string
    is_active?: boolean
    date_of_inactivation?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ProductsUpdateWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    product_code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sales_unit?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_of_inactivation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: Orders_ItensUpdateOneWithoutProductsNestedInput
    brand?: BrandsUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoriesUpdateOneRequiredWithoutProductsNestedInput
    banners?: BannersUpdateManyWithoutProductsNestedInput
    supliers?: SuppliersUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    brand_id?: StringFieldUpdateOperationsInput | string
    product_code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sales_unit?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_of_inactivation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: Orders_ItensUncheckedUpdateOneWithoutProductsNestedInput
    banners?: BannersUncheckedUpdateManyWithoutProductsNestedInput
    supliers?: SuppliersUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateManyWithoutStockInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    brand_id?: StringFieldUpdateOperationsInput | string
    product_code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sales_unit?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_of_inactivation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BannersCreateManyProductsInput = {
    id?: string
    url_imagem: string
    display_order?: number | null
    created_at?: Date | string
    updated_at?: Date | string | null
  }

  export type BannersUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url_imagem?: StringFieldUpdateOperationsInput | string
    display_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BannersUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url_imagem?: StringFieldUpdateOperationsInput | string
    display_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type BannersUncheckedUpdateManyWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    url_imagem?: StringFieldUpdateOperationsInput | string
    display_order?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SuppliersUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_fantasy?: StringFieldUpdateOperationsInput | string
    company_reason?: StringFieldUpdateOperationsInput | string
    company_acronym?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SuppliersUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_fantasy?: StringFieldUpdateOperationsInput | string
    company_reason?: StringFieldUpdateOperationsInput | string
    company_acronym?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SuppliersUncheckedUpdateManyWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    company_fantasy?: StringFieldUpdateOperationsInput | string
    company_reason?: StringFieldUpdateOperationsInput | string
    company_acronym?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductsCreateManyBrandInput = {
    id?: string
    name: string
    stock_id: string
    category_id: string
    product_code: string
    description?: string | null
    sales_unit: string
    is_active?: boolean
    date_of_inactivation?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ProductsUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    product_code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sales_unit?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_of_inactivation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: Orders_ItensUpdateOneWithoutProductsNestedInput
    stock?: StocksUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoriesUpdateOneRequiredWithoutProductsNestedInput
    banners?: BannersUpdateManyWithoutProductsNestedInput
    supliers?: SuppliersUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stock_id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    product_code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sales_unit?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_of_inactivation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: Orders_ItensUncheckedUpdateOneWithoutProductsNestedInput
    banners?: BannersUncheckedUpdateManyWithoutProductsNestedInput
    supliers?: SuppliersUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateManyWithoutBrandInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stock_id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    product_code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sales_unit?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_of_inactivation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductsCreateManyCategoryInput = {
    id?: string
    name: string
    stock_id: string
    brand_id: string
    product_code: string
    description?: string | null
    sales_unit: string
    is_active?: boolean
    date_of_inactivation?: Date | string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ProductsUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    product_code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sales_unit?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_of_inactivation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: Orders_ItensUpdateOneWithoutProductsNestedInput
    brand?: BrandsUpdateOneRequiredWithoutProductsNestedInput
    stock?: StocksUpdateOneRequiredWithoutProductsNestedInput
    banners?: BannersUpdateManyWithoutProductsNestedInput
    supliers?: SuppliersUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stock_id?: StringFieldUpdateOperationsInput | string
    brand_id?: StringFieldUpdateOperationsInput | string
    product_code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sales_unit?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_of_inactivation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: Orders_ItensUncheckedUpdateOneWithoutProductsNestedInput
    banners?: BannersUncheckedUpdateManyWithoutProductsNestedInput
    supliers?: SuppliersUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stock_id?: StringFieldUpdateOperationsInput | string
    brand_id?: StringFieldUpdateOperationsInput | string
    product_code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sales_unit?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_of_inactivation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProductsUpdateWithoutSupliersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    product_code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sales_unit?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_of_inactivation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: Orders_ItensUpdateOneWithoutProductsNestedInput
    brand?: BrandsUpdateOneRequiredWithoutProductsNestedInput
    stock?: StocksUpdateOneRequiredWithoutProductsNestedInput
    category?: CategoriesUpdateOneRequiredWithoutProductsNestedInput
    banners?: BannersUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateWithoutSupliersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stock_id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    brand_id?: StringFieldUpdateOperationsInput | string
    product_code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sales_unit?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_of_inactivation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: Orders_ItensUncheckedUpdateOneWithoutProductsNestedInput
    banners?: BannersUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ProductsUncheckedUpdateManyWithoutSupliersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    stock_id?: StringFieldUpdateOperationsInput | string
    category_id?: StringFieldUpdateOperationsInput | string
    brand_id?: StringFieldUpdateOperationsInput | string
    product_code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    sales_unit?: StringFieldUpdateOperationsInput | string
    is_active?: BoolFieldUpdateOperationsInput | boolean
    date_of_inactivation?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Method_PaymentsUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Method_PaymentsUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type Method_PaymentsUncheckedUpdateManyWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrdersCreateManyStatusInput = {
    id?: string
    release_date: Date | string
    completion_date: Date | string
    cancellation_date?: Date | string | null
    delivery_date?: Date | string | null
    gross_value: number
    net_value: number
    shipping_price: number
    type_sale: string
    cep_addres?: string | null
    addres_number?: string | null
    delivery_code?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type OrdersUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    completion_date?: DateTimeFieldUpdateOperationsInput | Date | string
    cancellation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gross_value?: FloatFieldUpdateOperationsInput | number
    net_value?: FloatFieldUpdateOperationsInput | number
    shipping_price?: FloatFieldUpdateOperationsInput | number
    type_sale?: StringFieldUpdateOperationsInput | string
    cep_addres?: NullableStringFieldUpdateOperationsInput | string | null
    addres_number?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: Orders_ItensUpdateOneWithoutOrdersNestedInput
    method_payments?: Method_PaymentsUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    completion_date?: DateTimeFieldUpdateOperationsInput | Date | string
    cancellation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gross_value?: FloatFieldUpdateOperationsInput | number
    net_value?: FloatFieldUpdateOperationsInput | number
    shipping_price?: FloatFieldUpdateOperationsInput | number
    type_sale?: StringFieldUpdateOperationsInput | string
    cep_addres?: NullableStringFieldUpdateOperationsInput | string | null
    addres_number?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: Orders_ItensUncheckedUpdateOneWithoutOrdersNestedInput
    method_payments?: Method_PaymentsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutStatusInput = {
    id?: StringFieldUpdateOperationsInput | string
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    completion_date?: DateTimeFieldUpdateOperationsInput | Date | string
    cancellation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gross_value?: FloatFieldUpdateOperationsInput | number
    net_value?: FloatFieldUpdateOperationsInput | number
    shipping_price?: FloatFieldUpdateOperationsInput | number
    type_sale?: StringFieldUpdateOperationsInput | string
    cep_addres?: NullableStringFieldUpdateOperationsInput | string | null
    addres_number?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrdersUpdateWithoutMethod_paymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    completion_date?: DateTimeFieldUpdateOperationsInput | Date | string
    cancellation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gross_value?: FloatFieldUpdateOperationsInput | number
    net_value?: FloatFieldUpdateOperationsInput | number
    shipping_price?: FloatFieldUpdateOperationsInput | number
    type_sale?: StringFieldUpdateOperationsInput | string
    cep_addres?: NullableStringFieldUpdateOperationsInput | string | null
    addres_number?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: StatusUpdateOneRequiredWithoutOrdersNestedInput
    items?: Orders_ItensUpdateOneWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateWithoutMethod_paymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    completion_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status_id?: StringFieldUpdateOperationsInput | string
    cancellation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gross_value?: FloatFieldUpdateOperationsInput | number
    net_value?: FloatFieldUpdateOperationsInput | number
    shipping_price?: FloatFieldUpdateOperationsInput | number
    type_sale?: StringFieldUpdateOperationsInput | string
    cep_addres?: NullableStringFieldUpdateOperationsInput | string | null
    addres_number?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: Orders_ItensUncheckedUpdateOneWithoutOrdersNestedInput
  }

  export type OrdersUncheckedUpdateManyWithoutMethod_paymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    release_date?: DateTimeFieldUpdateOperationsInput | Date | string
    completion_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status_id?: StringFieldUpdateOperationsInput | string
    cancellation_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivery_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    gross_value?: FloatFieldUpdateOperationsInput | number
    net_value?: FloatFieldUpdateOperationsInput | number
    shipping_price?: FloatFieldUpdateOperationsInput | number
    type_sale?: StringFieldUpdateOperationsInput | string
    cep_addres?: NullableStringFieldUpdateOperationsInput | string | null
    addres_number?: NullableStringFieldUpdateOperationsInput | string | null
    delivery_code?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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