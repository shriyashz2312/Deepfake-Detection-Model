import { motion } from "framer-motion";

export default function ConfidenceMeter({ confidence, label }) {
  const isFake = label === "Deepfake";
  const color = isFake ? "#ef4444" : "#22c55e"; // red / green
  const strokeDasharray = `${confidence * 3.6} 360`;

  return (
    <div className="flex flex-col items-center justify-center">
      <svg width="180" height="180" className="mb-6">
        <circle
          cx="90"
          cy="90"
          r="80"
          fill="none"
          stroke="#1f2937"
          strokeWidth="12"
        />
        <motion.circle
          cx="90"
          cy="90"
          r="80"
          fill="none"
          stroke={color}
          strokeWidth="12"
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          initial={{ strokeDasharray: "0 360" }}
          animate={{ strokeDasharray }}
          transition={{ duration: 1.5 }}
          transform="rotate(-90 90 90)"
        />
      </svg>

      <h2
        className="text-4xl font-extrabold mb-2"
        style={{ color }}
      >
        {confidence}%
      </h2>

      <p className="text-xl font-semibold">{label}</p>
    </div>
  );
}
