'use client'

import {
  Clock,
  Users,
  Briefcase,
  FileText,
  TrendingUp,
} from 'lucide-react'
import { useState } from 'react'

interface ActivityItem {
  id: string
  platform: string
  platformColor: string
  icon: any
  title: string
  description: string
  timestamp: string
  type: 'create' | 'update' | 'complete' | 'alert' | 'milestone'
}

const activities: ActivityItem[] = [
  {
    id: '1',
    platform: 'JobSense',
    platformColor: '#D4845A',
    icon: Briefcase,
    title: 'AquaTech shoot uploaded',
    description: 'Moving to edit phase — assigned to Jev',
    timestamp: '2 min ago',
    type: 'update',
  },
  {
    id: '2',
    platform: 'SaleSense',
    platformColor: '#E74C3C',
    icon: TrendingUp,
    title: 'New deal created: Horizon Media',
    description: 'Pipeline value: $18,000 — Full media package',
    timestamp: '8 min ago',
    type: 'create',
  },
  {
    id: '3',
    platform: 'ContentSense',
    platformColor: '#2ECC71',
    icon: FileText,
    title: 'Weekly report generated',
    description: 'LinkedIn performance report — 23% engagement increase',
    timestamp: '15 min ago',
    type: 'complete',
  },
  {
    id: '4',
    platform: 'EverSense',
    platformColor: '#5B9BD5',
    icon: Clock,
    title: 'Zac logged 3.5h',
    description: 'Meridian Hotel — Video shoot & setup',
    timestamp: '22 min ago',
    type: 'update',
  },
  {
    id: '5',
    platform: 'HRSense',
    platformColor: '#9B59B6',
    icon: Users,
    title: 'Leave request submitted',
    description: 'Gen — April 3-4, 2026 (Personal leave)',
    timestamp: '35 min ago',
    type: 'alert',
  },
  {
    id: '6',
    platform: 'JobSense',
    platformColor: '#D4845A',
    icon: Briefcase,
    title: 'Botanica Gardens — Delivered',
    description: 'Final deliverables sent. Awaiting client approval.',
    timestamp: '1h ago',
    type: 'complete',
  },
  {
    id: '7',
    platform: 'SaleSense',
    platformColor: '#E74C3C',
    icon: TrendingUp,
    title: 'Summit Corp deal moved to Negotiation',
    description: 'Proposal sent — $32K annual package',
    timestamp: '1h ago',
    type: 'update',
  },
  {
    id: '8',
    platform: 'ContentSense',
    platformColor: '#2ECC71',
    icon: FileText,
    title: '3 posts pending approval',
    description: 'Instagram Reels (2), YouTube Short (1)',
    timestamp: '2h ago',
    type: 'alert',
  },
  {
    id: '9',
    platform: 'EverSense',
    platformColor: '#5B9BD5',
    icon: Clock,
    title: 'Hanif completed edit session',
    description: 'CloudNine Fitness — 4.2h edit + color grade',
    timestamp: '2h ago',
    type: 'complete',
  },
  {
    id: '10',
    platform: 'JobSense',
    platformColor: '#D4845A',
    icon: Briefcase,
    title: 'New job booked: Stellar Brands',
    description: 'Video + photos package — $4,200 — Apr 7',
    timestamp: '3h ago',
    type: 'create',
  },
  {
    id: '11',
    platform: 'HRSense',
    platformColor: '#9B59B6',
    icon: Users,
    title: 'Monthly performance reviews due',
    description: 'Reminder: 11 team member reviews pending for March',
    timestamp: '3h ago',
    type: 'alert',
  },
  {
    id: '12',
    platform: 'ContentSense',
    platformColor: '#2ECC71',
    icon: FileText,
    title: 'Creator source added: @designstudio.bali',
    description: 'Instagram — Architecture & interior design niche',
    timestamp: '4h ago',
    type: 'create',
  },
]

