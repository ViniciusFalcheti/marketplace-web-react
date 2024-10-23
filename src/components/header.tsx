import { ChartColumnIncreasing, Package, Plus } from "lucide-react";
import { NavLink } from "./nav-link";

export function Header () {
    return(
        <div className="flex items-center justify-between py-4 px-4 bg-[#fbf4f4] border-b-2 border-[#f5eaea]">
            <div className="w-[224px]">
                <img src="/Logo-minimal.svg" alt="" height={40} width={56} />
            </div>

            <div className="flex gap-6 text-gray-500 text-sm">
                {/* <div className="flex gap-1 items-center py-2 px-4 rounded-lg bg-rose-50"> */}
                <NavLink to="/">
                    <ChartColumnIncreasing size={18} />
                    <span>Dashboard</span>
                </NavLink>
                {/* <div className="flex gap-1 items-center"> */}
                <NavLink to="/products">
                    <Package size={18} />
                    <span>Produtos</span>
                </NavLink>
            </div>

            <div className="flex gap-4 items-center">
                <button className="flex items-center justify-center gap-1 h-10 w-40 bg-orange-600 text-white rounded-lg">
                    <Plus />
                    <span>Novo produto</span>
                </button>

                <img src="https://github.com/viniciusFalcheti.png" alt="" width={48} height={48} className="rounded-lg" />                
            </div>
        </div>
    )
}