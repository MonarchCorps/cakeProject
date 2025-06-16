import { ImageCover } from "@/components/ImageCover.tsx";
import TasterBoxInquiryBackDropImage from "../assets/images/TasterBoxInquiryBackDropImage.jpg";
import { BaseInput } from "@/components/input/BaseInput.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import { Button } from "@/components/ui/button.tsx";
import { DietaryNeeds } from "@/utils/constants/dietaryNeeds.ts";
import { useFormik } from "formik";
import { tasterboxInquirySchema } from "@/schema/tasterbox-inquiry";
import { createTasteBoxInquiry } from "@/http";
import toast from "react-hot-toast";
import { useState } from "react";
import { Loader } from "@/components/ui/Loader";

export const TasterBoxInquiryPage = () => {
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            event_type: "",
            event_date: "",
            event_venue: "",
            delivery_time: "",
            no_of_taster_boxes: 1,
            flavlors_list: "",
            dietary_needs: "",
            company_name: "",
            contact_name: "",
            email: "",
            phone_number: "",
            additional_details: "",
        },
        validationSchema: tasterboxInquirySchema,
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            try {
                await createTasteBoxInquiry(values);
                toast.success("Yay! Your inquiry has been received 🍰");
                resetForm();
            } catch (err) {
                console.error(err);
                toast.error("Oops! Something went wrong 💔");
            } finally {
                setLoading(false);
            }
        },
    });

    return (
        <>
            {loading && <Loader />}
            <ImageCover
                imageUrl={TasterBoxInquiryBackDropImage}
                objectPosition={"object-[center_30%]"}
                title={"Taster Box Inquiry Box"}
            />
            <form onSubmit={formik.handleSubmit}>
                <div className={"py-8 px-5 lg:px-30"}>
                    <p className={"capitalize text-xl my-5 font-semibold text-[#0F4C81]"}>
                        Inquiry Form
                    </p>
                    <div className={"flex flex-col gap-5"}>
                        <Separator className={"border-1"} />

                        <BaseInput
                            name="event_type"
                            type="text"
                            label="Event Type:"
                            required
                            formik={formik}
                        />
                        <BaseInput
                            name="event_date"
                            type="date"
                            label="Event Date:"
                            required
                            formik={formik}
                        />
                        <BaseInput
                            name="event_venue"
                            type="text"
                            label="Event Venue:"
                            required
                            formik={formik}
                        />
                        <BaseInput
                            name="delivery_time"
                            type="text"
                            label="Delivery Timeline:"
                            required
                            formik={formik}
                        />
                        <BaseInput
                            name="no_of_taster_boxes"
                            type="number"
                            label="Number of Taste Boxes:"
                            required
                            formik={formik}
                        />
                        <BaseInput
                            name="flavlors_list"
                            type="text"
                            label="Flavour (List four flavours):"
                            required
                            formik={formik}
                        />

                        <div className="flex flex-col gap-2">
                            <Label className={"font-light text-sm"}>Dietary Needs</Label>
                            <div className={"flex gap-5"}>
                                {DietaryNeeds.map((need) => (
                                    <div key={need} className={"flex items-center gap-2"}>
                                        <Checkbox
                                            checked={formik.values.dietary_needs === need}
                                            onCheckedChange={() =>
                                                formik.setFieldValue("dietary_needs", need)
                                            }
                                        />
                                        <Label className={"font-light text-sm"}>{need}</Label>
                                    </div>
                                ))}
                            </div>
                            <BaseInput
                                name="dietary_needs"
                                type="text"
                                placeholder="If other, please specify"
                                formik={formik}
                            />
                        </div>

                        <BaseInput
                            name="company_name"
                            type="text"
                            label="Company Name:"
                            required
                            formik={formik}
                        />
                        <BaseInput
                            name="contact_name"
                            type="text"
                            label="Contact Name:"
                            required
                            formik={formik}
                        />
                        <BaseInput
                            name="email"
                            type="email"
                            label="Email Address:"
                            required
                            formik={formik}
                        />
                        <BaseInput
                            name="phone_number"
                            type="text"
                            label="Phone Number:"
                            required
                            formik={formik}
                        />

                        <div className="flex flex-col gap-2">
                            <Label className={"font-light text-sm"}>
                                Additional Details or Special Requests:
                            </Label>
                            <Textarea
                                name="additional_details"
                                value={formik.values.additional_details}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={"rounded-none text-sm h-[300px]"}
                            />
                        </div>

                        <Button
                            type="submit"
                            className={"bg-[#0F4C81] font-light rounded-4xl my-5 h-[40px]"}
                        >
                            Send Inquiry
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
};