const typeStyles: Record<string, { bg: string; label: string }> = {
  create: { bg: 'rgba(74, 222, 128, 0.1)', label: 'New' },
  update: { bg: 'rgba(91, 155, 213, 0.1)', label: 'Update' },
  complete: { bg: 'rgba(212, 132, 90, 0.1)', label: 'Done' },
  alert: { bg: 'rgba(232, 168, 76, 0.1)', label: 'Alert' },
  milestone: { bg: 'rgba(155, 89, 182, 0.1)', label: 'Milestone' },
}

const typeTextColors: Record<string, string> = {
  create: '#4ADE80',
  update: '#5B9BD5',
  complete: '#D4845A',
  alert: '#E8A84C',
  milestone: '#9B59B6',
}

export default function ActivityFeed() {
  const [filter, setFilter] = useState<string>('all')

  const filteredActivities = filter === 'all'
    ? activities
    : activities.filter(a => a.platform.toLowerCase().replace('sense', 'sense') === filter)

  const platformFilters = [
    { id: 'all', label: 'All', color: 'var(--accent)' },
    { id: 'JobSense', label: 'Job', color: '#D4845A' },
    { id: 'EverSense', label: 'Ever', color: '#5B9BD5' },
    { id: 'HRSense', label: 'HR', color: '#9B59B6' },
    { id: 'ContentSense', label: 'Content', color: '#2ECC71' },
    { id: 'SaleSense', label: 'Sale', color: '#E74C3C' },
  ]

  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border-primary)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{
        padding: '16px 20px',
        borderBottom: '1px solid var(--border-primary)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div>
          <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 2 }}>Unified Activity Feed</h3>
          <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>Real-time updates across all platforms</p>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {platformFilters.map((pf) => (
            <button
              key={pf.id}
              onClick={() => setFilter(pf.id)}
              style={{
                padding: '4px 10px',
                borderRadius: 6,
                fontSize: 11,
                fontWeight: 500,
                background: filter === pf.id ? `${pf.color}20` : 'transparent',
                color: filter === pf.id ? pf.color : 'var(--text-muted)',
                border: `1px solid ${filter === pf.id ? `${pf.color}30` : 'transparent'}`,
                transition: 'all 0.15s',
              }}
            >
              {pf.label}
            </button>
          ))}
        </div>
      </div>

      {/* Activity list */}
      <div style={{ maxHeight: 520, overflowY: 'auto' }}>
        {filteredActivities.map((activity, index) => {
          const Icon = activity.icon
          const typeStyle = typeStyles[activity.type]
          return (
            <div
              key={activity.id}
              style={{
                padding: '14px 20px',
                borderBottom: '1px solid var(--border-primary)',
                display: 'flex',
                gap: 14,
                alignItems: 'flex-start',
                cursor: 'pointer',
                transition: 'background 0.15s',
                animation: `fadeIn 0.3s ease-out ${index * 0.03}s both`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--bg-hover)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent'
              }}
            >
              {/* Platform icon */}
              <div style={{
                width: 34,
                height: 34,
                borderRadius: 8,
                background: `${activity.platformColor}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: activity.platformColor,
                flexShrink: 0,
                marginTop: 1,
              }}>
                <Icon size={16} />
              </div>

              {/* Content */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 3 }}>
                  <span style={{ fontSize: 13, fontWeight: 600 }}>{activity.title}</span>
                  <span style={{
                    fontSize: 10,
                    fontWeight: 600,
                    padding: '2px 6px',
                    borderRadius: 4,
                    background: typeStyle.bg,
                    color: typeTextColors[activity.type],
                  }}>
                    {typeStyle.label}
                  </span>
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 4 }}>
                  {activity.description}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{
                    fontSize: 10,
                    fontWeight: 600,
                    color: activity.platformColor,
                  }}>
                    {activity.platform}
                  </span>
                  <span style={{ fontSize: 10, color: 'var(--text-muted)' }}>
                    {activity.timestamp}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
