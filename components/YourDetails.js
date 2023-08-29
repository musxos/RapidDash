import React from 'react';
import Image from 'next/image';

import demoImage from '../images/demo-avatar.png';
import { useAccount } from 'wagmi';
import { useState, useMemo } from 'react';
import { useDetails } from '../hooks/useDetails';

function YourDetails() {
 const account = useAccount();

 const refferalLink = 'https://rapidchain.app/?ref=' + account.address;

 const [copyButtonText, setCopyButtonText] = useState(refferalLink);
 const details = useDetails(account.address);

 const handleClickRef = (e) => {
  e.preventDefault();

  window.navigator.clipboard.writeText('https://rapidchain.app/?ref=' + account.address);

  setCopyButtonText('Copied');

  setTimeout(() => {
   setCopyButtonText(refferalLink);
  }, 2500);
 };

 useMemo(() => {
  if (account.isConnected) {
   setCopyButtonText('https://rapidchain.app/?ref=' + account.address);
  }
 }, [account.isConnected]);

 const items = [
  {
   title: 'Your Wallet Address:',
   desc: account.address?.slice(0, 10) + '...' + account.address?.slice(-6),
  },
  {
   title: 'Total Airdrop Supply:',
   desc: '200,000 RAPID',
  },
  {
   title: 'Testnet Round:',
   desc: '#1',
  },
  {
   title: 'End of Round',
   desc: '30/09/2023',
  },
  {
   title: 'You Won:',
   desc: details.txs * details.volume * 0.0001,
  },
  {
   title: 'Your Reference Link:',
   desc: copyButtonText,
  },
 ];

 return (
  <div className={`bg-neutral-800 flex flex-col p-2 md:p-4 gap-4 rounded-lg shrink-0 w-full lg:w-96`}>
   <Image src={demoImage} alt="" className="rounded-full mx-auto max-w-[150px] md:max-w-[250px] w-full" />
   <div className="flex items-center justify-between">
    <div className="flex flex-col">
     <span className="text-violet-500 font-medium mb-1">Your Details</span>
     <span className="text-white/80">From this section, you can see your own information</span>
    </div>
   </div>
   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2">
    {items.map((item, index) => (
     <div className="border-b border-neutral-700 flex flex-col gap-[1px] w-full py-2 justify-between" key={index}>
      <span className="text-slate-300 text-md">{item.title}</span>
      <span
       style={{ cursor: index === items.length - 1 ? 'default' : '' }}
       onClick={(e) => (index === items.length - 1 ? handleClickRef(e) : console.log('x'))}
       className="font-medium text-lg text-white truncate"
      >
       {item.desc}
      </span>
     </div>
    ))}
   </div>
  </div>
 );
}

export default YourDetails;
