import { ArrowLeft, Minus, Plus, Trash2 } from "lucide-react";
import Coconut from "../assets/images/Coconut&Lime.jpg"

export const CartPage = ({ setCurrentStep }: { setCurrentStep: (step: number) => void }) => (
    <div className="max-w-4xl mx-auto p-6 bg-white min-h-screen">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-[#0F4C81] mb-8">My Cart</h1>

        {/* Cart Item Card */}
        <div className="bg-white border rounded-lg p-6 mb-6 shadow-sm">
            <div className="flex gap-6">
                {/* Product Image */}
                <div className="w-48 h-36 bg-gradient-to-br from-amber-200 to-amber-300 rounded-lg flex-shrink-0 overflow-hidden">
                    <img
                        src={Coconut}
                        alt="Taster Box"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                        <div>
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Taster Box (PRE-ORDER)</h3>
                            <p className="text-gray-600 mb-2">SIZE: -</p>
                            <p className="text-2xl font-bold text-[#0F4C81]">£{(30).toFixed(2)}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl font-bold text-gray-800">£{(30 * 2).toFixed(2)}</p>
                            <p className="text-sm text-pink-500 mt-1">Shipping & Taxes calculated at checkout</p>
                        </div>
                    </div>

                    {/* Quantity and Remove */}
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <button
                                // onClick={() => handleQuantityChange(quantity - 1)}
                                className="w-8 h-8 flex items-center justify-center bg-[#0F4C81] text-white rounded-full hover:bg-blue-700"
                            >
                                <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-6 py-2 font-medium text-lg">{30}</span>
                            <button
                                // onClick={() => handleQuantityChange(quantity + 1)}
                                className="w-8 h-8 flex items-center justify-center bg-[#0F4C81] text-white rounded-full hover:bg-blue-700"
                            >
                                <Plus className="w-4 h-4" />
                            </button>
                        </div>

                        <button
                            // onClick={handleRemoveOrder}
                            className="flex items-center text-gray-600 hover:text-red-600 text-sm border border-gray-300 px-4 py-2 rounded-md"
                        >
                            <Trash2 className="w-4 h-4 mr-2" />
                            Remove Order
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Coupon Section */}
        <div className="mb-8">
            <label className="block text-gray-700 font-medium mb-3">
                Enter Coupon Code
            </label>
            <div className="flex gap-3">
                <input
                    type="text"
                    // value={couponCode}
                    // onChange={(e) => setCouponCode(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F4C81] focus:border-transparent"
                    placeholder=""
                />
                <button
                    // onClick={handleApplyCoupon}
                    className="px-8 py-3 bg-[#0F4C81] text-white rounded-md hover:bg-blue-700 font-medium"
                >
                    Apply Coupon
                </button>
            </div>
        </div>

        {/* Bottom Section */}
        <div className="flex max-[600px]:flex-col justify-between items-start gap-x-3 gap-y-3">
            {/* Continue Shopping */}
            <button
                // onClick={handleContinueShopping}
                className="flex items-center text-gray-600 hover:text-[#0F4C81] font-medium"
            >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Continue Shopping
            </button>

            {/* Order Summary */}
            <div className="w-80 max-[600px]:w-full">
                <h2 className="text-2xl font-bold text-[#0F4C81] mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-lg">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-bold">£{(30).toFixed(2)}</span>
                    </div>

                    <div className="flex justify-between text-lg">
                        <span className="text-gray-600">Shipping</span>
                        <div className="text-right">
                            <div className="font-bold">Flat Rate: £{(200).toFixed(2)}</div>
                            <div className="text-sm text-gray-500 mt-1 max-w-48">
                                Shipping options will be updated during checkout
                            </div>
                        </div>
                    </div>

                    <hr className="border-gray-300 my-4" />

                    <div className="flex justify-between text-xl font-bold">
                        <span>Total</span>
                        <span>£{(30).toFixed(2)}</span>
                    </div>
                </div>

                {/* Checkout Button */}
                <button
                    // onClick={handleProceedToCheckout}
                    className="w-full bg-[#0F4C81] text-white py-4 rounded-md font-medium hover:bg-blue-700 mb-4 text-lg"
                    onClick={() => {
                        setCurrentStep(2);
                        window.scrollTo({
                            top: 0,
                            behavior: 'smooth'
                        })
                    }}
                >
                    Proceed To Checkout
                </button>

                <div className="text-center text-gray-500 text-sm mb-4">Or</div>

                {/* Payment Buttons */}
                <div className="space-y-3">
                    <button
                        // onClick={handleStripePayment}
                        className="w-full bg-black text-white py-4 rounded-md font-medium hover:bg-gray-800 text-lg"
                    >
                        Pay With Stripe
                    </button>

                    <button
                        // onClick={handlePayPalPayment}
                        className="w-full bg-yellow-400 text-blue-800 py-4 rounded-md font-bold hover:bg-yellow-500 text-lg flex items-center justify-center"
                    >
                        <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a.641.641 0 0 1-.633-.74l.633-4.006c.082-.519.53-.901 1.054-.901h.633c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.425 9.033z" />
                        </svg>
                        PayPal
                    </button>
                </div>
            </div>
        </div>
    </div>
);