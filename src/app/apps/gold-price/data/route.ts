import { NextRequest, NextResponse } from "next/server";

const API_URL = process.env.GOLD_PRICE_API_URL;

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const brand = searchParams.get("brand") || "sjc";

  const res = await fetch(`${API_URL}/data/${brand}`, {
    cache: "no-store",
  });

  const data = await res.json();

  return NextResponse.json(data);
}
