import { ImageCover } from "@/components/ImageCover";
import PrivacyPolicyImage from "@/assets/images/Privacy_Policy.jpg";

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-[#f9f9f9]">
            <ImageCover
                imageUrl={PrivacyPolicyImage}
                title="Privacy Policy"
                objectPosition="object-bottom"
            />
            <div className="bg-white shadow-md p-8 px-20 mt-[-60px] relative z-10">
                <p className="font-semibold mb-2">Effective Date: 09/01/2025</p>
                <p className="mb-6">
                    Hegai Cakes values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website.
                </p>
                <h2 className="font-bold mb-2">1. Information We Collect</h2>
                <ul className="list-disc ml-6 mb-4">
                    <li>Personal Information: Name, email address, phone number, and other details provided through forms or purchases.</li>
                    <li>Automatically Collected Information: IP address, browser type, and browsing behavior using cookies and similar technologies.</li>
                </ul>
                <h2 className="font-bold mb-2">2. How We Use Your Information</h2>
                <ul className="list-disc ml-6 mb-4">
                    <li>To comply with legal requirements.</li>
                    <li>To process orders and deliver products.</li>
                    <li>To improve your experience on our website.</li>
                    <li>To send promotional materials, with your consent.</li>
                </ul>
                <h2 className="font-bold mb-2">3. Sharing Your Information</h2>
                <p className="mb-2">We do not sell or share your personal information with third parties, except:</p>
                <ul className="list-disc ml-6 mb-4">
                    <li>With trusted partners to fulfill your orders.</li>
                    <li>When required by law or to protect our rights.</li>
                </ul>
                <h2 className="font-bold mb-2">4. Data Security</h2>
                <p className="mb-4">We implement robust measures to protect your data from unauthorized access, alteration, or loss.</p>
                <h2 className="font-bold mb-2">5. Your Rights</h2>
                <p className="mb-2">You have the right to:</p>
                <ul className="list-disc ml-6 mb-4">
                    <li>Access and update your personal information.</li>
                    <li>Opt out of marketing communications.</li>
                    <li>Request deletion of your data, where applicable.</li>
                </ul>
                <h2 className="font-bold mb-2">6. Cookies</h2>
                <p className="mb-4">We use cookies to enhance your browsing experience. You can disable cookies in your browser settings, but some features may not function properly.</p>
                <h2 className="font-bold mb-2">7. Contact Us</h2>
                <p>
                    For questions about this Privacy Policy or your data, contact us at: <a href="mailto:occasions@hegaicakes.com" className="text-blue-700 underline">occasions@hegaicakes.com</a>
                </p>
            </div>
        </div>
    );
}
