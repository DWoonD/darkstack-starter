import { NextResponse } from 'next/server'

export function GET() {
  return NextResponse.json(
    {
      ok: true,
      service: 'darkstack-next-starter',
      timestamp: new Date().toISOString(),
    },
    { status: 200 },
  )
}
