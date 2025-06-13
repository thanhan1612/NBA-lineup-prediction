'use client'
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { DataTable } from "./players-data-table";
import { columns } from "./columns";
import { dummyPlayers } from "../dummy-players/dummy-players";
const PlayersDisplay = () => {
    return (
        <div className="m-6 flex flex-col gap-4">
            <h1>PLAYERS</h1>
            <div className="relative w-[300px]">
                <Input placeholder = "Search player:" className="w-full p-6 pr-12" />
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                    <Search />
                </div>
            </div>
            <div>
                <DataTable columns={columns} data={dummyPlayers} />
            </div>
        </div>
    )
};
export default PlayersDisplay;
