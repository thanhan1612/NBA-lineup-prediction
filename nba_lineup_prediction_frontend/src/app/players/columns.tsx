"use client"

import { ColumnDef } from "@tanstack/react-table";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.: string
import { PlayerTable } from "../types/players";

export const columns: ColumnDef<PlayerTable>[] = [
  {
    accessorKey: "name",
    header: "Name",
    
  },
  {
    accessorKey: "careerlength",
    header: "Career Length",
  },
  {
    accessorKey: "height",
    header: "Weight",
    
  },
   {
    accessorKey: "dob",
    header: "Date of birth",
    cell: ({ row }) => {
      const dob = row.getValue('dob') as string | Date;
      const date = new Date(dob) ;
      const formatted = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
    });
      
 
      return <div className="">{formatted}</div>
    },
  },
  {
    accessorKey: "college",
    header: "College",
  }
]