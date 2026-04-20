import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type cursoModel = runtime.Types.Result.DefaultSelection<Prisma.$cursoPayload>;
export type AggregateCurso = {
    _count: CursoCountAggregateOutputType | null;
    _avg: CursoAvgAggregateOutputType | null;
    _sum: CursoSumAggregateOutputType | null;
    _min: CursoMinAggregateOutputType | null;
    _max: CursoMaxAggregateOutputType | null;
};
export type CursoAvgAggregateOutputType = {
    id: number | null;
    precio: runtime.Decimal | null;
    admin_id: number | null;
};
export type CursoSumAggregateOutputType = {
    id: number | null;
    precio: runtime.Decimal | null;
    admin_id: number | null;
};
export type CursoMinAggregateOutputType = {
    id: number | null;
    titulo: string | null;
    descripcion: string | null;
    precio: runtime.Decimal | null;
    admin_id: number | null;
};
export type CursoMaxAggregateOutputType = {
    id: number | null;
    titulo: string | null;
    descripcion: string | null;
    precio: runtime.Decimal | null;
    admin_id: number | null;
};
export type CursoCountAggregateOutputType = {
    id: number;
    titulo: number;
    descripcion: number;
    precio: number;
    admin_id: number;
    _all: number;
};
export type CursoAvgAggregateInputType = {
    id?: true;
    precio?: true;
    admin_id?: true;
};
export type CursoSumAggregateInputType = {
    id?: true;
    precio?: true;
    admin_id?: true;
};
export type CursoMinAggregateInputType = {
    id?: true;
    titulo?: true;
    descripcion?: true;
    precio?: true;
    admin_id?: true;
};
export type CursoMaxAggregateInputType = {
    id?: true;
    titulo?: true;
    descripcion?: true;
    precio?: true;
    admin_id?: true;
};
export type CursoCountAggregateInputType = {
    id?: true;
    titulo?: true;
    descripcion?: true;
    precio?: true;
    admin_id?: true;
    _all?: true;
};
export type CursoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cursoWhereInput;
    orderBy?: Prisma.cursoOrderByWithRelationInput | Prisma.cursoOrderByWithRelationInput[];
    cursor?: Prisma.cursoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CursoCountAggregateInputType;
    _avg?: CursoAvgAggregateInputType;
    _sum?: CursoSumAggregateInputType;
    _min?: CursoMinAggregateInputType;
    _max?: CursoMaxAggregateInputType;
};
export type GetCursoAggregateType<T extends CursoAggregateArgs> = {
    [P in keyof T & keyof AggregateCurso]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCurso[P]> : Prisma.GetScalarType<T[P], AggregateCurso[P]>;
};
export type cursoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cursoWhereInput;
    orderBy?: Prisma.cursoOrderByWithAggregationInput | Prisma.cursoOrderByWithAggregationInput[];
    by: Prisma.CursoScalarFieldEnum[] | Prisma.CursoScalarFieldEnum;
    having?: Prisma.cursoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CursoCountAggregateInputType | true;
    _avg?: CursoAvgAggregateInputType;
    _sum?: CursoSumAggregateInputType;
    _min?: CursoMinAggregateInputType;
    _max?: CursoMaxAggregateInputType;
};
export type CursoGroupByOutputType = {
    id: number;
    titulo: string;
    descripcion: string | null;
    precio: runtime.Decimal;
    admin_id: number | null;
    _count: CursoCountAggregateOutputType | null;
    _avg: CursoAvgAggregateOutputType | null;
    _sum: CursoSumAggregateOutputType | null;
    _min: CursoMinAggregateOutputType | null;
    _max: CursoMaxAggregateOutputType | null;
};
export type GetCursoGroupByPayload<T extends cursoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CursoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CursoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CursoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CursoGroupByOutputType[P]>;
}>>;
export type cursoWhereInput = {
    AND?: Prisma.cursoWhereInput | Prisma.cursoWhereInput[];
    OR?: Prisma.cursoWhereInput[];
    NOT?: Prisma.cursoWhereInput | Prisma.cursoWhereInput[];
    id?: Prisma.IntFilter<"curso"> | number;
    titulo?: Prisma.StringFilter<"curso"> | string;
    descripcion?: Prisma.StringNullableFilter<"curso"> | string | null;
    precio?: Prisma.DecimalFilter<"curso"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    admin_id?: Prisma.IntNullableFilter<"curso"> | number | null;
    carrito_curso?: Prisma.Carrito_cursoListRelationFilter;
    admin?: Prisma.XOR<Prisma.AdminNullableScalarRelationFilter, Prisma.adminWhereInput> | null;
    detalle_compra?: Prisma.Detalle_compraListRelationFilter;
    modulo?: Prisma.ModuloListRelationFilter;
};
export type cursoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    carrito_curso?: Prisma.carrito_cursoOrderByRelationAggregateInput;
    admin?: Prisma.adminOrderByWithRelationInput;
    detalle_compra?: Prisma.detalle_compraOrderByRelationAggregateInput;
    modulo?: Prisma.moduloOrderByRelationAggregateInput;
};
export type cursoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.cursoWhereInput | Prisma.cursoWhereInput[];
    OR?: Prisma.cursoWhereInput[];
    NOT?: Prisma.cursoWhereInput | Prisma.cursoWhereInput[];
    titulo?: Prisma.StringFilter<"curso"> | string;
    descripcion?: Prisma.StringNullableFilter<"curso"> | string | null;
    precio?: Prisma.DecimalFilter<"curso"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    admin_id?: Prisma.IntNullableFilter<"curso"> | number | null;
    carrito_curso?: Prisma.Carrito_cursoListRelationFilter;
    admin?: Prisma.XOR<Prisma.AdminNullableScalarRelationFilter, Prisma.adminWhereInput> | null;
    detalle_compra?: Prisma.Detalle_compraListRelationFilter;
    modulo?: Prisma.ModuloListRelationFilter;
}, "id">;
export type cursoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrderInput | Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.cursoCountOrderByAggregateInput;
    _avg?: Prisma.cursoAvgOrderByAggregateInput;
    _max?: Prisma.cursoMaxOrderByAggregateInput;
    _min?: Prisma.cursoMinOrderByAggregateInput;
    _sum?: Prisma.cursoSumOrderByAggregateInput;
};
export type cursoScalarWhereWithAggregatesInput = {
    AND?: Prisma.cursoScalarWhereWithAggregatesInput | Prisma.cursoScalarWhereWithAggregatesInput[];
    OR?: Prisma.cursoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.cursoScalarWhereWithAggregatesInput | Prisma.cursoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"curso"> | number;
    titulo?: Prisma.StringWithAggregatesFilter<"curso"> | string;
    descripcion?: Prisma.StringNullableWithAggregatesFilter<"curso"> | string | null;
    precio?: Prisma.DecimalWithAggregatesFilter<"curso"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    admin_id?: Prisma.IntNullableWithAggregatesFilter<"curso"> | number | null;
};
export type cursoCreateInput = {
    titulo: string;
    descripcion?: string | null;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    carrito_curso?: Prisma.carrito_cursoCreateNestedManyWithoutCursoInput;
    admin?: Prisma.adminCreateNestedOneWithoutCursoInput;
    detalle_compra?: Prisma.detalle_compraCreateNestedManyWithoutCursoInput;
    modulo?: Prisma.moduloCreateNestedManyWithoutCursoInput;
};
export type cursoUncheckedCreateInput = {
    id?: number;
    titulo: string;
    descripcion?: string | null;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    admin_id?: number | null;
    carrito_curso?: Prisma.carrito_cursoUncheckedCreateNestedManyWithoutCursoInput;
    detalle_compra?: Prisma.detalle_compraUncheckedCreateNestedManyWithoutCursoInput;
    modulo?: Prisma.moduloUncheckedCreateNestedManyWithoutCursoInput;
};
export type cursoUpdateInput = {
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    carrito_curso?: Prisma.carrito_cursoUpdateManyWithoutCursoNestedInput;
    admin?: Prisma.adminUpdateOneWithoutCursoNestedInput;
    detalle_compra?: Prisma.detalle_compraUpdateManyWithoutCursoNestedInput;
    modulo?: Prisma.moduloUpdateManyWithoutCursoNestedInput;
};
export type cursoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    admin_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    carrito_curso?: Prisma.carrito_cursoUncheckedUpdateManyWithoutCursoNestedInput;
    detalle_compra?: Prisma.detalle_compraUncheckedUpdateManyWithoutCursoNestedInput;
    modulo?: Prisma.moduloUncheckedUpdateManyWithoutCursoNestedInput;
};
export type cursoCreateManyInput = {
    id?: number;
    titulo: string;
    descripcion?: string | null;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    admin_id?: number | null;
};
export type cursoUpdateManyMutationInput = {
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type cursoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    admin_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type CursoListRelationFilter = {
    every?: Prisma.cursoWhereInput;
    some?: Prisma.cursoWhereInput;
    none?: Prisma.cursoWhereInput;
};
export type cursoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type CursoNullableScalarRelationFilter = {
    is?: Prisma.cursoWhereInput | null;
    isNot?: Prisma.cursoWhereInput | null;
};
export type cursoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
};
export type cursoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
};
export type cursoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
};
export type cursoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    descripcion?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
};
export type cursoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    precio?: Prisma.SortOrder;
    admin_id?: Prisma.SortOrder;
};
export type cursoCreateNestedManyWithoutAdminInput = {
    create?: Prisma.XOR<Prisma.cursoCreateWithoutAdminInput, Prisma.cursoUncheckedCreateWithoutAdminInput> | Prisma.cursoCreateWithoutAdminInput[] | Prisma.cursoUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.cursoCreateOrConnectWithoutAdminInput | Prisma.cursoCreateOrConnectWithoutAdminInput[];
    createMany?: Prisma.cursoCreateManyAdminInputEnvelope;
    connect?: Prisma.cursoWhereUniqueInput | Prisma.cursoWhereUniqueInput[];
};
export type cursoUncheckedCreateNestedManyWithoutAdminInput = {
    create?: Prisma.XOR<Prisma.cursoCreateWithoutAdminInput, Prisma.cursoUncheckedCreateWithoutAdminInput> | Prisma.cursoCreateWithoutAdminInput[] | Prisma.cursoUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.cursoCreateOrConnectWithoutAdminInput | Prisma.cursoCreateOrConnectWithoutAdminInput[];
    createMany?: Prisma.cursoCreateManyAdminInputEnvelope;
    connect?: Prisma.cursoWhereUniqueInput | Prisma.cursoWhereUniqueInput[];
};
export type cursoUpdateManyWithoutAdminNestedInput = {
    create?: Prisma.XOR<Prisma.cursoCreateWithoutAdminInput, Prisma.cursoUncheckedCreateWithoutAdminInput> | Prisma.cursoCreateWithoutAdminInput[] | Prisma.cursoUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.cursoCreateOrConnectWithoutAdminInput | Prisma.cursoCreateOrConnectWithoutAdminInput[];
    upsert?: Prisma.cursoUpsertWithWhereUniqueWithoutAdminInput | Prisma.cursoUpsertWithWhereUniqueWithoutAdminInput[];
    createMany?: Prisma.cursoCreateManyAdminInputEnvelope;
    set?: Prisma.cursoWhereUniqueInput | Prisma.cursoWhereUniqueInput[];
    disconnect?: Prisma.cursoWhereUniqueInput | Prisma.cursoWhereUniqueInput[];
    delete?: Prisma.cursoWhereUniqueInput | Prisma.cursoWhereUniqueInput[];
    connect?: Prisma.cursoWhereUniqueInput | Prisma.cursoWhereUniqueInput[];
    update?: Prisma.cursoUpdateWithWhereUniqueWithoutAdminInput | Prisma.cursoUpdateWithWhereUniqueWithoutAdminInput[];
    updateMany?: Prisma.cursoUpdateManyWithWhereWithoutAdminInput | Prisma.cursoUpdateManyWithWhereWithoutAdminInput[];
    deleteMany?: Prisma.cursoScalarWhereInput | Prisma.cursoScalarWhereInput[];
};
export type cursoUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: Prisma.XOR<Prisma.cursoCreateWithoutAdminInput, Prisma.cursoUncheckedCreateWithoutAdminInput> | Prisma.cursoCreateWithoutAdminInput[] | Prisma.cursoUncheckedCreateWithoutAdminInput[];
    connectOrCreate?: Prisma.cursoCreateOrConnectWithoutAdminInput | Prisma.cursoCreateOrConnectWithoutAdminInput[];
    upsert?: Prisma.cursoUpsertWithWhereUniqueWithoutAdminInput | Prisma.cursoUpsertWithWhereUniqueWithoutAdminInput[];
    createMany?: Prisma.cursoCreateManyAdminInputEnvelope;
    set?: Prisma.cursoWhereUniqueInput | Prisma.cursoWhereUniqueInput[];
    disconnect?: Prisma.cursoWhereUniqueInput | Prisma.cursoWhereUniqueInput[];
    delete?: Prisma.cursoWhereUniqueInput | Prisma.cursoWhereUniqueInput[];
    connect?: Prisma.cursoWhereUniqueInput | Prisma.cursoWhereUniqueInput[];
    update?: Prisma.cursoUpdateWithWhereUniqueWithoutAdminInput | Prisma.cursoUpdateWithWhereUniqueWithoutAdminInput[];
    updateMany?: Prisma.cursoUpdateManyWithWhereWithoutAdminInput | Prisma.cursoUpdateManyWithWhereWithoutAdminInput[];
    deleteMany?: Prisma.cursoScalarWhereInput | Prisma.cursoScalarWhereInput[];
};
export type cursoCreateNestedOneWithoutCarrito_cursoInput = {
    create?: Prisma.XOR<Prisma.cursoCreateWithoutCarrito_cursoInput, Prisma.cursoUncheckedCreateWithoutCarrito_cursoInput>;
    connectOrCreate?: Prisma.cursoCreateOrConnectWithoutCarrito_cursoInput;
    connect?: Prisma.cursoWhereUniqueInput;
};
export type cursoUpdateOneWithoutCarrito_cursoNestedInput = {
    create?: Prisma.XOR<Prisma.cursoCreateWithoutCarrito_cursoInput, Prisma.cursoUncheckedCreateWithoutCarrito_cursoInput>;
    connectOrCreate?: Prisma.cursoCreateOrConnectWithoutCarrito_cursoInput;
    upsert?: Prisma.cursoUpsertWithoutCarrito_cursoInput;
    disconnect?: Prisma.cursoWhereInput | boolean;
    delete?: Prisma.cursoWhereInput | boolean;
    connect?: Prisma.cursoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.cursoUpdateToOneWithWhereWithoutCarrito_cursoInput, Prisma.cursoUpdateWithoutCarrito_cursoInput>, Prisma.cursoUncheckedUpdateWithoutCarrito_cursoInput>;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type cursoCreateNestedOneWithoutDetalle_compraInput = {
    create?: Prisma.XOR<Prisma.cursoCreateWithoutDetalle_compraInput, Prisma.cursoUncheckedCreateWithoutDetalle_compraInput>;
    connectOrCreate?: Prisma.cursoCreateOrConnectWithoutDetalle_compraInput;
    connect?: Prisma.cursoWhereUniqueInput;
};
export type cursoUpdateOneWithoutDetalle_compraNestedInput = {
    create?: Prisma.XOR<Prisma.cursoCreateWithoutDetalle_compraInput, Prisma.cursoUncheckedCreateWithoutDetalle_compraInput>;
    connectOrCreate?: Prisma.cursoCreateOrConnectWithoutDetalle_compraInput;
    upsert?: Prisma.cursoUpsertWithoutDetalle_compraInput;
    disconnect?: Prisma.cursoWhereInput | boolean;
    delete?: Prisma.cursoWhereInput | boolean;
    connect?: Prisma.cursoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.cursoUpdateToOneWithWhereWithoutDetalle_compraInput, Prisma.cursoUpdateWithoutDetalle_compraInput>, Prisma.cursoUncheckedUpdateWithoutDetalle_compraInput>;
};
export type cursoCreateNestedOneWithoutModuloInput = {
    create?: Prisma.XOR<Prisma.cursoCreateWithoutModuloInput, Prisma.cursoUncheckedCreateWithoutModuloInput>;
    connectOrCreate?: Prisma.cursoCreateOrConnectWithoutModuloInput;
    connect?: Prisma.cursoWhereUniqueInput;
};
export type cursoUpdateOneWithoutModuloNestedInput = {
    create?: Prisma.XOR<Prisma.cursoCreateWithoutModuloInput, Prisma.cursoUncheckedCreateWithoutModuloInput>;
    connectOrCreate?: Prisma.cursoCreateOrConnectWithoutModuloInput;
    upsert?: Prisma.cursoUpsertWithoutModuloInput;
    disconnect?: Prisma.cursoWhereInput | boolean;
    delete?: Prisma.cursoWhereInput | boolean;
    connect?: Prisma.cursoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.cursoUpdateToOneWithWhereWithoutModuloInput, Prisma.cursoUpdateWithoutModuloInput>, Prisma.cursoUncheckedUpdateWithoutModuloInput>;
};
export type cursoCreateWithoutAdminInput = {
    titulo: string;
    descripcion?: string | null;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    carrito_curso?: Prisma.carrito_cursoCreateNestedManyWithoutCursoInput;
    detalle_compra?: Prisma.detalle_compraCreateNestedManyWithoutCursoInput;
    modulo?: Prisma.moduloCreateNestedManyWithoutCursoInput;
};
export type cursoUncheckedCreateWithoutAdminInput = {
    id?: number;
    titulo: string;
    descripcion?: string | null;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    carrito_curso?: Prisma.carrito_cursoUncheckedCreateNestedManyWithoutCursoInput;
    detalle_compra?: Prisma.detalle_compraUncheckedCreateNestedManyWithoutCursoInput;
    modulo?: Prisma.moduloUncheckedCreateNestedManyWithoutCursoInput;
};
export type cursoCreateOrConnectWithoutAdminInput = {
    where: Prisma.cursoWhereUniqueInput;
    create: Prisma.XOR<Prisma.cursoCreateWithoutAdminInput, Prisma.cursoUncheckedCreateWithoutAdminInput>;
};
export type cursoCreateManyAdminInputEnvelope = {
    data: Prisma.cursoCreateManyAdminInput | Prisma.cursoCreateManyAdminInput[];
    skipDuplicates?: boolean;
};
export type cursoUpsertWithWhereUniqueWithoutAdminInput = {
    where: Prisma.cursoWhereUniqueInput;
    update: Prisma.XOR<Prisma.cursoUpdateWithoutAdminInput, Prisma.cursoUncheckedUpdateWithoutAdminInput>;
    create: Prisma.XOR<Prisma.cursoCreateWithoutAdminInput, Prisma.cursoUncheckedCreateWithoutAdminInput>;
};
export type cursoUpdateWithWhereUniqueWithoutAdminInput = {
    where: Prisma.cursoWhereUniqueInput;
    data: Prisma.XOR<Prisma.cursoUpdateWithoutAdminInput, Prisma.cursoUncheckedUpdateWithoutAdminInput>;
};
export type cursoUpdateManyWithWhereWithoutAdminInput = {
    where: Prisma.cursoScalarWhereInput;
    data: Prisma.XOR<Prisma.cursoUpdateManyMutationInput, Prisma.cursoUncheckedUpdateManyWithoutAdminInput>;
};
export type cursoScalarWhereInput = {
    AND?: Prisma.cursoScalarWhereInput | Prisma.cursoScalarWhereInput[];
    OR?: Prisma.cursoScalarWhereInput[];
    NOT?: Prisma.cursoScalarWhereInput | Prisma.cursoScalarWhereInput[];
    id?: Prisma.IntFilter<"curso"> | number;
    titulo?: Prisma.StringFilter<"curso"> | string;
    descripcion?: Prisma.StringNullableFilter<"curso"> | string | null;
    precio?: Prisma.DecimalFilter<"curso"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    admin_id?: Prisma.IntNullableFilter<"curso"> | number | null;
};
export type cursoCreateWithoutCarrito_cursoInput = {
    titulo: string;
    descripcion?: string | null;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    admin?: Prisma.adminCreateNestedOneWithoutCursoInput;
    detalle_compra?: Prisma.detalle_compraCreateNestedManyWithoutCursoInput;
    modulo?: Prisma.moduloCreateNestedManyWithoutCursoInput;
};
export type cursoUncheckedCreateWithoutCarrito_cursoInput = {
    id?: number;
    titulo: string;
    descripcion?: string | null;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    admin_id?: number | null;
    detalle_compra?: Prisma.detalle_compraUncheckedCreateNestedManyWithoutCursoInput;
    modulo?: Prisma.moduloUncheckedCreateNestedManyWithoutCursoInput;
};
export type cursoCreateOrConnectWithoutCarrito_cursoInput = {
    where: Prisma.cursoWhereUniqueInput;
    create: Prisma.XOR<Prisma.cursoCreateWithoutCarrito_cursoInput, Prisma.cursoUncheckedCreateWithoutCarrito_cursoInput>;
};
export type cursoUpsertWithoutCarrito_cursoInput = {
    update: Prisma.XOR<Prisma.cursoUpdateWithoutCarrito_cursoInput, Prisma.cursoUncheckedUpdateWithoutCarrito_cursoInput>;
    create: Prisma.XOR<Prisma.cursoCreateWithoutCarrito_cursoInput, Prisma.cursoUncheckedCreateWithoutCarrito_cursoInput>;
    where?: Prisma.cursoWhereInput;
};
export type cursoUpdateToOneWithWhereWithoutCarrito_cursoInput = {
    where?: Prisma.cursoWhereInput;
    data: Prisma.XOR<Prisma.cursoUpdateWithoutCarrito_cursoInput, Prisma.cursoUncheckedUpdateWithoutCarrito_cursoInput>;
};
export type cursoUpdateWithoutCarrito_cursoInput = {
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    admin?: Prisma.adminUpdateOneWithoutCursoNestedInput;
    detalle_compra?: Prisma.detalle_compraUpdateManyWithoutCursoNestedInput;
    modulo?: Prisma.moduloUpdateManyWithoutCursoNestedInput;
};
export type cursoUncheckedUpdateWithoutCarrito_cursoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    admin_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    detalle_compra?: Prisma.detalle_compraUncheckedUpdateManyWithoutCursoNestedInput;
    modulo?: Prisma.moduloUncheckedUpdateManyWithoutCursoNestedInput;
};
export type cursoCreateWithoutDetalle_compraInput = {
    titulo: string;
    descripcion?: string | null;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    carrito_curso?: Prisma.carrito_cursoCreateNestedManyWithoutCursoInput;
    admin?: Prisma.adminCreateNestedOneWithoutCursoInput;
    modulo?: Prisma.moduloCreateNestedManyWithoutCursoInput;
};
export type cursoUncheckedCreateWithoutDetalle_compraInput = {
    id?: number;
    titulo: string;
    descripcion?: string | null;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    admin_id?: number | null;
    carrito_curso?: Prisma.carrito_cursoUncheckedCreateNestedManyWithoutCursoInput;
    modulo?: Prisma.moduloUncheckedCreateNestedManyWithoutCursoInput;
};
export type cursoCreateOrConnectWithoutDetalle_compraInput = {
    where: Prisma.cursoWhereUniqueInput;
    create: Prisma.XOR<Prisma.cursoCreateWithoutDetalle_compraInput, Prisma.cursoUncheckedCreateWithoutDetalle_compraInput>;
};
export type cursoUpsertWithoutDetalle_compraInput = {
    update: Prisma.XOR<Prisma.cursoUpdateWithoutDetalle_compraInput, Prisma.cursoUncheckedUpdateWithoutDetalle_compraInput>;
    create: Prisma.XOR<Prisma.cursoCreateWithoutDetalle_compraInput, Prisma.cursoUncheckedCreateWithoutDetalle_compraInput>;
    where?: Prisma.cursoWhereInput;
};
export type cursoUpdateToOneWithWhereWithoutDetalle_compraInput = {
    where?: Prisma.cursoWhereInput;
    data: Prisma.XOR<Prisma.cursoUpdateWithoutDetalle_compraInput, Prisma.cursoUncheckedUpdateWithoutDetalle_compraInput>;
};
export type cursoUpdateWithoutDetalle_compraInput = {
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    carrito_curso?: Prisma.carrito_cursoUpdateManyWithoutCursoNestedInput;
    admin?: Prisma.adminUpdateOneWithoutCursoNestedInput;
    modulo?: Prisma.moduloUpdateManyWithoutCursoNestedInput;
};
export type cursoUncheckedUpdateWithoutDetalle_compraInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    admin_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    carrito_curso?: Prisma.carrito_cursoUncheckedUpdateManyWithoutCursoNestedInput;
    modulo?: Prisma.moduloUncheckedUpdateManyWithoutCursoNestedInput;
};
export type cursoCreateWithoutModuloInput = {
    titulo: string;
    descripcion?: string | null;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    carrito_curso?: Prisma.carrito_cursoCreateNestedManyWithoutCursoInput;
    admin?: Prisma.adminCreateNestedOneWithoutCursoInput;
    detalle_compra?: Prisma.detalle_compraCreateNestedManyWithoutCursoInput;
};
export type cursoUncheckedCreateWithoutModuloInput = {
    id?: number;
    titulo: string;
    descripcion?: string | null;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
    admin_id?: number | null;
    carrito_curso?: Prisma.carrito_cursoUncheckedCreateNestedManyWithoutCursoInput;
    detalle_compra?: Prisma.detalle_compraUncheckedCreateNestedManyWithoutCursoInput;
};
export type cursoCreateOrConnectWithoutModuloInput = {
    where: Prisma.cursoWhereUniqueInput;
    create: Prisma.XOR<Prisma.cursoCreateWithoutModuloInput, Prisma.cursoUncheckedCreateWithoutModuloInput>;
};
export type cursoUpsertWithoutModuloInput = {
    update: Prisma.XOR<Prisma.cursoUpdateWithoutModuloInput, Prisma.cursoUncheckedUpdateWithoutModuloInput>;
    create: Prisma.XOR<Prisma.cursoCreateWithoutModuloInput, Prisma.cursoUncheckedCreateWithoutModuloInput>;
    where?: Prisma.cursoWhereInput;
};
export type cursoUpdateToOneWithWhereWithoutModuloInput = {
    where?: Prisma.cursoWhereInput;
    data: Prisma.XOR<Prisma.cursoUpdateWithoutModuloInput, Prisma.cursoUncheckedUpdateWithoutModuloInput>;
};
export type cursoUpdateWithoutModuloInput = {
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    carrito_curso?: Prisma.carrito_cursoUpdateManyWithoutCursoNestedInput;
    admin?: Prisma.adminUpdateOneWithoutCursoNestedInput;
    detalle_compra?: Prisma.detalle_compraUpdateManyWithoutCursoNestedInput;
};
export type cursoUncheckedUpdateWithoutModuloInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    admin_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    carrito_curso?: Prisma.carrito_cursoUncheckedUpdateManyWithoutCursoNestedInput;
    detalle_compra?: Prisma.detalle_compraUncheckedUpdateManyWithoutCursoNestedInput;
};
export type cursoCreateManyAdminInput = {
    id?: number;
    titulo: string;
    descripcion?: string | null;
    precio: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type cursoUpdateWithoutAdminInput = {
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    carrito_curso?: Prisma.carrito_cursoUpdateManyWithoutCursoNestedInput;
    detalle_compra?: Prisma.detalle_compraUpdateManyWithoutCursoNestedInput;
    modulo?: Prisma.moduloUpdateManyWithoutCursoNestedInput;
};
export type cursoUncheckedUpdateWithoutAdminInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    carrito_curso?: Prisma.carrito_cursoUncheckedUpdateManyWithoutCursoNestedInput;
    detalle_compra?: Prisma.detalle_compraUncheckedUpdateManyWithoutCursoNestedInput;
    modulo?: Prisma.moduloUncheckedUpdateManyWithoutCursoNestedInput;
};
export type cursoUncheckedUpdateManyWithoutAdminInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.StringFieldUpdateOperationsInput | string;
    descripcion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    precio?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type CursoCountOutputType = {
    carrito_curso: number;
    detalle_compra: number;
    modulo: number;
};
export type CursoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    carrito_curso?: boolean | CursoCountOutputTypeCountCarrito_cursoArgs;
    detalle_compra?: boolean | CursoCountOutputTypeCountDetalle_compraArgs;
    modulo?: boolean | CursoCountOutputTypeCountModuloArgs;
};
export type CursoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CursoCountOutputTypeSelect<ExtArgs> | null;
};
export type CursoCountOutputTypeCountCarrito_cursoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.carrito_cursoWhereInput;
};
export type CursoCountOutputTypeCountDetalle_compraArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.detalle_compraWhereInput;
};
export type CursoCountOutputTypeCountModuloArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.moduloWhereInput;
};
export type cursoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    descripcion?: boolean;
    precio?: boolean;
    admin_id?: boolean;
    carrito_curso?: boolean | Prisma.curso$carrito_cursoArgs<ExtArgs>;
    admin?: boolean | Prisma.curso$adminArgs<ExtArgs>;
    detalle_compra?: boolean | Prisma.curso$detalle_compraArgs<ExtArgs>;
    modulo?: boolean | Prisma.curso$moduloArgs<ExtArgs>;
    _count?: boolean | Prisma.CursoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["curso"]>;
