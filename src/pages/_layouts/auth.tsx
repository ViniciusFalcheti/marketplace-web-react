import { Outlet } from "react-router-dom";

export function AuthLayout() {
    return (
        <div className="mx-auto flex gap-5 pr-8 pl-20 pb-10 pt-10 h-full box-border max-sm:flex-col">
            <div className="flex flex-col gap-10 w-2/5">
                <img src="/Logo.svg" alt="" width={267} height={68} className="max-sm:w-16 max-lg:w-44" />
                <img src="/image-box.png" alt="" width={755} height={496} />
            </div>

            <div className="rounded-3xl bg-white flex-1 px-20 py-[72px] h-[calc(100vh-144px)] overflow-auto">
                <Outlet />
            </div>
        </div>
    )
}