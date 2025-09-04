export interface User {
  id: string
  email: string
  full_name: string
  phone?: string
  created_at: string
}

export interface InvestmentPlan {
  id: string
  name: string
  daily_return: number
  duration_days: number
  min_deposit: number
  max_deposit: number
  is_featured?: boolean
  description: string
}

export interface Transaction {
  id: string
  user_name: string
  amount: number
  type: 'deposit' | 'withdrawal'
  timestamp: Date
  currency: 'BTC' | 'ETH' | 'USDT'
}

export interface Testimonial {
  id: string
  name: string
  avatar: string
  location: string
  text: string
  rating: number
}

export interface FAQItem {
  id: string
  question: string
  answer: string
}
