"use client";

import { MouseEventHandler, useRef, useState } from "react";
import Card from "./card";

const TrendingScroll = () => {
  const trendingData = [
    {
      id: 1,
      title: "Beyond Earth",
      type: "movie",
      year: 2019,
      age: "PG",
      thumbnails: {
        large: "/assets/thumbnails/beyond-earth/trending/large.jpg",
        small: "/assets/thumbnails/beyond-earth/trending/small.jpg",
      },
    },
    {
      id: 2,
      title: "Bottom Gear",
      type: "movie",
      year: 2021,
      age: "PG",
      thumbnails: {
        large: "/assets/thumbnails/bottom-gear/trending/large.jpg",
        small: "/assets/thumbnails/bottom-gear/trending/small.jpg",
      },
    },
    {
      id: 3,
      title: "Undiscovered Cities",
      type: "tv Series",
      year: 2019,
      age: "E",
      thumbnails: {
        large: "/assets/thumbnails/undiscovered-cities/trending/large.jpg",
        small: "/assets/thumbnails/undiscovered-cities/trending/small.jpg",
      },
    },
    {
      id: 4,
      title: "Beyond Earth",
      type: "movie",
      year: 2019,
      age: "PG",
      thumbnails: {
        large: "/assets/thumbnails/beyond-earth/trending/large.jpg",
        small: "/assets/thumbnails/beyond-earth/trending/small.jpg",
      },
    },
    {
      id: 5,
      title: "Bottom Gear",
      type: "movie",
      year: 2021,
      age: "PG",
      thumbnails: {
        large: "/assets/thumbnails/bottom-gear/trending/large.jpg",
        small: "/assets/thumbnails/bottom-gear/trending/small.jpg",
      },
    },
    {
      id: 6,
      title: "Undiscovered Cities",
      type: "tv Series",
      year: 2019,
      age: "E",
      thumbnails: {
        large: "/assets/thumbnails/undiscovered-cities/trending/large.jpg",
        small: "/assets/thumbnails/undiscovered-cities/trending/small.jpg",
      },
    },
  ];

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [pending, setPending] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown: MouseEventHandler<HTMLDivElement> = (event) => {
    if (!containerRef.current) {
      return;
    }
    setIsDragging(true);
    setTimeout(() => {
      setPending(true);
    }, 100);
    setStartX(event.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (event) => {
    if (!containerRef.current) {
      return;
    }
    if (!isDragging) return;
    const x = event.pageX - containerRef.current.offsetLeft;
    const distance = x - startX;
    containerRef.current.scrollLeft = scrollLeft - distance;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setTimeout(() => {
      setPending(false);
    }, 100);
  };

  return (
    <div className="w-full">
      <h2 className="text-[32px] text-white">Trending</h2>

      <div
        className=" flex flex-col overflow-x-auto select-none"
        style={{ scrollbarWidth: "none" }}
        ref={containerRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          className={`flex gap-5`}
          style={{ width: trendingData.length * 470 }}
        >
          {trendingData.map((data) => {
            return <Card key={data.id} data={data} pending={pending} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TrendingScroll;
