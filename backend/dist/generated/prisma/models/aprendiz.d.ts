import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type aprendizModel = runtime.Types.Result.DefaultSelection<Prisma.$aprendizPayload>;
export type AggregateAprendiz = {
    _count: AprendizCountAggregateOutputType | null;
    _avg: AprendizAvgAggregateOutputType | null;
    _sum: AprendizSumAggregateOutputType | null;
    _min: AprendizMinAggregateOutputType | null;
    _max: AprendizMaxAggregateOutputType | null;
};
export type AprendizAvgAggregateOutputType = {
    id: number | null;
};
export type AprendizSumAggregateOutputType = {
    id: number | null;
};
export type AprendizMinAggregateOutputType = {
    id: number | null;
};
export type AprendizMaxAggregateOutputType = {
    id: number | null;
};
export type AprendizCountAggregateOutputType = {
    id: number;
    _all: number;
};
export type AprendizAvgAggregateInputType = {
    id?: true;
};
export type AprendizSumAggregateInputType = {
    id?: true;
};
export type AprendizMinAggregateInputType = {
    id?: true;
};
export type AprendizMaxAggregateInputType = {
    id?: true;
};
export type AprendizCountAggregateInputType = {
    id?: true;
    _all?: true;
};
export type AprendizAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.aprendizWhereInput;
    orderBy?: Prisma.aprendizOrderByWithRelationInput | Prisma.aprendizOrderByWithRelationInput[];
    cursor?: Prisma.aprendizWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AprendizCountAggregateInputType;
    _avg?: AprendizAvgAggregateInputType;
    _sum?: AprendizSumAggregateInputType;
    _min?: AprendizMinAggregateInputType;
    _max?: AprendizMaxAggregateInputType;
};
export type GetAprendizAggregateType<T extends AprendizAggregateArgs> = {
    [P in keyof T & keyof AggregateAprendiz]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAprendiz[P]> : Prisma.GetScalarType<T[P], AggregateAprendiz[P]>;
};
export type aprendizGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.aprendizWhereInput;
    orderBy?: Prisma.aprendizOrderByWithAggregationInput | Prisma.aprendizOrderByWithAggregationInput[];
    by: Prisma.AprendizScalarFieldEnum[] | Prisma.AprendizScalarFieldEnum;
    having?: Prisma.aprendizScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AprendizCountAggregateInputType | true;
    _avg?: AprendizAvgAggregateInputType;
    _sum?: AprendizSumAggregateInputType;
    _min?: AprendizMinAggregateInputType;
    _max?: AprendizMaxAggregateInputType;
};
export type AprendizGroupByOutputType = {
    id: number;
    _count: AprendizCountAggregateOutputType | null;
    _avg: AprendizAvgAggregateOutputType | null;
    _sum: AprendizSumAggregateOutputType | null;
    _min: AprendizMinAggregateOutputType | null;
    _max: AprendizMaxAggregateOutputType | null;
};
export type GetAprendizGroupByPayload<T extends aprendizGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AprendizGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AprendizGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AprendizGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AprendizGroupByOutputType[P]>;
}>>;
export type aprendizWhereInput = {
    AND?: Prisma.aprendizWhereInput | Prisma.aprendizWhereInput[];
    OR?: Prisma.aprendizWhereInput[];
    NOT?: Prisma.aprendizWhereInput | Prisma.aprendizWhereInput[];
    id?: Prisma.IntFilter<"aprendiz"> | number;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.usuarioWhereInput>;
    progreso_modulo?: Prisma.Progreso_moduloListRelationFilter;
    resultado_examen?: Prisma.Resultado_examenListRelationFilter;
};
export type aprendizOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    usuario?: Prisma.usuarioOrderByWithRelationInput;
    progreso_modulo?: Prisma.progreso_moduloOrderByRelationAggregateInput;
    resultado_examen?: Prisma.resultado_examenOrderByRelationAggregateInput;
};
export type aprendizWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.aprendizWhereInput | Prisma.aprendizWhereInput[];
    OR?: Prisma.aprendizWhereInput[];
    NOT?: Prisma.aprendizWhereInput | Prisma.aprendizWhereInput[];
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.usuarioWhereInput>;
    progreso_modulo?: Prisma.Progreso_moduloListRelationFilter;
    resultado_examen?: Prisma.Resultado_examenListRelationFilter;
}, "id">;
export type aprendizOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    _count?: Prisma.aprendizCountOrderByAggregateInput;
    _avg?: Prisma.aprendizAvgOrderByAggregateInput;
    _max?: Prisma.aprendizMaxOrderByAggregateInput;
    _min?: Prisma.aprendizMinOrderByAggregateInput;
    _sum?: Prisma.aprendizSumOrderByAggregateInput;
};
export type aprendizScalarWhereWithAggregatesInput = {
    AND?: Prisma.aprendizScalarWhereWithAggregatesInput | Prisma.aprendizScalarWhereWithAggregatesInput[];
    OR?: Prisma.aprendizScalarWhereWithAggregatesInput[];
    NOT?: Prisma.aprendizScalarWhereWithAggregatesInput | Prisma.aprendizScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"aprendiz"> | number;
};
export type aprendizCreateInput = {
    usuario: Prisma.usuarioCreateNestedOneWithoutAprendizInput;
    progreso_modulo?: Prisma.progreso_moduloCreateNestedManyWithoutAprendizInput;
    resultado_examen?: Prisma.resultado_examenCreateNestedManyWithoutAprendizInput;
};
export type aprendizUncheckedCreateInput = {
    id: number;
    progreso_modulo?: Prisma.progreso_moduloUncheckedCreateNestedManyWithoutAprendizInput;
    resultado_examen?: Prisma.resultado_examenUncheckedCreateNestedManyWithoutAprendizInput;
};
export type aprendizUpdateInput = {
    usuario?: Prisma.usuarioUpdateOneRequiredWithoutAprendizNestedInput;
    progreso_modulo?: Prisma.progreso_moduloUpdateManyWithoutAprendizNestedInput;
    resultado_examen?: Prisma.resultado_examenUpdateManyWithoutAprendizNestedInput;
};
export type aprendizUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    progreso_modulo?: Prisma.progreso_moduloUncheckedUpdateManyWithoutAprendizNestedInput;
    resultado_examen?: Prisma.resultado_examenUncheckedUpdateManyWithoutAprendizNestedInput;
};
export type aprendizCreateManyInput = {
    id: number;
};
export type aprendizUpdateManyMutationInput = {};
export type aprendizUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type aprendizCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type aprendizAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type aprendizMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type aprendizMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type aprendizSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type AprendizNullableScalarRelationFilter = {
    is?: Prisma.aprendizWhereInput | null;
    isNot?: Prisma.aprendizWhereInput | null;
};
export type aprendizCreateNestedOneWithoutProgreso_moduloInput = {
    create?: Prisma.XOR<Prisma.aprendizCreateWithoutProgreso_moduloInput, Prisma.aprendizUncheckedCreateWithoutProgreso_moduloInput>;
    connectOrCreate?: Prisma.aprendizCreateOrConnectWithoutProgreso_moduloInput;
    connect?: Prisma.aprendizWhereUniqueInput;
};
export type aprendizUpdateOneWithoutProgreso_moduloNestedInput = {
    create?: Prisma.XOR<Prisma.aprendizCreateWithoutProgreso_moduloInput, Prisma.aprendizUncheckedCreateWithoutProgreso_moduloInput>;
    connectOrCreate?: Prisma.aprendizCreateOrConnectWithoutProgreso_moduloInput;
    upsert?: Prisma.aprendizUpsertWithoutProgreso_moduloInput;
    disconnect?: Prisma.aprendizWhereInput | boolean;
    delete?: Prisma.aprendizWhereInput | boolean;
    connect?: Prisma.aprendizWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.aprendizUpdateToOneWithWhereWithoutProgreso_moduloInput, Prisma.aprendizUpdateWithoutProgreso_moduloInput>, Prisma.aprendizUncheckedUpdateWithoutProgreso_moduloInput>;
};
export type aprendizCreateNestedOneWithoutResultado_examenInput = {
    create?: Prisma.XOR<Prisma.aprendizCreateWithoutResultado_examenInput, Prisma.aprendizUncheckedCreateWithoutResultado_examenInput>;
    connectOrCreate?: Prisma.aprendizCreateOrConnectWithoutResultado_examenInput;
    connect?: Prisma.aprendizWhereUniqueInput;
};
export type aprendizUpdateOneWithoutResultado_examenNestedInput = {
    create?: Prisma.XOR<Prisma.aprendizCreateWithoutResultado_examenInput, Prisma.aprendizUncheckedCreateWithoutResultado_examenInput>;
    connectOrCreate?: Prisma.aprendizCreateOrConnectWithoutResultado_examenInput;
    upsert?: Prisma.aprendizUpsertWithoutResultado_examenInput;
    disconnect?: Prisma.aprendizWhereInput | boolean;
    delete?: Prisma.aprendizWhereInput | boolean;
    connect?: Prisma.aprendizWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.aprendizUpdateToOneWithWhereWithoutResultado_examenInput, Prisma.aprendizUpdateWithoutResultado_examenInput>, Prisma.aprendizUncheckedUpdateWithoutResultado_examenInput>;
};
export type aprendizCreateNestedOneWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.aprendizCreateWithoutUsuarioInput, Prisma.aprendizUncheckedCreateWithoutUsuarioInput>;
    connectOrCreate?: Prisma.aprendizCreateOrConnectWithoutUsuarioInput;
    connect?: Prisma.aprendizWhereUniqueInput;
};
export type aprendizUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.aprendizCreateWithoutUsuarioInput, Prisma.aprendizUncheckedCreateWithoutUsuarioInput>;
    connectOrCreate?: Prisma.aprendizCreateOrConnectWithoutUsuarioInput;
    connect?: Prisma.aprendizWhereUniqueInput;
};
export type aprendizUpdateOneWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.aprendizCreateWithoutUsuarioInput, Prisma.aprendizUncheckedCreateWithoutUsuarioInput>;
    connectOrCreate?: Prisma.aprendizCreateOrConnectWithoutUsuarioInput;
    upsert?: Prisma.aprendizUpsertWithoutUsuarioInput;
    disconnect?: Prisma.aprendizWhereInput | boolean;
    delete?: Prisma.aprendizWhereInput | boolean;
    connect?: Prisma.aprendizWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.aprendizUpdateToOneWithWhereWithoutUsuarioInput, Prisma.aprendizUpdateWithoutUsuarioInput>, Prisma.aprendizUncheckedUpdateWithoutUsuarioInput>;
};
export type aprendizUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.aprendizCreateWithoutUsuarioInput, Prisma.aprendizUncheckedCreateWithoutUsuarioInput>;
    connectOrCreate?: Prisma.aprendizCreateOrConnectWithoutUsuarioInput;
    upsert?: Prisma.aprendizUpsertWithoutUsuarioInput;
    disconnect?: Prisma.aprendizWhereInput | boolean;
    delete?: Prisma.aprendizWhereInput | boolean;
    connect?: Prisma.aprendizWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.aprendizUpdateToOneWithWhereWithoutUsuarioInput, Prisma.aprendizUpdateWithoutUsuarioInput>, Prisma.aprendizUncheckedUpdateWithoutUsuarioInput>;
};
export type aprendizCreateWithoutProgreso_moduloInput = {
    usuario: Prisma.usuarioCreateNestedOneWithoutAprendizInput;
    resultado_examen?: Prisma.resultado_examenCreateNestedManyWithoutAprendizInput;
};
export type aprendizUncheckedCreateWithoutProgreso_moduloInput = {
    id: number;
    resultado_examen?: Prisma.resultado_examenUncheckedCreateNestedManyWithoutAprendizInput;
};
export type aprendizCreateOrConnectWithoutProgreso_moduloInput = {
    where: Prisma.aprendizWhereUniqueInput;
    create: Prisma.XOR<Prisma.aprendizCreateWithoutProgreso_moduloInput, Prisma.aprendizUncheckedCreateWithoutProgreso_moduloInput>;
};
export type aprendizUpsertWithoutProgreso_moduloInput = {
    update: Prisma.XOR<Prisma.aprendizUpdateWithoutProgreso_moduloInput, Prisma.aprendizUncheckedUpdateWithoutProgreso_moduloInput>;
    create: Prisma.XOR<Prisma.aprendizCreateWithoutProgreso_moduloInput, Prisma.aprendizUncheckedCreateWithoutProgreso_moduloInput>;
    where?: Prisma.aprendizWhereInput;
};
export type aprendizUpdateToOneWithWhereWithoutProgreso_moduloInput = {
    where?: Prisma.aprendizWhereInput;
    data: Prisma.XOR<Prisma.aprendizUpdateWithoutProgreso_moduloInput, Prisma.aprendizUncheckedUpdateWithoutProgreso_moduloInput>;
};
export type aprendizUpdateWithoutProgreso_moduloInput = {
    usuario?: Prisma.usuarioUpdateOneRequiredWithoutAprendizNestedInput;
    resultado_examen?: Prisma.resultado_examenUpdateManyWithoutAprendizNestedInput;
};
export type aprendizUncheckedUpdateWithoutProgreso_moduloInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    resultado_examen?: Prisma.resultado_examenUncheckedUpdateManyWithoutAprendizNestedInput;
};
export type aprendizCreateWithoutResultado_examenInput = {
    usuario: Prisma.usuarioCreateNestedOneWithoutAprendizInput;
    progreso_modulo?: Prisma.progreso_moduloCreateNestedManyWithoutAprendizInput;
};
export type aprendizUncheckedCreateWithoutResultado_examenInput = {
    id: number;
    progreso_modulo?: Prisma.progreso_moduloUncheckedCreateNestedManyWithoutAprendizInput;
};
export type aprendizCreateOrConnectWithoutResultado_examenInput = {
    where: Prisma.aprendizWhereUniqueInput;
    create: Prisma.XOR<Prisma.aprendizCreateWithoutResultado_examenInput, Prisma.aprendizUncheckedCreateWithoutResultado_examenInput>;
};
export type aprendizUpsertWithoutResultado_examenInput = {
    update: Prisma.XOR<Prisma.aprendizUpdateWithoutResultado_examenInput, Prisma.aprendizUncheckedUpdateWithoutResultado_examenInput>;
    create: Prisma.XOR<Prisma.aprendizCreateWithoutResultado_examenInput, Prisma.aprendizUncheckedCreateWithoutResultado_examenInput>;
    where?: Prisma.aprendizWhereInput;
};
export type aprendizUpdateToOneWithWhereWithoutResultado_examenInput = {
    where?: Prisma.aprendizWhereInput;
    data: Prisma.XOR<Prisma.aprendizUpdateWithoutResultado_examenInput, Prisma.aprendizUncheckedUpdateWithoutResultado_examenInput>;
};
export type aprendizUpdateWithoutResultado_examenInput = {
    usuario?: Prisma.usuarioUpdateOneRequiredWithoutAprendizNestedInput;
    progreso_modulo?: Prisma.progreso_moduloUpdateManyWithoutAprendizNestedInput;
};
export type aprendizUncheckedUpdateWithoutResultado_examenInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    progreso_modulo?: Prisma.progreso_moduloUncheckedUpdateManyWithoutAprendizNestedInput;
};
export type aprendizCreateWithoutUsuarioInput = {
    progreso_modulo?: Prisma.progreso_moduloCreateNestedManyWithoutAprendizInput;
    resultado_examen?: Prisma.resultado_examenCreateNestedManyWithoutAprendizInput;
};
export type aprendizUncheckedCreateWithoutUsuarioInput = {
    progreso_modulo?: Prisma.progreso_moduloUncheckedCreateNestedManyWithoutAprendizInput;
    resultado_examen?: Prisma.resultado_examenUncheckedCreateNestedManyWithoutAprendizInput;
};
export type aprendizCreateOrConnectWithoutUsuarioInput = {
    where: Prisma.aprendizWhereUniqueInput;
    create: Prisma.XOR<Prisma.aprendizCreateWithoutUsuarioInput, Prisma.aprendizUncheckedCreateWithoutUsuarioInput>;
};
export type aprendizUpsertWithoutUsuarioInput = {
    update: Prisma.XOR<Prisma.aprendizUpdateWithoutUsuarioInput, Prisma.aprendizUncheckedUpdateWithoutUsuarioInput>;
    create: Prisma.XOR<Prisma.aprendizCreateWithoutUsuarioInput, Prisma.aprendizUncheckedCreateWithoutUsuarioInput>;
    where?: Prisma.aprendizWhereInput;
};
export type aprendizUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: Prisma.aprendizWhereInput;
    data: Prisma.XOR<Prisma.aprendizUpdateWithoutUsuarioInput, Prisma.aprendizUncheckedUpdateWithoutUsuarioInput>;
};
export type aprendizUpdateWithoutUsuarioInput = {
    progreso_modulo?: Prisma.progreso_moduloUpdateManyWithoutAprendizNestedInput;
    resultado_examen?: Prisma.resultado_examenUpdateManyWithoutAprendizNestedInput;
};
export type aprendizUncheckedUpdateWithoutUsuarioInput = {
    progreso_modulo?: Prisma.progreso_moduloUncheckedUpdateManyWithoutAprendizNestedInput;
    resultado_examen?: Prisma.resultado_examenUncheckedUpdateManyWithoutAprendizNestedInput;
};
export type AprendizCountOutputType = {
    progreso_modulo: number;
    resultado_examen: number;
};
export type AprendizCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    progreso_modulo?: boolean | AprendizCountOutputTypeCountProgreso_moduloArgs;
    resultado_examen?: boolean | AprendizCountOutputTypeCountResultado_examenArgs;
};
export type AprendizCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AprendizCountOutputTypeSelect<ExtArgs> | null;
};
export type AprendizCountOutputTypeCountProgreso_moduloArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.progreso_moduloWhereInput;
};
export type AprendizCountOutputTypeCountResultado_examenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.resultado_examenWhereInput;
};
export type aprendizSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuario?: boolean | Prisma.usuarioDefaultArgs<ExtArgs>;
    progreso_modulo?: boolean | Prisma.aprendiz$progreso_moduloArgs<ExtArgs>;
    resultado_examen?: boolean | Prisma.aprendiz$resultado_examenArgs<ExtArgs>;
    _count?: boolean | Prisma.AprendizCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aprendiz"]>;
