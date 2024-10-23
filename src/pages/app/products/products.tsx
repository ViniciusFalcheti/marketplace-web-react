export function Products() {
    return(
        <div className="flex flex-col gap-8" >
            <div className="flex flex-col gap-2">
                <h1 className="text-xl font-bold">Seus produtos</h1>
                <p>Acesse gerencie a sua lista de produtos à venda</p>
            </div>

            <div className="flex gap-3">
                <div className="flex flex-col p-4 gap-8 bg-white rounded-xl w-64 h-fit">
                    <span className="font-bold">Filtrar</span>
                    <div className="flex flex-col gap-4">
                        <input type="text" placeholder="Pesquisar" name="search" className="w-full border-b-2" />
                        <input type="text" placeholder="Status" name="status" className="w-full border-b-2" />
                    </div>
                    <button className="flex justify-center items-center p-3 bg-orange-600 text-white rounded-lg h-16 text-base">
                        Aplicar filtro
                    </button>
                </div>

                <div className="flex-1 grid grid-rows-2">
                    <div className="flex flex-col relative bg-white rounded-2xl">
                        <img src="/sofa.png" alt="" width="415" height="340" className="m-1 rounded-2xl" />
                        <div className="mx-8">
                            <div className="flex justify-between items-center">
                                <span className="text-base font-bold text-gray-600">Sofá</span>
                                <span className="flex items-center gap-2 text-base font-bold text-gray-800"> 
                                    <span className="text-sm font-normal">R$</span>
                                    1.200,90
                                </span>
                            </div>
                            <p className="text-sm text-gray-500">
                            Sofá revestido em couro legítimo, com estrutura em madeira maciça e pés em metal cromado.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}