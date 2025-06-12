import HomeBackDrop from "../assets/images/HomeBackDropImage.jpg"
import Subtract from "../assets/images/Subtract.png"
import Subtract2 from "../assets/images/Subtract2.png"
import {Button} from "@/components/ui/button.tsx";
import {ArrowLeft, ArrowRight, Heart} from "lucide-react";
import {HeaderText} from "@/components/HeaderText.tsx";
import {HomePageImageCover} from "@/components/HomePageImageCover.tsx";
import {homePageImagesWithText} from "@/utils/constants/homePageImagesWithText.ts";
import StarVector from "@/assets/images/StarVector.png";
import CuteCouple from "@/assets/images/CuteCouple.png";
import GoldenBallsCake from "@/assets/images/GoldenBallsCake.jpg";
import BespokeCakeInquiryBackDropImage from "@/assets/images/BespokeCakeInquiryBackDropImage.jpg";


export const HomePage = () => {
    return (
        <div>
            <div className={"h-[918px] relative w-full"}>
                <img src={HomeBackDrop} className={"w-full object-cover h-full object-bottom"} alt="HomeBackDrop"/>
                <div className={"flex justify-around items-center w-full z-2 absolute top-0 left-1/2 -translate-x-1/2 h-full"}>
                    <div className={"w-full h-full flex justify-around items-center"}>
                        <div className={"flex flex-col gap-3"}>
                            <span className={"capitalize text-white z-2"}>"Because Cake Deserves its own moment"</span>
                            <span className={"text-white z-2"}>Discover luxury cakes, handcrafted to celebrate life’s sweetest moments</span>
                            <Button className="w-[190px] bg-[#E04F85] py-5 px-20 rounded-[2rem] flex items-center gap-1 capitalize text-white">
                                Order Now
                                <Heart className="w-4 h-4" />
                            </Button>
                        </div>
                        <div className={"relative w-fit h-full"}>
                            <img src={Subtract} className={"h-[656.3px] absolute top-1/3 w-[520.5px]"} alt=""/>
                            <img src={Subtract2} className={"h-[512.7px] w-[419.4px]"} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-0 bg-[#121212]/60" />
            </div>
            <div className={"py-12"}>
                <HeaderText
                    heading={"Designed for every occasion"}
                    subheading={"Indulge in our delicious offerings—from tasting boxes to workshops, we bring your cake dreams to life."}
                />
                <div className={"flex flex-col gap-3"}>
                    <div className={"grid grid-cols-2 w-full p-15 gap-y-8 place-items-center"}>
                        {
                            homePageImagesWithText.map((item) => {
                                return (
                                    <HomePageImageCover key={item.heading} imageUrl={item.imageUrl} heading={item.heading} subheading={item.subheading} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className={"py-10 bg-[#A7C7E7] flex flex-col items-center justify-center gap-8"}>
                <HeaderText
                    heading={"Our cake catalogue"}
                    subheading={"Your dream cake, one click away! Find the perfect treat for birthdays, weddings, and every sweet tooth in between."}
                />
                <div className={"flex flex-col items-center justify-center gap-8"}>
                    {/*<Carousel*/}
                    {/*    opts={{*/}
                    {/*        align: "start",*/}
                    {/*    }}*/}
                    {/*    className="w-full max-w-sm"*/}
                    {/*>*/}
                    {/*    <CarouselContent>*/}
                    {/*        {Array.from({ length: 6 }).map((_, index) => (*/}
                    {/*            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">*/}
                    {/*                <div className="p-1">*/}
                    {/*                    <Card className={"h-[260px] w-[240px]"}>*/}
                    {/*                        <CardContent className="flex aspect-square items-center justify-center p-6">*/}
                    {/*                            <span className="text-3xl font-semibold">{index + 1}</span>*/}
                    {/*                        </CardContent>*/}
                    {/*                    </Card>*/}
                    {/*                </div>*/}
                    {/*            </CarouselItem>*/}
                    {/*        ))}*/}
                    {/*    </CarouselContent>*/}
                    {/*    <CarouselPrevious />*/}
                    {/*    <CarouselNext />*/}
                    {/*</Carousel>*/}
                    <div className={"flex gap-3"}>
                        <img src={GoldenBallsCake} className={"h-[260px] w-[240px]"} alt="Blue HomePage Subtract"/>
                        <img src={BespokeCakeInquiryBackDropImage} className={"h-[260px] w-[240px]"} alt="Blue HomePage Subtract"/>
                        <img src={CuteCouple} className={"h-[260px] w-[240px]"} alt="Blue HomePage Subtract"/>
                        <img src={CuteCouple} className={"h-[260px] w-[240px]"} alt="Blue HomePage Subtract"/>
                    </div>
                    <div className={"flex items-center justify-center gap-2"}>
                        <Button className="bg-[#0F4C81] h-8 w-8 rounded-full text-white">
                            <ArrowLeft className="w-4 h-4" />
                        </Button>
                        <span className={" bg-[#0F4C81] h-1.5 w-1.5 rounded-full"}/>
                        <span className={" bg-white h-1.5 w-1.5 rounded-full"}/>
                        <span className={" bg-white h-1.5 w-1.5 rounded-full"}/>
                        <span className={" bg-white h-1.5 w-1.5 rounded-full"}/>
                        <Button className="bg-[#0F4C81] h-8 w-8 rounded-full text-white">
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>
                    <Button className="w-[190px] bg-[#0F4C81] py-5 px-20 rounded-[2rem] flex items-center gap-1 capitalize text-white">
                        Order Now
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
            </div>
            <div className={"py-12"}>
                <h3 className="text-lg flex gap-2 items-center capitalize text-[#0F4C81] font-semibold w-fit mx-auto">
                    <img src={StarVector} className={"w-4 h-4"} alt={"StarVector"} />
                    Flavour of the Month
                    <img src={StarVector} className={"w-4 h-4"} alt={"StarVector"} />
                </h3>
                    <div className={"flex items-center py-4 px-10 mx-15 rounded-lg border border-dotted border-[#F7CAC9] gap-3"}>
                        <img src={HomeBackDrop} className={"w-[523px] rounded-l-[5rem] object-cover h-[523px] object-bottom"} alt="HomeBackDrop"/>
                        <div className={"flex flex-col justify-center gap-3"}>
                            <h2>Red Velvet Bliss</h2>
                            <span className={"text-[#E04F85]"}>Indulge in the luxurious charm of our Red Velvet Bliss; a velvety smooth cake with a hint of cocoa, layered with rich cream cheese frosting.
                                This classic favourite is perfectly flavourful and ideal for celebrations or a little self-pampering.</span>
                            <Button className="w-[190px] bg-[#0F4C81] py-5 px-20 rounded-[2rem] flex items-center gap-1 capitalize text-white">
                                Order Now
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
            </div>
            <div className={"py-12 bg-[#A7C7E7] gap-8 justify-between items-center flex flex-col"}>
                <HeaderText
                    heading={"Trusted by thousands, loved by all!"}
                    subheading={"With 800+ events served, hegai cakes is the go-to for luxury cakes and curating indelible experiences."}
                    className={"text-[#0F4C81]"}
                />
                <div className={"flex items-center justify-center gap-2"}>
                    <Button className="bg-[#0F4C81] h-8 w-8 rounded-full text-white">
                        <ArrowLeft className="w-4 h-4" />
                    </Button>
                    <div className={"flex flex-col items-center justify-center gap-10"}>
                        <span className={"text-[#0F4C81] tracking-wide text-sm font-normal"}>
                        “A pretty cake with great sponge! It was so moist!!! Everyone loved itt! Thank you so much again”
                    </span>
                        <span className={"text-[#0F4C81] tracking-wide text-normal font-normal"}> -M.K</span>
                    </div>
                    <Button className="bg-[#0F4C81] h-8 w-8 rounded-full text-white">
                        <ArrowRight className="w-4 h-4" />
                    </Button>
                </div>
                <div className={"flex items-center justify-center gap-2"}>
                    <img src={CuteCouple} alt={"CuteCouple"} className={"w-[240px] h-[260px]"} />
                    <img src={CuteCouple} alt={"CuteCouple"} className={"w-[240px] h-[260px]"} />
                    <img src={CuteCouple} alt={"CuteCouple"} className={"w-[240px] h-[260px]"} />
                    <img src={CuteCouple} alt={"CuteCouple"} className={"w-[240px] h-[260px]"} />
                    <img src={CuteCouple} alt={"CuteCouple"} className={"w-[240px] h-[260px]"} />
                    <img src={CuteCouple} alt={"CuteCouple"} className={"w-[240px] h-[260px]"} />
                </div>
                <div className={"flex items-center justify-center gap-2"}>
                    <span className={" bg-[#0F4C81] h-1.5 w-1.5 rounded-full"}/>
                    <span className={" bg-white h-1.5 w-1.5 rounded-full"}/>
                    <span className={" bg-white h-1.5 w-1.5 rounded-full"}/>
                    <span className={" bg-white h-1.5 w-1.5 rounded-full"}/>
                </div>
            </div>
            <div className={"py-12 gap-8 justify-between items-center flex flex-col"}>
                <div className="text-center items-center justify-center flex-col gap-1 flex ">
                    <h3 className="text-lg text-[#E04F85] capitalize font-semibold w-fit mx-auto">
                        {"Get sweet deals and updates!"}
                    </h3>
                    <span className={`w-[700px] text-[#0F4C81]`}>
                {"Be the first to know about new products, discounts and what’s happening in Hegai Cakes"}
                 </span>
                </div>
                <div className={"flex items-center w-full justify-center gap-2"}>
                    <div className="flex items-center w-full max-w-md">
                        <input
                            type="text"
                            className="flex-1 w-[914px] px-4 py-2 text-sm border  rounded-l-2xl focus:outline-none"
                            placeholder="Enter Email Address..."
                        />
                        <button className="px-4 py-2 text-sm bg-[#0F4C81] text-white rounded-r-2xl border border-l-0 border-[#0F4C81]">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}