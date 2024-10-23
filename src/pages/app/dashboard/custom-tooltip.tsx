import { Users } from "lucide-react";

interface CustomTooltipProps{
    active: boolean,
    payload: [
        value: number
    ],
    label: string
}

export const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
    if (active && payload && payload.length) {
      return (
        <div className="flex flex-col p-3 rounded-xl bg-white gap-2">
            <span className="uppercase font-bold text-xs">
                {label}
            </span>
            <div className="flex gap-2 items-center text-gray-500">
                <Users size={14}/>
                <span>{payload[0].value} visitantes</span>
            </div>
        </div>
      )
    }
  
    return null;
}