import Link from 'next/link'
import cn from 'classnames'

const NavItem = ({ label, href = '' }) => <li className={cn(
  'font-light uppercase px-3 text-sm block border-b border-1 border-transparent h-full flex',
  'items-center cursor-pointer'
)}>
  <Link href={href}>
    <a>{label}</a>
  </Link>
</li>

export default function Header({ siteName }) {
  return (
    <header className="flex items-center justify-between h-22 px-8 flex-shrink-0 border-b border-solid border-gray-200">
      <Link href='/'>
        <a>
          <h1 className="text-2xl font-normal font-display uppercase tracking-wide">
            {siteName}
          </h1>
        </a>
      </Link>
      <nav className={'h-full'}>
        <ul className={'flex h-full items-center'}>
          <NavItem label="Series" href="/series" />
          <NavItem label="Events" href="/events" />
          <NavItem label="Cv" href="/cv" />
          <NavItem label="Contact" href="/contact" />
          <NavItem label="Mahmoud Fine Art Academy" href="/mahmoud-fine-art-academy" />
        </ul>
      </nav>
    </header>
  )
}
