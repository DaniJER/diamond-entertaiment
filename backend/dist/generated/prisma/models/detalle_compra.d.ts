import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type detalle_compraModel = runtime.Types.Result.DefaultSelection<Prisma.$detalle_compraPayload>;
export type AggregateDetalle_compra = {
    _count: Detalle_compraCountAggregateOutputType | null;
    _avg: Detalle_compraAvgAggregateOutputType | null;
    _sum: Detalle_compraSumAggregateOutputType | null;
    _min: Detalle_compraMinAggregateOutputType | null;
    _max: Detalle_compraMaxAggregateOutputType | null;
};
export type Detalle_compraAvgAggregateOutputType = {
    id: number | null;
    factura_id: number | null;
    curso_id: number | null;
};
export type Detalle_compraSumAggregateOutputType = {
    id: number | null;
    factura_id: number | null;
    curso_id: number | null;
};
export type Detalle_compraMinAggregateOutputType = {
    id: number | null;
    factura_id: number | null;
    curso_id: number | null;
};
export type Detalle_compraMaxAggregateOutputType = {
    id: number | null;
    factura_id: number | null;
    curso_id: number | null;
};
export type Detalle_compraCountAggregateOutputType = {
    id: number;
    factura_id: number;
    curso_id: number;
    _all: number;
};
export type Detalle_compraAvgAggregateInputType = {
    id?: true;
    factura_id?: true;
    curso_id?: true;
};
export type Detalle_compraSumAggregateInputType = {
    id?: true;
    factura_id?: true;
    curso_id?: true;
};
export type Detalle_compraMinAggregateInputType = {
    id?: true;
    factura_id?: true;
    curso_id?: true;
};
export type Detalle_compraMaxAggregateInputType = {
    id?: true;
    factura_id?: true;
    curso_id?: true;
};
export type Detalle_compraCountAggregateInputType = {
    id?: true;
    factura_id?: true;
    curso_id?: true;
    _all?: true;
};
export type Detalle_compraAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.detalle_compraWhereInput;
    orderBy?: Prisma.detalle_compraOrderByWithRelationInput | Prisma.detalle_compraOrderByWithRelationInput[];
    cursor?: Prisma.detalle_compraWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Detalle_compraCountAggregateInputType;
    _avg?: Detalle_compraAvgAggregateInputType;
    _sum?: Detalle_compraSumAggregateInputType;
    _min?: Detalle_compraMinAggregateInputType;
    _max?: Detalle_compraMaxAggregateInputType;
};
export type GetDetalle_compraAggregateType<T extends Detalle_compraAggregateArgs> = {
    [P in keyof T & keyof AggregateDetalle_compra]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDetalle_compra[P]> : Prisma.GetScalarType<T[P], AggregateDetalle_compra[P]>;
};
export type detalle_compraGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.detalle_compraWhereInput;
    orderBy?: Prisma.detalle_compraOrderByWithAggregationInput | Prisma.detalle_compraOrderByWithAggregationInput[];
    by: Prisma.Detalle_compraScalarFieldEnum[] | Prisma.Detalle_compraScalarFieldEnum;
    having?: Prisma.detalle_compraScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Detalle_compraCountAggregateInputType | true;
    _avg?: Detalle_compraAvgAggregateInputType;
    _sum?: Detalle_compraSumAggregateInputType;
    _min?: Detalle_compraMinAggregateInputType;
    _max?: Detalle_compraMaxAggregateInputType;
};
export type Detalle_compraGroupByOutputType = {
    id: number;
    factura_id: number | null;
    curso_id: number | null;
    _count: Detalle_compraCountAggregateOutputType | null;
    _avg: Detalle_compraAvgAggregateOutputType | null;
    _sum: Detalle_compraSumAggregateOutputType | null;
    _min: Detalle_compraMinAggregateOutputType | null;
    _max: Detalle_compraMaxAggregateOutputType | null;
};
export type GetDetalle_compraGroupByPayload<T extends detalle_compraGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Detalle_compraGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Detalle_compraGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Detalle_compraGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Detalle_compraGroupByOutputType[P]>;
}>>;
export type detalle_compraWhereInput = {
    AND?: Prisma.detalle_compraWhereInput | Prisma.detalle_compraWhereInput[];
    OR?: Prisma.detalle_compraWhereInput[];
    NOT?: Prisma.detalle_compraWhereInput | Prisma.detalle_compraWhereInput[];
    id?: Prisma.IntFilter<"detalle_compra"> | number;
    factura_id?: Prisma.IntNullableFilter<"detalle_compra"> | number | null;
    curso_id?: Prisma.IntNullableFilter<"detalle_compra"> | number | null;
    curso?: Prisma.XOR<Prisma.CursoNullableScalarRelationFilter, Prisma.cursoWhereInput> | null;
    factura_compra?: Prisma.XOR<Prisma.Factura_compraNullableScalarRelationFilter, Prisma.factura_compraWhereInput> | null;
};
export type detalle_compraOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    factura_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    curso_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    curso?: Prisma.cursoOrderByWithRelationInput;
    factura_compra?: Prisma.factura_compraOrderByWithRelationInput;
};
export type detalle_compraWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.detalle_compraWhereInput | Prisma.detalle_compraWhereInput[];
    OR?: Prisma.detalle_compraWhereInput[];
    NOT?: Prisma.detalle_compraWhereInput | Prisma.detalle_compraWhereInput[];
    factura_id?: Prisma.IntNullableFilter<"detalle_compra"> | number | null;
    curso_id?: Prisma.IntNullableFilter<"detalle_compra"> | number | null;
    curso?: Prisma.XOR<Prisma.CursoNullableScalarRelationFilter, Prisma.cursoWhereInput> | null;
    factura_compra?: Prisma.XOR<Prisma.Factura_compraNullableScalarRelationFilter, Prisma.factura_compraWhereInput> | null;
}, "id">;
export type detalle_compraOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    factura_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    curso_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.detalle_compraCountOrderByAggregateInput;
    _avg?: Prisma.detalle_compraAvgOrderByAggregateInput;
    _max?: Prisma.detalle_compraMaxOrderByAggregateInput;
    _min?: Prisma.detalle_compraMinOrderByAggregateInput;
    _sum?: Prisma.detalle_compraSumOrderByAggregateInput;
};
export type detalle_compraScalarWhereWithAggregatesInput = {
    AND?: Prisma.detalle_compraScalarWhereWithAggregatesInput | Prisma.detalle_compraScalarWhereWithAggregatesInput[];
    OR?: Prisma.detalle_compraScalarWhereWithAggregatesInput[];
    NOT?: Prisma.detalle_compraScalarWhereWithAggregatesInput | Prisma.detalle_compraScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"detalle_compra"> | number;
    factura_id?: Prisma.IntNullableWithAggregatesFilter<"detalle_compra"> | number | null;
    curso_id?: Prisma.IntNullableWithAggregatesFilter<"detalle_compra"> | number | null;
};
export type detalle_compraCreateInput = {
    curso?: Prisma.cursoCreateNestedOneWithoutDetalle_compraInput;
    factura_compra?: Prisma.factura_compraCreateNestedOneWithoutDetalle_compraInput;
};
export type detalle_compraUncheckedCreateInput = {
    id?: number;
    factura_id?: number | null;
    curso_id?: number | null;
};
export type detalle_compraUpdateInput = {
    curso?: Prisma.cursoUpdateOneWithoutDetalle_compraNestedInput;
    factura_compra?: Prisma.factura_compraUpdateOneWithoutDetalle_compraNestedInput;
};
export type detalle_compraUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    factura_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    curso_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type detalle_compraCreateManyInput = {
    id?: number;
    factura_id?: number | null;
    curso_id?: number | null;
};
export type detalle_compraUpdateManyMutationInput = {};
export type detalle_compraUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    factura_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    curso_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type Detalle_compraListRelationFilter = {
    every?: Prisma.detalle_compraWhereInput;
    some?: Prisma.detalle_compraWhereInput;
    none?: Prisma.detalle_compraWhereInput;
};
export type detalle_compraOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type detalle_compraCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    factura_id?: Prisma.SortOrder;
    curso_id?: Prisma.SortOrder;
};
export type detalle_compraAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    factura_id?: Prisma.SortOrder;
    curso_id?: Prisma.SortOrder;
};
export type detalle_compraMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    factura_id?: Prisma.SortOrder;
    curso_id?: Prisma.SortOrder;
};
export type detalle_compraMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    factura_id?: Prisma.SortOrder;
    curso_id?: Prisma.SortOrder;
};
export type detalle_compraSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    factura_id?: Prisma.SortOrder;
    curso_id?: Prisma.SortOrder;
};
export type detalle_compraCreateNestedManyWithoutCursoInput = {
    create?: Prisma.XOR<Prisma.detalle_compraCreateWithoutCursoInput, Prisma.detalle_compraUncheckedCreateWithoutCursoInput> | Prisma.detalle_compraCreateWithoutCursoInput[] | Prisma.detalle_compraUncheckedCreateWithoutCursoInput[];
    connectOrCreate?: Prisma.detalle_compraCreateOrConnectWithoutCursoInput | Prisma.detalle_compraCreateOrConnectWithoutCursoInput[];
    createMany?: Prisma.detalle_compraCreateManyCursoInputEnvelope;
    connect?: Prisma.detalle_compraWhereUniqueInput | Prisma.detalle_compraWhereUniqueInput[];
};
export type detalle_compraUncheckedCreateNestedManyWithoutCursoInput = {
    create?: Prisma.XOR<Prisma.detalle_compraCreateWithoutCursoInput, Prisma.detalle_compraUncheckedCreateWithoutCursoInput> | Prisma.detalle_compraCreateWithoutCursoInput[] | Prisma.detalle_compraUncheckedCreateWithoutCursoInput[];
    connectOrCreate?: Prisma.detalle_compraCreateOrConnectWithoutCursoInput | Prisma.detalle_compraCreateOrConnectWithoutCursoInput[];
    createMany?: Prisma.detalle_compraCreateManyCursoInputEnvelope;
    connect?: Prisma.detalle_compraWhereUniqueInput | Prisma.detalle_compraWhereUniqueInput[];
};
export type detalle_compraUpdateManyWithoutCursoNestedInput = {
    create?: Prisma.XOR<Prisma.detalle_compraCreateWithoutCursoInput, Prisma.detalle_compraUncheckedCreateWithoutCursoInput> | Prisma.detalle_compraCreateWithoutCursoInput[] | Prisma.detalle_compraUncheckedCreateWithoutCursoInput[];
    connectOrCreate?: Prisma.detalle_compraCreateOrConnectWithoutCursoInput | Prisma.detalle_compraCreateOrConnectWithoutCursoInput[];
    upsert?: Prisma.detalle_compraUpsertWithWhereUniqueWithoutCursoInput | Prisma.detalle_compraUpsertWithWhereUniqueWithoutCursoInput[];
    createMany?: Prisma.detalle_compraCreateManyCursoInputEnvelope;
    set?: Prisma.detalle_compraWhereUniqueInput | Prisma.detalle_compraWhereUniqueInput[];
    disconnect?: Prisma.detalle_compraWhereUniqueInput | Prisma.detalle_compraWhereUniqueInput[];
    delete?: Prisma.detalle_compraWhereUniqueInput | Prisma.detalle_compraWhereUniqueInput[];
    connect?: Prisma.detalle_compraWhereUniqueInput | Prisma.detalle_compraWhereUniqueInput[];
    update?: Prisma.detalle_compraUpdateWithWhereUniqueWithoutCursoInput | Prisma.detalle_compraUpdateWithWhereUniqueWithoutCursoInput[];
    updateMany?: Prisma.detalle_compraUpdateManyWithWhereWithoutCursoInput | Prisma.detalle_compraUpdateManyWithWhereWithoutCursoInput[];
    deleteMany?: Prisma.detalle_compraScalarWhereInput | Prisma.detalle_compraScalarWhereInput[];
};
export type detalle_compraUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: Prisma.XOR<Prisma.detalle_compraCreateWithoutCursoInput, Prisma.detalle_compraUncheckedCreateWithoutCursoInput> | Prisma.detalle_compraCreateWithoutCursoInput[] | Prisma.detalle_compraUncheckedCreateWithoutCursoInput[];
    connectOrCreate?: Prisma.detalle_compraCreateOrConnectWithoutCursoInput | Prisma.detalle_compraCreateOrConnectWithoutCursoInput[];
    upsert?: Prisma.detalle_compraUpsertWithWhereUniqueWithoutCursoInput | Prisma.detalle_compraUpsertWithWhereUniqueWithoutCursoInput[];
    createMany?: Prisma.detalle_compraCreateManyCursoInputEnvelope;
    set?: Prisma.detalle_compraWhereUniqueInput | Prisma.detalle_compraWhereUniqueInput[];
    disconnect?: Prisma.detalle_compraWhereUniqueInput | Prisma.detalle_compraWhereUniqueInput[];
    delete?: Prisma.detalle_compraWhereUniqueInput | Prisma.detalle_compraWhereUniqueInput[];
    connect?: Prisma.detalle_compraWhereUniqueInput | Prisma.detalle_compraWhereUniqueInput[];
    update?: Prisma.detalle_compraUpdateWithWhereUniqueWithoutCursoInput | Prisma.detalle_compraUpdateWithWhereUniqueWithoutCursoInput[];
    updateMany?: Prisma.detalle_compraUpdateManyWithWhereWithoutCursoInput | Prisma.detalle_compraUpdateManyWithWhereWithoutCursoInput[];
    deleteMany?: Prisma.detalle_compraScalarWhereInput | Prisma.detalle_compraScalarWhereInput[];
};
export type detalle_compraCreateNestedManyWithoutFactura_compraInput = {
    create?: Prisma.XOR<Prisma.detalle_compraCreateWithoutFactura_compraInput, Prisma.detalle_compraUncheckedCreateWithoutFactura_compraInput> | Prisma.detalle_compraCreateWithoutFactura_compraInput[] | Prisma.detalle_compraUncheckedCreateWithoutFactura_compraInput[];
    connectOrCreate?: Prisma.detalle_compraCreateOrConnectWithoutFactura_compraInput | Prisma.detalle_compraCreateOrConnectWithoutFactura_compraInput[];
    createMany?: Prisma.detalle_compraCreateManyFactura_compraInputEnvelope;
    connect?: Prisma.detalle_compraWhereUniqueInput | Prisma.detalle_compraWhereUniqueInput[];
};
export type detalle_compraUncheckedCreateNestedManyWithoutFactura_compraInput = {
    create?: Prisma.XOR<Prisma.detalle_compraCreateWithoutFactura_compraInput, Prisma.detalle_compraUncheckedCreateWithoutFactura_compraInput> | Prisma.detalle_compraCreateWithoutFactura_compraInput[] | Prisma.detalle_compraUncheckedCreateWithoutFactura_compraInput[];
    connectOrCreate?: Prisma.detalle_compraCreateOrConnectWithoutFactura_compraInput | Prisma.detalle_compraCreateOrConnectWithoutFactura_compraInput[];
    createMany?: Prisma.detalle_compraCreateManyFactura_compraInputEnvelope;
    connect?: Prisma.detalle_compraWhereUniqueInput | Prisma.detalle_compraWhereUniqueInput[];
};
export type detalle_compraUpdateManyWithoutFactura_compraNestedInput = {
    create?: Prisma.XOR<Prisma.detalle_compraCreateWithoutFactura_compraInput, Prisma.detalle_compraUncheckedCreateWithoutFactura_compraInput> | Prisma.detalle_compraCreateWithoutFactura_compraInput[] | Prisma.detalle_compraUncheckedCreateWithoutFactura_compraInput[];
    connectOrCreate?: Prisma.detalle_compraCreateOrConnectWithoutFactura_compraInput | Prisma.detalle_compraCreateOrConnectWithoutFactura_compraInput[];
    upsert?: Prisma.detalle_compraUpsertWithWhereUniqueWithoutFactura_compraInput | Prisma.detalle_compraUpsertWithWhereUniqueWithoutFactura_compraInput[];
    createMany?: Prisma.detalle_compraCreateManyFactura_compraInputEnvelope;
    set?: Prisma.detalle_compraWhereUniqueInput | Prisma.detalle_compraWhereUniqueInput[];
    disconnect?: Prisma.detalle_compraWhereUniqueInput | Prisma.detalle_compraWhereUniqueInput[];
    delete?: Prisma.detalle_compraWhereUniqueInput | Prisma.detalle_compraWhereUniqueInput[];
    connect?: Prisma.detalle_compraWhereUniqueInput | Prisma.detalle_compraWhereUniqueInput[];
    update?: Prisma.detalle_compraUpdateWithWhereUniqueWithoutFactura_compraInput | Prisma.detalle_compraUpdateWithWhereUniqueWithoutFactura_compraInput[];
    updateMany?: Prisma.detalle_compraUpdateManyWithWhereWithoutFactura_compraInput | Prisma.detalle_compraUpdateManyWithWhereWithoutFactura_compraInput[];
    deleteMany?: Prisma.detalle_compraScalarWhereInput | Prisma.detalle_compraScalarWhereInput[];
};
export type detalle_compraUncheckedUpdateManyWithoutFactura_compraNestedInput = {
    create?: Prisma.XOR<Prisma.detalle_compraCreateWithoutFactura_compraInput, Prisma.detalle_compraUncheckedCreateWithoutFactura_compraInput> | Prisma.detalle_compraCreateWithoutFactura_compraInput[] | Prisma.detalle_compraUncheckedCreateWithoutFactura_compraInput[];
    connectOrCreate?: Prisma.detalle_compraCreateOrConnectWithoutFactura_compraInput | Prisma.detalle_compraCreateOrConnectWithoutFactura_compraInput[];
    upsert?: Prisma.detalle_compraUpsertWithWhereUniqueWithoutFactura_compraInput | Prisma.detalle_compraUpsertWithWhereUniqueWithoutFactura_compraInput[];
    createMany?: Prisma.detalle_compraCreateManyFactura_compraInputEnvelope;
    set?: Prisma.detalle_compraWhereUniqueInput | Prisma.detalle_compraWhereUniqueInput[];
    disconnect?: Prisma.detalle_compraWhereUniqueInput | Prisma.detalle_compraWhereUniqueInput[];
    delete?: Prisma.detalle_compraWhereUniqueInput | Prisma.detalle_compraWhereUniqueInput[];
    connect?: Prisma.detalle_compraWhereUniqueInput | Prisma.detalle_compraWhereUniqueInput[];
    update?: Prisma.detalle_compraUpdateWithWhereUniqueWithoutFactura_compraInput | Prisma.detalle_compraUpdateWithWhereUniqueWithoutFactura_compraInput[];
    updateMany?: Prisma.detalle_compraUpdateManyWithWhereWithoutFactura_compraInput | Prisma.detalle_compraUpdateManyWithWhereWithoutFactura_compraInput[];
    deleteMany?: Prisma.detalle_compraScalarWhereInput | Prisma.detalle_compraScalarWhereInput[];
};
export type detalle_compraCreateWithoutCursoInput = {
    factura_compra?: Prisma.factura_compraCreateNestedOneWithoutDetalle_compraInput;
};
export type detalle_compraUncheckedCreateWithoutCursoInput = {
    id?: number;
    factura_id?: number | null;
};
export type detalle_compraCreateOrConnectWithoutCursoInput = {
    where: Prisma.detalle_compraWhereUniqueInput;
    create: Prisma.XOR<Prisma.detalle_compraCreateWithoutCursoInput, Prisma.detalle_compraUncheckedCreateWithoutCursoInput>;
};
export type detalle_compraCreateManyCursoInputEnvelope = {
    data: Prisma.detalle_compraCreateManyCursoInput | Prisma.detalle_compraCreateManyCursoInput[];
    skipDuplicates?: boolean;
};
export type detalle_compraUpsertWithWhereUniqueWithoutCursoInput = {
    where: Prisma.detalle_compraWhereUniqueInput;
    update: Prisma.XOR<Prisma.detalle_compraUpdateWithoutCursoInput, Prisma.detalle_compraUncheckedUpdateWithoutCursoInput>;
    create: Prisma.XOR<Prisma.detalle_compraCreateWithoutCursoInput, Prisma.detalle_compraUncheckedCreateWithoutCursoInput>;
};
export type detalle_compraUpdateWithWhereUniqueWithoutCursoInput = {
    where: Prisma.detalle_compraWhereUniqueInput;
    data: Prisma.XOR<Prisma.detalle_compraUpdateWithoutCursoInput, Prisma.detalle_compraUncheckedUpdateWithoutCursoInput>;
};
export type detalle_compraUpdateManyWithWhereWithoutCursoInput = {
    where: Prisma.detalle_compraScalarWhereInput;
    data: Prisma.XOR<Prisma.detalle_compraUpdateManyMutationInput, Prisma.detalle_compraUncheckedUpdateManyWithoutCursoInput>;
};
export type detalle_compraScalarWhereInput = {
    AND?: Prisma.detalle_compraScalarWhereInput | Prisma.detalle_compraScalarWhereInput[];
    OR?: Prisma.detalle_compraScalarWhereInput[];
    NOT?: Prisma.detalle_compraScalarWhereInput | Prisma.detalle_compraScalarWhereInput[];
    id?: Prisma.IntFilter<"detalle_compra"> | number;
    factura_id?: Prisma.IntNullableFilter<"detalle_compra"> | number | null;
    curso_id?: Prisma.IntNullableFilter<"detalle_compra"> | number | null;
};
export type detalle_compraCreateWithoutFactura_compraInput = {
    curso?: Prisma.cursoCreateNestedOneWithoutDetalle_compraInput;
};
export type detalle_compraUncheckedCreateWithoutFactura_compraInput = {
    id?: number;
    curso_id?: number | null;
};
export type detalle_compraCreateOrConnectWithoutFactura_compraInput = {
    where: Prisma.detalle_compraWhereUniqueInput;
    create: Prisma.XOR<Prisma.detalle_compraCreateWithoutFactura_compraInput, Prisma.detalle_compraUncheckedCreateWithoutFactura_compraInput>;
};
export type detalle_compraCreateManyFactura_compraInputEnvelope = {
    data: Prisma.detalle_compraCreateManyFactura_compraInput | Prisma.detalle_compraCreateManyFactura_compraInput[];
    skipDuplicates?: boolean;
};
export type detalle_compraUpsertWithWhereUniqueWithoutFactura_compraInput = {
    where: Prisma.detalle_compraWhereUniqueInput;
    update: Prisma.XOR<Prisma.detalle_compraUpdateWithoutFactura_compraInput, Prisma.detalle_compraUncheckedUpdateWithoutFactura_compraInput>;
    create: Prisma.XOR<Prisma.detalle_compraCreateWithoutFactura_compraInput, Prisma.detalle_compraUncheckedCreateWithoutFactura_compraInput>;
};
export type detalle_compraUpdateWithWhereUniqueWithoutFactura_compraInput = {
    where: Prisma.detalle_compraWhereUniqueInput;
    data: Prisma.XOR<Prisma.detalle_compraUpdateWithoutFactura_compraInput, Prisma.detalle_compraUncheckedUpdateWithoutFactura_compraInput>;
};
export type detalle_compraUpdateManyWithWhereWithoutFactura_compraInput = {
    where: Prisma.detalle_compraScalarWhereInput;
    data: Prisma.XOR<Prisma.detalle_compraUpdateManyMutationInput, Prisma.detalle_compraUncheckedUpdateManyWithoutFactura_compraInput>;
};
export type detalle_compraCreateManyCursoInput = {
    id?: number;
    factura_id?: number | null;
};
export type detalle_compraUpdateWithoutCursoInput = {
    factura_compra?: Prisma.factura_compraUpdateOneWithoutDetalle_compraNestedInput;
};
export type detalle_compraUncheckedUpdateWithoutCursoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    factura_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type detalle_compraUncheckedUpdateManyWithoutCursoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    factura_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type detalle_compraCreateManyFactura_compraInput = {
    id?: number;
    curso_id?: number | null;
};
export type detalle_compraUpdateWithoutFactura_compraInput = {
    curso?: Prisma.cursoUpdateOneWithoutDetalle_compraNestedInput;
};
export type detalle_compraUncheckedUpdateWithoutFactura_compraInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    curso_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type detalle_compraUncheckedUpdateManyWithoutFactura_compraInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    curso_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type detalle_compraSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    factura_id?: boolean;
    curso_id?: boolean;
    curso?: boolean | Prisma.detalle_compra$cursoArgs<ExtArgs>;
    factura_compra?: boolean | Prisma.detalle_compra$factura_compraArgs<ExtArgs>;
}, ExtArgs["result"]["detalle_compra"]>;
export type detalle_compraSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    factura_id?: boolean;
    curso_id?: boolean;
    curso?: boolean | Prisma.detalle_compra$cursoArgs<ExtArgs>;
    factura_compra?: boolean | Prisma.detalle_compra$factura_compraArgs<ExtArgs>;
}, ExtArgs["result"]["detalle_compra"]>;
export type detalle_compraSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    factura_id?: boolean;
    curso_id?: boolean;
    curso?: boolean | Prisma.detalle_compra$cursoArgs<ExtArgs>;
    factura_compra?: boolean | Prisma.detalle_compra$factura_compraArgs<ExtArgs>;
}, ExtArgs["result"]["detalle_compra"]>;
export type detalle_compraSelectScalar = {
    id?: boolean;
    factura_id?: boolean;
    curso_id?: boolean;
};
export type detalle_compraOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "factura_id" | "curso_id", ExtArgs["result"]["detalle_compra"]>;
export type detalle_compraInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    curso?: boolean | Prisma.detalle_compra$cursoArgs<ExtArgs>;
    factura_compra?: boolean | Prisma.detalle_compra$factura_compraArgs<ExtArgs>;
};
export type detalle_compraIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    curso?: boolean | Prisma.detalle_compra$cursoArgs<ExtArgs>;
    factura_compra?: boolean | Prisma.detalle_compra$factura_compraArgs<ExtArgs>;
};
export type detalle_compraIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    curso?: boolean | Prisma.detalle_compra$cursoArgs<ExtArgs>;
    factura_compra?: boolean | Prisma.detalle_compra$factura_compraArgs<ExtArgs>;
};
export type $detalle_compraPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "detalle_compra";
    objects: {
        curso: Prisma.$cursoPayload<ExtArgs> | null;
        factura_compra: Prisma.$factura_compraPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        factura_id: number | null;
        curso_id: number | null;
    }, ExtArgs["result"]["detalle_compra"]>;
    composites: {};
};
export type detalle_compraGetPayload<S extends boolean | null | undefined | detalle_compraDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$detalle_compraPayload, S>;
export type detalle_compraCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<detalle_compraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Detalle_compraCountAggregateInputType | true;
};
export interface detalle_compraDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['detalle_compra'];
        meta: {
            name: 'detalle_compra';
        };
    };
    findUnique<T extends detalle_compraFindUniqueArgs>(args: Prisma.SelectSubset<T, detalle_compraFindUniqueArgs<ExtArgs>>): Prisma.Prisma__detalle_compraClient<runtime.Types.Result.GetResult<Prisma.$detalle_compraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends detalle_compraFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, detalle_compraFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__detalle_compraClient<runtime.Types.Result.GetResult<Prisma.$detalle_compraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends detalle_compraFindFirstArgs>(args?: Prisma.SelectSubset<T, detalle_compraFindFirstArgs<ExtArgs>>): Prisma.Prisma__detalle_compraClient<runtime.Types.Result.GetResult<Prisma.$detalle_compraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends detalle_compraFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, detalle_compraFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__detalle_compraClient<runtime.Types.Result.GetResult<Prisma.$detalle_compraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends detalle_compraFindManyArgs>(args?: Prisma.SelectSubset<T, detalle_compraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$detalle_compraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends detalle_compraCreateArgs>(args: Prisma.SelectSubset<T, detalle_compraCreateArgs<ExtArgs>>): Prisma.Prisma__detalle_compraClient<runtime.Types.Result.GetResult<Prisma.$detalle_compraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends detalle_compraCreateManyArgs>(args?: Prisma.SelectSubset<T, detalle_compraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends detalle_compraCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, detalle_compraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$detalle_compraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends detalle_compraDeleteArgs>(args: Prisma.SelectSubset<T, detalle_compraDeleteArgs<ExtArgs>>): Prisma.Prisma__detalle_compraClient<runtime.Types.Result.GetResult<Prisma.$detalle_compraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends detalle_compraUpdateArgs>(args: Prisma.SelectSubset<T, detalle_compraUpdateArgs<ExtArgs>>): Prisma.Prisma__detalle_compraClient<runtime.Types.Result.GetResult<Prisma.$detalle_compraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends detalle_compraDeleteManyArgs>(args?: Prisma.SelectSubset<T, detalle_compraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends detalle_compraUpdateManyArgs>(args: Prisma.SelectSubset<T, detalle_compraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends detalle_compraUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, detalle_compraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$detalle_compraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends detalle_compraUpsertArgs>(args: Prisma.SelectSubset<T, detalle_compraUpsertArgs<ExtArgs>>): Prisma.Prisma__detalle_compraClient<runtime.Types.Result.GetResult<Prisma.$detalle_compraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends detalle_compraCountArgs>(args?: Prisma.Subset<T, detalle_compraCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Detalle_compraCountAggregateOutputType> : number>;
    aggregate<T extends Detalle_compraAggregateArgs>(args: Prisma.Subset<T, Detalle_compraAggregateArgs>): Prisma.PrismaPromise<GetDetalle_compraAggregateType<T>>;
    groupBy<T extends detalle_compraGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: detalle_compraGroupByArgs['orderBy'];
    } : {
        orderBy?: detalle_compraGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, detalle_compraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDetalle_compraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: detalle_compraFieldRefs;
}
export interface Prisma__detalle_compraClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    curso<T extends Prisma.detalle_compra$cursoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.detalle_compra$cursoArgs<ExtArgs>>): Prisma.Prisma__cursoClient<runtime.Types.Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    factura_compra<T extends Prisma.detalle_compra$factura_compraArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.detalle_compra$factura_compraArgs<ExtArgs>>): Prisma.Prisma__factura_compraClient<runtime.Types.Result.GetResult<Prisma.$factura_compraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface detalle_compraFieldRefs {
    readonly id: Prisma.FieldRef<"detalle_compra", 'Int'>;
    readonly factura_id: Prisma.FieldRef<"detalle_compra", 'Int'>;
    readonly curso_id: Prisma.FieldRef<"detalle_compra", 'Int'>;
}
export type detalle_compraFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.detalle_compraSelect<ExtArgs> | null;
    omit?: Prisma.detalle_compraOmit<ExtArgs> | null;
    include?: Prisma.detalle_compraInclude<ExtArgs> | null;
    where: Prisma.detalle_compraWhereUniqueInput;
};
export type detalle_compraFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.detalle_compraSelect<ExtArgs> | null;
    omit?: Prisma.detalle_compraOmit<ExtArgs> | null;
    include?: Prisma.detalle_compraInclude<ExtArgs> | null;
    where: Prisma.detalle_compraWhereUniqueInput;
};
export type detalle_compraFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type detalle_compraFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type detalle_compraFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type detalle_compraCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.detalle_compraSelect<ExtArgs> | null;
    omit?: Prisma.detalle_compraOmit<ExtArgs> | null;
    include?: Prisma.detalle_compraInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.detalle_compraCreateInput, Prisma.detalle_compraUncheckedCreateInput>;
};
export type detalle_compraCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.detalle_compraCreateManyInput | Prisma.detalle_compraCreateManyInput[];
    skipDuplicates?: boolean;
};
export type detalle_compraCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.detalle_compraSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.detalle_compraOmit<ExtArgs> | null;
    data: Prisma.detalle_compraCreateManyInput | Prisma.detalle_compraCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.detalle_compraIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type detalle_compraUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.detalle_compraSelect<ExtArgs> | null;
    omit?: Prisma.detalle_compraOmit<ExtArgs> | null;
    include?: Prisma.detalle_compraInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.detalle_compraUpdateInput, Prisma.detalle_compraUncheckedUpdateInput>;
    where: Prisma.detalle_compraWhereUniqueInput;
};
export type detalle_compraUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.detalle_compraUpdateManyMutationInput, Prisma.detalle_compraUncheckedUpdateManyInput>;
    where?: Prisma.detalle_compraWhereInput;
    limit?: number;
};
export type detalle_compraUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.detalle_compraSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.detalle_compraOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.detalle_compraUpdateManyMutationInput, Prisma.detalle_compraUncheckedUpdateManyInput>;
    where?: Prisma.detalle_compraWhereInput;
    limit?: number;
    include?: Prisma.detalle_compraIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type detalle_compraUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.detalle_compraSelect<ExtArgs> | null;
    omit?: Prisma.detalle_compraOmit<ExtArgs> | null;
    include?: Prisma.detalle_compraInclude<ExtArgs> | null;
    where: Prisma.detalle_compraWhereUniqueInput;
    create: Prisma.XOR<Prisma.detalle_compraCreateInput, Prisma.detalle_compraUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.detalle_compraUpdateInput, Prisma.detalle_compraUncheckedUpdateInput>;
};
export type detalle_compraDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.detalle_compraSelect<ExtArgs> | null;
    omit?: Prisma.detalle_compraOmit<ExtArgs> | null;
    include?: Prisma.detalle_compraInclude<ExtArgs> | null;
    where: Prisma.detalle_compraWhereUniqueInput;
};
export type detalle_compraDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.detalle_compraWhereInput;
    limit?: number;
};
export type detalle_compra$cursoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cursoSelect<ExtArgs> | null;
    omit?: Prisma.cursoOmit<ExtArgs> | null;
    include?: Prisma.cursoInclude<ExtArgs> | null;
    where?: Prisma.cursoWhereInput;
};
export type detalle_compra$factura_compraArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.factura_compraSelect<ExtArgs> | null;
    omit?: Prisma.factura_compraOmit<ExtArgs> | null;
    include?: Prisma.factura_compraInclude<ExtArgs> | null;
    where?: Prisma.factura_compraWhereInput;
};
export type detalle_compraDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.detalle_compraSelect<ExtArgs> | null;
    omit?: Prisma.detalle_compraOmit<ExtArgs> | null;
    include?: Prisma.detalle_compraInclude<ExtArgs> | null;
};
