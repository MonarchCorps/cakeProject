import type {PropsWithChildren} from "react";
import {Heart, Phone, Search, Mail, ShoppingBag, MapPin} from "lucide-react";
import logo from "../assets/images/logo.png"
import paypal from "../assets/images/Group.png"
import mastercard from "../assets/images/logos_mastercard.png"
import visa from "../assets/images/logos_visa.png"
import {Button} from "@/components/ui/button.tsx";
import {SiInstagram, SiTiktok} from "react-icons/si";
import {Separator} from "@/components/ui/separator.tsx";
import {navConstants} from "@/utils/constants/navConstants.ts";
import {useLocation, useNavigate} from "react-router-dom";
export const PageLayout = ({children}:PropsWithChildren) => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.pathname)
    return (
        <div className={"min-h-screen flex flex-col justify-between items-center"}>
            <nav className={"w-full"}>
                <div className="flex gap-1 text-white w-full bg-[#0F4C81] items-center py-5 justify-center">
                    <span>Order your taster boxes!</span>
                    <Heart className={"w-4 h-4"}/>
                </div>
                <div className="flex gap-1 px-20 w-full bg-[#FFF] items-center py-5 justify-between">
                    <div>
                        <img src={logo} alt="logo" className={"w-[105px] h-[58.88px]"}/>
                    </div>
                    <div className="flex gap-1">
                        {
                            navConstants.map((navConstant) => {
                                return (
                                    <Button onClick={() => navigate(navConstant.path)} key={navConstant.name}
                                            className={`text-[#50555C] font-normal hover:text-[#0F4C81] hover:scale-103 transition-all ease-in-out ${location.pathname === navConstant.path ? "text-[#0F4C81] font-normal underline" : "" }`} variant={"link"}>
                                        {navConstant.name}
                                    </Button>
                                )
                            })
                        }
                    </div>
                    <div className={"flex gap-2"}>
                        <div className="w-7 h-7 rounded-full bg-[#A7C7E7] flex items-center justify-center">
                            <Heart className="w-4 h-4 text-[#0F4C81]" />
                        </div>
                        <div className="w-7 h-7 rounded-full bg-[#A7C7E7] flex items-center justify-center">
                            <ShoppingBag className="w-4 h-4 text-[#0F4C81]" />
                        </div>
                        <div className="w-7 h-7 rounded-full bg-[#A7C7E7] flex items-center justify-center">
                            <Search className="w-4 h-4 text-[#0F4C81]" />
                        </div>
                    </div>
                </div>
            </nav>
            <div className={" w-full "}>
                {children}
            </div>
            <footer className={"w-full grid grid-cols-4 pt-12 py-5 bg-[#A7C7E7]"}>
                <div className="flex flex-col items-center  gap-5">
                    <img src={logo} alt="logo" className={"w-[105px] h-[58.88px]"}/>
                    <div className={"flex gap-3"}>
                        <div className="w-7 h-7 rounded-full bg-[#0F4C81] flex items-center justify-center">
                            <SiTiktok className="w-4 h-4 text-white"  />
                        </div>
                        <div className="w-7 h-7 rounded-full bg-[#0F4C81] flex items-center justify-center">
                            <SiInstagram className="w-4 h-4 text-white" />
                        </div>
                    </div>
                </div>
                <div className={"flex flex-col justify-between"}>
                    <div>
                        <div className={"text-[#0F4C81] font-[500] inline-block pb-3"}>Contact Us</div>
                        <div className={"flex items-center gap-4"}>
                            <Phone className={"text-[#0F4C81] h-4 w-4"}/>
                            <span className={"text-[#0F4C81]"}>+44 7721 497297</span>
                        </div>
                        <div className={"flex items-center gap-4"}>
                            <Mail className={"text-[#0F4C81] h-4 w-4"}/>
                            <span className={"font-light text-[#0F4C81]"}>occasions@hegaicakes.com</span>
                        </div>
                    </div>
                    <div>
                        <div className={"text-[#0F4C81] inline-block font-[500] pb-3"}>Location</div>
                        <div className={"flex items-center gap-4"}>
                            <MapPin className={"text-[#0F4C81] h-4 w-4"}/>
                            <span className={"text-[#0F4C81]"}>Ickenham, West London, UK</span>
                        </div>
                    </div>
                </div>
                <div className={"flex flex-col"}>
                    <span className={"text-[#0F4C81] font-[500] pb-3"}>Quick Link</span>
                    <div className={"flex flex-col gap-2"}>
                        <span className={"text-[#0F4C81] font-light"}>Book a Consultation</span>
                        <span className={"text-[#0F4C81] font-light"}>Shop</span>
                        <span className={"text-[#0F4C81] font-light"}>Taster Box Enquiry</span>
                        <span className={"text-[#0F4C81] font-light"}>Shipping & Refund Policy</span>
                        <span className={"text-[#0F4C81] font-light"}>Privacy Policy</span>
                    </div>
                </div>
                <div className={"flex flex-col"}>
                    <span className={"text-[#0F4C81] font-[500] pb-3"}>We Accept</span>
                    <div className={"flex items-center gap-4"}>
                       <img src={paypal} alt={"Paypal"} className={"w-[85.64px] h-[21.89px]"}/>
                        <img src={visa} alt={"Paypal"} className={"w-[76px] h-[24.64px]"} />
                       <img src={mastercard} alt={"Paypal"} className={"w-[56px] h-[43.53px]"} />
                    </div>
                </div>
                <Separator className={"col-span-4 bg-[#0F4C81] my-5"}/>
                <span className={"flex text-sm font-normal text-[#0F4C81] pb-5 justify-center items-center col-span-4"}>© {new Date().getFullYear()} Y2K Brand <Separator className="h-full mx-2 border-[0.7px] border-[#0F4C81]"
                                                                        orientation={"vertical"}/> All rights reserved. <Separator className="h-full mx-2 border-[0.7px] border-[#0F4C81]"
                                                                                                                                   orientation={"vertical"}/> Designed by Chinaza
                </span>
            </footer>
        </div>
    )
}