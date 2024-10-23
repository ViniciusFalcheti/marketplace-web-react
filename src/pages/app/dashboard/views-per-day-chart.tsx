import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { CustomTooltip } from "./custom-tooltip";
import { getMonthViewsPerDayReceivedBySeller } from "@/api/get-views-per-day-received-by-seller";
import { useQuery } from "@tanstack/react-query";
import { subDays } from "date-fns";
import { useMemo, useState } from "react";
import { DateRange } from "react-day-picker";
import { DateRangePicker } from "@/components/ui/date-range-picker";
import { Loader2 } from "lucide-react";

const data = [
    {
        name: 'test1',
        amount: 10,
    },
    {
        name: 'test2',
        amount: 50,
    },
    {
        name: 'test3',
        amount: 180,
    },
    {
        name: 'test4',
        amount: 40,
    },
    {
        name: 'test5',
        amount: 50,
    },
    {
        name: 'test6',
        amount: 60,
    },
]

export function ViewsPerDayChart () {
    const [dateRange, setDateRange] = useState<DateRange | undefined>({
        from: subDays(new Date(), 7),
        to: new Date()
    })

    const { data: viewsPerDayReceived } = useQuery({
        queryFn: () => getMonthViewsPerDayReceivedBySeller({
            from: dateRange?.from,
            to: dateRange?.to
        }),
        queryKey: ['metrics', 'views-per-day-received']
    })

    // const chartData = useMemo(()=> {
    //     return viewsPerDayReceived?.map((chartItem)=> {
    //        return {
    //         date: chartItem.date,
    //         amount: chartItem.amount
    //        } 
    //     })
    // },[viewsPerDayReceived])

    return (
        <div className="flex-1 flex flex-col bg-white rounded-2xl p-6 gap-7">
            <div className="flex justify-between items-center">
                <h1 className="text-base font-bold">Visitantes</h1>
                <DateRangePicker date={dateRange} onDateChange={setDateRange} />
            </div>
            {viewsPerDayReceived ? (
                <ResponsiveContainer height='100%' width='100%' className="flex gap-7">
                        <LineChart data={viewsPerDayReceived}>
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <Tooltip content={<CustomTooltip />}/>
                            <CartesianGrid stroke="#0300000" strokeDasharray="5 5"/>
                            <Line type="monotone" dataKey="amount" stroke="#5EC5FD" />
                        </LineChart>
                </ResponsiveContainer>
            ) : (
                <div className="flex h-full w-full items-center justify-center">
                    <Loader2 className="w-8 h-8 text-muted-foreground animate-spin"/>
                </div>    
            )}
        </div>
     )
}