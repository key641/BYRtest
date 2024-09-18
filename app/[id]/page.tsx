"use client";

import Document from "@/components/Document";
import PDFViewer from "@/components/PDFViewer";
import datas from "../data";

export default function Home({ params }: { params: { id: string } }) {
  const idx = Number(params.id);
  const data = datas[idx];
  console.log(data);
  return (
    <main className="flex h-screen flex-col items-center justify-between p-24">
      <PDFViewer>
        <Document data={data}/>
      </PDFViewer>
    </main>
  );
}
