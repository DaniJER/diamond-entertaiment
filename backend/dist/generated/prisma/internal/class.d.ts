import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "./prismaNamespace.js";
export type LogOptions<ClientOptions extends Prisma.PrismaClientOptions> = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never;
export interface PrismaClientConstructor {
    new <Options extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions, LogOpts extends LogOptions<Options> = LogOptions<Options>, OmitOpts extends Prisma.PrismaClientOptions['omit'] = Options extends {
        omit: infer U;
    } ? U : Prisma.PrismaClientOptions['omit'], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs>(options: Prisma.Subset<Options, Prisma.PrismaClientOptions>): PrismaClient<LogOpts, OmitOpts, ExtArgs>;
}
export interface PrismaClient<in LogOpts extends Prisma.LogLevel = never, in out OmitOpts extends Prisma.PrismaClientOptions['omit'] = undefined, in out ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['other'];
    };
    $on<V extends LogOpts>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;
    $connect(): runtime.Types.Utils.JsPromise<void>;
    $disconnect(): runtime.Types.Utils.JsPromise<void>;
    $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;
    $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;
    $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;
    $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;
    $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: {
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;
    $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => runtime.Types.Utils.JsPromise<R>, options?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: Prisma.TransactionIsolationLevel;
    }): runtime.Types.Utils.JsPromise<R>;
    $extends: runtime.Types.Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<OmitOpts>, ExtArgs, runtime.Types.Utils.Call<Prisma.TypeMapCb<OmitOpts>, {
        extArgs: ExtArgs;
    }>>;
    get admin(): Prisma.adminDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get aprendiz(): Prisma.aprendizDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get carrito(): Prisma.carritoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get carrito_curso(): Prisma.carrito_cursoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get curso(): Prisma.cursoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get detalle_compra(): Prisma.detalle_compraDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get examen_modulo(): Prisma.examen_moduloDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get factura_compra(): Prisma.factura_compraDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get modulo(): Prisma.moduloDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get progreso_modulo(): Prisma.progreso_moduloDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get resultado_examen(): Prisma.resultado_examenDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get usuario(): Prisma.usuarioDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
    get video(): Prisma.videoDelegate<ExtArgs, {
        omit: OmitOpts;
    }>;
}
export declare function getPrismaClientClass(): PrismaClientConstructor;
