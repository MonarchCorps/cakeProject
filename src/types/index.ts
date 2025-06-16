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

export type CreateWeddingCakeInquiryType = {
    wedding_date: string; // ISO date format e.g. "2025-11-20"
    wedding_venue: string;
    number_of_tiers: number;
    number_of_guests: string;
    cake_flavours: string;
    dietary_needs: string;
    design_inspiration: string;
    couples_names: string;
    email: string;
    phone_number: string;
    additional_details?: string;
}