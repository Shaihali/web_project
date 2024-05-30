import infoMinor from '../../../db/info_minor.json'

export async function GET() {

  return Response.json({ infoMinor })
}
