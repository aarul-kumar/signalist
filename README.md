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
https://signalist-z1ky.onrender.com

**Email:** user@gmail.com

**Password:** demouser

---

## Demo
### 1. Secure Authentication
Sign in securely using Better Auth with protected sessions and seamless user authentication.

<img width="1918" height="994" alt="Screen Recording 2026-07-05 230758" src="https://github.com/user-attachments/assets/42b888d5-10b8-467a-a508-b2df79ef4ee5" />

### 2. Market Dashboard
Get a comprehensive overview of the market with live stock prices, trending stocks, and key financial metrics.

<img width="1918" height="998" alt="Screen Recording 2026-07-05 231739" src="https://github.com/user-attachments/assets/733dc448-2c84-4a66-9c75-b37f92247171" />

### 3. Stock Market Heatmap
Visualize market performance through an interactive heatmap that highlights sector-wise and stock-wise movements.

<img width="1918" height="996" alt="Screen Recording 2026-07-05 234436" src="https://github.com/user-attachments/assets/650ce92a-f908-4ee7-91cb-92a3ec3deafa" />

### 4. TradingView Stock Analysis
Explore individual stocks with an embedded TradingView chart offering professional-grade market analysis.

<img width="1918" height="992" alt="Screen Recording 2026-07-05 234954" src="https://github.com/user-attachments/assets/fb217dd6-fe14-4342-8994-1abd4a233343" />

### 5. Top Stories & Stock Table
Stay updated with the latest financial news alongside a sortable table of real-time stock data.

<img width="1918" height="996" alt="Screen Recording 2026-07-06 000225" src="https://github.com/user-attachments/assets/92552863-8b72-462d-91a1-469a5959f1fa" />

### 6. Intelligent Stock Search
Instantly search and access stocks with responsive autocomplete and real-time filtering.

<img width="1916" height="994" alt="Screen Recording 2026-07-06 001016" src="https://github.com/user-attachments/assets/38ad4102-ee77-4554-9824-50912d2dbe6d" />

### 7. Company Insights
View detailed company information including financial metrics, earnings data, analyst ratings, and recent news.

<img width="1280" height="720" alt="Screen Recording 2026-07-06 003210" src="https://github.com/user-attachments/assets/c911e57a-bb67-453a-9e9f-eede0cd598a3" />

### 8. Interactive Price Charts
Analyze historical price movements using interactive charts with zooming, panning, and multiple time intervals.

<img width="1280" height="720" alt="Screen Recording 2026-07-06 004339" src="https://github.com/user-attachments/assets/9bb9d253-2d70-40b2-9a53-fe5e0aaeb5cc" />

### 9. Technical Analysis Tools
Customize charts with multiple chart types, technical indicators, drawing tools, strategies, and currency settings.

<img width="1918" height="994" alt="Screen Recording 2026-07-06 005943 (1)" src="https://github.com/user-attachments/assets/4c7b2a3e-10a4-4b8a-abe6-414e5d7a8632" />

### 10. Personalized Watchlist
Create and manage custom watchlists to monitor your favorite stocks and track their performance in one place.

<img width="1920" height="1080" alt="Screen Recording 2026-07-06 012016 (1)" src="https://github.com/user-attachments/assets/7dc99ac6-0b9c-4777-8d7d-4daf4b0f9478" />

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
