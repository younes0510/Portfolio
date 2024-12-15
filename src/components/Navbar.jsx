import Link from 'next/link';

const Navbar = () => (
  <nav className="bg-gray-800 text-white py-4 px-6 flex justify-between">
    <div className="text-lg font-bold">My Portfolio</div>
    <div className="space-x-4">
      <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/contact">Contact</Link>
    </div>
  </nav>
);

export default Navbar;
