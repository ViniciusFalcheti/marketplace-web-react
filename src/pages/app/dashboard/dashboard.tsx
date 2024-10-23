import { ViewsPerDayChart } from "./views-per-day-chart";
import { ProductsSoldCard } from "./products-sold-card";
import { ProductsAvailableCard } from "./products-available-card";
import { ViewsReceivedCard } from "./views-received-card";

export function Dashboard() {  
    return (
    <div className="flex flex-col gap-8" >
        <div className="flex flex-col gap-2">
        <h1 className="text-xl font-bold">Últimos 30 dias</h1>
        <p>Confira as estatísticas da sua loja no último mês</p>
        </div>

        <div className="flex gap-4">
            <div className="flex flex-col gap-4">
                <ProductsSoldCard />
                <ProductsAvailableCard />
                <ViewsReceivedCard />
            </div>
            {/* <div className="flex-1 bg-white rounded-lg p-4"> */}
                <ViewsPerDayChart />
            {/* </div> */}
        </div>
    </div>
    );
}
    