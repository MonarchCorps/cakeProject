import BigCake from "@/assets/images/bigcake.jpg";
import JustMarried from "@/assets/images/JustMarried.png";
import TandECake from "@/assets/images/T&E_Cake.jpg";
import MandWCake from "@/assets/images/M&W_Cake.jpg";
import LastCake from "@/assets/images/LastCake.jpg";
import PinkFlowerCake from "@/assets/images/PinkFlowerCake.jpg";
import OGCake from "@/assets/images/O&G_Cake.jpg";
import PurpleCake from "@/assets/images/PurpleCake.jpg";
import FandFCake from "@/assets/images/F&F_Cake.jpg";
import ZandKCake from "@/assets/images/Z&K_Cake.jpg";
import CakeWithKnife from "@/assets/images/CakeWithKnife.jpg";
import SocketCake from "@/assets/images/SocketCake.jpg";
import CuterCouple from "@/assets/images/CuterCouple.jpg";

export interface CakeCatalogueConstantsType {
    title: string
    image1: string
    image2?: string
    photography: string
    flavours: string[]
    venue?: string
}

export const cakeCatalogueConstants: CakeCatalogueConstantsType[] = [
    {
        title: "A&A",
        flavours: ["Salted Caramel", "Mango", "Passionfruit", "Lemon Poppyseed"],
        photography: "Lucy Long Photography",
        venue: "Bisham Abbey",
        image1: BigCake
    },
    {
        title: "A&C",
        flavours: ["Strawberries & Cream"],
        photography: "Boslens Studios",
        image1: JustMarried
    },
    {
        title: "T&E",
        flavours: ["Red Velvet", "Carrot W/Nuts", "Salted Caramel", "Chocolate Fruitcake"],
        photography: "Lucy Long Photography",
        venue: "Holiday Inn Basildon",
        image1: TandECake,
        image2: TandECake
    },
    {
        title: "M&W",
        flavours: ["Red Velvet", "Mango PassionFruit", "Carrot W/Out Nuts", "Strawberry", "Banana"],
        photography: "Lucy Long Photography",
        venue: "De Vere Grand Connaught Rooms",
        image1: MandWCake

    },
    {
        title: "J&S",
        flavours: ["Vanilla", "Red Velvet", "Mango", "PassionFruit"],
        photography: "Prestige Photography IRL",
        venue: "The Glencarn Hotel Ireland",
        image1: JustMarried,
        image2: CuterCouple

    },
    {
        title: "E&I",
        flavours: ["Vanilla", "Red Velvet"],
        photography: "Zeal Photography",
        venue: "North Mymms Park",
        image1: LastCake

    },
    {
        title: "T&F",
        flavours: ["White Chocolate", "Salted Caramel", "Vanilla"],
        photography: "Bigg Ayo",
        venue: "Warbrook House",
        image1: PurpleCake

    },
    {
        title: "O&J",
        flavours: ["Chocolate", "Lemon Poppyseed", "Salted Caramel"],
        photography: "-",
        venue: "Hedsor House",
        image1: JustMarried

    },
    {
        title: "C&F",
        flavours: ["Ginger Rum Cake W/ pralines & Marzipan", "Champagne Vanilla"],
        photography: "JJP Studios",
        venue: "Fitzroy London",
        image1: PinkFlowerCake

    },
    {
        title: "O&G",
        flavours: ["Gingerbread Cake W/ Chocolate Cream Cheese Frosting & Caramelised"],
        photography: "Emmanuel Photography",
        venue: "The Glencarn Hotel Ireland",
        image1: OGCake

    },
    {
        title: "T&C",
        flavours: ["Cappucino", "Lemon & White", "Velvet", "Salted Caramel"],
        photography: "Noris Nyamekye",
        venue: "Quendon Hall",
        image1: JustMarried

    },
    {
        title: "T&Y",
        flavours: ["Black Forest", "Red Velvet", "Oreo Sponge", "Butterscotch", "Vegan Oreo"],
        photography: "Dudu Weddings",
        venue: "Hilton London Croydon",
        image1: PurpleCake

    },
    {
        title: "F&F",
        flavours: ["Vanilla", "Chocolate", "Red Velvet", "White Chocolate"],
        photography: "-",
        venue: "-",
        image1: FandFCake

    },
    {
        title: "Z&K",
        flavours: ["Cookies & Cream", "Red Velvet", "FruitCake"],
        photography: "-",
        venue: "The Hive London",
        image1: ZandKCake

    },
    {
        title: "O&M",
        flavours: ["Red Velvet", "Oreo Sponge", "Vanilla", "Salted Caramel", "Chocolate", "White...",  ],
        photography: "The Bailey's Hotel(Traditional)",
        venue: "Hilton London Croydon",
        image1: CakeWithKnife

    },
    {
        title: "D&D",
        flavours: ["Vanilla", "Salted Caramel", "Red Velvet", "Oreo Sponge"],
        photography: "-",
        venue: "-",
        image1: SocketCake

    },
]