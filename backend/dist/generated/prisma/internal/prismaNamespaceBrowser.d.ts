import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
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