export type aprendizSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuario?: boolean | Prisma.usuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aprendiz"]>;
export type aprendizSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuario?: boolean | Prisma.usuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["aprendiz"]>;
export type aprendizSelectScalar = {
    id?: boolean;
};
export type aprendizOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id", ExtArgs["result"]["aprendiz"]>;
export type aprendizInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.usuarioDefaultArgs<ExtArgs>;
    progreso_modulo?: boolean | Prisma.aprendiz$progreso_moduloArgs<ExtArgs>;
    resultado_examen?: boolean | Prisma.aprendiz$resultado_examenArgs<ExtArgs>;
    _count?: boolean | Prisma.AprendizCountOutputTypeDefaultArgs<ExtArgs>;
};
export type aprendizIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.usuarioDefaultArgs<ExtArgs>;
};
export type aprendizIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.usuarioDefaultArgs<ExtArgs>;
};
export type $aprendizPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "aprendiz";
    objects: {
        usuario: Prisma.$usuarioPayload<ExtArgs>;
        progreso_modulo: Prisma.$progreso_moduloPayload<ExtArgs>[];
        resultado_examen: Prisma.$resultado_examenPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
    }, ExtArgs["result"]["aprendiz"]>;
    composites: {};
};
export type aprendizGetPayload<S extends boolean | null | undefined | aprendizDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$aprendizPayload, S>;
export type aprendizCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<aprendizFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AprendizCountAggregateInputType | true;
};
export interface aprendizDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['aprendiz'];
        meta: {
            name: 'aprendiz';
        };
    };
    findUnique<T extends aprendizFindUniqueArgs>(args: Prisma.SelectSubset<T, aprendizFindUniqueArgs<ExtArgs>>): Prisma.Prisma__aprendizClient<runtime.Types.Result.GetResult<Prisma.$aprendizPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends aprendizFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, aprendizFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__aprendizClient<runtime.Types.Result.GetResult<Prisma.$aprendizPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends aprendizFindFirstArgs>(args?: Prisma.SelectSubset<T, aprendizFindFirstArgs<ExtArgs>>): Prisma.Prisma__aprendizClient<runtime.Types.Result.GetResult<Prisma.$aprendizPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends aprendizFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, aprendizFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__aprendizClient<runtime.Types.Result.GetResult<Prisma.$aprendizPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends aprendizFindManyArgs>(args?: Prisma.SelectSubset<T, aprendizFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$aprendizPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends aprendizCreateArgs>(args: Prisma.SelectSubset<T, aprendizCreateArgs<ExtArgs>>): Prisma.Prisma__aprendizClient<runtime.Types.Result.GetResult<Prisma.$aprendizPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends aprendizCreateManyArgs>(args?: Prisma.SelectSubset<T, aprendizCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends aprendizCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, aprendizCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$aprendizPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends aprendizDeleteArgs>(args: Prisma.SelectSubset<T, aprendizDeleteArgs<ExtArgs>>): Prisma.Prisma__aprendizClient<runtime.Types.Result.GetResult<Prisma.$aprendizPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends aprendizUpdateArgs>(args: Prisma.SelectSubset<T, aprendizUpdateArgs<ExtArgs>>): Prisma.Prisma__aprendizClient<runtime.Types.Result.GetResult<Prisma.$aprendizPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends aprendizDeleteManyArgs>(args?: Prisma.SelectSubset<T, aprendizDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends aprendizUpdateManyArgs>(args: Prisma.SelectSubset<T, aprendizUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends aprendizUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, aprendizUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$aprendizPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends aprendizUpsertArgs>(args: Prisma.SelectSubset<T, aprendizUpsertArgs<ExtArgs>>): Prisma.Prisma__aprendizClient<runtime.Types.Result.GetResult<Prisma.$aprendizPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends aprendizCountArgs>(args?: Prisma.Subset<T, aprendizCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AprendizCountAggregateOutputType> : number>;
    aggregate<T extends AprendizAggregateArgs>(args: Prisma.Subset<T, AprendizAggregateArgs>): Prisma.PrismaPromise<GetAprendizAggregateType<T>>;
    groupBy<T extends aprendizGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: aprendizGroupByArgs['orderBy'];
    } : {
        orderBy?: aprendizGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, aprendizGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAprendizGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: aprendizFieldRefs;
}
export interface Prisma__aprendizClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    usuario<T extends Prisma.usuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__usuarioClient<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    progreso_modulo<T extends Prisma.aprendiz$progreso_moduloArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.aprendiz$progreso_moduloArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$progreso_moduloPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    resultado_examen<T extends Prisma.aprendiz$resultado_examenArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.aprendiz$resultado_examenArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$resultado_examenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface aprendizFieldRefs {
    readonly id: Prisma.FieldRef<"aprendiz", 'Int'>;
}
export type aprendizFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.aprendizSelect<ExtArgs> | null;
    omit?: Prisma.aprendizOmit<ExtArgs> | null;
    include?: Prisma.aprendizInclude<ExtArgs> | null;
    where: Prisma.aprendizWhereUniqueInput;
};
export type aprendizFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.aprendizSelect<ExtArgs> | null;
    omit?: Prisma.aprendizOmit<ExtArgs> | null;
    include?: Prisma.aprendizInclude<ExtArgs> | null;
    where: Prisma.aprendizWhereUniqueInput;
};
export type aprendizFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.aprendizSelect<ExtArgs> | null;
    omit?: Prisma.aprendizOmit<ExtArgs> | null;
    include?: Prisma.aprendizInclude<ExtArgs> | null;
    where?: Prisma.aprendizWhereInput;
    orderBy?: Prisma.aprendizOrderByWithRelationInput | Prisma.aprendizOrderByWithRelationInput[];
    cursor?: Prisma.aprendizWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AprendizScalarFieldEnum | Prisma.AprendizScalarFieldEnum[];
};
export type aprendizFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.aprendizSelect<ExtArgs> | null;
    omit?: Prisma.aprendizOmit<ExtArgs> | null;
    include?: Prisma.aprendizInclude<ExtArgs> | null;
    where?: Prisma.aprendizWhereInput;
    orderBy?: Prisma.aprendizOrderByWithRelationInput | Prisma.aprendizOrderByWithRelationInput[];
    cursor?: Prisma.aprendizWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AprendizScalarFieldEnum | Prisma.AprendizScalarFieldEnum[];
};
export type aprendizFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.aprendizSelect<ExtArgs> | null;
    omit?: Prisma.aprendizOmit<ExtArgs> | null;
    include?: Prisma.aprendizInclude<ExtArgs> | null;
    where?: Prisma.aprendizWhereInput;
    orderBy?: Prisma.aprendizOrderByWithRelationInput | Prisma.aprendizOrderByWithRelationInput[];
    cursor?: Prisma.aprendizWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AprendizScalarFieldEnum | Prisma.AprendizScalarFieldEnum[];
};
export type aprendizCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.aprendizSelect<ExtArgs> | null;
    omit?: Prisma.aprendizOmit<ExtArgs> | null;
    include?: Prisma.aprendizInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.aprendizCreateInput, Prisma.aprendizUncheckedCreateInput>;
};
export type aprendizCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.aprendizCreateManyInput | Prisma.aprendizCreateManyInput[];
    skipDuplicates?: boolean;
};
export type aprendizCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.aprendizSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.aprendizOmit<ExtArgs> | null;
    data: Prisma.aprendizCreateManyInput | Prisma.aprendizCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.aprendizIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type aprendizUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.aprendizSelect<ExtArgs> | null;
    omit?: Prisma.aprendizOmit<ExtArgs> | null;
    include?: Prisma.aprendizInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.aprendizUpdateInput, Prisma.aprendizUncheckedUpdateInput>;
    where: Prisma.aprendizWhereUniqueInput;
};
export type aprendizUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.aprendizUpdateManyMutationInput, Prisma.aprendizUncheckedUpdateManyInput>;
    where?: Prisma.aprendizWhereInput;
    limit?: number;
};
export type aprendizUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.aprendizSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.aprendizOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.aprendizUpdateManyMutationInput, Prisma.aprendizUncheckedUpdateManyInput>;
    where?: Prisma.aprendizWhereInput;
    limit?: number;
    include?: Prisma.aprendizIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type aprendizUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.aprendizSelect<ExtArgs> | null;
    omit?: Prisma.aprendizOmit<ExtArgs> | null;
    include?: Prisma.aprendizInclude<ExtArgs> | null;
    where: Prisma.aprendizWhereUniqueInput;
    create: Prisma.XOR<Prisma.aprendizCreateInput, Prisma.aprendizUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.aprendizUpdateInput, Prisma.aprendizUncheckedUpdateInput>;
};
export type aprendizDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.aprendizSelect<ExtArgs> | null;
    omit?: Prisma.aprendizOmit<ExtArgs> | null;
    include?: Prisma.aprendizInclude<ExtArgs> | null;
    where: Prisma.aprendizWhereUniqueInput;
};
export type aprendizDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.aprendizWhereInput;
    limit?: number;
};
export type aprendiz$progreso_moduloArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type aprendiz$resultado_examenArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type aprendizDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.aprendizSelect<ExtArgs> | null;
    omit?: Prisma.aprendizOmit<ExtArgs> | null;
    include?: Prisma.aprendizInclude<ExtArgs> | null;
};
