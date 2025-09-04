import React, { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, Filter, ChevronDown, Grid, List } from 'lucide-react'
import { supabase } from '../lib/supabase'
import { Listing, SearchFilters, CATEGORIES, CITIES } from '../types'
import ListingCard from '../components/Listings/ListingCard'
import LoadingSpinner from '../components/Common/LoadingSpinner'
import { motion } from 'framer-motion'

const Categories: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [listings, setListings] = useState<Listing[]>([])
  const [loading, setLoading] = useState(true)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [showFilters, setShowFilters] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const itemsPerPage = 12

  const [filters, setFilters] = useState<SearchFilters>({
    category: searchParams.get('category') || '',
    city: searchParams.get('city') || '',
    minPrice: searchParams.get('minPrice') ? Number(searchParams.get('minPrice')) : undefined,
    maxPrice: searchParams.get('maxPrice') ? Number(searchParams.get('maxPrice')) : undefined,
    sortBy: (searchParams.get('sortBy') as SearchFilters['sortBy']) || 'newest'
  })

  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '')

  useEffect(() => {
    fetchListings()
  }, [filters, currentPage, searchQuery])

  const fetchListings = async () => {
    setLoading(true)
    try {
      let query = supabase
        .from('listings')
        .select(`
          *,
          listing_images (*),
          user:users (*)
        `, { count: 'exact' })
        .eq('status', 'active')

      // Apply filters
      if (filters.category) {
        query = query.eq('category', filters.category)
      }
      if (filters.city) {
        query = query.eq('city', filters.city)
      }
      if (filters.minPrice !== undefined) {
        query = query.gte('price', filters.minPrice)
      }
      if (filters.maxPrice !== undefined) {
        query = query.lte('price', filters.maxPrice)
      }
      if (searchQuery) {
        query = query.or(`title.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%`)
      }

      // Apply sorting
      switch (filters.sortBy) {
        case 'price_low':
          query = query.order('price', { ascending: true })
          break
        case 'price_high':
          query = query.order('price', { ascending: false })
          break
        default:
          query = query.order('created_at', { ascending: false })
      }

      // Apply pagination
      const from = (currentPage - 1) * itemsPerPage
      const to = from + itemsPerPage - 1
      query = query.range(from, to)

      const { data, error, count } = await query

      if (error) {
        if (error.code === 'MOCK_ERROR') {
          setListings(sampleListings.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage));
          setTotalPages(Math.ceil(sampleListings.length / itemsPerPage));
        } else {
          throw error;
        }
      } else {
        setListings(data || []);
        setTotalPages(Math.ceil((count || 0) / itemsPerPage));
      }
    } catch (error) {
      console.error('Error fetching listings:', error)
      // Fallback to sample data for unexpected errors
      setListings(sampleListings.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage))
      setTotalPages(Math.ceil(sampleListings.length / itemsPerPage))
    } finally {
      setLoading(false)
    }
  }

  const handleFilterChange = (key: keyof SearchFilters, value: any) => {
    const newFilters = { ...filters, [key]: value }
    setFilters(newFilters)
    setCurrentPage(1)
    
    // Update URL params
    const newParams = new URLSearchParams(searchParams)
    if (value) {
      newParams.set(key, value.toString())
    } else {
      newParams.delete(key)
    }
    setSearchParams(newParams)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentPage(1)
    const newParams = new URLSearchParams(searchParams)
    if (searchQuery) {
      newParams.set('search', searchQuery)
    } else {
      newParams.delete('search')
    }
    setSearchParams(newParams)
  }

  const sampleListings: Listing[] = [
    {
      id: '1',
      title: 'MacBook Pro 16" M2 Max - Like New',
      description: 'Barely used MacBook Pro with M2 Max chip, 32GB RAM, 1TB SSD. Perfect for professionals and content creators.',
      price: 3200,
      category: 'Electronics',
      city: 'New York',
      user_id: '1',
      status: 'active',
      views: 245,
      created_at: '2025-01-01T10:00:00Z',
      updated_at: '2025-01-01T10:00:00Z',
      listing_images: [{
        id: '1',
        listing_id: '1',
        image_url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop',
        is_primary: true,
        created_at: '2025-01-01T10:00:00Z'
      }]
    },
    {
      id: '2',
      title: 'Toyota Camry 2022 - Excellent Condition',
      description: 'Low mileage, well-maintained vehicle with full service history. Non-smoker owner, garage kept.',
      price: 28500,
      category: 'Vehicles',
      city: 'Los Angeles',
      user_id: '2',
      status: 'active',
      views: 189,
      created_at: '2025-01-02T14:30:00Z',
      updated_at: '2025-01-02T14:30:00Z',
      listing_images: [{
        id: '2',
        listing_id: '2',
        image_url: 'https://images.unsplash.com/photo-1549924231-f129b911e442?w=600&h=400&fit=crop',
        is_primary: true,
        created_at: '2025-01-02T14:30:00Z'
      }]
    },
    {
      id: '3',
      title: 'Vintage Danish Modern Dining Set',
      description: 'Beautiful teak dining table with 6 chairs. Mid-century modern design in excellent condition.',
      price: 1800,
      category: 'Furniture',
      city: 'Chicago',
      user_id: '3',
      status: 'active',
      views: 156,
      created_at: '2025-01-03T09:15:00Z',
      updated_at: '2025-01-03T09:15:00Z',
      listing_images: [{
        id: '3',
        listing_id: '3',
        image_url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&fit=crop',
        is_primary: true,
        created_at: '2025-01-03T09:15:00Z'
      }]
    },
    {
      id: '4',
      title: 'iPhone 14 Pro Max 256GB - Unlocked',
      description: 'Mint condition iPhone with original box, charger, and screen protector applied since day one.',
      price: 950,
      category: 'Electronics',
      city: 'Houston',
      user_id: '4',
      status: 'active',
      views: 312,
      created_at: '2025-01-04T16:45:00Z',
      updated_at: '2025-01-04T16:45:00Z',
      listing_images: [{
        id: '4',
        listing_id: '4',
        image_url: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=600&h=400&fit=crop',
        is_primary: true,
        created_at: '2025-01-04T16:45:00Z'
      }]
    },
    {
      id: '5',
      title: 'Mountain Bike - Trek X-Caliber 8',
      description: 'Lightly used mountain bike, great for trails and city riding. Includes helmet and bike lock.',
      price: 750,
      category: 'Sports',
      city: 'Phoenix',
      user_id: '5',
      status: 'active',
      views: 98,
      created_at: '2025-01-05T11:20:00Z',
      updated_at: '2025-01-05T11:20:00Z',
      listing_images: [{
        id: '5',
        listing_id: '5',
        image_url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop',
        is_primary: true,
        created_at: '2025-01-05T11:20:00Z'
      }]
    },
    {
      id: '6',
      title: 'Designer Handbag Collection',
      description: 'Authentic luxury handbags from various designers. Excellent condition, comes with dust bags.',
      price: 1200,
      category: 'Fashion',
      city: 'Philadelphia',
      user_id: '6',
      status: 'active',
      views: 87,
      created_at: '2025-01-06T13:10:00Z',
      updated_at: '2025-01-06T13:10:00Z',
      listing_images: [{
        id: '6',
        listing_id: '6',
        image_url: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=400&fit=crop',
        is_primary: true,
        created_at: '2025-01-06T13:10:00Z'
      }]
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Browse Listings</h1>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative max-w-lg">
              <input
                type="text"
                placeholder="Search listings..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 px-4 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>
          </form>

          {/* Filter Controls */}
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 bg-white border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors lg:hidden"
            >
              <Filter className="w-5 h-5" />
              <span>Filters</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
            </button>

            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                {loading ? 'Loading...' : `${listings.length} results`}
              </span>
              
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400'}`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-4 lg:gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:col-span-1 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
              
              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={filters.category || ''}
                  onChange={(e) => handleFilterChange('category', e.target.value || undefined)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Categories</option>
                  {CATEGORIES.map((category) => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              {/* City Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                <select
                  value={filters.city || ''}
                  onChange={(e) => handleFilterChange('city', e.target.value || undefined)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">All Cities</option>
                  {CITIES.map((city) => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Price Range</label>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.minPrice || ''}
                    onChange={(e) => handleFilterChange('minPrice', e.target.value ? Number(e.target.value) : undefined)}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.maxPrice || ''}
                    onChange={(e) => handleFilterChange('maxPrice', e.target.value ? Number(e.target.value) : undefined)}
                    className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Sort By */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Sort By</label>
                <select
                  value={filters.sortBy || 'newest'}
                  onChange={(e) => handleFilterChange('sortBy', e.target.value as SearchFilters['sortBy'])}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="newest">Newest First</option>
                  <option value="price_low">Price: Low to High</option>
                  <option value="price_high">Price: High to Low</option>
                </select>
              </div>

              <button
                onClick={() => {
                  setFilters({})
                  setSearchQuery('')
                  setSearchParams({})
                }}
                className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Clear All Filters
              </button>
            </div>
          </div>

          {/* Listings Grid */}
          <div className="lg:col-span-3">
            {loading ? (
              <div className="flex justify-center py-12">
                <LoadingSpinner size="lg" />
              </div>
            ) : listings.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No listings found matching your criteria.</p>
              </div>
            ) : (
              <>
                <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
                  {listings.map((listing, index) => (
                    <motion.div
                      key={listing.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <ListingCard listing={listing} />
                    </motion.div>
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center mt-8">
                    <div className="flex space-x-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`px-4 py-2 rounded-lg ${
                            currentPage === page
                              ? 'bg-blue-600 text-white'
                              : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Categories
