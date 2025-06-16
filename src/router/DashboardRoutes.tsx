import { RouteConstants } from "@/utils/constants/RouteConstants.ts";
import type { RouteTypes } from "@/utils/types/RouteTypes.ts";
import { HomeView } from "@/view/HomeView.tsx";
import { OurStoryPage } from "@/page/OurStoryPage.tsx";
import { TasterBoxInquiryPage } from "@/page/TasterBoxInquiryPage.tsx";
import { WeddingCakeInquiryPage } from "@/page/WeddingCakeInquiryPage.tsx";
import { TasterBoxesPage } from "@/page/TasterBoxesPage.tsx";
import { WeddingCakePage } from "@/page/WeddingCakePage.tsx";
import { WeddingCakeCatalogue } from "@/page/WeddingCakeCatalogue.tsx";
import { WorkshopPage } from "@/page/WorkshopPage.tsx";
import { ShopPage } from "@/page/ShopPage.tsx";
import { CelebrationCakePage } from "@/page/CelebrationCakePage.tsx";
import { WishListPage } from "@/page/WishListPage.tsx";
import { WorkshopInquiryPage } from "@/page/WorkshopInquiryPage";


const joinPaths = (...parts: string[]) => '/' + parts.map(p => p.replace(/^\/|\/$/g, '')).join('/');

export const DashboardRoutes: RouteTypes[] = [
    {
        name: RouteConstants.dashboard.dashboard.name,
        path: RouteConstants.dashboard.dashboard.path,
        element: <HomeView />
    },
    {
        name: RouteConstants.dashboard.ourStory.name,
        path: RouteConstants.dashboard.ourStory.path,
        element: <OurStoryPage />
    },
    {
        name: RouteConstants.dashboard.tasterbox.name,
        path: RouteConstants.dashboard.tasterbox.path,
        element: <TasterBoxesPage />
    },
    {
        name: RouteConstants.dashboard.tasterbox.inquiry.name,
        path: joinPaths(RouteConstants.dashboard.tasterbox.path, RouteConstants.dashboard.tasterbox.inquiry.path),
        element: <TasterBoxInquiryPage />
    },
    {
        name: RouteConstants.dashboard.wedding.name,
        path: RouteConstants.dashboard.wedding.path,
        element: <WeddingCakePage />
    },
    {
        name: RouteConstants.dashboard.wedding.catalogue.name,
        path: joinPaths(RouteConstants.dashboard.wedding.path, RouteConstants.dashboard.wedding.catalogue.path),
        element: <WeddingCakeCatalogue />
    },
    {
        name: RouteConstants.dashboard.wedding.celebration.name,
        path: joinPaths(RouteConstants.dashboard.wedding.path, RouteConstants.dashboard.wedding.celebration.path),
        element: <CelebrationCakePage />
    },
    {
        name: RouteConstants.dashboard.wedding.inquiry.name,
        path: joinPaths(RouteConstants.dashboard.wedding.path, RouteConstants.dashboard.wedding.inquiry.path),
        element: <WeddingCakeInquiryPage />
    },
    {
        name: RouteConstants.dashboard.workspace.name,
        path: RouteConstants.dashboard.workspace.path,
        element: <WorkshopPage />
    },
    {
        name: RouteConstants.dashboard.workspace.inquiry.name,
        path: joinPaths(RouteConstants.dashboard.workspace.path, RouteConstants.dashboard.workspace.inquiry.path),
        element: <WorkshopInquiryPage />
    },
    {
        name: RouteConstants.dashboard.shop.name,
        path: RouteConstants.dashboard.shop.path,
        element: <ShopPage />
    },
    {
        name: RouteConstants.dashboard.wishlist.name,
        path: RouteConstants.dashboard.wishlist.path,
        element: <WishListPage />
    }
];
