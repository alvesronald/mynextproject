import { Metadata } from "next"

export const metadata: Metadata = {
  title: 'My store',
}


export default function StoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
    <nav>
        <h3>Categories</h3>
        <ul>
            <li>
                Books
            </li>
        </ul>
    </nav>
        {children}
    </>
  )
}
