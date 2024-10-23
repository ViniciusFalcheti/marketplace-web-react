import { useQuery } from "@tanstack/react-query";
import { Users } from "lucide-react";
import { MatricCardSkeleton } from "./metric-card-skeleton";
import { getMonthViewsReceivedBySeller } from "@/api/get-views-received-by-seller";

export function ViewsReceivedCard () {
    const { data: viewsReceived } = useQuery({
        queryFn: getMonthViewsReceivedBySeller,
        queryKey: ['metrics', 'views-received']
    })

    return(
        <div className="flex items-center bg-white rounded-2xl p-3 pr-7 gap-4 ">
            <div className="flex items-center justify-center bg-blue-100 text-blue-500 w-20 h-[86px] rounded-2xl">
                <Users size={34} />
            </div>
            { viewsReceived ? (
                <>
                    <div className="flex flex-col">
                        <span className="text-3xl font-bold text-gray-800">{ viewsReceived.amount }</span>
                        <span className="text-sm text-gray-500">Visitas</span>
                    </div>
                </>
            ) : (
                <MatricCardSkeleton />
            )}
        </div>
    )
}