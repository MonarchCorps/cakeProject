import * as Yup from "yup";

export const tasterboxInquirySchema = Yup.object({
    event_type: Yup.string().required("Required"),
    event_date: Yup.string().required("Required"),
    event_venue: Yup.string().required("Required"),
    delivery_time: Yup.string().required("Required"),
    no_of_taster_boxes: Yup.number().required("Required").positive(),
    flavlors_list: Yup.string().required("Required"),
    dietary_needs: Yup.string().nullable(),
    company_name: Yup.string().required("Required"),
    contact_name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid").required("Required"),
    phone_number: Yup.string().required("Required"),
    additional_details: Yup.string().nullable(),
});

export type TasterBoxInquiryType = Yup.InferType<typeof tasterboxInquirySchema>;
