"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { dummyPlayers } from "../dummy-players/dummy-players";

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });
  const [search,setSearch] = React.useState('');
  const handleSelect = (playerName: string) => {
    setSearch(playerName) // fill input with selected name
  }
  console.log(dummyPlayers)
  return (
    <div>
      <div className=" relative flex items-center py-4 w-[300px] border-sx mb-4">
        <Command className="w-full">
        <CommandInput 
          placeholder="Search here ..." 
          value={search} 
          onValueChange={setSearch}
        />
        
                  {search.trim() !== '' && (
                  <div className="absolute top-full left-0 w-full z-50 pointer-events-auto">
                  <CommandList className="bg-white border shadow-lg rounded-md  max-h-60 overflow-auto">
                    <CommandEmpty>No players found.</CommandEmpty>
                    {dummyPlayers.map((player) => (
                      <CommandItem
                        key={player.name}
                        onSelect={() => handleSelect(player.name)}
                        value={player.name}
                      >
                        {player.name}
                      </CommandItem>
                    ))}
                  </CommandList>
                  </div>
                )}

         </Command>
      </div>
      <div className="mb-2">
        <h1>Players</h1>
      </div>
      <div className="rounded-md border">
        
        <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      </div>
    </div>
  )
}