export type cursoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    descripcion?: boolean;
    precio?: boolean;
    admin_id?: boolean;
    admin?: boolean | Prisma.curso$adminArgs<ExtArgs>;
}, ExtArgs["result"]["curso"]>;
export type cursoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    descripcion?: boolean;
    precio?: boolean;
    admin_id?: boolean;
    admin?: boolean | Prisma.curso$adminArgs<ExtArgs>;
}, ExtArgs["result"]["curso"]>;
export type cursoSelectScalar = {
    id?: boolean;
    titulo?: boolean;
    descripcion?: boolean;
    precio?: boolean;
    admin_id?: boolean;
};
export type cursoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "titulo" | "descripcion" | "precio" | "admin_id", ExtArgs["result"]["curso"]>;
export type cursoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    carrito_curso?: boolean | Prisma.curso$carrito_cursoArgs<ExtArgs>;
    admin?: boolean | Prisma.curso$adminArgs<ExtArgs>;
    detalle_compra?: boolean | Prisma.curso$detalle_compraArgs<ExtArgs>;
    modulo?: boolean | Prisma.curso$moduloArgs<ExtArgs>;
    _count?: boolean | Prisma.CursoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type cursoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admin?: boolean | Prisma.curso$adminArgs<ExtArgs>;
};
export type cursoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    admin?: boolean | Prisma.curso$adminArgs<ExtArgs>;
};
export type $cursoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "curso";
    objects: {
        carrito_curso: Prisma.$carrito_cursoPayload<ExtArgs>[];
        admin: Prisma.$adminPayload<ExtArgs> | null;
        detalle_compra: Prisma.$detalle_compraPayload<ExtArgs>[];
        modulo: Prisma.$moduloPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        titulo: string;
        descripcion: string | null;
        precio: runtime.Decimal;
        admin_id: number | null;
    }, ExtArgs["result"]["curso"]>;
    composites: {};
};
export type cursoGetPayload<S extends boolean | null | undefined | cursoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$cursoPayload, S>;
export type cursoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<cursoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CursoCountAggregateInputType | true;
};
export interface cursoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['curso'];
        meta: {
            name: 'curso';
        };
    };
    findUnique<T extends cursoFindUniqueArgs>(args: Prisma.SelectSubset<T, cursoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__cursoClient<runtime.Types.Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends cursoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, cursoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__cursoClient<runtime.Types.Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends cursoFindFirstArgs>(args?: Prisma.SelectSubset<T, cursoFindFirstArgs<ExtArgs>>): Prisma.Prisma__cursoClient<runtime.Types.Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends cursoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, cursoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__cursoClient<runtime.Types.Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends cursoFindManyArgs>(args?: Prisma.SelectSubset<T, cursoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends cursoCreateArgs>(args: Prisma.SelectSubset<T, cursoCreateArgs<ExtArgs>>): Prisma.Prisma__cursoClient<runtime.Types.Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends cursoCreateManyArgs>(args?: Prisma.SelectSubset<T, cursoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends cursoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, cursoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends cursoDeleteArgs>(args: Prisma.SelectSubset<T, cursoDeleteArgs<ExtArgs>>): Prisma.Prisma__cursoClient<runtime.Types.Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends cursoUpdateArgs>(args: Prisma.SelectSubset<T, cursoUpdateArgs<ExtArgs>>): Prisma.Prisma__cursoClient<runtime.Types.Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends cursoDeleteManyArgs>(args?: Prisma.SelectSubset<T, cursoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends cursoUpdateManyArgs>(args: Prisma.SelectSubset<T, cursoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends cursoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, cursoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends cursoUpsertArgs>(args: Prisma.SelectSubset<T, cursoUpsertArgs<ExtArgs>>): Prisma.Prisma__cursoClient<runtime.Types.Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends cursoCountArgs>(args?: Prisma.Subset<T, cursoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CursoCountAggregateOutputType> : number>;
    aggregate<T extends CursoAggregateArgs>(args: Prisma.Subset<T, CursoAggregateArgs>): Prisma.PrismaPromise<GetCursoAggregateType<T>>;
    groupBy<T extends cursoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: cursoGroupByArgs['orderBy'];
    } : {
        orderBy?: cursoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, cursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: cursoFieldRefs;
}
export interface Prisma__cursoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    carrito_curso<T extends Prisma.curso$carrito_cursoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.curso$carrito_cursoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$carrito_cursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    admin<T extends Prisma.curso$adminArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.curso$adminArgs<ExtArgs>>): Prisma.Prisma__adminClient<runtime.Types.Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    detalle_compra<T extends Prisma.curso$detalle_compraArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.curso$detalle_compraArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$detalle_compraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    modulo<T extends Prisma.curso$moduloArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.curso$moduloArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$moduloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface cursoFieldRefs {
    readonly id: Prisma.FieldRef<"curso", 'Int'>;
    readonly titulo: Prisma.FieldRef<"curso", 'String'>;
    readonly descripcion: Prisma.FieldRef<"curso", 'String'>;
    readonly precio: Prisma.FieldRef<"curso", 'Decimal'>;
    readonly admin_id: Prisma.FieldRef<"curso", 'Int'>;
}
export type cursoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cursoSelect<ExtArgs> | null;
    omit?: Prisma.cursoOmit<ExtArgs> | null;
    include?: Prisma.cursoInclude<ExtArgs> | null;
    where: Prisma.cursoWhereUniqueInput;
};
export type cursoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cursoSelect<ExtArgs> | null;
    omit?: Prisma.cursoOmit<ExtArgs> | null;
    include?: Prisma.cursoInclude<ExtArgs> | null;
    where: Prisma.cursoWhereUniqueInput;
};
export type cursoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cursoSelect<ExtArgs> | null;
    omit?: Prisma.cursoOmit<ExtArgs> | null;
    include?: Prisma.cursoInclude<ExtArgs> | null;
    where?: Prisma.cursoWhereInput;
    orderBy?: Prisma.cursoOrderByWithRelationInput | Prisma.cursoOrderByWithRelationInput[];
    cursor?: Prisma.cursoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CursoScalarFieldEnum | Prisma.CursoScalarFieldEnum[];
};
export type cursoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cursoSelect<ExtArgs> | null;
    omit?: Prisma.cursoOmit<ExtArgs> | null;
    include?: Prisma.cursoInclude<ExtArgs> | null;
    where?: Prisma.cursoWhereInput;
    orderBy?: Prisma.cursoOrderByWithRelationInput | Prisma.cursoOrderByWithRelationInput[];
    cursor?: Prisma.cursoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CursoScalarFieldEnum | Prisma.CursoScalarFieldEnum[];
};
export type cursoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cursoSelect<ExtArgs> | null;
    omit?: Prisma.cursoOmit<ExtArgs> | null;
    include?: Prisma.cursoInclude<ExtArgs> | null;
    where?: Prisma.cursoWhereInput;
    orderBy?: Prisma.cursoOrderByWithRelationInput | Prisma.cursoOrderByWithRelationInput[];
    cursor?: Prisma.cursoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CursoScalarFieldEnum | Prisma.CursoScalarFieldEnum[];
};
export type cursoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cursoSelect<ExtArgs> | null;
    omit?: Prisma.cursoOmit<ExtArgs> | null;
    include?: Prisma.cursoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.cursoCreateInput, Prisma.cursoUncheckedCreateInput>;
};
export type cursoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.cursoCreateManyInput | Prisma.cursoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type cursoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cursoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.cursoOmit<ExtArgs> | null;
    data: Prisma.cursoCreateManyInput | Prisma.cursoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.cursoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type cursoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cursoSelect<ExtArgs> | null;
    omit?: Prisma.cursoOmit<ExtArgs> | null;
    include?: Prisma.cursoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.cursoUpdateInput, Prisma.cursoUncheckedUpdateInput>;
    where: Prisma.cursoWhereUniqueInput;
};
export type cursoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.cursoUpdateManyMutationInput, Prisma.cursoUncheckedUpdateManyInput>;
    where?: Prisma.cursoWhereInput;
    limit?: number;
};
export type cursoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cursoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.cursoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.cursoUpdateManyMutationInput, Prisma.cursoUncheckedUpdateManyInput>;
    where?: Prisma.cursoWhereInput;
    limit?: number;
    include?: Prisma.cursoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type cursoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cursoSelect<ExtArgs> | null;
    omit?: Prisma.cursoOmit<ExtArgs> | null;
    include?: Prisma.cursoInclude<ExtArgs> | null;
    where: Prisma.cursoWhereUniqueInput;
    create: Prisma.XOR<Prisma.cursoCreateInput, Prisma.cursoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.cursoUpdateInput, Prisma.cursoUncheckedUpdateInput>;
};
export type cursoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cursoSelect<ExtArgs> | null;
    omit?: Prisma.cursoOmit<ExtArgs> | null;
    include?: Prisma.cursoInclude<ExtArgs> | null;
    where: Prisma.cursoWhereUniqueInput;
};
export type cursoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cursoWhereInput;
    limit?: number;
};
export type curso$carrito_cursoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carrito_cursoSelect<ExtArgs> | null;
    omit?: Prisma.carrito_cursoOmit<ExtArgs> | null;
    include?: Prisma.carrito_cursoInclude<ExtArgs> | null;
    where?: Prisma.carrito_cursoWhereInput;
    orderBy?: Prisma.carrito_cursoOrderByWithRelationInput | Prisma.carrito_cursoOrderByWithRelationInput[];
    cursor?: Prisma.carrito_cursoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Carrito_cursoScalarFieldEnum | Prisma.Carrito_cursoScalarFieldEnum[];
};
export type curso$adminArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adminSelect<ExtArgs> | null;
    omit?: Prisma.adminOmit<ExtArgs> | null;
    include?: Prisma.adminInclude<ExtArgs> | null;
    where?: Prisma.adminWhereInput;
};
export type curso$detalle_compraArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.detalle_compraSelect<ExtArgs> | null;
    omit?: Prisma.detalle_compraOmit<ExtArgs> | null;
    include?: Prisma.detalle_compraInclude<ExtArgs> | null;
    where?: Prisma.detalle_compraWhereInput;
    orderBy?: Prisma.detalle_compraOrderByWithRelationInput | Prisma.detalle_compraOrderByWithRelationInput[];
    cursor?: Prisma.detalle_compraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Detalle_compraScalarFieldEnum | Prisma.Detalle_compraScalarFieldEnum[];
};
export type curso$moduloArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.moduloSelect<ExtArgs> | null;
    omit?: Prisma.moduloOmit<ExtArgs> | null;
    include?: Prisma.moduloInclude<ExtArgs> | null;
    where?: Prisma.moduloWhereInput;
    orderBy?: Prisma.moduloOrderByWithRelationInput | Prisma.moduloOrderByWithRelationInput[];
    cursor?: Prisma.moduloWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ModuloScalarFieldEnum | Prisma.ModuloScalarFieldEnum[];
};
export type cursoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cursoSelect<ExtArgs> | null;
    omit?: Prisma.cursoOmit<ExtArgs> | null;
    include?: Prisma.cursoInclude<ExtArgs> | null;
};
