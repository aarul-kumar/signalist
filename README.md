# Signalist — Intelligent Stock Monitoring Platform

> A real-time, AI-powered stock tracking system designed for automation, speed, and actionable insights.

---

## Overview

Signalist is a modern stock monitoring platform that goes beyond basic tracking.  
It continuously analyzes market activity and delivers context-aware alerts and AI-driven summaries to help users make smarter decisions.

---

## Key Highlights

- Event-driven architecture for real-time responsiveness  
- AI-powered insights and summaries  
- Smart alerts with meaningful triggers  
- Scalable and modular code structure  

---

## System Architecture

![System Architecture](https://github.com/user-attachments/assets/fb33a0e6-3ffc-49aa-9565-d53671da385a)

---

## Tech Ecosystem

| Layer            | Technology |
|------------------|-----------|
| Frontend         | Next.js, Tailwind CSS, Shadcn UI |
| Backend          | Next.js API Routes, Server Actions |
| Authentication   | Better Auth |
| Database         | MongoDB |
| Event Processing | Inngest |
| AI Integration   | Gemini API |
| Market Data      | Finnhub API |
| Email Service    | Nodemailer |
| Language         | TypeScript |

---

## Features

### Live Market Tracking
- Real-time stock price updates  
- Historical data visualization  
- Filtering by sector and performance  

### AI Insight Engine
- Daily summaries powered by AI  
- Earnings breakdowns  
- Sentiment-based insights  

### Smart Alerts
- Custom price and volume triggers  
- Event-based execution (no constant polling)  
- Email notifications with context  

### Company Insights
- Financial metrics (PE, EPS, revenue)  
- Market sentiment  
- Latest news and updates  

### Personal Watchlist
- Track selected stocks  
- Customize alerts  
- Manage preferences  

---

## Architecture & Implementation Details

### Architecture Pattern

The application follows a hybrid full-stack architecture using Next.js:

- Server Components for efficient data fetching and rendering  
- Client Components for interactive UI  
- Server Actions to handle backend logic securely  

This reduces API overhead and improves performance.

---

### Event-Driven Workflow (Inngest)

The system uses an event-driven model instead of polling:

- Stock updates trigger background workflows  
- Alerts are processed asynchronously  
- Built-in retry and failure handling  

Benefits:
- Low latency  
- Better scalability  
- Efficient resource usage  

---

### Data Flow

1. User interacts with UI (search, watchlist, alerts)  
2. Requests handled via Server Actions or API routes  
3. Data fetched from Finnhub API  
4. Stored in MongoDB  
5. Events triggered via Inngest  
6. AI summaries generated using Gemini  
7. Notifications sent via Nodemailer  

---

### Database Design (MongoDB)

Document-based schema:

- users → authentication and preferences  
- watchlists → tracked stocks  
- alerts → trigger conditions  
- stocks → cached data  
- notifications → alert history  

Design considerations:
- Indexed queries for performance  
- Flexible schema for scalability  
- Separation of concerns  

---

### Authentication & Security

- Implemented using Better Auth  
- Secure session handling  
- Protected server-side operations  
- Environment-based configuration  

---

### AI Integration (Gemini API)

AI enhances financial data:

- Generates summaries  
- Analyzes earnings  
- Provides sentiment insights  

Pipeline:  
Raw data → AI processing → structured insights → UI  

---

### Performance Optimizations

- Server-side rendering (SSR)  
- Optimized data fetching  
- API response caching  
- Efficient database queries  
- Lazy loading  

---

### Error Handling & Reliability

- Centralized error handling  
- Retry mechanisms in workflows  
- Graceful UI fallbacks  
- Logging for debugging  

---

### Scalability Considerations

- Stateless backend design  
- Event-driven processing  
- Modular architecture  
- Decoupled services  

---

### Code Quality & Maintainability

- TypeScript for type safety  
- Reusable components  
- Separation of concerns  
- Clean project structure  

---

## Getting Started

### 1. Clone Repository

    git clone https://github.com/your-username/signalist.git
    cd signalist

### 2. Install Dependencies

    npm install

### 3. Setup Environment Variables

Create a `.env` file in the root directory:

    NODE_ENV=development
    NEXT_PUBLIC_BASE_URL=http://localhost:3000

    # APIs
    NEXT_PUBLIC_FINNHUB_API_KEY=
    GEMINI_API_KEY=

    # Database
    MONGODB_URI=

    # Auth
    BETTER_AUTH_SECRET=
    BETTER_AUTH_URL=http://localhost:3000

    # Email
    NODEMAILER_EMAIL=
    NODEMAILER_PASSWORD=

### 4. Run the Application

    npm run dev
    npx inngest-cli@latest dev

Open: http://localhost:3000  

---

## Project Structure

    app/          → Routes & UI
    components/   → Reusable UI components
    actions/      → Server-side logic
    lib/          → Utilities & integrations
    models/       → Database schemas
    hooks/        → Custom React hooks

---

## Team Members

- Aarul Kumar  
- Sanvi Tikariha  
- Shivani Chaurasiya  
- Palak Pandey  
- Shivanand Mishra  

---

## Individual Contributions

### 1. Aarul Kumar — Project Lead & Backend Development
- Designed overall project architecture  
- Integrated APIs for real-time stock data  
- Managed GitHub repository  
- Coordinated team development activities  

### 2. Sanvi Tikariha — Frontend Development
- Developed frontend using Next.js and React  
- Designed responsive layouts  
- Implemented stock search functionality  
- Integrated frontend with backend APIs  

### 3. Shivani Chaurasiya — UI/UX Design
- Designed layout and styling of application  
- Created reusable UI components  
- Improved visual design and responsiveness  

### 4. Palak Pandey — Data Handling
- Assisted in data organization and handling  
- Managed display of stock-related data  
- Helped in debugging data-related issues  

### 5. Shivanand Mishra — Testing & Documentation
- Performed system testing  
- Identified and fixed bugs  
- Prepared project documentation  

---

## Future Enhancements

- Portfolio tracking system  
- Predictive AI signals  
- Mobile-first UI  
- Multi-market support (crypto, forex)
