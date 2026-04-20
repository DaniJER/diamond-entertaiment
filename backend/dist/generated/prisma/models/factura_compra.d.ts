import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type factura_compraModel = runtime.Types.Result.DefaultSelection<Prisma.$factura_compraPayload>;
export type AggregateFactura_compra = {
    _count: Factura_compraCountAggregateOutputType | null;
    _avg: Factura_compraAvgAggregateOutputType | null;
    _sum: Factura_compraSumAggregateOutputType | null;
    _min: Factura_compraMinAggregateOutputType | null;
    _max: Factura_compraMaxAggregateOutputType | null;
};
export type Factura_compraAvgAggregateOutputType = {
    id: number | null;
    usuario_id: number | null;
};
export type Factura_compraSumAggregateOutputType = {
    id: number | null;
    usuario_id: number | null;
};
export type Factura_compraMinAggregateOutputType = {
    id: number | null;
    fecha: Date | null;
    usuario_id: number | null;
};
export type Factura_compraMaxAggregateOutputType = {
    id: number | null;
    fecha: Date | null;
    usuario_id: number | null;
};
export type Factura_compraCountAggregateOutputType = {
    id: number;
    fecha: number;
    usuario_id: number;
    _all: number;
};
export type Factura_compraAvgAggregateInputType = {
    id?: true;
    usuario_id?: true;
};
export type Factura_compraSumAggregateInputType = {
    id?: true;
    usuario_id?: true;
};
export type Factura_compraMinAggregateInputType = {
    id?: true;
    fecha?: true;
    usuario_id?: true;
};
export type Factura_compraMaxAggregateInputType = {
    id?: true;
    fecha?: true;
    usuario_id?: true;
};
export type Factura_compraCountAggregateInputType = {
    id?: true;
    fecha?: true;
    usuario_id?: true;
    _all?: true;
};
export type Factura_compraAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.factura_compraWhereInput;
    orderBy?: Prisma.factura_compraOrderByWithRelationInput | Prisma.factura_compraOrderByWithRelationInput[];
    cursor?: Prisma.factura_compraWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Factura_compraCountAggregateInputType;
    _avg?: Factura_compraAvgAggregateInputType;
    _sum?: Factura_compraSumAggregateInputType;
    _min?: Factura_compraMinAggregateInputType;
    _max?: Factura_compraMaxAggregateInputType;
};
export type GetFactura_compraAggregateType<T extends Factura_compraAggregateArgs> = {
    [P in keyof T & keyof AggregateFactura_compra]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFactura_compra[P]> : Prisma.GetScalarType<T[P], AggregateFactura_compra[P]>;
};
export type factura_compraGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.factura_compraWhereInput;
    orderBy?: Prisma.factura_compraOrderByWithAggregationInput | Prisma.factura_compraOrderByWithAggregationInput[];
    by: Prisma.Factura_compraScalarFieldEnum[] | Prisma.Factura_compraScalarFieldEnum;
    having?: Prisma.factura_compraScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Factura_compraCountAggregateInputType | true;
    _avg?: Factura_compraAvgAggregateInputType;
    _sum?: Factura_compraSumAggregateInputType;
    _min?: Factura_compraMinAggregateInputType;
    _max?: Factura_compraMaxAggregateInputType;
};
export type Factura_compraGroupByOutputType = {
    id: number;
    fecha: Date | null;
    usuario_id: number | null;
    _count: Factura_compraCountAggregateOutputType | null;
    _avg: Factura_compraAvgAggregateOutputType | null;
    _sum: Factura_compraSumAggregateOutputType | null;
    _min: Factura_compraMinAggregateOutputType | null;
    _max: Factura_compraMaxAggregateOutputType | null;
};
export type GetFactura_compraGroupByPayload<T extends factura_compraGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Factura_compraGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Factura_compraGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Factura_compraGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Factura_compraGroupByOutputType[P]>;
}>>;
export type factura_compraWhereInput = {
    AND?: Prisma.factura_compraWhereInput | Prisma.factura_compraWhereInput[];
    OR?: Prisma.factura_compraWhereInput[];
    NOT?: Prisma.factura_compraWhereInput | Prisma.factura_compraWhereInput[];
    id?: Prisma.IntFilter<"factura_compra"> | number;
    fecha?: Prisma.DateTimeNullableFilter<"factura_compra"> | Date | string | null;
    usuario_id?: Prisma.IntNullableFilter<"factura_compra"> | number | null;
    detalle_compra?: Prisma.Detalle_compraListRelationFilter;
    usuario?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.usuarioWhereInput> | null;
};
export type factura_compraOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrderInput | Prisma.SortOrder;
    usuario_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    detalle_compra?: Prisma.detalle_compraOrderByRelationAggregateInput;
    usuario?: Prisma.usuarioOrderByWithRelationInput;
};
export type factura_compraWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.factura_compraWhereInput | Prisma.factura_compraWhereInput[];
    OR?: Prisma.factura_compraWhereInput[];
    NOT?: Prisma.factura_compraWhereInput | Prisma.factura_compraWhereInput[];
    fecha?: Prisma.DateTimeNullableFilter<"factura_compra"> | Date | string | null;
    usuario_id?: Prisma.IntNullableFilter<"factura_compra"> | number | null;
    detalle_compra?: Prisma.Detalle_compraListRelationFilter;
    usuario?: Prisma.XOR<Prisma.UsuarioNullableScalarRelationFilter, Prisma.usuarioWhereInput> | null;
}, "id">;
export type factura_compraOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrderInput | Prisma.SortOrder;
    usuario_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.factura_compraCountOrderByAggregateInput;
    _avg?: Prisma.factura_compraAvgOrderByAggregateInput;
    _max?: Prisma.factura_compraMaxOrderByAggregateInput;
    _min?: Prisma.factura_compraMinOrderByAggregateInput;
    _sum?: Prisma.factura_compraSumOrderByAggregateInput;
};
export type factura_compraScalarWhereWithAggregatesInput = {
    AND?: Prisma.factura_compraScalarWhereWithAggregatesInput | Prisma.factura_compraScalarWhereWithAggregatesInput[];
    OR?: Prisma.factura_compraScalarWhereWithAggregatesInput[];
    NOT?: Prisma.factura_compraScalarWhereWithAggregatesInput | Prisma.factura_compraScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"factura_compra"> | number;
    fecha?: Prisma.DateTimeNullableWithAggregatesFilter<"factura_compra"> | Date | string | null;
    usuario_id?: Prisma.IntNullableWithAggregatesFilter<"factura_compra"> | number | null;
};
export type factura_compraCreateInput = {
    fecha?: Date | string | null;
    detalle_compra?: Prisma.detalle_compraCreateNestedManyWithoutFactura_compraInput;
    usuario?: Prisma.usuarioCreateNestedOneWithoutFactura_compraInput;
};
export type factura_compraUncheckedCreateInput = {
    id?: number;
    fecha?: Date | string | null;
    usuario_id?: number | null;
    detalle_compra?: Prisma.detalle_compraUncheckedCreateNestedManyWithoutFactura_compraInput;
};
export type factura_compraUpdateInput = {
    fecha?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    detalle_compra?: Prisma.detalle_compraUpdateManyWithoutFactura_compraNestedInput;
    usuario?: Prisma.usuarioUpdateOneWithoutFactura_compraNestedInput;
};
export type factura_compraUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    usuario_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    detalle_compra?: Prisma.detalle_compraUncheckedUpdateManyWithoutFactura_compraNestedInput;
};
export type factura_compraCreateManyInput = {
    id?: number;
    fecha?: Date | string | null;
    usuario_id?: number | null;
};
export type factura_compraUpdateManyMutationInput = {
    fecha?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type factura_compraUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    usuario_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type Factura_compraNullableScalarRelationFilter = {
    is?: Prisma.factura_compraWhereInput | null;
    isNot?: Prisma.factura_compraWhereInput | null;
};
export type factura_compraCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
};
export type factura_compraAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
};
export type factura_compraMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
};
export type factura_compraMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    fecha?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
};
export type factura_compraSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    usuario_id?: Prisma.SortOrder;
};
export type Factura_compraListRelationFilter = {
    every?: Prisma.factura_compraWhereInput;
    some?: Prisma.factura_compraWhereInput;
    none?: Prisma.factura_compraWhereInput;
};
export type factura_compraOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type factura_compraCreateNestedOneWithoutDetalle_compraInput = {
    create?: Prisma.XOR<Prisma.factura_compraCreateWithoutDetalle_compraInput, Prisma.factura_compraUncheckedCreateWithoutDetalle_compraInput>;
    connectOrCreate?: Prisma.factura_compraCreateOrConnectWithoutDetalle_compraInput;
    connect?: Prisma.factura_compraWhereUniqueInput;
};
export type factura_compraUpdateOneWithoutDetalle_compraNestedInput = {
    create?: Prisma.XOR<Prisma.factura_compraCreateWithoutDetalle_compraInput, Prisma.factura_compraUncheckedCreateWithoutDetalle_compraInput>;
    connectOrCreate?: Prisma.factura_compraCreateOrConnectWithoutDetalle_compraInput;
    upsert?: Prisma.factura_compraUpsertWithoutDetalle_compraInput;
    disconnect?: Prisma.factura_compraWhereInput | boolean;
    delete?: Prisma.factura_compraWhereInput | boolean;
    connect?: Prisma.factura_compraWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.factura_compraUpdateToOneWithWhereWithoutDetalle_compraInput, Prisma.factura_compraUpdateWithoutDetalle_compraInput>, Prisma.factura_compraUncheckedUpdateWithoutDetalle_compraInput>;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type factura_compraCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.factura_compraCreateWithoutUsuarioInput, Prisma.factura_compraUncheckedCreateWithoutUsuarioInput> | Prisma.factura_compraCreateWithoutUsuarioInput[] | Prisma.factura_compraUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.factura_compraCreateOrConnectWithoutUsuarioInput | Prisma.factura_compraCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.factura_compraCreateManyUsuarioInputEnvelope;
    connect?: Prisma.factura_compraWhereUniqueInput | Prisma.factura_compraWhereUniqueInput[];
};
export type factura_compraUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: Prisma.XOR<Prisma.factura_compraCreateWithoutUsuarioInput, Prisma.factura_compraUncheckedCreateWithoutUsuarioInput> | Prisma.factura_compraCreateWithoutUsuarioInput[] | Prisma.factura_compraUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.factura_compraCreateOrConnectWithoutUsuarioInput | Prisma.factura_compraCreateOrConnectWithoutUsuarioInput[];
    createMany?: Prisma.factura_compraCreateManyUsuarioInputEnvelope;
    connect?: Prisma.factura_compraWhereUniqueInput | Prisma.factura_compraWhereUniqueInput[];
};
export type factura_compraUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.factura_compraCreateWithoutUsuarioInput, Prisma.factura_compraUncheckedCreateWithoutUsuarioInput> | Prisma.factura_compraCreateWithoutUsuarioInput[] | Prisma.factura_compraUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.factura_compraCreateOrConnectWithoutUsuarioInput | Prisma.factura_compraCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.factura_compraUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.factura_compraUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.factura_compraCreateManyUsuarioInputEnvelope;
    set?: Prisma.factura_compraWhereUniqueInput | Prisma.factura_compraWhereUniqueInput[];
    disconnect?: Prisma.factura_compraWhereUniqueInput | Prisma.factura_compraWhereUniqueInput[];
    delete?: Prisma.factura_compraWhereUniqueInput | Prisma.factura_compraWhereUniqueInput[];
    connect?: Prisma.factura_compraWhereUniqueInput | Prisma.factura_compraWhereUniqueInput[];
    update?: Prisma.factura_compraUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.factura_compraUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.factura_compraUpdateManyWithWhereWithoutUsuarioInput | Prisma.factura_compraUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.factura_compraScalarWhereInput | Prisma.factura_compraScalarWhereInput[];
};
export type factura_compraUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: Prisma.XOR<Prisma.factura_compraCreateWithoutUsuarioInput, Prisma.factura_compraUncheckedCreateWithoutUsuarioInput> | Prisma.factura_compraCreateWithoutUsuarioInput[] | Prisma.factura_compraUncheckedCreateWithoutUsuarioInput[];
    connectOrCreate?: Prisma.factura_compraCreateOrConnectWithoutUsuarioInput | Prisma.factura_compraCreateOrConnectWithoutUsuarioInput[];
    upsert?: Prisma.factura_compraUpsertWithWhereUniqueWithoutUsuarioInput | Prisma.factura_compraUpsertWithWhereUniqueWithoutUsuarioInput[];
    createMany?: Prisma.factura_compraCreateManyUsuarioInputEnvelope;
    set?: Prisma.factura_compraWhereUniqueInput | Prisma.factura_compraWhereUniqueInput[];
    disconnect?: Prisma.factura_compraWhereUniqueInput | Prisma.factura_compraWhereUniqueInput[];
    delete?: Prisma.factura_compraWhereUniqueInput | Prisma.factura_compraWhereUniqueInput[];
    connect?: Prisma.factura_compraWhereUniqueInput | Prisma.factura_compraWhereUniqueInput[];
    update?: Prisma.factura_compraUpdateWithWhereUniqueWithoutUsuarioInput | Prisma.factura_compraUpdateWithWhereUniqueWithoutUsuarioInput[];
    updateMany?: Prisma.factura_compraUpdateManyWithWhereWithoutUsuarioInput | Prisma.factura_compraUpdateManyWithWhereWithoutUsuarioInput[];
    deleteMany?: Prisma.factura_compraScalarWhereInput | Prisma.factura_compraScalarWhereInput[];
};
export type factura_compraCreateWithoutDetalle_compraInput = {
    fecha?: Date | string | null;
    usuario?: Prisma.usuarioCreateNestedOneWithoutFactura_compraInput;
};
export type factura_compraUncheckedCreateWithoutDetalle_compraInput = {
    id?: number;
    fecha?: Date | string | null;
    usuario_id?: number | null;
};
export type factura_compraCreateOrConnectWithoutDetalle_compraInput = {
    where: Prisma.factura_compraWhereUniqueInput;
    create: Prisma.XOR<Prisma.factura_compraCreateWithoutDetalle_compraInput, Prisma.factura_compraUncheckedCreateWithoutDetalle_compraInput>;
};
export type factura_compraUpsertWithoutDetalle_compraInput = {
    update: Prisma.XOR<Prisma.factura_compraUpdateWithoutDetalle_compraInput, Prisma.factura_compraUncheckedUpdateWithoutDetalle_compraInput>;
    create: Prisma.XOR<Prisma.factura_compraCreateWithoutDetalle_compraInput, Prisma.factura_compraUncheckedCreateWithoutDetalle_compraInput>;
    where?: Prisma.factura_compraWhereInput;
};
export type factura_compraUpdateToOneWithWhereWithoutDetalle_compraInput = {
    where?: Prisma.factura_compraWhereInput;
    data: Prisma.XOR<Prisma.factura_compraUpdateWithoutDetalle_compraInput, Prisma.factura_compraUncheckedUpdateWithoutDetalle_compraInput>;
};
export type factura_compraUpdateWithoutDetalle_compraInput = {
    fecha?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    usuario?: Prisma.usuarioUpdateOneWithoutFactura_compraNestedInput;
};
export type factura_compraUncheckedUpdateWithoutDetalle_compraInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    usuario_id?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
};
export type factura_compraCreateWithoutUsuarioInput = {
    fecha?: Date | string | null;
    detalle_compra?: Prisma.detalle_compraCreateNestedManyWithoutFactura_compraInput;
};
export type factura_compraUncheckedCreateWithoutUsuarioInput = {
    id?: number;
    fecha?: Date | string | null;
    detalle_compra?: Prisma.detalle_compraUncheckedCreateNestedManyWithoutFactura_compraInput;
};
export type factura_compraCreateOrConnectWithoutUsuarioInput = {
    where: Prisma.factura_compraWhereUniqueInput;
    create: Prisma.XOR<Prisma.factura_compraCreateWithoutUsuarioInput, Prisma.factura_compraUncheckedCreateWithoutUsuarioInput>;
};
export type factura_compraCreateManyUsuarioInputEnvelope = {
    data: Prisma.factura_compraCreateManyUsuarioInput | Prisma.factura_compraCreateManyUsuarioInput[];
    skipDuplicates?: boolean;
};
export type factura_compraUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.factura_compraWhereUniqueInput;
    update: Prisma.XOR<Prisma.factura_compraUpdateWithoutUsuarioInput, Prisma.factura_compraUncheckedUpdateWithoutUsuarioInput>;
    create: Prisma.XOR<Prisma.factura_compraCreateWithoutUsuarioInput, Prisma.factura_compraUncheckedCreateWithoutUsuarioInput>;
};
export type factura_compraUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: Prisma.factura_compraWhereUniqueInput;
    data: Prisma.XOR<Prisma.factura_compraUpdateWithoutUsuarioInput, Prisma.factura_compraUncheckedUpdateWithoutUsuarioInput>;
};
export type factura_compraUpdateManyWithWhereWithoutUsuarioInput = {
    where: Prisma.factura_compraScalarWhereInput;
    data: Prisma.XOR<Prisma.factura_compraUpdateManyMutationInput, Prisma.factura_compraUncheckedUpdateManyWithoutUsuarioInput>;
};
export type factura_compraScalarWhereInput = {
    AND?: Prisma.factura_compraScalarWhereInput | Prisma.factura_compraScalarWhereInput[];
    OR?: Prisma.factura_compraScalarWhereInput[];
    NOT?: Prisma.factura_compraScalarWhereInput | Prisma.factura_compraScalarWhereInput[];
    id?: Prisma.IntFilter<"factura_compra"> | number;
    fecha?: Prisma.DateTimeNullableFilter<"factura_compra"> | Date | string | null;
    usuario_id?: Prisma.IntNullableFilter<"factura_compra"> | number | null;
};
export type factura_compraCreateManyUsuarioInput = {
    id?: number;
    fecha?: Date | string | null;
};
export type factura_compraUpdateWithoutUsuarioInput = {
    fecha?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    detalle_compra?: Prisma.detalle_compraUpdateManyWithoutFactura_compraNestedInput;
};
export type factura_compraUncheckedUpdateWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    detalle_compra?: Prisma.detalle_compraUncheckedUpdateManyWithoutFactura_compraNestedInput;
};
export type factura_compraUncheckedUpdateManyWithoutUsuarioInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    fecha?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Factura_compraCountOutputType = {
    detalle_compra: number;
};
export type Factura_compraCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    detalle_compra?: boolean | Factura_compraCountOutputTypeCountDetalle_compraArgs;
};
export type Factura_compraCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Factura_compraCountOutputTypeSelect<ExtArgs> | null;
};
export type Factura_compraCountOutputTypeCountDetalle_compraArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.detalle_compraWhereInput;
};
export type factura_compraSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fecha?: boolean;
    usuario_id?: boolean;
    detalle_compra?: boolean | Prisma.factura_compra$detalle_compraArgs<ExtArgs>;
    usuario?: boolean | Prisma.factura_compra$usuarioArgs<ExtArgs>;
    _count?: boolean | Prisma.Factura_compraCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["factura_compra"]>;
