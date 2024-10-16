import type { Metadata } from 'next'
import './globals.css'
import Nav from './nav'

export const metadata: Metadata = {
  title: 'PokePoll',
  description: 'What is the best Pokemon?',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-white">
        {children}
        <Nav />
      </body>
    </html>
  )
}
