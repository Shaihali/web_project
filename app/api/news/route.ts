import news from '../../../db/news.json'

export async function GET() {

  return Response.json({ news })
}
