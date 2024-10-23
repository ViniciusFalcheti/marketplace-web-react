"use client"

import * as React from "react"
import { format } from "date-fns"
import { DateRange } from "react-day-picker"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { ptBR } from "date-fns/locale"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Calendar as CalendarLucide } from "lucide-react"

interface DateRangePickerProps extends React.ComponentProps<'div'> {
    date: DateRange | undefined
    onDateChange: (data: DateRange | undefined) => void
}

export function DateRangePicker({
    date,
    onDateChange,
    className,
}: DateRangePickerProps) {


  return (
    <div className={cn("grid gap-1", className)}>
      <Popover>
        <PopoverTrigger asChild>
          <Button
            id="date"
            variant={"ghost"}
            className={cn(
              "w-fit justify-center font-normal",
              !date && "text-muted-foreground"
            )}
          >
            <CalendarLucide className="mr-2 h-4 w-4 text-sky-500" />
            {date?.from ? (
              date.to ? (
                <>
                  {format(date.from, "dd 'de' LLLL", {
                    locale: ptBR
                  })} -{" "}
                  {format(date.to, "dd 'de' LLLL", {
                    locale: ptBR
                  })}
                </>
              ) : (
                format(date.from, "LLL dd, y")
              )
            ) : (
              <span>Escolha uma data</span>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={date?.from}
            selected={date}
            onSelect={onDateChange}
            numberOfMonths={2}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
