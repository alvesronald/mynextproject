import { Metadata } from "next"
import { Navbar } from "../components/Navbar"


export const metadata: Metadata = {
  title: 'My project',
  description: 'My description project',
  keywords:['next','react']
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
