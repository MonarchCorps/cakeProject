import WeddingCakeBackDropImage from "@/assets/images/WeddingCakeBackDropImage.png";
import {ImageCover} from "@/components/ImageCover.tsx";
import {HeaderText} from "@/components/HeaderText.tsx";
import {cakeCatalogueConstants} from "@/utils/constants/cakeCatalogueConstants.ts";
import {ImageCard} from "@/components/ImageCard.tsx";

export const WeddingCakeCatalogue = () =>{
    return (
        <div>
            <ImageCover objectPosition={"object-center"} title={"Wedding Cakes"}
                        subtitle={"Our Wedding Cakes are designed to reflect your unique love story, blending stunning artistry with mouthwatering flavours."}
                        buttonText={"Book a Consultation"}
                        imageUrl={WeddingCakeBackDropImage}
            />
            <div className={"py-8 px-30 "}>
                <HeaderText heading={"What's your dream wedding Cake"}
                            subheading={"Every couple’s cake is a reflection of their unique story. Let our wedding cake catalogue inspire your own dream creation."}
                />
                <div className={"flex gap-8 flex-col py-30 h-full justify-around items-center w-full"}>
                    <div className={"grid grid-cols-2 w-full place-items-center"}>
                        {
                            cakeCatalogueConstants.map((catalogue, index) => {
                                return (
                                    <div key={`${catalogue.title}-${index}`} className={"py-5"}>
                                        <ImageCard  title={catalogue.title}
                                                            photography={catalogue.photography}
                                                            flavours={catalogue.flavours}
                                                            image1={catalogue.image1}
                                                            image2={catalogue.image2}
                                                            venue={catalogue.venue}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}