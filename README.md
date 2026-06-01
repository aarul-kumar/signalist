# Signalist — Intelligent Stock Monitoring Platform

AI-powered modern stock market app built with Next.js, Shadcn, Better Auth, and Inngest! Track real-time prices, set personalized alerts, explore company insights, and manage watchlists. Signalist goes beyond basic tracking by continuously analyzing market activity and delivering context-aware alerts and AI-driven summaries to help users make smarter decisions.

## Key Features

* **Stock Dashboard:** Track real-time stock prices with interactive line and candlestick charts, view historical data, and filter by industry, performance, or market cap.
* **AI Insight Engine:** Generate personalized market summaries, daily digests, earnings breakdowns, and sentiment analysis powered by Gemini.
* **Smart Alerts & Watchlist:** Create personalized watchlists and set custom price or volume triggers.
* **Real-Time Workflows:** Automate event-driven processes like price updates, scheduling, and insights via Inngest—without relying on constant polling.
* **Company Insights:** Explore detailed financial metrics (PE ratio, EPS, revenue), recent news, filings, and analyst ratings.
* **Admin Analytics:** Manage stocks, publish news, and monitor user behavior and engagement metrics.

## Try Signalist live
https://signalist-t0i3.onrender.com

**Email:** user@gmail.com

**Password:** demouser

---

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | Next.js, Tailwind CSS, Shadcn UI |
| **Backend** | Next.js API Routes, Server Actions |
| **Authentication** | Better Auth |
| **Database** | MongoDB |
| **Event Processing** | Inngest |
| **AI Integration** | Gemini API |
| **Market Data** | Finnhub API |
| **Email Service** | Nodemailer |
| **Language** | TypeScript |

---

## System Architecture & Implementation

Signalist follows a robust, highly scalable architecture designed for real-time responsiveness and maintainability.

* **Hybrid Full-Stack Design:** Utilizes **Next.js** Server Components for efficient data fetching and rendering, combined with Server Actions to securely handle backend logic. This separation significantly reduces API overhead and improves performance.
* **Event-Driven Workflow:** Instead of traditional polling, stock updates and alerts trigger background workflows via **Inngest**. This asynchronous event model offers low latency, highly efficient resource usage, and built-in retry and failure handling.
* **Data Flow Pipeline:** User UI Interaction → Next.js Actions/API Routes → Finnhub API → MongoDB → Inngest Events → Gemini AI Summaries → Nodemailer Alerts.
* **AI Integration (Gemini):** An automated pipeline that transforms raw financial data into structured insights, generating context-aware summaries, analyzing earnings, and providing market sentiment directly to the UI.
* **Authentication & Security:** Powered by **Better Auth**, featuring secure session handling, protected server-side operations, and strict environment-based configuration.

<img width="400" height="600" alt="Blank diagram" src="https://github.com/user-attachments/assets/2e73bbb6-50f1-4ae2-8c81-ed0515cc625a" />


### Database Design (MongoDB)
A document-based, flexible schema optimized with indexed queries for fast performance and strong separation of concerns:
* `users` → Authentication and user preferences
* `watchlists` → Tracked stocks and portfolios
* `alerts` → Custom trigger conditions
* `stocks` → Cached market data
* `notifications` → Alert history and logs

### Engineering Standards
* **Performance Optimizations:** Server-side rendering (SSR), API response caching, optimized database queries, and lazy loading.
* **Reliability & Scalability:** A stateless backend design built on decoupled services, featuring centralized error handling, graceful UI fallbacks, and comprehensive logging.
* **Code Quality:** Built strictly with **TypeScript** for type safety, utilizing a modular structure with reusable components and a clean separation of concerns.
---

## Project Structure

| Directory | Purpose |
| :--- | :--- |
| `app/` | Application routes and core UI |
| `components/` | Reusable React/Shadcn UI components |
| `actions/` | Next.js server-side logic and database queries |
| `lib/` | Utility functions and third-party integrations |
| `models/` | MongoDB database schemas |
| `hooks/` | Custom React hooks for client-side state |

---

## Quick Start

**Prerequisites:** Ensure you have Git, Node.js, and npm installed on your machine.

**1. Clone the repository:**
```bash
git clone https://github.com/aarul-kumar/signalist.git
cd signalist
```

**2. Install dependencies:**
```bash
npm install
```

**3. Set up environment variables:**
Create a .env file in the root directory and add your secret keys. (Get these from MongoDB, Gemini, Finnhub, and your email provider).
```bash
npm install
NODE_ENV=development
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# FINNHUB
NEXT_PUBLIC_FINNHUB_API_KEY=your_finnhub_key
FINNHUB_BASE_URL=[https://finnhub.io/api/v1](https://finnhub.io/api/v1)

# MONGODB
MONGODB_URI=your_mongodb_connection_string

# BETTER AUTH
BETTER_AUTH_SECRET=your_generated_secret
BETTER_AUTH_URL=http://localhost:3000

# GEMINI
GEMINI_API_KEY=your_gemini_key

# NODEMAILER
NODEMAILER_EMAIL=your_email@example.com
NODEMAILER_PASSWORD=your_app_password
```
**4. Run the application:**
```bash
You will need two terminal windows to run the web server and the event processor simultaneously.
# Terminal 1: Start the Next.js development server
npm run dev

# Terminal 2: Start the Inngest local development server
npx inngest-cli@latest dev
```
Open http://localhost:3000 in your browser to view the project.

## Team & Contributions

| Member | Role & Contributions |
| :--- | :--- |
| **Aarul Kumar** | **Project Lead & Backend:** Designed system architecture, integrated real-time APIs, and managed the repository. |
| **Sanvi Tikariha** | **Frontend Development:** Built the React UI, responsive layouts, search functionality, and API connections. |
| **Shivani Chaurasiya** | **UI/UX Design:** Designed the application layout, created reusable components, and ensured responsiveness. |
| **Palak Pandey** | **Data Handling:** Managed the organization and display of stock data, and debugged data flow issues. |
| **Shivanand Mishra** | **Testing & Documentation:** Performed system testing, identified bugs, and prepared project documentation. |

---

## Future Enhancements

* Portfolio tracking system
* Predictive AI trading signals
* Mobile-first tailored UI
* Multi-market support (Cryptocurrency, Forex)
