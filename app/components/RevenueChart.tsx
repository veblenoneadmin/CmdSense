'use client'

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from 'recharts'
import { useState } from 'react'

const monthlyRevenue = [
  { month: 'Oct', revenue: 52000, jobs: 18, content: 22 },
  { month: 'Nov', revenue: 61000, jobs: 22, content: 28 },
  { month: 'Dec', revenue: 48000, jobs: 16, content: 20 },
  { month: 'Jan', revenue: 67000, jobs: 24, content: 32 },
  { month: 'Feb', revenue: 76500, jobs: 28, content: 38 },
  { month: 'Mar', revenue: 87400, jobs: 31, content: 34 },
]

const weeklyBreakdown = [
  { week: 'W1', jobsense: 8200, salesense: 4500, contentsense: 2100 },
  { week: 'W2', jobsense: 9800, salesense: 6200, contentsense: 1800 },
  { week: 'W3', jobsense: 11200, salesense: 5100, contentsense: 3200 },
  { week: 'W4', jobsense: 10500, salesense: 7800, contentsense: 2600 },
]

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload) return null
  return (
    <div style={{
      background: 'var(--bg-tertiary)',
      border: '1px solid var(--border-primary)',
      borderRadius: 8,
      padding: '10px 14px',
      fontSize: 12,
    }}>
      <div style={{ fontWeight: 600, marginBottom: 6 }}>{label}</div>
      {payload.map((item: any, i: number) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
          <div style={{ width: 8, height: 8, borderRadius: 2, background: item.color }} />
          <span style={{ color: 'var(--text-secondary)' }}>{item.name}:</span>
          <span style={{ fontWeight: 600 }}>
            {typeof item.value === 'number' && item.value > 1000
              ? `$${(item.value / 1000).toFixed(1)}K`
              : item.value}
          </span>
        </div>
      ))}
    </div>
  )
}

export default function RevenueChart() {
  const [view, setView] = useState<'revenue' | 'breakdown'>('revenue')

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
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <div>
          <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 2 }}>Revenue & Performance</h3>
          <p style={{ fontSize: 12, color: 'var(--text-muted)' }}>6-month trend across platforms</p>
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          {(['revenue', 'breakdown'] as const).map((v) => (
            <button
              key={v}
              onClick={() => setView(v)}
              style={{
                padding: '4px 12px',
                borderRadius: 6,
                fontSize: 11,
                fontWeight: 500,
                background: view === v ? 'var(--accent-dim)' : 'transparent',
                color: view === v ? 'var(--accent-light)' : 'var(--text-muted)',
                border: `1px solid ${view === v ? 'var(--accent-border)' : 'transparent'}`,
                textTransform: 'capitalize',
              }}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      <div style={{ padding: '20px', height: 280 }}>
        <ResponsiveContainer width="100%" height="100%">
          {view === 'revenue' ? (
            <AreaChart data={monthlyRevenue}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#D4845A" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#D4845A" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1A1A1A" />
              <XAxis dataKey="month" tick={{ fill: '#666', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis
                tick={{ fill: '#666', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `$${v / 1000}K`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Area
                type="monotone"
                dataKey="revenue"
                name="Revenue"
                stroke="#D4845A"
                strokeWidth={2}
                fill="url(#revenueGradient)"
              />
            </AreaChart>
          ) : (
            <BarChart data={weeklyBreakdown}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1A1A1A" />
              <XAxis dataKey="week" tick={{ fill: '#666', fontSize: 12 }} axisLine={false} tickLine={false} />
              <YAxis
                tick={{ fill: '#666', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                tickFormatter={(v) => `$${v / 1000}K`}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="jobsense" name="JobSense" fill="#D4845A" radius={[4, 4, 0, 0]} />
              <Bar dataKey="salesense" name="SaleSense" fill="#E74C3C" radius={[4, 4, 0, 0]} />
              <Bar dataKey="contentsense" name="ContentSense" fill="#2ECC71" radius={[4, 4, 0, 0]} />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  )
}
