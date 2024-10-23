import { api } from "@/lib/axios";

export interface GetMonthViewsPerDayReceivedBySellerQuery {
    from?: Date
    to?: Date
}

export type GetMonthViewsPerDayReceivedBySellerResponse = {
    date: string | null
    amount: number
}[]

export async function getMonthViewsPerDayReceivedBySeller({ from, to }: GetMonthViewsPerDayReceivedBySellerQuery) {
    const response = await api.get<GetMonthViewsPerDayReceivedBySellerResponse>('/sellers/metrics/views/days',
        {
            params: {
                from,
                to
            }
        }
    )

    console.log(response.data)

    return response.data
}