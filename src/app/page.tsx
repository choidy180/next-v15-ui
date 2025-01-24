import MoveBtnComponent from "./components/move-btn";

export default function Home() {
    return (
        <div className="w-full max-w-[1024px] flex flex-col justify-start items-center">
            <title>UI</title>
            <div className="w-full flex justify-center items-center">
                <h1 className="w-full text-center text-[3rem] mt-20">Components</h1>
            </div>
            <div className="w-full flex flex-row flex-wrap justify-center gap-[14px] items-start mt-[40px] mb-[100px]">
                <MoveBtnComponent text="Accodion" link="/accodion"/>
                <MoveBtnComponent text="Alert" link="/alert"/>

                <MoveBtnComponent text="Avatar" link="/avatar"/>
                <MoveBtnComponent text="Badge" link="/badge"/>
                <MoveBtnComponent text="Banner" link="/banner"/>
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

            <div className="w-full flex justify-center items-center">
                <h1 className="w-full text-center text-[3rem] mt-20">Forms</h1>
            </div>

            <div className="w-full flex flex-row flex-wrap justify-center gap-[14px] items-start mt-[40px] mb-[100px]">
                <MoveBtnComponent text="Input Field" link="/"/>
                <MoveBtnComponent text="File Input" link="/"/>
                <MoveBtnComponent text="Search Input" link="/"/>
                <MoveBtnComponent text="Number Input" link="/"/>
                <MoveBtnComponent text="Phone Input" link="/"/>
                <MoveBtnComponent text="Select" link="/"/>
                <MoveBtnComponent text="Textarea" link="/"/>
                <MoveBtnComponent text="Timepicker" link="/"/>
                <MoveBtnComponent text="Checkbox" link="/"/>
                <MoveBtnComponent text="Radio" link="/"/>
                <MoveBtnComponent text="Toggle" link="/"/>
                <MoveBtnComponent text="Slider" link="/"/>
                <MoveBtnComponent text="Floating Label" link="/"/>
            </div>

            <div className="w-full flex justify-center items-center">
                <h1 className="w-full text-center text-[3rem] mt-20">Typography</h1>
            </div>

            <div className="w-full flex flex-row flex-wrap justify-center gap-[14px] items-start mt-[40px] mb-[100px]">
                <MoveBtnComponent text="Headings" link="/"/>
                <MoveBtnComponent text="Paragraphs" link="/"/>
                <MoveBtnComponent text="Blockquote" link="/"/>
                <MoveBtnComponent text="Images" link="/"/>
                <MoveBtnComponent text="Lists" link="/"/>
                <MoveBtnComponent text="Links" link="/"/>
                <MoveBtnComponent text="Text" link="/"/>
                <MoveBtnComponent text="HR" link="/"/>
            </div>

            <div className="w-full flex justify-center items-center">
                <h1 className="w-full text-center text-[3rem] mt-20">Plugins</h1>
            </div>

            <div className="w-full flex flex-row flex-wrap justify-center gap-[14px] items-start mt-[40px] mb-[100px]">
                <MoveBtnComponent text="Charts" link="/"/>
                <MoveBtnComponent text="Datatables" link="/"/>
                <MoveBtnComponent text="WYSIWYG Text Editor" link="/"/>
            </div>
        </div>
    );
}
