import React from 'react'
import { DollarSign, TrendingUp, Download, Upload, Award } from 'lucide-react'

interface Activity {
  id: string
  type: 'DEPOSIT' | 'PROFIT' | 'WITHDRAWAL' | 'BONUS'
  description: string
  amount: number
  timestamp: Date
}

interface ActivityFeedProps {
  activities: Activity[]
}

const ActivityIcon: React.FC<{ type: Activity['type'] }> = ({ type }) => {
  switch (type) {
    case 'DEPOSIT':
      return <Download className="w-5 h-5 text-brand-blue" />
    case 'PROFIT':
      return <TrendingUp className="w-5 h-5 text-brand-green" />
    case 'WITHDRAWAL':
      return <Upload className="w-5 h-5 text-brand-red" />
    case 'BONUS':
      return <Award className="w-5 h-5 text-brand-gold" />
    default:
      return <DollarSign className="w-5 h-5 text-brand-gray-text" />
  }
}

const ActivityFeed: React.FC<ActivityFeedProps> = ({ activities }) => {
  const formatTimeAgo = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    let interval = seconds / 60;
    if (interval < 60) return Math.floor(interval) + "m ago";
    interval = seconds / 3600;
    if (interval < 24) return Math.floor(interval) + "h ago";
    return date.toLocaleDateString();
  }

  const getAmountColor = (type: Activity['type']) => {
    switch (type) {
      case 'DEPOSIT':
      case 'PROFIT':
      case 'BONUS':
        return 'text-brand-green'
      case 'WITHDRAWAL':
        return 'text-brand-red'
      default:
        return 'text-white'
    }
  }

  return (
    <div className="bg-brand-gray p-6 rounded-lg">
      <h3 className="text-lg font-semibold text-white mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-brand-gray-light p-3 rounded-full">
                <ActivityIcon type={activity.type} />
              </div>
              <div>
                <p className="font-medium text-white capitalize">{activity.type.toLowerCase()}</p>
                <p className="text-xs text-brand-gray-text">{formatTimeAgo(activity.timestamp)}</p>
              </div>
            </div>
            <p className={`font-semibold ${getAmountColor(activity.type)}`}>
              {activity.type === 'WITHDRAWAL' ? '-' : '+'}${activity.amount.toFixed(2)}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActivityFeed
