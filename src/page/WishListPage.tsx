import {ImageCover} from "@/components/ImageCover.tsx";
import ShopBackDropImage from "@/assets/images/ShopBackDropImage.jpg";
import Coconut from "@/assets/images/Coconut&Lime.jpg";
import {Button} from "@/components/ui/button.tsx";

export const WishListPage = () => {
    return (
        <div>
            <ImageCover imageUrl={ShopBackDropImage} title={"Wishlist"}
                        objectPosition1={"h-[300px]"}
                        objectPosition={"object-[center_30%]"}
            />
            <div className="py-12 mx-24 flex flex-col gap-8">
                <h1>All Cakes</h1>
                <div className={"flex flex-col gap-1"}>
                    <img className={"h-[400px] w-[420px]"} src={Coconut} alt={"Coconut"}/>
                    <span>Taster Box (PRE-ORDER)</span>
                    <span>A box of 6 slices of vanilla, red velvet, carrot and coconut cake</span>
                    <span>$48</span>
                </div>
                <div className={"cursor-pointer w-fit"}>
                    <Button className={"flex text-start"} variant={"link"}>Shop Now</Button>
                </div>
            </div>
        </div>
    )
}