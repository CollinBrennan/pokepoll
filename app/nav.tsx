import Link from 'next/link'

type Link = {
  name: string
  path: string
}

const links: Link[] = [
  { name: 'Results', path: '/results' },
  { name: 'Compare', path: '/compare' },
]
export default function Nav() {
  return (
    <div className="font-bold">
      <a href="/" className="absolute left-4 top-4">
        PokePoll
      </a>
      <div className="absolute right-4 top-4 flex gap-4">
        <a href="/">Vote</a>
        {links.map((link) => (
          <Link href={link.path}>{link.name}</Link>
        ))}
      </div>
    </div>
  )
}
