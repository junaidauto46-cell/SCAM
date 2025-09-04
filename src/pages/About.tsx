import React from 'react'
import { Target, Shield, Users, Star } from 'lucide-react'
import { faker } from '@faker-js/faker'
import { Testimonial } from '../types'

const About: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah J.',
      avatar: faker.image.avatarGitHub(),
      location: 'New York, USA',
      text: 'QuantumTrade has completely changed my financial outlook. The platform is transparent and the returns are consistent.',
      rating: 5
    },
    {
      id: '2',
      name: 'Michael B.',
      avatar: faker.image.avatarGitHub(),
      location: 'London, UK',
      text: 'The security features give me peace of mind. I trust QuantumTrade with my investments.',
      rating: 5
    },
    {
      id: '3',
      name: 'Linda K.',
      avatar: faker.image.avatarGitHub(),
      location: 'Sydney, Australia',
      text: 'Fantastic customer support. They guided me through my first investment and I couldn\'t be happier.',
      rating: 5
    }
  ]

  const features = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To democratize access to advanced trading strategies, empowering individuals to achieve financial independence through a secure and intuitive platform.'
    },
    {
      icon: Shield,
      title: 'Our Vision',
      description: 'To be the most trusted and innovative digital asset trading platform, renowned for our commitment to user success, transparency, and security.'
    },
    {
      icon: Users,
      title: 'Our Team',
      description: 'Our team consists of seasoned financial analysts, software engineers, and cybersecurity experts dedicated to building and maintaining a world-class trading environment.'
    }
  ]

  return (
    <div className="bg-brand-dark text-white">
      {/* Hero Section */}
      <section className="bg-brand-gray py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">About QuantumTrade</h1>
          <p className="text-xl lg:text-2xl text-brand-gray-text max-w-3xl mx-auto">
            Pioneering the future of digital asset trading with integrity and innovation.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-brand-gray p-8 rounded-lg text-center">
                <div className="w-16 h-16 bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-brand-gray-text">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-lg text-brand-gray-text mb-6">
                Founded in 2020 by a group of fintech visionaries, QuantumTrade was born from the desire to create a trading platform that was both powerful for experts and accessible for newcomers. We saw a gap in the market for a platform that prioritized user education and security above all else.
              </p>
              <p className="text-lg text-brand-gray-text">
                Today, we serve over 40,000 investors across the globe, continuously innovating and expanding our offerings to meet the evolving demands of the digital asset market.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=800&h=600&fit=crop"
                alt="QuantumTrade Team"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">What Our Investors Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-brand-gray p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-brand-gray-text">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-brand-gold fill-current" />
                  ))}
                </div>
                <p className="text-brand-gray-text">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Trading Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful investors on our platform.
          </p>
          <a
            href="/register"
            className="bg-white text-brand-blue px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Create Your Account
          </a>
        </div>
      </section>
    </div>
  )
}

export default About
