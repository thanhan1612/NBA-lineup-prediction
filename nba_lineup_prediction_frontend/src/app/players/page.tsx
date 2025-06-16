'use client'
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { DataTable } from "./players-data-table";
import { columns } from "./columns";
import { dummyPlayers } from "../dummy-players/dummy-players";
const PlayersDisplay = () => {
    return (
        <div className="m-6 flex flex-col gap-4">
            
            
            <div>
                <DataTable columns={columns} data={dummyPlayers} />
            </div>
        </div>
    )
};
export default PlayersDisplay;
