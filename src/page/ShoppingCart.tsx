import { useState } from 'react';
import { Check } from 'lucide-react';
import { CartPage } from './CartPage';
import { CheckoutPage } from './ChecoutPage';
import { OrderConfirmation } from './OrderConfirmation';

const ShoppingCart = () => {
    const [currentStep, setCurrentStep] = useState(1); // 1 = Cart, 2 = Checkout, 3 = Order Confirmation
    // const [quantity, setQuantity] = useState(1);
    // const [couponCode, setCouponCode] = useState('');

    // const itemPrice = 48.00;
    // const shippingCost = 7.00;
    // const subtotal = itemPrice * quantity;
    // const total = subtotal + shippingCost;

    // const handleQuantityChange = (newQuantity) => {
    //     if (newQuantity > 0) {
    //         setQuantity(newQuantity);
    //     }
    // };

    // const handleRemoveOrder = () => {
    //     console.log('Remove order');
    // };

    // const handleApplyCoupon = () => {
    //     console.log('Apply coupon:', couponCode);
    // };

    // const handleContinueShopping = () => {
    //     console.log('Continue shopping');
    // };

    // const handleProceedToCheckout = () => {
    //     setCurrentStep(2);
    //     console.log('Proceed to checkout');
    // };

    // const handleStripePayment = () => {
    //     setCurrentStep(3);
    //     console.log('Pay with Stripe');
    // };

    // const handlePayPalPayment = () => {
    //     setCurrentStep(3);
    //     console.log('Pay with PayPal');
    // };

    // const handleReturnToHome = () => {
    //     setCurrentStep(1);
    //     console.log('Return to home');
    // };

    // Progress Steps Component
    const ProgressSteps = () => (
        <div className="max-w-4xl mx-auto flex items-center mb-8 mt-6 px-5">
            <div className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${currentStep >= 1 ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                    {currentStep > 1 ? <Check className="w-4 h-4" /> : '1'}
                </div>
                <span className={`ml-2 font-medium ${currentStep === 1 ? 'text-gray-700' : 'text-gray-600'}`}>
                    My Cart
                </span>
                <svg className="w-4 h-4 mx-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>
            <div className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${currentStep >= 2 ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                    {currentStep > 2 ? <Check className="w-4 h-4" /> : '2'}
                </div>
                <span className={`ml-2 font-medium ${currentStep === 2 ? 'text-gray-700' : 'text-gray-600'}`}>
                    Checkout
                </span>
                <svg className="w-4 h-4 mx-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </div>
            <div className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${currentStep >= 3 ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                    {currentStep >= 3 ? <Check className="w-4 h-4" /> : '3'}
                </div>
                <span className={`ml-2 font-medium ${currentStep === 3 ? 'text-gray-700' : 'text-gray-600'}`}>
                    Order
                </span>
            </div>
        </div>
    );


    return (
        <div>
            <ProgressSteps />
            {
                currentStep === 1
                    ? <CartPage setCurrentStep={setCurrentStep} /> : currentStep === 2
                        ? <CheckoutPage setCurrentStep={setCurrentStep} /> : currentStep === 3
                            ? <OrderConfirmation /> : null
            }
        </div>
    )
};

export default ShoppingCart;