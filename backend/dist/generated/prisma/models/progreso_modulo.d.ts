import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type progreso_moduloModel = runtime.Types.Result.DefaultSelection<Prisma.$progreso_moduloPayload>;
export type AggregateProgreso_modulo = {
    _count: Progreso_moduloCountAggregateOutputType | null;
    _avg: Progreso_moduloAvgAggregateOutputType | null;
    _sum: Progreso_moduloSumAggregateOutputType | null;
    _min: Progreso_moduloMinAggregateOutputType | null;
    _max: Progreso_moduloMaxAggregateOutputType | null;
};
export type Progreso_moduloAvgAggregateOutputType = {
    id: number | null;
    aprendiz_id: number | null;
    modulo_id: number | null;
};
export type Progreso_moduloSumAggregateOutputType = {
    id: number | null;
    aprendiz_id: number | null;
    modulo_id: number | null;
};
export type Progreso_moduloMinAggregateOutputType = {
    id: number | null;
    aprendiz_id: number | null;
    modulo_id: number | null;
    completado: boolean | null;
};
export type Progreso_moduloMaxAggregateOutputType = {
    id: number | null;
    aprendiz_id: number | null;
    modulo_id: number | null;
    completado: boolean | null;
};
export type Progreso_moduloCountAggregateOutputType = {
    id: number;
    aprendiz_id: number;
    modulo_id: number;
    completado: number;
    _all: number;
};
export type Progreso_moduloAvgAggregateInputType = {
    id?: true;
    aprendiz_id?: true;
    modulo_id?: true;
};
export type Progreso_moduloSumAggregateInputType = {
    id?: true;
    aprendiz_id?: true;
    modulo_id?: true;
};
export type Progreso_moduloMinAggregateInputType = {
    id?: true;
    aprendiz_id?: true;
    modulo_id?: true;
    completado?: true;
};
export type Progreso_moduloMaxAggregateInputType = {
    id?: true;
    aprendiz_id?: true;
    modulo_id?: true;
    completado?: true;
};
export type Progreso_moduloCountAggregateInputType = {
    id?: true;
    aprendiz_id?: true;
    modulo_id?: true;
    completado?: true;
    _all?: true;
};
export type Progreso_moduloAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.progreso_moduloWhereInput;
    orderBy?: Prisma.progreso_moduloOrderByWithRelationInput | Prisma.progreso_moduloOrderByWithRelationInput[];
    cursor?: Prisma.progreso_moduloWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Progreso_moduloCountAggregateInputType;
    _avg?: Progreso_moduloAvgAggregateInputType;
    _sum?: Progreso_moduloSumAggregateInputType;
    _min?: Progreso_moduloMinAggregateInputType;
    _max?: Progreso_moduloMaxAggregateInputType;
};
export type GetProgreso_moduloAggregateType<T extends Progreso_moduloAggregateArgs> = {
    [P in keyof T & keyof AggregateProgreso_modulo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateProgreso_modulo[P]> : Prisma.GetScalarType<T[P], AggregateProgreso_modulo[P]>;
};
export type progreso_moduloGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.progreso_moduloWhereInput;
    orderBy?: Prisma.progreso_moduloOrderByWithAggregationInput | Prisma.progreso_moduloOrderByWithAggregationInput[];
    by: Prisma.Progreso_moduloScalarFieldEnum[] | Prisma.Progreso_moduloScalarFieldEnum;
    having?: Prisma.progreso_moduloScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Progreso_moduloCountAggregateInputType | true;
    _avg?: Progreso_moduloAvgAggregateInputType;
    _sum?: Progreso_moduloSumAggregateInputType;
    _min?: Progreso_moduloMinAggregateInputType;
    _max?: Progreso_moduloMaxAggregateInputType;
};
export type Progreso_moduloGroupByOutputType = {
    id: number;
    aprendiz_id: number | null;
    modulo_id: number | null;
    completado: boolean | null;
    _count: Progreso_moduloCountAggregateOutputType | null;
    _avg: Progreso_moduloAvgAggregateOutputType | null;
    _sum: Progreso_moduloSumAggregateOutputType | null;
    _min: Progreso_moduloMinAggregateOutputType | null;
    _max: Progreso_moduloMaxAggregateOutputType | null;
};
export type GetProgreso_moduloGroupByPayload<T extends progreso_moduloGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Progreso_moduloGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Progreso_moduloGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Progreso_moduloGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Progreso_moduloGroupByOutputType[P]>;
}>>;
export type progreso_moduloWhereInput = {
    AND?: Prisma.progreso_moduloWhereInput | Prisma.progreso_moduloWhereInput[];
    OR?: Prisma.progreso_moduloWhereInput[];
    NOT?: Prisma.progreso_moduloWhereInput | Prisma.progreso_moduloWhereInput[];
    id?: Prisma.IntFilter<"progreso_modulo"> | number;
    aprendiz_id?: Prisma.IntNullableFilter<"progreso_modulo"> | number | null;
    modulo_id?: Prisma.IntNullableFilter<"progreso_modulo"> | number | null;
    completado?: Prisma.BoolNullableFilter<"progreso_modulo"> | boolean | null;
    aprendiz?: Prisma.XOR<Prisma.AprendizNullableScalarRelationFilter, Prisma.aprendizWhereInput> | null;
    modulo?: Prisma.XOR<Prisma.ModuloNullableScalarRelationFilter, Prisma.moduloWhereInput> | null;
};
export type progreso_moduloOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    aprendiz_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    modulo_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    completado?: Prisma.SortOrderInput | Prisma.SortOrder;
    aprendiz?: Prisma.aprendizOrderByWithRelationInput;
    modulo?: Prisma.moduloOrderByWithRelationInput;
};
export type progreso_moduloWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.progreso_moduloWhereInput | Prisma.progreso_moduloWhereInput[];
    OR?: Prisma.progreso_moduloWhereInput[];
    NOT?: Prisma.progreso_moduloWhereInput | Prisma.progreso_moduloWhereInput[];
    aprendiz_id?: Prisma.IntNullableFilter<"progreso_modulo"> | number | null;
    modulo_id?: Prisma.IntNullableFilter<"progreso_modulo"> | number | null;
    completado?: Prisma.BoolNullableFilter<"progreso_modulo"> | boolean | null;
    aprendiz?: Prisma.XOR<Prisma.AprendizNullableScalarRelationFilter, Prisma.aprendizWhereInput> | null;
    modulo?: Prisma.XOR<Prisma.ModuloNullableScalarRelationFilter, Prisma.moduloWhereInput> | null;
}, "id">;
export type progreso_moduloOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    aprendiz_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    modulo_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    completado?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.progreso_moduloCountOrderByAggregateInput;
    _avg?: Prisma.progreso_moduloAvgOrderByAggregateInput;
    _max?: Prisma.progreso_moduloMaxOrderByAggregateInput;
    _min?: Prisma.progreso_moduloMinOrderByAggregateInput;
    _sum?: Prisma.progreso_moduloSumOrderByAggregateInput;
};
export type progreso_moduloScalarWhereWithAggregatesInput = {
    AND?: Prisma.progreso_moduloScalarWhereWithAggregatesInput | Prisma.progreso_moduloScalarWhereWithAggregatesInput[];
    OR?: Prisma.progreso_moduloScalarWhereWithAggregatesInput[];
    NOT?: Prisma.progreso_moduloScalarWhereWithAggregatesInput | Prisma.progreso_moduloScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"progreso_modulo"> | number;
    aprendiz_id?: Prisma.IntNullableWithAggregatesFilter<"progreso_modulo"> | number | null;
    modulo_id?: Prisma.IntNullableWithAggregatesFilter<"progreso_modulo"> | number | null;
    completado?: Prisma.BoolNullableWithAggregatesFilter<"progreso_modulo"> | boolean | null;
};
export type progreso_moduloCreateInput = {
    completado?: boolean | null;
    aprendiz?: Prisma.aprendizCreateNestedOneWithoutProgreso_moduloInput;
    modulo?: Prisma.moduloCreateNestedOneWithoutProgreso_moduloInput;
};
export type progreso_moduloUncheckedCreateInput = {
    id?: number;
    aprendiz_id?: number | null;
    modulo_id?: number | null;
    completado?: boolean | null;
};
export type progreso_moduloUpdateInput = {
    completado?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    aprendiz?: Prisma.aprendizUpdateOneWithoutProgreso_moduloNestedInput;
    modulo?: Prisma.moduloUpdateOneWithoutProgreso_moduloNestedInput;
};
export type progreso_moduloUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    aprendiz_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    modulo_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    completado?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type progreso_moduloCreateManyInput = {
    id?: number;
    aprendiz_id?: number | null;
    modulo_id?: number | null;
    completado?: boolean | null;
};
export type progreso_moduloUpdateManyMutationInput = {
    completado?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type progreso_moduloUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    aprendiz_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    modulo_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    completado?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type Progreso_moduloListRelationFilter = {
    every?: Prisma.progreso_moduloWhereInput;
    some?: Prisma.progreso_moduloWhereInput;
    none?: Prisma.progreso_moduloWhereInput;
};
export type progreso_moduloOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type progreso_moduloCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    aprendiz_id?: Prisma.SortOrder;
    modulo_id?: Prisma.SortOrder;
    completado?: Prisma.SortOrder;
};
export type progreso_moduloAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    aprendiz_id?: Prisma.SortOrder;
    modulo_id?: Prisma.SortOrder;
};
export type progreso_moduloMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    aprendiz_id?: Prisma.SortOrder;
    modulo_id?: Prisma.SortOrder;
    completado?: Prisma.SortOrder;
};
export type progreso_moduloMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    aprendiz_id?: Prisma.SortOrder;
    modulo_id?: Prisma.SortOrder;
    completado?: Prisma.SortOrder;
};
export type progreso_moduloSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    aprendiz_id?: Prisma.SortOrder;
    modulo_id?: Prisma.SortOrder;
};
export type progreso_moduloCreateNestedManyWithoutAprendizInput = {
    create?: Prisma.XOR<Prisma.progreso_moduloCreateWithoutAprendizInput, Prisma.progreso_moduloUncheckedCreateWithoutAprendizInput> | Prisma.progreso_moduloCreateWithoutAprendizInput[] | Prisma.progreso_moduloUncheckedCreateWithoutAprendizInput[];
    connectOrCreate?: Prisma.progreso_moduloCreateOrConnectWithoutAprendizInput | Prisma.progreso_moduloCreateOrConnectWithoutAprendizInput[];
    createMany?: Prisma.progreso_moduloCreateManyAprendizInputEnvelope;
    connect?: Prisma.progreso_moduloWhereUniqueInput | Prisma.progreso_moduloWhereUniqueInput[];
};
export type progreso_moduloUncheckedCreateNestedManyWithoutAprendizInput = {
    create?: Prisma.XOR<Prisma.progreso_moduloCreateWithoutAprendizInput, Prisma.progreso_moduloUncheckedCreateWithoutAprendizInput> | Prisma.progreso_moduloCreateWithoutAprendizInput[] | Prisma.progreso_moduloUncheckedCreateWithoutAprendizInput[];
    connectOrCreate?: Prisma.progreso_moduloCreateOrConnectWithoutAprendizInput | Prisma.progreso_moduloCreateOrConnectWithoutAprendizInput[];
    createMany?: Prisma.progreso_moduloCreateManyAprendizInputEnvelope;
    connect?: Prisma.progreso_moduloWhereUniqueInput | Prisma.progreso_moduloWhereUniqueInput[];
};
export type progreso_moduloUpdateManyWithoutAprendizNestedInput = {
    create?: Prisma.XOR<Prisma.progreso_moduloCreateWithoutAprendizInput, Prisma.progreso_moduloUncheckedCreateWithoutAprendizInput> | Prisma.progreso_moduloCreateWithoutAprendizInput[] | Prisma.progreso_moduloUncheckedCreateWithoutAprendizInput[];
    connectOrCreate?: Prisma.progreso_moduloCreateOrConnectWithoutAprendizInput | Prisma.progreso_moduloCreateOrConnectWithoutAprendizInput[];
    upsert?: Prisma.progreso_moduloUpsertWithWhereUniqueWithoutAprendizInput | Prisma.progreso_moduloUpsertWithWhereUniqueWithoutAprendizInput[];
    createMany?: Prisma.progreso_moduloCreateManyAprendizInputEnvelope;
    set?: Prisma.progreso_moduloWhereUniqueInput | Prisma.progreso_moduloWhereUniqueInput[];
    disconnect?: Prisma.progreso_moduloWhereUniqueInput | Prisma.progreso_moduloWhereUniqueInput[];
    delete?: Prisma.progreso_moduloWhereUniqueInput | Prisma.progreso_moduloWhereUniqueInput[];
    connect?: Prisma.progreso_moduloWhereUniqueInput | Prisma.progreso_moduloWhereUniqueInput[];
    update?: Prisma.progreso_moduloUpdateWithWhereUniqueWithoutAprendizInput | Prisma.progreso_moduloUpdateWithWhereUniqueWithoutAprendizInput[];
    updateMany?: Prisma.progreso_moduloUpdateManyWithWhereWithoutAprendizInput | Prisma.progreso_moduloUpdateManyWithWhereWithoutAprendizInput[];
    deleteMany?: Prisma.progreso_moduloScalarWhereInput | Prisma.progreso_moduloScalarWhereInput[];
};
export type progreso_moduloUncheckedUpdateManyWithoutAprendizNestedInput = {
    create?: Prisma.XOR<Prisma.progreso_moduloCreateWithoutAprendizInput, Prisma.progreso_moduloUncheckedCreateWithoutAprendizInput> | Prisma.progreso_moduloCreateWithoutAprendizInput[] | Prisma.progreso_moduloUncheckedCreateWithoutAprendizInput[];
    connectOrCreate?: Prisma.progreso_moduloCreateOrConnectWithoutAprendizInput | Prisma.progreso_moduloCreateOrConnectWithoutAprendizInput[];
    upsert?: Prisma.progreso_moduloUpsertWithWhereUniqueWithoutAprendizInput | Prisma.progreso_moduloUpsertWithWhereUniqueWithoutAprendizInput[];
    createMany?: Prisma.progreso_moduloCreateManyAprendizInputEnvelope;
    set?: Prisma.progreso_moduloWhereUniqueInput | Prisma.progreso_moduloWhereUniqueInput[];
    disconnect?: Prisma.progreso_moduloWhereUniqueInput | Prisma.progreso_moduloWhereUniqueInput[];
    delete?: Prisma.progreso_moduloWhereUniqueInput | Prisma.progreso_moduloWhereUniqueInput[];
    connect?: Prisma.progreso_moduloWhereUniqueInput | Prisma.progreso_moduloWhereUniqueInput[];
    update?: Prisma.progreso_moduloUpdateWithWhereUniqueWithoutAprendizInput | Prisma.progreso_moduloUpdateWithWhereUniqueWithoutAprendizInput[];
    updateMany?: Prisma.progreso_moduloUpdateManyWithWhereWithoutAprendizInput | Prisma.progreso_moduloUpdateManyWithWhereWithoutAprendizInput[];
    deleteMany?: Prisma.progreso_moduloScalarWhereInput | Prisma.progreso_moduloScalarWhereInput[];
};
export type progreso_moduloCreateNestedManyWithoutModuloInput = {
    create?: Prisma.XOR<Prisma.progreso_moduloCreateWithoutModuloInput, Prisma.progreso_moduloUncheckedCreateWithoutModuloInput> | Prisma.progreso_moduloCreateWithoutModuloInput[] | Prisma.progreso_moduloUncheckedCreateWithoutModuloInput[];
    connectOrCreate?: Prisma.progreso_moduloCreateOrConnectWithoutModuloInput | Prisma.progreso_moduloCreateOrConnectWithoutModuloInput[];
    createMany?: Prisma.progreso_moduloCreateManyModuloInputEnvelope;
    connect?: Prisma.progreso_moduloWhereUniqueInput | Prisma.progreso_moduloWhereUniqueInput[];
};
export type progreso_moduloUncheckedCreateNestedManyWithoutModuloInput = {
    create?: Prisma.XOR<Prisma.progreso_moduloCreateWithoutModuloInput, Prisma.progreso_moduloUncheckedCreateWithoutModuloInput> | Prisma.progreso_moduloCreateWithoutModuloInput[] | Prisma.progreso_moduloUncheckedCreateWithoutModuloInput[];
    connectOrCreate?: Prisma.progreso_moduloCreateOrConnectWithoutModuloInput | Prisma.progreso_moduloCreateOrConnectWithoutModuloInput[];
    createMany?: Prisma.progreso_moduloCreateManyModuloInputEnvelope;
    connect?: Prisma.progreso_moduloWhereUniqueInput | Prisma.progreso_moduloWhereUniqueInput[];
};
export type progreso_moduloUpdateManyWithoutModuloNestedInput = {
    create?: Prisma.XOR<Prisma.progreso_moduloCreateWithoutModuloInput, Prisma.progreso_moduloUncheckedCreateWithoutModuloInput> | Prisma.progreso_moduloCreateWithoutModuloInput[] | Prisma.progreso_moduloUncheckedCreateWithoutModuloInput[];
    connectOrCreate?: Prisma.progreso_moduloCreateOrConnectWithoutModuloInput | Prisma.progreso_moduloCreateOrConnectWithoutModuloInput[];
    upsert?: Prisma.progreso_moduloUpsertWithWhereUniqueWithoutModuloInput | Prisma.progreso_moduloUpsertWithWhereUniqueWithoutModuloInput[];
    createMany?: Prisma.progreso_moduloCreateManyModuloInputEnvelope;
    set?: Prisma.progreso_moduloWhereUniqueInput | Prisma.progreso_moduloWhereUniqueInput[];
    disconnect?: Prisma.progreso_moduloWhereUniqueInput | Prisma.progreso_moduloWhereUniqueInput[];
    delete?: Prisma.progreso_moduloWhereUniqueInput | Prisma.progreso_moduloWhereUniqueInput[];
    connect?: Prisma.progreso_moduloWhereUniqueInput | Prisma.progreso_moduloWhereUniqueInput[];
    update?: Prisma.progreso_moduloUpdateWithWhereUniqueWithoutModuloInput | Prisma.progreso_moduloUpdateWithWhereUniqueWithoutModuloInput[];
    updateMany?: Prisma.progreso_moduloUpdateManyWithWhereWithoutModuloInput | Prisma.progreso_moduloUpdateManyWithWhereWithoutModuloInput[];
    deleteMany?: Prisma.progreso_moduloScalarWhereInput | Prisma.progreso_moduloScalarWhereInput[];
};
export type progreso_moduloUncheckedUpdateManyWithoutModuloNestedInput = {
    create?: Prisma.XOR<Prisma.progreso_moduloCreateWithoutModuloInput, Prisma.progreso_moduloUncheckedCreateWithoutModuloInput> | Prisma.progreso_moduloCreateWithoutModuloInput[] | Prisma.progreso_moduloUncheckedCreateWithoutModuloInput[];
    connectOrCreate?: Prisma.progreso_moduloCreateOrConnectWithoutModuloInput | Prisma.progreso_moduloCreateOrConnectWithoutModuloInput[];
    upsert?: Prisma.progreso_moduloUpsertWithWhereUniqueWithoutModuloInput | Prisma.progreso_moduloUpsertWithWhereUniqueWithoutModuloInput[];
    createMany?: Prisma.progreso_moduloCreateManyModuloInputEnvelope;
    set?: Prisma.progreso_moduloWhereUniqueInput | Prisma.progreso_moduloWhereUniqueInput[];
    disconnect?: Prisma.progreso_moduloWhereUniqueInput | Prisma.progreso_moduloWhereUniqueInput[];
    delete?: Prisma.progreso_moduloWhereUniqueInput | Prisma.progreso_moduloWhereUniqueInput[];
    connect?: Prisma.progreso_moduloWhereUniqueInput | Prisma.progreso_moduloWhereUniqueInput[];
    update?: Prisma.progreso_moduloUpdateWithWhereUniqueWithoutModuloInput | Prisma.progreso_moduloUpdateWithWhereUniqueWithoutModuloInput[];
    updateMany?: Prisma.progreso_moduloUpdateManyWithWhereWithoutModuloInput | Prisma.progreso_moduloUpdateManyWithWhereWithoutModuloInput[];
    deleteMany?: Prisma.progreso_moduloScalarWhereInput | Prisma.progreso_moduloScalarWhereInput[];
};
export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null;
};
export type progreso_moduloCreateWithoutAprendizInput = {
    completado?: boolean | null;
    modulo?: Prisma.moduloCreateNestedOneWithoutProgreso_moduloInput;
};
export type progreso_moduloUncheckedCreateWithoutAprendizInput = {
    id?: number;
    modulo_id?: number | null;
    completado?: boolean | null;
};
export type progreso_moduloCreateOrConnectWithoutAprendizInput = {
    where: Prisma.progreso_moduloWhereUniqueInput;
    create: Prisma.XOR<Prisma.progreso_moduloCreateWithoutAprendizInput, Prisma.progreso_moduloUncheckedCreateWithoutAprendizInput>;
};
export type progreso_moduloCreateManyAprendizInputEnvelope = {
    data: Prisma.progreso_moduloCreateManyAprendizInput | Prisma.progreso_moduloCreateManyAprendizInput[];
    skipDuplicates?: boolean;
};
export type progreso_moduloUpsertWithWhereUniqueWithoutAprendizInput = {
    where: Prisma.progreso_moduloWhereUniqueInput;
    update: Prisma.XOR<Prisma.progreso_moduloUpdateWithoutAprendizInput, Prisma.progreso_moduloUncheckedUpdateWithoutAprendizInput>;
    create: Prisma.XOR<Prisma.progreso_moduloCreateWithoutAprendizInput, Prisma.progreso_moduloUncheckedCreateWithoutAprendizInput>;
};
export type progreso_moduloUpdateWithWhereUniqueWithoutAprendizInput = {
    where: Prisma.progreso_moduloWhereUniqueInput;
    data: Prisma.XOR<Prisma.progreso_moduloUpdateWithoutAprendizInput, Prisma.progreso_moduloUncheckedUpdateWithoutAprendizInput>;
};
export type progreso_moduloUpdateManyWithWhereWithoutAprendizInput = {
    where: Prisma.progreso_moduloScalarWhereInput;
    data: Prisma.XOR<Prisma.progreso_moduloUpdateManyMutationInput, Prisma.progreso_moduloUncheckedUpdateManyWithoutAprendizInput>;
};
export type progreso_moduloScalarWhereInput = {
    AND?: Prisma.progreso_moduloScalarWhereInput | Prisma.progreso_moduloScalarWhereInput[];
    OR?: Prisma.progreso_moduloScalarWhereInput[];
    NOT?: Prisma.progreso_moduloScalarWhereInput | Prisma.progreso_moduloScalarWhereInput[];
    id?: Prisma.IntFilter<"progreso_modulo"> | number;
    aprendiz_id?: Prisma.IntNullableFilter<"progreso_modulo"> | number | null;
    modulo_id?: Prisma.IntNullableFilter<"progreso_modulo"> | number | null;
    completado?: Prisma.BoolNullableFilter<"progreso_modulo"> | boolean | null;
};
export type progreso_moduloCreateWithoutModuloInput = {
    completado?: boolean | null;
    aprendiz?: Prisma.aprendizCreateNestedOneWithoutProgreso_moduloInput;
};
export type progreso_moduloUncheckedCreateWithoutModuloInput = {
    id?: number;
    aprendiz_id?: number | null;
    completado?: boolean | null;
};
export type progreso_moduloCreateOrConnectWithoutModuloInput = {
    where: Prisma.progreso_moduloWhereUniqueInput;
    create: Prisma.XOR<Prisma.progreso_moduloCreateWithoutModuloInput, Prisma.progreso_moduloUncheckedCreateWithoutModuloInput>;
};
export type progreso_moduloCreateManyModuloInputEnvelope = {
    data: Prisma.progreso_moduloCreateManyModuloInput | Prisma.progreso_moduloCreateManyModuloInput[];
    skipDuplicates?: boolean;
};
export type progreso_moduloUpsertWithWhereUniqueWithoutModuloInput = {
    where: Prisma.progreso_moduloWhereUniqueInput;
    update: Prisma.XOR<Prisma.progreso_moduloUpdateWithoutModuloInput, Prisma.progreso_moduloUncheckedUpdateWithoutModuloInput>;
    create: Prisma.XOR<Prisma.progreso_moduloCreateWithoutModuloInput, Prisma.progreso_moduloUncheckedCreateWithoutModuloInput>;
};
export type progreso_moduloUpdateWithWhereUniqueWithoutModuloInput = {
    where: Prisma.progreso_moduloWhereUniqueInput;
    data: Prisma.XOR<Prisma.progreso_moduloUpdateWithoutModuloInput, Prisma.progreso_moduloUncheckedUpdateWithoutModuloInput>;
};
export type progreso_moduloUpdateManyWithWhereWithoutModuloInput = {
    where: Prisma.progreso_moduloScalarWhereInput;
    data: Prisma.XOR<Prisma.progreso_moduloUpdateManyMutationInput, Prisma.progreso_moduloUncheckedUpdateManyWithoutModuloInput>;
};
export type progreso_moduloCreateManyAprendizInput = {
    id?: number;
    modulo_id?: number | null;
    completado?: boolean | null;
};
export type progreso_moduloUpdateWithoutAprendizInput = {
    completado?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    modulo?: Prisma.moduloUpdateOneWithoutProgreso_moduloNestedInput;
};
export type progreso_moduloUncheckedUpdateWithoutAprendizInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    modulo_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    completado?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type progreso_moduloUncheckedUpdateManyWithoutAprendizInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    modulo_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    completado?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type progreso_moduloCreateManyModuloInput = {
    id?: number;
    aprendiz_id?: number | null;
    completado?: boolean | null;
};
export type progreso_moduloUpdateWithoutModuloInput = {
    completado?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    aprendiz?: Prisma.aprendizUpdateOneWithoutProgreso_moduloNestedInput;
};
export type progreso_moduloUncheckedUpdateWithoutModuloInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    aprendiz_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    completado?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type progreso_moduloUncheckedUpdateManyWithoutModuloInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    aprendiz_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    completado?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
};
export type progreso_moduloSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    aprendiz_id?: boolean;
    modulo_id?: boolean;
    completado?: boolean;
    aprendiz?: boolean | Prisma.progreso_modulo$aprendizArgs<ExtArgs>;
    modulo?: boolean | Prisma.progreso_modulo$moduloArgs<ExtArgs>;
}, ExtArgs["result"]["progreso_modulo"]>;
export type progreso_moduloSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    aprendiz_id?: boolean;
    modulo_id?: boolean;
    completado?: boolean;
    aprendiz?: boolean | Prisma.progreso_modulo$aprendizArgs<ExtArgs>;
    modulo?: boolean | Prisma.progreso_modulo$moduloArgs<ExtArgs>;
}, ExtArgs["result"]["progreso_modulo"]>;
export type progreso_moduloSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    aprendiz_id?: boolean;
    modulo_id?: boolean;
    completado?: boolean;
    aprendiz?: boolean | Prisma.progreso_modulo$aprendizArgs<ExtArgs>;
    modulo?: boolean | Prisma.progreso_modulo$moduloArgs<ExtArgs>;
}, ExtArgs["result"]["progreso_modulo"]>;
export type progreso_moduloSelectScalar = {
    id?: boolean;
    aprendiz_id?: boolean;
    modulo_id?: boolean;
    completado?: boolean;
};
export type progreso_moduloOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "aprendiz_id" | "modulo_id" | "completado", ExtArgs["result"]["progreso_modulo"]>;
export type progreso_moduloInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    aprendiz?: boolean | Prisma.progreso_modulo$aprendizArgs<ExtArgs>;
    modulo?: boolean | Prisma.progreso_modulo$moduloArgs<ExtArgs>;
};
export type progreso_moduloIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    aprendiz?: boolean | Prisma.progreso_modulo$aprendizArgs<ExtArgs>;
    modulo?: boolean | Prisma.progreso_modulo$moduloArgs<ExtArgs>;
};
export type progreso_moduloIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    aprendiz?: boolean | Prisma.progreso_modulo$aprendizArgs<ExtArgs>;
    modulo?: boolean | Prisma.progreso_modulo$moduloArgs<ExtArgs>;
};
export type $progreso_moduloPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "progreso_modulo";
    objects: {
        aprendiz: Prisma.$aprendizPayload<ExtArgs> | null;
        modulo: Prisma.$moduloPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        aprendiz_id: number | null;
        modulo_id: number | null;
        completado: boolean | null;
    }, ExtArgs["result"]["progreso_modulo"]>;
    composites: {};
};
export type progreso_moduloGetPayload<S extends boolean | null | undefined | progreso_moduloDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$progreso_moduloPayload, S>;
export type progreso_moduloCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<progreso_moduloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Progreso_moduloCountAggregateInputType | true;
};
export interface progreso_moduloDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['progreso_modulo'];
        meta: {
            name: 'progreso_modulo';
        };
    };
    findUnique<T extends progreso_moduloFindUniqueArgs>(args: Prisma.SelectSubset<T, progreso_moduloFindUniqueArgs<ExtArgs>>): Prisma.Prisma__progreso_moduloClient<runtime.Types.Result.GetResult<Prisma.$progreso_moduloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends progreso_moduloFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, progreso_moduloFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__progreso_moduloClient<runtime.Types.Result.GetResult<Prisma.$progreso_moduloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends progreso_moduloFindFirstArgs>(args?: Prisma.SelectSubset<T, progreso_moduloFindFirstArgs<ExtArgs>>): Prisma.Prisma__progreso_moduloClient<runtime.Types.Result.GetResult<Prisma.$progreso_moduloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends progreso_moduloFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, progreso_moduloFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__progreso_moduloClient<runtime.Types.Result.GetResult<Prisma.$progreso_moduloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends progreso_moduloFindManyArgs>(args?: Prisma.SelectSubset<T, progreso_moduloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$progreso_moduloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends progreso_moduloCreateArgs>(args: Prisma.SelectSubset<T, progreso_moduloCreateArgs<ExtArgs>>): Prisma.Prisma__progreso_moduloClient<runtime.Types.Result.GetResult<Prisma.$progreso_moduloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends progreso_moduloCreateManyArgs>(args?: Prisma.SelectSubset<T, progreso_moduloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends progreso_moduloCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, progreso_moduloCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$progreso_moduloPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends progreso_moduloDeleteArgs>(args: Prisma.SelectSubset<T, progreso_moduloDeleteArgs<ExtArgs>>): Prisma.Prisma__progreso_moduloClient<runtime.Types.Result.GetResult<Prisma.$progreso_moduloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends progreso_moduloUpdateArgs>(args: Prisma.SelectSubset<T, progreso_moduloUpdateArgs<ExtArgs>>): Prisma.Prisma__progreso_moduloClient<runtime.Types.Result.GetResult<Prisma.$progreso_moduloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends progreso_moduloDeleteManyArgs>(args?: Prisma.SelectSubset<T, progreso_moduloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends progreso_moduloUpdateManyArgs>(args: Prisma.SelectSubset<T, progreso_moduloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends progreso_moduloUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, progreso_moduloUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$progreso_moduloPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends progreso_moduloUpsertArgs>(args: Prisma.SelectSubset<T, progreso_moduloUpsertArgs<ExtArgs>>): Prisma.Prisma__progreso_moduloClient<runtime.Types.Result.GetResult<Prisma.$progreso_moduloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends progreso_moduloCountArgs>(args?: Prisma.Subset<T, progreso_moduloCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Progreso_moduloCountAggregateOutputType> : number>;
    aggregate<T extends Progreso_moduloAggregateArgs>(args: Prisma.Subset<T, Progreso_moduloAggregateArgs>): Prisma.PrismaPromise<GetProgreso_moduloAggregateType<T>>;
    groupBy<T extends progreso_moduloGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: progreso_moduloGroupByArgs['orderBy'];
    } : {
        orderBy?: progreso_moduloGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, progreso_moduloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProgreso_moduloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: progreso_moduloFieldRefs;
}
export interface Prisma__progreso_moduloClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    aprendiz<T extends Prisma.progreso_modulo$aprendizArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.progreso_modulo$aprendizArgs<ExtArgs>>): Prisma.Prisma__aprendizClient<runtime.Types.Result.GetResult<Prisma.$aprendizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    modulo<T extends Prisma.progreso_modulo$moduloArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.progreso_modulo$moduloArgs<ExtArgs>>): Prisma.Prisma__moduloClient<runtime.Types.Result.GetResult<Prisma.$moduloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface progreso_moduloFieldRefs {
    readonly id: Prisma.FieldRef<"progreso_modulo", 'Int'>;
    readonly aprendiz_id: Prisma.FieldRef<"progreso_modulo", 'Int'>;
    readonly modulo_id: Prisma.FieldRef<"progreso_modulo", 'Int'>;
    readonly completado: Prisma.FieldRef<"progreso_modulo", 'Boolean'>;
}
export type progreso_moduloFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progreso_moduloSelect<ExtArgs> | null;
    omit?: Prisma.progreso_moduloOmit<ExtArgs> | null;
    include?: Prisma.progreso_moduloInclude<ExtArgs> | null;
    where: Prisma.progreso_moduloWhereUniqueInput;
};
export type progreso_moduloFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progreso_moduloSelect<ExtArgs> | null;
    omit?: Prisma.progreso_moduloOmit<ExtArgs> | null;
    include?: Prisma.progreso_moduloInclude<ExtArgs> | null;
    where: Prisma.progreso_moduloWhereUniqueInput;
};
export type progreso_moduloFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progreso_moduloSelect<ExtArgs> | null;
    omit?: Prisma.progreso_moduloOmit<ExtArgs> | null;
    include?: Prisma.progreso_moduloInclude<ExtArgs> | null;
    where?: Prisma.progreso_moduloWhereInput;
    orderBy?: Prisma.progreso_moduloOrderByWithRelationInput | Prisma.progreso_moduloOrderByWithRelationInput[];
    cursor?: Prisma.progreso_moduloWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Progreso_moduloScalarFieldEnum | Prisma.Progreso_moduloScalarFieldEnum[];
};
export type progreso_moduloFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progreso_moduloSelect<ExtArgs> | null;
    omit?: Prisma.progreso_moduloOmit<ExtArgs> | null;
    include?: Prisma.progreso_moduloInclude<ExtArgs> | null;
    where?: Prisma.progreso_moduloWhereInput;
    orderBy?: Prisma.progreso_moduloOrderByWithRelationInput | Prisma.progreso_moduloOrderByWithRelationInput[];
    cursor?: Prisma.progreso_moduloWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Progreso_moduloScalarFieldEnum | Prisma.Progreso_moduloScalarFieldEnum[];
};
export type progreso_moduloFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progreso_moduloSelect<ExtArgs> | null;
    omit?: Prisma.progreso_moduloOmit<ExtArgs> | null;
    include?: Prisma.progreso_moduloInclude<ExtArgs> | null;
    where?: Prisma.progreso_moduloWhereInput;
    orderBy?: Prisma.progreso_moduloOrderByWithRelationInput | Prisma.progreso_moduloOrderByWithRelationInput[];
    cursor?: Prisma.progreso_moduloWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Progreso_moduloScalarFieldEnum | Prisma.Progreso_moduloScalarFieldEnum[];
};
export type progreso_moduloCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progreso_moduloSelect<ExtArgs> | null;
    omit?: Prisma.progreso_moduloOmit<ExtArgs> | null;
    include?: Prisma.progreso_moduloInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.progreso_moduloCreateInput, Prisma.progreso_moduloUncheckedCreateInput>;
};
export type progreso_moduloCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.progreso_moduloCreateManyInput | Prisma.progreso_moduloCreateManyInput[];
    skipDuplicates?: boolean;
};
export type progreso_moduloCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progreso_moduloSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.progreso_moduloOmit<ExtArgs> | null;
    data: Prisma.progreso_moduloCreateManyInput | Prisma.progreso_moduloCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.progreso_moduloIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type progreso_moduloUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progreso_moduloSelect<ExtArgs> | null;
    omit?: Prisma.progreso_moduloOmit<ExtArgs> | null;
    include?: Prisma.progreso_moduloInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.progreso_moduloUpdateInput, Prisma.progreso_moduloUncheckedUpdateInput>;
    where: Prisma.progreso_moduloWhereUniqueInput;
};
export type progreso_moduloUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.progreso_moduloUpdateManyMutationInput, Prisma.progreso_moduloUncheckedUpdateManyInput>;
    where?: Prisma.progreso_moduloWhereInput;
    limit?: number;
};
export type progreso_moduloUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progreso_moduloSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.progreso_moduloOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.progreso_moduloUpdateManyMutationInput, Prisma.progreso_moduloUncheckedUpdateManyInput>;
    where?: Prisma.progreso_moduloWhereInput;
    limit?: number;
    include?: Prisma.progreso_moduloIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type progreso_moduloUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progreso_moduloSelect<ExtArgs> | null;
    omit?: Prisma.progreso_moduloOmit<ExtArgs> | null;
    include?: Prisma.progreso_moduloInclude<ExtArgs> | null;
    where: Prisma.progreso_moduloWhereUniqueInput;
    create: Prisma.XOR<Prisma.progreso_moduloCreateInput, Prisma.progreso_moduloUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.progreso_moduloUpdateInput, Prisma.progreso_moduloUncheckedUpdateInput>;
};
export type progreso_moduloDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progreso_moduloSelect<ExtArgs> | null;
    omit?: Prisma.progreso_moduloOmit<ExtArgs> | null;
    include?: Prisma.progreso_moduloInclude<ExtArgs> | null;
    where: Prisma.progreso_moduloWhereUniqueInput;
};
export type progreso_moduloDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.progreso_moduloWhereInput;
    limit?: number;
};
export type progreso_modulo$aprendizArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.aprendizSelect<ExtArgs> | null;
    omit?: Prisma.aprendizOmit<ExtArgs> | null;
    include?: Prisma.aprendizInclude<ExtArgs> | null;
    where?: Prisma.aprendizWhereInput;
};
export type progreso_modulo$moduloArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.moduloSelect<ExtArgs> | null;
    omit?: Prisma.moduloOmit<ExtArgs> | null;
    include?: Prisma.moduloInclude<ExtArgs> | null;
    where?: Prisma.moduloWhereInput;
};
export type progreso_moduloDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.progreso_moduloSelect<ExtArgs> | null;
    omit?: Prisma.progreso_moduloOmit<ExtArgs> | null;
    include?: Prisma.progreso_moduloInclude<ExtArgs> | null;
};
