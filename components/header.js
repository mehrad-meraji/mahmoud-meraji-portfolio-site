import Link from 'next/link'

export default function Header({ siteName }) {
  return (
    <section className="flex items-center h-22 px-8">
      <h1 className="text-2xl font-display uppercase tracking-wide">
        {siteName}
      </h1>
    </section>
  )
}
