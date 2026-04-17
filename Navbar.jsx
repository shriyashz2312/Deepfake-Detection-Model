import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ import Link

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur border-b border-gray-800"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4 text-white">
        {/* Logo / Title */}
        <h1 className="text-xl font-bold tracking-wide">
          FAKE<span className="text-blue-500">DOWN</span>
        </h1>

        {/* Navigation Links */}
        <div className="space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          <Link to="/analyze" className="hover:text-blue-400 transition">Analyze</Link>
          <Link to="/result" className="hover:text-blue-400 transition">Result</Link>
        </div>
      </div>
    </motion.nav>
  );
}
