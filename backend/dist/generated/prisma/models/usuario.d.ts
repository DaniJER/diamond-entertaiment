import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type usuarioModel = runtime.Types.Result.DefaultSelection<Prisma.$usuarioPayload>;
export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null;
    _avg: UsuarioAvgAggregateOutputType | null;
    _sum: UsuarioSumAggregateOutputType | null;
    _min: UsuarioMinAggregateOutputType | null;
    _max: UsuarioMaxAggregateOutputType | null;
};
export type UsuarioAvgAggregateOutputType = {
    id: number | null;
};
export type UsuarioSumAggregateOutputType = {
    id: number | null;
};
export type UsuarioMinAggregateOutputType = {
    id: number | null;
    nombre_completo: string | null;
    email: string | null;
    direccion: string | null;
};
export type UsuarioMaxAggregateOutputType = {
    id: number | null;
    nombre_completo: string | null;
    email: string | null;
    direccion: string | null;
};
export type UsuarioCountAggregateOutputType = {
    id: number;
    nombre_completo: number;
    email: number;
    direccion: number;
    _all: number;
};
export type UsuarioAvgAggregateInputType = {
    id?: true;
};
export type UsuarioSumAggregateInputType = {
    id?: true;
};
export type UsuarioMinAggregateInputType = {
    id?: true;
    nombre_completo?: true;
    email?: true;
    direccion?: true;
};
export type UsuarioMaxAggregateInputType = {
    id?: true;
    nombre_completo?: true;
    email?: true;
    direccion?: true;
};
export type UsuarioCountAggregateInputType = {
    id?: true;
    nombre_completo?: true;
    email?: true;
    direccion?: true;
    _all?: true;
};
export type UsuarioAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usuarioWhereInput;
    orderBy?: Prisma.usuarioOrderByWithRelationInput | Prisma.usuarioOrderByWithRelationInput[];
    cursor?: Prisma.usuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UsuarioCountAggregateInputType;
    _avg?: UsuarioAvgAggregateInputType;
    _sum?: UsuarioSumAggregateInputType;
    _min?: UsuarioMinAggregateInputType;
    _max?: UsuarioMaxAggregateInputType;
};
export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
    [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsuario[P]> : Prisma.GetScalarType<T[P], AggregateUsuario[P]>;
};
export type usuarioGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usuarioWhereInput;
    orderBy?: Prisma.usuarioOrderByWithAggregationInput | Prisma.usuarioOrderByWithAggregationInput[];
    by: Prisma.UsuarioScalarFieldEnum[] | Prisma.UsuarioScalarFieldEnum;
    having?: Prisma.usuarioScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsuarioCountAggregateInputType | true;
    _avg?: UsuarioAvgAggregateInputType;
    _sum?: UsuarioSumAggregateInputType;
    _min?: UsuarioMinAggregateInputType;
    _max?: UsuarioMaxAggregateInputType;
};
export type UsuarioGroupByOutputType = {
    id: number;
    nombre_completo: string;
    email: string;
    direccion: string | null;
    _count: UsuarioCountAggregateOutputType | null;
    _avg: UsuarioAvgAggregateOutputType | null;
    _sum: UsuarioSumAggregateOutputType | null;
    _min: UsuarioMinAggregateOutputType | null;
    _max: UsuarioMaxAggregateOutputType | null;
};
export type GetUsuarioGroupByPayload<T extends usuarioGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsuarioGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsuarioGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsuarioGroupByOutputType[P]>;
}>>;
export type usuarioWhereInput = {
    AND?: Prisma.usuarioWhereInput | Prisma.usuarioWhereInput[];
    OR?: Prisma.usuarioWhereInput[];
    NOT?: Prisma.usuarioWhereInput | Prisma.usuarioWhereInput[];
    id?: Prisma.IntFilter<"usuario"> | number;
    nombre_completo?: Prisma.StringFilter<"usuario"> | string;
    email?: Prisma.StringFilter<"usuario"> | string;
    direccion?: Prisma.StringNullableFilter<"usuario"> | string | null;
    admin?: Prisma.XOR<Prisma.AdminNullableScalarRelationFilter, Prisma.adminWhereInput> | null;
    aprendiz?: Prisma.XOR<Prisma.AprendizNullableScalarRelationFilter, Prisma.aprendizWhereInput> | null;
    carrito?: Prisma.XOR<Prisma.CarritoNullableScalarRelationFilter, Prisma.carritoWhereInput> | null;
    factura_compra?: Prisma.Factura_compraListRelationFilter;
};
export type usuarioOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    nombre_completo?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    direccion?: Prisma.SortOrderInput | Prisma.SortOrder;
    admin?: Prisma.adminOrderByWithRelationInput;
    aprendiz?: Prisma.aprendizOrderByWithRelationInput;
    carrito?: Prisma.carritoOrderByWithRelationInput;
    factura_compra?: Prisma.factura_compraOrderByRelationAggregateInput;
};
export type usuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    email?: string;
    AND?: Prisma.usuarioWhereInput | Prisma.usuarioWhereInput[];
    OR?: Prisma.usuarioWhereInput[];
    NOT?: Prisma.usuarioWhereInput | Prisma.usuarioWhereInput[];
    nombre_completo?: Prisma.StringFilter<"usuario"> | string;
    direccion?: Prisma.StringNullableFilter<"usuario"> | string | null;
    admin?: Prisma.XOR<Prisma.AdminNullableScalarRelationFilter, Prisma.adminWhereInput> | null;
    aprendiz?: Prisma.XOR<Prisma.AprendizNullableScalarRelationFilter, Prisma.aprendizWhereInput> | null;
    carrito?: Prisma.XOR<Prisma.CarritoNullableScalarRelationFilter, Prisma.carritoWhereInput> | null;
    factura_compra?: Prisma.Factura_compraListRelationFilter;
}, "id" | "email">;
export type usuarioOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    nombre_completo?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    direccion?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.usuarioCountOrderByAggregateInput;
    _avg?: Prisma.usuarioAvgOrderByAggregateInput;
    _max?: Prisma.usuarioMaxOrderByAggregateInput;
    _min?: Prisma.usuarioMinOrderByAggregateInput;
    _sum?: Prisma.usuarioSumOrderByAggregateInput;
};
export type usuarioScalarWhereWithAggregatesInput = {
    AND?: Prisma.usuarioScalarWhereWithAggregatesInput | Prisma.usuarioScalarWhereWithAggregatesInput[];
    OR?: Prisma.usuarioScalarWhereWithAggregatesInput[];
    NOT?: Prisma.usuarioScalarWhereWithAggregatesInput | Prisma.usuarioScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"usuario"> | number;
    nombre_completo?: Prisma.StringWithAggregatesFilter<"usuario"> | string;
    email?: Prisma.StringWithAggregatesFilter<"usuario"> | string;
    direccion?: Prisma.StringNullableWithAggregatesFilter<"usuario"> | string | null;
};
export type usuarioCreateInput = {
    nombre_completo: string;
    email: string;
    direccion?: string | null;
    admin?: Prisma.adminCreateNestedOneWithoutUsuarioInput;
    aprendiz?: Prisma.aprendizCreateNestedOneWithoutUsuarioInput;
    carrito?: Prisma.carritoCreateNestedOneWithoutUsuarioInput;
    factura_compra?: Prisma.factura_compraCreateNestedManyWithoutUsuarioInput;
};
export type usuarioUncheckedCreateInput = {
    id?: number;
    nombre_completo: string;
    email: string;
    direccion?: string | null;
    admin?: Prisma.adminUncheckedCreateNestedOneWithoutUsuarioInput;
    aprendiz?: Prisma.aprendizUncheckedCreateNestedOneWithoutUsuarioInput;
    carrito?: Prisma.carritoUncheckedCreateNestedOneWithoutUsuarioInput;
    factura_compra?: Prisma.factura_compraUncheckedCreateNestedManyWithoutUsuarioInput;
};
export type usuarioUpdateInput = {
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admin?: Prisma.adminUpdateOneWithoutUsuarioNestedInput;
    aprendiz?: Prisma.aprendizUpdateOneWithoutUsuarioNestedInput;
    carrito?: Prisma.carritoUpdateOneWithoutUsuarioNestedInput;
    factura_compra?: Prisma.factura_compraUpdateManyWithoutUsuarioNestedInput;
};
export type usuarioUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admin?: Prisma.adminUncheckedUpdateOneWithoutUsuarioNestedInput;
    aprendiz?: Prisma.aprendizUncheckedUpdateOneWithoutUsuarioNestedInput;
    carrito?: Prisma.carritoUncheckedUpdateOneWithoutUsuarioNestedInput;
    factura_compra?: Prisma.factura_compraUncheckedUpdateManyWithoutUsuarioNestedInput;
};
export type usuarioCreateManyInput = {
    id?: number;
    nombre_completo: string;
    email: string;
    direccion?: string | null;
};
export type usuarioUpdateManyMutationInput = {
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type usuarioUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type UsuarioScalarRelationFilter = {
    is?: Prisma.usuarioWhereInput;
    isNot?: Prisma.usuarioWhereInput;
};
export type UsuarioNullableScalarRelationFilter = {
    is?: Prisma.usuarioWhereInput | null;
    isNot?: Prisma.usuarioWhereInput | null;
};
export type usuarioCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre_completo?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
};
export type usuarioAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type usuarioMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre_completo?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
};
export type usuarioMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    nombre_completo?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    direccion?: Prisma.SortOrder;
};
export type usuarioSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type usuarioCreateNestedOneWithoutAdminInput = {
    create?: Prisma.XOR<Prisma.usuarioCreateWithoutAdminInput, Prisma.usuarioUncheckedCreateWithoutAdminInput>;
    connectOrCreate?: Prisma.usuarioCreateOrConnectWithoutAdminInput;
    connect?: Prisma.usuarioWhereUniqueInput;
};
export type usuarioUpdateOneRequiredWithoutAdminNestedInput = {
    create?: Prisma.XOR<Prisma.usuarioCreateWithoutAdminInput, Prisma.usuarioUncheckedCreateWithoutAdminInput>;
    connectOrCreate?: Prisma.usuarioCreateOrConnectWithoutAdminInput;
    upsert?: Prisma.usuarioUpsertWithoutAdminInput;
    connect?: Prisma.usuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usuarioUpdateToOneWithWhereWithoutAdminInput, Prisma.usuarioUpdateWithoutAdminInput>, Prisma.usuarioUncheckedUpdateWithoutAdminInput>;
};
export type usuarioCreateNestedOneWithoutAprendizInput = {
    create?: Prisma.XOR<Prisma.usuarioCreateWithoutAprendizInput, Prisma.usuarioUncheckedCreateWithoutAprendizInput>;
    connectOrCreate?: Prisma.usuarioCreateOrConnectWithoutAprendizInput;
    connect?: Prisma.usuarioWhereUniqueInput;
};
export type usuarioUpdateOneRequiredWithoutAprendizNestedInput = {
    create?: Prisma.XOR<Prisma.usuarioCreateWithoutAprendizInput, Prisma.usuarioUncheckedCreateWithoutAprendizInput>;
    connectOrCreate?: Prisma.usuarioCreateOrConnectWithoutAprendizInput;
    upsert?: Prisma.usuarioUpsertWithoutAprendizInput;
    connect?: Prisma.usuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usuarioUpdateToOneWithWhereWithoutAprendizInput, Prisma.usuarioUpdateWithoutAprendizInput>, Prisma.usuarioUncheckedUpdateWithoutAprendizInput>;
};
export type usuarioCreateNestedOneWithoutCarritoInput = {
    create?: Prisma.XOR<Prisma.usuarioCreateWithoutCarritoInput, Prisma.usuarioUncheckedCreateWithoutCarritoInput>;
    connectOrCreate?: Prisma.usuarioCreateOrConnectWithoutCarritoInput;
    connect?: Prisma.usuarioWhereUniqueInput;
};
export type usuarioUpdateOneWithoutCarritoNestedInput = {
    create?: Prisma.XOR<Prisma.usuarioCreateWithoutCarritoInput, Prisma.usuarioUncheckedCreateWithoutCarritoInput>;
    connectOrCreate?: Prisma.usuarioCreateOrConnectWithoutCarritoInput;
    upsert?: Prisma.usuarioUpsertWithoutCarritoInput;
    disconnect?: Prisma.usuarioWhereInput | boolean;
    delete?: Prisma.usuarioWhereInput | boolean;
    connect?: Prisma.usuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usuarioUpdateToOneWithWhereWithoutCarritoInput, Prisma.usuarioUpdateWithoutCarritoInput>, Prisma.usuarioUncheckedUpdateWithoutCarritoInput>;
};
export type usuarioCreateNestedOneWithoutFactura_compraInput = {
    create?: Prisma.XOR<Prisma.usuarioCreateWithoutFactura_compraInput, Prisma.usuarioUncheckedCreateWithoutFactura_compraInput>;
    connectOrCreate?: Prisma.usuarioCreateOrConnectWithoutFactura_compraInput;
    connect?: Prisma.usuarioWhereUniqueInput;
};
export type usuarioUpdateOneWithoutFactura_compraNestedInput = {
    create?: Prisma.XOR<Prisma.usuarioCreateWithoutFactura_compraInput, Prisma.usuarioUncheckedCreateWithoutFactura_compraInput>;
    connectOrCreate?: Prisma.usuarioCreateOrConnectWithoutFactura_compraInput;
    upsert?: Prisma.usuarioUpsertWithoutFactura_compraInput;
    disconnect?: Prisma.usuarioWhereInput | boolean;
    delete?: Prisma.usuarioWhereInput | boolean;
    connect?: Prisma.usuarioWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usuarioUpdateToOneWithWhereWithoutFactura_compraInput, Prisma.usuarioUpdateWithoutFactura_compraInput>, Prisma.usuarioUncheckedUpdateWithoutFactura_compraInput>;
};
export type usuarioCreateWithoutAdminInput = {
    nombre_completo: string;
    email: string;
    direccion?: string | null;
    aprendiz?: Prisma.aprendizCreateNestedOneWithoutUsuarioInput;
    carrito?: Prisma.carritoCreateNestedOneWithoutUsuarioInput;
    factura_compra?: Prisma.factura_compraCreateNestedManyWithoutUsuarioInput;
};
export type usuarioUncheckedCreateWithoutAdminInput = {
    id?: number;
    nombre_completo: string;
    email: string;
    direccion?: string | null;
    aprendiz?: Prisma.aprendizUncheckedCreateNestedOneWithoutUsuarioInput;
    carrito?: Prisma.carritoUncheckedCreateNestedOneWithoutUsuarioInput;
    factura_compra?: Prisma.factura_compraUncheckedCreateNestedManyWithoutUsuarioInput;
};
export type usuarioCreateOrConnectWithoutAdminInput = {
    where: Prisma.usuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.usuarioCreateWithoutAdminInput, Prisma.usuarioUncheckedCreateWithoutAdminInput>;
};
export type usuarioUpsertWithoutAdminInput = {
    update: Prisma.XOR<Prisma.usuarioUpdateWithoutAdminInput, Prisma.usuarioUncheckedUpdateWithoutAdminInput>;
    create: Prisma.XOR<Prisma.usuarioCreateWithoutAdminInput, Prisma.usuarioUncheckedCreateWithoutAdminInput>;
    where?: Prisma.usuarioWhereInput;
};
export type usuarioUpdateToOneWithWhereWithoutAdminInput = {
    where?: Prisma.usuarioWhereInput;
    data: Prisma.XOR<Prisma.usuarioUpdateWithoutAdminInput, Prisma.usuarioUncheckedUpdateWithoutAdminInput>;
};
export type usuarioUpdateWithoutAdminInput = {
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    aprendiz?: Prisma.aprendizUpdateOneWithoutUsuarioNestedInput;
    carrito?: Prisma.carritoUpdateOneWithoutUsuarioNestedInput;
    factura_compra?: Prisma.factura_compraUpdateManyWithoutUsuarioNestedInput;
};
export type usuarioUncheckedUpdateWithoutAdminInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    aprendiz?: Prisma.aprendizUncheckedUpdateOneWithoutUsuarioNestedInput;
    carrito?: Prisma.carritoUncheckedUpdateOneWithoutUsuarioNestedInput;
    factura_compra?: Prisma.factura_compraUncheckedUpdateManyWithoutUsuarioNestedInput;
};
export type usuarioCreateWithoutAprendizInput = {
    nombre_completo: string;
    email: string;
    direccion?: string | null;
    admin?: Prisma.adminCreateNestedOneWithoutUsuarioInput;
    carrito?: Prisma.carritoCreateNestedOneWithoutUsuarioInput;
    factura_compra?: Prisma.factura_compraCreateNestedManyWithoutUsuarioInput;
};
export type usuarioUncheckedCreateWithoutAprendizInput = {
    id?: number;
    nombre_completo: string;
    email: string;
    direccion?: string | null;
    admin?: Prisma.adminUncheckedCreateNestedOneWithoutUsuarioInput;
    carrito?: Prisma.carritoUncheckedCreateNestedOneWithoutUsuarioInput;
    factura_compra?: Prisma.factura_compraUncheckedCreateNestedManyWithoutUsuarioInput;
};
export type usuarioCreateOrConnectWithoutAprendizInput = {
    where: Prisma.usuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.usuarioCreateWithoutAprendizInput, Prisma.usuarioUncheckedCreateWithoutAprendizInput>;
};
export type usuarioUpsertWithoutAprendizInput = {
    update: Prisma.XOR<Prisma.usuarioUpdateWithoutAprendizInput, Prisma.usuarioUncheckedUpdateWithoutAprendizInput>;
    create: Prisma.XOR<Prisma.usuarioCreateWithoutAprendizInput, Prisma.usuarioUncheckedCreateWithoutAprendizInput>;
    where?: Prisma.usuarioWhereInput;
};
export type usuarioUpdateToOneWithWhereWithoutAprendizInput = {
    where?: Prisma.usuarioWhereInput;
    data: Prisma.XOR<Prisma.usuarioUpdateWithoutAprendizInput, Prisma.usuarioUncheckedUpdateWithoutAprendizInput>;
};
export type usuarioUpdateWithoutAprendizInput = {
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admin?: Prisma.adminUpdateOneWithoutUsuarioNestedInput;
    carrito?: Prisma.carritoUpdateOneWithoutUsuarioNestedInput;
    factura_compra?: Prisma.factura_compraUpdateManyWithoutUsuarioNestedInput;
};
export type usuarioUncheckedUpdateWithoutAprendizInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admin?: Prisma.adminUncheckedUpdateOneWithoutUsuarioNestedInput;
    carrito?: Prisma.carritoUncheckedUpdateOneWithoutUsuarioNestedInput;
    factura_compra?: Prisma.factura_compraUncheckedUpdateManyWithoutUsuarioNestedInput;
};
export type usuarioCreateWithoutCarritoInput = {
    nombre_completo: string;
    email: string;
    direccion?: string | null;
    admin?: Prisma.adminCreateNestedOneWithoutUsuarioInput;
    aprendiz?: Prisma.aprendizCreateNestedOneWithoutUsuarioInput;
    factura_compra?: Prisma.factura_compraCreateNestedManyWithoutUsuarioInput;
};
export type usuarioUncheckedCreateWithoutCarritoInput = {
    id?: number;
    nombre_completo: string;
    email: string;
    direccion?: string | null;
    admin?: Prisma.adminUncheckedCreateNestedOneWithoutUsuarioInput;
    aprendiz?: Prisma.aprendizUncheckedCreateNestedOneWithoutUsuarioInput;
    factura_compra?: Prisma.factura_compraUncheckedCreateNestedManyWithoutUsuarioInput;
};
export type usuarioCreateOrConnectWithoutCarritoInput = {
    where: Prisma.usuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.usuarioCreateWithoutCarritoInput, Prisma.usuarioUncheckedCreateWithoutCarritoInput>;
};
export type usuarioUpsertWithoutCarritoInput = {
    update: Prisma.XOR<Prisma.usuarioUpdateWithoutCarritoInput, Prisma.usuarioUncheckedUpdateWithoutCarritoInput>;
    create: Prisma.XOR<Prisma.usuarioCreateWithoutCarritoInput, Prisma.usuarioUncheckedCreateWithoutCarritoInput>;
    where?: Prisma.usuarioWhereInput;
};
export type usuarioUpdateToOneWithWhereWithoutCarritoInput = {
    where?: Prisma.usuarioWhereInput;
    data: Prisma.XOR<Prisma.usuarioUpdateWithoutCarritoInput, Prisma.usuarioUncheckedUpdateWithoutCarritoInput>;
};
export type usuarioUpdateWithoutCarritoInput = {
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admin?: Prisma.adminUpdateOneWithoutUsuarioNestedInput;
    aprendiz?: Prisma.aprendizUpdateOneWithoutUsuarioNestedInput;
    factura_compra?: Prisma.factura_compraUpdateManyWithoutUsuarioNestedInput;
};
export type usuarioUncheckedUpdateWithoutCarritoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admin?: Prisma.adminUncheckedUpdateOneWithoutUsuarioNestedInput;
    aprendiz?: Prisma.aprendizUncheckedUpdateOneWithoutUsuarioNestedInput;
    factura_compra?: Prisma.factura_compraUncheckedUpdateManyWithoutUsuarioNestedInput;
};
export type usuarioCreateWithoutFactura_compraInput = {
    nombre_completo: string;
    email: string;
    direccion?: string | null;
    admin?: Prisma.adminCreateNestedOneWithoutUsuarioInput;
    aprendiz?: Prisma.aprendizCreateNestedOneWithoutUsuarioInput;
    carrito?: Prisma.carritoCreateNestedOneWithoutUsuarioInput;
};
export type usuarioUncheckedCreateWithoutFactura_compraInput = {
    id?: number;
    nombre_completo: string;
    email: string;
    direccion?: string | null;
    admin?: Prisma.adminUncheckedCreateNestedOneWithoutUsuarioInput;
    aprendiz?: Prisma.aprendizUncheckedCreateNestedOneWithoutUsuarioInput;
    carrito?: Prisma.carritoUncheckedCreateNestedOneWithoutUsuarioInput;
};
export type usuarioCreateOrConnectWithoutFactura_compraInput = {
    where: Prisma.usuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.usuarioCreateWithoutFactura_compraInput, Prisma.usuarioUncheckedCreateWithoutFactura_compraInput>;
};
export type usuarioUpsertWithoutFactura_compraInput = {
    update: Prisma.XOR<Prisma.usuarioUpdateWithoutFactura_compraInput, Prisma.usuarioUncheckedUpdateWithoutFactura_compraInput>;
    create: Prisma.XOR<Prisma.usuarioCreateWithoutFactura_compraInput, Prisma.usuarioUncheckedCreateWithoutFactura_compraInput>;
    where?: Prisma.usuarioWhereInput;
};
export type usuarioUpdateToOneWithWhereWithoutFactura_compraInput = {
    where?: Prisma.usuarioWhereInput;
    data: Prisma.XOR<Prisma.usuarioUpdateWithoutFactura_compraInput, Prisma.usuarioUncheckedUpdateWithoutFactura_compraInput>;
};
export type usuarioUpdateWithoutFactura_compraInput = {
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admin?: Prisma.adminUpdateOneWithoutUsuarioNestedInput;
    aprendiz?: Prisma.aprendizUpdateOneWithoutUsuarioNestedInput;
    carrito?: Prisma.carritoUpdateOneWithoutUsuarioNestedInput;
};
export type usuarioUncheckedUpdateWithoutFactura_compraInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    nombre_completo?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    direccion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    admin?: Prisma.adminUncheckedUpdateOneWithoutUsuarioNestedInput;
    aprendiz?: Prisma.aprendizUncheckedUpdateOneWithoutUsuarioNestedInput;
    carrito?: Prisma.carritoUncheckedUpdateOneWithoutUsuarioNestedInput;
};
export type UsuarioCountOutputType = {
    factura_compra: number;
};
export type UsuarioCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    factura_compra?: boolean | UsuarioCountOutputTypeCountFactura_compraArgs;
};
export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsuarioCountOutputTypeSelect<ExtArgs> | null;
};
export type UsuarioCountOutputTypeCountFactura_compraArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.factura_compraWhereInput;
};
export type usuarioSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre_completo?: boolean;
    email?: boolean;
    direccion?: boolean;
    admin?: boolean | Prisma.usuario$adminArgs<ExtArgs>;
    aprendiz?: boolean | Prisma.usuario$aprendizArgs<ExtArgs>;
    carrito?: boolean | Prisma.usuario$carritoArgs<ExtArgs>;
    factura_compra?: boolean | Prisma.usuario$factura_compraArgs<ExtArgs>;
    _count?: boolean | Prisma.UsuarioCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["usuario"]>;
