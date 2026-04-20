import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type carritoModel = runtime.Types.Result.DefaultSelection<Prisma.$carritoPayload>;
export type AggregateCarrito = {
    _count: CarritoCountAggregateOutputType | null;
    _avg: CarritoAvgAggregateOutputType | null;
    _sum: CarritoSumAggregateOutputType | null;
    _min: CarritoMinAggregateOutputType | null;
    _max: CarritoMaxAggregateOutputType | null;
};
export type CarritoAvgAggregateOutputType = {
    id: number | null;
    usuario_id: number | null;
};
export type CarritoSumAggregateOutputType = {
    id: number | null;
    usuario_id: number | null;
};
export type CarritoMinAggregateOutputType = {
    id: number | null;
    usuario_id: number | null;
};
export type CarritoMaxAggregateOutputType = {
    id: number | null;
    usuario_id: number | null;
};
export type CarritoCountAggregateOutputType = {
    id: number;
    usuario_id: number;
    _all: number;
};
export type CarritoAvgAggregateInputType = {
    id?: true;
    usuario_id?: true;
};
export type CarritoSumAggregateInputType = {
    id?: true;
    usuario_id?: true;
};
export type CarritoMinAggregateInputType = {
    id?: true;
    usuario_id?: true;
};
export type CarritoMaxAggregateInputType = {
    id?: true;
    usuario_id?: true;
};
export type CarritoCountAggregateInputType = {
    id?: true;
    usuario_id?: true;
    _all?: true;
};
export type CarritoAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.carritoWhereInput;
    orderBy?: Prisma.carritoOrderByWithRelationInput | Prisma.carritoOrderByWithRelationInput[];
    cursor?: Prisma.carritoWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CarritoCountAggregateInputType;
    _avg?: CarritoAvgAggregateInputType;
    _sum?: CarritoSumAggregateInputType;
    _min?: CarritoMinAggregateInputType;
    _max?: CarritoMaxAggregateInputType;
};
export type GetCarritoAggregateType<T extends CarritoAggregateArgs> = {
    [P in keyof T & keyof AggregateCarrito]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCarrito[P]> : Prisma.GetScalarType<T[P], AggregateCarrito[P]>;
};
export type carritoGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.carritoWhereInput;
    orderBy?: Prisma.carritoOrderByWithAggregationInput | Prisma.carritoOrderByWithAggregationInput[];
    by: Prisma.CarritoScalarFieldEnum[] | Prisma.CarritoScalarFieldEnum;
    having?: Prisma.carritoScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CarritoCountAggregateInputType | true;
    _avg?: CarritoAvgAggregateInputType;
    _sum?: CarritoSumAggregateInputType;
    _min?: CarritoMinAggregateInputType;
    _max?: CarritoMaxAggregateInputType;
};
export type CarritoGroupByOutputType = {
    id: number;
    usuario_id: number | null;
    _count: CarritoCountAggregateOutputType | null;
    _avg: CarritoAvgAggregateOutputType | null;
    _sum: CarritoSumAggregateOutputType | null;
    _min: CarritoMinAggregateOutputType | null;
    _max: CarritoMaxAggregateOutputType | null;
};
export type GetCarritoGroupByPayload<T extends carritoGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CarritoGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CarritoGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CarritoGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CarritoGroupByOutputType[P]>;
}>>;
export type carritoWhereInput = {
    AND?: Prisma.carritoWhereInput | Prisma.carritoWhereInput[];
    OR?: Prisma.carritoWhereInput[];
    NOT?: Prisma.carritoWhereInput | Prisma.carritoWhereInput[];
    id?: Prisma.IntFilter<"carrito"> | number;
    usuario_id?: Prisma.IntNullableFilter<"carrito"> | number | null;
    usuario?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.usuarioWhereInput> | null;
    carrito_curso?: Prisma.Carrito_cursoListRelationFilter;
};
export type carritoOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    usuario?: Prisma.usuarioOrderByWithRelationInput;
    carrito_curso?: Prisma.carrito_cursoOrderByRelationAggregateInput;
};
export type carritoWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    usuario_id?: number;
    AND?: Prisma.carritoWhereInput | Prisma.carritoWhereInput[];
    OR?: Prisma.carritoWhereInput[];
    NOT?: Prisma.carritoWhereInput | Prisma.carritoWhereInput[];
    usuario?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.usuarioWhereInput> | null;
    carrito_curso?: Prisma.Carrito_cursoListRelationFilter;
}, "id" | "usuario_id">;
export type carritoOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.carritoCountOrderByAggregateInput;
    _avg?: Prisma.carritoAvgOrderByAggregateInput;
    _max?: Prisma.carritoMaxOrderByAggregateInput;
    _min?: Prisma.carritoMinOrderByAggregateInput;
    _sum?: Prisma.carritoSumOrderByAggregateInput;
};
export type carritoScalarWhereWithAggregatesInput = {
    AND?: Prisma.carritoScalarWhereWithAggregatesInput | Prisma.carritoScalarWhereWithAggregatesInput[];
    OR?: Prisma.carritoScalarWhereWithAggregatesInput[];
    NOT?: Prisma.carritoScalarWhereWithAggregatesInput | Prisma.carritoScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"carrito"> | number;
    usuario_id?: Prisma.IntNullableWithAggregatesFilter<"carrito"> | number | null;
};
export type carritoCreateInput = {
    usuario?: Prisma.usuarioCreateNestedOneWithoutCarritoInput;
    carrito_curso?: Prisma.carrito_cursoCreateNestedManyWithoutCarritoInput;
};
export type carritoUncheckedCreateInput = {
    id?: number;
    usuario_id?: number | null;
    carrito_curso?: Prisma.carrito_cursoUncheckedCreateNestedManyWithoutCarritoInput;
};
export type carritoUpdateInput = {
    usuario?: Prisma.usuarioUpdateOneWithoutCarritoNestedInput;
    carrito_curso?: Prisma.carrito_cursoUpdateManyWithoutCarritoNestedInput;
};
export type carritoUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuario_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    carrito_curso?: Prisma.carrito_cursoUncheckedUpdateManyWithoutCarritoNestedInput;
};
export type carritoCreateManyInput = {
    id?: number;
    usuario_id?: number | null;
};
export type carritoUpdateManyMutationInput = {};
export type carritoUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuario_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type carritoCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
};
export type carritoAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
};
export type carritoMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
};
export type carritoMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
};
export type carritoSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
};
export type CarritoNullableScalarRelationFilter = {
    is?: Prisma.carritoWhereInput | null;
    isNot?: Prisma.carritoWhereInput | null;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type carritoCreateNestedOneWithoutCarrito_cursoInput = {
    create?: Prisma.XOR<Prisma.carritoCreateWithoutCarrito_cursoInput, Prisma.carritoUncheckedCreateWithoutCarrito_cursoInput>;
    connectOrCreate?: Prisma.carritoCreateOrConnectWithoutCarrito_cursoInput;
    connect?: Prisma.carritoWhereUniqueInput;
};
export type carritoUpdateOneWithoutCarrito_cursoNestedInput = {
    create?: Prisma.XOR<Prisma.carritoCreateWithoutCarrito_cursoInput, Prisma.carritoUncheckedCreateWithoutCarrito_cursoInput>;
    connectOrCreate?: Prisma.carritoCreateOrConnectWithoutCarrito_cursoInput;
    upsert?: Prisma.carritoUpsertWithoutCarrito_cursoInput;
    disconnect?: Prisma.carritoWhereInput | boolean;
    delete?: Prisma.carritoWhereInput | boolean;
    connect?: Prisma.carritoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.carritoUpdateToOneWithWhereWithoutCarrito_cursoInput, Prisma.carritoUpdateWithoutCarrito_cursoInput>, Prisma.carritoUncheckedUpdateWithoutCarrito_cursoInput>;
};
export type carritoCreateNestedOneWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.carritoCreateWithoutUsuarioInput, Prisma.carritoUncheckedCreateWithoutUsuarioInput>;
    connectOrCreate?: Prisma.carritoCreateOrConnectWithoutUsuarioInput;
    connect?: Prisma.carritoWhereUniqueInput;
};
export type carritoUncheckedCreateNestedOneWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.carritoCreateWithoutUsuarioInput, Prisma.carritoUncheckedCreateWithoutUsuarioInput>;
    connectOrCreate?: Prisma.carritoCreateOrConnectWithoutUsuarioInput;
    connect?: Prisma.carritoWhereUniqueInput;
};
export type carritoUpdateOneWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.carritoCreateWithoutUsuarioInput, Prisma.carritoUncheckedCreateWithoutUsuarioInput>;
    connectOrCreate?: Prisma.carritoCreateOrConnectWithoutUsuarioInput;
    upsert?: Prisma.carritoUpsertWithoutUsuarioInput;
    disconnect?: Prisma.carritoWhereInput | boolean;
    delete?: Prisma.carritoWhereInput | boolean;
    connect?: Prisma.carritoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.carritoUpdateToOneWithWhereWithoutUsuarioInput, Prisma.carritoUpdateWithoutUsuarioInput>, Prisma.carritoUncheckedUpdateWithoutUsuarioInput>;
};
export type carritoUncheckedUpdateOneWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.carritoCreateWithoutUsuarioInput, Prisma.carritoUncheckedCreateWithoutUsuarioInput>;
    connectOrCreate?: Prisma.carritoCreateOrConnectWithoutUsuarioInput;
    upsert?: Prisma.carritoUpsertWithoutUsuarioInput;
    disconnect?: Prisma.carritoWhereInput | boolean;
    delete?: Prisma.carritoWhereInput | boolean;
    connect?: Prisma.carritoWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.carritoUpdateToOneWithWhereWithoutUsuarioInput, Prisma.carritoUpdateWithoutUsuarioInput>, Prisma.carritoUncheckedUpdateWithoutUsuarioInput>;
};
export type carritoCreateWithoutCarrito_cursoInput = {
    usuario?: Prisma.usuarioCreateNestedOneWithoutCarritoInput;
};
export type carritoUncheckedCreateWithoutCarrito_cursoInput = {
    id?: number;
    usuario_id?: number | null;
};
export type carritoCreateOrConnectWithoutCarrito_cursoInput = {
    where: Prisma.carritoWhereUniqueInput;
    create: Prisma.XOR<Prisma.carritoCreateWithoutCarrito_cursoInput, Prisma.carritoUncheckedCreateWithoutCarrito_cursoInput>;
};
export type carritoUpsertWithoutCarrito_cursoInput = {
    update: Prisma.XOR<Prisma.carritoUpdateWithoutCarrito_cursoInput, Prisma.carritoUncheckedUpdateWithoutCarrito_cursoInput>;
    create: Prisma.XOR<Prisma.carritoCreateWithoutCarrito_cursoInput, Prisma.carritoUncheckedCreateWithoutCarrito_cursoInput>;
    where?: Prisma.carritoWhereInput;
};
export type carritoUpdateToOneWithWhereWithoutCarrito_cursoInput = {
    where?: Prisma.carritoWhereInput;
    data: Prisma.XOR<Prisma.carritoUpdateWithoutCarrito_cursoInput, Prisma.carritoUncheckedUpdateWithoutCarrito_cursoInput>;
};
export type carritoUpdateWithoutCarrito_cursoInput = {
    usuario?: Prisma.usuarioUpdateOneWithoutCarritoNestedInput;
};
export type carritoUncheckedUpdateWithoutCarrito_cursoInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    usuario_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type carritoCreateWithoutUsuarioInput = {
    carrito_curso?: Prisma.carrito_cursoCreateNestedManyWithoutCarritoInput;
};
export type carritoUncheckedCreateWithoutUsuarioInput = {
    id?: number;
    carrito_curso?: Prisma.carrito_cursoUncheckedCreateNestedManyWithoutCarritoInput;
};
export type carritoCreateOrConnectWithoutUsuarioInput = {
    where: Prisma.carritoWhereUniqueInput;
    create: Prisma.XOR<Prisma.carritoCreateWithoutUsuarioInput, Prisma.carritoUncheckedCreateWithoutUsuarioInput>;
};
export type carritoUpsertWithoutUsuarioInput = {
    update: Prisma.XOR<Prisma.carritoUpdateWithoutUsuarioInput, Prisma.carritoUncheckedUpdateWithoutUsuarioInput>;
    create: Prisma.XOR<Prisma.carritoCreateWithoutUsuarioInput, Prisma.carritoUncheckedCreateWithoutUsuarioInput>;
    where?: Prisma.carritoWhereInput;
};
export type carritoUpdateToOneWithWhereWithoutUsuarioInput = {
    where?: Prisma.carritoWhereInput;
    data: Prisma.XOR<Prisma.carritoUpdateWithoutUsuarioInput, Prisma.carritoUncheckedUpdateWithoutUsuarioInput>;
};
export type carritoUpdateWithoutUsuarioInput = {
    carrito_curso?: Prisma.carrito_cursoUpdateManyWithoutCarritoNestedInput;
};
export type carritoUncheckedUpdateWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    carrito_curso?: Prisma.carrito_cursoUncheckedUpdateManyWithoutCarritoNestedInput;
};
export type CarritoCountOutputType = {
    carrito_curso: number;
};
export type CarritoCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    carrito_curso?: boolean | CarritoCountOutputTypeCountCarrito_cursoArgs;
};
export type CarritoCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CarritoCountOutputTypeSelect<ExtArgs> | null;
};
export type CarritoCountOutputTypeCountCarrito_cursoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.carrito_cursoWhereInput;
};
export type carritoSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuario_id?: boolean;
    usuario?: boolean | Prisma.carrito$usuarioArgs<ExtArgs>;
    carrito_curso?: boolean | Prisma.carrito$carrito_cursoArgs<ExtArgs>;
    _count?: boolean | Prisma.CarritoCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["carrito"]>;
