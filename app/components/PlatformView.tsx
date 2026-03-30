'use client'

import {
  Clock,
  Users,
  Briefcase,
  FileText,
  TrendingUp,
  ExternalLink,
  ArrowLeft,
  Activity,
  CheckCircle2,
  AlertTriangle,
  BarChart3,
  Calendar,
  Zap,
} from 'lucide-react'

interface PlatformConfig {
  id: string
  name: string
  tagline: string
  color: string
  icon: any
  port: number
  sections: {
    title: string
    items: { label: string; value: string; status?: string }[]
  }[]
  upcomingTasks: { task: string; due: string; priority: 'high' | 'medium' | 'low' }[]
  integrations: string[]
}

const platformData: Record<string, PlatformConfig> = {
  eversense: {
    id: 'eversense',
    name: 'EverSense',
    tagline: 'Time tracking, shoot logging & project execution',
    color: '#5B9BD5',
    icon: Clock,
    port: 3200,
    sections: [
      {
        title: 'Today\'s Time Logs',
        items: [
          { label: 'Zac — Meridian Hotel', value: '3.5h', status: 'active' },
          { label: 'Jev — CloudNine Edit', value: '4.0h', status: 'completed' },
          { label: 'Hanif — AquaTech Color', value: '2.5h', status: 'active' },
          { label: 'Gen — Botanica Gardens', value: '5.0h', status: 'completed' },
          { label: 'Gab — Stellar Brands', value: '3.2h', status: 'active' },
          { label: 'Wayan — Horizon Media', value: '2.0h', status: 'active' },
        ],
      },
      {
        title: 'Active Shoots',
        items: [
          { label: 'Meridian Hotel — Full Media', value: 'On-site' },
          { label: 'CloudNine Fitness — Video', value: 'Editing' },
          { label: 'AquaTech — Photos + Video', value: 'Color Grade' },
        ],
      },
    ],
    upcomingTasks: [
      { task: 'Stellar Brands shoot prep', due: 'Apr 6', priority: 'high' },
      { task: 'Monthly timesheet review', due: 'Apr 1', priority: 'high' },
      { task: 'Equipment maintenance check', due: 'Apr 5', priority: 'medium' },
    ],
    integrations: ['JobSense', 'HRSense', 'Xero'],
  },
  hrsense: {
    id: 'hrsense',
    name: 'HRSense',
    tagline: 'Team management, payroll & performance',
    color: '#9B59B6',
    icon: Users,
    port: 3300,
    sections: [
      {
        title: 'Team Overview',
        items: [
          { label: 'Zac (Lead Videographer)', value: '$45/hr', status: 'active' },
          { label: 'Jev (Senior Editor)', value: '$40/hr', status: 'active' },
          { label: 'Gen (Photographer)', value: '$38/hr', status: 'leave' },
          { label: 'Gab (Content Creator)', value: '$35/hr', status: 'active' },
          { label: 'Hanif (Colorist)', value: '$42/hr', status: 'active' },
          { label: 'Wayan (Junior Editor)', value: '$28/hr', status: 'active' },
          { label: 'Pran (Motion Graphics)', value: '$38/hr', status: 'active' },
          { label: 'Ridho (Sound Design)', value: '$35/hr', status: 'active' },
          { label: 'Risna (Social Media)', value: '$30/hr', status: 'active' },
          { label: 'Mimi (Admin/Coordinator)', value: '$32/hr', status: 'active' },
          { label: 'Julian (Web Dev)', value: '$45/hr', status: 'active' },
        ],
      },
      {
        title: 'Pending Requests',
        items: [
          { label: 'Gen — Personal Leave', value: 'Apr 3-4', status: 'pending' },
          { label: 'Ridho — Equipment Request', value: 'New mic', status: 'pending' },
        ],
      },
    ],
    upcomingTasks: [
      { task: 'March payroll processing', due: 'Apr 1', priority: 'high' },
      { task: 'Performance reviews (11)', due: 'Apr 5', priority: 'high' },
      { task: 'Onboarding: New intern', due: 'Apr 14', priority: 'medium' },
    ],
    integrations: ['EverSense', 'Xero', 'JobSense'],
  },
  jobsense: {
    id: 'jobsense',
    name: 'JobSense',
    tagline: 'Job execution hub — from booking to payment',
    color: '#D4845A',
    icon: Briefcase,
    port: 3000,
    sections: [
      {
        title: 'Active Jobs',
        items: [
          { label: 'Meridian Hotel — Full Media', value: '$6,800', status: 'on_site' },
          { label: 'CloudNine Fitness — Video', value: '$4,500', status: 'in_edit' },
          { label: 'AquaTech — Photos + Video', value: '$5,200', status: 'in_edit' },
          { label: 'Botanica Gardens — Photos', value: '$3,200', status: 'delivered' },
          { label: 'SkyView Drones — Full Media', value: '$7,500', status: 'qc_review' },
          { label: 'Urban Eats — Social Content', value: '$2,800', status: 'scheduled' },
          { label: 'Stellar Brands — Video+Photos', value: '$4,200', status: 'booked' },
          { label: 'Horizon Media — Website', value: '$8,500', status: 'booked' },
          { label: 'Summit Corp — Ad Campaign', value: '$12,000', status: 'booked' },
          { label: 'Velvet Interiors — Photos', value: '$3,000', status: 'uploaded' },
        ],
      },
      {
        title: 'This Week\'s Schedule',
        items: [
          { label: 'Mon — Meridian Hotel shoot', value: 'Zac, Gen' },
          { label: 'Tue — CloudNine review', value: 'Jev, Hanif' },
          { label: 'Wed — Urban Eats shoot', value: 'Gab, Risna' },
          { label: 'Thu — SkyView delivery', value: 'Mimi' },
          { label: 'Fri — Stellar Brands prep', value: 'Zac, Wayan' },
        ],
      },
    ],
    upcomingTasks: [
      { task: 'SkyView QC review sign-off', due: 'Today', priority: 'high' },
      { task: 'Botanica invoice generation', due: 'Apr 1', priority: 'high' },
      { task: 'Urban Eats shoot brief', due: 'Apr 2', priority: 'medium' },
    ],
    integrations: ['EverSense', 'SaleSense', 'Xero', 'HubSpot'],
  },
  contentsense: {
    id: 'contentsense',
    name: 'ContentSense',
    tagline: 'Content creation, creator analytics & approvals',
    color: '#2ECC71',
    icon: FileText,
    port: 3400,
    sections: [
      {
        title: 'Content Pipeline',
        items: [
          { label: 'Instagram Reels — Draft', value: '4 posts', status: 'draft' },
          { label: 'YouTube Videos — In Review', value: '2 videos', status: 'review' },
          { label: 'LinkedIn Posts — Scheduled', value: '6 posts', status: 'scheduled' },
          { label: 'Blog Articles — AI Generated', value: '3 articles', status: 'draft' },
          { label: 'Pending Approvals', value: '5 items', status: 'pending' },
        ],
      },
      {
        title: 'Creator Sources (Top 5)',
        items: [
          { label: '@luxuryinteriors — Instagram', value: '48K followers' },
          { label: '@balilifestyle — TikTok', value: '125K followers' },
          { label: '@designstudio.bali — Instagram', value: '32K followers' },
          { label: 'ArchDigest — YouTube', value: '890K subs' },
          { label: '@modernhomes — LinkedIn', value: '15K followers' },
        ],
      },
    ],
    upcomingTasks: [
      { task: 'Approve 5 pending content pieces', due: 'Today', priority: 'high' },
      { task: 'Weekly performance report', due: 'Apr 1', priority: 'medium' },
      { task: 'Refresh creator source list', due: 'Apr 3', priority: 'low' },
    ],
    integrations: ['JobSense', 'YouTube API', 'Instagram', 'LinkedIn', 'Apify'],
  },
  salesense: {
    id: 'salesense',
    name: 'SaleSense',
    tagline: 'Sales pipeline, deals & client management',
    color: '#E74C3C',
    icon: TrendingUp,
    port: 3500,
    sections: [
      {
        title: 'Active Pipeline',
        items: [
          { label: 'Summit Corp — Ad Campaign', value: '$32,000', status: 'negotiation' },
          { label: 'Horizon Media — Full Rebrand', value: '$18,000', status: 'proposal' },
          { label: 'Velvet Group — Monthly Retainer', value: '$5,500/mo', status: 'closing' },
          { label: 'NovaTech — Website + Video', value: '$22,000', status: 'discovery' },
          { label: 'Atlas Properties — Photo Package', value: '$4,800', status: 'closing' },
          { label: 'Bloom Agency — Social Content', value: '$8,200', status: 'proposal' },
          { label: 'Pacific Hotels — Full Media', value: '$15,000', status: 'discovery' },
          { label: 'Zenith Labs — Product Video', value: '$9,500', status: 'negotiation' },
        ],
      },
      {
        title: 'Won This Month',
        items: [
          { label: 'Meridian Hotel — Full Media', value: '$6,800' },
          { label: 'CloudNine Fitness — Video', value: '$4,500' },
          { label: 'AquaTech — Photos + Video', value: '$5,200' },
          { label: 'Stellar Brands — Video+Photos', value: '$4,200' },
        ],
      },
    ],
    upcomingTasks: [
      { task: 'Velvet Group contract signing', due: 'Apr 1', priority: 'high' },
      { task: 'Atlas Properties follow-up', due: 'Apr 2', priority: 'high' },
      { task: 'NovaTech discovery call', due: 'Apr 3', priority: 'medium' },
    ],
    integrations: ['JobSense', 'HubSpot', 'Xero', 'Fireflies'],
  },
}

