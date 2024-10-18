import Link from "next/link";

export default function Header() {
  return (
    <ul className="flex gap-8 bg-pink-300 p-4 flex justify-center text-xl">
      <li>
        <Link href="/">Home</Link>
      </li>
      <li> <Link href="/About">About</Link></li>
      <li>
        <Link href="/Contact-Us">Contact Us</Link>
      </li>
      <li>
        <Link href="/Carrer">Carrer</Link>
      </li>
          </ul>
  );
}


