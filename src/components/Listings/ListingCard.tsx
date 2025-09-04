import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Clock, Eye } from 'lucide-react'
import { Listing } from '../../types'
import { motion } from 'framer-motion'

interface ListingCardProps {
  listing: Listing
}

const ListingCard: React.FC<ListingCardProps> = ({ listing }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString()
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const primaryImage = listing.listing_images?.find(img => img.is_primary)?.image_url ||
                      listing.listing_images?.[0]?.image_url ||
                      'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop'

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300"
    >
      <Link to={`/listing/${listing.id}`}>
        <div className="aspect-w-16 aspect-h-12 overflow-hidden rounded-t-lg">
          <img
            src={primaryImage}
            alt={listing.title}
            className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {listing.title}
          </h3>
          <p className="text-2xl font-bold text-blue-600 mb-2">
            {formatPrice(listing.price)}
          </p>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {listing.description}
          </p>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>{listing.city}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Eye className="w-4 h-4" />
              <span>{listing.views}</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
            <div className="flex items-center space-x-1 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              <span>{formatDate(listing.created_at)}</span>
            </div>
            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              {listing.category}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default ListingCard
