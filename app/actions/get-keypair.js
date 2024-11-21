import { bs58 } from "@project-serum/anchor/dist/cjs/utils/bytes";
import { Keypair } from "@solana/web3.js";
import toast from "react-hot-toast";

export default function getKeypair(base58PrivateKey) {
  try {
    // Decode the Base58 private key
    const secretKey = bs58.decode(base58PrivateKey);

    // Check if the decoded key is the correct length (64 bytes)
    if (secretKey.length !== 64) {
      toast.error("Invalid private key");
    }

    // Create a Keypair from the secret key
    const keypair = Keypair.fromSecretKey(secretKey);
    return keypair;
  } catch (error) {
    toast.error("Invalid base58 private key: " + error.message);
  }
}
