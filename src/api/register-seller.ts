import { api } from "@/lib/axios";

export interface RegisterSellerBody {
    name: string
    email: string
    phone: string
    avatarId: string | null
    password: string
    passwordConfirmation: string
}

export async function registerSeller({ 
    name,
    email,
    phone,
    avatarId,
    password,
    passwordConfirmation 
}
    : RegisterSellerBody) {
    await api.post('/sellers', {
        name,
        email,
        phone,
        avatarId,
        password,
        passwordConfirmation
    })
}