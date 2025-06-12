import {ImageCover} from "@/components/ImageCover.tsx";
import TasterBoxInquiryBackDropImage from "../assets/images/TasterBoxInquiryBackDropImage.jpg"
import {BaseInput} from "@/components/input/BaseInput.tsx";
import {Separator} from "@/components/ui/separator.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Label} from "@/components/ui/label.tsx";
import {Checkbox} from "@/components/ui/checkbox.tsx";
import {Button} from "@/components/ui/button.tsx";
import {DietaryNeeds} from "@/utils/constants/dietaryNeeds.ts";
export const TasterBoxInquiryPage = () => {
    return (
        <>
            <ImageCover imageUrl={TasterBoxInquiryBackDropImage}
                        objectPosition={"object-[center_30%]"}
                        title={"Taster Box Inquiry Box"}
            />
            <div className={"py-8 px-30 "}>
                <p className={"capitalize text-xl my-5 font-semibold text-[#0F4C81]"}>Inquiry Form</p>
            <div className={"flex flex-col gap-5"}>
                <Separator className={"border-1"}/>
                <BaseInput
                    errorStyle={{ color: "red"}}
                    style={{}}
                    autoComplete={"off"}
                    name="Password"
                    type="text"
                    label="Event Type:"
                    required
                />
                <BaseInput
                    errorStyle={{ color: "red"}}
                    style={{}}
                    autoComplete={"off"}
                    name="Password"
                    type="date"
                    label="Event Date:"
                    required
                />
                <BaseInput
                    errorStyle={{ color: "red"}}
                    style={{}}
                    autoComplete={"off"}
                    name="Password"
                    type="text"
                    label="Event Venue:"
                    required
                />
                <BaseInput
                    errorStyle={{ color: "red"}}
                    style={{}}
                    autoComplete={"off"}
                    name="Password"
                    type="text"
                    label="Delivery Timeline:"
                    required
                />
                <BaseInput
                    errorStyle={{ color: "red"}}
                    style={{}}
                    autoComplete={"off"}
                    name="Password"
                    type="text"
                    label="Number of Taste Boxes:"
                    required
                />
                <BaseInput
                    errorStyle={{ color: "red"}}
                    style={{}}
                    autoComplete={"off"}
                    name="Password"
                    type="text"
                    label="Flavour (List four flavours):"
                    required
                />
                <div className="flex flex-col gap-2">
                    <Label className={"font-light text-sm"}>Dietary Needs</Label>
                    <div className={"flex gap-5"}>
                        {
                            DietaryNeeds.map((need) => {
                                return (
                                    <div key={need} className={"flex items-center gap-2"}>
                                        <Checkbox className={""}/>
                                        <Label className={"font-light text-sm"}>{need}</Label>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <BaseInput
                        errorStyle={{ color: "red"}}
                        placeholder={"If other, please specify"}
                        autoComplete={"off"}
                        name="Password"
                        type="text"
                        required
                    />

                </div>
                    <BaseInput
                        errorStyle={{ color: "red"}}
                        style={{}}
                        autoComplete={"off"}
                        name="Password"
                        type="text"
                        label="Comany Name:"
                        required
                    />
                <BaseInput
                    errorStyle={{ color: "red"}}
                    style={{}}
                    autoComplete={"off"}
                    name="Password"
                    type="text"
                    label="Contact Name:"
                    required
                />
                <BaseInput
                    errorStyle={{ color: "red"}}
                    style={{}}
                    autoComplete={"off"}
                    name="Password"
                    type="email"
                    label="Email Address:"
                    required
                />
                <BaseInput
                    errorStyle={{ color: "red"}}
                    style={{}}
                    autoComplete={"off"}
                    name="Password"
                    type="email"
                    label="Phone Number:"
                    required
                />
                <div className="flex flex-col gap-2">
                    <Label className={"font-light text-sm"}>Additional Details or Special Requests:</Label>
                    <Textarea placeholder={"Enter any other details or special requests you have"} className={"rounded-none text-sm h-[300px]"}/>
                </div>
                <Button className={"bg-[#0F4C81] font-light rounded-4xl my-5 h-[40px]"}>
                    Send Inquiry
                </Button>
            </div>
            </div>
        </>
    )
}