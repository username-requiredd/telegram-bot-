import { useState } from "react"
import { ArrowDown, ChevronDown, Clock, Flame, Info, Settings, X } from "lucide-react"

const TransactionModal = ({ isOpen, onClose, fromToken = "ETH", toToken = "USDC" }) => {
  const [amount, setAmount] = useState("")
  const [gasOption, setGasOption] = useState("standard")
  const [isModalOpen, setIsModalOpen] = useState(false)


  return (
    <>

    <div>
        
    </div>
    
    </>
  )
}

export default TransactionModal