import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type adminModel = runtime.Types.Result.DefaultSelection<Prisma.$adminPayload>;
export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null;
    _avg: AdminAvgAggregateOutputType | null;
    _sum: AdminSumAggregateOutputType | null;
    _min: AdminMinAggregateOutputType | null;
    _max: AdminMaxAggregateOutputType | null;
};
export type AdminAvgAggregateOutputType = {
    id: number | null;
};
export type AdminSumAggregateOutputType = {
    id: number | null;
};
export type AdminMinAggregateOutputType = {
    id: number | null;
};
export type AdminMaxAggregateOutputType = {
    id: number | null;
};
export type AdminCountAggregateOutputType = {
    id: number;
    _all: number;
};
export type AdminAvgAggregateInputType = {
    id?: true;
};
export type AdminSumAggregateInputType = {
    id?: true;
};
export type AdminMinAggregateInputType = {
    id?: true;
};
export type AdminMaxAggregateInputType = {
    id?: true;
};
export type AdminCountAggregateInputType = {
    id?: true;
    _all?: true;
};
export type AdminAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.adminWhereInput;
    orderBy?: Prisma.adminOrderByWithRelationInput | Prisma.adminOrderByWithRelationInput[];
    cursor?: Prisma.adminWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AdminCountAggregateInputType;
    _avg?: AdminAvgAggregateInputType;
    _sum?: AdminSumAggregateInputType;
    _min?: AdminMinAggregateInputType;
    _max?: AdminMaxAggregateInputType;
};
export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
    [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAdmin[P]> : Prisma.GetScalarType<T[P], AggregateAdmin[P]>;
};
export type adminGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.adminWhereInput;
    orderBy?: Prisma.adminOrderByWithAggregationInput | Prisma.adminOrderByWithAggregationInput[];
    by: Prisma.AdminScalarFieldEnum[] | Prisma.AdminScalarFieldEnum;
    having?: Prisma.adminScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AdminCountAggregateInputType | true;
    _avg?: AdminAvgAggregateInputType;
    _sum?: AdminSumAggregateInputType;
    _min?: AdminMinAggregateInputType;
    _max?: AdminMaxAggregateInputType;
};
export type AdminGroupByOutputType = {
    id: number;
    _count: AdminCountAggregateOutputType | null;
    _avg: AdminAvgAggregateOutputType | null;
    _sum: AdminSumAggregateOutputType | null;
    _min: AdminMinAggregateOutputType | null;
    _max: AdminMaxAggregateOutputType | null;
};
export type GetAdminGroupByPayload<T extends adminGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AdminGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AdminGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AdminGroupByOutputType[P]>;
}>>;
export type adminWhereInput = {
    AND?: Prisma.adminWhereInput | Prisma.adminWhereInput[];
    OR?: Prisma.adminWhereInput[];
    NOT?: Prisma.adminWhereInput | Prisma.adminWhereInput[];
    id?: Prisma.IntFilter<"admin"> | number;
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.usuarioWhereInput>;
    curso?: Prisma.CursoListRelationFilter;
};
export type adminOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    usuario?: Prisma.usuarioOrderByWithRelationInput;
    curso?: Prisma.cursoOrderByRelationAggregateInput;
};
export type adminWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.adminWhereInput | Prisma.adminWhereInput[];
    OR?: Prisma.adminWhereInput[];
    NOT?: Prisma.adminWhereInput | Prisma.adminWhereInput[];
    usuario?: Prisma.XOR<Prisma.UsuarioScalarRelationFilter, Prisma.usuarioWhereInput>;
    curso?: Prisma.CursoListRelationFilter;
}, "id">;
export type adminOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    _count?: Prisma.adminCountOrderByAggregateInput;
    _avg?: Prisma.adminAvgOrderByAggregateInput;
    _max?: Prisma.adminMaxOrderByAggregateInput;
    _min?: Prisma.adminMinOrderByAggregateInput;
    _sum?: Prisma.adminSumOrderByAggregateInput;
};
export type adminScalarWhereWithAggregatesInput = {
    AND?: Prisma.adminScalarWhereWithAggregatesInput | Prisma.adminScalarWhereWithAggregatesInput[];
    OR?: Prisma.adminScalarWhereWithAggregatesInput[];
    NOT?: Prisma.adminScalarWhereWithAggregatesInput | Prisma.adminScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"admin"> | number;
};
export type adminCreateInput = {
    usuario: Prisma.usuarioCreateNestedOneWithoutAdminInput;
    curso?: Prisma.cursoCreateNestedManyWithoutAdminInput;
};
export type adminUncheckedCreateInput = {
    id: number;
    curso?: Prisma.cursoUncheckedCreateNestedManyWithoutAdminInput;
};
export type adminUpdateInput = {
    usuario?: Prisma.usuarioUpdateOneRequiredWithoutAdminNestedInput;
    curso?: Prisma.cursoUpdateManyWithoutAdminNestedInput;
};
export type adminUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    curso?: Prisma.cursoUncheckedUpdateManyWithoutAdminNestedInput;
};
export type adminCreateManyInput = {
    id: number;
};
export type adminUpdateManyMutationInput = {};
export type adminUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type adminCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type adminAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type adminMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type adminMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type adminSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type AdminNullableScalarRelationFilter = {
    is?: Prisma.adminWhereInput | null;
    isNot?: Prisma.adminWhereInput | null;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type adminCreateNestedOneWithoutCursoInput = {
    create?: Prisma.XOR<Prisma.adminCreateWithoutCursoInput, Prisma.adminUncheckedCreateWithoutCursoInput>;
    connectOrCreate?: Prisma.adminCreateOrConnectWithoutCursoInput;
    connect?: Prisma.adminWhereUniqueInput;
};
export type adminUpdateOneWithoutCursoNestedInput = {
    create?: Prisma.XOR<Prisma.adminCreateWithoutCursoInput, Prisma.adminUncheckedCreateWithoutCursoInput>;
    connectOrCreate?: Prisma.adminCreateOrConnectWithoutCursoInput;
    upsert?: Prisma.adminUpsertWithoutCursoInput;
    disconnect?: Prisma.adminWhereInput | boolean;
    delete?: Prisma.adminWhereInput | boolean;
    connect?: Prisma.adminWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.adminUpdateToOneWithWhereWithoutCursoInput, Prisma.adminUpdateWithoutCursoInput>, Prisma.adminUncheckedUpdateWithoutCursoInput>;
};
export type adminCreateNestedOneWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.adminCreateWithoutUsuarioInput, Prisma.adminUncheckedCreateWithoutUsuarioInput>;
    connectOrCreate?: Prisma.adminCreateOrConnectWithoutUsuarioInput;
    connect?: Prisma.adminWhereUniqueInput;
};
export type adminUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.adminCreateWithoutUsuarioInput, Prisma.adminUncheckedCreateWithoutUsuarioInput>;
    connectOrCreate?: Prisma.adminCreateOrConnectWithoutUsuarioInput;
    connect?: Prisma.adminWhereUniqueInput;
};
export type adminUpdateOneWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.adminCreateWithoutUsuarioInput, Prisma.adminUncheckedCreateWithoutUsuarioInput>;
    connectOrCreate?: Prisma.adminCreateOrConnectWithoutUsuarioInput;
    upsert?: Prisma.adminUpsertWithoutUsuarioInput;
    disconnect?: Prisma.adminWhereInput | boolean;
    delete?: Prisma.adminWhereInput | boolean;
    connect?: Prisma.adminWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.adminUpdateToOneWithWhereWithoutUsuarioInput, Prisma.adminUpdateWithoutUsuarioInput>, Prisma.adminUncheckedUpdateWithoutUsuarioInput>;
};
export type adminUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.adminCreateWithoutUsuarioInput, Prisma.adminUncheckedCreateWithoutUsuarioInput>;
    connectOrCreate?: Prisma.adminCreateOrConnectWithoutUsuarioInput;
    upsert?: Prisma.adminUpsertWithoutUsuarioInput;
    disconnect?: Prisma.adminWhereInput | boolean;
    delete?: Prisma.adminWhereInput | boolean;
    connect?: Prisma.adminWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.adminUpdateToOneWithWhereWithoutUsuarioInput, Prisma.adminUpdateWithoutUsuarioInput>, Prisma.adminUncheckedUpdateWithoutUsuarioInput>;
};
export type adminCreateWithoutCursoInput = {
    usuario: Prisma.usuarioCreateNestedOneWithoutAdminInput;
};
export type adminUncheckedCreateWithoutCursoInput = {
    id: number;
};
export type adminCreateOrConnectWithoutCursoInput = {
    where: Prisma.adminWhereUniqueInput;
    create: Prisma.XOR<Prisma.adminCreateWithoutCursoInput, Prisma.adminUncheckedCreateWithoutCursoInput>;
};
export type adminUpsertWithoutCursoInput = {
    update: Prisma.XOR<Prisma.adminUpdateWithoutCursoInput, Prisma.adminUncheckedUpdateWithoutCursoInput>;
    create: Prisma.XOR<Prisma.adminCreateWithoutCursoInput, Prisma.adminUncheckedCreateWithoutCursoInput>;
    where?: Prisma.adminWhereInput;
};
export type adminUpdateToOneWithWhereWithoutCursoInput = {
    where?: Prisma.adminWhereInput;
    data: Prisma.XOR<Prisma.adminUpdateWithoutCursoInput, Prisma.adminUncheckedUpdateWithoutCursoInput>;
};
export type adminUpdateWithoutCursoInput = {
    usuario?: Prisma.usuarioUpdateOneRequiredWithoutAdminNestedInput;
};
export type adminUncheckedUpdateWithoutCursoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
};
export type adminCreateWithoutUsuarioInput = {
    curso?: Prisma.cursoCreateNestedManyWithoutAdminInput;
};
export type adminUncheckedCreateWithoutUsuarioInput = {
    curso?: Prisma.cursoUncheckedCreateNestedManyWithoutAdminInput;
};
export type adminCreateOrConnectWithoutUsuarioInput = {
    where: Prisma.adminWhereUniqueInput;
    create: Prisma.XOR<Prisma.adminCreateWithoutUsuarioInput, Prisma.adminUncheckedCreateWithoutUsuarioInput>;
};
export type adminUpsertWithoutUsuarioInput = {
    update: Prisma.XOR<Prisma.adminUpdateWithoutUsuarioInput, Prisma.adminUncheckedUpdateWithoutUsuarioInput>;
    create: Prisma.XOR<Prisma.adminCreateWithoutUsuarioInput, Prisma.adminUncheckedCreateWithoutUsuarioInput>;
    where?: Prisma.adminWhereInput;
};
export type adminUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: Prisma.adminWhereInput;
    data: Prisma.XOR<Prisma.adminUpdateWithoutUsuarioInput, Prisma.adminUncheckedUpdateWithoutUsuarioInput>;
};
export type adminUpdateWithoutUsuarioInput = {
    curso?: Prisma.cursoUpdateManyWithoutAdminNestedInput;
};
export type adminUncheckedUpdateWithoutUsuarioInput = {
    curso?: Prisma.cursoUncheckedUpdateManyWithoutAdminNestedInput;
};
export type AdminCountOutputType = {
    curso: number;
};
export type AdminCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    curso?: boolean | AdminCountOutputTypeCountCursoArgs;
};
export type AdminCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AdminCountOutputTypeSelect<ExtArgs> | null;
};
export type AdminCountOutputTypeCountCursoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.cursoWhereInput;
};
export type adminSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuario?: boolean | Prisma.usuarioDefaultArgs<ExtArgs>;
    curso?: boolean | Prisma.admin$cursoArgs<ExtArgs>;
    _count?: boolean | Prisma.AdminCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["admin"]>;
