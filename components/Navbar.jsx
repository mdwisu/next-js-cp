import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-2">
        <li>
          <Link className="text-gray-800 hover:underline font-roboto" href="/">
            Home
          </Link>
        </li>
        <li className="ml-auto">
          <Link
            className="text-gray-800 hover:underline font-poppins"
            href="/blog"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className="text-gray-800 hover:underline font-poppins"
            href="/about"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="text-gray-800 hover:underline font-poppins"
            href="/contact"
            prefetch={false}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
