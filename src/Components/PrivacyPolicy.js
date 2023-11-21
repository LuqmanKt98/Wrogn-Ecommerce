import React from 'react';
import Footer from './Footer';
import Header from './Header';

const PrivacyPolicy = () => {
  return (<>
  <Header/>
    <div className="container my-5">
      <div className="card shadow">
        <div className="card-body">
          <h1 className="mb-4">Privacy Policy</h1>

          <p>
            Welcome to Wrogn, your go-to destination for trendy and fashionable clothing. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.
          </p>

          <h2 className="mt-4">Information We Collect</h2>

          <p>
            When you visit Wrogn, we may collect various types of information, including:
          </p>

          <ul>
            <li>Your personal details such as name, address, and contact information provided during registration or checkout.</li>
            <li>Payment information when you make a purchase on our platform.</li>
            <li>Device information, IP address, and browser details for analytics and security purposes.</li>
            <li>Information about your interactions with our website, such as pages visited and products viewed.</li>
          </ul>

          <h2 className="mt-4">How We Use Your Information</h2>

          <p>
            We use the collected information for various purposes, including but not limited to:
          </p>

          <ul>
            <li>Processing and fulfilling your orders.</li>
            <li>Improving our website and user experience.</li>
            <li>Customizing our marketing and promotional efforts.</li>
            <li>Preventing fraud and ensuring the security of our platform.</li>
          </ul>

          <h2 className="mt-4">Sharing Your Information</h2>

          <p>
            We do not sell or rent your personal information to third parties. However, we may share your information with trusted partners and service providers who assist us in delivering our services. These third parties are bound by confidentiality agreements and are only authorized to use your information for specified purposes.
          </p>

          <h2 className="mt-4">Security Measures</h2>

          <p>
            Wrogn employs industry-standard security measures to protect your data from unauthorized access, disclosure, or alteration. We use encrypted connections for sensitive information and regularly update our security protocols.
          </p>

          <h2 className="mt-4">Cookies</h2>

          <p>
            We use cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us analyze site traffic and provide personalized content. You can control cookies through your browser settings.
          </p>

          <h2 className="mt-4">Changes to This Policy</h2>

          <p>
            Wrogn reserves the right to update or modify this Privacy Policy at any time. Any changes will be effective immediately upon posting on our website. We encourage you to review this page periodically for the latest information.
          </p>

          <h2 className="mt-4">Contact Us</h2>

          <p>
            If you have any questions or concerns about our Privacy Policy, please contact us at:
            <br />
            Wrogn Clothing Pvt. Ltd.
            <br />
            123 Fashion Street, Cityville, Country
            <br />
            Email: privacy@wrogn.com
          </p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;
