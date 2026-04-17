import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import { FaImage, FaVideo, FaMicrophone } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

// IMPORTANT: these file names MUST match exactly
import bg from "../assets/bg.jpg";
import aiHead from "../assets/ai-head.png";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen relative text-white"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />

        <div className="max-w-7xl mx-auto px-10 pt-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SECTION */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-extrabold leading-tight"
            >
              Deepfake Detection System
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="mt-6 text-lg text-gray-300 max-w-xl"
            >
              Effortlessly detect AI-generated fake images, videos, and audio
              using advanced deep learning.
            </motion.p>

            {/* CARDS */}
            <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* IMAGE CARD */}
              <div className="bg-white/5 border border-white/10 backdrop-blur rounded-xl p-6 text-center hover:scale-105 transition">
                <FaImage className="text-blue-400 text-4xl mx-auto mb-4" />
                <p className="font-semibold mb-4">For Images</p>
                <button
                  onClick={() => navigate("/analyze")}
                  className="px-6 py-3 bg-blue-500 rounded-lg text-sm"
                >
                  Upload Image
                </button>
              </div>

              {/* VIDEO CARD */}
              <div className="bg-white/5 border border-white/10 backdrop-blur rounded-xl p-6 text-center hover:scale-105 transition">
                <FaVideo className="text-pink-400 text-4xl mx-auto mb-4" />
                <p className="font-semibold mb-4">For Videos</p>
                <button
                  onClick={() => alert("Video deepfake detection coming soon")}
                  className="px-6 py-3 bg-pink-500 rounded-lg text-sm"
                >
                  Upload Video
                </button>
              </div>

              {/* AUDIO CARD */}
              <div className="bg-white/5 border border-white/10 backdrop-blur rounded-xl p-6 text-center hover:scale-105 transition">
                <FaMicrophone className="text-yellow-400 text-4xl mx-auto mb-4" />
                <p className="font-semibold mb-4">For Audio</p>
                <button
                  onClick={() => alert("Audio deepfake detection coming soon")}
                  className="px-6 py-3 bg-yellow-500 text-black rounded-lg text-sm"
                >
                  Upload Audio
                </button>
              </div>

            </div>
          </div>

          {/* RIGHT SECTION — AI HEAD */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="hidden lg:flex justify-center"
          >
            <img
              src={aiHead}
              alt="AI Head"
              className="w-full max-w-md drop-shadow-[0_0_40px_rgba(59,130,246,0.6)]"
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
}
