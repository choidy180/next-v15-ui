import Link from "next/link";

interface BtnProps {
    text:string;
    link:string;
}

const MoveBtnComponent = (prop:BtnProps) => {
    return (
        <Link href={`${prop.link}`} className="w-full max-w-[300px] p-[8px] border-[2px] border-solid border-blue-700 bg-blue-100 rounded-[8px] cursor-pointer hover:bg-blue-300 transition-all">
            <p className="w-full text-center">{prop.text}</p>
        </Link>
    )
};

export default MoveBtnComponent;