interface PlatformViewProps {
  platformId: string
  onBack: () => void
}

const statusColors: Record<string, { bg: string; text: string }> = {
  active: { bg: 'rgba(74, 222, 128, 0.1)', text: '#4ADE80' },
  completed: { bg: 'rgba(212, 132, 90, 0.1)', text: '#D4845A' },
  leave: { bg: 'rgba(232, 168, 76, 0.1)', text: '#E8A84C' },
  pending: { bg: 'rgba(232, 168, 76, 0.1)', text: '#E8A84C' },
  on_site: { bg: 'rgba(74, 222, 128, 0.1)', text: '#4ADE80' },
  in_edit: { bg: 'rgba(91, 155, 213, 0.1)', text: '#5B9BD5' },
  delivered: { bg: 'rgba(212, 132, 90, 0.1)', text: '#D4845A' },
  qc_review: { bg: 'rgba(155, 89, 182, 0.1)', text: '#9B59B6' },
  scheduled: { bg: 'rgba(91, 155, 213, 0.1)', text: '#5B9BD5' },
  booked: { bg: 'rgba(232, 168, 76, 0.1)', text: '#E8A84C' },
  uploaded: { bg: 'rgba(74, 222, 128, 0.1)', text: '#4ADE80' },
  draft: { bg: 'rgba(102, 102, 102, 0.15)', text: '#999' },
  review: { bg: 'rgba(155, 89, 182, 0.1)', text: '#9B59B6' },
  negotiation: { bg: 'rgba(232, 168, 76, 0.1)', text: '#E8A84C' },
  proposal: { bg: 'rgba(91, 155, 213, 0.1)', text: '#5B9BD5' },
  closing: { bg: 'rgba(74, 222, 128, 0.1)', text: '#4ADE80' },
  discovery: { bg: 'rgba(155, 89, 182, 0.1)', text: '#9B59B6' },
}

