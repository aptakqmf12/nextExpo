import React from "react";
import Image from "next/image";

interface CardProps {
  name: string;
  role: string;
  imageUrl: string;
}

export default function Card({ name, role, imageUrl }: CardProps) {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-80 text-center">
        <div className="flex items-center justify-center overflow-auto rounded-b-lg">
          <Image width={96} height={96} src={imageUrl} alt="profile" />
        </div>

        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-500 text-sm mb-4">{role}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
          팔로우
        </button>
      </div>
    </div>
  );
}
