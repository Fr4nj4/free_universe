import { title } from "@/components/primitives";
import { getSeriesList } from "@/lib/series-services";
import GridCards from "@/components/commons/GridCards";

export default async function SeriesPage() {
  const series = await getSeriesList();

  return (
    <div className="flex flex-col items-center justify-center gap-4 ">
      <h1 className={title()}>Series</h1>

      <GridCards data={series.items} />
    </div>
  );
}
