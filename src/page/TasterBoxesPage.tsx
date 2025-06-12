import {ImageCover} from "@/components/ImageCover.tsx";
import TasterBoxesBackDropImage from "@/assets/images/TasterBoxesBackDropImage.jpg";
import illustration1 from "@/assets/icon/illustration 1.png";
import illustration2 from "@/assets/icon/Illustration 2.png";
import illustration3 from "@/assets/icon/Illustration 3.png";
import illustration4 from "@/assets/icon/Illustration 4.png";
import {HeaderText} from "@/components/HeaderText.tsx";

export const TasterBoxesPage = () => {
    return (
        <>
            <ImageCover objectPosition={"object-bottom"}
                        imageUrl={TasterBoxesBackDropImage}
                        title={"Taster Boxes"}
                        subtitle={"Whether you’re indulging personally, gifting, " +
                            "or sharing with a group, our Taster Boxes are designed to" +
                            " bring your flavour dreams to life in every bite"}
                        buttonText={"Order Now"}
            />
            <div className={"py-12"}>
                <HeaderText
                className1={"text-[#0F4C81]"}
                />
                <div className={"grid grid-cols-2 w-full p-15 gap-y-8 place-items-center"}>
                    <div className={"flex flex-col items-center justify-center text-center w-[400px]"}>
                        <img src={illustration1} alt={"illustration3"} className={"h-25 w-25"}/>
                        <span className={"text-[#0F4C81] font-semibold"}>Easy on-the-go packaging</span>
                        <span className={"text-[#0F4C81] font-normal"}>Designed for convenience, our packaging guarantees seamless handling and transport,
                            keeping your treats fresh and ready to enjoy wherever you are.</span>
                    </div>
                    <div className={"flex flex-col items-center justify-center text-center w-[400px]"}>
                        <img src={illustration2} alt={"illustration3"} className={"h-25 w-25"}/>
                        <span className={"text-[#0F4C81] font-semibold"}>Effortless ordering</span>
                        <span className={"text-[#0F4C81] font-normal"}>Our user-friendly e-commerce platform ensures
                            stress-free ordering and prompt delivery, perfect for busy schedules or last-minute events.</span>
                    </div>
                    <div className={"flex flex-col items-center justify-center text-center w-[400px]"}>
                        <img src={illustration3} alt={"illustration3"} className={"h-25 w-25"}/>
                        <span className={"text-[#0F4C81] font-semibold"}>Build Your Box</span>
                        <span className={"text-[#0F4C81] font-normal"}>Imagine it, and we can make it happen. Create a custom selection that perfectly matches your event or personal taste.
                            Each box is filled with 4 slices and 8 servings, offering a delightful assortment to satisfy every preference.</span>
                    </div>
                    <div className={"flex flex-col items-center justify-center text-center w-[400px]"}>
                        <img src={illustration4} alt={"illustration4"} className={"h-25 w-25"}/>
                        <span className={"text-[#0F4C81] font-semibold"}>Event Takeaway</span>
                        <span className={"text-[#0F4C81] font-normal"}>Perfect for weddings, corporate events, or special occasions,
                            our Taster Boxes serve as thoughtful takeaways that guests will remember and savour long after the event..</span>
                    </div>
                </div>
            </div>
            <div className={"py-12 bg-[#F7CAC9]"}>
                <HeaderText/>
            </div>
        </>
    )
}
