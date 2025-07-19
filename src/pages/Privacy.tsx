
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="py-16 sm:py-24 bg-black">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert prose-lg">
        <h1 className="text-4xl font-extrabold text-white tracking-tight">Privacy Policy</h1>
        <p className="text-white text-lg">Last updated: October 26, 2024</p>
        
        <p className="text-white">APEX Energy Inc. ("us", "we", or "our") operates the apexenergy.inc website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>

        <h2 className="mt-8 text-2xl font-bold text-white">Information Collection and Use</h2>
        <p className="text-white">We do not collect any personally identifiable information from visitors to our public-facing investor relations website. Your use of this informational site is anonymous.</p>
        
        <h3 className="mt-6 text-xl font-semibold text-white">Log Data</h3>
        <p className="text-white">We may collect information that your browser sends whenever you visit our Service ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics. This data is used for analytical purposes to improve the website and is not linked to any personal information.</p>

        <h2 className="mt-8 text-2xl font-bold text-white">Use of Cookies</h2>
        <p className="text-white">We do not use cookies for tracking purposes. Cookies may be used only to maintain session information for secure areas of the site, which are not publicly accessible.</p>

        <h2 className="mt-8 text-2xl font-bold text-white">Service Providers</h2>
        <p className="text-white">We may employ third-party companies and individuals to facilitate our Service ("Service Providers"), to provide the Service on our behalf, to perform Service-related services, or to assist us in analyzing how our Service is used. These third parties have access to your Log Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>
        
        <h2 className="mt-8 text-2xl font-bold text-white">Changes to This Privacy Policy</h2>
        <p className="text-white">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>

        <h2 className="mt-8 text-2xl font-bold text-white">Contact Us</h2>
        <p className="text-white">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:legal@apexenergy.inc" className="text-brand-blue-400 hover:text-brand-blue-300">legal@apexenergy.inc</a>.</p>
      </div>
    </div>
  );
};

export default Privacy;
