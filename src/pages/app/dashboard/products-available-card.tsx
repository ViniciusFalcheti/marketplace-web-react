import { useQuery } from "@tanstack/react-query";
import { Store } from "lucide-react";
import { MatricCardSkeleton } from "./metric-card-skeleton";
import { getMonthProductsAvailableAmount } from "@/api/get-month-products-available-amount";


export function ProductsAvailableCard () {
    const { data: productsAvailable } = useQuery({
        queryFn: getMonthProductsAvailableAmount,
        queryKey: ['metrics', 'products-available']
    })

    return(
        <div className="flex items-center bg-white rounded-2xl p-3 pr-7 gap-4 ">
            <div className="flex items-center justify-center bg-blue-100 text-blue-500 w-20 h-[86px] rounded-2xl">
                <Store size={34} />
            </div>
            { productsAvailable ? (
                <>
                    <div className="flex flex-col">
                            <span className="text-3xl font-bold text-gray-800">{ productsAvailable.amount }</span>
                            <span className="text-sm text-gray-500">Podutos anunciados</span>
                    </div>
                </>
            ) : (
                <MatricCardSkeleton />
            )}
        </div>
    )
}