import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
} from "@/components/ui/sidebar"
import Image from "next/image"


function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <div className="flex items-center gap-2">
                    <Image src= {"/logo.svg"} alt='logo' width={35} height={35} />
                    <h2 className="font-bold text-lg">AgentFlow</h2>
                </div>
            </SidebarHeader>
                <SidebarContent>
                    <SidebarGroup />
                    <SidebarGroup />
                </SidebarContent>
                <SidebarFooter />
        </Sidebar>
    )
}

export default AppSidebar