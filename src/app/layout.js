

export const metadata = {
  title: 'Rachmat Maulana',
  description: 'Made for Pemrograman Web 2023',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
