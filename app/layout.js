import Header from "./components/Header";

import { Josefin_Sans } from "next/font/google";

import "./_styles/globals.css";
import { ReservationProvider } from "./components/ReservationContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // title: "The wild Oasis",
  title: {
    template: "%s The Wild Hotel",
    default: "Welcome /  The Wild Hotel",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the American Rocky mountains",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">
            <ReservationProvider>{children}</ReservationProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
