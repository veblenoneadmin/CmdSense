'use client'

import {
  DollarSign,
  TrendingUp,
  Clock,
  Briefcase,
  Users,
  FileText,
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react'

interface KPI {
  label: string
  value: string
  change: string
  changeType: 'up' | 'down' | 'neutral'
  icon: any
  color: string
  subtext: string
}

const kpis: KPI[] = [
  {
    label: 'Total Revenue (March)',
    value: '$87.4K',
    change: '+14.2%',
    changeType: 'up',
    icon: DollarSign,
    color: '#4ADE80',
    subtext: 'vs $76.5K in February',
  },
  {
    label: 'Active Jobs',
    value: '10',
    change: '+3',
    changeType: 'up',
    icon: Briefcase,
    color: '#D4845A',
    subtext: '4 in production, 3 in edit',
  },
  {
    label: 'Team Hours (This Week)',
    value: '284h',
    change: '+8%',
    changeType: 'up',
    icon: Clock,
    color: '#5B9BD5',
    subtext: '11 active team members',
  },
  {
    label: 'Pipeline Value',
    value: '$142K',
    change: '+$28K',
    changeType: 'up',
    icon: TrendingUp,
    color: '#E74C3C',
    subtext: '8 open deals, 3 closing soon',
  },
  {
    label: 'Content Published',
    value: '34',
    change: '+22%',
    changeType: 'up',
    icon: FileText,
    color: '#2ECC71',
    subtext: 'This month across all channels',
  },
  {
    label: 'Team Utilization',
    value: '86%',
    change: '-2%',
    changeType: 'down',
    icon: Users,
    color: '#9B59B6',
    subtext: 'Target: 85% — On track',
  },
]

export default function KPIOverview() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: 12,
    }}>
      {kpis.map((kpi, index) => {
        const Icon = kpi.icon
        const isUp = kpi.changeType === 'up'
        return (
          <div
            key={kpi.label}
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-md)',
              padding: '18px 16px',
              animation: `fadeIn 0.3s ease-out ${index * 0.05}s both`,
              transition: 'border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${kpi.color}30`
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'var(--border-primary)'
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 12,
            }}>
              <div style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                background: `${kpi.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: kpi.color,
              }}>
                <Icon size={16} />
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 3,
                fontSize: 12,
                fontWeight: 600,
                color: isUp ? 'var(--success)' : 'var(--error)',
              }}>
                {isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {kpi.change}
              </div>
            </div>

            <div style={{ fontSize: 24, fontWeight: 700, marginBottom: 4 }}>
              {kpi.value}
            </div>
            <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 6 }}>
              {kpi.label}
            </div>
            <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>
              {kpi.subtext}
            </div>
          </div>
        )
      })}
    </div>
  )
}
