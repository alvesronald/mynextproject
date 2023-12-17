import { Metadata } from "next"
import { Navbar } from "../components/Navbar"
import { Roboto } from 'next/font/google'


export const metadata: Metadata = {
  title: 'My project',
  description: 'My description project',
  keywords:['next','react']
}

const roboto = Roboto({
  weight: ['300', '400'],
  style: ['italic', 'normal'],
  subsets: ['latin']
})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
