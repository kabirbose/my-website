import Image from "next/image";

export default function AboutMeSec() {
  return (
    <div className="flex flex-col gap-3 justify-start items-start">
      <Image
        src="/puggy-and-me.png"
        alt="Puggy and Me"
        height={200}
        width={200}
        className="w-[100%] md:w-[20rem]"
      />
      <div>
        <h1 className="text-4xl font-semibold">Kabir Bose</h1>
        <h2>Networking & IT @ Ontario Tech</h2>
      </div>

      <div className="text-zinc-300 flex flex-col gap-2 justify-start items-start">
        <p>Hi! I'm a university student specializing in computer networking.</p>
        <p>I enjoy low-level programming, automation, and network design.</p>
      </div>
    </div>
  );
}
