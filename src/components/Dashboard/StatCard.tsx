import React from 'react'
import { LucideProps } from 'lucide-react'

interface StatCardProps {
  title: string
  value: number
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
  color: 'blue' | 'green' | 'gold' | 'red'
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon: Icon, color }) => {
  const colorClasses = {
    blue: 'text-brand-blue bg-brand-blue/10',
    green: 'text-brand-green bg-brand-green/10',
    gold: 'text-brand-gold bg-brand-gold/10',
    red: 'text-brand-red bg-brand-red/10',
  }

  return (
    <div className="bg-brand-gray p-6 rounded-lg">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-medium text-brand-gray-text">{title}</p>
        <div className={`p-2 rounded-full ${colorClasses[color]}`}>
          <Icon className="w-5 h-5" />
        </div>
      </div>
      <p className="text-3xl font-bold text-white">
        ${value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
      </p>
    </div>
  )
}

export default StatCard
