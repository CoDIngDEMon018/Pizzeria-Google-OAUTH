# 🍕 Pizzeria Google OAuth

A modern pizza delivery dashboard built with **Next.js**, **NextAuth.js**, and **PostgreSQL**. Features Google OAuth authentication, user management, and a comprehensive orders management system.

## ✨ Features

- 🔐 **Google OAuth Authentication** - Secure sign-in with Google accounts
- 👤 **User Management** - Profile updates, account linking/unlinking
- 📊 **Orders Dashboard** - Comprehensive pizza orders management
- 🗄️ **PostgreSQL Database** - Robust data storage for sessions and user data
- 🎨 **Modern UI** - Clean, responsive design with Tailwind CSS
- 🔒 **Session Management** - Secure session handling with NextAuth.js
- 📱 **Mobile Responsive** - Works seamlessly across all devices

## 🛠️ Tech Stack

- **Frontend**: Next.js 14+, React, Tailwind CSS
- **Authentication**: NextAuth.js v5
- **Database**: PostgreSQL
- **Deployment**: Railway ready

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js** = 15.0.0
- **npm** or **yarn** package manager
- **PostgreSQL** database 
- **Google Cloud Console** account for OAuth setup

## 🔧 Installation

### 1. Clone the repository

```bash
git clone https://github.com/CoDIngDEMon018/Pizzeria-Google-OAUTH.git
cd Pizzeria-Google-OAUTH
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google` (development)
   - `https://yourdomain.com/api/auth/callback/google` (production)

### 4. Environment Configuration

Create a `.env.local` file in the project root:

```bash
# NextAuth Configuration
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret-key-here"

# Google OAuth Credentials
AUTH_GOOGLE_ID="your-google-client-id"
AUTH_GOOGLE_SECRET="your-google-client-secret"

# Alternative Database Configuration (if using separate variables)
AUTH_DATABASE_HOST="localhost"
AUTH_DATABASE_PORT=5432
AUTH_DATABASE_NAME="pizzeria_db"
AUTH_DATABASE_USER="your_username"
AUTH_DATABASE_PASSWORD="your_password"
```

### 5. Database Setup

```bash
# Create database
createdb pizzeria_db

# Run migrations (if using Prisma)
npx prisma migrate deploy
npx prisma generate

# Seed database (optional)
npm run seed
```

### 6. Start Development Server

```bash
npm run dev
```

🎉 Open [http://localhost:3000](http://localhost:3000) in your browser!

## 📁 Project Structure

```
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # Dashboard pages
│   └── globals.css        # Global styles
├── components/            # Reusable components
│   ├── auth/             # Authentication components
│   ├── dashboard/        # Dashboard components
│   └── ui/               # UI components
├── lib/                  # Utility functions
│   ├── auth.js           # NextAuth configuration
│   ├── db.js             # Database connection
│   └── utils.js          # Helper functions
├── prisma/               # Database schema (if using Prisma)
├── public/               # Static assets
└── .env.local           # Environment variables
```

## 🚀 Deployment

### Deploy to Railway

1. Push your code to GitHub
2. Import project to [Railway](https://railway.com)
3. Add environment variables in Railway dashboard
4. Update `NEXTAUTH_URL` to your production URL
5. Deploy!

### Environment Variables for Production

```bash
NEXTAUTH_URL="https://your-domain.vercel.app"
NEXTAUTH_SECRET="your-production-secret"
AUTH_GOOGLE_ID="your-google-client-id"
AUTH_GOOGLE_SECRET="your-google-client-secret"
DATABASE_URL="your-production-database-url"
```

## 🔐 Security Notes

- Never commit `.env.local` or any environment files
- Use strong, unique secrets for `NEXTAUTH_SECRET`
- Keep your Google OAuth credentials secure
- Use environment variables for all sensitive data
- Enable database SSL in production

## 📖 Usage

### Authentication Flow

1. User clicks "Continue with Google"
2. Redirected to Google OAuth consent screen
3. Upon approval, user data is stored in PostgreSQL
4. Session is created and user is redirected to dashboard

### Dashboard Features

- **Orders Management**: View, filter, and manage pizza orders
- **User Profile**: Update personal information
- **Account Settings**: Link/unlink Google account
- **Analytics**: Order statistics and insights (if implemented)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 📚 Resources

- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Google OAuth Setup Guide](https://developers.google.com/identity/protocols/oauth2)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

## 🙏 Acknowledgments

- Inspired by modern authentication practices
- Community contributions and feedback
