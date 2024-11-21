import { NextResponse } from "next/server";

export async function POST() {
  try {
    // Swapping SOL to USDC with input 0.1 SOL and 0.5% slippage
    const quoteResponse = await (
      await fetch(
        "https://quote-api.jup.ag/v6/quote?inputMint=So11111111111111111111111111111111111111112\
&outputMint=EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v\
&amount=100000000\
&slippageBps=50"
      )
    ).json();
    console.log({ quoteResponse });
    return NextResponse.json({ quoteResponse });
  } catch (error) {
    console.error("Transaction failed:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
