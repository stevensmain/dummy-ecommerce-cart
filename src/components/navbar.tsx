import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Menu } from 'lucide-react';

const CartButton = dynamic(async () => await import('./cart-button'), { ssr: false });

const links = [
  { name: 'Home', href: '/' },
  { name: 'Cart', href: '/cart' },
];

export default function Navbar() {
  return (
    <header className="relative mb-8 h-20 border-b px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
      <div className="flex h-full items-center justify-between md:hidden">
        <Link href="/">
          <h1 className="text-2xl font-bold md:text-4xl">
            Dummy <span className="text-primary">E-Commerce</span>
          </h1>
        </Link>
        <Menu />
      </div>

      <div className="hidden h-full items-center justify-between gap-8 md:flex">
        <div className="flex w-2/3 items-center gap-12 xl:w-1/2">
          <Link href="/">
            <h1 className="text-2xl font-bold md:text-4xl">
              Dummy <span className="text-primary">E-Commerce</span>
            </h1>
          </Link>

          <div className="hidden gap-4 xl:flex">
            {links.map(({ href, name }) => (
              <Link key={href} href={href}>
                {name}
              </Link>
            ))}
          </div>
        </div>

        <CartButton />
      </div>
    </header>
  );
}
