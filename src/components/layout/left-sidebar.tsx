'use client';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/components/ui/tooltip"
import { Home, Mail, Zap, Download } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useRouter } from 'next/navigation'

export default function LeftSidebar() {
  const Router = useRouter()
  return (
    <div className="hidden md:flex w-48 border-r border-zinc-800 flex-col py-6 fixed h-screen">
      <div className="ml-28 mb-8">
        <div className="-translate-x-1 -translate-y-1 h-14 w-14 rounded-full bg-cg-2 opacity-20 absolute"></div>
        <Image
          src="/anas-profile-pic1.png"
          alt="Profile"
          width={48}
          height={48}
          className="rounded-full h-12 w-h-12 relative object-cover"
        />
      </div>
      <div className="mt-32">
        <TooltipProvider>
          <nav className="flex flex-col items-center space-y-6">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button onClick={() => Router.push("/")} variant="ghost" size="icon" className="text-gray-400 hover:text-white w-12 h-12 relative group">
                  <Home className="w-6 h-6" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-zinc-900/90 border-zinc-800">
                HOME
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button onClick={() => Router.push("/contact#email-me")} variant="ghost" size="icon" className="text-gray-400 hover:text-white w-12 h-12 relative group">
                  <Mail className="w-6 h-6" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-zinc-900/90 border-zinc-800">
                EMAIL
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button onClick={() => Router.push("/services")} variant="ghost" size="icon" className="text-gray-400 hover:text-white w-12 h-12 relative group">
                  <Zap className="w-6 h-6" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-zinc-900/90 border-zinc-800">
                SERVICES
              </TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white w-12 h-12 relative group">
                  <Download className="w-6 h-6" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" className="bg-zinc-900/90 border-zinc-800">
                DOWNLOAD
              </TooltipContent>
            </Tooltip>
          </nav>
        </TooltipProvider>
      </div>
    </div>

  )
}