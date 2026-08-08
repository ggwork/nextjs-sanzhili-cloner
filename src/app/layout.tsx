import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";

// Web-loaded CJK fallback for the site's "PingFang SC / Source Han Sans CN".
// Apple devices render the real PingFang SC from the CSS font stack in
// globals.css; everyone else gets Noto Sans SC (a near-identical Source Han
// Sans derivative) so the clone matches the original's typography.
const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "苏州peek加工_peek材料-苏州三之立高分子材料有限公司",
  description:
    "苏州三之立高分子材料有限公司成立于2020年，为一家主要从事特种工程塑料销售的企业，公司主要产品为苏州peek加工,peek材料系列，产品应用于汽车、消费电子产品、小型家用电器和体育安防等领域，可提供特殊材料个性化定制服务，满足客户对特种材料的不同需求。",
  keywords: ["苏州三之立高分子材料有限公司", "苏州peek加工", "peek材料"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${notoSansSC.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white">{children}</body>
    </html>
  );
}
