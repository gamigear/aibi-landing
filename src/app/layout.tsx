import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Máy Năng Lượng Cộng Hưởng Sinh Học AIBI - Công Nghệ Chăm Sóc Sức Khỏe Hiện Đại",
  description: "Máy năng lượng cộng hưởng sinh học AIBI - Giải pháp chăm sóc sức khỏe toàn diện với công nghệ tiên tiến từ Đức",
  keywords: "AIBI, máy năng lượng, cộng hưởng sinh học, sức khỏe, công nghệ Đức",
  openGraph: {
    title: "Máy Năng Lượng Cộng Hưởng Sinh Học AIBI",
    description: "Giải pháp chăm sóc sức khỏe toàn diện với công nghệ cộng hưởng sinh học tiên tiến",
    url: "https://aibi.vn",
    siteName: "AIBI Vietnam",
    locale: "vi_VN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
