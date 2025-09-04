import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { InvestmentPlan } from '../../types'
import { TrendingUp, Calendar, DollarSign, CheckCircle } from 'lucide-react'

interface InvestmentPlanCardProps {
  plan: InvestmentPlan
}

const InvestmentPlanCard: React.FC<InvestmentPlanCardProps> = ({ plan }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={`relative bg-brand-gray-light p-8 rounded-lg border-2 ${
        plan.is_featured ? 'border-brand-gold' : 'border-brand-gray'
      } flex flex-col h-full`}
    >
      {plan.is_featured && (
        <div className="absolute top-0 right-0 bg-brand-gold text-brand-dark text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-md">
          Most Popular
        </div>
      )}

      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
      <p className="text-brand-gray-text mb-6 flex-grow">{plan.description}</p>
      
      <div className="text-center my-6">
        <span className="text-5xl font-extrabold text-brand-blue">{plan.daily_return}%</span>
        <span className="text-lg text-brand-gray-text ml-2">Daily Return</span>
      </div>

      <ul className="space-y-4 mb-8">
        <li className="flex items-center space-x-3">
          <Calendar className="w-5 h-5 text-brand-gold" />
          <span className="text-brand-gray-text">Duration: <span className="font-semibold text-white">{plan.duration_days} Days</span></span>
        </li>
        <li className="flex items-center space-x-3">
          <DollarSign className="w-5 h-5 text-brand-green" />
          <span className="text-brand-gray-text">Min Deposit: <span className="font-semibold text-white">${plan.min_deposit.toLocaleString()}</span></span>
        </li>
        <li className="flex items-center space-x-3">
          <DollarSign className="w-5 h-5 text-brand-green" />
          <span className="text-brand-gray-text">Max Deposit: <span className="font-semibold text-white">${plan.max_deposit.toLocaleString()}</span></span>
        </li>
      </ul>

      <Link
        to="/register"
        className={`w-full text-center py-3 rounded-lg font-semibold transition-colors ${
          plan.is_featured
            ? 'bg-brand-gold text-brand-dark hover:bg-brand-gold-light'
            : 'bg-brand-blue text-white hover:bg-brand-blue-light'
        }`}
      >
        Choose Plan
      </Link>
    </motion.div>
  )
}

export default InvestmentPlanCard
