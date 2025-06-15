interface HeaderTextProps {
    heading?: string,
    subheading?: string,
    className?: string,
    className1?: string,
}
export const HeaderText = ({heading, subheading, className, className1}:HeaderTextProps) => {
    return (
        <div className="text-center items-center justify-center flex-col gap-1 flex ">
            <h3 className={`text - lg font-swash text-3xl capitalize font-semibold w-fit mx-auto text-[${className1}]`}>
                {heading ?? "Taster Boxes Features"}
                <span className={`block h-0.5 w-12 mx-auto mt-1 rounded-full ${className1 ? `bg-[${className1}]` : "bg-primary"}`}/>
            </h3>
            <span className={`w-full px-5 sm:w-[700px] ${className ?? "text-[#0F4C81]"}`}>
                {subheading ?? "The perfect bite sized indulgence"}
            </span>
        </div>
    )
}