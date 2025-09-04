import React from 'react'

const Withdraw: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Withdraw Funds</h1>
      <div className="bg-brand-gray p-8 rounded-lg max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold text-white mb-4">Request a Withdrawal</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="amount" className="block text-sm font-medium text-brand-gray-text">Amount (USD)</label>
            <input type="number" id="amount" name="amount" required className="mt-1 block w-full bg-brand-gray-light border border-brand-gray-light rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue" placeholder="0.00" />
            <p className="text-xs text-brand-gray-text mt-1">Available for withdrawal: $12,530.75</p>
          </div>
          <div>
            <label htmlFor="currency" className="block text-sm font-medium text-brand-gray-text">Withdrawal Currency</label>
            <select id="currency" name="currency" className="mt-1 block w-full bg-brand-gray-light border border-brand-gray-light rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue">
              <option>Bitcoin (BTC)</option>
              <option>Ethereum (ETH)</option>
              <option>Tether (USDT - ERC20)</option>
            </select>
          </div>
          <div>
            <label htmlFor="walletAddress" className="block text-sm font-medium text-brand-gray-text">Your Wallet Address</label>
            <input type="text" id="walletAddress" name="walletAddress" required className="mt-1 block w-full bg-brand-gray-light border border-brand-gray-light rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue" placeholder="Enter your wallet address" />
          </div>
          <button type="submit" className="w-full bg-brand-blue text-white py-3 rounded-lg font-semibold hover:bg-brand-blue-light transition-colors">
            Submit Withdrawal Request
          </button>
        </form>
         <div className="mt-6 text-xs text-brand-gray-text">
          <p>Withdrawal requests are processed instantly. A small network fee will be deducted from the withdrawal amount.</p>
        </div>
      </div>
    </div>
  )
}

export default Withdraw
