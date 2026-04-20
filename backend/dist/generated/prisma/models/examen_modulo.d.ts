import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type examen_moduloModel = runtime.Types.Result.DefaultSelection<Prisma.$examen_moduloPayload>;
export type AggregateExamen_modulo = {
    _count: Examen_moduloCountAggregateOutputType | null;
    _avg: Examen_moduloAvgAggregateOutputType | null;
    _sum: Examen_moduloSumAggregateOutputType | null;
    _min: Examen_moduloMinAggregateOutputType | null;
    _max: Examen_moduloMaxAggregateOutputType | null;
};
export type Examen_moduloAvgAggregateOutputType = {
    id: number | null;
    modulo_id: number | null;
};
export type Examen_moduloSumAggregateOutputType = {
    id: number | null;
    modulo_id: number | null;
};
export type Examen_moduloMinAggregateOutputType = {
    id: number | null;
    modulo_id: number | null;
};
export type Examen_moduloMaxAggregateOutputType = {
    id: number | null;
    modulo_id: number | null;
};
export type Examen_moduloCountAggregateOutputType = {
    id: number;
    modulo_id: number;
    _all: number;
};
export type Examen_moduloAvgAggregateInputType = {
    id?: true;
    modulo_id?: true;
};
export type Examen_moduloSumAggregateInputType = {
    id?: true;
    modulo_id?: true;
};
export type Examen_moduloMinAggregateInputType = {
    id?: true;
    modulo_id?: true;
};
export type Examen_moduloMaxAggregateInputType = {
    id?: true;
    modulo_id?: true;
};
export type Examen_moduloCountAggregateInputType = {
    id?: true;
    modulo_id?: true;
    _all?: true;
};
export type Examen_moduloAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.examen_moduloWhereInput;
    orderBy?: Prisma.examen_moduloOrderByWithRelationInput | Prisma.examen_moduloOrderByWithRelationInput[];
    cursor?: Prisma.examen_moduloWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Examen_moduloCountAggregateInputType;
    _avg?: Examen_moduloAvgAggregateInputType;
    _sum?: Examen_moduloSumAggregateInputType;
    _min?: Examen_moduloMinAggregateInputType;
    _max?: Examen_moduloMaxAggregateInputType;
};
export type GetExamen_moduloAggregateType<T extends Examen_moduloAggregateArgs> = {
    [P in keyof T & keyof AggregateExamen_modulo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateExamen_modulo[P]> : Prisma.GetScalarType<T[P], AggregateExamen_modulo[P]>;
};
export type examen_moduloGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.examen_moduloWhereInput;
    orderBy?: Prisma.examen_moduloOrderByWithAggregationInput | Prisma.examen_moduloOrderByWithAggregationInput[];
    by: Prisma.Examen_moduloScalarFieldEnum[] | Prisma.Examen_moduloScalarFieldEnum;
    having?: Prisma.examen_moduloScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Examen_moduloCountAggregateInputType | true;
    _avg?: Examen_moduloAvgAggregateInputType;
    _sum?: Examen_moduloSumAggregateInputType;
    _min?: Examen_moduloMinAggregateInputType;
    _max?: Examen_moduloMaxAggregateInputType;
};
export type Examen_moduloGroupByOutputType = {
    id: number;
    modulo_id: number | null;
    _count: Examen_moduloCountAggregateOutputType | null;
    _avg: Examen_moduloAvgAggregateOutputType | null;
    _sum: Examen_moduloSumAggregateOutputType | null;
    _min: Examen_moduloMinAggregateOutputType | null;
    _max: Examen_moduloMaxAggregateOutputType | null;
};
export type GetExamen_moduloGroupByPayload<T extends examen_moduloGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Examen_moduloGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Examen_moduloGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Examen_moduloGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Examen_moduloGroupByOutputType[P]>;
}>>;
export type examen_moduloWhereInput = {
    AND?: Prisma.examen_moduloWhereInput | Prisma.examen_moduloWhereInput[];
    OR?: Prisma.examen_moduloWhereInput[];
    NOT?: Prisma.examen_moduloWhereInput | Prisma.examen_moduloWhereInput[];
    id?: Prisma.IntFilter<"examen_modulo"> | number;
    modulo_id?: Prisma.IntNullableFilter<"examen_modulo"> | number | null;
    modulo?: Prisma.XOR<Prisma.ModuloNullableScalarRelationFilter, Prisma.moduloWhereInput> | null;
    resultado_examen?: Prisma.Resultado_examenListRelationFilter;
};
export type examen_moduloOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    modulo_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    modulo?: Prisma.moduloOrderByWithRelationInput;
    resultado_examen?: Prisma.resultado_examenOrderByRelationAggregateInput;
};
export type examen_moduloWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    modulo_id?: number;
    AND?: Prisma.examen_moduloWhereInput | Prisma.examen_moduloWhereInput[];
    OR?: Prisma.examen_moduloWhereInput[];
    NOT?: Prisma.examen_moduloWhereInput | Prisma.examen_moduloWhereInput[];
    modulo?: Prisma.XOR<Prisma.ModuloNullableScalarRelationFilter, Prisma.moduloWhereInput> | null;
    resultado_examen?: Prisma.Resultado_examenListRelationFilter;
}, "id" | "modulo_id">;
export type examen_moduloOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    modulo_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.examen_moduloCountOrderByAggregateInput;
    _avg?: Prisma.examen_moduloAvgOrderByAggregateInput;
    _max?: Prisma.examen_moduloMaxOrderByAggregateInput;
    _min?: Prisma.examen_moduloMinOrderByAggregateInput;
    _sum?: Prisma.examen_moduloSumOrderByAggregateInput;
};
export type examen_moduloScalarWhereWithAggregatesInput = {
    AND?: Prisma.examen_moduloScalarWhereWithAggregatesInput | Prisma.examen_moduloScalarWhereWithAggregatesInput[];
    OR?: Prisma.examen_moduloScalarWhereWithAggregatesInput[];
    NOT?: Prisma.examen_moduloScalarWhereWithAggregatesInput | Prisma.examen_moduloScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"examen_modulo"> | number;
    modulo_id?: Prisma.IntNullableWithAggregatesFilter<"examen_modulo"> | number | null;
};
export type examen_moduloCreateInput = {
    modulo?: Prisma.moduloCreateNestedOneWithoutExamen_moduloInput;
    resultado_examen?: Prisma.resultado_examenCreateNestedManyWithoutExamen_moduloInput;
};
export type examen_moduloUncheckedCreateInput = {
    id?: number;
    modulo_id?: number | null;
    resultado_examen?: Prisma.resultado_examenUncheckedCreateNestedManyWithoutExamen_moduloInput;
};
export type examen_moduloUpdateInput = {
    modulo?: Prisma.moduloUpdateOneWithoutExamen_moduloNestedInput;
    resultado_examen?: Prisma.resultado_examenUpdateManyWithoutExamen_moduloNestedInput;
};
export type examen_moduloUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    modulo_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    resultado_examen?: Prisma.resultado_examenUncheckedUpdateManyWithoutExamen_moduloNestedInput;
};
export type examen_moduloCreateManyInput = {
    id?: number;
    modulo_id?: number | null;
};
export type examen_moduloUpdateManyMutationInput = {};
export type examen_moduloUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    modulo_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type examen_moduloCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modulo_id?: Prisma.SortOrder;
};
export type examen_moduloAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modulo_id?: Prisma.SortOrder;
};
export type examen_moduloMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modulo_id?: Prisma.SortOrder;
};
export type examen_moduloMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modulo_id?: Prisma.SortOrder;
};
export type examen_moduloSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    modulo_id?: Prisma.SortOrder;
};
export type Examen_moduloNullableScalarRelationFilter = {
    is?: Prisma.examen_moduloWhereInput | null;
    isNot?: Prisma.examen_moduloWhereInput | null;
};
export type examen_moduloCreateNestedOneWithoutModuloInput = {
    create?: Prisma.XOR<Prisma.examen_moduloCreateWithoutModuloInput, Prisma.examen_moduloUncheckedCreateWithoutModuloInput>;
    connectOrCreate?: Prisma.examen_moduloCreateOrConnectWithoutModuloInput;
    connect?: Prisma.examen_moduloWhereUniqueInput;
};
export type examen_moduloUncheckedCreateNestedOneWithoutModuloInput = {
    create?: Prisma.XOR<Prisma.examen_moduloCreateWithoutModuloInput, Prisma.examen_moduloUncheckedCreateWithoutModuloInput>;
    connectOrCreate?: Prisma.examen_moduloCreateOrConnectWithoutModuloInput;
    connect?: Prisma.examen_moduloWhereUniqueInput;
};
export type examen_moduloUpdateOneWithoutModuloNestedInput = {
    create?: Prisma.XOR<Prisma.examen_moduloCreateWithoutModuloInput, Prisma.examen_moduloUncheckedCreateWithoutModuloInput>;
    connectOrCreate?: Prisma.examen_moduloCreateOrConnectWithoutModuloInput;
    upsert?: Prisma.examen_moduloUpsertWithoutModuloInput;
    disconnect?: Prisma.examen_moduloWhereInput | boolean;
    delete?: Prisma.examen_moduloWhereInput | boolean;
    connect?: Prisma.examen_moduloWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.examen_moduloUpdateToOneWithWhereWithoutModuloInput, Prisma.examen_moduloUpdateWithoutModuloInput>, Prisma.examen_moduloUncheckedUpdateWithoutModuloInput>;
};
export type examen_moduloUncheckedUpdateOneWithoutModuloNestedInput = {
    create?: Prisma.XOR<Prisma.examen_moduloCreateWithoutModuloInput, Prisma.examen_moduloUncheckedCreateWithoutModuloInput>;
    connectOrCreate?: Prisma.examen_moduloCreateOrConnectWithoutModuloInput;
    upsert?: Prisma.examen_moduloUpsertWithoutModuloInput;
    disconnect?: Prisma.examen_moduloWhereInput | boolean;
    delete?: Prisma.examen_moduloWhereInput | boolean;
    connect?: Prisma.examen_moduloWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.examen_moduloUpdateToOneWithWhereWithoutModuloInput, Prisma.examen_moduloUpdateWithoutModuloInput>, Prisma.examen_moduloUncheckedUpdateWithoutModuloInput>;
};
export type examen_moduloCreateNestedOneWithoutResultado_examenInput = {
    create?: Prisma.XOR<Prisma.examen_moduloCreateWithoutResultado_examenInput, Prisma.examen_moduloUncheckedCreateWithoutResultado_examenInput>;
    connectOrCreate?: Prisma.examen_moduloCreateOrConnectWithoutResultado_examenInput;
    connect?: Prisma.examen_moduloWhereUniqueInput;
};
export type examen_moduloUpdateOneWithoutResultado_examenNestedInput = {
    create?: Prisma.XOR<Prisma.examen_moduloCreateWithoutResultado_examenInput, Prisma.examen_moduloUncheckedCreateWithoutResultado_examenInput>;
    connectOrCreate?: Prisma.examen_moduloCreateOrConnectWithoutResultado_examenInput;
    upsert?: Prisma.examen_moduloUpsertWithoutResultado_examenInput;
    disconnect?: Prisma.examen_moduloWhereInput | boolean;
    delete?: Prisma.examen_moduloWhereInput | boolean;
    connect?: Prisma.examen_moduloWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.examen_moduloUpdateToOneWithWhereWithoutResultado_examenInput, Prisma.examen_moduloUpdateWithoutResultado_examenInput>, Prisma.examen_moduloUncheckedUpdateWithoutResultado_examenInput>;
};
export type examen_moduloCreateWithoutModuloInput = {
    resultado_examen?: Prisma.resultado_examenCreateNestedManyWithoutExamen_moduloInput;
};
export type examen_moduloUncheckedCreateWithoutModuloInput = {
    id?: number;
    resultado_examen?: Prisma.resultado_examenUncheckedCreateNestedManyWithoutExamen_moduloInput;
};
export type examen_moduloCreateOrConnectWithoutModuloInput = {
    where: Prisma.examen_moduloWhereUniqueInput;
    create: Prisma.XOR<Prisma.examen_moduloCreateWithoutModuloInput, Prisma.examen_moduloUncheckedCreateWithoutModuloInput>;
};
export type examen_moduloUpsertWithoutModuloInput = {
    update: Prisma.XOR<Prisma.examen_moduloUpdateWithoutModuloInput, Prisma.examen_moduloUncheckedUpdateWithoutModuloInput>;
    create: Prisma.XOR<Prisma.examen_moduloCreateWithoutModuloInput, Prisma.examen_moduloUncheckedCreateWithoutModuloInput>;
    where?: Prisma.examen_moduloWhereInput;
};
export type examen_moduloUpdateToOneWithWhereWithoutModuloInput = {
    where?: Prisma.examen_moduloWhereInput;
    data: Prisma.XOR<Prisma.examen_moduloUpdateWithoutModuloInput, Prisma.examen_moduloUncheckedUpdateWithoutModuloInput>;
};
export type examen_moduloUpdateWithoutModuloInput = {
    resultado_examen?: Prisma.resultado_examenUpdateManyWithoutExamen_moduloNestedInput;
};
export type examen_moduloUncheckedUpdateWithoutModuloInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    resultado_examen?: Prisma.resultado_examenUncheckedUpdateManyWithoutExamen_moduloNestedInput;
};
export type examen_moduloCreateWithoutResultado_examenInput = {
    modulo?: Prisma.moduloCreateNestedOneWithoutExamen_moduloInput;
};
export type examen_moduloUncheckedCreateWithoutResultado_examenInput = {
    id?: number;
    modulo_id?: number | null;
};
export type examen_moduloCreateOrConnectWithoutResultado_examenInput = {
    where: Prisma.examen_moduloWhereUniqueInput;
    create: Prisma.XOR<Prisma.examen_moduloCreateWithoutResultado_examenInput, Prisma.examen_moduloUncheckedCreateWithoutResultado_examenInput>;
};
export type examen_moduloUpsertWithoutResultado_examenInput = {
    update: Prisma.XOR<Prisma.examen_moduloUpdateWithoutResultado_examenInput, Prisma.examen_moduloUncheckedUpdateWithoutResultado_examenInput>;
    create: Prisma.XOR<Prisma.examen_moduloCreateWithoutResultado_examenInput, Prisma.examen_moduloUncheckedCreateWithoutResultado_examenInput>;
    where?: Prisma.examen_moduloWhereInput;
};
export type examen_moduloUpdateToOneWithWhereWithoutResultado_examenInput = {
    where?: Prisma.examen_moduloWhereInput;
    data: Prisma.XOR<Prisma.examen_moduloUpdateWithoutResultado_examenInput, Prisma.examen_moduloUncheckedUpdateWithoutResultado_examenInput>;
};
export type examen_moduloUpdateWithoutResultado_examenInput = {
    modulo?: Prisma.moduloUpdateOneWithoutExamen_moduloNestedInput;
};
export type examen_moduloUncheckedUpdateWithoutResultado_examenInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    modulo_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type Examen_moduloCountOutputType = {
    resultado_examen: number;
};
export type Examen_moduloCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    resultado_examen?: boolean | Examen_moduloCountOutputTypeCountResultado_examenArgs;
};
export type Examen_moduloCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Examen_moduloCountOutputTypeSelect<ExtArgs> | null;
};
export type Examen_moduloCountOutputTypeCountResultado_examenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.resultado_examenWhereInput;
};
export type examen_moduloSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    modulo_id?: boolean;
    modulo?: boolean | Prisma.examen_modulo$moduloArgs<ExtArgs>;
    resultado_examen?: boolean | Prisma.examen_modulo$resultado_examenArgs<ExtArgs>;
    _count?: boolean | Prisma.Examen_moduloCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["examen_modulo"]>;
