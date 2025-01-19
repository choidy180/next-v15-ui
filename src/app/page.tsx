import MoveBtnComponent from "./components/move-btn";

export default function Home() {
    return (
        <div className="w-full max-w-[1024px] flex flex-col justify-start items-center">
            <div className="w-full flex justify-center items-center">
                <h1 className="w-full text-center text-[3rem] mt-20">UI-Component</h1>

            </div>
            <div className="w-full flex flex-row flex-wrap justify-center gap-[14px] items-start mt-[40px]">
                <MoveBtnComponent text="Accodion" link="/accodion"/>
                <MoveBtnComponent text="Alert" link="/alert"/>

                <MoveBtnComponent text="Avatar" link="/"/>
                <MoveBtnComponent text="Badge" link="/"/>
                <MoveBtnComponent text="Banner" link="/"/>
                <MoveBtnComponent text="Bottom Navigation" link="/"/>
                <MoveBtnComponent text="Breadcrumbs" link="/"/>
                <MoveBtnComponent text="Buttons" link="/"/>
                <MoveBtnComponent text="Button Group" link="/"/>
                <MoveBtnComponent text="Card" link="/"/>
                <MoveBtnComponent text="Carousel" link="/"/>
                <MoveBtnComponent text="Chat Bubble" link="/"/>
                <MoveBtnComponent text="Clipboard" link="/"/>
                <MoveBtnComponent text="Datepicker" link="/"/>
                <MoveBtnComponent text="Device Mockups" link="/"/>
                <MoveBtnComponent text="Drawer" link="/"/>
                <MoveBtnComponent text="Dropdowns" link="/"/>
                <MoveBtnComponent text="Footer" link="/"/>
                <MoveBtnComponent text="Forms" link="/"/>
                <MoveBtnComponent text="Gallery" link="/"/>
                <MoveBtnComponent text="Indicators" link="/"/>
                <MoveBtnComponent text="Jumbotron" link="/"/>
                <MoveBtnComponent text="KBD" link="/"/>
                <MoveBtnComponent text="List Group" link="/"/>
                <MoveBtnComponent text="Mega Menu" link="/"/>
                <MoveBtnComponent text="Modal" link="/"/>
                <MoveBtnComponent text="Navbar" link="/"/>
                <MoveBtnComponent text="Pagination" link="/"/>
                <MoveBtnComponent text="Popover" link="/"/>
                <MoveBtnComponent text="Progress" link="/"/>
                <MoveBtnComponent text="Rating" link="/"/>
                <MoveBtnComponent text="Sidebar" link="/"/>
                <MoveBtnComponent text="Skeleton" link="/"/>
                <MoveBtnComponent text="Speed Dial" link="/"/>
                <MoveBtnComponent text="Spinner" link="/"/>
                <MoveBtnComponent text="Stepper" link="/"/>
                <MoveBtnComponent text="Table" link="/"/>
                <MoveBtnComponent text="Tabs" link="/"/>
                <MoveBtnComponent text="Timeline" link="/"/>
                <MoveBtnComponent text="Toast" link="/"/>
                <MoveBtnComponent text="Tooltip" link="/"/>
                <MoveBtnComponent text="Video" link="/"/>
            </div>
        </div>
    );
}
