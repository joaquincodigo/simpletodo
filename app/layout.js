import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Simple Todo",
  description: "A clean ToDo App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-[#8EC5FC] to-[#E0C3FC] bg-no-repeat min-h-screen bg-cover`}
      >
        <div className="flex items-center justify-center w-screen h-screen">
        {children}
        </div>
      </body>
    </html>
  );
}
