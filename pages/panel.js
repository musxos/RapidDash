import Head from 'next/head';
import GlobalLayout from '../layouts/GlobalLayout';

import { TopStatistics, Navbar, Tasks, RapidChainProjects, YourDetails } from '../components';
import useWindowSize from '../hooks/useWindowSize';
import { useAccount } from 'wagmi';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Home() {
 const [size] = useWindowSize();

 const account = useAccount();
    
 const router = useRouter()
 


 useEffect(() => {
     if (account.address === undefined) {
       router.push("/");
     }
   }, [account]);
   
 return (
  <div className="">
   <Head>
    <title>RAPID CHAIN</title>
    <meta name="description" content="Rapid Chain Project" />
    <link rel="icon" href="/favicon.ico" />
   </Head>
   <GlobalLayout>
    <Navbar />
    {size < 1024 && <YourDetails />}
    <div className="flex flex-col lg:flex-row gap-4 w-full">
     {size >= 1024 && <YourDetails />}
     <div className="w-full grid grid-cols-1 gap-4">
      <TopStatistics />
      <Tasks />
      <RapidChainProjects />
     </div>
    </div>
   </GlobalLayout>
  </div>
 );
}
