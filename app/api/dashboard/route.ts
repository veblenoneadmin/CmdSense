import { getPrisma } from '../../lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
  const prisma = getPrisma()

  const [platforms, kpis, activities, monthlyRevenue, weeklyBreakdown] = await Promise.all([
    prisma.platform.findMany({
      include: { metrics: { orderBy: { sortOrder: 'asc' } } },
      orderBy: { createdAt: 'asc' },
    }),
    prisma.kPI.findMany({ orderBy: { sortOrder: 'asc' } }),
    prisma.activity.findMany({
      include: { platform: true },
      orderBy: { createdAt: 'desc' },
    }),
    prisma.monthlyRevenue.findMany(),
    prisma.weeklyBreakdown.findMany(),
  ])

  return NextResponse.json({
    platforms,
    kpis,
    activities,
    monthlyRevenue,
    weeklyBreakdown,
  })
}
