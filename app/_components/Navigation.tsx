import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="z-10 text-l font-bold">
      <ul className="flex gap-7 items-center">
        <li>
          <Link href="/" className="hover:text-indigo-600 transition-colors">
            O NAMA
          </Link>
        </li>
        <li>
          <Link
            href="/kursevi"
            className="hover:text-indigo-600 transition-colors"
          >
            KURSEVI
          </Link>
        </li>
        <li>
          <Link
            href="/kalendar"
            className="hover:text-indigo-600 transition-colors"
          >
            KALENDAR
          </Link>
        </li>
        <li>
          <Link
            href="/mentorstvo"
            className="hover:text-indigo-600 transition-colors"
          >
            MENTORSTVO
          </Link>
        </li>
        <li>
          <Link
            href="/kontakt"
            className="hover:text-indigo-600 transition-colors"
          >
            KONTAKT
          </Link>
        </li>
      </ul>
    </nav>
  );
}
