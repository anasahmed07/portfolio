import Marquee from "@/components/ui/marquee";
import Image from "next/image";

export default function SocialAppsMarquee(){
    const brandImages = [
        "/app-logos/discord.png",
        "/app-logos/dribble.png",
        "/app-logos/facebook.png",
        "/app-logos/pinterest.png",
        "/app-logos/snap.png",
        "/app-logos/spotify.png",
        "/app-logos/ticktock.png",
        "/app-logos/twitter.png",
        "/app-logos/youtube.png",
      ]
    return(
        <div className=" pt-8">
        <Marquee className="[--duration:40s]">
            {brandImages.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt="Brand"
                width={100}
                height={40}
                className="mx-2"
              />
            ))}
        </Marquee>
        </div>
    )
}