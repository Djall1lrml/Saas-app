import Image from 'next/image';
import Link from 'next/link';
import Navitems from './Navitems'; // Adjusted path to match the correct location
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link href='/'>
        <div className='flex items-center gap-2.5 cursor-pointer'>
          <Image src='/images/logo.svg' alt='logo' width={46} height={44} />
        </div>
      </Link>
      <div className='flex items-center gap-8'>
        <Navitems />
        <SignedOut>
          <div className='flex items-center gap-2'>
            <SignInButton>
              <button className='btn-signin'>Sign In</button>
            </SignInButton>
          </div>
        </SignedOut>
        <SignedIn>
          <UserButton appearance={{ variables: { colorPrimary: '#fe5933' } }} />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
