// fonts
import { Sora } from '@next/font/google';

// font settings
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

// components
import Nav from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg';
import Head from "next/head";

import  { ReactNode } from "react";

interface Props {
    children?: ReactNode
    // any props that come into the component
}

const Layout = ({ children }:Props) => {
  return (
    <div
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}
    >
      <Head>
				<title>Abdullah Kurjiya</title>
				<link rel="icon" href="/Abdullah.png" />
				<meta property="og:title" content="Abdullah Kurjiya" />
				<meta
					property="og:description"
					content="Abdullah Kurjiya's Portfolio"
				/>
				<meta property="title" content="Abdullah Kurjiya" />
				<meta
					property="description"
					content="Abdullah Kurjiya's Portfolio"
				/>
				<meta property="og:image" content="/Abdullah.png" />
				<meta property="og:url" content="https://abdullah-kurjiya-portfolio.vercel.app/" />
			</Head>
      <TopLeftImg />
      <Nav />
      <Header />
      {children}
    </div>
  );
};

export default Layout;
