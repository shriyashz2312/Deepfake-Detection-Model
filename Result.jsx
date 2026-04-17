import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Result() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) {
    return <div className="text-white">No result found</div>;
  }

  const { result, filename } = state;
  const confidence = result.confidence;

  const isFake = result.label === "Deepfake";

  const ringColor = isFake ? "border-red-500" : "border-green-500";
  const textColor = isFake ? "text-red-500" : "text-green-500";

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Navbar />

      <div className="pt-32 flex flex-col items-center">
        
        {/* CIRCLE */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className={`relative w-64 h-64 rounded-full border-8 ${ringColor} flex items-center justify-center`}
        >
          <span className={`text-5xl font-bold ${textColor}`}>
            {confidence}%
          </span>
        </motion.div>

        {/* LABEL */}
        <h2 className={`mt-8 text-3xl font-bold ${textColor}`}>
          {result.label}
        </h2>

        <p className="mt-2 text-gray-400">
          File: {filename}
        </p>

        <button
          onClick={() => navigate("/analyze")}
          className="mt-10 px-8 py-3 bg-blue-500 rounded-lg hover:bg-blue-600"
        >
          Analyze Another Image
        </button>
      </div>
    </div>
  );
}
