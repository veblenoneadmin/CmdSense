'use client'

import {
  Users,
  Activity,
} from 'lucide-react'
import { iconMap } from '../lib/icons'

interface PlatformData {
  id: string
  slug: string
  name: string
  description: string
  color: string
  icon: string
  port: number
  status: string
  activeUsers: number
  recentActivity: string | null
  metrics: { id: string; label: string; value: string; trend: string | null }[]
}

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
  platforms: PlatformData[]
  onNavigate: (platformId: string) => void
}

export default function PlatformCards({ platforms, onNavigate }: PlatformCardsProps) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
      gap: 16,
    }}>
      {platforms.map((platform, index) => {
        const Icon = iconMap[platform.icon]
        return (
          <div
            key={platform.id}
            onClick={() => onNavigate(platform.slug)}
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
                  {Icon && <Icon size={20} />}
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
              {platform.metrics.map((metric) => (
                <div key={metric.id} style={{
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
