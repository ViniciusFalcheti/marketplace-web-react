import { api } from "@/lib/axios";

export interface GetMonthProductsSoldAmountResponse {
    amount: number
}

export async function getMonthProductsSoldAmount() {
    const response = await api.get<GetMonthProductsSoldAmountResponse>('/sellers/metrics/products/sold')

    return response.data
}