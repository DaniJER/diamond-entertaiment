import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type moduloModel = runtime.Types.Result.DefaultSelection<Prisma.$moduloPayload>;
export type AggregateModulo = {
    _count: ModuloCountAggregateOutputType | null;
    _avg: ModuloAvgAggregateOutputType | null;
    _sum: ModuloSumAggregateOutputType | null;
    _min: ModuloMinAggregateOutputType | null;
    _max: ModuloMaxAggregateOutputType | null;
};
export type ModuloAvgAggregateOutputType = {
    id: number | null;
    orden: number | null;
    curso_id: number | null;
};
export type ModuloSumAggregateOutputType = {
    id: number | null;
    orden: number | null;
    curso_id: number | null;
};
export type ModuloMinAggregateOutputType = {
    id: number | null;
    titulo: string | null;
    orden: number | null;
    curso_id: number | null;
};
export type ModuloMaxAggregateOutputType = {
    id: number | null;
    titulo: string | null;
    orden: number | null;
    curso_id: number | null;
};
export type ModuloCountAggregateOutputType = {
    id: number;
    titulo: number;
    orden: number;
    curso_id: number;
    _all: number;
};
export type ModuloAvgAggregateInputType = {
    id?: true;
    orden?: true;
    curso_id?: true;
};
export type ModuloSumAggregateInputType = {
    id?: true;
    orden?: true;
    curso_id?: true;
};
export type ModuloMinAggregateInputType = {
    id?: true;
    titulo?: true;
    orden?: true;
    curso_id?: true;
};
export type ModuloMaxAggregateInputType = {
    id?: true;
    titulo?: true;
    orden?: true;
    curso_id?: true;
};
export type ModuloCountAggregateInputType = {
    id?: true;
    titulo?: true;
    orden?: true;
    curso_id?: true;
    _all?: true;
};
export type ModuloAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.moduloWhereInput;
    orderBy?: Prisma.moduloOrderByWithRelationInput | Prisma.moduloOrderByWithRelationInput[];
    cursor?: Prisma.moduloWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ModuloCountAggregateInputType;
    _avg?: ModuloAvgAggregateInputType;
    _sum?: ModuloSumAggregateInputType;
    _min?: ModuloMinAggregateInputType;
    _max?: ModuloMaxAggregateInputType;
};
export type GetModuloAggregateType<T extends ModuloAggregateArgs> = {
    [P in keyof T & keyof AggregateModulo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateModulo[P]> : Prisma.GetScalarType<T[P], AggregateModulo[P]>;
};
export type moduloGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.moduloWhereInput;
    orderBy?: Prisma.moduloOrderByWithAggregationInput | Prisma.moduloOrderByWithAggregationInput[];
    by: Prisma.ModuloScalarFieldEnum[] | Prisma.ModuloScalarFieldEnum;
    having?: Prisma.moduloScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ModuloCountAggregateInputType | true;
    _avg?: ModuloAvgAggregateInputType;
    _sum?: ModuloSumAggregateInputType;
    _min?: ModuloMinAggregateInputType;
    _max?: ModuloMaxAggregateInputType;
};
export type ModuloGroupByOutputType = {
    id: number;
    titulo: string | null;
    orden: number | null;
    curso_id: number | null;
    _count: ModuloCountAggregateOutputType | null;
    _avg: ModuloAvgAggregateOutputType | null;
    _sum: ModuloSumAggregateOutputType | null;
    _min: ModuloMinAggregateOutputType | null;
    _max: ModuloMaxAggregateOutputType | null;
};
export type GetModuloGroupByPayload<T extends moduloGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ModuloGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ModuloGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ModuloGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ModuloGroupByOutputType[P]>;
}>>;
export type moduloWhereInput = {
    AND?: Prisma.moduloWhereInput | Prisma.moduloWhereInput[];
    OR?: Prisma.moduloWhereInput[];
    NOT?: Prisma.moduloWhereInput | Prisma.moduloWhereInput[];
    id?: Prisma.IntFilter<"modulo"> | number;
    titulo?: Prisma.StringNullableFilter<"modulo"> | string | null;
    orden?: Prisma.IntNullableFilter<"modulo"> | number | null;
    curso_id?: Prisma.IntNullableFilter<"modulo"> | number | null;
    examen_modulo?: Prisma.XOR<Prisma.Examen_moduloNullableScalarRelationFilter, Prisma.examen_moduloWhereInput> | null;
    curso?: Prisma.XOR<Prisma.CursoNullableScalarRelationFilter, Prisma.cursoWhereInput> | null;
    progreso_modulo?: Prisma.Progreso_moduloListRelationFilter;
    video?: Prisma.VideoListRelationFilter;
};
export type moduloOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrderInput | Prisma.SortOrder;
    orden?: Prisma.SortOrderInput | Prisma.SortOrder;
    curso_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    examen_modulo?: Prisma.examen_moduloOrderByWithRelationInput;
    curso?: Prisma.cursoOrderByWithRelationInput;
    progreso_modulo?: Prisma.progreso_moduloOrderByRelationAggregateInput;
    video?: Prisma.videoOrderByRelationAggregateInput;
};
export type moduloWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.moduloWhereInput | Prisma.moduloWhereInput[];
    OR?: Prisma.moduloWhereInput[];
    NOT?: Prisma.moduloWhereInput | Prisma.moduloWhereInput[];
    titulo?: Prisma.StringNullableFilter<"modulo"> | string | null;
    orden?: Prisma.IntNullableFilter<"modulo"> | number | null;
    curso_id?: Prisma.IntNullableFilter<"modulo"> | number | null;
    examen_modulo?: Prisma.XOR<Prisma.Examen_moduloNullableScalarRelationFilter, Prisma.examen_moduloWhereInput> | null;
    curso?: Prisma.XOR<Prisma.CursoNullableScalarRelationFilter, Prisma.cursoWhereInput> | null;
    progreso_modulo?: Prisma.Progreso_moduloListRelationFilter;
    video?: Prisma.VideoListRelationFilter;
}, "id">;
export type moduloOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrderInput | Prisma.SortOrder;
    orden?: Prisma.SortOrderInput | Prisma.SortOrder;
    curso_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.moduloCountOrderByAggregateInput;
    _avg?: Prisma.moduloAvgOrderByAggregateInput;
    _max?: Prisma.moduloMaxOrderByAggregateInput;
    _min?: Prisma.moduloMinOrderByAggregateInput;
    _sum?: Prisma.moduloSumOrderByAggregateInput;
};
export type moduloScalarWhereWithAggregatesInput = {
    AND?: Prisma.moduloScalarWhereWithAggregatesInput | Prisma.moduloScalarWhereWithAggregatesInput[];
    OR?: Prisma.moduloScalarWhereWithAggregatesInput[];
    NOT?: Prisma.moduloScalarWhereWithAggregatesInput | Prisma.moduloScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"modulo"> | number;
    titulo?: Prisma.StringNullableWithAggregatesFilter<"modulo"> | string | null;
    orden?: Prisma.IntNullableWithAggregatesFilter<"modulo"> | number | null;
    curso_id?: Prisma.IntNullableWithAggregatesFilter<"modulo"> | number | null;
};
export type moduloCreateInput = {
    titulo?: string | null;
    orden?: number | null;
    examen_modulo?: Prisma.examen_moduloCreateNestedOneWithoutModuloInput;
    curso?: Prisma.cursoCreateNestedOneWithoutModuloInput;
    progreso_modulo?: Prisma.progreso_moduloCreateNestedManyWithoutModuloInput;
    video?: Prisma.videoCreateNestedManyWithoutModuloInput;
};
export type moduloUncheckedCreateInput = {
    id?: number;
    titulo?: string | null;
    orden?: number | null;
    curso_id?: number | null;
    examen_modulo?: Prisma.examen_moduloUncheckedCreateNestedOneWithoutModuloInput;
    progreso_modulo?: Prisma.progreso_moduloUncheckedCreateNestedManyWithoutModuloInput;
    video?: Prisma.videoUncheckedCreateNestedManyWithoutModuloInput;
};
export type moduloUpdateInput = {
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    examen_modulo?: Prisma.examen_moduloUpdateOneWithoutModuloNestedInput;
    curso?: Prisma.cursoUpdateOneWithoutModuloNestedInput;
    progreso_modulo?: Prisma.progreso_moduloUpdateManyWithoutModuloNestedInput;
    video?: Prisma.videoUpdateManyWithoutModuloNestedInput;
};
export type moduloUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    curso_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    examen_modulo?: Prisma.examen_moduloUncheckedUpdateOneWithoutModuloNestedInput;
    progreso_modulo?: Prisma.progreso_moduloUncheckedUpdateManyWithoutModuloNestedInput;
    video?: Prisma.videoUncheckedUpdateManyWithoutModuloNestedInput;
};
export type moduloCreateManyInput = {
    id?: number;
    titulo?: string | null;
    orden?: number | null;
    curso_id?: number | null;
};
export type moduloUpdateManyMutationInput = {
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type moduloUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    curso_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type ModuloListRelationFilter = {
    every?: Prisma.moduloWhereInput;
    some?: Prisma.moduloWhereInput;
    none?: Prisma.moduloWhereInput;
};
export type moduloOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ModuloNullableScalarRelationFilter = {
    is?: Prisma.moduloWhereInput | null;
    isNot?: Prisma.moduloWhereInput | null;
};
export type moduloCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    orden?: Prisma.SortOrder;
    curso_id?: Prisma.SortOrder;
};
export type moduloAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orden?: Prisma.SortOrder;
    curso_id?: Prisma.SortOrder;
};
export type moduloMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    orden?: Prisma.SortOrder;
    curso_id?: Prisma.SortOrder;
};
export type moduloMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    orden?: Prisma.SortOrder;
    curso_id?: Prisma.SortOrder;
};
export type moduloSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    orden?: Prisma.SortOrder;
    curso_id?: Prisma.SortOrder;
};
export type moduloCreateNestedManyWithoutCursoInput = {
    create?: Prisma.XOR<Prisma.moduloCreateWithoutCursoInput, Prisma.moduloUncheckedCreateWithoutCursoInput> | Prisma.moduloCreateWithoutCursoInput[] | Prisma.moduloUncheckedCreateWithoutCursoInput[];
    connectOrCreate?: Prisma.moduloCreateOrConnectWithoutCursoInput | Prisma.moduloCreateOrConnectWithoutCursoInput[];
    createMany?: Prisma.moduloCreateManyCursoInputEnvelope;
    connect?: Prisma.moduloWhereUniqueInput | Prisma.moduloWhereUniqueInput[];
};
export type moduloUncheckedCreateNestedManyWithoutCursoInput = {
    create?: Prisma.XOR<Prisma.moduloCreateWithoutCursoInput, Prisma.moduloUncheckedCreateWithoutCursoInput> | Prisma.moduloCreateWithoutCursoInput[] | Prisma.moduloUncheckedCreateWithoutCursoInput[];
    connectOrCreate?: Prisma.moduloCreateOrConnectWithoutCursoInput | Prisma.moduloCreateOrConnectWithoutCursoInput[];
    createMany?: Prisma.moduloCreateManyCursoInputEnvelope;
    connect?: Prisma.moduloWhereUniqueInput | Prisma.moduloWhereUniqueInput[];
};
export type moduloUpdateManyWithoutCursoNestedInput = {
    create?: Prisma.XOR<Prisma.moduloCreateWithoutCursoInput, Prisma.moduloUncheckedCreateWithoutCursoInput> | Prisma.moduloCreateWithoutCursoInput[] | Prisma.moduloUncheckedCreateWithoutCursoInput[];
    connectOrCreate?: Prisma.moduloCreateOrConnectWithoutCursoInput | Prisma.moduloCreateOrConnectWithoutCursoInput[];
    upsert?: Prisma.moduloUpsertWithWhereUniqueWithoutCursoInput | Prisma.moduloUpsertWithWhereUniqueWithoutCursoInput[];
    createMany?: Prisma.moduloCreateManyCursoInputEnvelope;
    set?: Prisma.moduloWhereUniqueInput | Prisma.moduloWhereUniqueInput[];
    disconnect?: Prisma.moduloWhereUniqueInput | Prisma.moduloWhereUniqueInput[];
    delete?: Prisma.moduloWhereUniqueInput | Prisma.moduloWhereUniqueInput[];
    connect?: Prisma.moduloWhereUniqueInput | Prisma.moduloWhereUniqueInput[];
    update?: Prisma.moduloUpdateWithWhereUniqueWithoutCursoInput | Prisma.moduloUpdateWithWhereUniqueWithoutCursoInput[];
    updateMany?: Prisma.moduloUpdateManyWithWhereWithoutCursoInput | Prisma.moduloUpdateManyWithWhereWithoutCursoInput[];
    deleteMany?: Prisma.moduloScalarWhereInput | Prisma.moduloScalarWhereInput[];
};
export type moduloUncheckedUpdateManyWithoutCursoNestedInput = {
    create?: Prisma.XOR<Prisma.moduloCreateWithoutCursoInput, Prisma.moduloUncheckedCreateWithoutCursoInput> | Prisma.moduloCreateWithoutCursoInput[] | Prisma.moduloUncheckedCreateWithoutCursoInput[];
    connectOrCreate?: Prisma.moduloCreateOrConnectWithoutCursoInput | Prisma.moduloCreateOrConnectWithoutCursoInput[];
    upsert?: Prisma.moduloUpsertWithWhereUniqueWithoutCursoInput | Prisma.moduloUpsertWithWhereUniqueWithoutCursoInput[];
    createMany?: Prisma.moduloCreateManyCursoInputEnvelope;
    set?: Prisma.moduloWhereUniqueInput | Prisma.moduloWhereUniqueInput[];
    disconnect?: Prisma.moduloWhereUniqueInput | Prisma.moduloWhereUniqueInput[];
    delete?: Prisma.moduloWhereUniqueInput | Prisma.moduloWhereUniqueInput[];
    connect?: Prisma.moduloWhereUniqueInput | Prisma.moduloWhereUniqueInput[];
    update?: Prisma.moduloUpdateWithWhereUniqueWithoutCursoInput | Prisma.moduloUpdateWithWhereUniqueWithoutCursoInput[];
    updateMany?: Prisma.moduloUpdateManyWithWhereWithoutCursoInput | Prisma.moduloUpdateManyWithWhereWithoutCursoInput[];
    deleteMany?: Prisma.moduloScalarWhereInput | Prisma.moduloScalarWhereInput[];
};
export type moduloCreateNestedOneWithoutExamen_moduloInput = {
    create?: Prisma.XOR<Prisma.moduloCreateWithoutExamen_moduloInput, Prisma.moduloUncheckedCreateWithoutExamen_moduloInput>;
    connectOrCreate?: Prisma.moduloCreateOrConnectWithoutExamen_moduloInput;
    connect?: Prisma.moduloWhereUniqueInput;
};
export type moduloUpdateOneWithoutExamen_moduloNestedInput = {
    create?: Prisma.XOR<Prisma.moduloCreateWithoutExamen_moduloInput, Prisma.moduloUncheckedCreateWithoutExamen_moduloInput>;
    connectOrCreate?: Prisma.moduloCreateOrConnectWithoutExamen_moduloInput;
    upsert?: Prisma.moduloUpsertWithoutExamen_moduloInput;
    disconnect?: Prisma.moduloWhereInput | boolean;
    delete?: Prisma.moduloWhereInput | boolean;
    connect?: Prisma.moduloWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.moduloUpdateToOneWithWhereWithoutExamen_moduloInput, Prisma.moduloUpdateWithoutExamen_moduloInput>, Prisma.moduloUncheckedUpdateWithoutExamen_moduloInput>;
};
export type moduloCreateNestedOneWithoutProgreso_moduloInput = {
    create?: Prisma.XOR<Prisma.moduloCreateWithoutProgreso_moduloInput, Prisma.moduloUncheckedCreateWithoutProgreso_moduloInput>;
    connectOrCreate?: Prisma.moduloCreateOrConnectWithoutProgreso_moduloInput;
    connect?: Prisma.moduloWhereUniqueInput;
};
export type moduloUpdateOneWithoutProgreso_moduloNestedInput = {
    create?: Prisma.XOR<Prisma.moduloCreateWithoutProgreso_moduloInput, Prisma.moduloUncheckedCreateWithoutProgreso_moduloInput>;
    connectOrCreate?: Prisma.moduloCreateOrConnectWithoutProgreso_moduloInput;
    upsert?: Prisma.moduloUpsertWithoutProgreso_moduloInput;
    disconnect?: Prisma.moduloWhereInput | boolean;
    delete?: Prisma.moduloWhereInput | boolean;
    connect?: Prisma.moduloWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.moduloUpdateToOneWithWhereWithoutProgreso_moduloInput, Prisma.moduloUpdateWithoutProgreso_moduloInput>, Prisma.moduloUncheckedUpdateWithoutProgreso_moduloInput>;
};
export type moduloCreateNestedOneWithoutVideoInput = {
    create?: Prisma.XOR<Prisma.moduloCreateWithoutVideoInput, Prisma.moduloUncheckedCreateWithoutVideoInput>;
    connectOrCreate?: Prisma.moduloCreateOrConnectWithoutVideoInput;
    connect?: Prisma.moduloWhereUniqueInput;
};
export type moduloUpdateOneWithoutVideoNestedInput = {
    create?: Prisma.XOR<Prisma.moduloCreateWithoutVideoInput, Prisma.moduloUncheckedCreateWithoutVideoInput>;
    connectOrCreate?: Prisma.moduloCreateOrConnectWithoutVideoInput;
    upsert?: Prisma.moduloUpsertWithoutVideoInput;
    disconnect?: Prisma.moduloWhereInput | boolean;
    delete?: Prisma.moduloWhereInput | boolean;
    connect?: Prisma.moduloWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.moduloUpdateToOneWithWhereWithoutVideoInput, Prisma.moduloUpdateWithoutVideoInput>, Prisma.moduloUncheckedUpdateWithoutVideoInput>;
};
export type moduloCreateWithoutCursoInput = {
    titulo?: string | null;
    orden?: number | null;
    examen_modulo?: Prisma.examen_moduloCreateNestedOneWithoutModuloInput;
    progreso_modulo?: Prisma.progreso_moduloCreateNestedManyWithoutModuloInput;
    video?: Prisma.videoCreateNestedManyWithoutModuloInput;
};
export type moduloUncheckedCreateWithoutCursoInput = {
    id?: number;
    titulo?: string | null;
    orden?: number | null;
    examen_modulo?: Prisma.examen_moduloUncheckedCreateNestedOneWithoutModuloInput;
    progreso_modulo?: Prisma.progreso_moduloUncheckedCreateNestedManyWithoutModuloInput;
    video?: Prisma.videoUncheckedCreateNestedManyWithoutModuloInput;
};
export type moduloCreateOrConnectWithoutCursoInput = {
    where: Prisma.moduloWhereUniqueInput;
    create: Prisma.XOR<Prisma.moduloCreateWithoutCursoInput, Prisma.moduloUncheckedCreateWithoutCursoInput>;
};
export type moduloCreateManyCursoInputEnvelope = {
    data: Prisma.moduloCreateManyCursoInput | Prisma.moduloCreateManyCursoInput[];
    skipDuplicates?: boolean;
};
export type moduloUpsertWithWhereUniqueWithoutCursoInput = {
    where: Prisma.moduloWhereUniqueInput;
    update: Prisma.XOR<Prisma.moduloUpdateWithoutCursoInput, Prisma.moduloUncheckedUpdateWithoutCursoInput>;
    create: Prisma.XOR<Prisma.moduloCreateWithoutCursoInput, Prisma.moduloUncheckedCreateWithoutCursoInput>;
};
export type moduloUpdateWithWhereUniqueWithoutCursoInput = {
    where: Prisma.moduloWhereUniqueInput;
    data: Prisma.XOR<Prisma.moduloUpdateWithoutCursoInput, Prisma.moduloUncheckedUpdateWithoutCursoInput>;
};
export type moduloUpdateManyWithWhereWithoutCursoInput = {
    where: Prisma.moduloScalarWhereInput;
    data: Prisma.XOR<Prisma.moduloUpdateManyMutationInput, Prisma.moduloUncheckedUpdateManyWithoutCursoInput>;
};
export type moduloScalarWhereInput = {
    AND?: Prisma.moduloScalarWhereInput | Prisma.moduloScalarWhereInput[];
    OR?: Prisma.moduloScalarWhereInput[];
    NOT?: Prisma.moduloScalarWhereInput | Prisma.moduloScalarWhereInput[];
    id?: Prisma.IntFilter<"modulo"> | number;
    titulo?: Prisma.StringNullableFilter<"modulo"> | string | null;
    orden?: Prisma.IntNullableFilter<"modulo"> | number | null;
    curso_id?: Prisma.IntNullableFilter<"modulo"> | number | null;
};
export type moduloCreateWithoutExamen_moduloInput = {
    titulo?: string | null;
    orden?: number | null;
    curso?: Prisma.cursoCreateNestedOneWithoutModuloInput;
    progreso_modulo?: Prisma.progreso_moduloCreateNestedManyWithoutModuloInput;
    video?: Prisma.videoCreateNestedManyWithoutModuloInput;
};
export type moduloUncheckedCreateWithoutExamen_moduloInput = {
    id?: number;
    titulo?: string | null;
    orden?: number | null;
    curso_id?: number | null;
    progreso_modulo?: Prisma.progreso_moduloUncheckedCreateNestedManyWithoutModuloInput;
    video?: Prisma.videoUncheckedCreateNestedManyWithoutModuloInput;
};
export type moduloCreateOrConnectWithoutExamen_moduloInput = {
    where: Prisma.moduloWhereUniqueInput;
    create: Prisma.XOR<Prisma.moduloCreateWithoutExamen_moduloInput, Prisma.moduloUncheckedCreateWithoutExamen_moduloInput>;
};
export type moduloUpsertWithoutExamen_moduloInput = {
    update: Prisma.XOR<Prisma.moduloUpdateWithoutExamen_moduloInput, Prisma.moduloUncheckedUpdateWithoutExamen_moduloInput>;
    create: Prisma.XOR<Prisma.moduloCreateWithoutExamen_moduloInput, Prisma.moduloUncheckedCreateWithoutExamen_moduloInput>;
    where?: Prisma.moduloWhereInput;
};
export type moduloUpdateToOneWithWhereWithoutExamen_moduloInput = {
    where?: Prisma.moduloWhereInput;
    data: Prisma.XOR<Prisma.moduloUpdateWithoutExamen_moduloInput, Prisma.moduloUncheckedUpdateWithoutExamen_moduloInput>;
};
export type moduloUpdateWithoutExamen_moduloInput = {
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    curso?: Prisma.cursoUpdateOneWithoutModuloNestedInput;
    progreso_modulo?: Prisma.progreso_moduloUpdateManyWithoutModuloNestedInput;
    video?: Prisma.videoUpdateManyWithoutModuloNestedInput;
};
export type moduloUncheckedUpdateWithoutExamen_moduloInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    curso_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    progreso_modulo?: Prisma.progreso_moduloUncheckedUpdateManyWithoutModuloNestedInput;
    video?: Prisma.videoUncheckedUpdateManyWithoutModuloNestedInput;
};
export type moduloCreateWithoutProgreso_moduloInput = {
    titulo?: string | null;
    orden?: number | null;
    examen_modulo?: Prisma.examen_moduloCreateNestedOneWithoutModuloInput;
    curso?: Prisma.cursoCreateNestedOneWithoutModuloInput;
    video?: Prisma.videoCreateNestedManyWithoutModuloInput;
};
export type moduloUncheckedCreateWithoutProgreso_moduloInput = {
    id?: number;
    titulo?: string | null;
    orden?: number | null;
    curso_id?: number | null;
    examen_modulo?: Prisma.examen_moduloUncheckedCreateNestedOneWithoutModuloInput;
    video?: Prisma.videoUncheckedCreateNestedManyWithoutModuloInput;
};
export type moduloCreateOrConnectWithoutProgreso_moduloInput = {
    where: Prisma.moduloWhereUniqueInput;
    create: Prisma.XOR<Prisma.moduloCreateWithoutProgreso_moduloInput, Prisma.moduloUncheckedCreateWithoutProgreso_moduloInput>;
};
export type moduloUpsertWithoutProgreso_moduloInput = {
    update: Prisma.XOR<Prisma.moduloUpdateWithoutProgreso_moduloInput, Prisma.moduloUncheckedUpdateWithoutProgreso_moduloInput>;
    create: Prisma.XOR<Prisma.moduloCreateWithoutProgreso_moduloInput, Prisma.moduloUncheckedCreateWithoutProgreso_moduloInput>;
    where?: Prisma.moduloWhereInput;
};
export type moduloUpdateToOneWithWhereWithoutProgreso_moduloInput = {
    where?: Prisma.moduloWhereInput;
    data: Prisma.XOR<Prisma.moduloUpdateWithoutProgreso_moduloInput, Prisma.moduloUncheckedUpdateWithoutProgreso_moduloInput>;
};
export type moduloUpdateWithoutProgreso_moduloInput = {
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    examen_modulo?: Prisma.examen_moduloUpdateOneWithoutModuloNestedInput;
    curso?: Prisma.cursoUpdateOneWithoutModuloNestedInput;
    video?: Prisma.videoUpdateManyWithoutModuloNestedInput;
};
export type moduloUncheckedUpdateWithoutProgreso_moduloInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    curso_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    examen_modulo?: Prisma.examen_moduloUncheckedUpdateOneWithoutModuloNestedInput;
    video?: Prisma.videoUncheckedUpdateManyWithoutModuloNestedInput;
};
export type moduloCreateWithoutVideoInput = {
    titulo?: string | null;
    orden?: number | null;
    examen_modulo?: Prisma.examen_moduloCreateNestedOneWithoutModuloInput;
    curso?: Prisma.cursoCreateNestedOneWithoutModuloInput;
    progreso_modulo?: Prisma.progreso_moduloCreateNestedManyWithoutModuloInput;
};
export type moduloUncheckedCreateWithoutVideoInput = {
    id?: number;
    titulo?: string | null;
    orden?: number | null;
    curso_id?: number | null;
    examen_modulo?: Prisma.examen_moduloUncheckedCreateNestedOneWithoutModuloInput;
    progreso_modulo?: Prisma.progreso_moduloUncheckedCreateNestedManyWithoutModuloInput;
};
export type moduloCreateOrConnectWithoutVideoInput = {
    where: Prisma.moduloWhereUniqueInput;
    create: Prisma.XOR<Prisma.moduloCreateWithoutVideoInput, Prisma.moduloUncheckedCreateWithoutVideoInput>;
};
export type moduloUpsertWithoutVideoInput = {
    update: Prisma.XOR<Prisma.moduloUpdateWithoutVideoInput, Prisma.moduloUncheckedUpdateWithoutVideoInput>;
    create: Prisma.XOR<Prisma.moduloCreateWithoutVideoInput, Prisma.moduloUncheckedCreateWithoutVideoInput>;
    where?: Prisma.moduloWhereInput;
};
export type moduloUpdateToOneWithWhereWithoutVideoInput = {
    where?: Prisma.moduloWhereInput;
    data: Prisma.XOR<Prisma.moduloUpdateWithoutVideoInput, Prisma.moduloUncheckedUpdateWithoutVideoInput>;
};
export type moduloUpdateWithoutVideoInput = {
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    examen_modulo?: Prisma.examen_moduloUpdateOneWithoutModuloNestedInput;
    curso?: Prisma.cursoUpdateOneWithoutModuloNestedInput;
    progreso_modulo?: Prisma.progreso_moduloUpdateManyWithoutModuloNestedInput;
};
export type moduloUncheckedUpdateWithoutVideoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    curso_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    examen_modulo?: Prisma.examen_moduloUncheckedUpdateOneWithoutModuloNestedInput;
    progreso_modulo?: Prisma.progreso_moduloUncheckedUpdateManyWithoutModuloNestedInput;
};
export type moduloCreateManyCursoInput = {
    id?: number;
    titulo?: string | null;
    orden?: number | null;
};
export type moduloUpdateWithoutCursoInput = {
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    examen_modulo?: Prisma.examen_moduloUpdateOneWithoutModuloNestedInput;
    progreso_modulo?: Prisma.progreso_moduloUpdateManyWithoutModuloNestedInput;
    video?: Prisma.videoUpdateManyWithoutModuloNestedInput;
};
export type moduloUncheckedUpdateWithoutCursoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    examen_modulo?: Prisma.examen_moduloUncheckedUpdateOneWithoutModuloNestedInput;
    progreso_modulo?: Prisma.progreso_moduloUncheckedUpdateManyWithoutModuloNestedInput;
    video?: Prisma.videoUncheckedUpdateManyWithoutModuloNestedInput;
};
export type moduloUncheckedUpdateManyWithoutCursoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type ModuloCountOutputType = {
    progreso_modulo: number;
    video: number;
};
export type ModuloCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    progreso_modulo?: boolean | ModuloCountOutputTypeCountProgreso_moduloArgs;
    video?: boolean | ModuloCountOutputTypeCountVideoArgs;
};
export type ModuloCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ModuloCountOutputTypeSelect<ExtArgs> | null;
};
export type ModuloCountOutputTypeCountProgreso_moduloArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.progreso_moduloWhereInput;
};
export type ModuloCountOutputTypeCountVideoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.videoWhereInput;
};
export type moduloSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    orden?: boolean;
    curso_id?: boolean;
    examen_modulo?: boolean | Prisma.modulo$examen_moduloArgs<ExtArgs>;
    curso?: boolean | Prisma.modulo$cursoArgs<ExtArgs>;
    progreso_modulo?: boolean | Prisma.modulo$progreso_moduloArgs<ExtArgs>;
    video?: boolean | Prisma.modulo$videoArgs<ExtArgs>;
    _count?: boolean | Prisma.ModuloCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["modulo"]>;
