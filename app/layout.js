import Navigation from "./component/Navigation";
import Logo from "@/Logo";

export const metadata = {
  title: "The wild Oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
