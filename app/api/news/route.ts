export async function GET() {
  const res = await import("../news");
  const data = await res.json();

  return Response.json({ data });
}
