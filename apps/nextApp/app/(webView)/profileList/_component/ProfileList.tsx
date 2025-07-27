"use client";

import React from "react";
import Card from "@/components/Card";
import { useSearchParams } from "next/navigation";

export default function ProfileList() {
  const searchParams = useSearchParams();
  const isAppMode = !!searchParams.get("isAppMode");
  return (
    <ul>
      {Array.from({ length: 10 }, (_, index) => (
        <li key={index} className="mb-4">
          <Card
            key={index}
            name={isAppMode ? "앱유저" : "웹유저"}
            role="프론트엔드 개발자"
            imageUrl="https://randomuser.me/api/portraits/men/22.jpg"
          />
        </li>
      ))}
    </ul>
  );
}