export type adminSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuario?: boolean | Prisma.usuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["admin"]>;
export type adminSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuario?: boolean | Prisma.usuarioDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["admin"]>;
export type adminSelectScalar = {
    id?: boolean;
};
export type adminOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id", ExtArgs["result"]["admin"]>;
export type adminInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.usuarioDefaultArgs<ExtArgs>;
    curso?: boolean | Prisma.admin$cursoArgs<ExtArgs>;
    _count?: boolean | Prisma.AdminCountOutputTypeDefaultArgs<ExtArgs>;
};
export type adminIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.usuarioDefaultArgs<ExtArgs>;
};
export type adminIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.usuarioDefaultArgs<ExtArgs>;
};
export type $adminPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "admin";
    objects: {
        usuario: Prisma.$usuarioPayload<ExtArgs>;
        curso: Prisma.$cursoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
    }, ExtArgs["result"]["admin"]>;
    composites: {};
};
export type adminGetPayload<S extends boolean | null | undefined | adminDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$adminPayload, S>;
export type adminCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<adminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AdminCountAggregateInputType | true;
};
export interface adminDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['admin'];
        meta: {
            name: 'admin';
        };
    };
    findUnique<T extends adminFindUniqueArgs>(args: Prisma.SelectSubset<T, adminFindUniqueArgs<ExtArgs>>): Prisma.Prisma__adminClient<runtime.Types.Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends adminFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, adminFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__adminClient<runtime.Types.Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends adminFindFirstArgs>(args?: Prisma.SelectSubset<T, adminFindFirstArgs<ExtArgs>>): Prisma.Prisma__adminClient<runtime.Types.Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends adminFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, adminFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__adminClient<runtime.Types.Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends adminFindManyArgs>(args?: Prisma.SelectSubset<T, adminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends adminCreateArgs>(args: Prisma.SelectSubset<T, adminCreateArgs<ExtArgs>>): Prisma.Prisma__adminClient<runtime.Types.Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends adminCreateManyArgs>(args?: Prisma.SelectSubset<T, adminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends adminCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, adminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends adminDeleteArgs>(args: Prisma.SelectSubset<T, adminDeleteArgs<ExtArgs>>): Prisma.Prisma__adminClient<runtime.Types.Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends adminUpdateArgs>(args: Prisma.SelectSubset<T, adminUpdateArgs<ExtArgs>>): Prisma.Prisma__adminClient<runtime.Types.Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends adminDeleteManyArgs>(args?: Prisma.SelectSubset<T, adminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends adminUpdateManyArgs>(args: Prisma.SelectSubset<T, adminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends adminUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, adminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends adminUpsertArgs>(args: Prisma.SelectSubset<T, adminUpsertArgs<ExtArgs>>): Prisma.Prisma__adminClient<runtime.Types.Result.GetResult<Prisma.$adminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends adminCountArgs>(args?: Prisma.Subset<T, adminCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AdminCountAggregateOutputType> : number>;
    aggregate<T extends AdminAggregateArgs>(args: Prisma.Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>;
    groupBy<T extends adminGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: adminGroupByArgs['orderBy'];
    } : {
        orderBy?: adminGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, adminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: adminFieldRefs;
}
export interface Prisma__adminClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    usuario<T extends Prisma.usuarioDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usuarioDefaultArgs<ExtArgs>>): Prisma.Prisma__usuarioClient<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    curso<T extends Prisma.admin$cursoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.admin$cursoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$cursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface adminFieldRefs {
    readonly id: Prisma.FieldRef<"admin", 'Int'>;
}
export type adminFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adminSelect<ExtArgs> | null;
    omit?: Prisma.adminOmit<ExtArgs> | null;
    include?: Prisma.adminInclude<ExtArgs> | null;
    where: Prisma.adminWhereUniqueInput;
};
export type adminFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adminSelect<ExtArgs> | null;
    omit?: Prisma.adminOmit<ExtArgs> | null;
    include?: Prisma.adminInclude<ExtArgs> | null;
    where: Prisma.adminWhereUniqueInput;
};
export type adminFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adminSelect<ExtArgs> | null;
    omit?: Prisma.adminOmit<ExtArgs> | null;
    include?: Prisma.adminInclude<ExtArgs> | null;
    where?: Prisma.adminWhereInput;
    orderBy?: Prisma.adminOrderByWithRelationInput | Prisma.adminOrderByWithRelationInput[];
    cursor?: Prisma.adminWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminScalarFieldEnum | Prisma.AdminScalarFieldEnum[];
};
export type adminFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adminSelect<ExtArgs> | null;
    omit?: Prisma.adminOmit<ExtArgs> | null;
    include?: Prisma.adminInclude<ExtArgs> | null;
    where?: Prisma.adminWhereInput;
    orderBy?: Prisma.adminOrderByWithRelationInput | Prisma.adminOrderByWithRelationInput[];
    cursor?: Prisma.adminWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminScalarFieldEnum | Prisma.AdminScalarFieldEnum[];
};
export type adminFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adminSelect<ExtArgs> | null;
    omit?: Prisma.adminOmit<ExtArgs> | null;
    include?: Prisma.adminInclude<ExtArgs> | null;
    where?: Prisma.adminWhereInput;
    orderBy?: Prisma.adminOrderByWithRelationInput | Prisma.adminOrderByWithRelationInput[];
    cursor?: Prisma.adminWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AdminScalarFieldEnum | Prisma.AdminScalarFieldEnum[];
};
export type adminCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adminSelect<ExtArgs> | null;
    omit?: Prisma.adminOmit<ExtArgs> | null;
    include?: Prisma.adminInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.adminCreateInput, Prisma.adminUncheckedCreateInput>;
};
export type adminCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.adminCreateManyInput | Prisma.adminCreateManyInput[];
    skipDuplicates?: boolean;
};
export type adminCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adminSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.adminOmit<ExtArgs> | null;
    data: Prisma.adminCreateManyInput | Prisma.adminCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.adminIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type adminUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adminSelect<ExtArgs> | null;
    omit?: Prisma.adminOmit<ExtArgs> | null;
    include?: Prisma.adminInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.adminUpdateInput, Prisma.adminUncheckedUpdateInput>;
    where: Prisma.adminWhereUniqueInput;
};
export type adminUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.adminUpdateManyMutationInput, Prisma.adminUncheckedUpdateManyInput>;
    where?: Prisma.adminWhereInput;
    limit?: number;
};
export type adminUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adminSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.adminOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.adminUpdateManyMutationInput, Prisma.adminUncheckedUpdateManyInput>;
    where?: Prisma.adminWhereInput;
    limit?: number;
    include?: Prisma.adminIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type adminUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adminSelect<ExtArgs> | null;
    omit?: Prisma.adminOmit<ExtArgs> | null;
    include?: Prisma.adminInclude<ExtArgs> | null;
    where: Prisma.adminWhereUniqueInput;
    create: Prisma.XOR<Prisma.adminCreateInput, Prisma.adminUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.adminUpdateInput, Prisma.adminUncheckedUpdateInput>;
};
export type adminDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adminSelect<ExtArgs> | null;
    omit?: Prisma.adminOmit<ExtArgs> | null;
    include?: Prisma.adminInclude<ExtArgs> | null;
    where: Prisma.adminWhereUniqueInput;
};
export type adminDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.adminWhereInput;
    limit?: number;
};
export type admin$cursoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type adminDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.adminSelect<ExtArgs> | null;
    omit?: Prisma.adminOmit<ExtArgs> | null;
    include?: Prisma.adminInclude<ExtArgs> | null;
};
