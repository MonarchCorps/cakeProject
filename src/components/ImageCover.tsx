import { Button } from "@/components/ui/button.tsx";
import { Heart } from "lucide-react";

interface ImageCoverProps {
    title?: string
    subtitle?: string
    buttonText?: string
    imageUrl: string
    objectPosition?: string
    objectPosition1?: string
    onClick?: () => void
}
export const ImageCover = ({ title, subtitle, buttonText, imageUrl, objectPosition, objectPosition1, onClick }: ImageCoverProps) => {
    return (
        <div className={`relative w-full h-[400px] ${objectPosition1 ? `lg:${objectPosition1}` : "lg:h-[600px]"}`}>
            <img src={imageUrl} className={`w-full object-cover h-full ${objectPosition ?? "object-bottom"}`} alt="" />
            <div className={"flex flex-col justify-center w-full text-center  z-1 absolute top-1/4  gap-5 items-center"}>
                <span className={"font-extrabold  text-white font-swash text-[55px] leading-tight"}>{title}</span>
                <span className={"font-normal w-fit mx-15 text-white text-xl"}>{subtitle}</span>
                {buttonText &&
                    <Button onClick={onClick} className="w-[190px] bg-[#0F4C81] py-5 px-20 rounded-[2rem] flex items-center gap-1 capitalize text-white">
                        {buttonText}
                        <Heart className="w-4 h-4" />
                    </Button>
                }
            </div>
            <div className="absolute inset-0 bg-[#121212]/60" />
        </div>
    )
}