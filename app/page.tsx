"use client";

import Link from "next/link";
import datas from "./data";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-between p-24">
      {datas.map((data, idx) => (
        <Link
          href={`/${idx}`}
          target="_blank"
          key={idx}
          className="p-3 border border-black rounded-md hover:bg-gray-200"
        >
          浏览器访问 第{idx}个成绩单
        </Link>
      ))}
      {datas.map((data, idx) => (
        <Link
          href={`/generate/${idx}`}
          target="_blank"
          key={idx}
          className="p-3 border border-black rounded-md hover:bg-gray-200"
        >
          下载第{idx}个成绩单
        </Link>
      ))}
    </main>
  );
}
