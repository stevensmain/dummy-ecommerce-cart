import React from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import clsx from 'clsx'

import { Toaster } from '@/components/ui/toaster'
import Navbar from '@/components/navbar'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dummy E-commerce',
  description: 'Rick and Morty app built with Next.js + TailwindCSS',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'flex min-h-screen flex-col')}>
        <Navbar />
        <div className="bg-background pb-6 sm:pb-8 lg:pb-12">
          <main className="relative px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
            {children}
          </main>
        </div>
        <Toaster />
      </body>
    </html>
  )
}
