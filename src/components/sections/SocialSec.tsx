import Link from "next/link";

export default function SocialSec() {
  return (
    <div>
      <div className="flex justify-between items-start gap-5 border-[1px] border-zinc-800 p-2 text-zinc-300">
        <Link href="/">GitHub</Link>
        <Link href="/">LinkedIn</Link>
        <Link href="/">Resume</Link>
      </div>
    </div>
  );
}
