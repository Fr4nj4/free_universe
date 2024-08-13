export async function getSeriesList() {
  console.log("API_URL", process.env.API_URL);
  const res = await fetch(`${process.env.API_URL}/series/get-list`, {
    cache: "no-store",
  });

  return res.json();
}
