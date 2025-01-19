import BorderlessAccodian from "../components/accodion/borderless-accodion";
import DefaultAccodian from "../components/accodion/default-accodion";

const AccodianConponentsPage = () => {
    return (
        <div className="w-full max-w-[1000px] flex flex-col justify-start items-center">
            <title>Accodion</title>
            <h2 className="text-[3rem] mt-20">Accodion</h2>
            <h4 className="text-[1.25rem] mt-5 mb-10">아코디언은 웹사이트나 애플리케이션의 사용자 인터페이스 요소로, 접었다 펼칠 수 있는 메뉴나 섹션을 의미합니다. 사용자가 한 번에 하나의 섹션만 볼 수 있도록 설계되어, 화면 공간을 효율적으로 사용하고 깔끔한 디자인을 제공합니다.</h4>
            <DefaultAccodian/>
            <BorderlessAccodian/>
        </div>
    )
}

export default AccodianConponentsPage;