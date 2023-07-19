import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'

export const metadata: Metadata = {
  title: 'Next Todos',
  description: 'Created for practice',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className='dark:bg-slate-800' suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
