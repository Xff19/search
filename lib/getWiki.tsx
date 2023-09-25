export default async function getWiki(searchTerm: string) {
  const searchParams = new URLSearchParams({
    action: "query",
    generator: "search",
    gsrsearch:searchTerm,
    gslimit: "20",
    prop: "pageimages|extracts",
    exchars: "100",
    exntro: "true",
    explaintext: "true",
    exlimit: "max",
    format: "json",
    origin: "*",
  });
  const response = await fetch(
    "https://en.wikipedia.org/w/api.php?" + searchParams
  );

  return response.json();
}
