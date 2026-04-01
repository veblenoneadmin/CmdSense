'use client'

import {
  ArrowUpRight,
  ArrowDownRight,
} from 'lucide-react'
import { iconMap } from '../lib/icons'

interface KPIData {
  id: string
  label: string
  value: string
  change: string
  changeType: string
  icon: string
  color: string
  subtext: string
}

interface KPIOverviewProps {
  kpis: KPIData[]
}

export default function KPIOverview({ kpis }: KPIOverviewProps) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 12,
    }}>
      {kpis.map((kpi, index) => {
        const Icon = iconMap[kpi.icon]
        const isUp = kpi.changeType === 'up'
        return (
          <div
            key={kpi.id}
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
                {Icon && <Icon size={16} />}
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
