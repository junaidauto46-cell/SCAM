import React from 'react'
import { useAuth } from '../../hooks/useAuth'

const Profile: React.FC = () => {
  const { user } = useAuth()

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Profile Settings</h1>
      <div className="bg-brand-gray p-8 rounded-lg max-w-2xl mx-auto">
        <div className="flex items-center space-x-6 mb-8">
          <img
            src={`https://i.pravatar.cc/150?u=${user?.id}`}
            alt="User Avatar"
            className="w-24 h-24 rounded-full"
          />
          <div>
            <h2 className="text-2xl font-bold text-white">{user?.user_metadata?.full_name}</h2>
            <p className="text-brand-gray-text">{user?.email}</p>
          </div>
        </div>

        <form className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-brand-gray-text">Full Name</label>
            <input type="text" id="fullName" name="fullName" defaultValue={user?.user_metadata?.full_name} className="mt-1 block w-full bg-brand-gray-light border border-brand-gray-light rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-brand-gray-text">Email Address</label>
            <input type="email" id="email" name="email" defaultValue={user?.email} readOnly className="mt-1 block w-full bg-brand-dark border border-brand-gray-light rounded-md py-3 px-4 text-brand-gray-text cursor-not-allowed" />
          </div>
          <div>
            <label htmlFor="currentPassword" className="block text-sm font-medium text-brand-gray-text">Change Password</label>
            <input type="password" id="currentPassword" name="currentPassword" placeholder="Current Password" className="mt-1 block w-full bg-brand-gray-light border border-brand-gray-light rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue" />
            <input type="password" id="newPassword" name="newPassword" placeholder="New Password" className="mt-2 block w-full bg-brand-gray-light border border-brand-gray-light rounded-md py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-blue" />
          </div>
          <button type="submit" className="w-full bg-brand-blue text-white py-3 rounded-lg font-semibold hover:bg-brand-blue-light transition-colors">
            Update Profile
          </button>
        </form>
      </div>
    </div>
  )
}

export default Profile
