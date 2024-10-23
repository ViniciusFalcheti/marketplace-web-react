import { Header } from "@/components/header";
import { api } from "@/lib/axios";
import { isAxiosError } from "axios";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export function AppLayout() {
    const navigate = useNavigate()

    useEffect(() => {
        const interceptorId = api.interceptors.response.use(
            response => response,
            error => {
                if(isAxiosError(error)) {
                    const status = error.response?.status
                    const code = error.response?.data.code

                    if (status === 401 && code === 'UNAUTHORIZED') {
                        navigate('/sign-in', { replace: true })
                    }
                    else{
                        throw error
                    }
                }
            }
        )

        return () => {
            api.interceptors.response.eject(interceptorId)
        } 
    },[navigate])

    return (
        <div className="h-screen bg-[#fbf4f4]">
            <Header />
            <div className="py-16 px-24  text-gray-900">
                <Outlet />
            </div>
        </div>
    )
}