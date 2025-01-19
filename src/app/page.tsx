import MoveBtnComponent from "./components/move-btn";

export default function Home() {
    return (
        <div className="w-full max-w-[1024px] flex flex-col justify-start items-center">
            <div className="w-full flex justify-center items-center">
                <h1 className="w-full text-center text-[3rem] mt-20">UI-Component</h1>

            </div>
            <div className="w-full flex flex-col justify-start items-start mt-[40px]">
                <MoveBtnComponent text="Accodion" link="/accodion"/>
            </div>
        </div>
    );
}
