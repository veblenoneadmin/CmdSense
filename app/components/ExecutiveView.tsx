'use client'

import {
  Crown,
  DollarSign,
  Megaphone,
  Cog,
  Code,
  Target,
  ArrowUpRight,
  ArrowDownRight,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Clock,
  BarChart3,
  Users,
  Briefcase,
  FileText,
  Activity,
} from 'lucide-react'

// ─── Types ───────────────────────────────────────────────────

interface MetricCard {
  label: string
  value: string
  change: string
  changeType: 'up' | 'down' | 'neutral'
  color: string
}

interface FocusItem {
  title: string
  description: string
  status: 'on_track' | 'at_risk' | 'action_needed' | 'completed'
  priority: 'high' | 'medium' | 'low'
}

interface PlatformInsight {
  platform: string
  color: string
  metric: string
  value: string
  trend: string
  trendType: 'up' | 'down'
}

interface ExecutiveConfig {
  id: string
  title: string
  role: string
  tagline: string
  color: string
  icon: any
  metrics: MetricCard[]
  focusAreas: FocusItem[]
  platformInsights: PlatformInsight[]
  decisions: { title: string; deadline: string; impact: string }[]
}

// ─── Executive Data ──────────────────────────────────────────

const executiveData: Record<string, ExecutiveConfig> = {
  ceo: {
    id: 'ceo',
    title: 'CEO',
    role: 'Chief Executive Officer',
    tagline: 'Company-wide performance, strategy & leadership overview',
    color: '#F59E0B',
    icon: Crown,
    metrics: [
      { label: 'Total Revenue (Q1)', value: '$262K', change: '+18%', changeType: 'up', color: '#4ADE80' },
      { label: 'Team Headcount', value: '11', change: '+1', changeType: 'up', color: '#5B9BD5' },
      { label: 'Active Clients', value: '14', change: '+3', changeType: 'up', color: '#D4845A' },
      { label: 'Avg Profit Margin', value: '34%', change: '+2%', changeType: 'up', color: '#F59E0B' },
      { label: 'Client Retention', value: '92%', change: '+4%', changeType: 'up', color: '#2ECC71' },
      { label: 'NPS Score', value: '72', change: '+8', changeType: 'up', color: '#9B59B6' },
    ],
    focusAreas: [
      { title: 'Q2 Growth Strategy', description: 'Finalize expansion plan — target 20% revenue growth', status: 'on_track', priority: 'high' },
      { title: 'New Hire Onboarding', description: 'Intern starting Apr 14 — coordinate with HR', status: 'on_track', priority: 'medium' },
      { title: 'Client Retention Initiative', description: 'Implement loyalty program for top 5 accounts', status: 'at_risk', priority: 'high' },
      { title: 'Process Automation', description: 'Reduce manual workflows by 30% across platforms', status: 'action_needed', priority: 'medium' },
    ],
    platformInsights: [
      { platform: 'JobSense', color: '#D4845A', metric: 'Active Jobs', value: '10', trend: '+25%', trendType: 'up' },
      { platform: 'SaleSense', color: '#E74C3C', metric: 'Pipeline', value: '$142K', trend: '+24%', trendType: 'up' },
      { platform: 'EverSense', color: '#5B9BD5', metric: 'Utilization', value: '86%', trend: '-2%', trendType: 'down' },
      { platform: 'ContentSense', color: '#2ECC71', metric: 'Published', value: '34', trend: '+22%', trendType: 'up' },
      { platform: 'HRSense', color: '#9B59B6', metric: 'Satisfaction', value: '4.2/5', trend: '+0.3', trendType: 'up' },
    ],
    decisions: [
      { title: 'Approve Q2 marketing budget ($15K)', deadline: 'Apr 3', impact: 'Revenue growth' },
      { title: 'Sign off on Velvet Group retainer', deadline: 'Apr 1', impact: '$5.5K/mo recurring' },
      { title: 'Review team performance assessments', deadline: 'Apr 5', impact: 'Team morale' },
    ],
  },
  cfo: {
    id: 'cfo',
    title: 'CFO',
    role: 'Chief Financial Officer',
    tagline: 'Financial health, cash flow & profitability analysis',
    color: '#10B981',
    icon: DollarSign,
    metrics: [
      { label: 'Monthly Revenue', value: '$87.4K', change: '+14.2%', changeType: 'up', color: '#4ADE80' },
      { label: 'Operating Costs', value: '$52.1K', change: '+6%', changeType: 'up', color: '#E74C3C' },
      { label: 'Net Profit', value: '$35.3K', change: '+28%', changeType: 'up', color: '#10B981' },
      { label: 'Cash on Hand', value: '$124K', change: '+$18K', changeType: 'up', color: '#5B9BD5' },
      { label: 'Accounts Receivable', value: '$42K', change: '-$8K', changeType: 'up', color: '#F59E0B' },
      { label: 'Payroll (Monthly)', value: '$38.2K', change: '+2%', changeType: 'up', color: '#9B59B6' },
    ],
    focusAreas: [
      { title: 'March Payroll Processing', description: 'Process payroll for 11 team members — due Apr 1', status: 'action_needed', priority: 'high' },
      { title: 'Q1 Tax Filing', description: 'Quarterly tax preparation with accountant', status: 'on_track', priority: 'high' },
      { title: 'Invoice Collection', description: '3 overdue invoices totaling $18.5K', status: 'at_risk', priority: 'high' },
      { title: 'Budget vs Actual Review', description: 'Q1 variance analysis — slight overspend on equipment', status: 'on_track', priority: 'medium' },
    ],
    platformInsights: [
      { platform: 'JobSense', color: '#D4845A', metric: 'Revenue', value: '$24.5K', trend: '+8%', trendType: 'up' },
      { platform: 'SaleSense', color: '#E74C3C', metric: 'Won Deals', value: '$20.7K', trend: '+15%', trendType: 'up' },
      { platform: 'HRSense', color: '#9B59B6', metric: 'Payroll', value: '$38.2K', trend: '+2%', trendType: 'up' },
      { platform: 'EverSense', color: '#5B9BD5', metric: 'Billable Hours', value: '284h', trend: '+8%', trendType: 'up' },
      { platform: 'ContentSense', color: '#2ECC71', metric: 'Content ROI', value: '3.2x', trend: '+0.4x', trendType: 'up' },
    ],
    decisions: [
      { title: 'Approve equipment purchase ($2.8K)', deadline: 'Apr 2', impact: 'Production quality' },
      { title: 'Review contractor rate increases', deadline: 'Apr 5', impact: '$4K/yr cost increase' },
      { title: 'Finalize Q2 operating budget', deadline: 'Apr 7', impact: 'Resource allocation' },
    ],
  },
  cmo: {
    id: 'cmo',
    title: 'CMO',
    role: 'Chief Marketing Officer',
    tagline: 'Marketing performance, content strategy & brand growth',
    color: '#8B5CF6',
    icon: Megaphone,
    metrics: [
      { label: 'Content Published', value: '34', change: '+22%', changeType: 'up', color: '#2ECC71' },
      { label: 'Engagement Rate', value: '4.8%', change: '+0.6%', changeType: 'up', color: '#8B5CF6' },
      { label: 'Social Followers', value: '12.4K', change: '+820', changeType: 'up', color: '#5B9BD5' },
      { label: 'Website Traffic', value: '8.2K', change: '+34%', changeType: 'up', color: '#F59E0B' },
      { label: 'Leads Generated', value: '28', change: '+40%', changeType: 'up', color: '#E74C3C' },
      { label: 'Creator Sources', value: '24', change: '+3', changeType: 'up', color: '#D4845A' },
    ],
    focusAreas: [
      { title: 'LinkedIn Campaign Launch', description: 'B2B content series targeting hospitality sector', status: 'on_track', priority: 'high' },
      { title: 'Content Approval Backlog', description: '5 pieces pending review — Instagram & YouTube', status: 'action_needed', priority: 'high' },
      { title: 'Creator Partnership Program', description: 'Onboard 5 new creator sources for Q2', status: 'on_track', priority: 'medium' },
      { title: 'Brand Guidelines Update', description: 'Refresh visual identity for social channels', status: 'at_risk', priority: 'low' },
    ],
    platformInsights: [
      { platform: 'ContentSense', color: '#2ECC71', metric: 'Scheduled', value: '12', trend: '+50%', trendType: 'up' },
      { platform: 'ContentSense', color: '#2ECC71', metric: 'Approvals', value: '5 pending', trend: '+2', trendType: 'up' },
      { platform: 'SaleSense', color: '#E74C3C', metric: 'Inbound Leads', value: '12', trend: '+60%', trendType: 'up' },
      { platform: 'JobSense', color: '#D4845A', metric: 'Content Jobs', value: '4', trend: '+1', trendType: 'up' },
      { platform: 'EverSense', color: '#5B9BD5', metric: 'Content Hours', value: '62h', trend: '+15%', trendType: 'up' },
    ],
    decisions: [
      { title: 'Approve Q2 ad spend ($5K)', deadline: 'Apr 3', impact: 'Lead generation' },
      { title: 'Select agency for video production', deadline: 'Apr 4', impact: 'Content pipeline' },
      { title: 'Sign off on brand refresh mockups', deadline: 'Apr 8', impact: 'Brand consistency' },
    ],
  },
  coo: {
    id: 'coo',
    title: 'COO',
    role: 'Chief Operations Officer',
    tagline: 'Operational efficiency, team productivity & process optimization',
    color: '#EC4899',
    icon: Cog,
    metrics: [
      { label: 'Team Utilization', value: '86%', change: '-2%', changeType: 'down', color: '#9B59B6' },
      { label: 'On-Time Delivery', value: '94%', change: '+3%', changeType: 'up', color: '#4ADE80' },
      { label: 'Active Projects', value: '10', change: '+3', changeType: 'up', color: '#D4845A' },
      { label: 'Avg Turnaround', value: '4.2 days', change: '-0.8d', changeType: 'up', color: '#5B9BD5' },
      { label: 'Process Errors', value: '2', change: '-3', changeType: 'up', color: '#EC4899' },
      { label: 'Equipment Uptime', value: '98%', change: '+1%', changeType: 'up', color: '#F59E0B' },
    ],
    focusAreas: [
      { title: 'Resource Allocation', description: 'Rebalance team for Apr peak — 3 concurrent shoots', status: 'action_needed', priority: 'high' },
      { title: 'QC Process Improvement', description: 'Reduce QC review cycle from 2 days to 1 day', status: 'on_track', priority: 'high' },
      { title: 'Equipment Maintenance', description: 'Schedule quarterly gear check — cameras & lighting', status: 'on_track', priority: 'medium' },
      { title: 'Workflow Automation', description: 'Automate job status transitions in JobSense', status: 'at_risk', priority: 'medium' },
    ],
    platformInsights: [
      { platform: 'EverSense', color: '#5B9BD5', metric: 'Hours Logged', value: '284h', trend: '+8%', trendType: 'up' },
      { platform: 'JobSense', color: '#D4845A', metric: 'Jobs Delivered', value: '4', trend: '+1', trendType: 'up' },
      { platform: 'JobSense', color: '#D4845A', metric: 'In Production', value: '6', trend: '+2', trendType: 'up' },
      { platform: 'HRSense', color: '#9B59B6', metric: 'Leave Pending', value: '2', trend: '0', trendType: 'up' },
      { platform: 'ContentSense', color: '#2ECC71', metric: 'QC Queue', value: '5', trend: '+2', trendType: 'up' },
    ],
    decisions: [
      { title: 'Approve overtime for Meridian shoot', deadline: 'Today', impact: 'Delivery timeline' },
      { title: 'Finalize Apr scheduling grid', deadline: 'Apr 2', impact: 'Team allocation' },
      { title: 'Sign off on SkyView QC review', deadline: 'Today', impact: 'Client delivery' },
    ],
  },
  cto: {
    id: 'cto',
    title: 'CTO',
    role: 'Chief Technology Officer',
    tagline: 'Technology infrastructure, platform health & innovation',
    color: '#3B82F6',
    icon: Code,
    metrics: [
      { label: 'Platform Uptime', value: '99.8%', change: '+0.2%', changeType: 'up', color: '#4ADE80' },
      { label: 'Active Platforms', value: '5/5', change: 'All online', changeType: 'up', color: '#3B82F6' },
      { label: 'API Response Time', value: '142ms', change: '-28ms', changeType: 'up', color: '#5B9BD5' },
      { label: 'DB Storage Used', value: '2.4GB', change: '+320MB', changeType: 'up', color: '#F59E0B' },
      { label: 'Deployments (Week)', value: '8', change: '+3', changeType: 'up', color: '#D4845A' },
      { label: 'Open Issues', value: '12', change: '-4', changeType: 'up', color: '#EC4899' },
    ],
    focusAreas: [
      { title: 'Database Migration', description: 'CmdSense connected to Railway MySQL — monitor performance', status: 'completed', priority: 'high' },
      { title: 'Platform Integration API', description: 'Build unified API layer across all 5 Sense platforms', status: 'on_track', priority: 'high' },
      { title: 'Security Audit', description: 'Quarterly review — API keys, auth, data encryption', status: 'action_needed', priority: 'high' },
      { title: 'Mobile Responsive Update', description: 'Optimize CmdSense dashboard for tablet & mobile', status: 'at_risk', priority: 'medium' },
    ],
    platformInsights: [
      { platform: 'EverSense', color: '#5B9BD5', metric: 'Uptime', value: '99.9%', trend: '+0.1%', trendType: 'up' },
      { platform: 'JobSense', color: '#D4845A', metric: 'Uptime', value: '99.8%', trend: '+0.2%', trendType: 'up' },
      { platform: 'HRSense', color: '#9B59B6', metric: 'Uptime', value: '99.7%', trend: '-0.1%', trendType: 'down' },
      { platform: 'ContentSense', color: '#2ECC71', metric: 'Uptime', value: '99.9%', trend: '+0.3%', trendType: 'up' },
      { platform: 'SaleSense', color: '#E74C3C', metric: 'Uptime', value: '99.6%', trend: '+0.1%', trendType: 'up' },
    ],
    decisions: [
      { title: 'Approve CDN upgrade ($200/mo)', deadline: 'Apr 2', impact: 'Load time improvement' },
      { title: 'Choose monitoring tool (Grafana vs Datadog)', deadline: 'Apr 5', impact: 'Observability' },
      { title: 'Prioritize mobile vs API backlog', deadline: 'Apr 3', impact: 'Q2 roadmap' },
    ],
  },
  cro: {
    id: 'cro',
    title: 'CRO',
    role: 'Chief Revenue Officer',
    tagline: 'Revenue growth, sales pipeline & deal performance',
    color: '#EF4444',
    icon: Target,
    metrics: [
      { label: 'Pipeline Value', value: '$142K', change: '+$28K', changeType: 'up', color: '#E74C3C' },
      { label: 'Deals Won (Month)', value: '4', change: '+2', changeType: 'up', color: '#4ADE80' },
      { label: 'Win Rate', value: '68%', change: '+5%', changeType: 'up', color: '#F59E0B' },
      { label: 'Avg Deal Size', value: '$5.2K', change: '+$800', changeType: 'up', color: '#5B9BD5' },
      { label: 'Closing This Week', value: '3', change: '+1', changeType: 'up', color: '#D4845A' },
      { label: 'Revenue per Client', value: '$6.2K', change: '+12%', changeType: 'up', color: '#9B59B6' },
    ],
    focusAreas: [
      { title: 'Velvet Group Contract', description: '$5.5K/mo retainer — contract signing due Apr 1', status: 'action_needed', priority: 'high' },
      { title: 'Atlas Properties Follow-up', description: '$4.8K deal in closing stage — decision expected', status: 'on_track', priority: 'high' },
      { title: 'NovaTech Discovery', description: '$22K potential — discovery call scheduled Apr 3', status: 'on_track', priority: 'medium' },
      { title: 'Upsell Campaign', description: 'Cross-sell content packages to existing video clients', status: 'at_risk', priority: 'medium' },
    ],
    platformInsights: [
      { platform: 'SaleSense', color: '#E74C3C', metric: 'Open Deals', value: '8', trend: '+2', trendType: 'up' },
      { platform: 'SaleSense', color: '#E74C3C', metric: 'Won Revenue', value: '$20.7K', trend: '+15%', trendType: 'up' },
      { platform: 'JobSense', color: '#D4845A', metric: 'Job Revenue', value: '$24.5K', trend: '+8%', trendType: 'up' },
      { platform: 'ContentSense', color: '#2ECC71', metric: 'Content Leads', value: '12', trend: '+60%', trendType: 'up' },
      { platform: 'EverSense', color: '#5B9BD5', metric: 'Billable Rate', value: '$85/hr', trend: '+$5', trendType: 'up' },
    ],
    decisions: [
      { title: 'Approve discount for Summit Corp ($32K)', deadline: 'Apr 1', impact: 'Largest deal in pipeline' },
      { title: 'Set Q2 revenue target', deadline: 'Apr 3', impact: 'Team incentives' },
      { title: 'Review pricing for content packages', deadline: 'Apr 5', impact: 'Margin optimization' },
    ],
  },
}

