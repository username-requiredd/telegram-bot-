"use client";

import { Button, Modal } from "flowbite-react";
import { CopyIcon, InfoIcon, SendIcon } from "lucide-react";
export function ConfirmSwap({ openModal, setOpenModal }) {
  return (
    <>
      <Modal
        show={openModal}
        size="2xl"
        onClose={() => setOpenModal(false)}
        className="p-0"
      >
        {/* <Modal.Header>Swap Transaction</Modal.Header> */}
        <Modal.Body className="p-0 max-h-[80%]">
          <div className="dark:bg-slate-800 bg-slate-700 text-white p-4 overflow-hidden">
            <div className="flex justify-between items-center mb-4">
              <div className="text-center">
                <div className="bg-gray-800 rounded-full p-2 mb-2">
                  <i className="fab fa-bitcoin text-2xl text-orange-500"></i>
                </div>
                <div className="text-lg font-semibold">0.1298 BTC</div>
                <div className="text-sm text-gray-400">$3.00912</div>
              </div>
              <div className="text-center">
                <SendIcon />
              </div>
              <div className="text-center">
                <div className="bg-gray-800 rounded-full p-2 mb-2">
                  <i className="fab fa-ethereum text-2xl text-purple-500"></i>
                </div>
                <div className="text-lg font-semibold">0.1642 ETH</div>
                <div className="text-sm text-gray-400">$3.00</div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">From:</span>
                <div className="flex items-center">
                  <span className="text-sm">0x8dfu8d...00kdiwjd</span>
                  <CopyIcon />
                </div>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">To:</span>
                <div className="flex items-center">
                  <span className="text-sm">0x8dfu8df...00kdiwjd</span>
                  <CopyIcon />
                </div>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-400">Network fees:</span>
                <span className="text-sm">0.004BTC</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-400">Total:</span>
                <span className="text-sm">0.1320BTC</span>
              </div>
            </div>
            <div className="bg-gray-800 text-center text-sm text-gray-400 p-2 rounded-lg mb-4">
              <InfoIcon />
              Please double check recipient address
            </div>
            <button
              onClick={() => setOpenModal(false)}
              className="bg-green-500 text-black font-semibold py-2 px-4 rounded-full w-full"
            >
              Confirm
            </button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
