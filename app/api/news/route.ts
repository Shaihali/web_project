import news from "../../../db/news.json";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const offset = parseInt(url.searchParams.get("offset") || "0") * 6;
  const limit = parseInt(url.searchParams.get("limit") || "6");

  const paginatedNews = news.slice(offset, offset + limit);

  return Response.json({ news: paginatedNews, count: news.length });
}
