import React from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'

// Layouts
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import DashboardLayout from './components/Layout/DashboardLayout'

// Common
import ProtectedRoute from './components/Common/ProtectedRoute'

// Public Pages
import Home from './pages/Home'
import About from './pages/About'
import InvestmentPlans from './pages/InvestmentPlans'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Aml from './pages/Aml'

// Auth Pages
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'

// Dashboard Pages
import Dashboard from './pages/Dashboard/Dashboard'
import Deposit from './pages/Dashboard/Deposit'
import Withdraw from './pages/Dashboard/Withdraw'
import Transactions from './pages/Dashboard/Transactions'
import Profile from './pages/Dashboard/Profile'

const PublicLayout = () => (
  <div className="min-h-screen flex flex-col bg-brand-dark">
    <Header />
    <main className="flex-1"><Outlet /></main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/investment-plans" element={<InvestmentPlans />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/aml" element={<Aml />} />
        </Route>

        {/* Auth Routes (no layout) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Dashboard Routes */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="deposit" element={<Deposit />} />
          <Route path="withdraw" element={<Withdraw />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
