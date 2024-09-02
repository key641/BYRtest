"use client";

import Link from "next/link";
import datas from "./data";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-24">
      {datas.map((data, idx) => (
        <Link href={`/${idx}`} key={idx}>
          第{idx}个成绩单
        </Link>
      ))}
    </main>
  );
}
