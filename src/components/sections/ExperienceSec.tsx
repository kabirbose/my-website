import ExperienceBlock from "../blocks/ExperienceBlock";

export default function ExperienceSec() {
  return (
    <div>
      <h1 className="font-semibold text-2xl text-zinc-300">Experience</h1>
      <ExperienceBlock
        src={"/cbc-logo.png"}
        alt={"CBC Logo"}
        company="CBC News"
        role="Network Engineer"
        href="/"
      />
      <ExperienceBlock
        src={"/otu-logo.webp"}
        alt={"Ontario Tech Logo"}
        company="Ontario Tech"
        role="Bachelor of IT"
        href="/"
      />
    </div>
  );
}
