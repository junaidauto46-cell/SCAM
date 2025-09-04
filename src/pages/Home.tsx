import React from 'react'
import { Link } from 'react-router-dom'
import { DollarSign, Users, TrendingUp, ShieldCheck, Zap, Server, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { faker } from '@faker-js/faker'
import { InvestmentPlan, Transaction, Testimonial } from '../types'
import InvestmentPlanCard from '../components/Trading/InvestmentPlanCard'
import ProfitCalculator from '../components/Trading/ProfitCalculator'
import StatsCounter from '../components/Trading/StatsCounter'
import TransactionTable from '../components/Trading/TransactionTable'

const Home: React.FC = () => {

  const featuredPlans: InvestmentPlan[] = [
    {
      id: '1',
      name: 'Starter Plan',
      daily_return: 1.5,
      duration_days: 30,
      min_deposit: 100,
      max_deposit: 999,
      is_featured: false,
      description: 'Perfect for beginners to get started with minimal risk.'
    },
    {
      id: '2',
      name: 'Advanced Plan',
      daily_return: 2.5,
      duration_days: 45,
      min_deposit: 1000,
      max_deposit: 9999,
      is_featured: true,
      description: 'Optimized for serious investors aiming for higher returns.'
    },
    {
      id: '3',
      name: 'Professional Plan',
      daily_return: 3.5,
      duration_days: 60,
      min_deposit: 10000,
      max_deposit: 100000,
      is_featured: false,
      description: 'Maximum returns for professional and institutional traders.'
    }
  ]

  const generateTransactions = (count: number, type: 'deposit' | 'withdrawal'): Transaction[] => {
    return Array.from({ length: count }, () => ({
      id: faker.string.uuid(),
      user_name: faker.internet.displayName().slice(0, 8),
      amount: parseFloat(faker.finance.amount({min: type === 'deposit' ? 500 : 200, max: 5000, dec: 2})),
      type,
      timestamp: faker.date.recent(),
      currency: faker.helpers.arrayElement(['BTC', 'ETH', 'USDT'])
    }))
  }

  const lastDeposits = generateTransactions(5, 'deposit')
  const lastWithdrawals = generateTransactions(5, 'withdrawal')

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Jessica M.',
      avatar: faker.image.avatarGitHub(),
      location: 'San Francisco, USA',
      text: 'QuantumTrade has been a game-changer for my investment portfolio. The platform is intuitive and the returns are consistent.',
      rating: 5
    },
    {
      id: '2',
      name: 'David L.',
      avatar: faker.image.avatarGitHub(),
      location: 'London, UK',
      text: 'The support team is incredibly responsive and helpful. I feel secure knowing my investments are in good hands.',
      rating: 5
    },
    {
      id: '3',
      name: 'Kenji T.',
      avatar: faker.image.avatarGitHub(),
      location: 'Tokyo, Japan',
      text: 'I started with the Starter Plan and have already seen impressive growth. Highly recommended for anyone new to trading.',
      rating: 5
    }
  ]

  const whyChooseUs = [
    { icon: ShieldCheck, title: 'Top-Tier Security', description: 'Your funds are protected by industry-leading security protocols.' },
    { icon: Zap, title: 'Instant Withdrawals', description: 'Access your profits instantly, anytime you want.' },
    { icon: Server, title: 'Robust Infrastructure', description: 'Our platform ensures 99.9% uptime and lightning-fast execution.' }
  ]

  return (
    <div className="bg-brand-dark text-white">
      {/* Hero Section */}
      <section className="relative bg-brand-gray py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-6xl font-extrabold mb-6 tracking-tight"
          >
            Unlock Your Financial Potential
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl lg:text-2xl mb-10 text-brand-gray-text max-w-3xl mx-auto"
          >
            Join QuantumTrade and leverage our advanced trading technology to achieve your investment goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/register"
              className="bg-brand-blue text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-brand-blue-light transition-transform hover:scale-105"
            >
              Get Started Now
            </Link>
            <Link
              to="/investment-plans"
              className="bg-brand-gray-light text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-80 transition-transform hover:scale-105"
            >
              View Plans
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-brand-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <StatsCounter icon={DollarSign} end={125.7} suffix="M" label="Total Invested" decimals={1} />
            <StatsCounter icon={Users} end={42500} label="Happy Investors" />
            <StatsCounter icon={TrendingUp} end={45.2} suffix="M" label="Total Withdrawn" decimals={1} />
            <StatsCounter icon={DollarSign} end={1800} prefix="$" label="Avg. Daily Profit" />
          </div>
        </div>
      </section>

      {/* Investment Plans Section */}
      <section className="py-16 lg:py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Investment Plans</h2>
            <p className="text-lg text-brand-gray-text max-w-2xl mx-auto">Choose a plan that fits your financial goals. All plans include 24/7 support and daily profit withdrawals.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPlans.map((plan, index) => (
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
      
      {/* Profit Calculator Section */}
      <section className="py-16 lg:py-24 bg-brand-dark">
        <ProfitCalculator plans={featuredPlans} />
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 lg:py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why QuantumTrade?</h2>
            <p className="text-lg text-brand-gray-text">We provide a secure, reliable, and powerful trading environment.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {whyChooseUs.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-brand-gray-light p-8 rounded-lg"
              >
                <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-brand-gray-text">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Transactions Section */}
      <section className="py-16 lg:py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Live Market Activity</h2>
            <p className="text-lg text-brand-gray-text">See the latest deposits and withdrawals from our global community.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <TransactionTable title="Latest Deposits" transactions={lastDeposits} />
            <TransactionTable title="Latest Withdrawals" transactions={lastWithdrawals} />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Investors Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-brand-gray-light p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-brand-gray-text">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-brand-gold fill-current" />
                  ))}
                </div>
                <p className="text-brand-gray-text">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
