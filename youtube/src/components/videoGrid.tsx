import React from "react";
import VideoCard from "./videoCard";
let contents = [
  {
    title: "Prateek Kuhad - Mulaqat (Official Music Video) | Tara Sutaria",
    author: "Prateek Kuhad",
    views: "8.1M views",
    image: "/pk.png",
  },
  {
    title: "Prateek Kuhad - Mulaqat (Official Music Video) | Tara Sutaria",
    author: "Prateek Kuhad",
    views: "8.1M views",
    image: "/pk.png",
  },
  {
    title: "Prateek Kuhad - Mulaqat (Official Music Video) | Tara Sutaria",
    author: "Prateek Kuhad",
    views: "8.1M views",
    image: "/pk.png",
  },
  {
    title: "Prateek Kuhad - Mulaqat (Official Music Video) | Tara Sutaria",
    author: "Prateek Kuhad",
    views: "8.1M views",
    image: "/pk.png",
  },
  {
    title: "Prateek Kuhad - Mulaqat (Official Music Video) | Tara Sutaria",
    author: "Prateek Kuhad",
    views: "8.1M views",
    image: "/pk.png",
  },
];

function VideoGrid() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {contents.map((el) => (
          <VideoCard
            title={el.title}
            author={el.author}
            views={el.views}
            image={el.image}
          />
        ))}
      </div>
    </>
  );
}

export default VideoGrid;
