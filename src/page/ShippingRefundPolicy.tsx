import { ImageCover } from "@/components/ImageCover";
import CakeWithDecoration from "@/assets/images/CakeWithDecoration.jpg";

export default function ShippingRefundPolicy() {
  return (
    <div className="min-h-screen bg-[#f9f9f9]">
      <ImageCover
        imageUrl={CakeWithDecoration}
        title="Shipping & Refund Policy"
        objectPosition="object-top"
      />
      <div className="p-8 px-10 relative z-10 max-w-[60rem] mx-auto">
        <p className="mb-6">Thank you for choosing us!</p>
        <h2 className="font-bold mb-2">Shipping</h2>
        <p className="mb-6">All taster boxes made for pre-order (direct-to-customer) will be sent by courier such as Royal Mail. Once the boxes have left us, we are not responsible for delays outside of our control, however, we will do our best in keeping tabs on your delivery.</p>
        <h2 className="font-bold mb-2">Refunds</h2>
        <p className="mb-2">We hope that you enjoy your baked goods and that they are the star of the show at your events – minus you of course! <span role="img" aria-label="wink">😉</span></p>
        <p className="mb-2">In the event that something goes wrong and you're unhappy with the service, please reach out to us by phone or email, and we'll be happy to rectify things.</p>
        <p className="mb-2"><span className="font-bold">Partial Refunds:</span> In the unlikely nature that your order is incomplete or that you are unsatisfied with our product, we will be happy to offer you a gift credit ahead of a future order. Please note that this will be based on our discretion.</p>
      </div>
    </div>
  );
} 