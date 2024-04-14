// recoilはクライアントコンポーネントでしか使えないためuse clientを記載
"use client";
// MUIのフォント設定まわり
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Inter } from "next/font/google";
// リセットCSS
import "the-new-css-reset/css/reset.css";

import { RecoilRoot } from "recoil";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={inter.className}
        style={{ height: "100%", width: "100%" }}
      >
        {/* アプリケーション全体でRecoilを利用するためにラッピング */}
        <RecoilRoot>{children}</RecoilRoot>
      </body>
    </html>
  );
}
