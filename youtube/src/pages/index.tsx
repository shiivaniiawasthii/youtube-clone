import Image from "next/image";
import { Inter } from "next/font/google";
import VideoCard from "@/components/videoCard";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <VideoCard
        title={"Prateek Kuhad - Mulaqat (Official Music Video) | Tara Sutaria"}
        author={"Prateek Kuhad"}
        views={"8.1M views"}
      />
    </div>
  );
}