export type usuarioSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre_completo?: boolean;
    email?: boolean;
    direccion?: boolean;
}, ExtArgs["result"]["usuario"]>;
export type usuarioSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    nombre_completo?: boolean;
    email?: boolean;
    direccion?: boolean;
}, ExtArgs["result"]["usuario"]>;
export type usuarioSelectScalar = {
    id?: boolean;
    nombre_completo?: boolean;
    email?: boolean;
    direccion?: boolean;
};
export type usuarioOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "nombre_completo" | "email" | "direccion", ExtArgs["result"]["usuario"]>;
export type usuarioInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admin?: boolean | Prisma.usuario$adminArgs<ExtArgs>;
    aprendiz?: boolean | Prisma.usuario$aprendizArgs<ExtArgs>;
    carrito?: boolean | Prisma.usuario$carritoArgs<ExtArgs>;
    factura_compra?: boolean | Prisma.usuario$factura_compraArgs<ExtArgs>;
    _count?: boolean | Prisma.UsuarioCountOutputTypeDefaultArgs<ExtArgs>;
};
export type usuarioIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type usuarioIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $usuarioPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "usuario";
    objects: {
        admin: Prisma.$adminPayload<ExtArgs> | null;
        aprendiz: Prisma.$aprendizPayload<ExtArgs> | null;
        carrito: Prisma.$carritoPayload<ExtArgs> | null;
        factura_compra: Prisma.$factura_compraPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        nombre_completo: string;
        email: string;
        direccion: string | null;
    }, ExtArgs["result"]["usuario"]>;
    composites: {};
};
export type usuarioGetPayload<S extends boolean | null | undefined | usuarioDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$usuarioPayload, S>;
export type usuarioCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<usuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsuarioCountAggregateInputType | true;
};
export interface usuarioDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['usuario'];
        meta: {
            name: 'usuario';
        };
    };
    findUnique<T extends usuarioFindUniqueArgs>(args: Prisma.SelectSubset<T, usuarioFindUniqueArgs<ExtArgs>>): Prisma.Prisma__usuarioClient<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends usuarioFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, usuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__usuarioClient<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends usuarioFindFirstArgs>(args?: Prisma.SelectSubset<T, usuarioFindFirstArgs<ExtArgs>>): Prisma.Prisma__usuarioClient<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends usuarioFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, usuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__usuarioClient<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends usuarioFindManyArgs>(args?: Prisma.SelectSubset<T, usuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends usuarioCreateArgs>(args: Prisma.SelectSubset<T, usuarioCreateArgs<ExtArgs>>): Prisma.Prisma__usuarioClient<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends usuarioCreateManyArgs>(args?: Prisma.SelectSubset<T, usuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends usuarioCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, usuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends usuarioDeleteArgs>(args: Prisma.SelectSubset<T, usuarioDeleteArgs<ExtArgs>>): Prisma.Prisma__usuarioClient<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends usuarioUpdateArgs>(args: Prisma.SelectSubset<T, usuarioUpdateArgs<ExtArgs>>): Prisma.Prisma__usuarioClient<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends usuarioDeleteManyArgs>(args?: Prisma.SelectSubset<T, usuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends usuarioUpdateManyArgs>(args: Prisma.SelectSubset<T, usuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends usuarioUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, usuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends usuarioUpsertArgs>(args: Prisma.SelectSubset<T, usuarioUpsertArgs<ExtArgs>>): Prisma.Prisma__usuarioClient<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends usuarioCountArgs>(args?: Prisma.Subset<T, usuarioCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsuarioCountAggregateOutputType> : number>;
    aggregate<T extends UsuarioAggregateArgs>(args: Prisma.Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>;
    groupBy<T extends usuarioGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: usuarioGroupByArgs['orderBy'];
    } : {
        orderBy?: usuarioGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, usuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: usuarioFieldRefs;
}
export interface Prisma__usuarioClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    admin<T extends Prisma.usuario$adminArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usuario$adminArgs<ExtArgs>>): Prisma.Prisma__adminClient<runtime.Types.Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    aprendiz<T extends Prisma.usuario$aprendizArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usuario$aprendizArgs<ExtArgs>>): Prisma.Prisma__aprendizClient<runtime.Types.Result.GetResult<Prisma.$aprendizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    carrito<T extends Prisma.usuario$carritoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usuario$carritoArgs<ExtArgs>>): Prisma.Prisma__carritoClient<runtime.Types.Result.GetResult<Prisma.$carritoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    factura_compra<T extends Prisma.usuario$factura_compraArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usuario$factura_compraArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$factura_compraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface usuarioFieldRefs {
    readonly id: Prisma.FieldRef<"usuario", 'Int'>;
    readonly nombre_completo: Prisma.FieldRef<"usuario", 'String'>;
    readonly email: Prisma.FieldRef<"usuario", 'String'>;
    readonly direccion: Prisma.FieldRef<"usuario", 'String'>;
}
export type usuarioFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    include?: Prisma.usuarioInclude<ExtArgs> | null;
    where: Prisma.usuarioWhereUniqueInput;
};
export type usuarioFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    include?: Prisma.usuarioInclude<ExtArgs> | null;
    where: Prisma.usuarioWhereUniqueInput;
};
export type usuarioFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    include?: Prisma.usuarioInclude<ExtArgs> | null;
    where?: Prisma.usuarioWhereInput;
    orderBy?: Prisma.usuarioOrderByWithRelationInput | Prisma.usuarioOrderByWithRelationInput[];
    cursor?: Prisma.usuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
