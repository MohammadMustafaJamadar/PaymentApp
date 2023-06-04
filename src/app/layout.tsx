import Footer from '@/components/Footer_Component/Footer'
import NavBar from '@/components/NavBar_Component/NavBar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Home',
  description: 'Mj creactions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
          {children} 
        <Footer />
      </body>
    </html>
  )
}
