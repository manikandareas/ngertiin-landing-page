import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ngerti.In',
  description: 'Ngerti.In',

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
