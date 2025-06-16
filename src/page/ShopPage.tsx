import { ImageCover } from "@/components/ImageCover.tsx";
import ShopBackDropImage from "../assets/images/ShopBackDropImage.jpg"
import RoomWithCake from "../assets/images/RoomWithCake.jpg"
import Coconut from "../assets/images/Coconut&Lime.jpg"

export const ShopPage = () => {
    return (
        <>
            <ImageCover imageUrl={ShopBackDropImage} title={"Shop"}
                objectPosition1={"h-[300px]"}
                objectPosition={"object-[center_30%]"}
            />
            <div className="py-12 mx-24 flex flex-col gap-8">
                <h1>All Cakes</h1>
                <div className={"flex flex-col gap-1"}>
                    <img className={"h-[400px] w-[420px]"} src={Coconut} alt={"Coconut"} />
                    <span>Taster Box (PRE-ORDER)</span>
                    <span>A box of 6 slices of vanilla, red velvet, carrot and coconut cake</span>
                    <span>$48</span>
                </div>
            </div>
            <ImageCover imageUrl={RoomWithCake} title={"Need something custom? Book a Consultation!"}
                subtitle={"Let’s bring your cake dreams to life with a personalized design and flavor journey."}
                buttonText={"Book a Consultation"}
                objectPosition1={"h-[520px]"}
                objectPosition={"object-[center_30%]"}
            />
        </>
    )
}