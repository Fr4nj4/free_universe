export async function getPeliculasList() {
  console.log("API_URL", process.env.API_URL);
  const res = await fetch(`${process.env.API_URL}/peliculas/get-list`, {
    cache: "no-store",
  });

  return res.json();
}
