import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Home, Mail, Phone, Download} from 'lucide-react'
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function LeftSidebar(){
    return(
      <div className="hidden md:flex w-40 border-r border-zinc-800 flex-col items-center py-6 fixed h-screen">
      <div className="mb-8">
        <Image
          src="/anas-profile-pic.png"
          alt="Profile"
          width={48}
          height={48}
          className="rounded-full"
        />
      </div>
      <TooltipProvider>
        <nav className="flex flex-col items-center space-y-6">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white w-12 h-12 relative group">
                <Home className="w-6 h-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" className="bg-zinc-900/90 border-zinc-800">
              HOME
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white w-12 h-12 relative group">
                <Mail className="w-6 h-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" className="bg-zinc-900/90 border-zinc-800">
              EMAIL
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white w-12 h-12 relative group">
                <Phone className="w-6 h-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right" className="bg-zinc-900/90 border-zinc-800">
              PHONE
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

    )
}