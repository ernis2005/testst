import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import ProviderRedux from './store/ProviderRedux/ProviderRedux'
import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import LinkPhone from '../components/LinkPhone/LinkPhone'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: " Кос и Ког",
  description: '',
  icons: [
    {
      rel: "icon",
      sizes: "any",
      url: "/logo.jpg",
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProviderRedux>
          <LinkPhone />
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </ProviderRedux>
      </body>
    </html>
  )
}