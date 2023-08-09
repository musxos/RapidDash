"use client";

import React from 'react';
import tasksImage1 from '../images/tasks-1.svg';
import Image from 'next/image';
import { BiCheck } from 'react-icons/bi';
import { useAccount } from 'wagmi';
import { useState } from 'react';

function YourDetails() {
    const account = useAccount()
    
    const refferalLink = "Copy Refferal Link"

    const [copyButtonText, setCopyButtonText] = useState(refferalLink);

    const handleClickRef = (e) => {
        e.preventDefault();
    
        window.navigator.clipboard.writeText(
          "https://rapidchain.io/?ref=" + account.address,
        );
    
        setCopyButtonText("Copied");
    
        setTimeout(() => {
          setCopyButtonText(refferalLink);
        }, 2500);


      };

      
 const items = [
  {
   title: 'Your Address:',
   desc: account.address?.slice(0, 10)+"..."+account.address?.slice(-6)
  },
  {
   title: 'Airdrop Supply:',
   desc: '1.000.000',
  },
  {
   title: 'Completed Tasks:',
   desc: '0',
  },
  {
   title: 'Projects:',
   desc: '0',
  },
  {
   title: 'You Won:',
   desc: '0',
  },
  {
   title: 'Your Reference Link:',
   desc: copyButtonText
  },
 ];


 

 return (
  <div className={`bg-[url('../images/bg.svg')] w-full h-full flex flex-col p-6 gap-4 rounded-lg`}>
   <div className="flex items-center justify-between">
    <div className="flex flex-col gap-2">
     <h2 className="text-3xl text-white">Your Details</h2>
     {/*<h2 className="text-md text-slate-300">From this section, you can follow weekly tasks and earn points quickly.</h2>*/}
    </div>
   </div>
   <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
    {items.map((item, index) => (
     <div className="bg-theme-mainColor flex flex-col gap-2 w-full p-4 rounded-lg justify-between" key={index}>
      <span className="text-slate-300 text-sm">{item.title}</span>
      <span style={{cursor:index === items.length-1 ? "default":""}}  onClick={e => index === items.length - 1  ? handleClickRef(e) : console.log("x") } className="font-bold text-xl text-white" >{item.desc}</span>
     </div>
    ))}
   </div>
  </div>
 );
}

export default YourDetails;
