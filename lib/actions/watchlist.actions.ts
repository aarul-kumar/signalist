"use server";

import { connectToDatabase } from "@/database/mongoose";
import { Watchlist } from "@/database/models/watchlist.model";
import { auth } from "@/lib/better-auth/auth";
import { headers } from "next/headers";

export async function getWatchlistSymbolsByEmail(
  email: string,
): Promise<string[]> {
  if (!email) return [];

  try {
    const mongoose = await connectToDatabase();
    const db = mongoose.connection.db;
    if (!db) throw new Error("MongoDB connection not found");

    // Better Auth stores users in the "user" collection
    const user = await db
      .collection("user")
      .findOne<{ _id?: unknown; id?: string; email?: string }>({ email });

    if (!user) return [];

    const userId = (user.id as string) || String(user._id || "");
    if (!userId) return [];

    const items = await Watchlist.find({ userId }, { symbol: 1 }).lean();
    return items.map((i) => String(i.symbol));
  } catch (err) {
    console.error("getWatchlistSymbolsByEmail error:", err);
    return [];
  }
}

export async function getWatchlistItems(): Promise<StockWithData[]> {
  try {
    const session = await auth.api.getSession({ headers: await headers() });
    if (!session?.user?.email) return [];

    const mongoose = await connectToDatabase();
    const db = mongoose.connection.db;
    if (!db) throw new Error("MongoDB connection not found");

    const user = await db.collection("user").findOne<{
      _id?: unknown;
      id?: string;
      email?: string;
    }>({ email: session.user.email });
    if (!user) return [];

    const userId = (user.id as string) || String(user._id || "");
    if (!userId) return [];

    const items = await Watchlist.find({ userId }).sort({ addedAt: -1 }).lean();
    return items.map((item) => ({
      userId: String(item.userId),
      symbol: String(item.symbol),
      company: String(item.company),
      addedAt: new Date(item.addedAt),
    }));
  } catch (err) {
    console.error("getWatchlistItems error:", err);
    return [];
  }
}

export async function removeFromWatchlist(
  symbol: string,
): Promise<{ success: boolean; message: string }> {
  try {
    const session = await auth.api.getSession({ headers: await headers() });
    if (!session?.user?.email) {
      return { success: false, message: "Not authenticated" };
    }

    const mongoose = await connectToDatabase();
    const db = mongoose.connection.db;
    if (!db) throw new Error("MongoDB connection not found");

    const user = await db.collection("user").findOne<{
      _id?: unknown;
      id?: string;
      email?: string;
    }>({ email: session.user.email });
    if (!user) {
      return { success: false, message: "User not found" };
    }

    const userId = (user.id as string) || String(user._id || "");
    if (!userId) {
      return { success: false, message: "Invalid user ID" };
    }

    await Watchlist.deleteOne({ userId, symbol: symbol.toUpperCase() });
    return { success: true, message: "Removed from watchlist" };
  } catch (err) {
    console.error("removeFromWatchlist error:", err);
    return { success: false, message: "Failed to remove from watchlist" };
  }
}

export async function addToWatchlist(
  symbol: string,
  company: string,
): Promise<{ success: boolean; message: string }> {
  try {
    const session = await auth.api.getSession({ headers: await headers() });
    if (!session?.user?.email) {
      return { success: false, message: "Not authenticated" };
    }

    const mongoose = await connectToDatabase();
    const db = mongoose.connection.db;
    if (!db) throw new Error("MongoDB connection not found");

    const user = await db.collection("user").findOne<{
      _id?: unknown;
      id?: string;
      email?: string;
    }>({ email: session.user.email });
    if (!user) {
      return { success: false, message: "User not found" };
    }

    const userId = (user.id as string) || String(user._id || "");
    if (!userId) {
      return { success: false, message: "Invalid user ID" };
    }

    const upperSymbol = symbol.toUpperCase();
    const existing = await Watchlist.findOne({ userId, symbol: upperSymbol });

    if (existing) {
      return { success: false, message: "Already in watchlist" };
    }

    await Watchlist.create({
      userId,
      symbol: upperSymbol,
      company: company || upperSymbol,
      addedAt: new Date(),
    });

    return { success: true, message: "Added to watchlist" };
  } catch (err) {
    console.error("addToWatchlist error:", err);
    return { success: false, message: "Failed to add to watchlist" };
  }
}
