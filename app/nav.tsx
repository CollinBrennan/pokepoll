'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const pages = [
  { name: 'Vote', route: '/' },
  { name: 'Results', route: '/results' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="flex gap-4 pt-8 text-lg">
      {pages.map((page) => {
        return (
          <Link
            href={page.route}
            className={`border-b-2 ${pathname === page.route ? 'border-white text-white' : 'border-zinc-400 text-zinc-400'}`}
          >
            {page.name}
          </Link>
        )
      })}
    </nav>
  )
}
