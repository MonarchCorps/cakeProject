interface ImageCardWithTextProps {
    imageUrl: string;
    title: string;
    subtitle: string;
}
export const ImageCardWithText = ({imageUrl, title, subtitle}:ImageCardWithTextProps) => {
    return (
        <div className={"w-[400px] h-[582px] rounded-3xl border-1"}>
            <div className={"w-full h-2/3"}>
                <img src={imageUrl} className={"w-full h-full rounded-t-3xl object-cover object-top"} alt="Founder"/>
            </div>
            <div className={"w-full h-1/3"}>
                <div className={"p-4 flex flex-col gap-2"}>
                    <h2 className={"text-[#0F4C81] font-semibold"}>{title}</h2>
                    <p>{subtitle}</p>
                </div>
            </div>
        </div>
    )
}