import React from 'react'
import DashboardProvider from './Provider'

// In React, children means whatever component is placed inside another component.
// In Next.js, a layout.js or layout.tsx wraps all the pages inside that folder.
// So children represents the page content that will be rendered inside the layout

function DashboardLayout({children } : any) {
  return (
    <DashboardProvider>

        {children}

    </DashboardProvider>
  )
}

export default DashboardLayout