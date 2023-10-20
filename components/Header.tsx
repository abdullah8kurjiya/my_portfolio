// next link
import Link from 'next/link';

// components
import Socials from '../components/Socials'

const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row justify-between items-center gap-y-6 py-15'>
          {/* logo */}
          <Link href={'/'}>
            <h1 className='text-[35px] md:text-[40px] font-bold text-accent'>Kurjiya</h1>
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
