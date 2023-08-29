import React from 'react';
import Image from 'next/image';

import logo from '../images/logo.png';
import { useAccount, useDisconnect } from 'wagmi';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useDetails } from '../hooks/useDetails';
function Navbar() {
 const router = useRouter();

 const disconnect = useDisconnect();

 const account = useAccount({
  onConnect: () => {
   router.push('/panel');
  },
  onDisconnect: () => {
   router.push('/');
  },
 });


 return (
  <div className="px-8 h-20 rounded-lg bg-neutral-800 w-full flex items-center justify-between">
   <div className="h-full flex items-center justify-start">
    <Image src={logo} alt="" className="max-h-full my-auto object-contain w-[50px]" />
   </div>
   <div className="items-center gap-8 hidden md:flex">
    <Link href="/panel" className="text-white/90 hover:text-white transition-colors">
     Panel
    </Link>

    <Link href="/tasks" className="text-white/90 hover:text-white transition-colors ml-4">
     Tasks
    </Link>
   </div>
   <button
    onClick={() => {
     disconnect.disconnect();
    }}
    className="flex items-center gap-1 cursor-pointer transition-colors py-2 px-6 rounded-[6px] bg-violet-500 text-white"
   >
    Logout
   </button>
  </div>
 );
}

export default Navbar;
