import React from 'react';
import Image from 'next/image';

import logo from '../images/logo.png';
import { useAccount, useDisconnect } from "wagmi";
import { useRouter } from "next/router";
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
  <div className="px-2 md:px-4 h-[60px] rounded-lg bg-theme-mainColor w-full flex items-center justify-between">
   <div className="h-[50px] flex items-center justify-start max-h-full">
    <Image src={logo} alt="" className="max-h-full my-auto object-contain w-[50px]" />
   </div>
   <button  onClick={() => {
                  disconnect.disconnect();
                   }}  className="flex items-center gap-1 cursor-pointer transition-colors py-[4px] px-[23px] rounded-[6px] bg-theme-green text-[14px] text-black">Logout</button>
  </div>
 );
}

export default Navbar;
