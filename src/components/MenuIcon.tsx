import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export function MobileNav() {
    const navigate = useNavigate();
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Menu className="w-6 h-6" />
                </Button>
            </SheetTrigger>

            <SheetContent side="right" className="w-3/4">
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>

                <div className="mt-4 flex flex-col gap-4">
                    <Button onClick={() => navigate("/")} variant="ghost" className="justify-start">Home</Button>
                    <Button onClick={() => navigate("/ourStory")} variant="ghost" className="justify-start">Our Story</Button>
                    <Button onClick={() => navigate("/tasterbox/inquiry")} variant="ghost" className="justify-start">Taster Box Enquiry</Button>
                    <Button onClick={() => navigate("/shipping-refund-policy")} variant="ghost" className="justify-start">Shipping & Refund Policy</Button>
                    <Button onClick={() => navigate("/privacy-policy")} variant="ghost" className="justify-start">Privacy Policy</Button>
                </div>
            </SheetContent>
        </Sheet>
    );
}
