import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/20 backdrop-blur-sm p-4 z-10">
      <div className="container mx-auto flex justify-center sm:justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl hidden sm:block">
          My pertama Web
        </Link>
        <div className="flex items-center gap-6 text-white font-semibold">
          <Link href="/" className="hover:text-yellow-300 transition-colors">
            Home
          </Link>
          <Link href="/jokes" className="hover:text-yellow-300 transition-colors">
            Random Jokes
          </Link>
        </div>
      </div>
    </nav>
  );
}