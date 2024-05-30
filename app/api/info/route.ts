import info from '../../../db/info.json'

export async function GET() {
  console.log('infp', info)
  return Response.json({ info })
}
