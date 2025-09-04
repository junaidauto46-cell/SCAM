import React from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const Contact: React.FC = () => {
  return (
    <div className="bg-brand-dark text-white min-h-screen">
      <section className="bg-brand-gray py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl lg:text-2xl text-brand-gray-text max-w-3xl mx-auto">
            We're here to help. Reach out to us with any questions or inquiries.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-brand-gray p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-brand-gray-text">Full Name</label>
                  <input type="text" id="name" name="name" required className="mt-1 block w-full bg-brand-gray-light border border-brand-gray-light rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-gray-text">Email</label>
                  <input type="email" id="email" name="email" required className="mt-1 block w-full bg-brand-gray-light border border-brand-gray-light rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-gray-text">Message</label>
                  <textarea id="message" name="message" rows={4} required className="mt-1 block w-full bg-brand-gray-light border border-brand-gray-light rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue"></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-blue text-white py-3 rounded-lg font-semibold hover:bg-brand-blue-light transition-colors">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-brand-blue/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Email</h3>
                  <p className="text-brand-gray-text">For general inquiries and support</p>
                  <a href="mailto:support@quantumtrade.app" className="text-brand-blue hover:underline">support@quantumtrade.app</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-brand-blue/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Phone</h3>
                  <p className="text-brand-gray-text">For urgent matters (Mon-Fri, 9am-5pm UTC)</p>
                  <a href="tel:+1234567890" className="text-brand-blue hover:underline">+1 (234) 567-890</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-brand-blue/10 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Our Office</h3>
                  <p className="text-brand-gray-text">123 Fintech Avenue, Suite 100<br/>Innovation City, 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
