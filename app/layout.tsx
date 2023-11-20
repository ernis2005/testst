import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import ProviderRedux from './store/ProviderRedux/ProviderRedux'



const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SurdoKG',
  description: 'Свободное общение, где бы вы ни были!',

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
          <Header />
          <main> {children}</main>
          <Footer />
        </ProviderRedux>
      </body>
    </html>
  )
}
