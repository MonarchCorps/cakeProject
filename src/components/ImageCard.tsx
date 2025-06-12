import type {CakeCatalogueConstantsType} from "@/utils/constants/cakeCatalogueConstants.ts";

export const ImageCard = ({image1, title, photography, image2, flavours, venue}:CakeCatalogueConstantsType) => {
    return (
        <div className={"w-[450px] h-[700px] rounded-3xl border-1"}>
            <div className={"w-full h-[75%] relative"}>
                <img src={image1} className={"w-full  h-full rounded-t-3xl object-cover object-top"} alt="Founder"/>
                {image2 &&
                    <div>
                    <img src={image2}
                         className={"absolute border border-white bottom-1 right-1 h-[220px] w-[167px]  object-cover object-top"}
                         alt="Founder"/>
                </div>
                }
            </div>
            <div className={"w-full h-[25%]"}>
                <div className={"p-4 flex flex-col gap-2"}>
                    <h2 className={"text-[#0F4C81] text-lg font-semibold"}>{title}</h2>
                    <div className={"flex flex-col gap-2"}>
                        <div className={"flex gap-2"}>
                            <h4 className={"font-semibold text-[#E04F85]"}>Flavours:</h4>
                            <div className={"font-semibold text-[#E04F85]"}>
                                {
                                    flavours.map((flavour, index) => {
                                        return (
                                            <span key={`${flavour}`} className={"text-base font-normal text-[#E04F85]"}>{`${flavour} ${(flavours.length - 1) !== index ? " | " : ""}`}</span>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className={"flex gap-2"}>
                            <h2 className={"font-semibold text-[#E04F85]"}>Photography:</h2>
                            <span className={"text-base font-normal text-[#E04F85]"}>
                                {photography}
                            </span>
                        </div>
                        <div className={"flex gap-2"}>
                            <h2 className={"font-semibold text-[#E04F85]"}>Venue:</h2>
                            <span className={"text-base font-normal text-[#E04F85]"}>
                                 {venue}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}