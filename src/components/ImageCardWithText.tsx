interface ImageCardWithTextProps {
    imageUrl: string;
    title: string;
    subtitle: string;
}
export const ImageCardWithText = ({imageUrl, title, subtitle}:ImageCardWithTextProps) => {
    return (
        <div className={"lg:w-[400px] lg:h-[582px] w-[250px] h-[497px] rounded-3xl border-1"}>
            <div className={"w-full h-2/3"}>
                <img src={imageUrl} className={"w-full h-full rounded-t-3xl object-cover object-top"} alt="Founder"/>
            </div>
            <div className={"w-full h-1/3"}>
                <div className={"p-4 flex flex-col gap-2"}>
                    <h2 className={"text-[#0F4C81] font-semibold"}>{title}</h2>
                    <p className={"text-sm"}>{subtitle}</p>
                </div>
            </div>
        </div>
    )
}