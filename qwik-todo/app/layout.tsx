import './globals.css'
import type { Metadata } from 'next'

export const metaData: Metadata = {
  title: "Qwik Todo",
  description: "Todo List app, made with Next.js 13 and structured using the App Router."
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
