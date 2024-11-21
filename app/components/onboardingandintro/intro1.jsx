import { Keypair } from "@solana/web3.js";
import { useRouter } from "next/navigation";

export default function Intro({ changeState }) {
  const router = useRouter();

  const createWallet = async () => {
    try {
      // Generate a new keypair
      const keypair = Keypair.generate();

      // Get the public and secret keys
      const publicKey = keypair.publicKey.toString();
      const secretKey = keypair.secretKey;

      // Log the keys
      console.log("Public Key:", publicKey);
      console.log("Secret Key:", Array.from(secretKey)); // Convert to array for better readability
      router.push("/");
    } catch (error) {
      toast.error("Error creating wallet");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 ">
      <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        <div className="flex flex-col lg:flex-row">
          {/* Image container */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-square lg:aspect-auto lg:h-full">
              <img
                src="/images/illustrations/wallet.jpg"
                alt="Wallet illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Content container */}
          <div className="w-full lg:w-1/2 p-8 flex flex-col justify-between">
            {/* Text content */}
            <div className="text-center lg:text-left mb-8">
              <h4 className="font-bold text-3xl lg:text-4xl bg-gradient-to-r from-indigo-600 to-violet-500 bg-clip-text text-transparent">
                Only Wallet You Need
              </h4>
              <p className="text-gray-600 mt-4 leading-relaxed text-lg">
                The most user-friendly non-custodian wallet
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-5">
              <button
                onClick={() => changeState("seed")}
                className="text-indigo-600 border-2 p-4 rounded-md text-center hover:text-indigo-700 transition-colors font-medium text-lg"
              >
                I already have a wallet
              </button>
              <button
                onClick={createWallet}
                className="w-full bg-gradient-to-r from-indigo-600 to-violet-500 text-white py-4 px-6 rounded-md hover:from-indigo-700 hover:to-violet-600 transition-all duration-300 font-semibold text-lg shadow-lg shadow-indigo-100 transform hover:-translate-y-0.5"
              >
                Create New Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
