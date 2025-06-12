import CoconutLime from "@/assets/images/Coconut&Lime.jpg";
import Baking from "@/assets/images/Baking.jpg";
import JustMarried from "@/assets/images/JustMarried.png";
import GoldenBallsCake from "@/assets/images/GoldenBallsCake.jpg";

type HomePageImagesWithText = {
    heading: string;
    subheading: string;
    imageUrl: string;
}
export const homePageImagesWithText:HomePageImagesWithText[] = [
    {
        heading:"Taster Boxes",
        subheading: "Easy, handy, and perfect for on-the-go moments",
        imageUrl: CoconutLime
    },
    {
        heading:"Wedding Cakes",
        subheading: "Exquisite, tailored creations for your big day",
        imageUrl: JustMarried
    },
    {
        heading:"Celebration Cakes",
        subheading: "Custom designs to make your special events unforgettable",
        imageUrl: GoldenBallsCake
    },
    {
        heading:"Workshops",
        subheading: "Elevate your team bonding with our engaging baking workshops",
        imageUrl:Baking
    },
]