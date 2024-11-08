"use client"
import { motion } from "framer-motion";
import { AlertTriangle } from 'lucide-react';

const HighRiskAlert = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-4 flex items-center text-red-500"
    >
      <AlertTriangle className="mr-2" />
      <span>High risk detected! Take precautions.</span>
    </motion.div>
  );
};

export default HighRiskAlert;