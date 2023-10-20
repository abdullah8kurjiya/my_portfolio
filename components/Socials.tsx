// links
import Link from 'next/link';

// icons
import {
  RiLinkedinLine,
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiGithubLine,
  RiTwitterXLine
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className='flex items-center gap-x-5 text-lg '>
      <Link href={'https://www.linkedin.com/in/abdullah-saad28'} className='hover:text-accent transition-all duration-300'>
        <RiLinkedinLine />
      </Link>
      <Link href={'https://www.facebook.com/abdullahsaad28/'} className='hover:text-accent transition-all duration-300'>
        <RiFacebookLine />
      </Link>
      <Link href={'https://www.instagram.com/abdullahsaad177/'} className='hover:text-accent transition-all duration-300'>
        <RiInstagramLine />
      </Link>
      <Link href={'https://github.com/abdullah8kurjiya'} className='hover:text-accent transition-all duration-300'>
        <RiGithubLine />
      </Link>
      <Link href={'https://twitter.com/AbdullahSaad_28'} className='hover:text-accent transition-all duration-300'>
        <RiTwitterXLine />
      </Link>
    </div>
  );
};

export default Socials;
