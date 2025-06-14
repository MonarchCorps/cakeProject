import {ImageCover} from "@/components/ImageCover.tsx";
import CelebrationCakeBackDropImage from "@/assets/images/CelebrationCakeBackDropImage.jpg";
import PinkCakeIcon from "@/assets/images/PinkCakeIcon.png";
import {HeaderText} from "@/components/HeaderText.tsx";
import Subtract from "@/assets/images/Subtract (2).png";
import Subtract1 from "@/assets/images/Subtract (3).png";
import {Button} from "@/components/ui/button.tsx";
import {ArrowLeft, ArrowRight, ArrowRightIcon} from "lucide-react";
import {standardFlavours, standardFlavoursPrice} from "@/utils/constants/standardFlavours.ts";
import CuteCouple from "@/assets/images/CuteCouple.png";

export const CelebrationCakePage = ()=>{
    return (
            <div>
                <ImageCover objectPosition={"object-[center_25%]"} title={"Celebration Cakes"}
                            subtitle={"At Hegai Cakes, we specialize in custom Celebration Cakes that match your theme, style, and taste."}
                            buttonText={"Order Now"}
                            imageUrl={CelebrationCakeBackDropImage}
                />
                <div className={"py-8 px-30 h-[900px] "}>
                    <HeaderText heading={"Our Custom Celebration Cakes"}
                                subheading={"Every milestone is worth celebrating with a cake that’s as exciting as the occasion!"}
                    />
                    <div className={"flex py-8 justify-around items-center"}>
                        <div className={"relative"}>
                            <div className={"relative"}>
                                <img src={Subtract} className={"h-[512.7px] z-2 w-[419.4px]"} alt=""/>
                            </div>
                            <div>
                                <img src={Subtract1} className={"h-[512.7px] absolute bottom-70 left-50 translate-y-full z-3 w-[419.4px]"} alt=""/>
                            </div>
                        </div>
                        <div>
                            <h1 className={"text-[#0F4C81] font-semibold"}>Features</h1>
                            <ol className={"flex flex-col gap-3 py-5 text-[#0F4C81]"}>
                                <li>
                                    Tailored designs for birthdays, anniversaries, corporate events, and more.
                                </li>
                                <li>
                                    Endless flavour options and artistic decorations to suit your theme
                                </li>
                                <li>
                                    Freshly baked using premium ingredients to ensure every slice is a delight.
                                </li>
                            </ol>
                            <Button className={"bg-[#0F4C81] w-[50%] py-[1.4rem] px-[1.4rem] rounded-4xl"}>
                                {"Order your Bespoke Cake"}
                                <ArrowRightIcon className={"w-[32px] h-[32px]}"}/>
                            </Button>
                        </div>
                    </div>
                </div>
                <div className={"py-8 px-30 bg-[#F7CAC9]"}>
                    <HeaderText heading={"Our Standard Flavours"}
                                subheading={"Delicious classics to make every celebration memorable.."}
                    />
                    <div className={"flex flex-col gap-8 pl-40 py-8 w-full items-center "}>
                        <div className={"grid grid-cols-3 gap-8 py-5 w-full"}>
                            {
                                standardFlavours.map((flavour) => {
                                    return (
                                        <div key={flavour.name} className={"flex gap-2"}>
                                            <img src={PinkCakeIcon} alt="PinkCakeIcon" className={"h-5 w-5"}/>
                                            <div className={"text-sm"}>{flavour.name}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <h1 className={"text-2xl text-center text-[#E04F85]"}>Pricing starts from...</h1>
                        <div className={"grid grid-cols-3 gap-8 py-5 w-full"}>
                            {
                                standardFlavoursPrice.map((flavour, index) => {
                                    return (
                                        <div key={`${flavour.size}-${index}`} className={"flex gap-2"}>
                                            <img src={PinkCakeIcon} alt="PinkCakeIcon" className={"h-5 w-5"}/>
                                            <div className={"text-sm"}>{flavour.size}</div>
                                            <div className={"text-sm"}>{flavour.price}</div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                    <div className={"py-12 gap-8 justify-between items-center flex flex-col"}>
                        <HeaderText
                            heading={"Custom Cake Carousel"}
                            subheading={"Swipe through a world of possibilities, and let’s design your perfect cake together"}
                            className={"text-[#0F4C81]"}
                        />
                        <div className={"flex items-center justify-center gap-2 overflow-hidden"}>
                            <img src={CuteCouple} alt={"CuteCouple"} className={"w-[250px] h-[275px]"} />
                            <img src={CuteCouple} alt={"CuteCouple"} className={"w-[250px] h-[275px]"} />
                            <img src={CuteCouple} alt={"CuteCouple"} className={"w-[250px] h-[275px]"} />
                            <img src={CuteCouple} alt={"CuteCouple"} className={"w-[250px] h-[275px]"} />
                            <img src={CuteCouple} alt={"CuteCouple"} className={"w-[250px] h-[275px]"} />
                            <img src={CuteCouple} alt={"CuteCouple"} className={"w-[250px] h-[275px]"} />
                        </div>
                        <div className={"flex items-center  justify-center gap-2"}>
                            <Button className="bg-[#0F4C81] h-8 w-8 rounded-full text-white hidden lg:flex">
                                <ArrowLeft className="w-4 h-4 " />
                            </Button>
                            <div className={"flex items-center justify-center gap-2"}>
                                <span className={" bg-[#0F4C81] h-1.5 w-1.5 rounded-full"}/>
                                <span className={" bg-[#f2f2f2] h-1.5 w-1.5 rounded-full"}/>
                                <span className={" bg-[#f2f2f2] h-1.5 w-1.5 rounded-full"}/>
                                <span className={" bg-[#f2f2f2] h-1.5 w-1.5 rounded-full"}/>
                            </div>
                            <Button className="bg-[#0F4C81] h-8 w-8 rounded-full text-white hidden lg:flex">
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </div>
                </div>
            </div>
    )
}