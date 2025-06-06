import Image from "next/image";
import Link from "next/link";

interface Props {
  src: string;
  alt: string;
  company: string;
  role: string;
  href?: string;
}

export default function ExperienceBlock({
  src,
  alt,
  company,
  role,
  href,
}: Props) {
  return (
    <div className="flex justify-between items-center w-[100%] py-2">
      <div className="flex justify-center items-center gap-3">
        <Image src={src} width={30} height={30} alt={alt} />
        <div>
          <h1>{company}</h1>
          <p className="text-zinc-300">{role}</p>
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
