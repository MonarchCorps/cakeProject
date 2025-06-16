import type { TasterBoxInquiryType } from "@/schema/tasterbox-inquiry";
import type { WeddingCakeInquiryType } from "@/schema/weddingcake-inquiry";
import pb from "@/services";
import type { CreateBespokeCakeInquiryType, CreateWorkShopBookingType } from "@/types";

export async function createWorkShopBooking(data: CreateWorkShopBookingType) {
    try {
        const record = await pb.collection("workshopbooking").create(data);
        return record;
    } catch (error) {
        console.error("Error creating consultation booking:", error);
        throw error;
    }
}

export async function createTasteBoxInquiry(data: TasterBoxInquiryType) {
    try {
        const record = await pb.collection("TasterBoxInquiry").create(data);
        return record;
    } catch (error) {
        console.error("Error creating taste box inquiry:", error);
        throw error;
    }
}

export async function createBespokeCakeInquiry(data: CreateBespokeCakeInquiryType) {
    try {
        const record = await pb.collection("bespokecakeinquiry").create(data);
        return record;
    } catch (error) {
        console.error("Error creating bespoke cake inquiry:", error);
        throw error;
    }
}


export async function createWeddingCakeInquiry(data: WeddingCakeInquiryType) {
    try {
        const record = await pb.collection("weddingcakeinquiry").create(data);
        return record;
    } catch (error) {
        console.error("Error creating wedding cake inquiry:", error);
        throw error;
    }
}
