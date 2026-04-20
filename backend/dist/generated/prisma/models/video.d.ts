import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type videoModel = runtime.Types.Result.DefaultSelection<Prisma.$videoPayload>;
export type AggregateVideo = {
    _count: VideoCountAggregateOutputType | null;
    _avg: VideoAvgAggregateOutputType | null;
    _sum: VideoSumAggregateOutputType | null;
    _min: VideoMinAggregateOutputType | null;
    _max: VideoMaxAggregateOutputType | null;
};
export type VideoAvgAggregateOutputType = {
    id: number | null;
    duracion: number | null;
    orden: number | null;
    modulo_id: number | null;
};
export type VideoSumAggregateOutputType = {
    id: number | null;
    duracion: number | null;
    orden: number | null;
    modulo_id: number | null;
};
export type VideoMinAggregateOutputType = {
    id: number | null;
    titulo: string | null;
    url: string | null;
    duracion: number | null;
    orden: number | null;
    modulo_id: number | null;
};
export type VideoMaxAggregateOutputType = {
    id: number | null;
    titulo: string | null;
    url: string | null;
    duracion: number | null;
    orden: number | null;
    modulo_id: number | null;
};
export type VideoCountAggregateOutputType = {
    id: number;
    titulo: number;
    url: number;
    duracion: number;
    orden: number;
    modulo_id: number;
    _all: number;
};
export type VideoAvgAggregateInputType = {
    id?: true;
    duracion?: true;
    orden?: true;
    modulo_id?: true;
};
export type VideoSumAggregateInputType = {
    id?: true;
    duracion?: true;
    orden?: true;
    modulo_id?: true;
};
export type VideoMinAggregateInputType = {
    id?: true;
    titulo?: true;
    url?: true;
    duracion?: true;
    orden?: true;
    modulo_id?: true;
};
export type VideoMaxAggregateInputType = {
    id?: true;
    titulo?: true;
    url?: true;
    duracion?: true;
    orden?: true;
    modulo_id?: true;
};
export type VideoCountAggregateInputType = {
    id?: true;
    titulo?: true;
    url?: true;
    duracion?: true;
    orden?: true;
    modulo_id?: true;
    _all?: true;
};
export type VideoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.videoWhereInput;
    orderBy?: Prisma.videoOrderByWithRelationInput | Prisma.videoOrderByWithRelationInput[];
    cursor?: Prisma.videoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VideoCountAggregateInputType;
    _avg?: VideoAvgAggregateInputType;
    _sum?: VideoSumAggregateInputType;
    _min?: VideoMinAggregateInputType;
    _max?: VideoMaxAggregateInputType;
};
export type GetVideoAggregateType<T extends VideoAggregateArgs> = {
    [P in keyof T & keyof AggregateVideo]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVideo[P]> : Prisma.GetScalarType<T[P], AggregateVideo[P]>;
};
export type videoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.videoWhereInput;
    orderBy?: Prisma.videoOrderByWithAggregationInput | Prisma.videoOrderByWithAggregationInput[];
    by: Prisma.VideoScalarFieldEnum[] | Prisma.VideoScalarFieldEnum;
    having?: Prisma.videoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VideoCountAggregateInputType | true;
    _avg?: VideoAvgAggregateInputType;
    _sum?: VideoSumAggregateInputType;
    _min?: VideoMinAggregateInputType;
    _max?: VideoMaxAggregateInputType;
};
export type VideoGroupByOutputType = {
    id: number;
    titulo: string | null;
    url: string | null;
    duracion: number | null;
    orden: number | null;
    modulo_id: number | null;
    _count: VideoCountAggregateOutputType | null;
    _avg: VideoAvgAggregateOutputType | null;
    _sum: VideoSumAggregateOutputType | null;
    _min: VideoMinAggregateOutputType | null;
    _max: VideoMaxAggregateOutputType | null;
};
export type GetVideoGroupByPayload<T extends videoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VideoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VideoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VideoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VideoGroupByOutputType[P]>;
}>>;
export type videoWhereInput = {
    AND?: Prisma.videoWhereInput | Prisma.videoWhereInput[];
    OR?: Prisma.videoWhereInput[];
    NOT?: Prisma.videoWhereInput | Prisma.videoWhereInput[];
    id?: Prisma.IntFilter<"video"> | number;
    titulo?: Prisma.StringNullableFilter<"video"> | string | null;
    url?: Prisma.StringNullableFilter<"video"> | string | null;
    duracion?: Prisma.IntNullableFilter<"video"> | number | null;
    orden?: Prisma.IntNullableFilter<"video"> | number | null;
    modulo_id?: Prisma.IntNullableFilter<"video"> | number | null;
    modulo?: Prisma.XOR<Prisma.ModuloNullableScalarRelationFilter, Prisma.moduloWhereInput> | null;
};
export type videoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrderInput | Prisma.SortOrder;
    url?: Prisma.SortOrderInput | Prisma.SortOrder;
    duracion?: Prisma.SortOrderInput | Prisma.SortOrder;
    orden?: Prisma.SortOrderInput | Prisma.SortOrder;
    modulo_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    modulo?: Prisma.moduloOrderByWithRelationInput;
};
export type videoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.videoWhereInput | Prisma.videoWhereInput[];
    OR?: Prisma.videoWhereInput[];
    NOT?: Prisma.videoWhereInput | Prisma.videoWhereInput[];
    titulo?: Prisma.StringNullableFilter<"video"> | string | null;
    url?: Prisma.StringNullableFilter<"video"> | string | null;
    duracion?: Prisma.IntNullableFilter<"video"> | number | null;
    orden?: Prisma.IntNullableFilter<"video"> | number | null;
    modulo_id?: Prisma.IntNullableFilter<"video"> | number | null;
    modulo?: Prisma.XOR<Prisma.ModuloNullableScalarRelationFilter, Prisma.moduloWhereInput> | null;
}, "id">;
export type videoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrderInput | Prisma.SortOrder;
    url?: Prisma.SortOrderInput | Prisma.SortOrder;
    duracion?: Prisma.SortOrderInput | Prisma.SortOrder;
    orden?: Prisma.SortOrderInput | Prisma.SortOrder;
    modulo_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.videoCountOrderByAggregateInput;
    _avg?: Prisma.videoAvgOrderByAggregateInput;
    _max?: Prisma.videoMaxOrderByAggregateInput;
    _min?: Prisma.videoMinOrderByAggregateInput;
    _sum?: Prisma.videoSumOrderByAggregateInput;
};
export type videoScalarWhereWithAggregatesInput = {
    AND?: Prisma.videoScalarWhereWithAggregatesInput | Prisma.videoScalarWhereWithAggregatesInput[];
    OR?: Prisma.videoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.videoScalarWhereWithAggregatesInput | Prisma.videoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"video"> | number;
    titulo?: Prisma.StringNullableWithAggregatesFilter<"video"> | string | null;
    url?: Prisma.StringNullableWithAggregatesFilter<"video"> | string | null;
    duracion?: Prisma.IntNullableWithAggregatesFilter<"video"> | number | null;
    orden?: Prisma.IntNullableWithAggregatesFilter<"video"> | number | null;
    modulo_id?: Prisma.IntNullableWithAggregatesFilter<"video"> | number | null;
};
export type videoCreateInput = {
    titulo?: string | null;
    url?: string | null;
    duracion?: number | null;
    orden?: number | null;
    modulo?: Prisma.moduloCreateNestedOneWithoutVideoInput;
};
export type videoUncheckedCreateInput = {
    id?: number;
    titulo?: string | null;
    url?: string | null;
    duracion?: number | null;
    orden?: number | null;
    modulo_id?: number | null;
};
export type videoUpdateInput = {
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duracion?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    modulo?: Prisma.moduloUpdateOneWithoutVideoNestedInput;
};
export type videoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duracion?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    modulo_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type videoCreateManyInput = {
    id?: number;
    titulo?: string | null;
    url?: string | null;
    duracion?: number | null;
    orden?: number | null;
    modulo_id?: number | null;
};
export type videoUpdateManyMutationInput = {
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duracion?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type videoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duracion?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    modulo_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type VideoListRelationFilter = {
    every?: Prisma.videoWhereInput;
    some?: Prisma.videoWhereInput;
    none?: Prisma.videoWhereInput;
};
export type videoOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type videoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    duracion?: Prisma.SortOrder;
    orden?: Prisma.SortOrder;
    modulo_id?: Prisma.SortOrder;
};
export type videoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    duracion?: Prisma.SortOrder;
    orden?: Prisma.SortOrder;
    modulo_id?: Prisma.SortOrder;
};
export type videoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    duracion?: Prisma.SortOrder;
    orden?: Prisma.SortOrder;
    modulo_id?: Prisma.SortOrder;
};
export type videoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    titulo?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    duracion?: Prisma.SortOrder;
    orden?: Prisma.SortOrder;
    modulo_id?: Prisma.SortOrder;
};
export type videoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    duracion?: Prisma.SortOrder;
    orden?: Prisma.SortOrder;
    modulo_id?: Prisma.SortOrder;
};
export type videoCreateNestedManyWithoutModuloInput = {
    create?: Prisma.XOR<Prisma.videoCreateWithoutModuloInput, Prisma.videoUncheckedCreateWithoutModuloInput> | Prisma.videoCreateWithoutModuloInput[] | Prisma.videoUncheckedCreateWithoutModuloInput[];
    connectOrCreate?: Prisma.videoCreateOrConnectWithoutModuloInput | Prisma.videoCreateOrConnectWithoutModuloInput[];
    createMany?: Prisma.videoCreateManyModuloInputEnvelope;
    connect?: Prisma.videoWhereUniqueInput | Prisma.videoWhereUniqueInput[];
};
export type videoUncheckedCreateNestedManyWithoutModuloInput = {
    create?: Prisma.XOR<Prisma.videoCreateWithoutModuloInput, Prisma.videoUncheckedCreateWithoutModuloInput> | Prisma.videoCreateWithoutModuloInput[] | Prisma.videoUncheckedCreateWithoutModuloInput[];
    connectOrCreate?: Prisma.videoCreateOrConnectWithoutModuloInput | Prisma.videoCreateOrConnectWithoutModuloInput[];
    createMany?: Prisma.videoCreateManyModuloInputEnvelope;
    connect?: Prisma.videoWhereUniqueInput | Prisma.videoWhereUniqueInput[];
};
export type videoUpdateManyWithoutModuloNestedInput = {
    create?: Prisma.XOR<Prisma.videoCreateWithoutModuloInput, Prisma.videoUncheckedCreateWithoutModuloInput> | Prisma.videoCreateWithoutModuloInput[] | Prisma.videoUncheckedCreateWithoutModuloInput[];
    connectOrCreate?: Prisma.videoCreateOrConnectWithoutModuloInput | Prisma.videoCreateOrConnectWithoutModuloInput[];
    upsert?: Prisma.videoUpsertWithWhereUniqueWithoutModuloInput | Prisma.videoUpsertWithWhereUniqueWithoutModuloInput[];
    createMany?: Prisma.videoCreateManyModuloInputEnvelope;
    set?: Prisma.videoWhereUniqueInput | Prisma.videoWhereUniqueInput[];
    disconnect?: Prisma.videoWhereUniqueInput | Prisma.videoWhereUniqueInput[];
    delete?: Prisma.videoWhereUniqueInput | Prisma.videoWhereUniqueInput[];
    connect?: Prisma.videoWhereUniqueInput | Prisma.videoWhereUniqueInput[];
    update?: Prisma.videoUpdateWithWhereUniqueWithoutModuloInput | Prisma.videoUpdateWithWhereUniqueWithoutModuloInput[];
    updateMany?: Prisma.videoUpdateManyWithWhereWithoutModuloInput | Prisma.videoUpdateManyWithWhereWithoutModuloInput[];
    deleteMany?: Prisma.videoScalarWhereInput | Prisma.videoScalarWhereInput[];
};
export type videoUncheckedUpdateManyWithoutModuloNestedInput = {
    create?: Prisma.XOR<Prisma.videoCreateWithoutModuloInput, Prisma.videoUncheckedCreateWithoutModuloInput> | Prisma.videoCreateWithoutModuloInput[] | Prisma.videoUncheckedCreateWithoutModuloInput[];
    connectOrCreate?: Prisma.videoCreateOrConnectWithoutModuloInput | Prisma.videoCreateOrConnectWithoutModuloInput[];
    upsert?: Prisma.videoUpsertWithWhereUniqueWithoutModuloInput | Prisma.videoUpsertWithWhereUniqueWithoutModuloInput[];
    createMany?: Prisma.videoCreateManyModuloInputEnvelope;
    set?: Prisma.videoWhereUniqueInput | Prisma.videoWhereUniqueInput[];
    disconnect?: Prisma.videoWhereUniqueInput | Prisma.videoWhereUniqueInput[];
    delete?: Prisma.videoWhereUniqueInput | Prisma.videoWhereUniqueInput[];
    connect?: Prisma.videoWhereUniqueInput | Prisma.videoWhereUniqueInput[];
    update?: Prisma.videoUpdateWithWhereUniqueWithoutModuloInput | Prisma.videoUpdateWithWhereUniqueWithoutModuloInput[];
    updateMany?: Prisma.videoUpdateManyWithWhereWithoutModuloInput | Prisma.videoUpdateManyWithWhereWithoutModuloInput[];
    deleteMany?: Prisma.videoScalarWhereInput | Prisma.videoScalarWhereInput[];
};
export type videoCreateWithoutModuloInput = {
    titulo?: string | null;
    url?: string | null;
    duracion?: number | null;
    orden?: number | null;
};
export type videoUncheckedCreateWithoutModuloInput = {
    id?: number;
    titulo?: string | null;
    url?: string | null;
    duracion?: number | null;
    orden?: number | null;
};
export type videoCreateOrConnectWithoutModuloInput = {
    where: Prisma.videoWhereUniqueInput;
    create: Prisma.XOR<Prisma.videoCreateWithoutModuloInput, Prisma.videoUncheckedCreateWithoutModuloInput>;
};
export type videoCreateManyModuloInputEnvelope = {
    data: Prisma.videoCreateManyModuloInput | Prisma.videoCreateManyModuloInput[];
    skipDuplicates?: boolean;
};
export type videoUpsertWithWhereUniqueWithoutModuloInput = {
    where: Prisma.videoWhereUniqueInput;
    update: Prisma.XOR<Prisma.videoUpdateWithoutModuloInput, Prisma.videoUncheckedUpdateWithoutModuloInput>;
    create: Prisma.XOR<Prisma.videoCreateWithoutModuloInput, Prisma.videoUncheckedCreateWithoutModuloInput>;
};
export type videoUpdateWithWhereUniqueWithoutModuloInput = {
    where: Prisma.videoWhereUniqueInput;
    data: Prisma.XOR<Prisma.videoUpdateWithoutModuloInput, Prisma.videoUncheckedUpdateWithoutModuloInput>;
};
export type videoUpdateManyWithWhereWithoutModuloInput = {
    where: Prisma.videoScalarWhereInput;
    data: Prisma.XOR<Prisma.videoUpdateManyMutationInput, Prisma.videoUncheckedUpdateManyWithoutModuloInput>;
};
export type videoScalarWhereInput = {
    AND?: Prisma.videoScalarWhereInput | Prisma.videoScalarWhereInput[];
    OR?: Prisma.videoScalarWhereInput[];
    NOT?: Prisma.videoScalarWhereInput | Prisma.videoScalarWhereInput[];
    id?: Prisma.IntFilter<"video"> | number;
    titulo?: Prisma.StringNullableFilter<"video"> | string | null;
    url?: Prisma.StringNullableFilter<"video"> | string | null;
    duracion?: Prisma.IntNullableFilter<"video"> | number | null;
    orden?: Prisma.IntNullableFilter<"video"> | number | null;
    modulo_id?: Prisma.IntNullableFilter<"video"> | number | null;
};
export type videoCreateManyModuloInput = {
    id?: number;
    titulo?: string | null;
    url?: string | null;
    duracion?: number | null;
    orden?: number | null;
};
export type videoUpdateWithoutModuloInput = {
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duracion?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type videoUncheckedUpdateWithoutModuloInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duracion?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type videoUncheckedUpdateManyWithoutModuloInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    titulo?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    duracion?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    orden?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type videoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    url?: boolean;
    duracion?: boolean;
    orden?: boolean;
    modulo_id?: boolean;
    modulo?: boolean | Prisma.video$moduloArgs<ExtArgs>;
}, ExtArgs["result"]["video"]>;
export type videoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    url?: boolean;
    duracion?: boolean;
    orden?: boolean;
    modulo_id?: boolean;
    modulo?: boolean | Prisma.video$moduloArgs<ExtArgs>;
}, ExtArgs["result"]["video"]>;
export type videoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    titulo?: boolean;
    url?: boolean;
    duracion?: boolean;
    orden?: boolean;
    modulo_id?: boolean;
    modulo?: boolean | Prisma.video$moduloArgs<ExtArgs>;
}, ExtArgs["result"]["video"]>;
export type videoSelectScalar = {
    id?: boolean;
    titulo?: boolean;
    url?: boolean;
    duracion?: boolean;
    orden?: boolean;
    modulo_id?: boolean;
};
export type videoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "titulo" | "url" | "duracion" | "orden" | "modulo_id", ExtArgs["result"]["video"]>;
export type videoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    modulo?: boolean | Prisma.video$moduloArgs<ExtArgs>;
};
export type videoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    modulo?: boolean | Prisma.video$moduloArgs<ExtArgs>;
};
export type videoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    modulo?: boolean | Prisma.video$moduloArgs<ExtArgs>;
};
export type $videoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "video";
    objects: {
        modulo: Prisma.$moduloPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        titulo: string | null;
        url: string | null;
        duracion: number | null;
        orden: number | null;
        modulo_id: number | null;
    }, ExtArgs["result"]["video"]>;
    composites: {};
};
export type videoGetPayload<S extends boolean | null | undefined | videoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$videoPayload, S>;
export type videoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<videoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VideoCountAggregateInputType | true;
};
export interface videoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['video'];
        meta: {
            name: 'video';
        };
    };
    findUnique<T extends videoFindUniqueArgs>(args: Prisma.SelectSubset<T, videoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__videoClient<runtime.Types.Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends videoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, videoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__videoClient<runtime.Types.Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends videoFindFirstArgs>(args?: Prisma.SelectSubset<T, videoFindFirstArgs<ExtArgs>>): Prisma.Prisma__videoClient<runtime.Types.Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends videoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, videoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__videoClient<runtime.Types.Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends videoFindManyArgs>(args?: Prisma.SelectSubset<T, videoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends videoCreateArgs>(args: Prisma.SelectSubset<T, videoCreateArgs<ExtArgs>>): Prisma.Prisma__videoClient<runtime.Types.Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends videoCreateManyArgs>(args?: Prisma.SelectSubset<T, videoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends videoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, videoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends videoDeleteArgs>(args: Prisma.SelectSubset<T, videoDeleteArgs<ExtArgs>>): Prisma.Prisma__videoClient<runtime.Types.Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends videoUpdateArgs>(args: Prisma.SelectSubset<T, videoUpdateArgs<ExtArgs>>): Prisma.Prisma__videoClient<runtime.Types.Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends videoDeleteManyArgs>(args?: Prisma.SelectSubset<T, videoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends videoUpdateManyArgs>(args: Prisma.SelectSubset<T, videoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends videoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, videoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends videoUpsertArgs>(args: Prisma.SelectSubset<T, videoUpsertArgs<ExtArgs>>): Prisma.Prisma__videoClient<runtime.Types.Result.GetResult<Prisma.$videoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends videoCountArgs>(args?: Prisma.Subset<T, videoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VideoCountAggregateOutputType> : number>;
    aggregate<T extends VideoAggregateArgs>(args: Prisma.Subset<T, VideoAggregateArgs>): Prisma.PrismaPromise<GetVideoAggregateType<T>>;
    groupBy<T extends videoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: videoGroupByArgs['orderBy'];
    } : {
        orderBy?: videoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, videoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVideoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: videoFieldRefs;
}
export interface Prisma__videoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    modulo<T extends Prisma.video$moduloArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.video$moduloArgs<ExtArgs>>): Prisma.Prisma__moduloClient<runtime.Types.Result.GetResult<Prisma.$moduloPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface videoFieldRefs {
    readonly id: Prisma.FieldRef<"video", 'Int'>;
    readonly titulo: Prisma.FieldRef<"video", 'String'>;
    readonly url: Prisma.FieldRef<"video", 'String'>;
    readonly duracion: Prisma.FieldRef<"video", 'Int'>;
    readonly orden: Prisma.FieldRef<"video", 'Int'>;
    readonly modulo_id: Prisma.FieldRef<"video", 'Int'>;
}
export type videoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.videoSelect<ExtArgs> | null;
    omit?: Prisma.videoOmit<ExtArgs> | null;
    include?: Prisma.videoInclude<ExtArgs> | null;
    where: Prisma.videoWhereUniqueInput;
};
export type videoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.videoSelect<ExtArgs> | null;
    omit?: Prisma.videoOmit<ExtArgs> | null;
    include?: Prisma.videoInclude<ExtArgs> | null;
    where: Prisma.videoWhereUniqueInput;
};
export type videoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type videoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type videoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type videoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.videoSelect<ExtArgs> | null;
    omit?: Prisma.videoOmit<ExtArgs> | null;
    include?: Prisma.videoInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.videoCreateInput, Prisma.videoUncheckedCreateInput>;
};
export type videoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.videoCreateManyInput | Prisma.videoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type videoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.videoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.videoOmit<ExtArgs> | null;
    data: Prisma.videoCreateManyInput | Prisma.videoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.videoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type videoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.videoSelect<ExtArgs> | null;
    omit?: Prisma.videoOmit<ExtArgs> | null;
    include?: Prisma.videoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.videoUpdateInput, Prisma.videoUncheckedUpdateInput>;
    where: Prisma.videoWhereUniqueInput;
};
export type videoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.videoUpdateManyMutationInput, Prisma.videoUncheckedUpdateManyInput>;
    where?: Prisma.videoWhereInput;
    limit?: number;
};
export type videoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.videoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.videoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.videoUpdateManyMutationInput, Prisma.videoUncheckedUpdateManyInput>;
    where?: Prisma.videoWhereInput;
    limit?: number;
    include?: Prisma.videoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type videoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.videoSelect<ExtArgs> | null;
    omit?: Prisma.videoOmit<ExtArgs> | null;
    include?: Prisma.videoInclude<ExtArgs> | null;
    where: Prisma.videoWhereUniqueInput;
    create: Prisma.XOR<Prisma.videoCreateInput, Prisma.videoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.videoUpdateInput, Prisma.videoUncheckedUpdateInput>;
};
export type videoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.videoSelect<ExtArgs> | null;
    omit?: Prisma.videoOmit<ExtArgs> | null;
    include?: Prisma.videoInclude<ExtArgs> | null;
    where: Prisma.videoWhereUniqueInput;
};
export type videoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.videoWhereInput;
    limit?: number;
};
export type video$moduloArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.moduloSelect<ExtArgs> | null;
    omit?: Prisma.moduloOmit<ExtArgs> | null;
    include?: Prisma.moduloInclude<ExtArgs> | null;
    where?: Prisma.moduloWhereInput;
};
export type videoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.videoSelect<ExtArgs> | null;
    omit?: Prisma.videoOmit<ExtArgs> | null;
    include?: Prisma.videoInclude<ExtArgs> | null;
};
