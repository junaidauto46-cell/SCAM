import React from 'react'

const Terms: React.FC = () => {
  return (
    <div className="bg-brand-dark text-white min-h-screen">
      <section className="bg-brand-gray py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Terms of Service</h1>
          <p className="text-xl lg:text-2xl text-brand-gray-text max-w-3xl mx-auto">
            Last Updated: July 26, 2025
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert prose-lg">
          <h2>1. Introduction</h2>
          <p>
            Welcome to QuantumTrade. These Terms of Service ("Terms") govern your use of our website and services. By accessing or using our platform, you agree to be bound by these Terms.
          </p>

          <h2>2. Eligibility</h2>
          <p>
            You must be at least 18 years old and have the legal capacity to enter into binding contracts to use our services. You may not use our services if you are located in a jurisdiction where access to our services is prohibited.
          </p>

          <h2>3. Account Registration</h2>
          <p>
            You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.
          </p>

          <h2>4. Risk Disclosure</h2>
          <p>
            Trading digital assets involves significant risk and is not suitable for all investors. The value of digital assets can be volatile, and you may lose all of your invested capital. You should not invest more than you can afford to lose.
          </p>

          <h2>5. Prohibited Activities</h2>
          <p>
            You agree not to engage in any of the following prohibited activities: (a) any form of market manipulation; (b) using the service for any illegal purpose; (c) attempting to gain unauthorized access to our systems or another user's account.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, QuantumTrade shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
          </p>

          <h2>7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will provide notice of any material changes. Your continued use of the service after such changes constitutes your acceptance of the new Terms.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Terms
