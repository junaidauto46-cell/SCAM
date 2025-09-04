import React from 'react'
import { motion } from 'framer-motion'
import { Transaction } from '../../types'
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react'

interface TransactionTableProps {
  title: string
  transactions: Transaction[]
}

const TransactionTable: React.FC<TransactionTableProps> = ({ title, transactions }) => {
  const formatTimeAgo = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000)
    let interval = seconds / 31536000
    if (interval > 1) return Math.floor(interval) + " years ago"
    interval = seconds / 2592000
    if (interval > 1) return Math.floor(interval) + " months ago"
    interval = seconds / 86400
    if (interval > 1) return Math.floor(interval) + " days ago"
    interval = seconds / 3600
    if (interval > 1) return Math.floor(interval) + " hours ago"
    interval = seconds / 60
    if (interval > 1) return Math.floor(interval) + " minutes ago"
    return Math.floor(seconds) + " seconds ago"
  }

  return (
    <div className="bg-brand-gray p-6 rounded-lg">
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <div className="space-y-3">
        {transactions.map((tx, index) => (
          <motion.div
            key={tx.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-center justify-between bg-brand-gray-light p-3 rounded-md"
          >
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-full ${tx.type === 'deposit' ? 'bg-brand-green/20' : 'bg-brand-red/20'}`}>
                {tx.type === 'deposit' 
                  ? <ArrowDownLeft className="w-5 h-5 text-brand-green" /> 
                  : <ArrowUpRight className="w-5 h-5 text-brand-red" />}
              </div>
              <div>
                <p className="font-medium text-white">{tx.user_name}</p>
                <p className="text-xs text-brand-gray-text">{formatTimeAgo(tx.timestamp)}</p>
              </div>
            </div>
            <div className="text-right">
              <p className={`font-semibold ${tx.type === 'deposit' ? 'text-brand-green' : 'text-brand-red'}`}>
                ${tx.amount.toLocaleString()}
              </p>
              <p className="text-xs text-brand-gray-text">{tx.currency}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default TransactionTable
