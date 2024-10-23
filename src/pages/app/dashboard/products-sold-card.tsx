import { useQuery } from "@tanstack/react-query";
import { Wallet } from "lucide-react";
import { MatricCardSkeleton } from "./metric-card-skeleton";
import { getMonthProductsSoldAmount } from "@/api/get-month-products-sold-amount";


export function ProductsSoldCard () {
    const { data: productsSold } = useQuery({
        queryFn: getMonthProductsSoldAmount,
        queryKey: ['metrics', 'products-sold']
    })

    return(
        <div className="flex items-center bg-white rounded-2xl p-3 pr-7 gap-4 ">
            <div className="flex items-center justify-center bg-blue-100 text-blue-500 w-20 h-[86px] rounded-2xl">
                <Wallet size={34} />
            </div>
            { productsSold ? (
                <>
                    <div className="flex flex-col">
                            <span className="text-3xl font-bold text-gray-800">{ productsSold.amount }</span>
                            <span className="text-sm text-gray-500">Podutos vendidos</span>
                    </div>
                </>
            ) : (
                <MatricCardSkeleton />
            )}
        </div>
    )
}