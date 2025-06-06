import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className="w-[50rem] font-mono">
        <AboutMe />
      </div>
    </div>
  );
}