export type examen_moduloSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    modulo_id?: boolean;
    modulo?: boolean | Prisma.examen_modulo$moduloArgs<ExtArgs>;
}, ExtArgs["result"]["examen_modulo"]>;
export type examen_moduloSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    modulo_id?: boolean;
    modulo?: boolean | Prisma.examen_modulo$moduloArgs<ExtArgs>;
}, ExtArgs["result"]["examen_modulo"]>;
export type examen_moduloSelectScalar = {
    id?: boolean;
    modulo_id?: boolean;
};
export type examen_moduloOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "modulo_id", ExtArgs["result"]["examen_modulo"]>;
export type examen_moduloInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    modulo?: boolean | Prisma.examen_modulo$moduloArgs<ExtArgs>;
    resultado_examen?: boolean | Prisma.examen_modulo$resultado_examenArgs<ExtArgs>;
    _count?: boolean | Prisma.Examen_moduloCountOutputTypeDefaultArgs<ExtArgs>;
};
export type examen_moduloIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    modulo?: boolean | Prisma.examen_modulo$moduloArgs<ExtArgs>;
};
export type examen_moduloIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    modulo?: boolean | Prisma.examen_modulo$moduloArgs<ExtArgs>;
};
export type $examen_moduloPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "examen_modulo";
    objects: {
        modulo: Prisma.$moduloPayload<ExtArgs> | null;
        resultado_examen: Prisma.$resultado_examenPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        modulo_id: number | null;
    }, ExtArgs["result"]["examen_modulo"]>;
    composites: {};
};
export type examen_moduloGetPayload<S extends boolean | null | undefined | examen_moduloDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$examen_moduloPayload, S>;
export type examen_moduloCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<examen_moduloFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Examen_moduloCountAggregateInputType | true;
};
export interface examen_moduloDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['examen_modulo'];
        meta: {
            name: 'examen_modulo';
        };
    };
    findUnique<T extends examen_moduloFindUniqueArgs>(args: Prisma.SelectSubset<T, examen_moduloFindUniqueArgs<ExtArgs>>): Prisma.Prisma__examen_moduloClient<runtime.Types.Result.GetResult<Prisma.$examen_moduloPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends examen_moduloFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, examen_moduloFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__examen_moduloClient<runtime.Types.Result.GetResult<Prisma.$examen_moduloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends examen_moduloFindFirstArgs>(args?: Prisma.SelectSubset<T, examen_moduloFindFirstArgs<ExtArgs>>): Prisma.Prisma__examen_moduloClient<runtime.Types.Result.GetResult<Prisma.$examen_moduloPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends examen_moduloFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, examen_moduloFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__examen_moduloClient<runtime.Types.Result.GetResult<Prisma.$examen_moduloPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends examen_moduloFindManyArgs>(args?: Prisma.SelectSubset<T, examen_moduloFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$examen_moduloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends examen_moduloCreateArgs>(args: Prisma.SelectSubset<T, examen_moduloCreateArgs<ExtArgs>>): Prisma.Prisma__examen_moduloClient<runtime.Types.Result.GetResult<Prisma.$examen_moduloPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends examen_moduloCreateManyArgs>(args?: Prisma.SelectSubset<T, examen_moduloCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends examen_moduloCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, examen_moduloCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$examen_moduloPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends examen_moduloDeleteArgs>(args: Prisma.SelectSubset<T, examen_moduloDeleteArgs<ExtArgs>>): Prisma.Prisma__examen_moduloClient<runtime.Types.Result.GetResult<Prisma.$examen_moduloPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends examen_moduloUpdateArgs>(args: Prisma.SelectSubset<T, examen_moduloUpdateArgs<ExtArgs>>): Prisma.Prisma__examen_moduloClient<runtime.Types.Result.GetResult<Prisma.$examen_moduloPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends examen_moduloDeleteManyArgs>(args?: Prisma.SelectSubset<T, examen_moduloDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends examen_moduloUpdateManyArgs>(args: Prisma.SelectSubset<T, examen_moduloUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends examen_moduloUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, examen_moduloUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$examen_moduloPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends examen_moduloUpsertArgs>(args: Prisma.SelectSubset<T, examen_moduloUpsertArgs<ExtArgs>>): Prisma.Prisma__examen_moduloClient<runtime.Types.Result.GetResult<Prisma.$examen_moduloPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends examen_moduloCountArgs>(args?: Prisma.Subset<T, examen_moduloCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Examen_moduloCountAggregateOutputType> : number>;
    aggregate<T extends Examen_moduloAggregateArgs>(args: Prisma.Subset<T, Examen_moduloAggregateArgs>): Prisma.PrismaPromise<GetExamen_moduloAggregateType<T>>;
    groupBy<T extends examen_moduloGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: examen_moduloGroupByArgs['orderBy'];
    } : {
        orderBy?: examen_moduloGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, examen_moduloGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamen_moduloGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: examen_moduloFieldRefs;
}
export interface Prisma__examen_moduloClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    modulo<T extends Prisma.examen_modulo$moduloArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.examen_modulo$moduloArgs<ExtArgs>>): Prisma.Prisma__moduloClient<runtime.Types.Result.GetResult<Prisma.$moduloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    resultado_examen<T extends Prisma.examen_modulo$resultado_examenArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.examen_modulo$resultado_examenArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$resultado_examenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface examen_moduloFieldRefs {
    readonly id: Prisma.FieldRef<"examen_modulo", 'Int'>;
    readonly modulo_id: Prisma.FieldRef<"examen_modulo", 'Int'>;
}
export type examen_moduloFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.examen_moduloSelect<ExtArgs> | null;
    omit?: Prisma.examen_moduloOmit<ExtArgs> | null;
    include?: Prisma.examen_moduloInclude<ExtArgs> | null;
    where: Prisma.examen_moduloWhereUniqueInput;
};
export type examen_moduloFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.examen_moduloSelect<ExtArgs> | null;
    omit?: Prisma.examen_moduloOmit<ExtArgs> | null;
    include?: Prisma.examen_moduloInclude<ExtArgs> | null;
    where: Prisma.examen_moduloWhereUniqueInput;
};
export type examen_moduloFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.examen_moduloSelect<ExtArgs> | null;
    omit?: Prisma.examen_moduloOmit<ExtArgs> | null;
    include?: Prisma.examen_moduloInclude<ExtArgs> | null;
    where?: Prisma.examen_moduloWhereInput;
    orderBy?: Prisma.examen_moduloOrderByWithRelationInput | Prisma.examen_moduloOrderByWithRelationInput[];
    cursor?: Prisma.examen_moduloWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Examen_moduloScalarFieldEnum | Prisma.Examen_moduloScalarFieldEnum[];
};
export type examen_moduloFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.examen_moduloSelect<ExtArgs> | null;
    omit?: Prisma.examen_moduloOmit<ExtArgs> | null;
    include?: Prisma.examen_moduloInclude<ExtArgs> | null;
    where?: Prisma.examen_moduloWhereInput;
    orderBy?: Prisma.examen_moduloOrderByWithRelationInput | Prisma.examen_moduloOrderByWithRelationInput[];
    cursor?: Prisma.examen_moduloWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Examen_moduloScalarFieldEnum | Prisma.Examen_moduloScalarFieldEnum[];
};
export type examen_moduloFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.examen_moduloSelect<ExtArgs> | null;
    omit?: Prisma.examen_moduloOmit<ExtArgs> | null;
    include?: Prisma.examen_moduloInclude<ExtArgs> | null;
    where?: Prisma.examen_moduloWhereInput;
    orderBy?: Prisma.examen_moduloOrderByWithRelationInput | Prisma.examen_moduloOrderByWithRelationInput[];
    cursor?: Prisma.examen_moduloWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Examen_moduloScalarFieldEnum | Prisma.Examen_moduloScalarFieldEnum[];
};
export type examen_moduloCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.examen_moduloSelect<ExtArgs> | null;
    omit?: Prisma.examen_moduloOmit<ExtArgs> | null;
    include?: Prisma.examen_moduloInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.examen_moduloCreateInput, Prisma.examen_moduloUncheckedCreateInput>;
};
export type examen_moduloCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.examen_moduloCreateManyInput | Prisma.examen_moduloCreateManyInput[];
    skipDuplicates?: boolean;
};
export type examen_moduloCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.examen_moduloSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.examen_moduloOmit<ExtArgs> | null;
    data: Prisma.examen_moduloCreateManyInput | Prisma.examen_moduloCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.examen_moduloIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type examen_moduloUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.examen_moduloSelect<ExtArgs> | null;
    omit?: Prisma.examen_moduloOmit<ExtArgs> | null;
    include?: Prisma.examen_moduloInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.examen_moduloUpdateInput, Prisma.examen_moduloUncheckedUpdateInput>;
    where: Prisma.examen_moduloWhereUniqueInput;
};
export type examen_moduloUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.examen_moduloUpdateManyMutationInput, Prisma.examen_moduloUncheckedUpdateManyInput>;
    where?: Prisma.examen_moduloWhereInput;
    limit?: number;
};
export type examen_moduloUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.examen_moduloSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.examen_moduloOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.examen_moduloUpdateManyMutationInput, Prisma.examen_moduloUncheckedUpdateManyInput>;
    where?: Prisma.examen_moduloWhereInput;
    limit?: number;
    include?: Prisma.examen_moduloIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type examen_moduloUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.examen_moduloSelect<ExtArgs> | null;
    omit?: Prisma.examen_moduloOmit<ExtArgs> | null;
    include?: Prisma.examen_moduloInclude<ExtArgs> | null;
    where: Prisma.examen_moduloWhereUniqueInput;
    create: Prisma.XOR<Prisma.examen_moduloCreateInput, Prisma.examen_moduloUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.examen_moduloUpdateInput, Prisma.examen_moduloUncheckedUpdateInput>;
};
export type examen_moduloDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.examen_moduloSelect<ExtArgs> | null;
    omit?: Prisma.examen_moduloOmit<ExtArgs> | null;
    include?: Prisma.examen_moduloInclude<ExtArgs> | null;
    where: Prisma.examen_moduloWhereUniqueInput;
};
export type examen_moduloDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.examen_moduloWhereInput;
    limit?: number;
};
export type examen_modulo$moduloArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.moduloSelect<ExtArgs> | null;
    omit?: Prisma.moduloOmit<ExtArgs> | null;
    include?: Prisma.moduloInclude<ExtArgs> | null;
    where?: Prisma.moduloWhereInput;
};
export type examen_modulo$resultado_examenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type examen_moduloDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.examen_moduloSelect<ExtArgs> | null;
    omit?: Prisma.examen_moduloOmit<ExtArgs> | null;
    include?: Prisma.examen_moduloInclude<ExtArgs> | null;
};
