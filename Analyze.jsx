import Navbar from "../components/Navbar";
import UploadCard from "../components/UploadCard";
import { useLocation } from "react-router-dom";
import aiHead from "../assets/ai-head.png";

export default function Analyze() {
  const { state } = useLocation();
  const type = state?.type || "image";

  const config = {
    image: { title: "Analyze Image", accept: "image/*" },
    video: { title: "Analyze Video", accept: "video/*" },
    audio: { title: "Analyze Audio", accept: "audio/*" },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white">
      <Navbar />

      <div className="pt-32 max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex justify-center">
          <UploadCard
            title={config[type].title}
            accept={config[type].accept}
            type={type}
          />
        </div>

        <div className="hidden lg:flex justify-center">
          <img
            src={aiHead}
            alt="AI Robot"
            className="w-full max-w-md drop-shadow-[0_0_40px_rgba(59,130,246,0.6)]"
          />
        </div>
      </div>
    </div>
  );
}
