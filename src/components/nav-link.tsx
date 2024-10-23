import { Link, LinkProps, useLocation } from "react-router-dom"


export type NavLinkProps = LinkProps

export function NavLink (props: NavLinkProps) {
    const { pathname } = useLocation()

    return(
        <Link
            data-current={pathname === props.to}
            className="flex gap-1 items-center py-2 px-4 rounded-lg hover:text-orange-600 data-[current=true]:bg-[#f5eaea] data-[current=true]:text-orange-600"
            {...props}
        />
    )
}