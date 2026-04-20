import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type carrito_cursoModel = runtime.Types.Result.DefaultSelection<Prisma.$carrito_cursoPayload>;
export type AggregateCarrito_curso = {
    _count: Carrito_cursoCountAggregateOutputType | null;
    _avg: Carrito_cursoAvgAggregateOutputType | null;
    _sum: Carrito_cursoSumAggregateOutputType | null;
    _min: Carrito_cursoMinAggregateOutputType | null;
    _max: Carrito_cursoMaxAggregateOutputType | null;
};
export type Carrito_cursoAvgAggregateOutputType = {
    id: number | null;
    carrito_id: number | null;
    curso_id: number | null;
};
export type Carrito_cursoSumAggregateOutputType = {
    id: number | null;
    carrito_id: number | null;
    curso_id: number | null;
};
export type Carrito_cursoMinAggregateOutputType = {
    id: number | null;
    carrito_id: number | null;
    curso_id: number | null;
};
export type Carrito_cursoMaxAggregateOutputType = {
    id: number | null;
    carrito_id: number | null;
    curso_id: number | null;
};
export type Carrito_cursoCountAggregateOutputType = {
    id: number;
    carrito_id: number;
    curso_id: number;
    _all: number;
};
export type Carrito_cursoAvgAggregateInputType = {
    id?: true;
    carrito_id?: true;
    curso_id?: true;
};
export type Carrito_cursoSumAggregateInputType = {
    id?: true;
    carrito_id?: true;
    curso_id?: true;
};
export type Carrito_cursoMinAggregateInputType = {
    id?: true;
    carrito_id?: true;
    curso_id?: true;
};
export type Carrito_cursoMaxAggregateInputType = {
    id?: true;
    carrito_id?: true;
    curso_id?: true;
};
export type Carrito_cursoCountAggregateInputType = {
    id?: true;
    carrito_id?: true;
    curso_id?: true;
    _all?: true;
};
export type Carrito_cursoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.carrito_cursoWhereInput;
    orderBy?: Prisma.carrito_cursoOrderByWithRelationInput | Prisma.carrito_cursoOrderByWithRelationInput[];
    cursor?: Prisma.carrito_cursoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Carrito_cursoCountAggregateInputType;
    _avg?: Carrito_cursoAvgAggregateInputType;
    _sum?: Carrito_cursoSumAggregateInputType;
    _min?: Carrito_cursoMinAggregateInputType;
    _max?: Carrito_cursoMaxAggregateInputType;
};
export type GetCarrito_cursoAggregateType<T extends Carrito_cursoAggregateArgs> = {
    [P in keyof T & keyof AggregateCarrito_curso]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCarrito_curso[P]> : Prisma.GetScalarType<T[P], AggregateCarrito_curso[P]>;
};
export type carrito_cursoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.carrito_cursoWhereInput;
    orderBy?: Prisma.carrito_cursoOrderByWithAggregationInput | Prisma.carrito_cursoOrderByWithAggregationInput[];
    by: Prisma.Carrito_cursoScalarFieldEnum[] | Prisma.Carrito_cursoScalarFieldEnum;
    having?: Prisma.carrito_cursoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Carrito_cursoCountAggregateInputType | true;
    _avg?: Carrito_cursoAvgAggregateInputType;
    _sum?: Carrito_cursoSumAggregateInputType;
    _min?: Carrito_cursoMinAggregateInputType;
    _max?: Carrito_cursoMaxAggregateInputType;
};
export type Carrito_cursoGroupByOutputType = {
    id: number;
    carrito_id: number | null;
    curso_id: number | null;
    _count: Carrito_cursoCountAggregateOutputType | null;
    _avg: Carrito_cursoAvgAggregateOutputType | null;
    _sum: Carrito_cursoSumAggregateOutputType | null;
    _min: Carrito_cursoMinAggregateOutputType | null;
    _max: Carrito_cursoMaxAggregateOutputType | null;
};
export type GetCarrito_cursoGroupByPayload<T extends carrito_cursoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Carrito_cursoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Carrito_cursoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Carrito_cursoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Carrito_cursoGroupByOutputType[P]>;
}>>;
export type carrito_cursoWhereInput = {
    AND?: Prisma.carrito_cursoWhereInput | Prisma.carrito_cursoWhereInput[];
    OR?: Prisma.carrito_cursoWhereInput[];
    NOT?: Prisma.carrito_cursoWhereInput | Prisma.carrito_cursoWhereInput[];
    id?: Prisma.IntFilter<"carrito_curso"> | number;
    carrito_id?: Prisma.IntNullableFilter<"carrito_curso"> | number | null;
    curso_id?: Prisma.IntNullableFilter<"carrito_curso"> | number | null;
    carrito?: Prisma.XOR<Prisma.CarritoNullableScalarRelationFilter, Prisma.carritoWhereInput> | null;
    curso?: Prisma.XOR<Prisma.CursoNullableScalarRelationFilter, Prisma.cursoWhereInput> | null;
};
export type carrito_cursoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    carrito_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    curso_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    carrito?: Prisma.carritoOrderByWithRelationInput;
    curso?: Prisma.cursoOrderByWithRelationInput;
};
export type carrito_cursoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.carrito_cursoWhereInput | Prisma.carrito_cursoWhereInput[];
    OR?: Prisma.carrito_cursoWhereInput[];
    NOT?: Prisma.carrito_cursoWhereInput | Prisma.carrito_cursoWhereInput[];
    carrito_id?: Prisma.IntNullableFilter<"carrito_curso"> | number | null;
    curso_id?: Prisma.IntNullableFilter<"carrito_curso"> | number | null;
    carrito?: Prisma.XOR<Prisma.CarritoNullableScalarRelationFilter, Prisma.carritoWhereInput> | null;
    curso?: Prisma.XOR<Prisma.CursoNullableScalarRelationFilter, Prisma.cursoWhereInput> | null;
}, "id">;
export type carrito_cursoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    carrito_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    curso_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.carrito_cursoCountOrderByAggregateInput;
    _avg?: Prisma.carrito_cursoAvgOrderByAggregateInput;
    _max?: Prisma.carrito_cursoMaxOrderByAggregateInput;
    _min?: Prisma.carrito_cursoMinOrderByAggregateInput;
    _sum?: Prisma.carrito_cursoSumOrderByAggregateInput;
};
export type carrito_cursoScalarWhereWithAggregatesInput = {
    AND?: Prisma.carrito_cursoScalarWhereWithAggregatesInput | Prisma.carrito_cursoScalarWhereWithAggregatesInput[];
    OR?: Prisma.carrito_cursoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.carrito_cursoScalarWhereWithAggregatesInput | Prisma.carrito_cursoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"carrito_curso"> | number;
    carrito_id?: Prisma.IntNullableWithAggregatesFilter<"carrito_curso"> | number | null;
    curso_id?: Prisma.IntNullableWithAggregatesFilter<"carrito_curso"> | number | null;
};
export type carrito_cursoCreateInput = {
    carrito?: Prisma.carritoCreateNestedOneWithoutCarrito_cursoInput;
    curso?: Prisma.cursoCreateNestedOneWithoutCarrito_cursoInput;
};
export type carrito_cursoUncheckedCreateInput = {
    id?: number;
    carrito_id?: number | null;
    curso_id?: number | null;
};
export type carrito_cursoUpdateInput = {
    carrito?: Prisma.carritoUpdateOneWithoutCarrito_cursoNestedInput;
    curso?: Prisma.cursoUpdateOneWithoutCarrito_cursoNestedInput;
};
export type carrito_cursoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    carrito_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    curso_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type carrito_cursoCreateManyInput = {
    id?: number;
    carrito_id?: number | null;
    curso_id?: number | null;
};
export type carrito_cursoUpdateManyMutationInput = {};
export type carrito_cursoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    carrito_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    curso_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type Carrito_cursoListRelationFilter = {
    every?: Prisma.carrito_cursoWhereInput;
    some?: Prisma.carrito_cursoWhereInput;
    none?: Prisma.carrito_cursoWhereInput;
};
export type carrito_cursoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type carrito_cursoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    carrito_id?: Prisma.SortOrder;
    curso_id?: Prisma.SortOrder;
};
export type carrito_cursoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    carrito_id?: Prisma.SortOrder;
    curso_id?: Prisma.SortOrder;
};
export type carrito_cursoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    carrito_id?: Prisma.SortOrder;
    curso_id?: Prisma.SortOrder;
};
export type carrito_cursoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    carrito_id?: Prisma.SortOrder;
    curso_id?: Prisma.SortOrder;
};
export type carrito_cursoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    carrito_id?: Prisma.SortOrder;
    curso_id?: Prisma.SortOrder;
};
export type carrito_cursoCreateNestedManyWithoutCarritoInput = {
    create?: Prisma.XOR<Prisma.carrito_cursoCreateWithoutCarritoInput, Prisma.carrito_cursoUncheckedCreateWithoutCarritoInput> | Prisma.carrito_cursoCreateWithoutCarritoInput[] | Prisma.carrito_cursoUncheckedCreateWithoutCarritoInput[];
    connectOrCreate?: Prisma.carrito_cursoCreateOrConnectWithoutCarritoInput | Prisma.carrito_cursoCreateOrConnectWithoutCarritoInput[];
    createMany?: Prisma.carrito_cursoCreateManyCarritoInputEnvelope;
    connect?: Prisma.carrito_cursoWhereUniqueInput | Prisma.carrito_cursoWhereUniqueInput[];
};
export type carrito_cursoUncheckedCreateNestedManyWithoutCarritoInput = {
    create?: Prisma.XOR<Prisma.carrito_cursoCreateWithoutCarritoInput, Prisma.carrito_cursoUncheckedCreateWithoutCarritoInput> | Prisma.carrito_cursoCreateWithoutCarritoInput[] | Prisma.carrito_cursoUncheckedCreateWithoutCarritoInput[];
    connectOrCreate?: Prisma.carrito_cursoCreateOrConnectWithoutCarritoInput | Prisma.carrito_cursoCreateOrConnectWithoutCarritoInput[];
    createMany?: Prisma.carrito_cursoCreateManyCarritoInputEnvelope;
    connect?: Prisma.carrito_cursoWhereUniqueInput | Prisma.carrito_cursoWhereUniqueInput[];
};
export type carrito_cursoUpdateManyWithoutCarritoNestedInput = {
    create?: Prisma.XOR<Prisma.carrito_cursoCreateWithoutCarritoInput, Prisma.carrito_cursoUncheckedCreateWithoutCarritoInput> | Prisma.carrito_cursoCreateWithoutCarritoInput[] | Prisma.carrito_cursoUncheckedCreateWithoutCarritoInput[];
    connectOrCreate?: Prisma.carrito_cursoCreateOrConnectWithoutCarritoInput | Prisma.carrito_cursoCreateOrConnectWithoutCarritoInput[];
    upsert?: Prisma.carrito_cursoUpsertWithWhereUniqueWithoutCarritoInput | Prisma.carrito_cursoUpsertWithWhereUniqueWithoutCarritoInput[];
    createMany?: Prisma.carrito_cursoCreateManyCarritoInputEnvelope;
    set?: Prisma.carrito_cursoWhereUniqueInput | Prisma.carrito_cursoWhereUniqueInput[];
    disconnect?: Prisma.carrito_cursoWhereUniqueInput | Prisma.carrito_cursoWhereUniqueInput[];
    delete?: Prisma.carrito_cursoWhereUniqueInput | Prisma.carrito_cursoWhereUniqueInput[];
    connect?: Prisma.carrito_cursoWhereUniqueInput | Prisma.carrito_cursoWhereUniqueInput[];
    update?: Prisma.carrito_cursoUpdateWithWhereUniqueWithoutCarritoInput | Prisma.carrito_cursoUpdateWithWhereUniqueWithoutCarritoInput[];
    updateMany?: Prisma.carrito_cursoUpdateManyWithWhereWithoutCarritoInput | Prisma.carrito_cursoUpdateManyWithWhereWithoutCarritoInput[];
    deleteMany?: Prisma.carrito_cursoScalarWhereInput | Prisma.carrito_cursoScalarWhereInput[];
};
export type carrito_cursoUncheckedUpdateManyWithoutCarritoNestedInput = {
    create?: Prisma.XOR<Prisma.carrito_cursoCreateWithoutCarritoInput, Prisma.carrito_cursoUncheckedCreateWithoutCarritoInput> | Prisma.carrito_cursoCreateWithoutCarritoInput[] | Prisma.carrito_cursoUncheckedCreateWithoutCarritoInput[];
    connectOrCreate?: Prisma.carrito_cursoCreateOrConnectWithoutCarritoInput | Prisma.carrito_cursoCreateOrConnectWithoutCarritoInput[];
    upsert?: Prisma.carrito_cursoUpsertWithWhereUniqueWithoutCarritoInput | Prisma.carrito_cursoUpsertWithWhereUniqueWithoutCarritoInput[];
    createMany?: Prisma.carrito_cursoCreateManyCarritoInputEnvelope;
    set?: Prisma.carrito_cursoWhereUniqueInput | Prisma.carrito_cursoWhereUniqueInput[];
    disconnect?: Prisma.carrito_cursoWhereUniqueInput | Prisma.carrito_cursoWhereUniqueInput[];
    delete?: Prisma.carrito_cursoWhereUniqueInput | Prisma.carrito_cursoWhereUniqueInput[];
    connect?: Prisma.carrito_cursoWhereUniqueInput | Prisma.carrito_cursoWhereUniqueInput[];
    update?: Prisma.carrito_cursoUpdateWithWhereUniqueWithoutCarritoInput | Prisma.carrito_cursoUpdateWithWhereUniqueWithoutCarritoInput[];
    updateMany?: Prisma.carrito_cursoUpdateManyWithWhereWithoutCarritoInput | Prisma.carrito_cursoUpdateManyWithWhereWithoutCarritoInput[];
    deleteMany?: Prisma.carrito_cursoScalarWhereInput | Prisma.carrito_cursoScalarWhereInput[];
};
export type carrito_cursoCreateNestedManyWithoutCursoInput = {
    create?: Prisma.XOR<Prisma.carrito_cursoCreateWithoutCursoInput, Prisma.carrito_cursoUncheckedCreateWithoutCursoInput> | Prisma.carrito_cursoCreateWithoutCursoInput[] | Prisma.carrito_cursoUncheckedCreateWithoutCursoInput[];
    connectOrCreate?: Prisma.carrito_cursoCreateOrConnectWithoutCursoInput | Prisma.carrito_cursoCreateOrConnectWithoutCursoInput[];
    createMany?: Prisma.carrito_cursoCreateManyCursoInputEnvelope;
    connect?: Prisma.carrito_cursoWhereUniqueInput | Prisma.carrito_cursoWhereUniqueInput[];
};
export type carrito_cursoUncheckedCreateNestedManyWithoutCursoInput = {
    create?: Prisma.XOR<Prisma.carrito_cursoCreateWithoutCursoInput, Prisma.carrito_cursoUncheckedCreateWithoutCursoInput> | Prisma.carrito_cursoCreateWithoutCursoInput[] | Prisma.carrito_cursoUncheckedCreateWithoutCursoInput[];
    connectOrCreate?: Prisma.carrito_cursoCreateOrConnectWithoutCursoInput | Prisma.carrito_cursoCreateOrConnectWithoutCursoInput[];
    createMany?: Prisma.carrito_cursoCreateManyCursoInputEnvelope;
    connect?: Prisma.carrito_cursoWhereUniqueInput | Prisma.carrito_cursoWhereUniqueInput[];
};
export type carrito_cursoUpdateManyWithoutCursoNestedInput = {
    create?: Prisma.XOR<Prisma.carrito_cursoCreateWithoutCursoInput, Prisma.carrito_cursoUncheckedCreateWithoutCursoInput> | Prisma.carrito_cursoCreateWithoutCursoInput[] | Prisma.carrito_cursoUncheckedCreateWithoutCursoInput[];
    connectOrCreate?: Prisma.carrito_cursoCreateOrConnectWithoutCursoInput | Prisma.carrito_cursoCreateOrConnectWithoutCursoInput[];
    upsert?: Prisma.carrito_cursoUpsertWithWhereUniqueWithoutCursoInput | Prisma.carrito_cursoUpsertWithWhereUniqueWithoutCursoInput[];
    createMany?: Prisma.carrito_cursoCreateManyCursoInputEnvelope;
    set?: Prisma.carrito_cursoWhereUniqueInput | Prisma.carrito_cursoWhereUniqueInput[];
    disconnect?: Prisma.carrito_cursoWhereUniqueInput | Prisma.carrito_cursoWhereUniqueInput[];
    delete?: Prisma.carrito_cursoWhereUniqueInput | Prisma.carrito_cursoWhereUniqueInput[];
    connect?: Prisma.carrito_cursoWhereUniqueInput | Prisma.carrito_cursoWhereUniqueInput[];
    update?: Prisma.carrito_cursoUpdateWithWhereUniqueWithoutCursoInput | Prisma.carrito_cursoUpdateWithWhereUniqueWithoutCursoInput[];
    updateMany?: Prisma.carrito_cursoUpdateManyWithWhereWithoutCursoInput | Prisma.carrito_cursoUpdateManyWithWhereWithoutCursoInput[];
    deleteMany?: Prisma.carrito_cursoScalarWhereInput | Prisma.carrito_cursoScalarWhereInput[];
};
export type carrito_cursoUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: Prisma.XOR<Prisma.carrito_cursoCreateWithoutCursoInput, Prisma.carrito_cursoUncheckedCreateWithoutCursoInput> | Prisma.carrito_cursoCreateWithoutCursoInput[] | Prisma.carrito_cursoUncheckedCreateWithoutCursoInput[];
    connectOrCreate?: Prisma.carrito_cursoCreateOrConnectWithoutCursoInput | Prisma.carrito_cursoCreateOrConnectWithoutCursoInput[];
    upsert?: Prisma.carrito_cursoUpsertWithWhereUniqueWithoutCursoInput | Prisma.carrito_cursoUpsertWithWhereUniqueWithoutCursoInput[];
    createMany?: Prisma.carrito_cursoCreateManyCursoInputEnvelope;
    set?: Prisma.carrito_cursoWhereUniqueInput | Prisma.carrito_cursoWhereUniqueInput[];
    disconnect?: Prisma.carrito_cursoWhereUniqueInput | Prisma.carrito_cursoWhereUniqueInput[];
    delete?: Prisma.carrito_cursoWhereUniqueInput | Prisma.carrito_cursoWhereUniqueInput[];
    connect?: Prisma.carrito_cursoWhereUniqueInput | Prisma.carrito_cursoWhereUniqueInput[];
    update?: Prisma.carrito_cursoUpdateWithWhereUniqueWithoutCursoInput | Prisma.carrito_cursoUpdateWithWhereUniqueWithoutCursoInput[];
    updateMany?: Prisma.carrito_cursoUpdateManyWithWhereWithoutCursoInput | Prisma.carrito_cursoUpdateManyWithWhereWithoutCursoInput[];
    deleteMany?: Prisma.carrito_cursoScalarWhereInput | Prisma.carrito_cursoScalarWhereInput[];
};
export type carrito_cursoCreateWithoutCarritoInput = {
    curso?: Prisma.cursoCreateNestedOneWithoutCarrito_cursoInput;
};
export type carrito_cursoUncheckedCreateWithoutCarritoInput = {
    id?: number;
    curso_id?: number | null;
};
export type carrito_cursoCreateOrConnectWithoutCarritoInput = {
    where: Prisma.carrito_cursoWhereUniqueInput;
    create: Prisma.XOR<Prisma.carrito_cursoCreateWithoutCarritoInput, Prisma.carrito_cursoUncheckedCreateWithoutCarritoInput>;
};
export type carrito_cursoCreateManyCarritoInputEnvelope = {
    data: Prisma.carrito_cursoCreateManyCarritoInput | Prisma.carrito_cursoCreateManyCarritoInput[];
    skipDuplicates?: boolean;
};
export type carrito_cursoUpsertWithWhereUniqueWithoutCarritoInput = {
    where: Prisma.carrito_cursoWhereUniqueInput;
    update: Prisma.XOR<Prisma.carrito_cursoUpdateWithoutCarritoInput, Prisma.carrito_cursoUncheckedUpdateWithoutCarritoInput>;
    create: Prisma.XOR<Prisma.carrito_cursoCreateWithoutCarritoInput, Prisma.carrito_cursoUncheckedCreateWithoutCarritoInput>;
};
export type carrito_cursoUpdateWithWhereUniqueWithoutCarritoInput = {
    where: Prisma.carrito_cursoWhereUniqueInput;
    data: Prisma.XOR<Prisma.carrito_cursoUpdateWithoutCarritoInput, Prisma.carrito_cursoUncheckedUpdateWithoutCarritoInput>;
};
export type carrito_cursoUpdateManyWithWhereWithoutCarritoInput = {
    where: Prisma.carrito_cursoScalarWhereInput;
    data: Prisma.XOR<Prisma.carrito_cursoUpdateManyMutationInput, Prisma.carrito_cursoUncheckedUpdateManyWithoutCarritoInput>;
};
export type carrito_cursoScalarWhereInput = {
    AND?: Prisma.carrito_cursoScalarWhereInput | Prisma.carrito_cursoScalarWhereInput[];
    OR?: Prisma.carrito_cursoScalarWhereInput[];
    NOT?: Prisma.carrito_cursoScalarWhereInput | Prisma.carrito_cursoScalarWhereInput[];
    id?: Prisma.IntFilter<"carrito_curso"> | number;
    carrito_id?: Prisma.IntNullableFilter<"carrito_curso"> | number | null;
    curso_id?: Prisma.IntNullableFilter<"carrito_curso"> | number | null;
};
export type carrito_cursoCreateWithoutCursoInput = {
    carrito?: Prisma.carritoCreateNestedOneWithoutCarrito_cursoInput;
};
export type carrito_cursoUncheckedCreateWithoutCursoInput = {
    id?: number;
    carrito_id?: number | null;
};
export type carrito_cursoCreateOrConnectWithoutCursoInput = {
    where: Prisma.carrito_cursoWhereUniqueInput;
    create: Prisma.XOR<Prisma.carrito_cursoCreateWithoutCursoInput, Prisma.carrito_cursoUncheckedCreateWithoutCursoInput>;
};
export type carrito_cursoCreateManyCursoInputEnvelope = {
    data: Prisma.carrito_cursoCreateManyCursoInput | Prisma.carrito_cursoCreateManyCursoInput[];
    skipDuplicates?: boolean;
};
export type carrito_cursoUpsertWithWhereUniqueWithoutCursoInput = {
    where: Prisma.carrito_cursoWhereUniqueInput;
    update: Prisma.XOR<Prisma.carrito_cursoUpdateWithoutCursoInput, Prisma.carrito_cursoUncheckedUpdateWithoutCursoInput>;
    create: Prisma.XOR<Prisma.carrito_cursoCreateWithoutCursoInput, Prisma.carrito_cursoUncheckedCreateWithoutCursoInput>;
};
export type carrito_cursoUpdateWithWhereUniqueWithoutCursoInput = {
    where: Prisma.carrito_cursoWhereUniqueInput;
    data: Prisma.XOR<Prisma.carrito_cursoUpdateWithoutCursoInput, Prisma.carrito_cursoUncheckedUpdateWithoutCursoInput>;
};
export type carrito_cursoUpdateManyWithWhereWithoutCursoInput = {
    where: Prisma.carrito_cursoScalarWhereInput;
    data: Prisma.XOR<Prisma.carrito_cursoUpdateManyMutationInput, Prisma.carrito_cursoUncheckedUpdateManyWithoutCursoInput>;
};
export type carrito_cursoCreateManyCarritoInput = {
    id?: number;
    curso_id?: number | null;
};
export type carrito_cursoUpdateWithoutCarritoInput = {
    curso?: Prisma.cursoUpdateOneWithoutCarrito_cursoNestedInput;
};
export type carrito_cursoUncheckedUpdateWithoutCarritoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    curso_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type carrito_cursoUncheckedUpdateManyWithoutCarritoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    curso_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type carrito_cursoCreateManyCursoInput = {
    id?: number;
    carrito_id?: number | null;
};
export type carrito_cursoUpdateWithoutCursoInput = {
    carrito?: Prisma.carritoUpdateOneWithoutCarrito_cursoNestedInput;
};
export type carrito_cursoUncheckedUpdateWithoutCursoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    carrito_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type carrito_cursoUncheckedUpdateManyWithoutCursoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    carrito_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type carrito_cursoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    carrito_id?: boolean;
    curso_id?: boolean;
    carrito?: boolean | Prisma.carrito_curso$carritoArgs<ExtArgs>;
    curso?: boolean | Prisma.carrito_curso$cursoArgs<ExtArgs>;
}, ExtArgs["result"]["carrito_curso"]>;
export type carrito_cursoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    carrito_id?: boolean;
    curso_id?: boolean;
    carrito?: boolean | Prisma.carrito_curso$carritoArgs<ExtArgs>;
    curso?: boolean | Prisma.carrito_curso$cursoArgs<ExtArgs>;
}, ExtArgs["result"]["carrito_curso"]>;
export type carrito_cursoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    carrito_id?: boolean;
    curso_id?: boolean;
    carrito?: boolean | Prisma.carrito_curso$carritoArgs<ExtArgs>;
    curso?: boolean | Prisma.carrito_curso$cursoArgs<ExtArgs>;
}, ExtArgs["result"]["carrito_curso"]>;
export type carrito_cursoSelectScalar = {
    id?: boolean;
    carrito_id?: boolean;
    curso_id?: boolean;
};
export type carrito_cursoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "carrito_id" | "curso_id", ExtArgs["result"]["carrito_curso"]>;
export type carrito_cursoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    carrito?: boolean | Prisma.carrito_curso$carritoArgs<ExtArgs>;
    curso?: boolean | Prisma.carrito_curso$cursoArgs<ExtArgs>;
};
export type carrito_cursoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    carrito?: boolean | Prisma.carrito_curso$carritoArgs<ExtArgs>;
    curso?: boolean | Prisma.carrito_curso$cursoArgs<ExtArgs>;
};
export type carrito_cursoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    carrito?: boolean | Prisma.carrito_curso$carritoArgs<ExtArgs>;
    curso?: boolean | Prisma.carrito_curso$cursoArgs<ExtArgs>;
};
export type $carrito_cursoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "carrito_curso";
    objects: {
        carrito: Prisma.$carritoPayload<ExtArgs> | null;
        curso: Prisma.$cursoPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        carrito_id: number | null;
        curso_id: number | null;
    }, ExtArgs["result"]["carrito_curso"]>;
    composites: {};
};
export type carrito_cursoGetPayload<S extends boolean | null | undefined | carrito_cursoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$carrito_cursoPayload, S>;
export type carrito_cursoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<carrito_cursoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Carrito_cursoCountAggregateInputType | true;
};
export interface carrito_cursoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['carrito_curso'];
        meta: {
            name: 'carrito_curso';
        };
    };
    findUnique<T extends carrito_cursoFindUniqueArgs>(args: Prisma.SelectSubset<T, carrito_cursoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__carrito_cursoClient<runtime.Types.Result.GetResult<Prisma.$carrito_cursoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends carrito_cursoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, carrito_cursoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__carrito_cursoClient<runtime.Types.Result.GetResult<Prisma.$carrito_cursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends carrito_cursoFindFirstArgs>(args?: Prisma.SelectSubset<T, carrito_cursoFindFirstArgs<ExtArgs>>): Prisma.Prisma__carrito_cursoClient<runtime.Types.Result.GetResult<Prisma.$carrito_cursoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends carrito_cursoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, carrito_cursoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__carrito_cursoClient<runtime.Types.Result.GetResult<Prisma.$carrito_cursoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends carrito_cursoFindManyArgs>(args?: Prisma.SelectSubset<T, carrito_cursoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$carrito_cursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends carrito_cursoCreateArgs>(args: Prisma.SelectSubset<T, carrito_cursoCreateArgs<ExtArgs>>): Prisma.Prisma__carrito_cursoClient<runtime.Types.Result.GetResult<Prisma.$carrito_cursoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends carrito_cursoCreateManyArgs>(args?: Prisma.SelectSubset<T, carrito_cursoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends carrito_cursoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, carrito_cursoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$carrito_cursoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends carrito_cursoDeleteArgs>(args: Prisma.SelectSubset<T, carrito_cursoDeleteArgs<ExtArgs>>): Prisma.Prisma__carrito_cursoClient<runtime.Types.Result.GetResult<Prisma.$carrito_cursoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends carrito_cursoUpdateArgs>(args: Prisma.SelectSubset<T, carrito_cursoUpdateArgs<ExtArgs>>): Prisma.Prisma__carrito_cursoClient<runtime.Types.Result.GetResult<Prisma.$carrito_cursoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends carrito_cursoDeleteManyArgs>(args?: Prisma.SelectSubset<T, carrito_cursoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends carrito_cursoUpdateManyArgs>(args: Prisma.SelectSubset<T, carrito_cursoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends carrito_cursoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, carrito_cursoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$carrito_cursoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends carrito_cursoUpsertArgs>(args: Prisma.SelectSubset<T, carrito_cursoUpsertArgs<ExtArgs>>): Prisma.Prisma__carrito_cursoClient<runtime.Types.Result.GetResult<Prisma.$carrito_cursoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends carrito_cursoCountArgs>(args?: Prisma.Subset<T, carrito_cursoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Carrito_cursoCountAggregateOutputType> : number>;
    aggregate<T extends Carrito_cursoAggregateArgs>(args: Prisma.Subset<T, Carrito_cursoAggregateArgs>): Prisma.PrismaPromise<GetCarrito_cursoAggregateType<T>>;
    groupBy<T extends carrito_cursoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: carrito_cursoGroupByArgs['orderBy'];
    } : {
        orderBy?: carrito_cursoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, carrito_cursoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarrito_cursoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: carrito_cursoFieldRefs;
}
export interface Prisma__carrito_cursoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    carrito<T extends Prisma.carrito_curso$carritoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.carrito_curso$carritoArgs<ExtArgs>>): Prisma.Prisma__carritoClient<runtime.Types.Result.GetResult<Prisma.$carritoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    curso<T extends Prisma.carrito_curso$cursoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.carrito_curso$cursoArgs<ExtArgs>>): Prisma.Prisma__cursoClient<runtime.Types.Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface carrito_cursoFieldRefs {
    readonly id: Prisma.FieldRef<"carrito_curso", 'Int'>;
    readonly carrito_id: Prisma.FieldRef<"carrito_curso", 'Int'>;
    readonly curso_id: Prisma.FieldRef<"carrito_curso", 'Int'>;
}
export type carrito_cursoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carrito_cursoSelect<ExtArgs> | null;
    omit?: Prisma.carrito_cursoOmit<ExtArgs> | null;
    include?: Prisma.carrito_cursoInclude<ExtArgs> | null;
    where: Prisma.carrito_cursoWhereUniqueInput;
};
export type carrito_cursoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carrito_cursoSelect<ExtArgs> | null;
    omit?: Prisma.carrito_cursoOmit<ExtArgs> | null;
    include?: Prisma.carrito_cursoInclude<ExtArgs> | null;
    where: Prisma.carrito_cursoWhereUniqueInput;
};
export type carrito_cursoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type carrito_cursoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type carrito_cursoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type carrito_cursoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carrito_cursoSelect<ExtArgs> | null;
    omit?: Prisma.carrito_cursoOmit<ExtArgs> | null;
    include?: Prisma.carrito_cursoInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.carrito_cursoCreateInput, Prisma.carrito_cursoUncheckedCreateInput>;
};
export type carrito_cursoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.carrito_cursoCreateManyInput | Prisma.carrito_cursoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type carrito_cursoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carrito_cursoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.carrito_cursoOmit<ExtArgs> | null;
    data: Prisma.carrito_cursoCreateManyInput | Prisma.carrito_cursoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.carrito_cursoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type carrito_cursoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carrito_cursoSelect<ExtArgs> | null;
    omit?: Prisma.carrito_cursoOmit<ExtArgs> | null;
    include?: Prisma.carrito_cursoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.carrito_cursoUpdateInput, Prisma.carrito_cursoUncheckedUpdateInput>;
    where: Prisma.carrito_cursoWhereUniqueInput;
};
export type carrito_cursoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.carrito_cursoUpdateManyMutationInput, Prisma.carrito_cursoUncheckedUpdateManyInput>;
    where?: Prisma.carrito_cursoWhereInput;
    limit?: number;
};
export type carrito_cursoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carrito_cursoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.carrito_cursoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.carrito_cursoUpdateManyMutationInput, Prisma.carrito_cursoUncheckedUpdateManyInput>;
    where?: Prisma.carrito_cursoWhereInput;
    limit?: number;
    include?: Prisma.carrito_cursoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type carrito_cursoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carrito_cursoSelect<ExtArgs> | null;
    omit?: Prisma.carrito_cursoOmit<ExtArgs> | null;
    include?: Prisma.carrito_cursoInclude<ExtArgs> | null;
    where: Prisma.carrito_cursoWhereUniqueInput;
    create: Prisma.XOR<Prisma.carrito_cursoCreateInput, Prisma.carrito_cursoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.carrito_cursoUpdateInput, Prisma.carrito_cursoUncheckedUpdateInput>;
};
export type carrito_cursoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carrito_cursoSelect<ExtArgs> | null;
    omit?: Prisma.carrito_cursoOmit<ExtArgs> | null;
    include?: Prisma.carrito_cursoInclude<ExtArgs> | null;
    where: Prisma.carrito_cursoWhereUniqueInput;
};
export type carrito_cursoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.carrito_cursoWhereInput;
    limit?: number;
};
export type carrito_curso$carritoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carritoSelect<ExtArgs> | null;
    omit?: Prisma.carritoOmit<ExtArgs> | null;
    include?: Prisma.carritoInclude<ExtArgs> | null;
    where?: Prisma.carritoWhereInput;
};
export type carrito_curso$cursoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cursoSelect<ExtArgs> | null;
    omit?: Prisma.cursoOmit<ExtArgs> | null;
    include?: Prisma.cursoInclude<ExtArgs> | null;
    where?: Prisma.cursoWhereInput;
};
export type carrito_cursoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carrito_cursoSelect<ExtArgs> | null;
    omit?: Prisma.carrito_cursoOmit<ExtArgs> | null;
    include?: Prisma.carrito_cursoInclude<ExtArgs> | null;
};
