'use client'

import {
  Plus,
  Upload,
  Calendar,
  FileCheck,
  UserPlus,
  Receipt,
  Target,
  Sparkles,
  ExternalLink,
} from 'lucide-react'

interface QuickAction {
  label: string
  description: string
  icon: any
  color: string
  platform: string
}

const quickActions: QuickAction[] = [
  { label: 'New Job', description: 'Create a job in JobSense', icon: Plus, color: '#D4845A', platform: 'JobSense' },
  { label: 'Log Time', description: 'Record hours in EverSense', icon: Calendar, color: '#5B9BD5', platform: 'EverSense' },
  { label: 'Create Content', description: 'Draft in ContentSense', icon: Sparkles, color: '#2ECC71', platform: 'ContentSense' },
  { label: 'New Deal', description: 'Add deal to SaleSense', icon: Target, color: '#E74C3C', platform: 'SaleSense' },
  { label: 'Add Team Member', description: 'Onboard via HRSense', icon: UserPlus, color: '#9B59B6', platform: 'HRSense' },
  { label: 'Send Invoice', description: 'Generate via JobSense', icon: Receipt, color: '#D4845A', platform: 'JobSense' },
  { label: 'Upload Deliverable', description: 'Upload to JobSense', icon: Upload, color: '#D4845A', platform: 'JobSense' },
  { label: 'Submit for Review', description: 'QC via ContentSense', icon: FileCheck, color: '#2ECC71', platform: 'ContentSense' },
]

export default function QuickActions() {
  return (
    <div style={{
      background: 'var(--bg-card)',
      border: '1px solid var(--border-primary)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
    }}>
      <div style={{
        padding: '16px 20px',
        borderBottom: '1px solid var(--border-primary)',
      }}>
        <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 2 }}>Quick Actions</h3>
        <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>Launch common tasks across platforms</p>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 1,
        background: 'var(--border-primary)',
      }}>
        {quickActions.map((action, index) => {
          const Icon = action.icon
          return (
            <button
              key={index}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '14px 16px',
                background: 'var(--bg-card)',
                textAlign: 'left',
                transition: 'background 0.15s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--bg-hover)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--bg-card)'
              }}
            >
              <div style={{
                width: 34,
                height: 34,
                borderRadius: 8,
                background: `${action.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: action.color,
                flexShrink: 0,
              }}>
                <Icon size={16} />
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{action.label}</div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{action.description}</div>
              </div>
              <ExternalLink size={13} style={{ color: 'var(--text-muted)', flexShrink: 0 }} />
            </button>
          )
        })}
      </div>
    </div>
  )
}
