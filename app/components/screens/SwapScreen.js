"use client";

import { useState } from "react";
import { ConfirmSwap } from "../ui/modals/confirmSwap";
import { Button, Modal } from "flowbite-react";
import { ArrowLeft } from "lucide-react";

export default function SwapScreen({ changeUistate, keypair }) {
  const currencies = [
    { code: "BTC", name: "Bitcoin" },
    { code: "ETH", name: "Ethereum" },
    { code: "LTC", name: "Litecoin" },
  ];

  const [openModal, setOpenModal] = useState(false);
  const [sendingToken, setSendingToken] = useState();
  const [receiveToken, setReceiveToken] = useState();
  const [tokenAmount, setTokenAmount] = useState();

  // const [openModal, setOpenModal] = useState(true);

  const handleTokenAmountChange = (e) => {
    setTokenAmount(e.target.value);
    getQuote(e.target.value, sendingToken, receiveToken); // Call getQuote on input change
  };

  const handleSendingTokenChange = (e) => {
    setSendingToken(e.target.value);
    getQuote(tokenAmount, e.target.value, receiveToken); // Call getQuote when sending token changes
  };

  const handleReceiveTokenChange = (e) => {
    setReceiveToken(e.target.value);
    getQuote(tokenAmount, sendingToken, e.target.value); // Call getQuote when receiving token changes
  };

  const getQuote = (amount, fromToken, toToken) => {
    const amountToReceive = parseFloat(amount) * 2; // Example: double the amount sent
    console.log(
      `Getting quote for ${amount} ${fromToken.symbol} to ${toToken.symbol}`
    );
    console.log(`You will receive: ${amountToReceive} ${toToken.symbol}`);
    // Here you would typically set the amount to receive in your state
    // For demonstration, let's assume you have a state for the receiving amount
    setReceiveAmount(amountToReceive); // Uncomment if you have a state for this
  };

  const swapTokens = () => {
    const { t1, t2 } = { sendingToken, receiveToken };
    setSendingToken(t2);
    setReceiveToken(t1);
    getQuote(tokenAmount, receiveToken, sendingToken); // Get new quote after swapping
  };

  return (
    <div className="flex flex-col items-center dark:text-white justify-between min-h-screen py-4">
      <div className="flex flex-col items-center">
        <div className="flex items-center w-full py-2 mb-4">
          <button onClick={() => changeUistate("dashboard")}>
            <ArrowLeft className="text-white text-sm" />
          </button>
          <h1 className="dark:text-white text-center text-xl font-semibold ml-4">
            Swap
          </h1>
        </div>
        <div className="w-80 p-4 rounded-lg mb-8 border-2">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm">You Pay</span>
          </div>
          <div className="flex items-center mb-2 gap-2 rounded-md">
            <input
              type="text"
              value={tokenAmount}
              onChange={handleTokenAmountChange}
              className="bg-transparent text-2xl w-full focus:outline-none"
              placeholder="Amount"
            />
            <div className="flex items-center relative gap-2">
              <select
                value={sendingToken}
                className="bg-transparent focus:outline-none appearance-none pr-8"
              >
                {currencies.map((currency) => (
                  <option key={currency.code} value={currency.code}>
                    {currency.code}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="text-sm text-gray-400">
            Balance: 100 {sendingToken}
          </div>
        </div>
        <div className="flex items-center justify-center mb-8">
          <button
            onClick={swapTokens}
            className="flex items-center justify-center bg-gray-700 p-2 rounded-full"
          >
            <i className="fa-solid fa-arrow-down text-green-500"></i>
            <i className="fa-solid fa-arrow-up text-red-500"></i>
          </button>
        </div>
        <div className="w-80 p-4 rounded-lg mb-8 border-2">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm">You Receive</span>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="text"
              className="bg-transparent text-2xl w-full focus:outline-none"
              placeholder="Amount"
              value={receiveToken} // Placeholder for the amount to receive, can be calculated based on the swap rate
              readOnly
            />
            <div className="flex items-center relative gap-2">
              <select
                onChange={handleReceiveTokenChange}
                className="bg-transparent focus:outline-none appearance-none pr-8"
              >
                {currencies.map((currency) => (
                  <option key={currency.code} value={currency.code}>
                    {currency.code}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="text-sm text-gray-400">
            Balance: 100 {receiveToken}
          </div>
        </div>
        <div className="text-sm text-gray-400 mb-8">1 BTC ≈ 1000 ETH</div>
        <button
          onClick={() => setOpenModal(true)}
          className="bg-green-500 text-black py-3 w-80 rounded-full text-lg mb-8"
        >
          Swap
        </button>
      </div>
      {/* <ConfirmSwap openModal={openModal} setOpenModal={setOpenModal} /> */}
      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">loading</div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
