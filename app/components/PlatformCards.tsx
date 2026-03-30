'use client'

import {
  Clock,
  Users,
  Briefcase,
  FileText,
  TrendingUp,
  Activity,
} from 'lucide-react'

interface PlatformStatus {
  id: string
  name: string
  description: string
  color: string
  icon: any
  port: number
  status: 'online' | 'offline' | 'building'
  metrics: { label: string; value: string; trend?: string }[]
  recentActivity: string
  activeUsers: number
}

const platforms: PlatformStatus[] = [
  {
    id: 'eversense',
    name: 'EverSense',
    description: 'Time tracking, shoot logging & project execution',
    color: '#5B9BD5',
    icon: Clock,
    port: 3200,
    status: 'online',
    metrics: [
      { label: 'Hours Logged Today', value: '47.5h', trend: '+12%' },
      { label: 'Active Shoots', value: '3' },
      { label: 'Edits in Progress', value: '7' },
    ],
    recentActivity: 'Zac logged 3.5h on Meridian shoot',
    activeUsers: 6,
  },
  {
    id: 'hrsense',
    name: 'HRSense',
    description: 'Team management, payroll & performance',
    color: '#9B59B6',
    icon: Users,
    port: 3300,
    status: 'online',
    metrics: [
      { label: 'Team Members', value: '11' },
      { label: 'Leave Requests', value: '2', trend: 'pending' },
      { label: 'This Month Payroll', value: '$38.2K' },
    ],
    recentActivity: 'Gen submitted leave request for Apr 3-4',
    activeUsers: 3,
  },
  {
    id: 'jobsense',
    name: 'JobSense',
    description: 'Job execution hub — scheduling to delivery',
    color: '#D4845A',
    icon: Briefcase,
    port: 3000,
    status: 'online',
    metrics: [
      { label: 'Active Jobs', value: '10' },
      { label: 'This Week Revenue', value: '$24.5K', trend: '+8%' },
      { label: 'Jobs Delivered', value: '4' },
    ],
    recentActivity: 'AquaTech shoot uploaded — moving to edit',
    activeUsers: 5,
  },
  {
    id: 'contentsense',
    name: 'ContentSense',
    description: 'Content creation, creator analytics & approvals',
    color: '#2ECC71',
    icon: FileText,
    port: 3400,
    status: 'online',
    metrics: [
      { label: 'Posts Scheduled', value: '12' },
      { label: 'Pending Approvals', value: '5' },
      { label: 'Creator Sources', value: '24' },
    ],
    recentActivity: 'New weekly report generated for LinkedIn',
    activeUsers: 4,
  },
  {
    id: 'salesense',
    name: 'SaleSense',
    description: 'Sales pipeline, deals & client management',
    color: '#E74C3C',
    icon: TrendingUp,
    port: 3500,
    status: 'online',
    metrics: [
      { label: 'Open Deals', value: '8', trend: '+2' },
      { label: 'Pipeline Value', value: '$142K' },
      { label: 'Closing This Week', value: '3' },
    ],
    recentActivity: 'New deal created: Horizon Media — $18K',
    activeUsers: 2,
  },
]

function StatusBadge({ status }: { status: string }) {
  const colors: Record<string, { bg: string; text: string; dot: string }> = {
    online: { bg: 'rgba(74, 222, 128, 0.1)', text: '#4ADE80', dot: '#4ADE80' },
    offline: { bg: 'rgba(224, 80, 80, 0.1)', text: '#E05050', dot: '#E05050' },
    building: { bg: 'rgba(232, 168, 76, 0.1)', text: '#E8A84C', dot: '#E8A84C' },
  }
  const c = colors[status] || colors.offline
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 10px',
      borderRadius: 20,
      background: c.bg,
      color: c.text,
      fontSize: 11,
      fontWeight: 600,
      textTransform: 'capitalize',
    }}>
      <span style={{
        width: 6,
        height: 6,
        borderRadius: '50%',
        background: c.dot,
        ...(status === 'online' ? { animation: 'pulse 2s infinite' } : {}),
      }} />
      {status}
    </span>
  )
}

interface PlatformCardsProps {
  onNavigate: (platformId: string) => void
}

export default function PlatformCards({ onNavigate }: PlatformCardsProps) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
      gap: 16,
    }}>
      {platforms.map((platform, index) => {
        const Icon = platform.icon
        return (
          <div
            key={platform.id}
            onClick={() => onNavigate(platform.id)}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-lg)',
              padding: 24,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              animation: `fadeIn 0.3s ease-out ${index * 0.05}s both`,
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = platform.color + '40'
              e.currentTarget.style.transform = 'translateY(-2px)'
              e.currentTarget.style.boxShadow = `0 8px 32px ${platform.color}10`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-primary)'
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}
          >
            {/* Accent bar */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 3,
              background: `linear-gradient(90deg, ${platform.color}, ${platform.color}40)`,
            }} />

            {/* Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: 16,
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: `${platform.color}15`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: platform.color,
                }}>
                  <Icon size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>{platform.name}</div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>
                    {platform.description}
                  </div>
                </div>
              </div>
              <StatusBadge status={platform.status} />
            </div>

            {/* Metrics */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 12,
              marginBottom: 16,
            }}>
              {platform.metrics.map((metric, i) => (
                <div key={i} style={{
                  background: 'var(--bg-tertiary)',
                  borderRadius: 8,
                  padding: '10px 12px',
                }}>
                  <div style={{ fontSize: 10, color: 'var(--text-muted)', marginBottom: 4 }}>
                    {metric.label}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                    <span style={{ fontSize: 18, fontWeight: 700, color: platform.color }}>
                      {metric.value}
                    </span>
                    {metric.trend && (
                      <span style={{
                        fontSize: 10,
                        color: metric.trend.startsWith('+') ? 'var(--success)' : 'var(--warning)',
                        fontWeight: 500,
                      }}>
                        {metric.trend}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Recent activity */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px 0 0',
              borderTop: '1px solid var(--border-primary)',
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                fontSize: 12,
                color: 'var(--text-secondary)',
              }}>
                <Activity size={13} style={{ color: platform.color }} />
                <span style={{ maxWidth: 220, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {platform.recentActivity}
                </span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                fontSize: 11,
                color: 'var(--text-muted)',
              }}>
                <Users size={12} />
                {platform.activeUsers}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
