import AboutMeSec from "@/components/sections/AboutMeSec";
import ExperienceSec from "@/components/sections/ExperienceSec";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col p-10">
      <div>
        <AboutMeSec />
        <br />
        <ExperienceSec />
      </div>
    </div>
  );
}
