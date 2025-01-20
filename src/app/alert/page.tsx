import AdditionalContentAlerts from "../components/alert/additional-content-alerts";
import AlertsWithIcon from "../components/alert/alerts-with-icon";
import AlertsWithList from "../components/alert/alerts-with-list";
import BorderAccentAlerts from "../components/alert/border-accent-alerts";
import BorderedAlerts from "../components/alert/bordered-alerts";
import DefaultAlert from "../components/alert/default-alert";
import DismissingAlerts from "../components/alert/dismissing-alerts";

const AccodianConponentsPage = () => {
    return (
        <div className="w-full max-w-[1000px] flex flex-col justify-start items-center mb-[100px]">
            <title>Alert</title>
            <h2 className="text-[3rem] mt-20">Alert</h2>
            <h4 className="text-[1.25rem] mt-5 mb-10">alert는 JavaScript에서 제공하는 기본 함수 중 하나로, 사용자에게 메시지를 표시하는 데 사용됩니다. 주로 간단한 알림 창을 표시할 때 활용됩니다.</h4>
            <DefaultAlert/>
            <AlertsWithIcon/>
            <BorderedAlerts/>
            <AlertsWithList/>
            <DismissingAlerts/>
            <BorderAccentAlerts/>
            <AdditionalContentAlerts/>
        </div>
    )
}

export default AccodianConponentsPage;