// ─── Status helpers ──────────────────────────────────────────

const statusConfig: Record<string, { bg: string; text: string; label: string; icon: any }> = {
  on_track: { bg: 'rgba(74, 222, 128, 0.1)', text: '#4ADE80', label: 'On Track', icon: CheckCircle2 },
  at_risk: { bg: 'rgba(245, 158, 11, 0.1)', text: '#F59E0B', label: 'At Risk', icon: AlertTriangle },
  action_needed: { bg: 'rgba(239, 68, 68, 0.1)', text: '#EF4444', label: 'Action Needed', icon: AlertTriangle },
  completed: { bg: 'rgba(91, 155, 213, 0.1)', text: '#5B9BD5', label: 'Completed', icon: CheckCircle2 },
}

const priorityColors: Record<string, string> = {
  high: '#EF4444',
  medium: '#F59E0B',
  low: '#5B9BD5',
}

// ─── Component ───────────────────────────────────────────────

interface ExecutiveViewProps {
  roleId: string
}

export default function ExecutiveView({ roleId }: ExecutiveViewProps) {
  const config = executiveData[roleId]
  if (!config) return null

  const Icon = config.icon

  return (
    <div className="fade-in">
      {/* Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 16,
        marginBottom: 24,
      }}>
        <div style={{
          width: 48,
          height: 48,
          borderRadius: 14,
          background: `${config.color}15`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: config.color,
        }}>
          <Icon size={24} />
        </div>
        <div>
          <h2 style={{ fontSize: 22, fontWeight: 700 }}>{config.title} Dashboard</h2>
          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>{config.tagline}</p>
        </div>
        <div style={{
          marginLeft: 'auto',
          padding: '6px 14px',
          borderRadius: 8,
          background: `${config.color}15`,
          color: config.color,
          fontSize: 12,
          fontWeight: 600,
          border: `1px solid ${config.color}30`,
        }}>
          {config.role}
        </div>
      </div>

      {/* KPI Metrics */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
        gap: 12,
        marginBottom: 20,
      }}>
        {config.metrics.map((metric, i) => {
          const isUp = metric.changeType === 'up'
          return (
            <div key={i} style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-primary)',
              borderRadius: 'var(--radius-md)',
              padding: '16px 14px',
              animation: `fadeIn 0.3s ease-out ${i * 0.05}s both`,
            }}>
              <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 8 }}>
                {metric.label}
              </div>
              <div style={{ fontSize: 22, fontWeight: 700, marginBottom: 4 }}>
                {metric.value}
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: 4,
                fontSize: 12,
                fontWeight: 600,
                color: isUp ? 'var(--success)' : 'var(--error)',
              }}>
                {isUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {metric.change}
              </div>
            </div>
          )
        })}
      </div>

      {/* Main grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 380px',
        gap: 16,
      }}>
        {/* Left column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Focus Areas */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-primary)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
          }}>
            <div style={{
              padding: '14px 20px',
              borderBottom: '1px solid var(--border-primary)',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}>
              <Activity size={14} style={{ color: config.color }} />
              <h3 style={{ fontSize: 14, fontWeight: 600 }}>Focus Areas</h3>
              <span style={{
                marginLeft: 'auto',
                fontSize: 11,
                color: 'var(--text-muted)',
                background: 'var(--bg-tertiary)',
                padding: '2px 8px',
                borderRadius: 4,
              }}>
                {config.focusAreas.filter(f => f.status !== 'completed').length} active
              </span>
            </div>
            {config.focusAreas.map((item, i) => {
              const status = statusConfig[item.status]
              const StatusIcon = status.icon
              return (
                <div key={i} style={{
                  padding: '14px 20px',
                  borderBottom: i < config.focusAreas.length - 1 ? '1px solid var(--border-primary)' : 'none',
                  display: 'flex',
                  gap: 14,
                  alignItems: 'flex-start',
                  transition: 'background 0.15s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-hover)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                >
                  <div style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: priorityColors[item.priority],
                    marginTop: 7,
                    flexShrink: 0,
                  }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                      <span style={{ fontSize: 13, fontWeight: 600 }}>{item.title}</span>
                      <span style={{
                        fontSize: 10,
                        fontWeight: 600,
                        padding: '2px 8px',
                        borderRadius: 4,
                        background: status.bg,
                        color: status.text,
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 4,
                      }}>
                        <StatusIcon size={10} />
                        {status.label}
                      </span>
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>
                      {item.description}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Platform Insights */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-primary)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
          }}>
            <div style={{
              padding: '14px 20px',
              borderBottom: '1px solid var(--border-primary)',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}>
              <BarChart3 size={14} style={{ color: config.color }} />
              <h3 style={{ fontSize: 14, fontWeight: 600 }}>Platform Insights</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 1, background: 'var(--border-primary)' }}>
              {config.platformInsights.map((insight, i) => (
                <div key={i} style={{
                  background: 'var(--bg-card)',
                  padding: '14px 16px',
                }}>
                  <div style={{
                    fontSize: 10,
                    fontWeight: 600,
                    color: insight.color,
                    marginBottom: 6,
                  }}>
                    {insight.platform}
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)', marginBottom: 4 }}>
                    {insight.metric}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                    <span style={{ fontSize: 18, fontWeight: 700 }}>{insight.value}</span>
                    <span style={{
                      fontSize: 11,
                      fontWeight: 600,
                      color: insight.trendType === 'up' ? 'var(--success)' : 'var(--error)',
                    }}>
                      {insight.trend}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column — Decisions */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-primary)',
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          alignSelf: 'start',
        }}>
          <div style={{
            padding: '14px 20px',
            borderBottom: '1px solid var(--border-primary)',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}>
            <Clock size={14} style={{ color: config.color }} />
            <h3 style={{ fontSize: 14, fontWeight: 600 }}>Pending Decisions</h3>
          </div>
          {config.decisions.map((decision, i) => (
            <div key={i} style={{
              padding: '14px 20px',
              borderBottom: i < config.decisions.length - 1 ? '1px solid var(--border-primary)' : 'none',
            }}>
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 6 }}>
                {decision.title}
              </div>
              <div style={{ display: 'flex', gap: 16, fontSize: 11 }}>
                <span style={{ color: 'var(--text-muted)' }}>
                  Due: <span style={{ color: decision.deadline === 'Today' ? 'var(--error)' : 'var(--text-secondary)', fontWeight: 600 }}>{decision.deadline}</span>
                </span>
                <span style={{ color: 'var(--text-muted)' }}>
                  Impact: <span style={{ color: 'var(--text-secondary)', fontWeight: 500 }}>{decision.impact}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
