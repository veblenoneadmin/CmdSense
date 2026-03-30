import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Command Center — Veblen Group',
  description: 'Unified hub for all Sense platforms',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
