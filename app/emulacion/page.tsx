import { title } from "@/components/primitives";
import { getEmulators } from "@/lib/notion-services";
import EmulationTable from "@/components/tables/emulation";

export default async function DocsPage() {
  const data = await getEmulators();

  //console.log("consulta notions", data);
  return ( 
    <div>
      <h1 className={title()}>Universo Emulacion</h1>

      <p className="m-4 text-justify">
        En esta sección encontraras emuladores para ejecutar tus backups de
        consolas retro, así como algunos sitios recomendados donde podras
        encontrar un listado de los juegos compatibles con cada consola.
      </p>

      <EmulationTable data={data.items} />
    </div>
  );
}