export type moduloSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    orden?: boolean;
    curso_id?: boolean;
    curso?: boolean | Prisma.modulo$cursoArgs<ExtArgs>;
}, ExtArgs["result"]["modulo"]>;
export type moduloSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    orden?: boolean;
    curso_id?: boolean;
    curso?: boolean | Prisma.modulo$cursoArgs<ExtArgs>;
}, ExtArgs["result"]["modulo"]>;
export type moduloSelectScalar = {
    id?: boolean;
    titulo?: boolean;
    orden?: boolean;
    curso_id?: boolean;
};
export type moduloOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "titulo" | "orden" | "curso_id", ExtArgs["result"]["modulo"]>;
export type moduloInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    examen_modulo?: boolean | Prisma.modulo$examen_moduloArgs<ExtArgs>;
    curso?: boolean | Prisma.modulo$cursoArgs<ExtArgs>;
    progreso_modulo?: boolean | Prisma.modulo$progreso_moduloArgs<ExtArgs>;
    video?: boolean | Prisma.modulo$videoArgs<ExtArgs>;
    _count?: boolean | Prisma.ModuloCountOutputTypeDefaultArgs<ExtArgs>;
};
export type moduloIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    curso?: boolean | Prisma.modulo$cursoArgs<ExtArgs>;
};
export type moduloIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    curso?: boolean | Prisma.modulo$cursoArgs<ExtArgs>;
};
export type $moduloPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "modulo";
    objects: {
        examen_modulo: Prisma.$examen_moduloPayload<ExtArgs> | null;
        curso: Prisma.$cursoPayload<ExtArgs> | null;
        progreso_modulo: Prisma.$progreso_moduloPayload<ExtArgs>[];
        video: Prisma.$videoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        titulo: string | null;
        orden: number | null;
        curso_id: number | null;
    }, ExtArgs["result"]["modulo"]>;
    composites: {};
};
export type moduloGetPayload<S extends boolean | null | undefined | moduloDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$moduloPayload, S>;
export type moduloCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<moduloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ModuloCountAggregateInputType | true;
};
export interface moduloDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['modulo'];
        meta: {
            name: 'modulo';
        };
    };
    findUnique<T extends moduloFindUniqueArgs>(args: Prisma.SelectSubset<T, moduloFindUniqueArgs<ExtArgs>>): Prisma.Prisma__moduloClient<runtime.Types.Result.GetResult<Prisma.$moduloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends moduloFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, moduloFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__moduloClient<runtime.Types.Result.GetResult<Prisma.$moduloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends moduloFindFirstArgs>(args?: Prisma.SelectSubset<T, moduloFindFirstArgs<ExtArgs>>): Prisma.Prisma__moduloClient<runtime.Types.Result.GetResult<Prisma.$moduloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends moduloFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, moduloFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__moduloClient<runtime.Types.Result.GetResult<Prisma.$moduloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends moduloFindManyArgs>(args?: Prisma.SelectSubset<T, moduloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$moduloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends moduloCreateArgs>(args: Prisma.SelectSubset<T, moduloCreateArgs<ExtArgs>>): Prisma.Prisma__moduloClient<runtime.Types.Result.GetResult<Prisma.$moduloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends moduloCreateManyArgs>(args?: Prisma.SelectSubset<T, moduloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends moduloCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, moduloCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$moduloPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends moduloDeleteArgs>(args: Prisma.SelectSubset<T, moduloDeleteArgs<ExtArgs>>): Prisma.Prisma__moduloClient<runtime.Types.Result.GetResult<Prisma.$moduloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends moduloUpdateArgs>(args: Prisma.SelectSubset<T, moduloUpdateArgs<ExtArgs>>): Prisma.Prisma__moduloClient<runtime.Types.Result.GetResult<Prisma.$moduloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends moduloDeleteManyArgs>(args?: Prisma.SelectSubset<T, moduloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends moduloUpdateManyArgs>(args: Prisma.SelectSubset<T, moduloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends moduloUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, moduloUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$moduloPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends moduloUpsertArgs>(args: Prisma.SelectSubset<T, moduloUpsertArgs<ExtArgs>>): Prisma.Prisma__moduloClient<runtime.Types.Result.GetResult<Prisma.$moduloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends moduloCountArgs>(args?: Prisma.Subset<T, moduloCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ModuloCountAggregateOutputType> : number>;
    aggregate<T extends ModuloAggregateArgs>(args: Prisma.Subset<T, ModuloAggregateArgs>): Prisma.PrismaPromise<GetModuloAggregateType<T>>;
    groupBy<T extends moduloGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: moduloGroupByArgs['orderBy'];
    } : {
        orderBy?: moduloGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, moduloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModuloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: moduloFieldRefs;
}
export interface Prisma__moduloClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    examen_modulo<T extends Prisma.modulo$examen_moduloArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.modulo$examen_moduloArgs<ExtArgs>>): Prisma.Prisma__examen_moduloClient<runtime.Types.Result.GetResult<Prisma.$examen_moduloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    curso<T extends Prisma.modulo$cursoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.modulo$cursoArgs<ExtArgs>>): Prisma.Prisma__cursoClient<runtime.Types.Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    progreso_modulo<T extends Prisma.modulo$progreso_moduloArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.modulo$progreso_moduloArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$progreso_moduloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    video<T extends Prisma.modulo$videoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.modulo$videoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface moduloFieldRefs {
    readonly id: Prisma.FieldRef<"modulo", 'Int'>;
    readonly titulo: Prisma.FieldRef<"modulo", 'String'>;
    readonly orden: Prisma.FieldRef<"modulo", 'Int'>;
    readonly curso_id: Prisma.FieldRef<"modulo", 'Int'>;
}
export type moduloFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.moduloSelect<ExtArgs> | null;
    omit?: Prisma.moduloOmit<ExtArgs> | null;
    include?: Prisma.moduloInclude<ExtArgs> | null;
    where: Prisma.moduloWhereUniqueInput;
};
export type moduloFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.moduloSelect<ExtArgs> | null;
    omit?: Prisma.moduloOmit<ExtArgs> | null;
    include?: Prisma.moduloInclude<ExtArgs> | null;
    where: Prisma.moduloWhereUniqueInput;
};
export type moduloFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type moduloFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type moduloFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type moduloCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.moduloSelect<ExtArgs> | null;
    omit?: Prisma.moduloOmit<ExtArgs> | null;
    include?: Prisma.moduloInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.moduloCreateInput, Prisma.moduloUncheckedCreateInput>;
};
export type moduloCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.moduloCreateManyInput | Prisma.moduloCreateManyInput[];
    skipDuplicates?: boolean;
};
export type moduloCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.moduloSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.moduloOmit<ExtArgs> | null;
    data: Prisma.moduloCreateManyInput | Prisma.moduloCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.moduloIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type moduloUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.moduloSelect<ExtArgs> | null;
    omit?: Prisma.moduloOmit<ExtArgs> | null;
    include?: Prisma.moduloInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.moduloUpdateInput, Prisma.moduloUncheckedUpdateInput>;
    where: Prisma.moduloWhereUniqueInput;
};
export type moduloUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.moduloUpdateManyMutationInput, Prisma.moduloUncheckedUpdateManyInput>;
    where?: Prisma.moduloWhereInput;
    limit?: number;
};
export type moduloUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.moduloSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.moduloOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.moduloUpdateManyMutationInput, Prisma.moduloUncheckedUpdateManyInput>;
    where?: Prisma.moduloWhereInput;
    limit?: number;
    include?: Prisma.moduloIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type moduloUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.moduloSelect<ExtArgs> | null;
    omit?: Prisma.moduloOmit<ExtArgs> | null;
    include?: Prisma.moduloInclude<ExtArgs> | null;
    where: Prisma.moduloWhereUniqueInput;
    create: Prisma.XOR<Prisma.moduloCreateInput, Prisma.moduloUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.moduloUpdateInput, Prisma.moduloUncheckedUpdateInput>;
};
export type moduloDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.moduloSelect<ExtArgs> | null;
    omit?: Prisma.moduloOmit<ExtArgs> | null;
    include?: Prisma.moduloInclude<ExtArgs> | null;
    where: Prisma.moduloWhereUniqueInput;
};
export type moduloDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.moduloWhereInput;
    limit?: number;
};
export type modulo$examen_moduloArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.examen_moduloSelect<ExtArgs> | null;
    omit?: Prisma.examen_moduloOmit<ExtArgs> | null;
    include?: Prisma.examen_moduloInclude<ExtArgs> | null;
    where?: Prisma.examen_moduloWhereInput;
};
export type modulo$cursoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.cursoSelect<ExtArgs> | null;
    omit?: Prisma.cursoOmit<ExtArgs> | null;
    include?: Prisma.cursoInclude<ExtArgs> | null;
    where?: Prisma.cursoWhereInput;
};
export type modulo$progreso_moduloArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type modulo$videoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.videoSelect<ExtArgs> | null;
    omit?: Prisma.videoOmit<ExtArgs> | null;
    include?: Prisma.videoInclude<ExtArgs> | null;
    where?: Prisma.videoWhereInput;
    orderBy?: Prisma.videoOrderByWithRelationInput | Prisma.videoOrderByWithRelationInput[];
    cursor?: Prisma.videoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VideoScalarFieldEnum | Prisma.VideoScalarFieldEnum[];
};
export type moduloDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.moduloSelect<ExtArgs> | null;
    omit?: Prisma.moduloOmit<ExtArgs> | null;
    include?: Prisma.moduloInclude<ExtArgs> | null;
};
