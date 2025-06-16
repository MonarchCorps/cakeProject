import WeddingCakeInquiryBackDropImage from "../assets/images/WeddingCakeInquiryBackDropImage.jpg"
import { ImageCover } from "@/components/ImageCover.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { BaseInput } from "@/components/input/BaseInput.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Checkbox } from "@/components/ui/checkbox.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Button } from "@/components/ui/button.tsx";
import { DietaryNeeds } from "@/utils/constants/dietaryNeeds.ts";
import { useState } from "react";
import { createWeddingCakeInquiry } from "@/http";
import { weddingCakeInquirySchema } from "@/schema/weddingcake-inquiry";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { Loader } from "@/components/ui/Loader";


export const WeddingCakeInquiryPage = () => {
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            wedding_date: "",
            wedding_venue: "",
            number_of_tiers: "",
            number_of_guests: "",
            cake_flavours: "",
            dietary_needs: "",
            other_dietary_need: "",
            design_inspiration: null,
            couple_name: "",
            email: "",
            phone_number: "",
            additional_details: "",
        },
        validationSchema: weddingCakeInquirySchema,
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            try {
                await createWeddingCakeInquiry(values);
                toast.success("Your wedding cake request has been received.");
                resetForm();
            } catch (error) {
                console.log(error);
                toast.error("Something went wrong. Please try again.");
            } finally {
                setLoading(false);
            }
        },
    });

    return (
        <>
            {loading && <Loader />}
            <ImageCover
                imageUrl={WeddingCakeInquiryBackDropImage}
                title="Wedding Cake Inquiry"
                subtitle="Every wedding deserves a showstopping cake. Let’s design yours together."
            />
            <div className="py-8 px-5 lg:px-30">
                <p className="capitalize text-xl my-5 font-semibold text-[#0F4C81]">Inquiry Form</p>
                <form onSubmit={formik.handleSubmit} className="flex flex-col gap-5">
                    <Separator className="border-1" />

                    <BaseInput name="wedding_date" type="date" label="Wedding Date:" required formik={formik} />
                    <BaseInput name="wedding_venue" type="text" label="Wedding Venue:" required formik={formik} />
                    <BaseInput name="number_of_tiers" type="text" label="Number of Tiers:" required formik={formik} />
                    <BaseInput
                        name="number_of_guests"
                        type="text"
                        label="Number of Guests (please specify if you would like your cake to serve all your guests):"
                        required
                        formik={formik}
                    />
                    <BaseInput name="cake_flavours" type="text" label="Cake Flavours:" required formik={formik} />

                    <div className="flex flex-col gap-2">
                        <Label className="font-light text-sm">Dietary Needs</Label>
                        <div className="flex gap-5">
                            {DietaryNeeds.map((need) => (
                                <div key={need} className="flex items-center gap-2">
                                    <Checkbox
                                        id={need}
                                        onCheckedChange={() =>
                                            formik.setFieldValue("dietary_needs", need)
                                        }
                                        checked={formik.values.dietary_needs === need}
                                    />
                                    <Label htmlFor={need} className="font-light text-sm">
                                        {need}
                                    </Label>
                                </div>
                            ))}
                        </div>
                        <BaseInput
                            placeholder="If other, please specify"
                            name="other_dietary_need"
                            type="text"
                            formik={formik}
                        />
                    </div>

                    <BaseInput
                        name="design_inspiration"
                        type="file"
                        label="Design Inspiration (Upload any reference photos):"
                        required
                        formik={formik}
                    />
                    <BaseInput name="couple_name" type="text" label="Couple's Name:" required formik={formik} />
                    <BaseInput name="email" type="email" label="Email Address:" required formik={formik} />
                    <BaseInput name="phone_number" type="text" label="Phone Number:" required formik={formik} />

                    <div className="flex flex-col gap-2">
                        <Label className="font-light text-sm">Additional Details or Special Requests:</Label>
                        <Textarea
                            name="additional_details"
                            placeholder="Enter any other details or special requests you have"
                            className="rounded-none text-sm h-[300px]"
                            value={formik.values.additional_details}
                            onChange={formik.handleChange}
                        />
                    </div>

                    <Button
                        type="submit"
                        className="bg-[#0F4C81] font-light rounded-4xl my-5 h-[40px]"
                        disabled={formik.isSubmitting}
                    >
                        {formik.isSubmitting ? <Loader /> : "Send Inquiry"}
                    </Button>
                </form>
            </div>
        </>
    );
};