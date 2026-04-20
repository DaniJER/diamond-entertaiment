import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
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
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly admin: "admin";
    readonly aprendiz: "aprendiz";
    readonly carrito: "carrito";
    readonly carrito_curso: "carrito_curso";
    readonly curso: "curso";
    readonly detalle_compra: "detalle_compra";
    readonly examen_modulo: "examen_modulo";
    readonly factura_compra: "factura_compra";
    readonly modulo: "modulo";
    readonly progreso_modulo: "progreso_modulo";
    readonly resultado_examen: "resultado_examen";
    readonly usuario: "usuario";
    readonly video: "video";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "admin" | "aprendiz" | "carrito" | "carrito_curso" | "curso" | "detalle_compra" | "examen_modulo" | "factura_compra" | "modulo" | "progreso_modulo" | "resultado_examen" | "usuario" | "video";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        admin: {
            payload: Prisma.$adminPayload<ExtArgs>;
            fields: Prisma.adminFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.adminFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$adminPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.adminFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$adminPayload>;
                };
                findFirst: {
                    args: Prisma.adminFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$adminPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.adminFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$adminPayload>;
                };
                findMany: {
                    args: Prisma.adminFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$adminPayload>[];
                };
                create: {
                    args: Prisma.adminCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$adminPayload>;
                };
                createMany: {
                    args: Prisma.adminCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.adminCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$adminPayload>[];
                };
                delete: {
                    args: Prisma.adminDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$adminPayload>;
                };
                update: {
                    args: Prisma.adminUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$adminPayload>;
                };
                deleteMany: {
                    args: Prisma.adminDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.adminUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.adminUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$adminPayload>[];
                };
                upsert: {
                    args: Prisma.adminUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$adminPayload>;
                };
                aggregate: {
                    args: Prisma.AdminAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAdmin>;
                };
                groupBy: {
                    args: Prisma.adminGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminGroupByOutputType>[];
                };
                count: {
                    args: Prisma.adminCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AdminCountAggregateOutputType> | number;
                };
            };
        };
        aprendiz: {
            payload: Prisma.$aprendizPayload<ExtArgs>;
            fields: Prisma.aprendizFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.aprendizFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$aprendizPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.aprendizFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$aprendizPayload>;
                };
                findFirst: {
                    args: Prisma.aprendizFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$aprendizPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.aprendizFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$aprendizPayload>;
                };
                findMany: {
                    args: Prisma.aprendizFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$aprendizPayload>[];
                };
                create: {
                    args: Prisma.aprendizCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$aprendizPayload>;
                };
                createMany: {
                    args: Prisma.aprendizCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.aprendizCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$aprendizPayload>[];
                };
                delete: {
                    args: Prisma.aprendizDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$aprendizPayload>;
                };
                update: {
                    args: Prisma.aprendizUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$aprendizPayload>;
                };
                deleteMany: {
                    args: Prisma.aprendizDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.aprendizUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.aprendizUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$aprendizPayload>[];
                };
                upsert: {
                    args: Prisma.aprendizUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$aprendizPayload>;
                };
                aggregate: {
                    args: Prisma.AprendizAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAprendiz>;
                };
                groupBy: {
                    args: Prisma.aprendizGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AprendizGroupByOutputType>[];
                };
                count: {
                    args: Prisma.aprendizCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AprendizCountAggregateOutputType> | number;
                };
            };
        };
        carrito: {
            payload: Prisma.$carritoPayload<ExtArgs>;
            fields: Prisma.carritoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.carritoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$carritoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.carritoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$carritoPayload>;
                };
                findFirst: {
                    args: Prisma.carritoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$carritoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.carritoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$carritoPayload>;
                };
                findMany: {
                    args: Prisma.carritoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$carritoPayload>[];
                };
                create: {
                    args: Prisma.carritoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$carritoPayload>;
                };
                createMany: {
                    args: Prisma.carritoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.carritoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$carritoPayload>[];
                };
                delete: {
                    args: Prisma.carritoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$carritoPayload>;
                };
                update: {
                    args: Prisma.carritoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$carritoPayload>;
                };
                deleteMany: {
                    args: Prisma.carritoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.carritoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.carritoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$carritoPayload>[];
                };
                upsert: {
                    args: Prisma.carritoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$carritoPayload>;
                };
                aggregate: {
                    args: Prisma.CarritoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCarrito>;
                };
                groupBy: {
                    args: Prisma.carritoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CarritoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.carritoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CarritoCountAggregateOutputType> | number;
                };
            };
        };
        carrito_curso: {
            payload: Prisma.$carrito_cursoPayload<ExtArgs>;
            fields: Prisma.carrito_cursoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.carrito_cursoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$carrito_cursoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.carrito_cursoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$carrito_cursoPayload>;
                };
                findFirst: {
                    args: Prisma.carrito_cursoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$carrito_cursoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.carrito_cursoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$carrito_cursoPayload>;
                };
                findMany: {
                    args: Prisma.carrito_cursoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$carrito_cursoPayload>[];
                };
                create: {
                    args: Prisma.carrito_cursoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$carrito_cursoPayload>;
                };
                createMany: {
                    args: Prisma.carrito_cursoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.carrito_cursoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$carrito_cursoPayload>[];
                };
                delete: {
                    args: Prisma.carrito_cursoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$carrito_cursoPayload>;
                };
                update: {
                    args: Prisma.carrito_cursoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$carrito_cursoPayload>;
                };
                deleteMany: {
                    args: Prisma.carrito_cursoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.carrito_cursoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.carrito_cursoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$carrito_cursoPayload>[];
                };
                upsert: {
                    args: Prisma.carrito_cursoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$carrito_cursoPayload>;
                };
                aggregate: {
                    args: Prisma.Carrito_cursoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCarrito_curso>;
                };
                groupBy: {
                    args: Prisma.carrito_cursoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Carrito_cursoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.carrito_cursoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Carrito_cursoCountAggregateOutputType> | number;
                };
            };
        };
        curso: {
            payload: Prisma.$cursoPayload<ExtArgs>;
            fields: Prisma.cursoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.cursoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cursoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.cursoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cursoPayload>;
                };
                findFirst: {
                    args: Prisma.cursoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cursoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.cursoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cursoPayload>;
                };
                findMany: {
                    args: Prisma.cursoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cursoPayload>[];
                };
                create: {
                    args: Prisma.cursoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cursoPayload>;
                };
                createMany: {
                    args: Prisma.cursoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.cursoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cursoPayload>[];
                };
                delete: {
                    args: Prisma.cursoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cursoPayload>;
                };
                update: {
                    args: Prisma.cursoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cursoPayload>;
                };
                deleteMany: {
                    args: Prisma.cursoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.cursoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.cursoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cursoPayload>[];
                };
                upsert: {
                    args: Prisma.cursoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$cursoPayload>;
                };
                aggregate: {
                    args: Prisma.CursoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCurso>;
                };
                groupBy: {
                    args: Prisma.cursoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CursoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.cursoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CursoCountAggregateOutputType> | number;
                };
            };
        };
        detalle_compra: {
            payload: Prisma.$detalle_compraPayload<ExtArgs>;
            fields: Prisma.detalle_compraFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.detalle_compraFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detalle_compraPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.detalle_compraFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detalle_compraPayload>;
                };
                findFirst: {
                    args: Prisma.detalle_compraFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detalle_compraPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.detalle_compraFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detalle_compraPayload>;
                };
                findMany: {
                    args: Prisma.detalle_compraFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detalle_compraPayload>[];
                };
                create: {
                    args: Prisma.detalle_compraCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detalle_compraPayload>;
                };
                createMany: {
                    args: Prisma.detalle_compraCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.detalle_compraCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detalle_compraPayload>[];
                };
                delete: {
                    args: Prisma.detalle_compraDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detalle_compraPayload>;
                };
                update: {
                    args: Prisma.detalle_compraUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detalle_compraPayload>;
                };
                deleteMany: {
                    args: Prisma.detalle_compraDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.detalle_compraUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.detalle_compraUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detalle_compraPayload>[];
                };
                upsert: {
                    args: Prisma.detalle_compraUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$detalle_compraPayload>;
                };
                aggregate: {
                    args: Prisma.Detalle_compraAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDetalle_compra>;
                };
                groupBy: {
                    args: Prisma.detalle_compraGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Detalle_compraGroupByOutputType>[];
                };
                count: {
                    args: Prisma.detalle_compraCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Detalle_compraCountAggregateOutputType> | number;
                };
            };
        };
        examen_modulo: {
            payload: Prisma.$examen_moduloPayload<ExtArgs>;
            fields: Prisma.examen_moduloFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.examen_moduloFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$examen_moduloPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.examen_moduloFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$examen_moduloPayload>;
                };
                findFirst: {
                    args: Prisma.examen_moduloFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$examen_moduloPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.examen_moduloFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$examen_moduloPayload>;
                };
                findMany: {
                    args: Prisma.examen_moduloFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$examen_moduloPayload>[];
                };
                create: {
                    args: Prisma.examen_moduloCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$examen_moduloPayload>;
                };
                createMany: {
                    args: Prisma.examen_moduloCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.examen_moduloCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$examen_moduloPayload>[];
                };
                delete: {
                    args: Prisma.examen_moduloDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$examen_moduloPayload>;
                };
                update: {
                    args: Prisma.examen_moduloUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$examen_moduloPayload>;
                };
                deleteMany: {
                    args: Prisma.examen_moduloDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.examen_moduloUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.examen_moduloUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$examen_moduloPayload>[];
                };
                upsert: {
                    args: Prisma.examen_moduloUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$examen_moduloPayload>;
                };
                aggregate: {
                    args: Prisma.Examen_moduloAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateExamen_modulo>;
                };
                groupBy: {
                    args: Prisma.examen_moduloGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Examen_moduloGroupByOutputType>[];
                };
                count: {
                    args: Prisma.examen_moduloCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Examen_moduloCountAggregateOutputType> | number;
                };
            };
        };
        factura_compra: {
            payload: Prisma.$factura_compraPayload<ExtArgs>;
            fields: Prisma.factura_compraFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.factura_compraFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$factura_compraPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.factura_compraFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$factura_compraPayload>;
                };
                findFirst: {
                    args: Prisma.factura_compraFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$factura_compraPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.factura_compraFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$factura_compraPayload>;
                };
                findMany: {
                    args: Prisma.factura_compraFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$factura_compraPayload>[];
                };
                create: {
                    args: Prisma.factura_compraCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$factura_compraPayload>;
                };
                createMany: {
                    args: Prisma.factura_compraCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.factura_compraCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$factura_compraPayload>[];
                };
                delete: {
                    args: Prisma.factura_compraDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$factura_compraPayload>;
                };
                update: {
                    args: Prisma.factura_compraUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$factura_compraPayload>;
                };
                deleteMany: {
                    args: Prisma.factura_compraDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.factura_compraUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.factura_compraUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$factura_compraPayload>[];
                };
                upsert: {
                    args: Prisma.factura_compraUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$factura_compraPayload>;
                };
                aggregate: {
                    args: Prisma.Factura_compraAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFactura_compra>;
                };
                groupBy: {
                    args: Prisma.factura_compraGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Factura_compraGroupByOutputType>[];
                };
                count: {
                    args: Prisma.factura_compraCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Factura_compraCountAggregateOutputType> | number;
                };
            };
        };
        modulo: {
            payload: Prisma.$moduloPayload<ExtArgs>;
            fields: Prisma.moduloFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.moduloFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$moduloPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.moduloFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$moduloPayload>;
                };
                findFirst: {
                    args: Prisma.moduloFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$moduloPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.moduloFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$moduloPayload>;
                };
                findMany: {
                    args: Prisma.moduloFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$moduloPayload>[];
                };
                create: {
                    args: Prisma.moduloCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$moduloPayload>;
                };
                createMany: {
                    args: Prisma.moduloCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.moduloCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$moduloPayload>[];
                };
                delete: {
                    args: Prisma.moduloDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$moduloPayload>;
                };
                update: {
                    args: Prisma.moduloUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$moduloPayload>;
                };
                deleteMany: {
                    args: Prisma.moduloDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.moduloUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.moduloUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$moduloPayload>[];
                };
                upsert: {
                    args: Prisma.moduloUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$moduloPayload>;
                };
                aggregate: {
                    args: Prisma.ModuloAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateModulo>;
                };
                groupBy: {
                    args: Prisma.moduloGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ModuloGroupByOutputType>[];
                };
                count: {
                    args: Prisma.moduloCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ModuloCountAggregateOutputType> | number;
                };
            };
        };
        progreso_modulo: {
            payload: Prisma.$progreso_moduloPayload<ExtArgs>;
            fields: Prisma.progreso_moduloFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.progreso_moduloFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$progreso_moduloPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.progreso_moduloFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$progreso_moduloPayload>;
                };
                findFirst: {
                    args: Prisma.progreso_moduloFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$progreso_moduloPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.progreso_moduloFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$progreso_moduloPayload>;
                };
                findMany: {
                    args: Prisma.progreso_moduloFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$progreso_moduloPayload>[];
                };
                create: {
                    args: Prisma.progreso_moduloCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$progreso_moduloPayload>;
                };
                createMany: {
                    args: Prisma.progreso_moduloCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.progreso_moduloCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$progreso_moduloPayload>[];
                };
                delete: {
                    args: Prisma.progreso_moduloDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$progreso_moduloPayload>;
                };
                update: {
                    args: Prisma.progreso_moduloUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$progreso_moduloPayload>;
                };
                deleteMany: {
                    args: Prisma.progreso_moduloDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.progreso_moduloUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.progreso_moduloUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$progreso_moduloPayload>[];
                };
                upsert: {
                    args: Prisma.progreso_moduloUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$progreso_moduloPayload>;
                };
                aggregate: {
                    args: Prisma.Progreso_moduloAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateProgreso_modulo>;
                };
                groupBy: {
                    args: Prisma.progreso_moduloGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Progreso_moduloGroupByOutputType>[];
                };
                count: {
                    args: Prisma.progreso_moduloCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Progreso_moduloCountAggregateOutputType> | number;
                };
            };
        };
        resultado_examen: {
            payload: Prisma.$resultado_examenPayload<ExtArgs>;
            fields: Prisma.resultado_examenFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.resultado_examenFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$resultado_examenPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.resultado_examenFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$resultado_examenPayload>;
                };
                findFirst: {
                    args: Prisma.resultado_examenFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$resultado_examenPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.resultado_examenFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$resultado_examenPayload>;
                };
                findMany: {
                    args: Prisma.resultado_examenFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$resultado_examenPayload>[];
                };
                create: {
                    args: Prisma.resultado_examenCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$resultado_examenPayload>;
                };
                createMany: {
                    args: Prisma.resultado_examenCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.resultado_examenCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$resultado_examenPayload>[];
                };
                delete: {
                    args: Prisma.resultado_examenDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$resultado_examenPayload>;
                };
                update: {
                    args: Prisma.resultado_examenUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$resultado_examenPayload>;
                };
                deleteMany: {
                    args: Prisma.resultado_examenDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.resultado_examenUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.resultado_examenUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$resultado_examenPayload>[];
                };
                upsert: {
                    args: Prisma.resultado_examenUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$resultado_examenPayload>;
                };
                aggregate: {
                    args: Prisma.Resultado_examenAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateResultado_examen>;
                };
                groupBy: {
                    args: Prisma.resultado_examenGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Resultado_examenGroupByOutputType>[];
                };
                count: {
                    args: Prisma.resultado_examenCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Resultado_examenCountAggregateOutputType> | number;
                };
            };
        };
        usuario: {
            payload: Prisma.$usuarioPayload<ExtArgs>;
            fields: Prisma.usuarioFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.usuarioFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarioPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.usuarioFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarioPayload>;
                };
                findFirst: {
                    args: Prisma.usuarioFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarioPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.usuarioFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarioPayload>;
                };
                findMany: {
                    args: Prisma.usuarioFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarioPayload>[];
                };
                create: {
                    args: Prisma.usuarioCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarioPayload>;
                };
                createMany: {
                    args: Prisma.usuarioCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.usuarioCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarioPayload>[];
                };
                delete: {
                    args: Prisma.usuarioDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarioPayload>;
                };
                update: {
                    args: Prisma.usuarioUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarioPayload>;
                };
                deleteMany: {
                    args: Prisma.usuarioDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.usuarioUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.usuarioUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarioPayload>[];
                };
                upsert: {
                    args: Prisma.usuarioUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usuarioPayload>;
                };
                aggregate: {
                    args: Prisma.UsuarioAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsuario>;
                };
                groupBy: {
                    args: Prisma.usuarioGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsuarioGroupByOutputType>[];
                };
                count: {
                    args: Prisma.usuarioCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsuarioCountAggregateOutputType> | number;
                };
            };
        };
        video: {
            payload: Prisma.$videoPayload<ExtArgs>;
            fields: Prisma.videoFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.videoFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$videoPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.videoFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$videoPayload>;
                };
                findFirst: {
                    args: Prisma.videoFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$videoPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.videoFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$videoPayload>;
                };
                findMany: {
                    args: Prisma.videoFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$videoPayload>[];
                };
                create: {
                    args: Prisma.videoCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$videoPayload>;
                };
                createMany: {
                    args: Prisma.videoCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.videoCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$videoPayload>[];
                };
                delete: {
                    args: Prisma.videoDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$videoPayload>;
                };
                update: {
                    args: Prisma.videoUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$videoPayload>;
                };
                deleteMany: {
                    args: Prisma.videoDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.videoUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.videoUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$videoPayload>[];
                };
                upsert: {
                    args: Prisma.videoUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$videoPayload>;
                };
                aggregate: {
                    args: Prisma.VideoAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVideo>;
                };
                groupBy: {
                    args: Prisma.videoGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VideoGroupByOutputType>[];
                };
                count: {
                    args: Prisma.videoCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VideoCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const AdminScalarFieldEnum: {
    readonly id: "id";
};
export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum];
export declare const AprendizScalarFieldEnum: {
    readonly id: "id";
};
export type AprendizScalarFieldEnum = (typeof AprendizScalarFieldEnum)[keyof typeof AprendizScalarFieldEnum];
export declare const CarritoScalarFieldEnum: {
    readonly id: "id";
    readonly usuario_id: "usuario_id";
};
export type CarritoScalarFieldEnum = (typeof CarritoScalarFieldEnum)[keyof typeof CarritoScalarFieldEnum];
export declare const Carrito_cursoScalarFieldEnum: {
    readonly id: "id";
    readonly carrito_id: "carrito_id";
    readonly curso_id: "curso_id";
};
export type Carrito_cursoScalarFieldEnum = (typeof Carrito_cursoScalarFieldEnum)[keyof typeof Carrito_cursoScalarFieldEnum];
export declare const CursoScalarFieldEnum: {
    readonly id: "id";
    readonly titulo: "titulo";
    readonly descripcion: "descripcion";
    readonly precio: "precio";
    readonly admin_id: "admin_id";
};
export type CursoScalarFieldEnum = (typeof CursoScalarFieldEnum)[keyof typeof CursoScalarFieldEnum];
export declare const Detalle_compraScalarFieldEnum: {
    readonly id: "id";
    readonly factura_id: "factura_id";
    readonly curso_id: "curso_id";
};
export type Detalle_compraScalarFieldEnum = (typeof Detalle_compraScalarFieldEnum)[keyof typeof Detalle_compraScalarFieldEnum];
export declare const Examen_moduloScalarFieldEnum: {
    readonly id: "id";
    readonly modulo_id: "modulo_id";
};
export type Examen_moduloScalarFieldEnum = (typeof Examen_moduloScalarFieldEnum)[keyof typeof Examen_moduloScalarFieldEnum];
export declare const Factura_compraScalarFieldEnum: {
    readonly id: "id";
    readonly fecha: "fecha";
    readonly usuario_id: "usuario_id";
};
export type Factura_compraScalarFieldEnum = (typeof Factura_compraScalarFieldEnum)[keyof typeof Factura_compraScalarFieldEnum];
export declare const ModuloScalarFieldEnum: {
    readonly id: "id";
    readonly titulo: "titulo";
    readonly orden: "orden";
    readonly curso_id: "curso_id";
};
export type ModuloScalarFieldEnum = (typeof ModuloScalarFieldEnum)[keyof typeof ModuloScalarFieldEnum];
export declare const Progreso_moduloScalarFieldEnum: {
    readonly id: "id";
    readonly aprendiz_id: "aprendiz_id";
    readonly modulo_id: "modulo_id";
    readonly completado: "completado";
};
export type Progreso_moduloScalarFieldEnum = (typeof Progreso_moduloScalarFieldEnum)[keyof typeof Progreso_moduloScalarFieldEnum];
export declare const Resultado_examenScalarFieldEnum: {
    readonly id: "id";
    readonly examen_id: "examen_id";
    readonly aprendiz_id: "aprendiz_id";
    readonly aprobado: "aprobado";
    readonly comentario: "comentario";
};
export type Resultado_examenScalarFieldEnum = (typeof Resultado_examenScalarFieldEnum)[keyof typeof Resultado_examenScalarFieldEnum];
export declare const UsuarioScalarFieldEnum: {
    readonly id: "id";
    readonly nombre_completo: "nombre_completo";
    readonly email: "email";
    readonly direccion: "direccion";
};
export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum];
export declare const VideoScalarFieldEnum: {
    readonly id: "id";
    readonly titulo: "titulo";
    readonly url: "url";
    readonly duracion: "duracion";
    readonly orden: "orden";
    readonly modulo_id: "modulo_id";
};
export type VideoScalarFieldEnum = (typeof VideoScalarFieldEnum)[keyof typeof VideoScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
};
export type GlobalOmitConfig = {
    admin?: Prisma.adminOmit;
    aprendiz?: Prisma.aprendizOmit;
    carrito?: Prisma.carritoOmit;
    carrito_curso?: Prisma.carrito_cursoOmit;
    curso?: Prisma.cursoOmit;
    detalle_compra?: Prisma.detalle_compraOmit;
    examen_modulo?: Prisma.examen_moduloOmit;
    factura_compra?: Prisma.factura_compraOmit;
    modulo?: Prisma.moduloOmit;
    progreso_modulo?: Prisma.progreso_moduloOmit;
    resultado_examen?: Prisma.resultado_examenOmit;
    usuario?: Prisma.usuarioOmit;
    video?: Prisma.videoOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
