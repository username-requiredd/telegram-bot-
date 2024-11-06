import { NextResponse } from 'next/server';
import { Connection, PublicKey } from '@solana/web3.js';

export async function GET(req) {
  // Extract the address from the query parameters
  const url = new URL(req.url);
  const address = url.searchParams.get('address');

  if (!address) {
    return NextResponse.json({ error: 'Wallet address is required' }, { status: 400 });
  }

  try {
    // Create a connection to the Solana cluster (mainnet in this case)
    const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
    
    // Check if the address is a valid Solana PublicKey
    const publicKey = new PublicKey(address);

    // Get the balance of the wallet
    const balance = await connection.getBalance(publicKey);

    // Get transaction count
    const transactionCount = await connection.getTransactionCount();

    // Prepare the response data
    const walletDetails = {
      address,
      balance: balance / 1e9,  // Solana balance in SOL (not lamports)
      transactionCount,
    };

    return NextResponse.json(walletDetails);
  } catch (error) {
    console.error('Error fetching wallet details:', error);
    return NextResponse.json({ error: 'Failed to fetch wallet details' }, { status: 500 });
  }
}
