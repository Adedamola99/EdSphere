import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Edsphere',
  description: 'A full fledge educational app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className="font-aeonik">{children}</body>
      </html>
  );
}
