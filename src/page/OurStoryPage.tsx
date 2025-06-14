import OurStoryBackDropImage from "../assets/images/OurStoryBackDropImage.jpg"
import Founder from "../assets/images/Founder.jpg"
import CuteCouple from "../assets/images/CuteCouple.png"
import CakeIcing from "../assets/images/CakeIcing.jpg"
import {ImageCover} from "@/components/ImageCover.tsx";
import {ImageCardWithText} from "@/components/ImageCardWithText.tsx";
export const OurStoryPage = () => {
    return (
            <div className={"overflow-x-hidden"}>
                <ImageCover objectPosition={"object-[center_30%]"}
                            imageUrl={OurStoryBackDropImage}
                            title={"The Hegai Cakes Story"}
                />
                <div className={"bg-[#A7C7E7] z-20 w-full py-8"}>
                    <div className={"flex flex-col h-full justify-around items-center md:flex-row w-full"}>
                        <div className={"w-[300px] h-[400px] md:w-[400px] md:h-[582px]"}>
                        <img src={Founder} className={"w-full h-full object-cover object-top"} alt={"Founder"} />
                        </div>
                        <div className={"flex flex-col items-center p-8 gap-5 w-[350px] lg:w-[654px]"}>
                        <p className={"capitalize font-bold text-center lg:text-left text-2xl text-[#0F4C81]"}>How the Founder got here</p>
                            <p className={"font-[500] text-white text-center md:text-left text-sm lg:text-xl leading-tight"}>
                                Studying to become a Chemical Engineer meant that processes were part and parcel of how I viewed things.
                                On the flip side, being a major sweet tooth with a natural flair for working with my hands, I landed at the
                                Skills Fair hosted by the Blaze Student Society at The University of Manchester. Fast-forward to today, in Year 10 since the conception of Hegai Cakes,
                                I love exciting the tastebuds of my clients through a well of flavours,
                                not without feeding their eyes with designs that live on. Best part of it all - we’re just getting started! Strap up!
                            </p>
                            <span className={"font-normal self-end text-[#E04F85] text-sm leading-tight"}>- Olaoyin</span>
                        </div>
                    </div>
                </div>
                <div className={"h-full py-20 z-20 w-full"}>
                    <div className={"flex flex-col gap-8 md:flex-row h-full md:justify-around items-center w-full"}>
                      <ImageCardWithText title={"Our Mission"}
                                         subtitle={"To deliver unforgettable cake products and services to each customer, " +
                                             "leaning on our pillars of Premium Quality and Excellent Customer Service."}
                                         imageUrl={CakeIcing}
                      />
                        <ImageCardWithText title={"Our Vision"}
                                         subtitle={"To become a household name in the UK, known for the finest luxury cakes in taste, design and services."}
                                         imageUrl={CuteCouple}
                      />
                    </div>
                </div>
            </div>

    )
}