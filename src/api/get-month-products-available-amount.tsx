import { api } from "@/lib/axios";

export interface GetMonthProductsAvailableAmountResponse {
    amount: number
}

export async function getMonthProductsAvailableAmount() {
    const response = await api.get<GetMonthProductsAvailableAmountResponse>('/sellers/metrics/products/available')

    return response.data
}