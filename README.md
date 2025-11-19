# Next.js E-commerce Pagination Demo

This project demonstrates a typical e-commerce application using Next.js 15 App Router, focusing on **Server Component Pagination** (Option 1).

## Key Features

- **Server-Side Pagination**: Uses URL Search Params (`?page=N`) to drive pagination logic on the server.
- **Soft Navigation**: Utilizing Next.js `<Link>` for instant page transitions without full browser refresh.
- **Mock Data Layer**: Simulates network delays and database queries.
- **Modern Stack**: Next.js 15, TypeScript, Tailwind CSS.

## Project Structure

- `src/app/products/page.tsx`: The core example of Server Component Pagination.
- `src/lib/data.ts`: Simulated data fetching functions.
- `src/components/ui/pagination.tsx`: Client component that updates the URL.

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) with your browser.
