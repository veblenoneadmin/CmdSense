'use client'

import { useState, useEffect } from 'react'

export interface DashboardData {
  platforms: any[]
  kpis: any[]
  activities: any[]
  monthlyRevenue: any[]
  weeklyBreakdown: any[]
}

const emptyData: DashboardData = {
  platforms: [],
  kpis: [],
  activities: [],
  monthlyRevenue: [],
  weeklyBreakdown: [],
}

export function useDashboardData() {
  const [data, setData] = useState<DashboardData>(emptyData)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/dashboard')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch')
        return res.json()
      })
      .then(setData)
      .catch(() => {}) // keep empty data, UI still renders
      .finally(() => setLoading(false))
  }, [])

  return { data, loading }
}
