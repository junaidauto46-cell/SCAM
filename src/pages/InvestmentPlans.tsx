import React from 'react'
import { motion } from 'framer-motion'
import { InvestmentPlan } from '../types'
import InvestmentPlanCard from '../components/Trading/InvestmentPlanCard'

const InvestmentPlans: React.FC = () => {
  const allPlans: InvestmentPlan[] = [
    {
      id: '1',
      name: 'Starter Plan',
      daily_return: 1.5,
      duration_days: 30,
      min_deposit: 100,
      max_deposit: 999,
      is_featured: false,
      description: 'Perfect for beginners to get started with minimal risk and steady returns.'
    },
    {
      id: '2',
      name: 'Advanced Plan',
      daily_return: 2.5,
      duration_days: 45,
      min_deposit: 1000,
      max_deposit: 9999,
      is_featured: true,
      description: 'Optimized for serious investors aiming for higher returns and more features.'
    },
    {
      id: '3',
      name: 'Professional Plan',
      daily_return: 3.5,
      duration_days: 60,
      min_deposit: 10000,
      max_deposit: 100000,
      is_featured: false,
      description: 'Maximum returns for professional and institutional traders with large capital.'
    },
    {
      id: '4',
      name: 'Explorer Plan',
      daily_return: 1.8,
      duration_days: 20,
      min_deposit: 500,
      max_deposit: 2499,
      is_featured: false,
      description: 'A short-term plan for those looking to explore the platform\'s potential.'
    },
    {
      id: '5',
      name: 'Visionary Plan',
      daily_return: 4.0,
      duration_days: 90,
      min_deposit: 25000,
      max_deposit: 250000,
      is_featured: false,
      description: 'Long-term strategic plan for visionary investors seeking substantial growth.'
    },
    {
      id: '6',
      name: 'Enterprise Plan',
      daily_return: 5.0,
      duration_days: 120,
      min_deposit: 100000,
      max_deposit: 1000000,
      is_featured: false,
      description: 'Custom-tailored solutions for enterprise-level investments and partnerships.'
    }
  ]

  return (
    <div className="bg-brand-dark text-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-brand-gray py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Investment Plans</h1>
          <p className="text-xl lg:text-2xl text-brand-gray-text max-w-3xl mx-auto">
            Find the perfect plan to match your investment strategy and financial goals.
          </p>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allPlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <InvestmentPlanCard plan={plan} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default InvestmentPlans
