import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PokePoll',
  description: 'Poll to see the most-liked Pokemon!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-white">
        <div className="flex min-h-screen justify-center">
          <div className="w-full max-w-screen-lg px-4 text-center">
            <h1 className="pt-8 text-4xl font-bold">PokéPoll</h1>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
