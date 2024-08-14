"use client"

import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
 
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowUpDown } from "lucide-react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want. pqrsdf
export type Manifestacion = {
  id: string
  manifestacion: string
  fechahorareg: string
  tipo: "Petición" | "Queja" | "Reclamo" | "Solicitud" | "Denuncia" | "Felicitación" 
  estado: "Pendiente" | "En Proceso" | "Respondido" | "Error"
}

export const columns: ColumnDef<Manifestacion>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "manifestacion",
    header: "Manifestación",
  },
  {
    accessorKey: "tipo",
    header: "Tipo",
  },
  {
    accessorKey: "fechahorareg",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Fecha Hora Reg.
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
  },
  {
    accessorKey: "estado",
    header: "Estado",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const manifestacion = row.original
 
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Acciones</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(manifestacion.id)}
            >
              Copiar ID de Tramite
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Ver Trámite</DropdownMenuItem>
            <DropdownMenuItem>Actualizar Trámite</DropdownMenuItem>
            <DropdownMenuItem>Eliminar Trámite</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
