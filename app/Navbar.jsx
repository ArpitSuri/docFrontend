// components/Navbar.js
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const Navbar = () => {


    return (
        <nav className="bg-white shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <Link href="/">
                        <Image src="/logo.svg" alt="Logo" width={120} height={30} />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 items-center">
                    <li>
                        <Link href="/" className="hover:text-blue-600">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/explore" className="hover:text-blue-600">
                            Explore
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="hover:text-blue-600">
                            Contact Us
                        </Link>
                    </li>
                    <li>
                        <Button>Login !</Button>
                    </li>
                </ul>

            </div>

        </nav>
    );
};

export default Navbar;
