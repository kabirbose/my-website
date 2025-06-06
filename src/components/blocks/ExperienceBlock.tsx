import Image from "next/image";
import Link from "next/link";

interface ExperienceProps {
  src: string;
  alt: string;
}

export default function ExperienceBlock({ src, alt }: ExperienceProps) {
  return (
    <div className="flex justify-start items-center">
      <Image src={src} width={30} height={30} alt={alt} />
      <div className="p-3 flex justify-around items-center gap-10 w-[100%]">
        <div>
          <h1>CBC News</h1>
          <p>Network Engineer</p>
        </div>
        <Link href="/" className="text-2xl">
          🔗
        </Link>
      </div>
    </div>
  );
}
