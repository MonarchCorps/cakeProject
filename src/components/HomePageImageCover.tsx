import BlueHomePageSubtract from "@/assets/images/BlueHomePageSubtract.png";
import CuteCouple from "@/assets/images/CuteCouple.png";
import {ArrowRight} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

type HomePageImageCoverProps = {
    imageUrl: string;
    heading: string;
    subheading: string;
};

export const HomePageImageCover = ({imageUrl, heading, subheading}: HomePageImageCoverProps) => {
    return (
        <div className={"flex flex-col w-[340px] gap-3"}>
            <div className={"relative w-[340px] h-[340px]"}>
                <img src={BlueHomePageSubtract} className={"absolute top-0 left-0 h-[340px] w-[340px] -z-10"} alt="Blue HomePage Subtract"/>
                <img src={imageUrl === "" ? CuteCouple : imageUrl} className={"h-[300px] w-[300px]  absolute top-1/2 left-1/2 z-10 transform -translate-x-1/2 -translate-y-1/2"} alt="Blue HomePage Subtract"/>
            </div>
            <div className={"flex flex-col items-center w-fit gap-3"}>
                <span className={"font-semibold tracking-wide"}>{heading}</span>
                <span className={"text-center font-normal text-[#E04F85]"}>{subheading}</span>
                <Button className="w-[150px] bg-[#E04F85] py-5 px-20 rounded-[2rem] flex items-center gap-1 capitalize text-white">
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                </Button>
            </div>
        </div>
    )
}