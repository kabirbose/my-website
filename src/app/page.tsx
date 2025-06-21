import AboutMeSec from "@/components/sections/AboutMeSec";
import ExperienceSec from "@/components/sections/ExperienceSec";
import ProjectsSec from "@/components/sections/ProjectsSec";
import SocialSec from "@/components/sections/SocialSec";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col p-10 md:px-32 md:py-20">
      <div>
        <AboutMeSec />
        <br />
        <ExperienceSec />
        <br />
        <ProjectsSec />
        <br />
        <SocialSec />
      </div>
    </div>
  );
}
