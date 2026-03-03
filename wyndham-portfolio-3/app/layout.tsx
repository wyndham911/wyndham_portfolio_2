import "./globals.css";

export const metadata = {
  title: "Wyndham Woo | Portfolio",
  description: "Data Science @ UC Berkeley — ML, systems, and product-focused engineering.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}