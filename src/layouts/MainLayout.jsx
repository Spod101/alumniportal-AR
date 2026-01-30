import React from 'react'
import Sidebar from '../ui/Sidebar'

export default function MainLayout({ children }) {
  return (
    <div className="flex h-screen bg-page-bg overflow-hidden">
      <Sidebar />
      <main className="flex-1 p-8 bg-page-bg overflow-y-auto">{children}</main>
    </div>
  )
}
