import { title } from "@/components/primitives";
import { getPeliculasList } from "@/lib/peliculas-services";
import GridCards from "@/components/commons/GridCards";

export default async function PeliculasPage() {
  const peliculas = await getPeliculasList();

  return (
    <div className="flex flex-col items-center justify-center gap-4 ">
      <h1 className={title()}>Peliculas</h1>

      <GridCards data={peliculas.items} />
    </div>
  );
}
