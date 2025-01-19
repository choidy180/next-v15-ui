import Link from "next/link";

export default function Navigation() {
    return (
        <Link href={`/`} className="fixed left-0 top-0 py-[14px] px-[20px] text-[1.5rem] cursor-pointer">HOME</Link>
    )
}