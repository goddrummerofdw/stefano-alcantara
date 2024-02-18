import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Navbar from './navbar/navbar'
import { DarkModeProvider } from './darkmode/darkmodecontext'
import DarkModeSwitch from './darkmode/darkmodeswitch'
import { GoogleAnalytics } from '@next/third-parties/google'
// import Footer from './footer/page'

// const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-inter',
// })

const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'Stefano Alcantara',
  description: 'Awesome Tatoos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <DarkModeProvider>
        <body className={`${poppins.variable} font-sans`}>
          <Navbar />
          <DarkModeSwitch />
          <GoogleAnalytics gaId={process.env.GOOGLE_ID as string} />
          {children}
        </body>
      </DarkModeProvider>
    </html>
  )
}
