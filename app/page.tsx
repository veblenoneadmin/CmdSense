'use client'

import { useState } from 'react'
import Sidebar from './components/Sidebar'
import PlatformCards from './components/PlatformCards'
import ActivityFeed from './components/ActivityFeed'
import KPIOverview from './components/KPIOverview'
import QuickActions from './components/QuickActions'
import RevenueChart from './components/RevenueChart'
import PlatformView from './components/PlatformView'
import {
  Bell,
  Search,
  Command,
  Calendar,
} from 'lucide-react'

export default function CommandCenter() {
  const [activeView, setActiveView] = useState('dashboard')
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)

  const isPlatformView = ['eversense', 'hrsense', 'jobsense', 'contentsense', 'salesense'].includes(activeView)

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar
        activeView={activeView}
        onNavigate={setActiveView}
        collapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
      />

      {/* Main content */}
      <main style={{
        flex: 1,
        marginLeft: sidebarCollapsed ? 72 : 260,
        transition: 'margin-left 0.2s ease',
        minHeight: '100vh',
        background: 'var(--bg-primary)',
      }}>
        {/* Top bar */}
        <header style={{
          height: 64,
          borderBottom: '1px solid var(--border-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 28px',
          position: 'sticky',
          top: 0,
          background: 'var(--bg-primary)',
          zIndex: 50,
          backdropFilter: 'blur(12px)',
        }}>
          <div>
            <h1 style={{ fontSize: 18, fontWeight: 700 }}>
              {isPlatformView
                ? activeView.charAt(0).toUpperCase() + activeView.slice(1).replace('sense', 'Sense')
                : activeView === 'dashboard'
                ? 'Dashboard'
                : activeView.charAt(0).toUpperCase() + activeView.slice(1)
              }
            </h1>
            <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 1 }}>
              {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {/* Search bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '7px 14px',
              borderRadius: 8,
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-primary)',
              width: 260,
            }}>
              <Search size={14} style={{ color: 'var(--text-muted)' }} />
              <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>Search all platforms...</span>
              <div style={{
                marginLeft: 'auto',
                display: 'flex',
                gap: 3,
                alignItems: 'center',
              }}>
                <kbd style={{
                  padding: '1px 5px',
                  borderRadius: 4,
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-primary)',
                  fontSize: 10,
                  color: 'var(--text-muted)',
                }}>
                  <Command size={10} />
                </kbd>
                <kbd style={{
                  padding: '1px 5px',
                  borderRadius: 4,
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-primary)',
                  fontSize: 10,
                  color: 'var(--text-muted)',
                }}>
                  K
                </kbd>
              </div>
            </div>

            {/* Notifications */}
            <button style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-secondary)',
              position: 'relative',
            }}>
              <Bell size={16} />
              <div style={{
                position: 'absolute',
                top: 6,
                right: 6,
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: 'var(--error)',
                border: '1.5px solid var(--bg-primary)',
              }} />
            </button>

            {/* Today */}
            <button style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-secondary)',
            }}>
              <Calendar size={16} />
            </button>
          </div>
        </header>

        {/* Page content */}
        <div style={{ padding: 28 }}>
          {isPlatformView ? (
            <PlatformView
              platformId={activeView}
              onBack={() => setActiveView('dashboard')}
            />
          ) : (
            <div className="fade-in">
              {/* KPIs */}
              <div style={{ marginBottom: 20 }}>
                <h2 style={{ fontSize: 15, fontWeight: 600, marginBottom: 12, color: 'var(--text-secondary)' }}>
                  Key Metrics
                </h2>
                <KPIOverview />
              </div>

              {/* Platform cards */}
              <div style={{ marginBottom: 20 }}>
                <h2 style={{ fontSize: 15, fontWeight: 600, marginBottom: 12, color: 'var(--text-secondary)' }}>
                  Platforms
                </h2>
                <PlatformCards onNavigate={setActiveView} />
              </div>

              {/* Bottom grid: Activity + Charts + Quick Actions */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 16,
                marginBottom: 20,
              }}>
                <RevenueChart />
                <QuickActions />
              </div>

              <ActivityFeed />
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
