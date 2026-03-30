'use client'

import {
  LayoutDashboard,
  Briefcase,
  Clock,
  Users,
  FileText,
  TrendingUp,
  Settings,
  ChevronLeft,
  ChevronRight,
  Zap,
  Bell,
  Search,
} from 'lucide-react'

const platforms = [
  { id: 'eversense', label: 'EverSense', icon: Clock, color: '#5B9BD5', description: 'Time & Projects', port: 3200 },
  { id: 'hrsense', label: 'HRSense', icon: Users, color: '#9B59B6', description: 'Team & HR', port: 3300 },
  { id: 'jobsense', label: 'JobSense', icon: Briefcase, color: '#D4845A', description: 'Job Execution', port: 3000 },
  { id: 'contentsense', label: 'ContentSense', icon: FileText, color: '#2ECC71', description: 'Content Hub', port: 3400 },
  { id: 'salesense', label: 'SaleSense', icon: TrendingUp, color: '#E74C3C', description: 'Sales & CRM', port: 3500 },
]

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'search', label: 'Global Search', icon: Search },
  { id: 'automations', label: 'Automations', icon: Zap },
  { id: 'settings', label: 'Settings', icon: Settings },
]

interface SidebarProps {
  activeView: string
  onNavigate: (view: string) => void
  collapsed: boolean
  onToggle: () => void
}

export default function Sidebar({ activeView, onNavigate, collapsed, onToggle }: SidebarProps) {
  return (
    <aside style={{
      width: collapsed ? 72 : 260,
      height: '100vh',
      background: 'var(--bg-secondary)',
      borderRight: '1px solid var(--border-primary)',
      display: 'flex',
      flexDirection: 'column',
      transition: 'width 0.2s ease',
      position: 'fixed',
      left: 0,
      top: 0,
      zIndex: 100,
      overflow: 'hidden',
    }}>
      {/* Logo */}
      <div style={{
        height: 64,
        display: 'flex',
        alignItems: 'center',
        padding: collapsed ? '0 20px' : '0 20px',
        borderBottom: '1px solid var(--border-primary)',
        gap: 12,
        flexShrink: 0,
      }}>
        <div style={{
          width: 32,
          height: 32,
          borderRadius: 8,
          background: 'linear-gradient(135deg, var(--accent), var(--accent-light))',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          fontSize: 14,
          color: '#0B0B0B',
          flexShrink: 0,
        }}>
          V
        </div>
        {!collapsed && (
          <div>
            <div style={{ fontWeight: 600, fontSize: 14, letterSpacing: '0.02em' }}>Command Center</div>
            <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>Veblen Group</div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav style={{ padding: '16px 8px', flex: 1, overflowY: 'auto' }}>
        <div style={{
          fontSize: 10,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: 'var(--text-muted)',
          padding: '0 12px',
          marginBottom: 8,
          opacity: collapsed ? 0 : 1,
          transition: 'opacity 0.2s',
        }}>
          Navigation
        </div>

        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = activeView === item.id
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: collapsed ? '10px 20px' : '10px 12px',
                borderRadius: 8,
                marginBottom: 2,
                background: isActive ? 'var(--accent-dim)' : 'transparent',
                color: isActive ? 'var(--accent-light)' : 'var(--text-secondary)',
                fontSize: 13,
                fontWeight: isActive ? 600 : 400,
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.background = 'var(--bg-hover)'
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.background = 'transparent'
              }}
            >
              <Icon size={18} />
              {!collapsed && item.label}
            </button>
          )
        })}

        <div style={{
          height: 1,
          background: 'var(--border-primary)',
          margin: '16px 12px',
        }} />

        <div style={{
          fontSize: 10,
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
          color: 'var(--text-muted)',
          padding: '0 12px',
          marginBottom: 8,
          opacity: collapsed ? 0 : 1,
          transition: 'opacity 0.2s',
        }}>
          Platforms
        </div>

        {platforms.map((platform) => {
          const Icon = platform.icon
          const isActive = activeView === platform.id
          return (
            <button
              key={platform.id}
              onClick={() => onNavigate(platform.id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: collapsed ? '10px 20px' : '10px 12px',
                borderRadius: 8,
                marginBottom: 2,
                background: isActive ? `${platform.color}15` : 'transparent',
                color: isActive ? platform.color : 'var(--text-secondary)',
                fontSize: 13,
                fontWeight: isActive ? 600 : 400,
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.background = 'var(--bg-hover)'
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.background = 'transparent'
              }}
            >
              <div style={{
                width: 18,
                height: 18,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}>
                <Icon size={18} />
                <div style={{
                  position: 'absolute',
                  top: -1,
                  right: -1,
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: platform.color,
                  border: '1.5px solid var(--bg-secondary)',
                }} />
              </div>
              {!collapsed && (
                <div style={{ textAlign: 'left' }}>
                  <div>{platform.label}</div>
                  <div style={{ fontSize: 10, color: 'var(--text-muted)', fontWeight: 400 }}>
                    {platform.description}
                  </div>
                </div>
              )}
            </button>
          )
        })}
      </nav>

      {/* Collapse toggle */}
      <button
        onClick={onToggle}
        style={{
          height: 48,
          display: 'flex',
          alignItems: 'center',
          justifyContent: collapsed ? 'center' : 'flex-end',
          padding: '0 16px',
          borderTop: '1px solid var(--border-primary)',
          color: 'var(--text-muted)',
          fontSize: 12,
          gap: 8,
          flexShrink: 0,
        }}
      >
        {collapsed ? <ChevronRight size={16} /> : (
          <>
            <span>Collapse</span>
            <ChevronLeft size={16} />
          </>
        )}
      </button>
    </aside>
  )
}
