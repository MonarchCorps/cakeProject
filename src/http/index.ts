import pb from "@/services";
import type { CreateBespokeCakeInquiryType, CreateTasteBoxInquiryType, CreateWeddingCakeInquiryType, CreateWorkShopBookingType } from "@/types";

export async function createWorkShopBooking(data: CreateWorkShopBookingType) {
    try {
        const record = await pb.collection("workshopbooking").create(data);
        return record;
    } catch (error) {
        console.error("Error creating consultation booking:", error);
        throw error;
    }
}

export async function createTasteBoxInquiry(data: CreateTasteBoxInquiryType) {
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


export async function createWeddingCakeInquiry(data: CreateWeddingCakeInquiryType) {
    try {
        const record = await pb.collection("weddingcakeinquiry").create(data);
        return record;
    } catch (error) {
        console.error("Error creating wedding cake inquiry:", error);
        throw error;
    }
}
