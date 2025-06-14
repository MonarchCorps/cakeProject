import {ImageCover} from "@/components/ImageCover.tsx";
import WhiskingFlour from "../assets/images/WhiskingFlour.jpg"
import blackandwitewhisk from "../assets/images/blackandwitewhisk.jpg"
import {HeaderText} from "@/components/HeaderText.tsx";
import illustration5 from "@/assets/icon/Illustration 5.png";
import illustration6 from "@/assets/icon/Illustration 6.png";
import illustration7 from "@/assets/icon/Illustration 7.png";


export const WorkshopPage = () => {
    return (
        <>
            <ImageCover objectPosition={"object-top"}
                        imageUrl={WhiskingFlour}
                        title="Baking Workshop"
                        subtitle={"Discover a unique way to learn, bond, and have fun with our hands-on baking workshops."}
                        buttonText={"Book a Workshop"}
            />
            <div className={"py-12 bg-[#F7CAC9]"}>
                <HeaderText
                    heading={"Learn, Create, Enjoy"}
                    subheading={"For individuals, corporate teams, or groups celebrating" +
                        " a special occasion, our workshops are" +
                        " designed to inspire creativity, foster collaboration, and create unforgettable memories."}
                    className1={"text-[#E04F85]"}
                    className={"text-[#E04F85]"}
                />
            </div>
            <div className={"py-12"}>
                <HeaderText
                    heading={"Why It’s worth it"}
                    subheading={"Discover the sweet benefits of our workshops"}
                    className1={"text-[#0F4C81]"}
                    className={"text-[#0F4C81]"}
                />
                <div className={"grid lg:grid-cols-2 w-full place-items-center"}>
                    <div className={"flex flex-col items-center gap-3 justify-center text-center w-[300px] lg:w-[400px]"}>
                        <img src={illustration5} alt={"illustration5"} className={"h-25 w-25"}/>
                        <span className={"text-[#0F4C81] capitalize font-semibold"}>Replaces repetitive activities</span>
                        <span className={"text-[#0F4C81] font-normal"}>Say goodbye to the same old team-building exercises with a creative alternative that captivates.</span>
                    </div>
                    <div className={"flex flex-col items-center justify-center gap-3 text-center w-[300px] lg:w-[400px]"}>
                        <img src={illustration7} alt={"illustration5"} className={"h-25 w-25"}/>
                        <span className={"text-[#0F4C81] capitalize font-semibold"}>A Refreshing break</span>
                        <span className={"text-[#0F4C81] font-normal"}>Offer candidates and employees a unique, relaxing experience that fosters connection and leaves a lasting impression.</span>
                    </div>
                </div>
                <div className={"w-full flex items-center justify-center text-center"}>
                    <div className={"flex flex-col items-center justify-center gap-3 text-center w-[300px] lg:w-[400px]"}>
                        <img src={illustration6} alt={"illustration5"} className={"h-25 w-25"}/>
                        <span className={"text-[#0F4C81] capitalize font-semibold"}>Boosts Brand Image</span>
                        <span className={"text-[#0F4C81] font-normal"}>Impress clients and employees with workshops that highlight your commitment to innovation and excellence and a fun work culture.</span>
                    </div>
                </div>
                </div>
            <ImageCover imageUrl={blackandwitewhisk} title={"Let’s make memories! Join our workshop today."}
                        subtitle={"Learn, create, and celebrate with us. Book your spot and bring your cake dreams to life!"}
                        buttonText={"Book a Workshop"}
                        objectPosition1={"h-[400px]"}
                        objectPosition={"object-top"}
            />
        </>
    )
}