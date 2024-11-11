import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {Instagram, Twitter, Github } from 'lucide-react'
import { Button } from "@/components/ui/button"


export default function RightSidebar() {
    return (
        < div className = "hidden lg:flex w-48 border-l border-zinc-800 flex-col items-center py-6 fixed right-0 h-screen" >
            <TooltipProvider>
                <nav className="mt-56 flex flex-col items-center space-y-6">
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white w-12 h-12 relative group">
                                <Instagram className="w-6 h-6" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="left" className="bg-zinc-900/90 border-zinc-800">
                            INSTAGRAM
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white w-12 h-12 relative group">
                                <Twitter className="w-6 h-6" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="left" className="bg-zinc-900/90 border-zinc-800">
                            TWITTER
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white w-12 h-12 relative group">
                                <Github className="w-6 h-6" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="left" className="bg-zinc-900/90 border-zinc-800">
                            GITHUB
                        </TooltipContent>
                    </Tooltip>
                </nav>
            </TooltipProvider>
        </div >
    )
}