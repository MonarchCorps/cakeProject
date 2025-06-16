import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function CheckoutPage({ setCurrentStep }: { setCurrentStep: (step: number) => void }) {
    const [selectedPayment, setSelectedPayment] = useState('credit-card');

    return (
        <div className="max-w-5xl mx-auto p-6 bg-white min-h-screen">
            {/* Page Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

            <div >
                {/* Coupon Section */}
                <div>
                    <label className="block text-gray-700 font-medium mb-3">
                        Enter Coupon Code
                    </label>
                    <div className="w-full flex gap-3">
                        <input
                            type="text"
                            className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder=""
                        />
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 font-medium whitespace-nowrap">
                            Apply Coupon
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 items-start">
                    {/* Payment Method */}
                    <div className="flex items-center gap-4">
                        <button className="bg-black text-white px-6 py-3 rounded-full font-medium">
                            Pay With Stripe
                        </button>
                        <span className="text-gray-500 ml-3">or</span>
                    </div>

                    {/* Billing Details */}
                    <div>
                        <h2 className="text-xl font-bold text-blue-600 mb-6">Billing Details</h2>

                        <div className="space-y-4">
                            {/* Email */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            {/* First Name & Last Name */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        First Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-700 font-medium mb-2">
                                        Last Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            {/* Company Name */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Company Name (optional)
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            {/* Country */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Country/Region <span className="text-red-500">*</span>
                                </label>
                                <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white">
                                    <option value="United Kingdom (UK)">United Kingdom (UK)</option>
                                    <option value="United States">United States</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Australia">Australia</option>
                                </select>
                            </div>

                            {/* Street Address */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Street Address <span className="text-red-500">*</span>
                                </label>
                                <div className="space-y-3">
                                    <input
                                        type="text"
                                        placeholder="House number and street name"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Apartment, suite, unit, etc. (optional)"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    />
                                </div>
                            </div>

                            {/* Town/City */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Town/City <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            {/* County */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    County (optional)
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            {/* Postcode */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Postcode <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>

                            {/* Ship to different address */}
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="shipToDifferent"
                                    className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                />
                                <label htmlFor="shipToDifferent" className="text-gray-700">
                                    Ship to a different address?
                                </label>
                            </div>

                            {/* Order Notes */}
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">
                                    Order Notes (optional)
                                </label>
                                <textarea
                                    placeholder="Special notes for delivery"
                                    rows={4}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                />
                            </div>
                        </div>

                        <div className="max-w-md mx-auto bg-white py-6">
                            {/* Order Summary */}
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold text-blue-700 mb-6">Order Summary</h2>

                                {/* Product Header */}
                                <div className="flex justify-between text-base font-medium border-b border-gray-200 pb-3 mb-4">
                                    <span className="text-gray-700">Product</span>
                                    <span className="text-gray-700">Subtotal</span>
                                </div>

                                {/* Product Item */}
                                <div className="mb-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <span className="text-gray-800 font-medium">Taster Box (PRE-ORDER) ×1</span>
                                        <span className="font-bold text-gray-800">£48.00</span>
                                    </div>
                                    <div className="text-sm text-gray-600 space-y-1">
                                        <p>Add a lovely gift note (optional):</p>
                                        <p className="text-blue-600 underline cursor-pointer">Pick any four (4) flavours:</p>
                                    </div>
                                </div>

                                <hr className="border-gray-200 mb-4" />

                                {/* Summary Calculations */}
                                <div className="space-y-3 mb-4">
                                    <div className="flex justify-between text-base">
                                        <span className="text-gray-700">Subtotal</span>
                                        <span className="font-bold text-gray-800">£48.00</span>
                                    </div>

                                    <div className="flex justify-between text-base">
                                        <span className="text-gray-700">Shipping</span>
                                        <span className="font-bold text-gray-800">Flat Rate: £7.00</span>
                                    </div>

                                    <hr className="border-gray-200" />

                                    <div className="flex justify-between text-lg font-bold">
                                        <span className="text-gray-800">Total</span>
                                        <span className="text-gray-800">£55.00</span>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Options */}
                            <div className="space-y-4 mb-6">
                                {/* Credit/Debit Card */}
                                <div className="border border-blue-600 rounded-lg p-4 bg-blue-50">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center">
                                            <input
                                                type="radio"
                                                id="credit-card"
                                                name="payment"
                                                value="credit-card"
                                                checked={selectedPayment === 'credit-card'}
                                                onChange={(e) => setSelectedPayment(e.target.value)}
                                                className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                            />
                                            <label htmlFor="credit-card" className="ml-3 text-gray-800 font-medium">
                                                Credit/Debit Card
                                            </label>
                                        </div>
                                        <ChevronDown className="w-5 h-5 text-blue-600" />
                                    </div>

                                    {selectedPayment === 'credit-card' && (
                                        <div className="space-y-4">
                                            {/* Card Number */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Card Number
                                                </label>
                                                <div className="relative">
                                                    <input
                                                        type="text"
                                                        placeholder="123 74535782374E 456"
                                                        className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-20"
                                                    />
                                                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex space-x-1">
                                                        <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                                                            VISA
                                                        </div>
                                                        <div className="w-8 h-5 bg-red-500 rounded flex items-center justify-center">
                                                            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                                            <div className="w-3 h-3 bg-orange-400 rounded-full -ml-1"></div>
                                                        </div>
                                                        <div className="w-8 h-5 bg-blue-500 rounded text-white text-xs flex items-center justify-center font-bold">
                                                            AE
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Expiration Date */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Expiration Date
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="MM/YY"
                                                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            </div>

                                            {/* Security Code */}
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Security Code
                                                </label>
                                                <input
                                                    type="text"
                                                    placeholder="CVC"
                                                    className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Direct Bank Transfer */}
                                <div className="border border-gray-300 rounded-lg p-4">
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            id="bank-transfer"
                                            name="payment"
                                            value="bank-transfer"
                                            checked={selectedPayment === 'bank-transfer'}
                                            onChange={(e) => setSelectedPayment(e.target.value)}
                                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                        />
                                        <label htmlFor="bank-transfer" className="ml-3 text-gray-800 font-medium">
                                            Direct Bank Transfer
                                        </label>
                                    </div>
                                </div>

                                {/* PayPal */}
                                <div className="border border-gray-300 rounded-lg p-4">
                                    <div className="flex items-center">
                                        <input
                                            type="radio"
                                            id="paypal"
                                            name="payment"
                                            value="paypal"
                                            // checked={selectedPayment === 'paypal'}
                                            // onChange={(e) => setSelectedPayment(e.target.value)}
                                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                                        />
                                        <label htmlFor="paypal" className="ml-3 text-gray-800 font-medium flex items-center">
                                            Paypal
                                            <div className="ml-2 text-blue-600 font-bold text-sm">P</div>
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Privacy Policy Text */}
                            <div className="text-sm text-gray-600 mb-6 leading-relaxed">
                                Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our{' '}
                                <a href="#" className="text-blue-600 underline hover:text-blue-800">
                                    Privacy Policy
                                </a>
                                .
                            </div>

                            {/* Place Order Button */}
                            <button
                                onClick={() => {
                                    setCurrentStep(3)
                                    window.scrollTo({
                                        top: 0,
                                        behavior: 'smooth'
                                    })
                                }}
                                className="w-full bg-blue-700 text-white py-4 rounded-full font-medium hover:bg-blue-800 text-lg transition-colors">
                                Place Order
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
}