export type carritoSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuario_id?: boolean;
    usuario?: boolean | Prisma.carrito$usuarioArgs<ExtArgs>;
}, ExtArgs["result"]["carrito"]>;
export type carritoSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    usuario_id?: boolean;
    usuario?: boolean | Prisma.carrito$usuarioArgs<ExtArgs>;
}, ExtArgs["result"]["carrito"]>;
export type carritoSelectScalar = {
    id?: boolean;
    usuario_id?: boolean;
};
export type carritoOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "usuario_id", ExtArgs["result"]["carrito"]>;
export type carritoInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.carrito$usuarioArgs<ExtArgs>;
    carrito_curso?: boolean | Prisma.carrito$carrito_cursoArgs<ExtArgs>;
    _count?: boolean | Prisma.CarritoCountOutputTypeDefaultArgs<ExtArgs>;
};
export type carritoIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.carrito$usuarioArgs<ExtArgs>;
};
export type carritoIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.carrito$usuarioArgs<ExtArgs>;
};
export type $carritoPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "carrito";
    objects: {
        usuario: Prisma.$usuarioPayload<ExtArgs> | null;
        carrito_curso: Prisma.$carrito_cursoPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        usuario_id: number | null;
    }, ExtArgs["result"]["carrito"]>;
    composites: {};
};
export type carritoGetPayload<S extends boolean | null | undefined | carritoDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$carritoPayload, S>;
export type carritoCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<carritoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CarritoCountAggregateInputType | true;
};
export interface carritoDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['carrito'];
        meta: {
            name: 'carrito';
        };
    };
    findUnique<T extends carritoFindUniqueArgs>(args: Prisma.SelectSubset<T, carritoFindUniqueArgs<ExtArgs>>): Prisma.Prisma__carritoClient<runtime.Types.Result.GetResult<Prisma.$carritoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends carritoFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, carritoFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__carritoClient<runtime.Types.Result.GetResult<Prisma.$carritoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends carritoFindFirstArgs>(args?: Prisma.SelectSubset<T, carritoFindFirstArgs<ExtArgs>>): Prisma.Prisma__carritoClient<runtime.Types.Result.GetResult<Prisma.$carritoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends carritoFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, carritoFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__carritoClient<runtime.Types.Result.GetResult<Prisma.$carritoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends carritoFindManyArgs>(args?: Prisma.SelectSubset<T, carritoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$carritoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends carritoCreateArgs>(args: Prisma.SelectSubset<T, carritoCreateArgs<ExtArgs>>): Prisma.Prisma__carritoClient<runtime.Types.Result.GetResult<Prisma.$carritoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends carritoCreateManyArgs>(args?: Prisma.SelectSubset<T, carritoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends carritoCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, carritoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$carritoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends carritoDeleteArgs>(args: Prisma.SelectSubset<T, carritoDeleteArgs<ExtArgs>>): Prisma.Prisma__carritoClient<runtime.Types.Result.GetResult<Prisma.$carritoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends carritoUpdateArgs>(args: Prisma.SelectSubset<T, carritoUpdateArgs<ExtArgs>>): Prisma.Prisma__carritoClient<runtime.Types.Result.GetResult<Prisma.$carritoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends carritoDeleteManyArgs>(args?: Prisma.SelectSubset<T, carritoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends carritoUpdateManyArgs>(args: Prisma.SelectSubset<T, carritoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends carritoUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, carritoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$carritoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends carritoUpsertArgs>(args: Prisma.SelectSubset<T, carritoUpsertArgs<ExtArgs>>): Prisma.Prisma__carritoClient<runtime.Types.Result.GetResult<Prisma.$carritoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends carritoCountArgs>(args?: Prisma.Subset<T, carritoCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CarritoCountAggregateOutputType> : number>;
    aggregate<T extends CarritoAggregateArgs>(args: Prisma.Subset<T, CarritoAggregateArgs>): Prisma.PrismaPromise<GetCarritoAggregateType<T>>;
    groupBy<T extends carritoGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: carritoGroupByArgs['orderBy'];
    } : {
        orderBy?: carritoGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, carritoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarritoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: carritoFieldRefs;
}
export interface Prisma__carritoClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    usuario<T extends Prisma.carrito$usuarioArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.carrito$usuarioArgs<ExtArgs>>): Prisma.Prisma__usuarioClient<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    carrito_curso<T extends Prisma.carrito$carrito_cursoArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.carrito$carrito_cursoArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$carrito_cursoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface carritoFieldRefs {
    readonly id: Prisma.FieldRef<"carrito", 'Int'>;
    readonly usuario_id: Prisma.FieldRef<"carrito", 'Int'>;
}
export type carritoFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carritoSelect<ExtArgs> | null;
    omit?: Prisma.carritoOmit<ExtArgs> | null;
    include?: Prisma.carritoInclude<ExtArgs> | null;
    where: Prisma.carritoWhereUniqueInput;
};
export type carritoFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carritoSelect<ExtArgs> | null;
    omit?: Prisma.carritoOmit<ExtArgs> | null;
    include?: Prisma.carritoInclude<ExtArgs> | null;
    where: Prisma.carritoWhereUniqueInput;
};
export type carritoFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carritoSelect<ExtArgs> | null;
    omit?: Prisma.carritoOmit<ExtArgs> | null;
    include?: Prisma.carritoInclude<ExtArgs> | null;
    where?: Prisma.carritoWhereInput;
    orderBy?: Prisma.carritoOrderByWithRelationInput | Prisma.carritoOrderByWithRelationInput[];
    cursor?: Prisma.carritoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CarritoScalarFieldEnum | Prisma.CarritoScalarFieldEnum[];
};
export type carritoFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carritoSelect<ExtArgs> | null;
    omit?: Prisma.carritoOmit<ExtArgs> | null;
    include?: Prisma.carritoInclude<ExtArgs> | null;
    where?: Prisma.carritoWhereInput;
    orderBy?: Prisma.carritoOrderByWithRelationInput | Prisma.carritoOrderByWithRelationInput[];
    cursor?: Prisma.carritoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CarritoScalarFieldEnum | Prisma.CarritoScalarFieldEnum[];
};
export type carritoFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carritoSelect<ExtArgs> | null;
    omit?: Prisma.carritoOmit<ExtArgs> | null;
    include?: Prisma.carritoInclude<ExtArgs> | null;
    where?: Prisma.carritoWhereInput;
    orderBy?: Prisma.carritoOrderByWithRelationInput | Prisma.carritoOrderByWithRelationInput[];
    cursor?: Prisma.carritoWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CarritoScalarFieldEnum | Prisma.CarritoScalarFieldEnum[];
};
export type carritoCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carritoSelect<ExtArgs> | null;
    omit?: Prisma.carritoOmit<ExtArgs> | null;
    include?: Prisma.carritoInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.carritoCreateInput, Prisma.carritoUncheckedCreateInput>;
};
export type carritoCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.carritoCreateManyInput | Prisma.carritoCreateManyInput[];
    skipDuplicates?: boolean;
};
export type carritoCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carritoSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.carritoOmit<ExtArgs> | null;
    data: Prisma.carritoCreateManyInput | Prisma.carritoCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.carritoIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type carritoUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carritoSelect<ExtArgs> | null;
    omit?: Prisma.carritoOmit<ExtArgs> | null;
    include?: Prisma.carritoInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.carritoUpdateInput, Prisma.carritoUncheckedUpdateInput>;
    where: Prisma.carritoWhereUniqueInput;
};
export type carritoUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.carritoUpdateManyMutationInput, Prisma.carritoUncheckedUpdateManyInput>;
    where?: Prisma.carritoWhereInput;
    limit?: number;
};
export type carritoUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carritoSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.carritoOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.carritoUpdateManyMutationInput, Prisma.carritoUncheckedUpdateManyInput>;
    where?: Prisma.carritoWhereInput;
    limit?: number;
    include?: Prisma.carritoIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type carritoUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carritoSelect<ExtArgs> | null;
    omit?: Prisma.carritoOmit<ExtArgs> | null;
    include?: Prisma.carritoInclude<ExtArgs> | null;
    where: Prisma.carritoWhereUniqueInput;
    create: Prisma.XOR<Prisma.carritoCreateInput, Prisma.carritoUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.carritoUpdateInput, Prisma.carritoUncheckedUpdateInput>;
};
export type carritoDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carritoSelect<ExtArgs> | null;
    omit?: Prisma.carritoOmit<ExtArgs> | null;
    include?: Prisma.carritoInclude<ExtArgs> | null;
    where: Prisma.carritoWhereUniqueInput;
};
export type carritoDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.carritoWhereInput;
    limit?: number;
};
export type carrito$usuarioArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    include?: Prisma.usuarioInclude<ExtArgs> | null;
    where?: Prisma.usuarioWhereInput;
};
export type carrito$carrito_cursoArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type carritoDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.carritoSelect<ExtArgs> | null;
    omit?: Prisma.carritoOmit<ExtArgs> | null;
    include?: Prisma.carritoInclude<ExtArgs> | null;
};
