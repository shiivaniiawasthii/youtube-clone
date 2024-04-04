import React from "react";

function VideoCard(props: any) {
  return (
    <div className=" p-3 ">
      <img src={props.image} className="rounded-2xl"></img>
      <div className="grid grid-cols-12 ">
        <div className="col-span-1">
          <img src="pk.png" className="w-13 h-12 rounded-full"></img>
        </div>
        <div className="col-span-11 pl-4">
          <div> {props.title}</div>

          <div className="text-gray-600 text-base">{props.author}</div>
          <div className="text-gray-600 text-base">{props.views} </div>
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
