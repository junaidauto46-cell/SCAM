import React from 'react'

const Privacy: React.FC = () => {
  return (
    <div className="bg-brand-dark text-white min-h-screen">
      <section className="bg-brand-gray py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-xl lg:text-2xl text-brand-gray-text max-w-3xl mx-auto">
            Last Updated: July 26, 2025
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert prose-lg">
          <h2>1. Information We Collect</h2>
          <p>
            We collect information you provide directly to us, such as when you create an account, deposit funds, or contact us for support. This may include your name, email address, and other identifying information.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>
            We use the information we collect to operate, maintain, and provide you with the features and functionality of our service, as well as to communicate with you, such as to send you service-related emails.
          </p>

          <h2>3. Information Sharing</h2>
          <p>
            We do not sell or rent your personal information to third parties. We may share your information with third-party vendors and service providers that perform services on our behalf, but we will ensure they are bound by confidentiality obligations.
          </p>
          
          <h2>4. Data Security</h2>
          <p>
            We use a variety of security measures to protect your information, including encryption and authentication tools.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Privacy
