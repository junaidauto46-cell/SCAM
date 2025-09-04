import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { FAQItem } from '../types'

const AccordionItem: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-brand-gray-light">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-6"
      >
        <span className="text-lg font-medium text-white">{item.question}</span>
        {isOpen ? <Minus className="w-6 h-6 text-brand-blue" /> : <Plus className="w-6 h-6 text-brand-gray-text" />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-brand-gray-text">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const FAQ: React.FC = () => {
  const faqItems: FAQItem[] = [
    {
      id: '1',
      question: 'What is QuantumTrade?',
      answer: 'QuantumTrade is a digital asset investment platform that uses advanced algorithms and expert analysis to generate profits for our users. We provide various investment plans to suit different financial goals.'
    },
    {
      id: '2',
      question: 'How do I get started?',
      answer: 'Getting started is simple. Register for an account, complete the verification process, choose an investment plan, and make your first deposit. Our team is available to guide you through the process.'
    },
    {
      id: '3',
      question: 'Is my investment secure?',
      answer: 'Yes, security is our top priority. We use bank-grade encryption, cold storage for the majority of assets, and multi-factor authentication to protect your account and funds.'
    },
    {
      id: '4',
      question: 'How can I withdraw my profits?',
      answer: 'You can request a withdrawal at any time from your dashboard. Withdrawals are processed instantly and sent to your designated wallet address. Minimum withdrawal amounts may apply.'
    },
    {
      id: '5',
      question: 'What are the fees?',
      answer: 'We believe in transparency. There are no hidden fees. We charge a small performance fee on the profits generated, which varies depending on your investment plan. Deposit and withdrawal fees are determined by the blockchain network and are not charged by us.'
    },
    {
      id: '6',
      question: 'Do you offer customer support?',
      answer: 'Absolutely. Our dedicated support team is available 24/7 via live chat and email to assist you with any questions or issues you may have.'
    }
  ]

  return (
    <div className="bg-brand-dark text-white min-h-screen">
      <section className="bg-brand-gray py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl lg:text-2xl text-brand-gray-text max-w-3xl mx-auto">
            Have questions? We have answers. If you can't find what you're looking for, feel free to contact us.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqItems.map((item) => (
            <AccordionItem key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default FAQ
