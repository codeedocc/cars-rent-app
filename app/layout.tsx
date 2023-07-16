import './globals.css'

import { Footer, Navbar } from '@/components'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Аренда машин',
  description: 'Откройте для себя лучшие автомобили в мире!',
  icons: {
    icon: '/project-logo.png',
    apple: '/project-logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
