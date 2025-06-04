import React from 'react';

// Basic React component that wraps its children
// We will restore necessary functionality later
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
