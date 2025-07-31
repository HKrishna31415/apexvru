import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="relative bg-gray-800 py-20 md:py-32 bg-cover bg-center" style={{ backgroundImage: 'url(/images/contact-hero.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-6 text-center z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Contact Us</h1>
          <p className="mt-4 text-lg md:text-xl text-gray-200">We're here to help and answer any question you might have.</p>
        </div>
      </div>

      {/* Contact Form and Info Section */}
      <div className="container mx-auto px-6 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
            <form>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                <input type="text" id="name" className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                <input type="email" id="email" className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200" />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                <textarea id="message" rows={5} className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"></textarea>
              </div>
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200">Submit</button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <p><strong className="text-gray-300">Address:</strong> 123 Energy Lane, Houston, TX 77001</p>
              <p><strong className="text-gray-300">Phone:</strong> (123) 456-7890</p>
              <p><strong className="text-gray-300">Email:</strong> contact@apexvru.com</p>
            </div>
            <div className="mt-8">
              <div className="aspect-w-16 aspect-h-9 bg-gray-800 rounded-lg overflow-hidden">
                {/* Embedded Map Placeholder */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3463.623224467922!2d-95.36980258489259!3d29.76042698198658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b8b45183c5c5%3A0x8b9c3e7a3c2b0e8!2sHouston%2C%20TX!5e0!3m2!1sen!2sus!4v1635276898019!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;