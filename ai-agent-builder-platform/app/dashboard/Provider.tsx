import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar'
import React from 'react'
import AppSidebar from './_components/AppSidebar'

// In React and Next.js, a Provider is usually created to share data or functionality 
// with many components in the app.

// Instead of passing data manually through many components, we use a Provider to make 
// it available everywhere.

function DashboardProvider({children} : any) {
  return (
    <SidebarProvider>
        <AppSidebar/>
        {/* //for closing and opening sidebar menu */}
        <SidebarTrigger/> 
        <div>{children}</div>
    </SidebarProvider>
  )
}

export default DashboardProvider