import Image from "next/image";
import Link from "next/link";

interface Props {
  src: string;
  alt: string;
  project: string;
  href?: string;
}

export default function ProjectsBlock({ src, alt, project, href }: Props) {
  return (
    <div className="flex justify-between items-center w-[100%] py-2">
      <div className="flex justify-center items-center gap-3">
        <Image src={src} width={30} height={30} alt={alt} />
        <div>
          <h1>{project}</h1>
        </div>
      </div>
      {href ? (
        <Link href={href} className="text-zinc-300">
          {">"}
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}
