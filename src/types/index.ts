export type CreateWorkShopBookingType = {
    full_name: string;
    email: string;
    phone_number: string;
    Number_of_participants: number;
    preferred_date: string; // ISO format: "YYYY-MM-DD"
    type_and_flavour: string;
    desired_outcome: string;
    additional_details?: string;
}

export type CreateBespokeCakeInquiryType = {
    event_type: string;
    event_date: string; // ISO format
    event_time: string;
    theme: string;
    number_of_tiers: number;
    tier_shape: string;
    size: string;
    flavours: string;
    dietary_needs: string;
    design_inspiration: string;
    arrange_collection_ickenham: string;
    full_name: string;
    email: string;
    phone_number: string;
    additional_details?: string;
}