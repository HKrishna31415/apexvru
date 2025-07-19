
import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert prose-lg">
        <h1 className="text-4xl font-extrabold text-white tracking-tight">Terms of Service</h1>
        <p className="text-white text-lg">Last updated: October 26, 2024</p>

        <p className="text-white">Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the apexenergy.inc website (the "Service") operated by APEX Energy Inc. ("us", "we", or "our").</p>
        <p className="text-white">Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.</p>
        <p className="text-white">By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.</p>

        <h2 className="mt-8 text-2xl font-bold text-white">Intellectual Property</h2>
        <p className="text-white">The Service and its original content, features, and functionality are and will remain the exclusive property of APEX Energy Inc. and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of APEX Energy Inc.</p>

        <h2 className="mt-8 text-2xl font-bold text-white">Confidential Information</h2>
        <p className="text-white">The documents and information contained within the "Investor Document Portal" section of this Service are confidential and intended solely for the use of qualified investors who have entered into a Non-Disclosure Agreement (NDA) with APEX Energy Inc. Any unauthorized review, use, disclosure, or distribution is prohibited.</p>

        <h2 className="mt-8 text-2xl font-bold text-white">Disclaimer</h2>
        <p className="text-white">The information provided on this Service is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities. Any such offer or solicitation will be made only by means of a definitive private placement memorandum and in accordance with the terms of all applicable securities and other laws.</p>
        
        <h2 className="mt-8 text-2xl font-bold text-white">Limitation of Liability</h2>
        <p className="text-white">In no event shall APEX Energy Inc., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>
        
        <h2 className="mt-8 text-2xl font-bold text-white">Governing Law</h2>
        <p className="text-white">These Terms shall be governed and construed in accordance with the laws of the State of Delaware, United States, without regard to its conflict of law provisions.</p>
        
        <h2 className="mt-8 text-2xl font-bold text-white">Contact Us</h2>
        <p className="text-white">If you have any questions about these Terms, please contact us at <a href="mailto:legal@apexenergy.inc" className="text-brand-blue-400 hover:text-brand-blue-300">legal@apexenergy.inc</a>.</p>
      </div>
    </div>
  );
};

export default Terms;
