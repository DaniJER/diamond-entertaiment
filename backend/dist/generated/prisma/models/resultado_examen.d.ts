import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type resultado_examenModel = runtime.Types.Result.DefaultSelection<Prisma.$resultado_examenPayload>;
export type AggregateResultado_examen = {
    _count: Resultado_examenCountAggregateOutputType | null;
    _avg: Resultado_examenAvgAggregateOutputType | null;
    _sum: Resultado_examenSumAggregateOutputType | null;
    _min: Resultado_examenMinAggregateOutputType | null;
    _max: Resultado_examenMaxAggregateOutputType | null;
};
export type Resultado_examenAvgAggregateOutputType = {
    id: number | null;
    examen_id: number | null;
    aprendiz_id: number | null;
};
export type Resultado_examenSumAggregateOutputType = {
    id: number | null;
    examen_id: number | null;
    aprendiz_id: number | null;
};
export type Resultado_examenMinAggregateOutputType = {
    id: number | null;
    examen_id: number | null;
    aprendiz_id: number | null;
    aprobado: boolean | null;
    comentario: string | null;
};
export type Resultado_examenMaxAggregateOutputType = {
    id: number | null;
    examen_id: number | null;
    aprendiz_id: number | null;
    aprobado: boolean | null;
    comentario: string | null;
};
export type Resultado_examenCountAggregateOutputType = {
    id: number;
    examen_id: number;
    aprendiz_id: number;
    aprobado: number;
    comentario: number;
    _all: number;
};
export type Resultado_examenAvgAggregateInputType = {
    id?: true;
    examen_id?: true;
    aprendiz_id?: true;
};
export type Resultado_examenSumAggregateInputType = {
    id?: true;
    examen_id?: true;
    aprendiz_id?: true;
};
export type Resultado_examenMinAggregateInputType = {
    id?: true;
    examen_id?: true;
    aprendiz_id?: true;
    aprobado?: true;
    comentario?: true;
};
export type Resultado_examenMaxAggregateInputType = {
    id?: true;
    examen_id?: true;
    aprendiz_id?: true;
    aprobado?: true;
    comentario?: true;
};
export type Resultado_examenCountAggregateInputType = {
    id?: true;
    examen_id?: true;
    aprendiz_id?: true;
    aprobado?: true;
    comentario?: true;
    _all?: true;
};
export type Resultado_examenAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.resultado_examenWhereInput;
    orderBy?: Prisma.resultado_examenOrderByWithRelationInput | Prisma.resultado_examenOrderByWithRelationInput[];
    cursor?: Prisma.resultado_examenWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Resultado_examenCountAggregateInputType;
    _avg?: Resultado_examenAvgAggregateInputType;
    _sum?: Resultado_examenSumAggregateInputType;
    _min?: Resultado_examenMinAggregateInputType;
    _max?: Resultado_examenMaxAggregateInputType;
};
export type GetResultado_examenAggregateType<T extends Resultado_examenAggregateArgs> = {
    [P in keyof T & keyof AggregateResultado_examen]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateResultado_examen[P]> : Prisma.GetScalarType<T[P], AggregateResultado_examen[P]>;
};
export type resultado_examenGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.resultado_examenWhereInput;
    orderBy?: Prisma.resultado_examenOrderByWithAggregationInput | Prisma.resultado_examenOrderByWithAggregationInput[];
    by: Prisma.Resultado_examenScalarFieldEnum[] | Prisma.Resultado_examenScalarFieldEnum;
    having?: Prisma.resultado_examenScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Resultado_examenCountAggregateInputType | true;
    _avg?: Resultado_examenAvgAggregateInputType;
    _sum?: Resultado_examenSumAggregateInputType;
    _min?: Resultado_examenMinAggregateInputType;
    _max?: Resultado_examenMaxAggregateInputType;
};
export type Resultado_examenGroupByOutputType = {
    id: number;
    examen_id: number | null;
    aprendiz_id: number | null;
    aprobado: boolean | null;
    comentario: string | null;
    _count: Resultado_examenCountAggregateOutputType | null;
    _avg: Resultado_examenAvgAggregateOutputType | null;
    _sum: Resultado_examenSumAggregateOutputType | null;
    _min: Resultado_examenMinAggregateOutputType | null;
    _max: Resultado_examenMaxAggregateOutputType | null;
};
export type GetResultado_examenGroupByPayload<T extends resultado_examenGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Resultado_examenGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Resultado_examenGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Resultado_examenGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Resultado_examenGroupByOutputType[P]>;
}>>;
export type resultado_examenWhereInput = {
    AND?: Prisma.resultado_examenWhereInput | Prisma.resultado_examenWhereInput[];
    OR?: Prisma.resultado_examenWhereInput[];
    NOT?: Prisma.resultado_examenWhereInput | Prisma.resultado_examenWhereInput[];
    id?: Prisma.IntFilter<"resultado_examen"> | number;
    examen_id?: Prisma.IntNullableFilter<"resultado_examen"> | number | null;
    aprendiz_id?: Prisma.IntNullableFilter<"resultado_examen"> | number | null;
    aprobado?: Prisma.BoolNullableFilter<"resultado_examen"> | boolean | null;
    comentario?: Prisma.StringNullableFilter<"resultado_examen"> | string | null;
    aprendiz?: Prisma.XOR<Prisma.AprendizNullableScalarRelationFilter, Prisma.aprendizWhereInput> | null;
    examen_modulo?: Prisma.XOR<Prisma.Examen_moduloNullableScalarRelationFilter, Prisma.examen_moduloWhereInput> | null;
};
export type resultado_examenOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    examen_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    aprendiz_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    aprobado?: Prisma.SortOrderInput | Prisma.SortOrder;
    comentario?: Prisma.SortOrderInput | Prisma.SortOrder;
    aprendiz?: Prisma.aprendizOrderByWithRelationInput;
    examen_modulo?: Prisma.examen_moduloOrderByWithRelationInput;
};
export type resultado_examenWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.resultado_examenWhereInput | Prisma.resultado_examenWhereInput[];
    OR?: Prisma.resultado_examenWhereInput[];
    NOT?: Prisma.resultado_examenWhereInput | Prisma.resultado_examenWhereInput[];
    examen_id?: Prisma.IntNullableFilter<"resultado_examen"> | number | null;
    aprendiz_id?: Prisma.IntNullableFilter<"resultado_examen"> | number | null;
    aprobado?: Prisma.BoolNullableFilter<"resultado_examen"> | boolean | null;
    comentario?: Prisma.StringNullableFilter<"resultado_examen"> | string | null;
    aprendiz?: Prisma.XOR<Prisma.AprendizNullableScalarRelationFilter, Prisma.aprendizWhereInput> | null;
    examen_modulo?: Prisma.XOR<Prisma.Examen_moduloNullableScalarRelationFilter, Prisma.examen_moduloWhereInput> | null;
}, "id">;
export type resultado_examenOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    examen_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    aprendiz_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    aprobado?: Prisma.SortOrderInput | Prisma.SortOrder;
    comentario?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.resultado_examenCountOrderByAggregateInput;
    _avg?: Prisma.resultado_examenAvgOrderByAggregateInput;
    _max?: Prisma.resultado_examenMaxOrderByAggregateInput;
    _min?: Prisma.resultado_examenMinOrderByAggregateInput;
    _sum?: Prisma.resultado_examenSumOrderByAggregateInput;
};
export type resultado_examenScalarWhereWithAggregatesInput = {
    AND?: Prisma.resultado_examenScalarWhereWithAggregatesInput | Prisma.resultado_examenScalarWhereWithAggregatesInput[];
    OR?: Prisma.resultado_examenScalarWhereWithAggregatesInput[];
    NOT?: Prisma.resultado_examenScalarWhereWithAggregatesInput | Prisma.resultado_examenScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"resultado_examen"> | number;
    examen_id?: Prisma.IntNullableWithAggregatesFilter<"resultado_examen"> | number | null;
    aprendiz_id?: Prisma.IntNullableWithAggregatesFilter<"resultado_examen"> | number | null;
    aprobado?: Prisma.BoolNullableWithAggregatesFilter<"resultado_examen"> | boolean | null;
    comentario?: Prisma.StringNullableWithAggregatesFilter<"resultado_examen"> | string | null;
};
export type resultado_examenCreateInput = {
    aprobado?: boolean | null;
    comentario?: string | null;
    aprendiz?: Prisma.aprendizCreateNestedOneWithoutResultado_examenInput;
    examen_modulo?: Prisma.examen_moduloCreateNestedOneWithoutResultado_examenInput;
};
export type resultado_examenUncheckedCreateInput = {
    id?: number;
    examen_id?: number | null;
    aprendiz_id?: number | null;
    aprobado?: boolean | null;
    comentario?: string | null;
};
export type resultado_examenUpdateInput = {
    aprobado?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    comentario?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    aprendiz?: Prisma.aprendizUpdateOneWithoutResultado_examenNestedInput;
    examen_modulo?: Prisma.examen_moduloUpdateOneWithoutResultado_examenNestedInput;
};
export type resultado_examenUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    examen_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    aprendiz_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    aprobado?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    comentario?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type resultado_examenCreateManyInput = {
    id?: number;
    examen_id?: number | null;
    aprendiz_id?: number | null;
    aprobado?: boolean | null;
    comentario?: string | null;
};
export type resultado_examenUpdateManyMutationInput = {
    aprobado?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    comentario?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type resultado_examenUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    examen_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    aprendiz_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    aprobado?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    comentario?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type Resultado_examenListRelationFilter = {
    every?: Prisma.resultado_examenWhereInput;
    some?: Prisma.resultado_examenWhereInput;
    none?: Prisma.resultado_examenWhereInput;
};
export type resultado_examenOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type resultado_examenCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    examen_id?: Prisma.SortOrder;
    aprendiz_id?: Prisma.SortOrder;
    aprobado?: Prisma.SortOrder;
    comentario?: Prisma.SortOrder;
};
export type resultado_examenAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    examen_id?: Prisma.SortOrder;
    aprendiz_id?: Prisma.SortOrder;
};
export type resultado_examenMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    examen_id?: Prisma.SortOrder;
    aprendiz_id?: Prisma.SortOrder;
    aprobado?: Prisma.SortOrder;
    comentario?: Prisma.SortOrder;
};
export type resultado_examenMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    examen_id?: Prisma.SortOrder;
    aprendiz_id?: Prisma.SortOrder;
    aprobado?: Prisma.SortOrder;
    comentario?: Prisma.SortOrder;
};
export type resultado_examenSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    examen_id?: Prisma.SortOrder;
    aprendiz_id?: Prisma.SortOrder;
};
export type resultado_examenCreateNestedManyWithoutAprendizInput = {
    create?: Prisma.XOR<Prisma.resultado_examenCreateWithoutAprendizInput, Prisma.resultado_examenUncheckedCreateWithoutAprendizInput> | Prisma.resultado_examenCreateWithoutAprendizInput[] | Prisma.resultado_examenUncheckedCreateWithoutAprendizInput[];
    connectOrCreate?: Prisma.resultado_examenCreateOrConnectWithoutAprendizInput | Prisma.resultado_examenCreateOrConnectWithoutAprendizInput[];
    createMany?: Prisma.resultado_examenCreateManyAprendizInputEnvelope;
    connect?: Prisma.resultado_examenWhereUniqueInput | Prisma.resultado_examenWhereUniqueInput[];
};
export type resultado_examenUncheckedCreateNestedManyWithoutAprendizInput = {
    create?: Prisma.XOR<Prisma.resultado_examenCreateWithoutAprendizInput, Prisma.resultado_examenUncheckedCreateWithoutAprendizInput> | Prisma.resultado_examenCreateWithoutAprendizInput[] | Prisma.resultado_examenUncheckedCreateWithoutAprendizInput[];
    connectOrCreate?: Prisma.resultado_examenCreateOrConnectWithoutAprendizInput | Prisma.resultado_examenCreateOrConnectWithoutAprendizInput[];
    createMany?: Prisma.resultado_examenCreateManyAprendizInputEnvelope;
    connect?: Prisma.resultado_examenWhereUniqueInput | Prisma.resultado_examenWhereUniqueInput[];
};
export type resultado_examenUpdateManyWithoutAprendizNestedInput = {
    create?: Prisma.XOR<Prisma.resultado_examenCreateWithoutAprendizInput, Prisma.resultado_examenUncheckedCreateWithoutAprendizInput> | Prisma.resultado_examenCreateWithoutAprendizInput[] | Prisma.resultado_examenUncheckedCreateWithoutAprendizInput[];
    connectOrCreate?: Prisma.resultado_examenCreateOrConnectWithoutAprendizInput | Prisma.resultado_examenCreateOrConnectWithoutAprendizInput[];
    upsert?: Prisma.resultado_examenUpsertWithWhereUniqueWithoutAprendizInput | Prisma.resultado_examenUpsertWithWhereUniqueWithoutAprendizInput[];
    createMany?: Prisma.resultado_examenCreateManyAprendizInputEnvelope;
    set?: Prisma.resultado_examenWhereUniqueInput | Prisma.resultado_examenWhereUniqueInput[];
    disconnect?: Prisma.resultado_examenWhereUniqueInput | Prisma.resultado_examenWhereUniqueInput[];
    delete?: Prisma.resultado_examenWhereUniqueInput | Prisma.resultado_examenWhereUniqueInput[];
    connect?: Prisma.resultado_examenWhereUniqueInput | Prisma.resultado_examenWhereUniqueInput[];
    update?: Prisma.resultado_examenUpdateWithWhereUniqueWithoutAprendizInput | Prisma.resultado_examenUpdateWithWhereUniqueWithoutAprendizInput[];
    updateMany?: Prisma.resultado_examenUpdateManyWithWhereWithoutAprendizInput | Prisma.resultado_examenUpdateManyWithWhereWithoutAprendizInput[];
    deleteMany?: Prisma.resultado_examenScalarWhereInput | Prisma.resultado_examenScalarWhereInput[];
};
export type resultado_examenUncheckedUpdateManyWithoutAprendizNestedInput = {
    create?: Prisma.XOR<Prisma.resultado_examenCreateWithoutAprendizInput, Prisma.resultado_examenUncheckedCreateWithoutAprendizInput> | Prisma.resultado_examenCreateWithoutAprendizInput[] | Prisma.resultado_examenUncheckedCreateWithoutAprendizInput[];
    connectOrCreate?: Prisma.resultado_examenCreateOrConnectWithoutAprendizInput | Prisma.resultado_examenCreateOrConnectWithoutAprendizInput[];
    upsert?: Prisma.resultado_examenUpsertWithWhereUniqueWithoutAprendizInput | Prisma.resultado_examenUpsertWithWhereUniqueWithoutAprendizInput[];
    createMany?: Prisma.resultado_examenCreateManyAprendizInputEnvelope;
    set?: Prisma.resultado_examenWhereUniqueInput | Prisma.resultado_examenWhereUniqueInput[];
    disconnect?: Prisma.resultado_examenWhereUniqueInput | Prisma.resultado_examenWhereUniqueInput[];
    delete?: Prisma.resultado_examenWhereUniqueInput | Prisma.resultado_examenWhereUniqueInput[];
    connect?: Prisma.resultado_examenWhereUniqueInput | Prisma.resultado_examenWhereUniqueInput[];
    update?: Prisma.resultado_examenUpdateWithWhereUniqueWithoutAprendizInput | Prisma.resultado_examenUpdateWithWhereUniqueWithoutAprendizInput[];
    updateMany?: Prisma.resultado_examenUpdateManyWithWhereWithoutAprendizInput | Prisma.resultado_examenUpdateManyWithWhereWithoutAprendizInput[];
    deleteMany?: Prisma.resultado_examenScalarWhereInput | Prisma.resultado_examenScalarWhereInput[];
};
export type resultado_examenCreateNestedManyWithoutExamen_moduloInput = {
    create?: Prisma.XOR<Prisma.resultado_examenCreateWithoutExamen_moduloInput, Prisma.resultado_examenUncheckedCreateWithoutExamen_moduloInput> | Prisma.resultado_examenCreateWithoutExamen_moduloInput[] | Prisma.resultado_examenUncheckedCreateWithoutExamen_moduloInput[];
    connectOrCreate?: Prisma.resultado_examenCreateOrConnectWithoutExamen_moduloInput | Prisma.resultado_examenCreateOrConnectWithoutExamen_moduloInput[];
    createMany?: Prisma.resultado_examenCreateManyExamen_moduloInputEnvelope;
    connect?: Prisma.resultado_examenWhereUniqueInput | Prisma.resultado_examenWhereUniqueInput[];
};
export type resultado_examenUncheckedCreateNestedManyWithoutExamen_moduloInput = {
    create?: Prisma.XOR<Prisma.resultado_examenCreateWithoutExamen_moduloInput, Prisma.resultado_examenUncheckedCreateWithoutExamen_moduloInput> | Prisma.resultado_examenCreateWithoutExamen_moduloInput[] | Prisma.resultado_examenUncheckedCreateWithoutExamen_moduloInput[];
    connectOrCreate?: Prisma.resultado_examenCreateOrConnectWithoutExamen_moduloInput | Prisma.resultado_examenCreateOrConnectWithoutExamen_moduloInput[];
    createMany?: Prisma.resultado_examenCreateManyExamen_moduloInputEnvelope;
    connect?: Prisma.resultado_examenWhereUniqueInput | Prisma.resultado_examenWhereUniqueInput[];
};
export type resultado_examenUpdateManyWithoutExamen_moduloNestedInput = {
    create?: Prisma.XOR<Prisma.resultado_examenCreateWithoutExamen_moduloInput, Prisma.resultado_examenUncheckedCreateWithoutExamen_moduloInput> | Prisma.resultado_examenCreateWithoutExamen_moduloInput[] | Prisma.resultado_examenUncheckedCreateWithoutExamen_moduloInput[];
    connectOrCreate?: Prisma.resultado_examenCreateOrConnectWithoutExamen_moduloInput | Prisma.resultado_examenCreateOrConnectWithoutExamen_moduloInput[];
    upsert?: Prisma.resultado_examenUpsertWithWhereUniqueWithoutExamen_moduloInput | Prisma.resultado_examenUpsertWithWhereUniqueWithoutExamen_moduloInput[];
    createMany?: Prisma.resultado_examenCreateManyExamen_moduloInputEnvelope;
    set?: Prisma.resultado_examenWhereUniqueInput | Prisma.resultado_examenWhereUniqueInput[];
    disconnect?: Prisma.resultado_examenWhereUniqueInput | Prisma.resultado_examenWhereUniqueInput[];
    delete?: Prisma.resultado_examenWhereUniqueInput | Prisma.resultado_examenWhereUniqueInput[];
    connect?: Prisma.resultado_examenWhereUniqueInput | Prisma.resultado_examenWhereUniqueInput[];
    update?: Prisma.resultado_examenUpdateWithWhereUniqueWithoutExamen_moduloInput | Prisma.resultado_examenUpdateWithWhereUniqueWithoutExamen_moduloInput[];
    updateMany?: Prisma.resultado_examenUpdateManyWithWhereWithoutExamen_moduloInput | Prisma.resultado_examenUpdateManyWithWhereWithoutExamen_moduloInput[];
    deleteMany?: Prisma.resultado_examenScalarWhereInput | Prisma.resultado_examenScalarWhereInput[];
};
export type resultado_examenUncheckedUpdateManyWithoutExamen_moduloNestedInput = {
    create?: Prisma.XOR<Prisma.resultado_examenCreateWithoutExamen_moduloInput, Prisma.resultado_examenUncheckedCreateWithoutExamen_moduloInput> | Prisma.resultado_examenCreateWithoutExamen_moduloInput[] | Prisma.resultado_examenUncheckedCreateWithoutExamen_moduloInput[];
    connectOrCreate?: Prisma.resultado_examenCreateOrConnectWithoutExamen_moduloInput | Prisma.resultado_examenCreateOrConnectWithoutExamen_moduloInput[];
    upsert?: Prisma.resultado_examenUpsertWithWhereUniqueWithoutExamen_moduloInput | Prisma.resultado_examenUpsertWithWhereUniqueWithoutExamen_moduloInput[];
    createMany?: Prisma.resultado_examenCreateManyExamen_moduloInputEnvelope;
    set?: Prisma.resultado_examenWhereUniqueInput | Prisma.resultado_examenWhereUniqueInput[];
    disconnect?: Prisma.resultado_examenWhereUniqueInput | Prisma.resultado_examenWhereUniqueInput[];
    delete?: Prisma.resultado_examenWhereUniqueInput | Prisma.resultado_examenWhereUniqueInput[];
    connect?: Prisma.resultado_examenWhereUniqueInput | Prisma.resultado_examenWhereUniqueInput[];
    update?: Prisma.resultado_examenUpdateWithWhereUniqueWithoutExamen_moduloInput | Prisma.resultado_examenUpdateWithWhereUniqueWithoutExamen_moduloInput[];
    updateMany?: Prisma.resultado_examenUpdateManyWithWhereWithoutExamen_moduloInput | Prisma.resultado_examenUpdateManyWithWhereWithoutExamen_moduloInput[];
    deleteMany?: Prisma.resultado_examenScalarWhereInput | Prisma.resultado_examenScalarWhereInput[];
};
export type resultado_examenCreateWithoutAprendizInput = {
    aprobado?: boolean | null;
    comentario?: string | null;
    examen_modulo?: Prisma.examen_moduloCreateNestedOneWithoutResultado_examenInput;
};
export type resultado_examenUncheckedCreateWithoutAprendizInput = {
    id?: number;
    examen_id?: number | null;
    aprobado?: boolean | null;
    comentario?: string | null;
};
export type resultado_examenCreateOrConnectWithoutAprendizInput = {
    where: Prisma.resultado_examenWhereUniqueInput;
    create: Prisma.XOR<Prisma.resultado_examenCreateWithoutAprendizInput, Prisma.resultado_examenUncheckedCreateWithoutAprendizInput>;
};
export type resultado_examenCreateManyAprendizInputEnvelope = {
    data: Prisma.resultado_examenCreateManyAprendizInput | Prisma.resultado_examenCreateManyAprendizInput[];
    skipDuplicates?: boolean;
};
export type resultado_examenUpsertWithWhereUniqueWithoutAprendizInput = {
    where: Prisma.resultado_examenWhereUniqueInput;
    update: Prisma.XOR<Prisma.resultado_examenUpdateWithoutAprendizInput, Prisma.resultado_examenUncheckedUpdateWithoutAprendizInput>;
    create: Prisma.XOR<Prisma.resultado_examenCreateWithoutAprendizInput, Prisma.resultado_examenUncheckedCreateWithoutAprendizInput>;
};
export type resultado_examenUpdateWithWhereUniqueWithoutAprendizInput = {
    where: Prisma.resultado_examenWhereUniqueInput;
    data: Prisma.XOR<Prisma.resultado_examenUpdateWithoutAprendizInput, Prisma.resultado_examenUncheckedUpdateWithoutAprendizInput>;
};
export type resultado_examenUpdateManyWithWhereWithoutAprendizInput = {
    where: Prisma.resultado_examenScalarWhereInput;
    data: Prisma.XOR<Prisma.resultado_examenUpdateManyMutationInput, Prisma.resultado_examenUncheckedUpdateManyWithoutAprendizInput>;
};
export type resultado_examenScalarWhereInput = {
    AND?: Prisma.resultado_examenScalarWhereInput | Prisma.resultado_examenScalarWhereInput[];
    OR?: Prisma.resultado_examenScalarWhereInput[];
    NOT?: Prisma.resultado_examenScalarWhereInput | Prisma.resultado_examenScalarWhereInput[];
    id?: Prisma.IntFilter<"resultado_examen"> | number;
    examen_id?: Prisma.IntNullableFilter<"resultado_examen"> | number | null;
    aprendiz_id?: Prisma.IntNullableFilter<"resultado_examen"> | number | null;
    aprobado?: Prisma.BoolNullableFilter<"resultado_examen"> | boolean | null;
    comentario?: Prisma.StringNullableFilter<"resultado_examen"> | string | null;
};
export type resultado_examenCreateWithoutExamen_moduloInput = {
    aprobado?: boolean | null;
    comentario?: string | null;
    aprendiz?: Prisma.aprendizCreateNestedOneWithoutResultado_examenInput;
};
export type resultado_examenUncheckedCreateWithoutExamen_moduloInput = {
    id?: number;
    aprendiz_id?: number | null;
    aprobado?: boolean | null;
    comentario?: string | null;
};
export type resultado_examenCreateOrConnectWithoutExamen_moduloInput = {
    where: Prisma.resultado_examenWhereUniqueInput;
    create: Prisma.XOR<Prisma.resultado_examenCreateWithoutExamen_moduloInput, Prisma.resultado_examenUncheckedCreateWithoutExamen_moduloInput>;
};
export type resultado_examenCreateManyExamen_moduloInputEnvelope = {
    data: Prisma.resultado_examenCreateManyExamen_moduloInput | Prisma.resultado_examenCreateManyExamen_moduloInput[];
    skipDuplicates?: boolean;
};
export type resultado_examenUpsertWithWhereUniqueWithoutExamen_moduloInput = {
    where: Prisma.resultado_examenWhereUniqueInput;
    update: Prisma.XOR<Prisma.resultado_examenUpdateWithoutExamen_moduloInput, Prisma.resultado_examenUncheckedUpdateWithoutExamen_moduloInput>;
    create: Prisma.XOR<Prisma.resultado_examenCreateWithoutExamen_moduloInput, Prisma.resultado_examenUncheckedCreateWithoutExamen_moduloInput>;
};
export type resultado_examenUpdateWithWhereUniqueWithoutExamen_moduloInput = {
    where: Prisma.resultado_examenWhereUniqueInput;
    data: Prisma.XOR<Prisma.resultado_examenUpdateWithoutExamen_moduloInput, Prisma.resultado_examenUncheckedUpdateWithoutExamen_moduloInput>;
};
export type resultado_examenUpdateManyWithWhereWithoutExamen_moduloInput = {
    where: Prisma.resultado_examenScalarWhereInput;
    data: Prisma.XOR<Prisma.resultado_examenUpdateManyMutationInput, Prisma.resultado_examenUncheckedUpdateManyWithoutExamen_moduloInput>;
};
export type resultado_examenCreateManyAprendizInput = {
    id?: number;
    examen_id?: number | null;
    aprobado?: boolean | null;
    comentario?: string | null;
};
export type resultado_examenUpdateWithoutAprendizInput = {
    aprobado?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    comentario?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    examen_modulo?: Prisma.examen_moduloUpdateOneWithoutResultado_examenNestedInput;
};
export type resultado_examenUncheckedUpdateWithoutAprendizInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    examen_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    aprobado?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    comentario?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type resultado_examenUncheckedUpdateManyWithoutAprendizInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    examen_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    aprobado?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    comentario?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type resultado_examenCreateManyExamen_moduloInput = {
    id?: number;
    aprendiz_id?: number | null;
    aprobado?: boolean | null;
    comentario?: string | null;
};
export type resultado_examenUpdateWithoutExamen_moduloInput = {
    aprobado?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    comentario?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    aprendiz?: Prisma.aprendizUpdateOneWithoutResultado_examenNestedInput;
};
export type resultado_examenUncheckedUpdateWithoutExamen_moduloInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    aprendiz_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    aprobado?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    comentario?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type resultado_examenUncheckedUpdateManyWithoutExamen_moduloInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    aprendiz_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    aprobado?: Prisma.NullableBoolFieldUpdateOperationsInput | boolean | null;
    comentario?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type resultado_examenSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    examen_id?: boolean;
    aprendiz_id?: boolean;
    aprobado?: boolean;
    comentario?: boolean;
    aprendiz?: boolean | Prisma.resultado_examen$aprendizArgs<ExtArgs>;
    examen_modulo?: boolean | Prisma.resultado_examen$examen_moduloArgs<ExtArgs>;
}, ExtArgs["result"]["resultado_examen"]>;
export type resultado_examenSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    examen_id?: boolean;
    aprendiz_id?: boolean;
    aprobado?: boolean;
    comentario?: boolean;
    aprendiz?: boolean | Prisma.resultado_examen$aprendizArgs<ExtArgs>;
    examen_modulo?: boolean | Prisma.resultado_examen$examen_moduloArgs<ExtArgs>;
}, ExtArgs["result"]["resultado_examen"]>;
export type resultado_examenSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    examen_id?: boolean;
    aprendiz_id?: boolean;
    aprobado?: boolean;
    comentario?: boolean;
    aprendiz?: boolean | Prisma.resultado_examen$aprendizArgs<ExtArgs>;
    examen_modulo?: boolean | Prisma.resultado_examen$examen_moduloArgs<ExtArgs>;
}, ExtArgs["result"]["resultado_examen"]>;
export type resultado_examenSelectScalar = {
    id?: boolean;
    examen_id?: boolean;
    aprendiz_id?: boolean;
    aprobado?: boolean;
    comentario?: boolean;
};
export type resultado_examenOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "examen_id" | "aprendiz_id" | "aprobado" | "comentario", ExtArgs["result"]["resultado_examen"]>;
export type resultado_examenInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    aprendiz?: boolean | Prisma.resultado_examen$aprendizArgs<ExtArgs>;
    examen_modulo?: boolean | Prisma.resultado_examen$examen_moduloArgs<ExtArgs>;
};
export type resultado_examenIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    aprendiz?: boolean | Prisma.resultado_examen$aprendizArgs<ExtArgs>;
    examen_modulo?: boolean | Prisma.resultado_examen$examen_moduloArgs<ExtArgs>;
};
export type resultado_examenIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    aprendiz?: boolean | Prisma.resultado_examen$aprendizArgs<ExtArgs>;
    examen_modulo?: boolean | Prisma.resultado_examen$examen_moduloArgs<ExtArgs>;
};
export type $resultado_examenPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "resultado_examen";
    objects: {
        aprendiz: Prisma.$aprendizPayload<ExtArgs> | null;
        examen_modulo: Prisma.$examen_moduloPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        examen_id: number | null;
        aprendiz_id: number | null;
        aprobado: boolean | null;
        comentario: string | null;
    }, ExtArgs["result"]["resultado_examen"]>;
    composites: {};
};
export type resultado_examenGetPayload<S extends boolean | null | undefined | resultado_examenDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$resultado_examenPayload, S>;
export type resultado_examenCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<resultado_examenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Resultado_examenCountAggregateInputType | true;
};
export interface resultado_examenDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['resultado_examen'];
        meta: {
            name: 'resultado_examen';
        };
    };
    findUnique<T extends resultado_examenFindUniqueArgs>(args: Prisma.SelectSubset<T, resultado_examenFindUniqueArgs<ExtArgs>>): Prisma.Prisma__resultado_examenClient<runtime.Types.Result.GetResult<Prisma.$resultado_examenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends resultado_examenFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, resultado_examenFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__resultado_examenClient<runtime.Types.Result.GetResult<Prisma.$resultado_examenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends resultado_examenFindFirstArgs>(args?: Prisma.SelectSubset<T, resultado_examenFindFirstArgs<ExtArgs>>): Prisma.Prisma__resultado_examenClient<runtime.Types.Result.GetResult<Prisma.$resultado_examenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends resultado_examenFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, resultado_examenFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__resultado_examenClient<runtime.Types.Result.GetResult<Prisma.$resultado_examenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends resultado_examenFindManyArgs>(args?: Prisma.SelectSubset<T, resultado_examenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$resultado_examenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends resultado_examenCreateArgs>(args: Prisma.SelectSubset<T, resultado_examenCreateArgs<ExtArgs>>): Prisma.Prisma__resultado_examenClient<runtime.Types.Result.GetResult<Prisma.$resultado_examenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends resultado_examenCreateManyArgs>(args?: Prisma.SelectSubset<T, resultado_examenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends resultado_examenCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, resultado_examenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$resultado_examenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends resultado_examenDeleteArgs>(args: Prisma.SelectSubset<T, resultado_examenDeleteArgs<ExtArgs>>): Prisma.Prisma__resultado_examenClient<runtime.Types.Result.GetResult<Prisma.$resultado_examenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends resultado_examenUpdateArgs>(args: Prisma.SelectSubset<T, resultado_examenUpdateArgs<ExtArgs>>): Prisma.Prisma__resultado_examenClient<runtime.Types.Result.GetResult<Prisma.$resultado_examenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends resultado_examenDeleteManyArgs>(args?: Prisma.SelectSubset<T, resultado_examenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends resultado_examenUpdateManyArgs>(args: Prisma.SelectSubset<T, resultado_examenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends resultado_examenUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, resultado_examenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$resultado_examenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends resultado_examenUpsertArgs>(args: Prisma.SelectSubset<T, resultado_examenUpsertArgs<ExtArgs>>): Prisma.Prisma__resultado_examenClient<runtime.Types.Result.GetResult<Prisma.$resultado_examenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends resultado_examenCountArgs>(args?: Prisma.Subset<T, resultado_examenCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Resultado_examenCountAggregateOutputType> : number>;
    aggregate<T extends Resultado_examenAggregateArgs>(args: Prisma.Subset<T, Resultado_examenAggregateArgs>): Prisma.PrismaPromise<GetResultado_examenAggregateType<T>>;
    groupBy<T extends resultado_examenGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: resultado_examenGroupByArgs['orderBy'];
    } : {
        orderBy?: resultado_examenGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, resultado_examenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResultado_examenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: resultado_examenFieldRefs;
}
export interface Prisma__resultado_examenClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    aprendiz<T extends Prisma.resultado_examen$aprendizArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.resultado_examen$aprendizArgs<ExtArgs>>): Prisma.Prisma__aprendizClient<runtime.Types.Result.GetResult<Prisma.$aprendizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    examen_modulo<T extends Prisma.resultado_examen$examen_moduloArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.resultado_examen$examen_moduloArgs<ExtArgs>>): Prisma.Prisma__examen_moduloClient<runtime.Types.Result.GetResult<Prisma.$examen_moduloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface resultado_examenFieldRefs {
    readonly id: Prisma.FieldRef<"resultado_examen", 'Int'>;
    readonly examen_id: Prisma.FieldRef<"resultado_examen", 'Int'>;
    readonly aprendiz_id: Prisma.FieldRef<"resultado_examen", 'Int'>;
    readonly aprobado: Prisma.FieldRef<"resultado_examen", 'Boolean'>;
    readonly comentario: Prisma.FieldRef<"resultado_examen", 'String'>;
}
export type resultado_examenFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.resultado_examenSelect<ExtArgs> | null;
    omit?: Prisma.resultado_examenOmit<ExtArgs> | null;
    include?: Prisma.resultado_examenInclude<ExtArgs> | null;
    where: Prisma.resultado_examenWhereUniqueInput;
};
export type resultado_examenFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.resultado_examenSelect<ExtArgs> | null;
    omit?: Prisma.resultado_examenOmit<ExtArgs> | null;
    include?: Prisma.resultado_examenInclude<ExtArgs> | null;
    where: Prisma.resultado_examenWhereUniqueInput;
};
export type resultado_examenFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.resultado_examenSelect<ExtArgs> | null;
    omit?: Prisma.resultado_examenOmit<ExtArgs> | null;
    include?: Prisma.resultado_examenInclude<ExtArgs> | null;
    where?: Prisma.resultado_examenWhereInput;
    orderBy?: Prisma.resultado_examenOrderByWithRelationInput | Prisma.resultado_examenOrderByWithRelationInput[];
    cursor?: Prisma.resultado_examenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Resultado_examenScalarFieldEnum | Prisma.Resultado_examenScalarFieldEnum[];
};
export type resultado_examenFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.resultado_examenSelect<ExtArgs> | null;
    omit?: Prisma.resultado_examenOmit<ExtArgs> | null;
    include?: Prisma.resultado_examenInclude<ExtArgs> | null;
    where?: Prisma.resultado_examenWhereInput;
    orderBy?: Prisma.resultado_examenOrderByWithRelationInput | Prisma.resultado_examenOrderByWithRelationInput[];
    cursor?: Prisma.resultado_examenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Resultado_examenScalarFieldEnum | Prisma.Resultado_examenScalarFieldEnum[];
};
export type resultado_examenFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.resultado_examenSelect<ExtArgs> | null;
    omit?: Prisma.resultado_examenOmit<ExtArgs> | null;
    include?: Prisma.resultado_examenInclude<ExtArgs> | null;
    where?: Prisma.resultado_examenWhereInput;
    orderBy?: Prisma.resultado_examenOrderByWithRelationInput | Prisma.resultado_examenOrderByWithRelationInput[];
    cursor?: Prisma.resultado_examenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Resultado_examenScalarFieldEnum | Prisma.Resultado_examenScalarFieldEnum[];
};
export type resultado_examenCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.resultado_examenSelect<ExtArgs> | null;
    omit?: Prisma.resultado_examenOmit<ExtArgs> | null;
    include?: Prisma.resultado_examenInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.resultado_examenCreateInput, Prisma.resultado_examenUncheckedCreateInput>;
};
export type resultado_examenCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.resultado_examenCreateManyInput | Prisma.resultado_examenCreateManyInput[];
    skipDuplicates?: boolean;
};
export type resultado_examenCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.resultado_examenSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.resultado_examenOmit<ExtArgs> | null;
    data: Prisma.resultado_examenCreateManyInput | Prisma.resultado_examenCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.resultado_examenIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type resultado_examenUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.resultado_examenSelect<ExtArgs> | null;
    omit?: Prisma.resultado_examenOmit<ExtArgs> | null;
    include?: Prisma.resultado_examenInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.resultado_examenUpdateInput, Prisma.resultado_examenUncheckedUpdateInput>;
    where: Prisma.resultado_examenWhereUniqueInput;
};
export type resultado_examenUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.resultado_examenUpdateManyMutationInput, Prisma.resultado_examenUncheckedUpdateManyInput>;
    where?: Prisma.resultado_examenWhereInput;
    limit?: number;
};
export type resultado_examenUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.resultado_examenSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.resultado_examenOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.resultado_examenUpdateManyMutationInput, Prisma.resultado_examenUncheckedUpdateManyInput>;
    where?: Prisma.resultado_examenWhereInput;
    limit?: number;
    include?: Prisma.resultado_examenIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type resultado_examenUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.resultado_examenSelect<ExtArgs> | null;
    omit?: Prisma.resultado_examenOmit<ExtArgs> | null;
    include?: Prisma.resultado_examenInclude<ExtArgs> | null;
    where: Prisma.resultado_examenWhereUniqueInput;
    create: Prisma.XOR<Prisma.resultado_examenCreateInput, Prisma.resultado_examenUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.resultado_examenUpdateInput, Prisma.resultado_examenUncheckedUpdateInput>;
};
export type resultado_examenDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.resultado_examenSelect<ExtArgs> | null;
    omit?: Prisma.resultado_examenOmit<ExtArgs> | null;
    include?: Prisma.resultado_examenInclude<ExtArgs> | null;
    where: Prisma.resultado_examenWhereUniqueInput;
};
export type resultado_examenDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.resultado_examenWhereInput;
    limit?: number;
};
export type resultado_examen$aprendizArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.aprendizSelect<ExtArgs> | null;
    omit?: Prisma.aprendizOmit<ExtArgs> | null;
    include?: Prisma.aprendizInclude<ExtArgs> | null;
    where?: Prisma.aprendizWhereInput;
};
export type resultado_examen$examen_moduloArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.examen_moduloSelect<ExtArgs> | null;
    omit?: Prisma.examen_moduloOmit<ExtArgs> | null;
    include?: Prisma.examen_moduloInclude<ExtArgs> | null;
    where?: Prisma.examen_moduloWhereInput;
};
export type resultado_examenDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.resultado_examenSelect<ExtArgs> | null;
    omit?: Prisma.resultado_examenOmit<ExtArgs> | null;
    include?: Prisma.resultado_examenInclude<ExtArgs> | null;
};
