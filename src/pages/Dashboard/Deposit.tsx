import React from 'react'
import { Copy } from 'lucide-react'

const Deposit: React.FC = () => {
  const walletAddress = 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh'

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress)
    // You can add a toast notification here
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Deposit Funds</h1>
      <div className="bg-brand-gray p-8 rounded-lg max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold text-white mb-4">Deposit via Cryptocurrency</h2>
        <p className="text-brand-gray-text mb-6">
          To fund your account, please send the desired amount of BTC, ETH, or USDT (ERC20) to the address below. Your account will be credited automatically after network confirmation.
        </p>
        
        <div className="bg-brand-dark p-6 rounded-lg text-center">
          <p className="text-sm text-brand-gray-text mb-2">Your Deposit Address:</p>
          <div className="relative">
            <input
              type="text"
              readOnly
              value={walletAddress}
              className="w-full bg-brand-gray-light border border-brand-gray-light rounded-md py-3 px-4 text-white text-center font-mono pr-10"
            />
            <button
              onClick={handleCopy}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-gray-text hover:text-white"
            >
              <Copy className="w-5 h-5" />
            </button>
          </div>
          <div className="mt-4">
            {/* Placeholder for QR Code */}
            <div className="w-40 h-40 bg-white mx-auto rounded-lg flex items-center justify-center">
              <p className="text-brand-dark text-sm">QR Code</p>
            </div>
          </div>
        </div>

        <div className="mt-6 text-xs text-brand-gray-text text-center">
          <p><strong>Important:</strong> Only send BTC, ETH, or USDT (ERC20) to this address. Sending any other currency may result in the permanent loss of your deposit.</p>
        </div>
      </div>
    </div>
  )
}

export default Deposit
