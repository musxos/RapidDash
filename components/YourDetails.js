import React from 'react';
import Image from 'next/image';

import demoImage from '../images/demo-avatar.png';
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
   title: 'Tesnet Round:',
   desc: '#0',
  },
  {
   title: 'End of Round',
   desc: '30/09/2023',
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
  <div className={`bg-theme-mainColor w-full flex basis-full lg:basis-1/3 flex-col p-2 md:p-4 gap-4 rounded-lg`}>
   <Image src={demoImage} alt="" className="rounded-full mx-auto max-w-[150px] md:max-w-[250px] w-full" />
   <div className="flex items-center justify-between">
    <div className="flex flex-col">
     <span className="text-theme-green text-md">Your Details</span>
     <span className="text-white text-lg">From this section, you can see your own information</span>
    </div>
   </div>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2">
    {items.map((item, index) => (
     <div className="border-b-[1px] border-b-slate-400 flex flex-col gap-[1px] w-full py-2 justify-between" key={index}>
      <span className="text-slate-300 text-md">{item.title}</span>
      <span style={{cursor:index === items.length-1 ? "default":""}}  onClick={e => index === items.length - 1  ? handleClickRef(e) : console.log("x") } className="font-medium text-lg text-white">{item.desc}</span>
     </div>
    ))}
   </div>
  </div>
 );
}

export default YourDetails;
