import React, { useState } from 'react'
import { Copy, Check, Gift } from 'lucide-react'

interface ReferralCardProps {
  referralLink: string
}

const ReferralCard: React.FC<ReferralCardProps> = ({ referralLink }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-brand-gray p-6 rounded-lg h-full flex flex-col">
      <div className="flex items-center space-x-3 mb-4">
        <Gift className="w-6 h-6 text-brand-gold" />
        <h3 className="text-lg font-semibold text-white">Refer & Earn</h3>
      </div>
      <p className="text-brand-gray-text text-sm mb-4">
        Share your referral link with friends and earn a bonus on their first deposit.
      </p>
      <div className="relative mt-auto">
        <input
          type="text"
          readOnly
          value={referralLink}
          className="w-full bg-brand-gray-light border border-brand-gray-light rounded-md py-2 px-3 text-white text-sm pr-10"
        />
        <button
          onClick={handleCopy}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-brand-gray-text hover:text-white"
        >
          {copied ? <Check className="w-4 h-4 text-brand-green" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>
    </div>
  )
}

export default ReferralCard
