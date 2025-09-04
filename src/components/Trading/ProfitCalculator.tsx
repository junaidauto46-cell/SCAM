import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { InvestmentPlan } from '../../types'
import { BarChart } from 'lucide-react'

interface ProfitCalculatorProps {
  plans: InvestmentPlan[]
}

const ProfitCalculator: React.FC<ProfitCalculatorProps> = ({ plans }) => {
  const [selectedPlanId, setSelectedPlanId] = useState<string>(plans.find(p => p.is_featured)?.id || plans[0]?.id || '')
  const [amount, setAmount] = useState<number>(plans.find(p => p.id === selectedPlanId)?.min_deposit || 1000)
  const [result, setResult] = useState({ daily: 0, total: 0, net: 0 })

  useEffect(() => {
    if (selectedPlanId) {
      const selectedPlan = plans.find(p => p.id === selectedPlanId)
      if (selectedPlan) {
        setAmount(selectedPlan.min_deposit)
      }
    }
  }, [selectedPlanId, plans])

  useEffect(() => {
    const plan = plans.find(p => p.id === selectedPlanId)
    if (plan && amount > 0) {
      const dailyProfit = (amount * plan.daily_return) / 100
      const totalProfit = dailyProfit * plan.duration_days
      setResult({
        daily: dailyProfit,
        total: totalProfit + amount,
        net: totalProfit,
      })
    } else {
      setResult({ daily: 0, total: 0, net: 0 })
    }
  }, [amount, selectedPlanId, plans])

  const selectedPlan = plans.find(p => p.id === selectedPlanId);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Form */}
        <div className="bg-brand-gray p-8 rounded-lg">
          <h2 className="text-3xl font-bold text-white mb-6">Profit Calculator</h2>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-brand-gray-text mb-2">Choose Plan</label>
              <select
                value={selectedPlanId}
                onChange={(e) => setSelectedPlanId(e.target.value)}
                className="w-full bg-brand-gray-light border border-brand-gray-light rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                {plans.map(p => <option key={p.id} value={p.id}>{p.name}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-gray-text mb-2">Investment Amount ($)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                min={selectedPlan?.min_deposit}
                max={selectedPlan?.max_deposit}
                className="w-full bg-brand-gray-light border border-brand-gray-light rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
              {selectedPlan && (
                <p className="text-xs text-brand-gray-text mt-1">
                  Min: ${selectedPlan.min_deposit.toLocaleString()}, Max: ${selectedPlan.max_deposit.toLocaleString()}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="text-center lg:text-left">
          <BarChart className="w-12 h-12 text-brand-blue mb-4 mx-auto lg:mx-0" />
          <h3 className="text-2xl font-bold text-white mb-4">Projected Earnings</h3>
          <div className="space-y-4">
            <div className="bg-brand-gray p-4 rounded-lg flex justify-between items-center">
              <span className="text-brand-gray-text">Daily Profit</span>
              <span className="text-2xl font-semibold text-brand-green">${result.daily.toFixed(2)}</span>
            </div>
            <div className="bg-brand-gray p-4 rounded-lg flex justify-between items-center">
              <span className="text-brand-gray-text">Net Profit</span>
              <span className="text-2xl font-semibold text-brand-green">${result.net.toFixed(2)}</span>
            </div>
            <div className="bg-brand-gray p-4 rounded-lg flex justify-between items-center">
              <span className="text-brand-gray-text">Total Return</span>
              <span className="text-2xl font-semibold text-brand-blue">${result.total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfitCalculator
