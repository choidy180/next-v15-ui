import BorderedBadge from "../components/badge/bordered-badge";
import ButtonWithBadge from "../components/badge/button-with-badge";
import ChipsDismissibleBadge from "../components/badge/chips-dismissible-badges";
import DefaultBadge from "../components/badge/default-badge";
import IconWithBadge from "../components/badge/icon-with-badge";
import NotificationBadge from "../components/badge/notification-badge";
import PillsBadge from "../components/badge/pills-badge";

const BadgeComponentsPage = () => {
    return (
        <div className="w-full max-w-[1000px] flex flex-col justify-start items-center mb-[100px]">
            <title>Badge</title>
            <h2 className="text-[3rem] mt-20">Badge</h2>
            <h4 className="text-[1.25rem] mt-5 mb-10">Badge는 사용자 인터페이스에서 주로 작은 시각적 표시로 사용되며, 추가 정보나 상태를 전달합니다. Badge는 상황에 따라 정보 전달, 상태 표시, 성과 표현 등의 용도로 사용됩니다.</h4>

            <DefaultBadge/>
            <BorderedBadge/>
            <PillsBadge/>
            <IconWithBadge/>
            <NotificationBadge/>
            <ButtonWithBadge/>
            <ChipsDismissibleBadge/>
        </div>
    )
}

export default BadgeComponentsPage;