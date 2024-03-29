

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/shared/Header/header";

import { Providers } from "./contexts/Provider";
import { Drawer_and_NotificationProvider } from "./contexts/notification_and_Drawer_Provider";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
      <Providers  >
  <Drawer_and_NotificationProvider>
        <Header/>
      <main>

        {children}
        </main>
  </Drawer_and_NotificationProvider>
      </Providers>
        </body>
    </html>
  );
}
