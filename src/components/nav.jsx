import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function Nav() {
  return (
    (<nav className="flex justify-between items-center p-4 bg-gray-100">
      <Link href="/" className="text-xl font-bold">Your Logo</Link>
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Button asChild>
          <Link href="/business">For Business</Link>
        </Button>
      </div>
    </nav>)
  );
}

