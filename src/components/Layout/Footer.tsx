import React from 'react'
import { Link } from 'react-router-dom'
import { Mail, BarChart2, ShieldCheck, Zap, Server } from 'lucide-react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-gray border-t border-brand-gray-light text-brand-gray-text">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <BarChart2 className="w-8 h-8 text-brand-blue" />
              <span className="text-xl font-bold text-white">QuantumTrade</span>
            </div>
            <p className="mb-4">
              A leading platform for secure and profitable digital asset trading.
            </p>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>support@quantumtrade.app</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/investment-plans" className="hover:text-white transition-colors">Investment Plans</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/aml" className="hover:text-white transition-colors">AML Policy</Link></li>
            </ul>
          </div>

          {/* Platform Features */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Platform Features</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-5 h-5 text-brand-green" />
                <span>Bank-Grade Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-brand-blue" />
                <span>Instant Withdrawals</span>
              </div>
              <div className="flex items-center space-x-2">
                <Server className="w-5 h-5 text-brand-gold-light" />
                <span>99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-brand-gray-light mt-8 pt-8 text-center">
          <p>
            © 2025 QuantumTrade. All rights reserved. 
          </p>
          <p className="text-xs mt-2">
            Trading digital assets involves significant risk and may not be suitable for all investors.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
