import AboutMeSec from "@/components/sections/AboutMeSec";
import ExperienceSec from "@/components/sections/ExperienceSec";
import ProjectsSec from "@/components/sections/ProjectsSec";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col p-10">
      <div>
        <AboutMeSec />
        <br />
        <ExperienceSec />
        <br />
        <ProjectsSec />
      </div>
    </div>
  );
}
