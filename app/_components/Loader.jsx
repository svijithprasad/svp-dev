"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const hellos = [
  "Hello",        // English
  "Hola",         // Spanish
  "नमस्ते",        // Hindi
  "Bonjour",      // French
  "Ciao",         // Italian
  "Hallo",        // German
  "こんにちは",     // Japanese
];

export default function Loader({ onFinish }) {
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (index < hellos.length - 1) {
      // ⏱ First hello = 1000ms, others = 600ms (longer than transition)
      const delay = index === 0 ? 1000 : 600;

      const timer = setTimeout(() => setIndex(index + 1), delay);
      return () => clearTimeout(timer);
    } else {
      // after last hello, slide up
      const timeout = setTimeout(() => {
        setFinished(true);
        setTimeout(onFinish, 1000); // finish after slide
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [index, onFinish]);

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-[#0E100F] text-[#FFFFE3] z-50 border-b border-[#FFFFE3]/20"
      initial={{ y: 0 }}
      animate={finished ? { y: "-100%" } : { y: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={hellos[index]}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex items-center space-x-2"
        >
          {/* Dot same style as navbar */}
          <span className="w-3 h-3 bg-[#FFFFE3] rounded-full inline-block" />
          <span className="text-4xl font-hanken">{hellos[index]}</span>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
