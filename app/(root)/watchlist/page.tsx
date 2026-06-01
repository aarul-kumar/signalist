import Link from "next/link";
import { TrendingUp } from "lucide-react";
import { getWatchlistItems } from "@/lib/actions/watchlist.actions";
import WatchlistClient from "@/components/WatchlistClient";

export default async function WatchlistPage() {
  const watchlistItems = await getWatchlistItems();

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">My Watchlist</h1>
        <span className="text-sm text-gray-500">
          {watchlistItems.length} items
        </span>
      </div>

      {watchlistItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-12 gap-4">
          <TrendingUp className="h-12 w-12 text-gray-600" />
          <p className="text-gray-400">No stocks in your watchlist yet</p>
          <Link
            href="/search"
            className="text-yellow-500 hover:text-yellow-400 transition-colors"
          >
            Search for stocks to add
          </Link>
        </div>
      ) : (
        <WatchlistClient items={watchlistItems} />
      )}
    </div>
  );
}
