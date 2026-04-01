import 'dotenv/config'
import { PrismaClient } from '../app/generated/prisma/client.js'
import { PrismaMariaDb } from '@prisma/adapter-mariadb'

const adapter = new PrismaMariaDb(process.env.DATABASE_URL!)
const prisma = new PrismaClient({ adapter })

async function main() {
  // Clear existing data
  await prisma.activity.deleteMany()
  await prisma.platformMetric.deleteMany()
  await prisma.kPI.deleteMany()
  await prisma.monthlyRevenue.deleteMany()
  await prisma.weeklyBreakdown.deleteMany()
  await prisma.platform.deleteMany()

  // ─── Platforms ──────────────────────────────────────────

  const eversense = await prisma.platform.create({
    data: {
      slug: 'eversense',
      name: 'EverSense',
      description: 'Time tracking, shoot logging & project execution',
      color: '#5B9BD5',
      icon: 'Clock',
      port: 3200,
      status: 'online',
      activeUsers: 6,
      recentActivity: 'Zac logged 3.5h on Meridian shoot',
      metrics: {
        create: [
          { label: 'Hours Logged Today', value: '47.5h', trend: '+12%', sortOrder: 0 },
          { label: 'Active Shoots', value: '3', sortOrder: 1 },
          { label: 'Edits in Progress', value: '7', sortOrder: 2 },
        ],
      },
    },
  })

  const hrsense = await prisma.platform.create({
    data: {
      slug: 'hrsense',
      name: 'HRSense',
      description: 'Team management, payroll & performance',
      color: '#9B59B6',
      icon: 'Users',
      port: 3300,
      status: 'online',
      activeUsers: 3,
      recentActivity: 'Gen submitted leave request for Apr 3-4',
      metrics: {
        create: [
          { label: 'Team Members', value: '11', sortOrder: 0 },
          { label: 'Leave Requests', value: '2', trend: 'pending', sortOrder: 1 },
          { label: 'This Month Payroll', value: '$38.2K', sortOrder: 2 },
        ],
      },
    },
  })

  const jobsense = await prisma.platform.create({
    data: {
      slug: 'jobsense',
      name: 'JobSense',
      description: 'Job execution hub — scheduling to delivery',
      color: '#D4845A',
      icon: 'Briefcase',
      port: 3000,
      status: 'online',
      activeUsers: 5,
      recentActivity: 'AquaTech shoot uploaded — moving to edit',
      metrics: {
        create: [
          { label: 'Active Jobs', value: '10', sortOrder: 0 },
          { label: 'This Week Revenue', value: '$24.5K', trend: '+8%', sortOrder: 1 },
          { label: 'Jobs Delivered', value: '4', sortOrder: 2 },
        ],
      },
    },
  })

  const contentsense = await prisma.platform.create({
    data: {
      slug: 'contentsense',
      name: 'ContentSense',
      description: 'Content creation, creator analytics & approvals',
      color: '#2ECC71',
      icon: 'FileText',
      port: 3400,
      status: 'online',
      activeUsers: 4,
      recentActivity: 'New weekly report generated for LinkedIn',
      metrics: {
        create: [
          { label: 'Posts Scheduled', value: '12', sortOrder: 0 },
          { label: 'Pending Approvals', value: '5', sortOrder: 1 },
          { label: 'Creator Sources', value: '24', sortOrder: 2 },
        ],
      },
    },
  })

  const salesense = await prisma.platform.create({
    data: {
      slug: 'salesense',
      name: 'SaleSense',
      description: 'Sales pipeline, deals & client management',
      color: '#E74C3C',
      icon: 'TrendingUp',
      port: 3500,
      status: 'online',
      activeUsers: 2,
      recentActivity: 'New deal created: Horizon Media — $18K',
      metrics: {
        create: [
          { label: 'Open Deals', value: '8', trend: '+2', sortOrder: 0 },
          { label: 'Pipeline Value', value: '$142K', sortOrder: 1 },
          { label: 'Closing This Week', value: '3', sortOrder: 2 },
        ],
      },
    },
  })

  // ─── KPIs ──────────────────────────────────────────────

  await prisma.kPI.createMany({
    data: [
      { label: 'Total Revenue (March)', value: '$87.4K', change: '+14.2%', changeType: 'up', icon: 'DollarSign', color: '#4ADE80', subtext: 'vs $76.5K in February', sortOrder: 0 },
      { label: 'Active Jobs', value: '10', change: '+3', changeType: 'up', icon: 'Briefcase', color: '#D4845A', subtext: '4 in production, 3 in edit', sortOrder: 1 },
      { label: 'Team Hours (This Week)', value: '284h', change: '+8%', changeType: 'up', icon: 'Clock', color: '#5B9BD5', subtext: '11 active team members', sortOrder: 2 },
      { label: 'Pipeline Value', value: '$142K', change: '+$28K', changeType: 'up', icon: 'TrendingUp', color: '#E74C3C', subtext: '8 open deals, 3 closing soon', sortOrder: 3 },
      { label: 'Content Published', value: '34', change: '+22%', changeType: 'up', icon: 'FileText', color: '#2ECC71', subtext: 'This month across all channels', sortOrder: 4 },
      { label: 'Team Utilization', value: '86%', change: '-2%', changeType: 'down', icon: 'Users', color: '#9B59B6', subtext: 'Target: 85% — On track', sortOrder: 5 },
    ],
  })

  // ─── Activities ────────────────────────────────────────

  const activityData = [
    { platformId: jobsense.id, title: 'AquaTech shoot uploaded', description: 'Moving to edit phase — assigned to Jev', type: 'update', timestamp: '2 min ago' },
    { platformId: salesense.id, title: 'New deal created: Horizon Media', description: 'Pipeline value: $18,000 — Full media package', type: 'create', timestamp: '8 min ago' },
    { platformId: contentsense.id, title: 'Weekly report generated', description: 'LinkedIn performance report — 23% engagement increase', type: 'complete', timestamp: '15 min ago' },
    { platformId: eversense.id, title: 'Zac logged 3.5h', description: 'Meridian Hotel — Video shoot & setup', type: 'update', timestamp: '22 min ago' },
    { platformId: hrsense.id, title: 'Leave request submitted', description: 'Gen — April 3-4, 2026 (Personal leave)', type: 'alert', timestamp: '35 min ago' },
    { platformId: jobsense.id, title: 'Botanica Gardens — Delivered', description: 'Final deliverables sent. Awaiting client approval.', type: 'complete', timestamp: '1h ago' },
    { platformId: salesense.id, title: 'Summit Corp deal moved to Negotiation', description: 'Proposal sent — $32K annual package', type: 'update', timestamp: '1h ago' },
    { platformId: contentsense.id, title: '3 posts pending approval', description: 'Instagram Reels (2), YouTube Short (1)', type: 'alert', timestamp: '2h ago' },
    { platformId: eversense.id, title: 'Hanif completed edit session', description: 'CloudNine Fitness — 4.2h edit + color grade', type: 'complete', timestamp: '2h ago' },
    { platformId: jobsense.id, title: 'New job booked: Stellar Brands', description: 'Video + photos package — $4,200 — Apr 7', type: 'create', timestamp: '3h ago' },
    { platformId: hrsense.id, title: 'Monthly performance reviews due', description: 'Reminder: 11 team member reviews pending for March', type: 'alert', timestamp: '3h ago' },
    { platformId: contentsense.id, title: 'Creator source added: @designstudio.bali', description: 'Instagram — Architecture & interior design niche', type: 'create', timestamp: '4h ago' },
  ]

  for (const activity of activityData) {
    await prisma.activity.create({ data: activity })
  }

  // ─── Revenue Data ──────────────────────────────────────

  await prisma.monthlyRevenue.createMany({
    data: [
      { month: 'Oct', revenue: 52000, jobs: 18, content: 22 },
      { month: 'Nov', revenue: 61000, jobs: 22, content: 28 },
      { month: 'Dec', revenue: 48000, jobs: 16, content: 20 },
      { month: 'Jan', revenue: 67000, jobs: 24, content: 32 },
      { month: 'Feb', revenue: 76500, jobs: 28, content: 38 },
      { month: 'Mar', revenue: 87400, jobs: 31, content: 34 },
    ],
  })

  await prisma.weeklyBreakdown.createMany({
    data: [
      { week: 'W1', jobsense: 8200, salesense: 4500, contentsense: 2100 },
      { week: 'W2', jobsense: 9800, salesense: 6200, contentsense: 1800 },
      { week: 'W3', jobsense: 11200, salesense: 5100, contentsense: 3200 },
      { week: 'W4', jobsense: 10500, salesense: 7800, contentsense: 2600 },
    ],
  })

  console.log('Seed completed successfully!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
