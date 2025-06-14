import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileNav() {
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
                        <Button variant="ghost" className="justify-start">Home</Button>
                        <Button variant="ghost" className="justify-start">Shop</Button>
                        <Button variant="ghost" className="justify-start">Contact</Button>
                        <Button variant="ghost" className="justify-start">About</Button>
                    </div>
                </SheetContent>
            </Sheet>
    );
}
