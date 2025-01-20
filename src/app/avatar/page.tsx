import BorderedAvatar from "../components/avatar/bordered-avatar";
import DefaultAvatar from "../components/avatar/default-avatar";
import DotIndicatorAvatar from "../components/avatar/dot-indicator";
import PlaceholderIconAvatar from "../components/avatar/placeholder-icon-avatar";
import PlaceholderInitialsAvatar from "../components/avatar/placeholder-initials-avatar";
import StackedAvatar from "../components/avatar/stacked-avatar";
import TooltipAvatar from "../components/avatar/tooltip-avatar";

const AvatarConponentsPage = () => {
    return (
        <div className="w-full max-w-[1000px] flex flex-col justify-start items-center mb-[100px]">
            <title>Avatar</title>
            <h2 className="text-[3rem] mt-20">Avatar</h2>
            <h4 className="text-[1.25rem] mt-5 mb-10">"Avatar"는 일반적으로 사용자 프로필 사진이나 아이콘을 나타내는 요소를 말합니다. 웹 애플리케이션이나 사이트에서 Avatar는 보통 사용자의 신원을 시각적으로 나타내기 위해 사용되며, 동그란 이미지나 텍스트로 표현되는 경우가 많습니다.</h4>

            <DefaultAvatar/>
            <BorderedAvatar/>
            <PlaceholderIconAvatar/>
            <PlaceholderInitialsAvatar/>
            <TooltipAvatar/>
            <DotIndicatorAvatar/>
            <StackedAvatar/>
        </div>
    )
}

export default AvatarConponentsPage;