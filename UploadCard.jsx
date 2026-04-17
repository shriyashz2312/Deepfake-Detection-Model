import { motion } from "framer-motion";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function UploadCard({ title, accept, type }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAnalyze = async () => {
    if (!file) return;
    setLoading(true);

    const formData = new FormData();
    formData.append("file", file);

    const res = await axios.post(
      `http://127.0.0.1:8000/analyze/${type}`,
      formData
    );

    navigate("/result", {
      state: {
        result: res.data,
        filename: file.name,
      },
    });
  };

  return (
    <motion.div className="bg-gray-900/80 border border-gray-700 rounded-2xl p-10 text-center w-[420px]">
      <FaCloudUploadAlt className="text-5xl text-blue-400 mx-auto mb-6" />
      <h2 className="text-2xl font-bold mb-6">{title}</h2>

      <input
        type="file"
        accept={accept}
        onChange={(e) => setFile(e.target.files[0])}
        className="block mx-auto mb-6"
      />

      <button
        onClick={handleAnalyze}
        disabled={!file || loading}
        className="px-8 py-3 bg-blue-500 rounded-lg font-semibold hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? "Analyzing..." : "Analyze"}
      </button>
    </motion.div>
  );
}
