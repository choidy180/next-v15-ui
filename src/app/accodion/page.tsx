import BorderlessAccodian from "../components/accodion/borderless-accodion";
import DefaultAccodian from "../components/accodion/default-accodion";

const AccodianConponentsPage = () => {
    return (
        <div className="w-full max-w-[1000px] flex flex-col justify-start items-center">
            <title>Accodion</title>
            <h2 className="text-[3rem] mt-20">Accodion</h2>
            <DefaultAccodian/>
            <BorderlessAccodian/>
        </div>
    )
}

export default AccodianConponentsPage;