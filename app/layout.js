import "./globals.css";

export const metadata = {
  title: "Simple Todo",
  description: "A clean ToDo App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Gantari:wght@100..900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body
        className={
          "font-sans bg-gradient-to-br from-[#8EC5FC] to-[#E0C3FC] bg-no-repeat min-h-screen bg-cover"
        }
      >
        <div className="flex items-center justify-center w-screen h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
