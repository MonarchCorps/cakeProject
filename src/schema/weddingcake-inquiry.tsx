import * as Yup from "yup";

export const weddingCakeInquirySchema = Yup.object({
    wedding_date: Yup.string().required("Required"),
    wedding_venue: Yup.string().required("Required"),
    number_of_tiers: Yup.string().required("Required"),
    number_of_guests: Yup.string().required("Required"),
    cake_flavours: Yup.string().required("Required"),
    dietary_needs: Yup.string().nullable(),
    other_dietary_need: Yup.string().nullable(),
    design_inspiration: Yup.mixed().nullable(),
    couple_name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone_number: Yup.string().required("Required"),
    additional_details: Yup.string().nullable(),
});

export type WeddingCakeInquiryType = Yup.InferType<typeof weddingCakeInquirySchema>;
