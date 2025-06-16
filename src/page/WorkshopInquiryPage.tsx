import { ImageCover } from "@/components/ImageCover.tsx";
import BookWorkShopImage from "@/assets/images/BookWorkShopImage.jpg";
import { BaseInput } from "@/components/input/BaseInput.tsx";
import { Separator } from "@/components/ui/separator.tsx";
import { Textarea } from "@/components/ui/textarea.tsx";
import { Label } from "@/components/ui/label.tsx";
import { Button } from "@/components/ui/button.tsx";
import { useFormik } from "formik";
import toast from "react-hot-toast";
import { useState } from "react";
import { Loader } from "@/components/ui/Loader";
import { workshopInquirySchema } from "@/schema/workshop-inquiry";
import { createWorkShopBooking } from "@/http";

export const WorkshopInquiryPage = () => {
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: {
            full_name: "",
            email: "",
            phone_number: "",
            number_of_participants: 1,
            preferred_date: "",
            type_and_flavour: "",
            desired_outcome: "",
            additional_details: "",
        },
        validationSchema: workshopInquirySchema,
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            try {
                await createWorkShopBooking(values);
                toast.success("Yay! Your workshop inquiry was sent 🎂");
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
                imageUrl={BookWorkShopImage}
                objectPosition={"object-[center_30%]"}
                title={"Book A Workshop"}
                subtitle="Let’s make memories! Learn, create, and celebrate with us. Book your spot and bring your cake dreams to life."
            />
            <form onSubmit={formik.handleSubmit}>
                <div className="py-8 px-5 lg:px-30">
                    <p className="capitalize text-xl my-5 font-semibold text-[#0F4C81]">Contact Us</p>
                    <div className="flex flex-col gap-5">
                        <Separator className="border-1" />

                        <BaseInput
                            name="full_name"
                            type="text"
                            label="Full Name/Company Name"
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
                        <BaseInput
                            name="number_of_participants"
                            type="number"
                            label="How many participants? (Exact number):"
                            required
                            formik={formik}
                        />
                        <BaseInput
                            name="preferred_date"
                            type="date"
                            label="Preferred Date:"
                            required
                            formik={formik}
                        />
                        <BaseInput
                            name="type_and_flavour"
                            type="text"
                            label="What type of cake would you like to bake? (Type/Flavour):"
                            required
                            formik={formik}
                        />

                        <div className="flex flex-col gap-2">
                            <Label className="font-light text-sm">Desired Outcome:</Label>
                            <Textarea
                                name="desired_outcome"
                                value={formik.values.desired_outcome}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="rounded-none text-sm h-[300px]"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label className="font-light text-sm">Additional Details or Questions:</Label>
                            <Textarea
                                name="additional_details"
                                value={formik.values.additional_details}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className="rounded-none text-sm h-[300px]"
                            />
                        </div>

                        <Button
                            type="submit"
                            className="bg-[#0F4C81] font-light rounded-4xl my-5 h-[40px]"
                        >
                            Send Inquiry
                        </Button>
                    </div>
                </div>
            </form>
        </>
    );
};
