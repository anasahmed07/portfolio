'use client'

import { useState, useEffect } from 'react'
import { Home, Mail, Phone, Settings, Download, Menu, Instagram, Twitter, Github } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/card"
import Image from "next/image"
import Header from "@/components/layout/header";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import Footer from '@/components/layout/footer'

export default function Component() {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-cd-02 text-white flex">
      {/* Left Sidebar - Visible on tablet and desktop */}
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

      {/* Main Content */}
      <div className="flex-1 md:ml-40 lg:mr-40">
        {/* Mobile Header - Only visible on mobile */}
        <Header />
        {/* Content Area */}
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12">
          {/* Hero Section */}
          <div className="mb-16">
            <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
              <Image
                src="/anas-profile-pic.png"
                alt="Profile"
                width={120}
                height={120}
                className="rounded-lg w-24 h-24 md:w-32 md:h-32"
              />
              <div>
                <h1 className="text-xl md:text-2xl font-bold mb-2">👋 Hello I Am</h1>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Anas Ahmed</h2>
                <p className="text-gray-400 max-w-2xl">
                  Experienced Frontend Developer from Karachi, Pakistan, with a passion for creating seamless digital experiences and a focus on user needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button variant="outline" className="gap-2">
                    <Mail className="w-4 h-4" />
                    EMAIL ME
                  </Button>
                  <Button variant="outline" className="gap-2">
                    <Phone className="w-4 h-4" />
                    SCHEDULE CALL
                  </Button>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4 md:gap-6 mt-8 border-t border-zinc-800 pt-8">
              <a href="#" className="text-gray-400 hover:text-white">TikTok</a>
              <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white">Youtube</a>
              <a href="#" className="text-gray-400 hover:text-white">Dribbble</a>
              <a href="#" className="text-gray-400 hover:text-white">Behance</a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              <Card className="text-center p-4">
                <div className="text-xl font-bold">25+</div>
                <div className="text-sm text-gray-400">Happy Clients</div>
              </Card>
              <Card className="text-center p-4">
                <div className="text-xl font-bold">4+</div>
                <div className="text-sm text-gray-400">Years of Experience</div>
              </Card>
              <Card className="text-center p-4">
                <div className="text-xl font-bold">25+</div>
                <div className="text-sm text-gray-400">Completed Projects</div>
              </Card>
              <Card className="text-center p-4">
                <div className="text-xl font-bold">4+</div>
                <div className="text-sm text-gray-400">Awards Received</div>
              </Card>
            </div>
          </div>

          {/* Experience Section */}
          <section className="mb-16">
            <h2 className="text-xl font-bold mb-6">💼 My Experience</h2>
            <p className="text-gray-400 mb-8">Adapting to different situations with skill to provide complete solutions.</p>
            <div className="space-y-6">
              <Card className="p-4 md:p-6">
                <div className="flex items-start gap-4">
                  <Image
                    src="/placeholder.svg"
                    alt="Upwork"
                    width={40}
                    height={40}
                    className="rounded"
                  />
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                      <div>
                        <h3 className="font-bold">Product Designer</h3>
                        <p className="text-sm text-gray-400">Upwork</p>
                      </div>
                      <span className="text-sm text-gray-400 mt-2 sm:mt-0">2023 - Present</span>
                    </div>
                    <p className="text-sm text-gray-400 mt-2">
                      Led product design projects, developed design strategies, and ensured alignment with business goals to create market-leading products.
                    </p>
                  </div>
                </div>
              </Card>
              {/* Additional experience cards... */}
            </div>
          </section>

          {/* Services Section */}
          <section className="mb-16">
            <h2 className="text-xl font-bold mb-6">💡 My Services</h2>
            <p className="text-gray-400 mb-8">Formulating comprehensive strategies to meet your design goals and exceed expectations.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="font-bold mb-2">Web Design</h3>
                <p className="text-sm text-gray-400">
                  Designing visually pleasing and user-centric websites for optimal online success.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold mb-2">Mobile Design</h3>
                <p className="text-sm text-gray-400">
                  Creating intuitive UI/UX and user-focused mobile designs for seamless digital experiences.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold mb-2">Prototyping</h3>
                <p className="text-sm text-gray-400">
                  Building interactive prototypes for seamless design-to-development transitions.
                </p>
              </Card>
              <Card className="p-6">
                <h3 className="font-bold mb-2">Animation</h3>
                <p className="text-sm text-gray-400">
                  Creating dynamic, engaging animations that bring digital experiences to life.
                </p>
              </Card>
            </div>
          </section>

          {/* Footer */}
          <Footer/>
        </div>
      </div>
      {/* Right Sidebar - Only visible on desktop */}
      <div className="hidden lg:flex w-40 border-l border-zinc-800 flex-col items-center py-6 fixed right-0 h-screen">
        <TooltipProvider>
          <nav className="flex flex-col items-center space-y-6">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white w-12 h-12 relative group">
                  <Settings className="w-6 h-6" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="left" className="bg-zinc-900/90 border-zinc-800">
                SETTINGS
              </TooltipContent>
            </Tooltip>
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
      </div>
    </div>
  )
}