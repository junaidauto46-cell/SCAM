# LocalMarket - Professional Local Marketplace

A modern, full-stack marketplace application built with React, TypeScript, Tailwind CSS, and Supabase. Perfect for local communities to buy and sell items safely and efficiently.

## 🚀 Features

### Core Functionality
- **User Authentication**: Secure sign-up/login with Supabase Auth
- **Listing Management**: Create, edit, and delete listings with image uploads
- **Advanced Search & Filters**: Search by title, category, location, and price range
- **Real-time Messaging**: In-app messaging system between buyers and sellers
- **Payment Integration**: Placeholder for crypto payments (Coinbase Commerce/NOWPayments)
- **Admin Panel**: Moderation tools for managing listings

### User Experience
- **Mobile-First Design**: Fully responsive for all device sizes
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Micro-interactions**: Smooth animations and hover effects
- **Accessibility**: WCAG compliant with proper keyboard navigation
- **Loading States**: Skeleton loaders and spinners for better UX

### Technical Features
- **TypeScript**: Full type safety throughout the application
- **Supabase Integration**: Real-time database, authentication, and file storage
- **Image Upload**: Secure file upload to Supabase Storage
- **Row-Level Security**: Database-level security policies
- **SEO Optimized**: Meta tags and structured data

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Backend**: Supabase (PostgreSQL, Auth, Storage)
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Build Tool**: Vite

## 📦 Quick Setup

### 1. Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=YOUR_SUPABASE_URL
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

**Replace with your actual Supabase credentials:**
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Create a new project or select existing one
3. Go to Settings > API
4. Copy your Project URL and anon public key

### 2. Database Setup

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Copy and paste the entire content of `schema.sql`
4. Run the SQL to create all tables, policies, and functions

### 3. Install Dependencies

```bash
yarn install
```

### 4. Start Development Server

```bash
yarn dev
```

The app will be available at `http://localhost:5173`

## 🗃️ Database Schema

The application uses the following main tables:

- **users**: User profiles (extends Supabase auth.users)
- **listings**: Product/service listings
- **listing_images**: Images associated with listings
- **messages**: Communication between users
- **transactions**: Payment and transaction records

All tables include Row-Level Security (RLS) policies for data protection.

## 🚀 Deployment

### Deploy to Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Add environment variables in Netlify dashboard
4. Deploy!

### Deploy to Vercel

1. Push your code to GitHub
2. Import project to Vercel
3. Add environment variables
4. Deploy!

### Build for Production

```bash
yarn build
```

## 💳 Payment Integration

The app includes placeholder integration for crypto payments. To enable:

### Coinbase Commerce Integration

1. Sign up for [Coinbase Commerce](https://commerce.coinbase.com/)
2. Get your API keys
3. Replace placeholders in payment components
4. Update webhook endpoints

### NOWPayments Integration

1. Sign up for [NOWPayments](https://nowpayments.io/)
2. Get your API keys
3. Replace placeholders in payment components
4. Configure webhook URLs

**Webhook Endpoint**: `/api/payments/webhook` (implement in your backend)

## 📝 Environment Variables Reference

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_SUPABASE_URL` | Your Supabase project URL | ✅ |
| `VITE_SUPABASE_ANON_KEY` | Your Supabase anon public key | ✅ |

## 🎨 Customization

### Branding
- Update logo and colors in `src/components/Layout/Header.tsx`
- Modify color scheme in `tailwind.config.js`
- Update meta tags in `index.html`

### Categories & Cities
- Edit categories in `src/types/index.ts`
- Modify cities list for your target market

### Sample Data
The app includes sample listings for demonstration. In production:
1. Remove sample data from components
2. Ensure real data flows from Supabase

## 🔧 Development

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Common/         # Shared components
│   ├── Layout/         # Layout components
│   └── Listings/       # Listing-specific components
├── hooks/              # Custom React hooks
├── lib/                # Utilities and configurations
├── pages/              # Page components
│   ├── Auth/          # Authentication pages
│   └── ...            # Other pages
├── types/              # TypeScript type definitions
└── ...
```

### Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint

## 🐛 Troubleshooting

### Common Issues

1. **Supabase Connection Error**
   - Verify environment variables are set correctly
   - Check if Supabase project is active
   - Ensure database schema is properly set up

2. **Image Upload Issues**
   - Verify storage bucket policies are configured
   - Check file size limits
   - Ensure user is authenticated

3. **Authentication Problems**
   - Check Supabase Auth configuration
   - Verify redirect URLs are set correctly
   - Check user policies in database

## 📚 Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, email support@localmarket.app or create an issue in this repository.

---

**Built with ❤️ for local communities**
