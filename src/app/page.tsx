import AvatarDemo from "@/components/avatar"
import { Manifestacion, columns } from "@/components/columns"
import { DataTable } from "@/components/data-table"
import { DrawerDialogMani } from "@/components/drawer-create"
import { DropdownMenuAvatar } from "@/components/dropdown-avatar"


async function getData(): Promise<Manifestacion[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      manifestacion: "Esto es una prueba",
      estado: "Pendiente",
      tipo: "Petición",
      fechahorareg: "12:30 PM"
    },
    // ...
  ]
}

export default async function Home() {
  const data = await getData()
  return (
    <>
      <div className="container mx-auto flex justify-between pt-10 px-8">
        <div className="flex-1 flex-col">
          <h1 className="text-2xl font-bold">Bienvenido de nuevo!</h1>
          <p className="text-gray-600">Aquí tienes una lista de tus PQRSDF de este mes!</p>
        </div>
        <div className="flex">
          <DropdownMenuAvatar />
        </div>
      </div>

      <div className="container mx-auto py-10">
        <div className="flex flex-col gap-10">
          <div className="flex justify-end">
            <DrawerDialogMani />
          </div>
          <div>
            <DataTable columns={columns} data={data} />
          </div>
        </div>
      </div>
    </>
  )
}
