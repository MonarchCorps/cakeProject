import { ImageCover } from "@/components/ImageCover.tsx";
import WeddingCakeBackDropImage from "../assets/images/WeddingCakeBackDropImage.png"
import { HeaderText } from "@/components/HeaderText.tsx";
import { Button } from "@/components/ui/button.tsx";
import { ArrowRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { RouteConstants } from "@/utils/constants/RouteConstants.ts";


export const WeddingCakePage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <ImageCover objectPosition={"object-center"} title={"Wedding Cakes"}
                subtitle={"Our Wedding Cakes are designed to reflect your unique love story, blending stunning artistry with mouthwatering flavours."}
                buttonText={"Book a Consultation"}
                imageUrl={WeddingCakeBackDropImage}
            />
            <div className={"py-8 px-5 lg:px-30 "}>
                <HeaderText heading={"Exquisite designs, unforgettable taste"}
                    subheading={"Whether your dream is a classic tiered beauty, a floral fantasy, or a bold modern statement, we design cakes that leave a lasting impression."}
                />
                <div className={"flex py-8 justify-around items-center"}>
                    {/*<div className={"relative"}>*/}
                    {/*    <div className={"relative"}>*/}
                    {/*        <img src={Subtract} className={"h-[512.7px] z-2 w-[419.4px]"} alt=""/>*/}
                    {/*        <img src={Cute} className={"absolute top-0 left-0 w-fit h-16  z-2 "} alt=""/>*/}
                    {/*    </div>*/}
                    {/*    <div>*/}
                    {/*        <img src={Subtract1} className={"h-[512.7px] absolute bottom-70 left-50 translate-y-full z-3 w-[419.4px]"} alt=""/>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div>
                        <h1 className={"text-[#0F4C81] font-semibold"}>Features</h1>
                        <ol className={"flex flex-col gap-3 py-5 text-[#0F4C81]"}>
                            <li>
                                Fully customized designs based on your preferences
                            </li>
                            <li>
                                A wide range of flavours, fillings, and decorations
                            </li>
                            <li>
                                Made with the finest ingredients for a truly indulgent experience
                            </li>
                        </ol>
                        <Button onClick={() => navigate(RouteConstants.dashboard.wedding.catalogue.path)} className={"bg-[#0F4C81] w-2/5 py-[1.4rem] rounded-4xl"}>
                            {"View Catalogue"}
                            <ArrowRightIcon className={"w-[32px] h-[32px]}"} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}