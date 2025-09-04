import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { Mail, Lock, User, Eye, EyeOff, BarChart2 } from 'lucide-react'
import LoadingSpinner from '../../components/Common/LoadingSpinner'

const Register: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const { signUp } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long')
      setLoading(false)
      return
    }

    try {
      const { error } = await signUp(formData.email, formData.password, formData.fullName)
      if (error) {
        setError(error.message)
      } else {
        navigate('/dashboard')
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-brand-dark py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-brand-gray p-8 rounded-lg shadow-lg">
        <div>
          <div className="flex justify-center">
            <BarChart2 className="w-12 h-12 text-brand-blue" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
            Create your account
          </h2>
          <p className="mt-2 text-center text-sm text-brand-gray-text">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-brand-blue hover:text-brand-blue-light">
              Sign in here
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-brand-red/20 border border-brand-red text-brand-red px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-brand-gray-text">Full Name</label>
              <div className="mt-1 relative">
                <input id="fullName" name="fullName" type="text" required value={formData.fullName} onChange={handleChange} className="appearance-none bg-brand-gray-light relative block w-full px-3 py-3 pl-10 border border-brand-gray-light placeholder-brand-gray-text text-white rounded-lg focus:outline-none focus:ring-brand-blue focus:border-brand-blue sm:text-sm" placeholder="Enter your full name" />
                <User className="absolute left-3 top-3.5 h-5 w-5 text-brand-gray-text" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-brand-gray-text">Email address</label>
              <div className="mt-1 relative">
                <input id="email" name="email" type="email" autoComplete="email" required value={formData.email} onChange={handleChange} className="appearance-none bg-brand-gray-light relative block w-full px-3 py-3 pl-10 border border-brand-gray-light placeholder-brand-gray-text text-white rounded-lg focus:outline-none focus:ring-brand-blue focus:border-brand-blue sm:text-sm" placeholder="Enter your email" />
                <Mail className="absolute left-3 top-3.5 h-5 w-5 text-brand-gray-text" />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-brand-gray-text">Password</label>
              <div className="mt-1 relative">
                <input id="password" name="password" type={showPassword ? 'text' : 'password'} required value={formData.password} onChange={handleChange} className="appearance-none bg-brand-gray-light relative block w-full px-3 py-3 pl-10 pr-10 border border-brand-gray-light placeholder-brand-gray-text text-white rounded-lg focus:outline-none focus:ring-brand-blue focus:border-brand-blue sm:text-sm" placeholder="Create a password" />
                <Lock className="absolute left-3 top-3.5 h-5 w-5 text-brand-gray-text" />
                <button type="button" className="absolute right-3 top-3.5" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <EyeOff className="h-5 w-5 text-brand-gray-text" /> : <Eye className="h-5 w-5 text-brand-gray-text" />}
                </button>
              </div>
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-brand-gray-text">Confirm Password</label>
              <div className="mt-1 relative">
                <input id="confirmPassword" name="confirmPassword" type={showConfirmPassword ? 'text' : 'password'} required value={formData.confirmPassword} onChange={handleChange} className="appearance-none bg-brand-gray-light relative block w-full px-3 py-3 pl-10 pr-10 border border-brand-gray-light placeholder-brand-gray-text text-white rounded-lg focus:outline-none focus:ring-brand-blue focus:border-brand-blue sm:text-sm" placeholder="Confirm your password" />
                <Lock className="absolute left-3 top-3.5 h-5 w-5 text-brand-gray-text" />
                <button type="button" className="absolute right-3 top-3.5" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                  {showConfirmPassword ? <EyeOff className="h-5 w-5 text-brand-gray-text" /> : <Eye className="h-5 w-5 text-brand-gray-text" />}
                </button>
              </div>
            </div>
          </div>

          <div>
            <button type="submit" disabled={loading} className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-brand-blue hover:bg-brand-blue-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]">
              {loading ? <LoadingSpinner size="sm" /> : 'Create Account'}
            </button>
          </div>

          <div className="text-xs text-brand-gray-text text-center">
            By creating an account, you agree to our{' '}
            <Link to="/terms" className="text-brand-blue hover:text-brand-blue-light">
              Terms of Service
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