const priorityColors: Record<string, string> = {
  high: '#E05050',
  medium: '#E8A84C',
  low: '#5B9BD5',
}

export default function PlatformView({ platformId, onBack }: PlatformViewProps) {
  const platform = platformData[platformId]
  if (!platform) return null

  const Icon = platform.icon

  return (
    <div className="fade-in">
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        marginBottom: 24,
      }}>
        <button
          onClick={onBack}
          style={{
            width: 36,
            height: 36,
            borderRadius: 8,
            background: 'var(--bg-tertiary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--text-secondary)',
            border: '1px solid var(--border-primary)',
          }}
        >
          <ArrowLeft size={18} />
        </button>
        <div style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          background: `${platform.color}15`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: platform.color,
        }}>
          <Icon size={22} />
        </div>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700 }}>{platform.name}</h2>
          <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>{platform.tagline}</p>
        </div>
        <a
          href={`http://localhost:${platform.port}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '8px 16px',
            borderRadius: 8,
            background: `${platform.color}15`,
            color: platform.color,
            fontSize: 13,
            fontWeight: 600,
            border: `1px solid ${platform.color}30`,
            transition: 'all 0.15s',
          }}
        >
          Open {platform.name}
          <ExternalLink size={14} />
        </a>
      </div>

      {/* Content grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 360px',
        gap: 16,
      }}>
        {/* Main sections */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {platform.sections.map((section, sIdx) => (
            <div key={sIdx} style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
            }}>
              <div style={{
                padding: '14px 20px',
                borderBottom: '1px solid var(--border-primary)',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}>
                <BarChart3 size={14} style={{ color: platform.color }} />
                <h3 style={{ fontSize: 14, fontWeight: 600 }}>{section.title}</h3>
                <span style={{
                  marginLeft: 'auto',
                  fontSize: 11,
                  color: 'var(--text-muted)',
                  background: 'var(--bg-tertiary)',
                  padding: '2px 8px',
                  borderRadius: 4,
                }}>
                  {section.items.length} items
                </span>
              </div>
              <div>
                {section.items.map((item, iIdx) => (
                  <div key={iIdx} style={{
                    padding: '12px 20px',
                    borderBottom: iIdx < section.items.length - 1 ? '1px solid var(--border-primary)' : 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    transition: 'background 0.15s',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-hover)'}
                  onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                  >
                    <span style={{ fontSize: 13, color: 'var(--text-primary)' }}>
                      {item.label}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span style={{ fontSize: 13, fontWeight: 600 }}>{item.value}</span>
                      {item.status && (
                        <span style={{
                          fontSize: 10,
                          fontWeight: 600,
                          padding: '2px 8px',
                          borderRadius: 4,
                          background: (statusColors[item.status] || statusColors.active).bg,
                          color: (statusColors[item.status] || statusColors.active).text,
                          textTransform: 'capitalize',
                        }}>
                          {item.status.replace('_', ' ')}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Upcoming tasks */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-primary)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
          }}>
            <div style={{
              padding: '14px 20px',
              borderBottom: '1px solid var(--border-primary)',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}>
              <Calendar size={14} style={{ color: platform.color }} />
              <h3 style={{ fontSize: 14, fontWeight: 600 }}>Upcoming Tasks</h3>
            </div>
            {platform.upcomingTasks.map((task, tIdx) => (
              <div key={tIdx} style={{
                padding: '12px 20px',
                borderBottom: tIdx < platform.upcomingTasks.length - 1 ? '1px solid var(--border-primary)' : 'none',
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  marginBottom: 4,
                }}>
                  <div style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: priorityColors[task.priority],
                  }} />
                  <span style={{ fontSize: 13, fontWeight: 500 }}>{task.task}</span>
                </div>
                <div style={{
                  fontSize: 11,
                  color: 'var(--text-muted)',
                  marginLeft: 14,
                }}>
                  Due: {task.due}
                </div>
              </div>
            ))}
          </div>

          {/* Integrations */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-primary)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
          }}>
            <div style={{
              padding: '14px 20px',
              borderBottom: '1px solid var(--border-primary)',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}>
              <Zap size={14} style={{ color: platform.color }} />
              <h3 style={{ fontSize: 14, fontWeight: 600 }}>Connected Systems</h3>
            </div>
            <div style={{ padding: '12px 20px', display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {platform.integrations.map((int, iIdx) => (
                <span key={iIdx} style={{
                  padding: '6px 12px',
                  borderRadius: 6,
                  background: 'var(--bg-tertiary)',
                  border: '1px solid var(--border-primary)',
                  fontSize: 12,
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                }}>
                  {int}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
