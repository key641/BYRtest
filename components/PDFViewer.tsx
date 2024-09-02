import dynamic from "next/dynamic";

import ReactPDF, { PDFViewer } from "@react-pdf/renderer";
import { ReactElement } from "react";

const Viewer = ({
  children,
}: {
  children: ReactElement<ReactPDF.DocumentProps>;
}) => {
  return <PDFViewer className="h-full w-full">{children}</PDFViewer>;
};

export default dynamic(() => Promise.resolve(Viewer), { ssr: false });
