import '../public/fonts/font.css'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'همگامان سازه',
  description: 'همگامان سازه سایتی برای ساختی آسان',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir='rtl'>
      
      <body className={inter.className}>{children}</body>
    </html>
  )
}
