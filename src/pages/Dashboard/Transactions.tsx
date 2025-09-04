import React from 'react'
import { faker } from '@faker-js/faker'
import { Download, TrendingUp, Upload, Award } from 'lucide-react'

const Transactions: React.FC = () => {
  const transactions = Array.from({ length: 20 }, () => ({
    id: faker.string.uuid(),
    type: faker.helpers.arrayElement(['DEPOSIT', 'PROFIT', 'WITHDRAWAL', 'BONUS']),
    amount: parseFloat(faker.finance.amount({ min: 50, max: 1000, dec: 2 })),
    timestamp: faker.date.recent(30),
    status: faker.helpers.arrayElement(['Completed', 'Pending', 'Failed']),
  }))

  const getIcon = (type: string) => {
    switch (type) {
      case 'DEPOSIT': return <Download className="w-5 h-5 text-brand-blue" />;
      case 'PROFIT': return <TrendingUp className="w-5 h-5 text-brand-green" />;
      case 'WITHDRAWAL': return <Upload className="w-5 h-5 text-brand-red" />;
      case 'BONUS': return <Award className="w-5 h-5 text-brand-gold" />;
      default: return null;
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Transaction History</h1>
      <div className="bg-brand-gray p-8 rounded-lg">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-brand-gray-light">
                <th className="p-4 text-sm font-semibold text-brand-gray-text">Type</th>
                <th className="p-4 text-sm font-semibold text-brand-gray-text">Amount</th>
                <th className="p-4 text-sm font-semibold text-brand-gray-text">Date</th>
                <th className="p-4 text-sm font-semibold text-brand-gray-text">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map(tx => (
                <tr key={tx.id} className="border-b border-brand-gray-light last:border-b-0">
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      {getIcon(tx.type)}
                      <span className="text-white font-medium capitalize">{tx.type.toLowerCase()}</span>
                    </div>
                  </td>
                  <td className={`p-4 font-semibold ${tx.type === 'WITHDRAWAL' ? 'text-brand-red' : 'text-brand-green'}`}>
                    {tx.type === 'WITHDRAWAL' ? '-' : '+'}${tx.amount.toFixed(2)}
                  </td>
                  <td className="p-4 text-brand-gray-text">{tx.timestamp.toLocaleString()}</td>
                  <td className="p-4">
                    <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                      tx.status === 'Completed' ? 'bg-brand-green/20 text-brand-green' :
                      tx.status === 'Pending' ? 'bg-brand-gold/20 text-brand-gold' :
                      'bg-brand-red/20 text-brand-red'
                    }`}>
                      {tx.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Transactions
