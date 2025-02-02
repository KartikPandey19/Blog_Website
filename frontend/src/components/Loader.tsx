import { useEffect, useState } from "react";

export default function Loader(): JSX.Element {
  const [lineWidth, setLineWidth] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLineWidth((prev) => (prev < 120 ? prev + 2 : 120));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
        <div className="relative w-[200px] h-[200px] flex items-end justify-center">
      {/* Pencil */}
      <svg
        className="absolute transform rotate-[-20deg] animate-bounce"
        width="50"
        height="50"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="black"
        strokeWidth="5"
      >
        <polygon points="60,140 140,60 160,80 80,160" fill="#F4A261" stroke="#E76F51" />
        <polygon points="140,60 160,40 180,60 160,80" fill="#2A9D8F" stroke="#264653" />
        <polygon points="60,140 40,160 60,180 80,160" fill="#E9C46A" stroke="#E76F51" />
      </svg>
      
      {/* Writing Line */}
      <div className="absolute bottom-0 left-10 h-[3px] bg-gray-800" style={{ width: `${lineWidth}px` }}></div>
    </div>
    </div>
  );
}
