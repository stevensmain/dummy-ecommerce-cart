'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'

import { Button } from './ui/button'
import { useState } from 'react'
import clsx from 'clsx'

interface MobileMenuProps {
  links: { name: string; href: string }[]
}

export function MobileMenu({ links }: MobileMenuProps) {
  const [show, setShow] = useState(false)

  const toggleMenu = () => setShow(!show)

  return (
    <>
      <Button variant="ghost" size="icon" onClick={toggleMenu}>
        <Menu />
      </Button>
      <div
        className={clsx('navbar-menu relative z-50', show ? 'block' : 'hidden')}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25" />
        <nav className="fixed bottom-0 left-0 top-0 flex w-5/6 max-w-sm flex-col overflow-y-auto border-r bg-white px-6 py-6">
          <div className="mb-8 flex items-center justify-between gap-4">
            <Link href="/">
              <h1 className="text-2xl font-bold md:text-4xl">
                Dummy <span className="text-primary">E-Commerce</span>
              </h1>
            </Link>

            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={toggleMenu}
            >
              <X />
            </Button>
          </div>
          <ul>
            {links.map(({ href, name }) => (
              <li key={href} className="mb-1">
                <Link
                  href={href}
                  onClick={() => toggleMenu()}
                  className="block rounded p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
