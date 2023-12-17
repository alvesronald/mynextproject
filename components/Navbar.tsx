import Link from "next/link";

export function Navbar(){
    return (
        <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href='/about'>About</Link>
          </li>
        </ul>

        <ul>
          <li>
            <Link href='/store'>Store</Link>
          </li>
        </ul>
      </nav>
    )
}