import React, { useState } from 'react'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { LayoutDashboard, ArrowDownLeft, ArrowUpRight, History, User, LogOut, BarChart2, Menu, X } from 'lucide-react'
import { useAuth } from '../../hooks/useAuth'
import { motion, AnimatePresence } from 'framer-motion'

const Sidebar: React.FC<{ isOpen: boolean; setIsOpen: (isOpen: boolean) => void; }> = ({ isOpen, setIsOpen }) => {
  const location = useLocation()
  const { signOut } = useAuth()
  const navigate = useNavigate()

  const navItems = [
    { icon: LayoutDashboard, name: 'Dashboard', href: '/dashboard' },
    { icon: ArrowDownLeft, name: 'Deposit', href: '/dashboard/deposit' },
    { icon: ArrowUpRight, name: 'Withdraw', href: '/dashboard/withdraw' },
    { icon: History, name: 'Transactions', href: '/dashboard/transactions' },
    { icon: User, name: 'Profile', href: '/dashboard/profile' },
  ]

  const isActive = (href: string) => location.pathname === href

  const handleSignOut = async () => {
    await signOut()
    navigate('/login')
  }

  const sidebarContent = (
    <>
      <div className="flex items-center justify-between h-20 px-4 border-b border-brand-gray">
        <Link to="/" className="flex items-center space-x-3">
          <BarChart2 className="w-8 h-8 text-brand-blue" />
          <span className="text-xl font-bold text-white">QuantumTrade</span>
        </Link>
        <button className="lg:hidden text-brand-gray-text" onClick={() => setIsOpen(false)}>
          <X className="w-6 h-6" />
        </button>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            onClick={() => setIsOpen(false)}
            className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
              isActive(item.href)
                ? 'bg-brand-blue text-white'
                : 'text-brand-gray-text hover:bg-brand-gray hover:text-white'
            }`}
          >
            <item.icon className="w-5 h-5 mr-3" />
            {item.name}
          </Link>
        ))}
      </nav>
      <div className="px-4 py-6 border-t border-brand-gray">
        <button
          onClick={handleSignOut}
          className="flex items-center w-full px-4 py-3 text-sm font-medium text-brand-gray-text rounded-lg hover:bg-brand-gray hover:text-white"
        >
          <LogOut className="w-5 h-5 mr-3" />
          Sign Out
        </button>
      </div>
    </>
  )

  return (
    <>
      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 left-0 z-50 w-64 bg-brand-gray-light flex flex-col lg:hidden"
          >
            {sidebarContent}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex lg:flex-col lg:w-64 lg:fixed lg:inset-y-0 bg-brand-gray-light">
        {sidebarContent}
      </aside>
    </>
  )
}

const DashboardHeader: React.FC<{ onMenuClick: () => void; }> = ({ onMenuClick }) => {
  const { user } = useAuth()
  return (
    <header className="bg-brand-dark h-20 flex items-center justify-between px-4 sm:px-6 lg:px-8 border-b border-brand-gray">
      <button className="lg:hidden text-brand-gray-text" onClick={onMenuClick}>
        <Menu className="w-6 h-6" />
      </button>
      <div className="flex-1" /> {/* Spacer */}
      <div className="flex items-center space-x-4">
        <div className="text-right">
          <p className="text-sm font-medium text-white">{user?.user_metadata?.full_name || 'User'}</p>
          <p className="text-xs text-brand-gray-text">{user?.email}</p>
        </div>
        <img
          src={`https://i.pravatar.cc/150?u=${user?.id}`}
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  )
}

const DashboardLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-brand-dark">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="lg:pl-64 flex flex-col flex-1">
        <DashboardHeader onMenuClick={() => setIsSidebarOpen(true)} />
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
