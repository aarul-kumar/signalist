"use client";

import { useState } from "react";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { removeFromWatchlist } from "@/lib/actions/watchlist.actions";
import { toast } from "sonner";

interface WatchlistClientProps {
  items: StockWithData[];
}

export default function WatchlistClient({
  items: initialItems,
}: WatchlistClientProps) {
  const [items, setItems] = useState(initialItems);
  const [loading, setLoading] = useState<string | null>(null);

  const handleRemove = async (symbol: string) => {
    setLoading(symbol);
    try {
      const result = await removeFromWatchlist(symbol);
      if (result.success) {
        setItems(items.filter((item) => item.symbol !== symbol));
        toast.success(`${symbol} removed from watchlist`);
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Failed to remove from watchlist");
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="border-b border-gray-700 sticky top-0 bg-gray-900">
          <tr className="text-left text-sm font-semibold text-gray-400">
            <th className="px-4 py-3">Symbol</th>
            <th className="px-4 py-3">Company</th>
            <th className="px-4 py-3">Added On</th>
            <th className="px-4 py-3 text-right">Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr
              key={item.symbol}
              className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors"
            >
              <td className="px-4 py-3">
                <Link
                  href={`/stocks/${item.symbol}`}
                  className="text-yellow-500 hover:text-yellow-400 font-medium transition-colors"
                >
                  {item.symbol}
                </Link>
              </td>
              <td className="px-4 py-3 text-gray-400">{item.company}</td>
              <td className="px-4 py-3 text-gray-500 text-sm">
                {new Date(item.addedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                })}
              </td>
              <td className="px-4 py-3 text-right">
                <button
                  onClick={() => handleRemove(item.symbol)}
                  disabled={loading === item.symbol}
                  className="text-red-500 hover:text-red-400 disabled:text-gray-600 transition-colors"
                  title="Remove from watchlist"
                  aria-label={`Remove ${item.symbol} from watchlist`}
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
