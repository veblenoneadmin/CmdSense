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
  Crown,
  DollarSign,
  Megaphone,
  Cog,
  Code,
  Target,
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

const executives = [
  { id: 'ceo', label: 'CEO', icon: Crown, color: '#F59E0B', description: 'Chief Executive' },
  { id: 'cfo', label: 'CFO', icon: DollarSign, color: '#10B981', description: 'Chief Financial' },
  { id: 'cmo', label: 'CMO', icon: Megaphone, color: '#8B5CF6', description: 'Chief Marketing' },
  { id: 'coo', label: 'COO', icon: Cog, color: '#EC4899', description: 'Chief Operations' },
  { id: 'cto', label: 'CTO', icon: Code, color: '#3B82F6', description: 'Chief Technology' },
  { id: 'cro', label: 'CRO', icon: Target, color: '#EF4444', description: 'Chief Revenue' },
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
        padding: collapsed ? '0 12px' : '0 12px',
        borderBottom: '1px solid var(--border-primary)',
        flexShrink: 0,
        overflow: 'hidden',
      }}>
        {collapsed ? (
          <svg width="48" height="48" viewBox="20 20 120 120" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <defs>
              <radialGradient id="cg3c" cx="40%" cy="35%" r="60%">
                <stop offset="0%" stopColor="#2E7FD4"/>
                <stop offset="100%" stopColor="#1450A3"/>
              </radialGradient>
            </defs>
            <circle cx="80" cy="80" r="46" fill="url(#cg3c)"/>
            <circle cx="80" cy="80" r="46" fill="none" stroke="#5AAEE8" strokeWidth="1" opacity="0.5"/>
            <path d="M50 65 L68 80 L50 95" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity="0.95"/>
            <line x1="74" y1="95" x2="108" y2="95" stroke="#3CC8F5" strokeWidth="5" strokeLinecap="round"/>
          </svg>
        ) : (
          <svg width="220" height="48" viewBox="0 0 680 160" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <defs>
              <radialGradient id="cg3" cx="40%" cy="35%" r="60%">
                <stop offset="0%" stopColor="#2E7FD4"/>
                <stop offset="100%" stopColor="#1450A3"/>
              </radialGradient>
            </defs>
            <circle cx="80" cy="80" r="56" fill="none" stroke="#1E6FC4" strokeWidth="1" opacity="0.4"/>
            <circle cx="80" cy="80" r="56" fill="none" stroke="#3CC8F5" strokeWidth="0.5" opacity="0.2"/>
            <circle cx="80" cy="80" r="46" fill="url(#cg3)"/>
            <circle cx="80" cy="80" r="46" fill="none" stroke="#5AAEE8" strokeWidth="1" opacity="0.5"/>
            <path d="M50 65 L68 80 L50 95" fill="none" stroke="white" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" opacity="0.95"/>
            <line x1="74" y1="95" x2="108" y2="95" stroke="#3CC8F5" strokeWidth="5" strokeLinecap="round" style={{ filter: 'drop-shadow(0 0 6px rgba(60,200,245,0.9))' }}/>
            <circle cx="80" cy="28" r="3" fill="#3CC8F5" opacity="0.9"/>
            <circle cx="134" cy="52" r="2.2" fill="#3CC8F5" opacity="0.7"/>
            <circle cx="128" cy="112" r="1.8" fill="#3CC8F5" opacity="0.5"/>
            <circle cx="28" cy="48" r="1.5" fill="#3CC8F5" opacity="0.6"/>
            <circle cx="26" cy="104" r="2" fill="#3CC8F5" opacity="0.4"/>
            <line x1="162" y1="58" x2="162" y2="118" stroke="#3B4A5C" strokeWidth="1.5"/>
            <text y="95" style={{ fontFamily: "'Exo 2', sans-serif", fontWeight: 700, fontSize: '56px' }}>
              <tspan x="172" fill="#D0D8E4">Cmd</tspan>
              <tspan fill="#3CC8F5">Sense</tspan>
            </text>
          </svg>
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
          Executive
        </div>

        {executives.map((exec) => {
          const Icon = exec.icon
          const isActive = activeView === exec.id
          return (
            <button
              key={exec.id}
              onClick={() => onNavigate(exec.id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: collapsed ? '10px 20px' : '10px 12px',
                borderRadius: 8,
                marginBottom: 2,
                background: isActive ? `${exec.color}15` : 'transparent',
                color: isActive ? exec.color : 'var(--text-secondary)',
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
              }}>
                <Icon size={18} />
              </div>
              {!collapsed && (
                <div style={{ textAlign: 'left' }}>
                  <div>{exec.label}</div>
                  <div style={{ fontSize: 10, color: 'var(--text-muted)', fontWeight: 400 }}>
                    {exec.description}
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