export type factura_compraSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fecha?: boolean;
    usuario_id?: boolean;
    usuario?: boolean | Prisma.factura_compra$usuarioArgs<ExtArgs>;
}, ExtArgs["result"]["factura_compra"]>;
export type factura_compraSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    fecha?: boolean;
    usuario_id?: boolean;
    usuario?: boolean | Prisma.factura_compra$usuarioArgs<ExtArgs>;
}, ExtArgs["result"]["factura_compra"]>;
export type factura_compraSelectScalar = {
    id?: boolean;
    fecha?: boolean;
    usuario_id?: boolean;
};
export type factura_compraOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "fecha" | "usuario_id", ExtArgs["result"]["factura_compra"]>;
export type factura_compraInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    detalle_compra?: boolean | Prisma.factura_compra$detalle_compraArgs<ExtArgs>;
    usuario?: boolean | Prisma.factura_compra$usuarioArgs<ExtArgs>;
    _count?: boolean | Prisma.Factura_compraCountOutputTypeDefaultArgs<ExtArgs>;
};
export type factura_compraIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.factura_compra$usuarioArgs<ExtArgs>;
};
export type factura_compraIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    usuario?: boolean | Prisma.factura_compra$usuarioArgs<ExtArgs>;
};
export type $factura_compraPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "factura_compra";
    objects: {
        detalle_compra: Prisma.$detalle_compraPayload<ExtArgs>[];
        usuario: Prisma.$usuarioPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        fecha: Date | null;
        usuario_id: number | null;
    }, ExtArgs["result"]["factura_compra"]>;
    composites: {};
};
export type factura_compraGetPayload<S extends boolean | null | undefined | factura_compraDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$factura_compraPayload, S>;
export type factura_compraCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<factura_compraFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Factura_compraCountAggregateInputType | true;
};
export interface factura_compraDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['factura_compra'];
        meta: {
            name: 'factura_compra';
        };
    };
    findUnique<T extends factura_compraFindUniqueArgs>(args: Prisma.SelectSubset<T, factura_compraFindUniqueArgs<ExtArgs>>): Prisma.Prisma__factura_compraClient<runtime.Types.Result.GetResult<Prisma.$factura_compraPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends factura_compraFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, factura_compraFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__factura_compraClient<runtime.Types.Result.GetResult<Prisma.$factura_compraPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends factura_compraFindFirstArgs>(args?: Prisma.SelectSubset<T, factura_compraFindFirstArgs<ExtArgs>>): Prisma.Prisma__factura_compraClient<runtime.Types.Result.GetResult<Prisma.$factura_compraPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends factura_compraFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, factura_compraFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__factura_compraClient<runtime.Types.Result.GetResult<Prisma.$factura_compraPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends factura_compraFindManyArgs>(args?: Prisma.SelectSubset<T, factura_compraFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$factura_compraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends factura_compraCreateArgs>(args: Prisma.SelectSubset<T, factura_compraCreateArgs<ExtArgs>>): Prisma.Prisma__factura_compraClient<runtime.Types.Result.GetResult<Prisma.$factura_compraPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends factura_compraCreateManyArgs>(args?: Prisma.SelectSubset<T, factura_compraCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends factura_compraCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, factura_compraCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$factura_compraPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends factura_compraDeleteArgs>(args: Prisma.SelectSubset<T, factura_compraDeleteArgs<ExtArgs>>): Prisma.Prisma__factura_compraClient<runtime.Types.Result.GetResult<Prisma.$factura_compraPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends factura_compraUpdateArgs>(args: Prisma.SelectSubset<T, factura_compraUpdateArgs<ExtArgs>>): Prisma.Prisma__factura_compraClient<runtime.Types.Result.GetResult<Prisma.$factura_compraPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends factura_compraDeleteManyArgs>(args?: Prisma.SelectSubset<T, factura_compraDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends factura_compraUpdateManyArgs>(args: Prisma.SelectSubset<T, factura_compraUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends factura_compraUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, factura_compraUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$factura_compraPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends factura_compraUpsertArgs>(args: Prisma.SelectSubset<T, factura_compraUpsertArgs<ExtArgs>>): Prisma.Prisma__factura_compraClient<runtime.Types.Result.GetResult<Prisma.$factura_compraPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends factura_compraCountArgs>(args?: Prisma.Subset<T, factura_compraCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Factura_compraCountAggregateOutputType> : number>;
    aggregate<T extends Factura_compraAggregateArgs>(args: Prisma.Subset<T, Factura_compraAggregateArgs>): Prisma.PrismaPromise<GetFactura_compraAggregateType<T>>;
    groupBy<T extends factura_compraGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: factura_compraGroupByArgs['orderBy'];
    } : {
        orderBy?: factura_compraGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, factura_compraGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFactura_compraGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: factura_compraFieldRefs;
}
export interface Prisma__factura_compraClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    detalle_compra<T extends Prisma.factura_compra$detalle_compraArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.factura_compra$detalle_compraArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$detalle_compraPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    usuario<T extends Prisma.factura_compra$usuarioArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.factura_compra$usuarioArgs<ExtArgs>>): Prisma.Prisma__usuarioClient<runtime.Types.Result.GetResult<Prisma.$usuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface factura_compraFieldRefs {
    readonly id: Prisma.FieldRef<"factura_compra", 'Int'>;
    readonly fecha: Prisma.FieldRef<"factura_compra", 'DateTime'>;
    readonly usuario_id: Prisma.FieldRef<"factura_compra", 'Int'>;
}
export type factura_compraFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.factura_compraSelect<ExtArgs> | null;
    omit?: Prisma.factura_compraOmit<ExtArgs> | null;
    include?: Prisma.factura_compraInclude<ExtArgs> | null;
    where: Prisma.factura_compraWhereUniqueInput;
};
export type factura_compraFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.factura_compraSelect<ExtArgs> | null;
    omit?: Prisma.factura_compraOmit<ExtArgs> | null;
    include?: Prisma.factura_compraInclude<ExtArgs> | null;
    where: Prisma.factura_compraWhereUniqueInput;
};
export type factura_compraFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.factura_compraSelect<ExtArgs> | null;
    omit?: Prisma.factura_compraOmit<ExtArgs> | null;
    include?: Prisma.factura_compraInclude<ExtArgs> | null;
    where?: Prisma.factura_compraWhereInput;
    orderBy?: Prisma.factura_compraOrderByWithRelationInput | Prisma.factura_compraOrderByWithRelationInput[];
    cursor?: Prisma.factura_compraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Factura_compraScalarFieldEnum | Prisma.Factura_compraScalarFieldEnum[];
};
export type factura_compraFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.factura_compraSelect<ExtArgs> | null;
    omit?: Prisma.factura_compraOmit<ExtArgs> | null;
    include?: Prisma.factura_compraInclude<ExtArgs> | null;
    where?: Prisma.factura_compraWhereInput;
    orderBy?: Prisma.factura_compraOrderByWithRelationInput | Prisma.factura_compraOrderByWithRelationInput[];
    cursor?: Prisma.factura_compraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Factura_compraScalarFieldEnum | Prisma.Factura_compraScalarFieldEnum[];
};
export type factura_compraFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.factura_compraSelect<ExtArgs> | null;
    omit?: Prisma.factura_compraOmit<ExtArgs> | null;
    include?: Prisma.factura_compraInclude<ExtArgs> | null;
    where?: Prisma.factura_compraWhereInput;
    orderBy?: Prisma.factura_compraOrderByWithRelationInput | Prisma.factura_compraOrderByWithRelationInput[];
    cursor?: Prisma.factura_compraWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Factura_compraScalarFieldEnum | Prisma.Factura_compraScalarFieldEnum[];
};
export type factura_compraCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.factura_compraSelect<ExtArgs> | null;
    omit?: Prisma.factura_compraOmit<ExtArgs> | null;
    include?: Prisma.factura_compraInclude<ExtArgs> | null;
    data?: Prisma.XOR<Prisma.factura_compraCreateInput, Prisma.factura_compraUncheckedCreateInput>;
};
export type factura_compraCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.factura_compraCreateManyInput | Prisma.factura_compraCreateManyInput[];
    skipDuplicates?: boolean;
};
export type factura_compraCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.factura_compraSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.factura_compraOmit<ExtArgs> | null;
    data: Prisma.factura_compraCreateManyInput | Prisma.factura_compraCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.factura_compraIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type factura_compraUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.factura_compraSelect<ExtArgs> | null;
    omit?: Prisma.factura_compraOmit<ExtArgs> | null;
    include?: Prisma.factura_compraInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.factura_compraUpdateInput, Prisma.factura_compraUncheckedUpdateInput>;
    where: Prisma.factura_compraWhereUniqueInput;
};
export type factura_compraUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.factura_compraUpdateManyMutationInput, Prisma.factura_compraUncheckedUpdateManyInput>;
    where?: Prisma.factura_compraWhereInput;
    limit?: number;
};
export type factura_compraUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.factura_compraSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.factura_compraOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.factura_compraUpdateManyMutationInput, Prisma.factura_compraUncheckedUpdateManyInput>;
    where?: Prisma.factura_compraWhereInput;
    limit?: number;
    include?: Prisma.factura_compraIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type factura_compraUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.factura_compraSelect<ExtArgs> | null;
    omit?: Prisma.factura_compraOmit<ExtArgs> | null;
    include?: Prisma.factura_compraInclude<ExtArgs> | null;
    where: Prisma.factura_compraWhereUniqueInput;
    create: Prisma.XOR<Prisma.factura_compraCreateInput, Prisma.factura_compraUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.factura_compraUpdateInput, Prisma.factura_compraUncheckedUpdateInput>;
};
export type factura_compraDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.factura_compraSelect<ExtArgs> | null;
    omit?: Prisma.factura_compraOmit<ExtArgs> | null;
    include?: Prisma.factura_compraInclude<ExtArgs> | null;
    where: Prisma.factura_compraWhereUniqueInput;
};
export type factura_compraDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.factura_compraWhereInput;
    limit?: number;
};
export type factura_compra$detalle_compraArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type factura_compra$usuarioArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usuarioSelect<ExtArgs> | null;
    omit?: Prisma.usuarioOmit<ExtArgs> | null;
    include?: Prisma.usuarioInclude<ExtArgs> | null;
    where?: Prisma.usuarioWhereInput;
};
export type factura_compraDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.factura_compraSelect<ExtArgs> | null;
    omit?: Prisma.factura_compraOmit<ExtArgs> | null;
    include?: Prisma.factura_compraInclude<ExtArgs> | null;
};
