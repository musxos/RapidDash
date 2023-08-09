import React from 'react';
import Image from 'next/image';
import { useAccount, useDisconnect } from "wagmi";
import { useRouter } from "next/router";

import logo from '../images/logo.png';

function Navbar() {
    const router = useRouter();

    const disconnect = useDisconnect();

    const account = useAccount({
        onConnect: () => {
          router.push("/panel");
        },
        onDisconnect: () => {
          router.push("/");
        },
      });
      
 return (
  <div className="h-[80px] rounded-lg bg-theme-mainColor w-full flex items-center justify-between">
   <Image src={logo} alt="" className="max-h-full object-contain my-auto" />
   <div className="pr-4">
    <button   
    onClick={() => {
                  disconnect.disconnect();
                   }}
       className="mx-auto px-3 rounded-md bg-theme-green text-lg text-black">Logout</button>
   </div>
  </div>
 );
}

export default Navbar;
