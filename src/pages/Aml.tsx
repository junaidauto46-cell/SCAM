import React from 'react'

const Aml: React.FC = () => {
  return (
    <div className="bg-brand-dark text-white min-h-screen">
      <section className="bg-brand-gray py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Anti-Money Laundering (AML) Policy</h1>
          <p className="text-xl lg:text-2xl text-brand-gray-text max-w-3xl mx-auto">
            Last Updated: July 26, 2025
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-invert prose-lg">
          <h2>1. Policy Statement</h2>
          <p>
            QuantumTrade is committed to preventing the use of its platform for money laundering, terrorist financing, and other illicit activities. We have implemented a comprehensive Anti-Money Laundering (AML) and Counter-Terrorist Financing (CTF) program.
          </p>

          <h2>2. Customer Due Diligence (CDD)</h2>
          <p>
            We perform Customer Due Diligence to verify the identity of our users. This may require you to provide government-issued identification and other documents. We reserve the right to refuse or terminate accounts that do not meet our CDD requirements.
          </p>

          <h2>3. Transaction Monitoring</h2>
          <p>
            We monitor user transactions for suspicious activity. We may request additional information regarding any transaction and reserve the right to block transactions or freeze funds if we suspect illicit activity.
          </p>
          
          <h2>4. Reporting</h2>
          <p>
            We are obligated to report suspicious activities to the relevant financial authorities in accordance with applicable laws and regulations.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Aml
