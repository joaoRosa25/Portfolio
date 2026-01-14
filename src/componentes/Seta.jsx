import { useState } from "react";
import { motion } from "framer-motion";

export default function Seta({ onToggle }) {
  // Estado local que controla se a seta esta aberta ou fechada
  const [open, setOpen] = useState(false);

  // fn chamada quando o user clica na seta
  function handleClick() {
    // inverte o estado
    setOpen(!open);
    
    onToggle(!open); // avisa o Work
  }

  return (
    // Seta roda 180 graus
    <motion.button
      onClick={handleClick}
      className="mt-10 text-white text-4xl mx-auto block"
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.7 }}
    >
      ⌄
    </motion.button>
  );
}
