"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryMode = exports.NullsOrder = exports.SortOrder = exports.VideoScalarFieldEnum = exports.UsuarioScalarFieldEnum = exports.Resultado_examenScalarFieldEnum = exports.Progreso_moduloScalarFieldEnum = exports.ModuloScalarFieldEnum = exports.Factura_compraScalarFieldEnum = exports.Examen_moduloScalarFieldEnum = exports.Detalle_compraScalarFieldEnum = exports.CursoScalarFieldEnum = exports.Carrito_cursoScalarFieldEnum = exports.CarritoScalarFieldEnum = exports.AprendizScalarFieldEnum = exports.AdminScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = __importStar(require("@prisma/client/runtime/index-browser"));
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    admin: 'admin',
    aprendiz: 'aprendiz',
    carrito: 'carrito',
    carrito_curso: 'carrito_curso',
    curso: 'curso',
    detalle_compra: 'detalle_compra',
    examen_modulo: 'examen_modulo',
    factura_compra: 'factura_compra',
    modulo: 'modulo',
    progreso_modulo: 'progreso_modulo',
    resultado_examen: 'resultado_examen',
    usuario: 'usuario',
    video: 'video'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.AdminScalarFieldEnum = {
    id: 'id'
};
exports.AprendizScalarFieldEnum = {
    id: 'id'
};
exports.CarritoScalarFieldEnum = {
    id: 'id',
    usuario_id: 'usuario_id'
};
exports.Carrito_cursoScalarFieldEnum = {
    id: 'id',
    carrito_id: 'carrito_id',
    curso_id: 'curso_id'
};
exports.CursoScalarFieldEnum = {
    id: 'id',
    titulo: 'titulo',
    descripcion: 'descripcion',
    precio: 'precio',
    admin_id: 'admin_id'
};
exports.Detalle_compraScalarFieldEnum = {
    id: 'id',
    factura_id: 'factura_id',
    curso_id: 'curso_id'
};
exports.Examen_moduloScalarFieldEnum = {
    id: 'id',
    modulo_id: 'modulo_id'
};
exports.Factura_compraScalarFieldEnum = {
    id: 'id',
    fecha: 'fecha',
    usuario_id: 'usuario_id'
};
exports.ModuloScalarFieldEnum = {
    id: 'id',
    titulo: 'titulo',
    orden: 'orden',
    curso_id: 'curso_id'
};
exports.Progreso_moduloScalarFieldEnum = {
    id: 'id',
    aprendiz_id: 'aprendiz_id',
    modulo_id: 'modulo_id',
    completado: 'completado'
};
exports.Resultado_examenScalarFieldEnum = {
    id: 'id',
    examen_id: 'examen_id',
    aprendiz_id: 'aprendiz_id',
    aprobado: 'aprobado',
    comentario: 'comentario'
};
exports.UsuarioScalarFieldEnum = {
    id: 'id',
    nombre_completo: 'nombre_completo',
    email: 'email',
    direccion: 'direccion'
};
exports.VideoScalarFieldEnum = {
    id: 'id',
    titulo: 'titulo',
    url: 'url',
    duracion: 'duracion',
    orden: 'orden',
    modulo_id: 'modulo_id'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map