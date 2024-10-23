import { api } from "@/lib/axios";

export interface GetMonthViewsReceivedBySellerResponse {
    amount: number
}

export async function getMonthViewsReceivedBySeller() {
    const response = await api.get<GetMonthViewsReceivedBySellerResponse>('/sellers/metrics/views')

    return response.data
}