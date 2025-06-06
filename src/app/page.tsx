import AboutMeSec from "@/components/sections/AboutMeSec";
import ExperienceSec from "@/components/sections/ExperienceSec";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-[50rem]">
        <AboutMeSec />
        <br />
        <ExperienceSec />
      </div>
    </div>
  );
}
