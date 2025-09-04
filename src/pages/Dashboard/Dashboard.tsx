import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import { DollarSign, TrendingUp, Download, Upload } from 'lucide-react'
import StatCard from '../../components/Dashboard/StatCard'
import ReferralCard from '../../components/Dashboard/ReferralCard'
import ActivityFeed from '../../components/Dashboard/ActivityFeed'
import { Link } from 'react-router-dom'
import { faker } from '@faker-js/faker'

// Define the activity type to match the component's expectation
type ActivityType = 'DEPOSIT' | 'PROFIT' | 'WITHDRAWAL' | 'BONUS';

const Dashboard: React.FC = () => {
  const { user } = useAuth()

  const stats = [
    {
      title: 'Account Balance',
      value: 12530.75,
      icon: DollarSign,
      color: 'blue',
    },
    {
      title: 'Total Profit',
      value: 4850.25,
      icon: TrendingUp,
      color: 'green',
    },
    {
      title: 'Total Deposits',
      value: 10000.00,
      icon: Download,
      color: 'gold',
    },
    {
      title: 'Total Withdrawals',
      value: 2319.50,
      icon: Upload,
      color: 'red',
    },
  ]

  const activities = Array.from({ length: 5 }, () => ({
    id: faker.string.uuid(),
    type: faker.helpers.arrayElement(['DEPOSIT', 'PROFIT', 'WITHDRAWAL', 'BONUS'] as ActivityType[]),
    description: faker.finance.transactionDescription(),
    amount: parseFloat(faker.finance.amount({ min: 50, max: 1000, dec: 2 })),
    timestamp: faker.date.recent(),
  }))

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Welcome back, {user?.user_metadata?.full_name || 'User'}!</h1>
        <p className="text-brand-gray-text mt-1">Here's your account overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link to="/dashboard/deposit" className="bg-brand-blue text-white text-center font-semibold py-4 px-6 rounded-lg hover:bg-brand-blue-light transition-colors flex items-center justify-center space-x-2">
          <Download className="w-5 h-5" />
          <span>Deposit Funds</span>
        </Link>
        <Link to="/dashboard/withdraw" className="bg-brand-gray-light text-white text-center font-semibold py-4 px-6 rounded-lg hover:bg-brand-gray transition-colors flex items-center justify-center space-x-2">
          <Upload className="w-5 h-5" />
          <span>Withdraw Funds</span>
        </Link>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <ActivityFeed activities={activities} />
        </div>
        <div>
          <ReferralCard referralLink={`https://quantumtrade.app/register?ref=${user?.id.slice(0, 8)}`} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
