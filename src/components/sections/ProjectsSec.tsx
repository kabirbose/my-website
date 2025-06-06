import ProjectsBlock from "../blocks/ProjectsBlock";

export default function ProjectsSec() {
  return (
    <div>
      <h1 className="font-semibold text-2xl text-zinc-300">Projects</h1>
      <ProjectsBlock
        project="Packet Tracer Labs"
        src="/packet-tracer.webp"
        alt="Cisco Packet Tracer"
        href="/"
      />
      <ProjectsBlock
        project="AVD Automation-Day 1"
        src="/arista-logo.png"
        alt="Arista Logo"
        href="/"
      />
      <ProjectsBlock
        project="AVD Automation-Day 2"
        src="/arista-logo.png"
        alt="Arista Logo"
        href="/"
      />
      <ProjectsBlock
        project="Arch Linux Setup"
        src="/arch-linux-logo.png"
        alt="Arch Linux Logo"
        href="/"
      />
    </div>
  );
}
