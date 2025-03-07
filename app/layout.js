import "./globals.css"
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.png"/>
      <body>
        {children}
      </body>
    </html>
  );
}
