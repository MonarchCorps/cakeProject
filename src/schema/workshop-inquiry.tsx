import * as Yup from "yup";

export const workshopInquirySchema = Yup.object({
    full_name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid").required("Required"),
    phone_number: Yup.string().required("Required"),
    number_of_participants: Yup.number().required("Required").positive(),
    preferred_date: Yup.string().required("Required"),
    type_and_flavour: Yup.string().required("Required"),
    desired_outcome: Yup.string().required("Required"),
    additional_details: Yup.string().nullable(),
});

export type WorkshopInquiryType = Yup.InferType<typeof workshopInquirySchema>;
