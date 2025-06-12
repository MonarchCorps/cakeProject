interface HeaderTextProps {
    heading?: string,
    subheading?: string,
    className?: string,
    className1?: string,
}
export const HeaderText = ({heading, subheading, className, className1}:HeaderTextProps) => {
    return (
        <div className="text-center items-center justify-center flex-col gap-1 flex ">
            <h3 className={`text - lg capitalize font-semibold w-fit mx-auto ${className1}`}>
                {heading ?? "Taster Boxes Features"}
                <span className={`block h-0.5 w-12 bg-primary mx-auto mt-1 rounded-full ${className1}`} />
            </h3>
            <span className={`w-[700px] ${className ?? "text-[#0F4C81]"}`}>
                {subheading ?? "The perfect bite sized indulgence"}
            </span>
        </div>
    )
}