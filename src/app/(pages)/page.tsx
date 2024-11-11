import { Mail, Phone} from 'lucide-react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/card";
import Header from "@/components/layout/header";
import Footer from '@/components/layout/footer';
import HyperText from "@/components/ui/hyper-text";
import SocialAppsMarquee from '@/components/homePageComponents/socialAppLogo-marquee';
import Stats from '@/components/homePageComponents/stats';


export default function Component() {
  return (
    <div className="flex-1 md:ml-40 lg:mr-40 ">
      <Header />
      
      <div className=" max-w-3xl mx-auto px-4 md:px-8 py-8 md:py-12">
        <div className="mb-16">
          <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
            <Image
              src="/anas-profile-pic.png"
              alt="Profile"
              width={500}
              height={500}
              className="rounded-lg w-24 h-24 md:w-72 md:h-60"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-bold mb-2">👋 Hello I Am</h1>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Anas Ahmed</h2>
              <p className="text-gray-400 max-w-2xl">
                Experienced Frontend Developer from Karachi, Pakistan, with a passion for creating seamless digital experiences and a focus on user needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Button variant="secondary" className="gap-2">
                  <Mail className="w-4 h-4" /><HyperText className='text-white text-xl' duration={150} text='EMAIL ME'/>
                </Button>
                <Button variant="secondary" className="gap-2">
                  <Phone className="w-4 h-4" /><HyperText className='text-white text-xl' duration={150} text='SHEDULE CALL'/>
                </Button>
              </div>
            </div>
          </div>
          <SocialAppsMarquee/>
          <Stats/>
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
  )
}