export type usuarioFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    include?: Prisma.usuarioInclude<ExtArgs> | null;
    where?: Prisma.usuarioWhereInput;
    orderBy?: Prisma.usuarioOrderByWithRelationInput | Prisma.usuarioOrderByWithRelationInput[];
    cursor?: Prisma.usuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
export type usuarioFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    include?: Prisma.usuarioInclude<ExtArgs> | null;
    where?: Prisma.usuarioWhereInput;
    orderBy?: Prisma.usuarioOrderByWithRelationInput | Prisma.usuarioOrderByWithRelationInput[];
    cursor?: Prisma.usuarioWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsuarioScalarFieldEnum | Prisma.UsuarioScalarFieldEnum[];
};
export type usuarioCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    include?: Prisma.usuarioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.usuarioCreateInput, Prisma.usuarioUncheckedCreateInput>;
};
export type usuarioCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.usuarioCreateManyInput | Prisma.usuarioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type usuarioCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarioSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    data: Prisma.usuarioCreateManyInput | Prisma.usuarioCreateManyInput[];
    skipDuplicates?: boolean;
};
export type usuarioUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    include?: Prisma.usuarioInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.usuarioUpdateInput, Prisma.usuarioUncheckedUpdateInput>;
    where: Prisma.usuarioWhereUniqueInput;
};
export type usuarioUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.usuarioUpdateManyMutationInput, Prisma.usuarioUncheckedUpdateManyInput>;
    where?: Prisma.usuarioWhereInput;
    limit?: number;
};
export type usuarioUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarioSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.usuarioUpdateManyMutationInput, Prisma.usuarioUncheckedUpdateManyInput>;
    where?: Prisma.usuarioWhereInput;
    limit?: number;
};
export type usuarioUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    include?: Prisma.usuarioInclude<ExtArgs> | null;
    where: Prisma.usuarioWhereUniqueInput;
    create: Prisma.XOR<Prisma.usuarioCreateInput, Prisma.usuarioUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.usuarioUpdateInput, Prisma.usuarioUncheckedUpdateInput>;
};
export type usuarioDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    include?: Prisma.usuarioInclude<ExtArgs> | null;
    where: Prisma.usuarioWhereUniqueInput;
};
export type usuarioDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usuarioWhereInput;
    limit?: number;
};
export type usuario$adminArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adminSelect<ExtArgs> | null;
    omit?: Prisma.adminOmit<ExtArgs> | null;
    include?: Prisma.adminInclude<ExtArgs> | null;
    where?: Prisma.adminWhereInput;
};
export type usuario$aprendizArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.aprendizSelect<ExtArgs> | null;
    omit?: Prisma.aprendizOmit<ExtArgs> | null;
    include?: Prisma.aprendizInclude<ExtArgs> | null;
    where?: Prisma.aprendizWhereInput;
};
export type usuario$carritoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carritoSelect<ExtArgs> | null;
    omit?: Prisma.carritoOmit<ExtArgs> | null;
    include?: Prisma.carritoInclude<ExtArgs> | null;
    where?: Prisma.carritoWhereInput;
};
export type usuario$factura_compraArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.factura_compraSelect<ExtArgs> | null;
    omit?: Prisma.factura_compraOmit<ExtArgs> | null;
    include?: Prisma.factura_compraInclude<ExtArgs> | null;
    where?: Prisma.factura_compraWhereInput;
    orderBy?: Prisma.factura_compraOrderByWithRelationInput | Prisma.factura_compraOrderByWithRelationInput[];
    cursor?: Prisma.factura_compraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Factura_compraScalarFieldEnum | Prisma.Factura_compraScalarFieldEnum[];
};
export type usuarioDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    include?: Prisma.usuarioInclude<ExtArgs> | null;
};
