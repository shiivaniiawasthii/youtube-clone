import Image from "next/image";
import { Inter } from "next/font/google";

import VideoGrid from "@/components/videoGrid";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <VideoGrid />
    </div>
  );
}
