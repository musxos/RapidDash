import React from 'react';
import Image from 'next/image';

import txsImage from '../images/txs.svg';
import volumeImage from '../images/volume.svg';
import refImage from '../images/ref.svg';
import { useDetails } from '../hooks/useDetails';
import txsIcon from '../images/txs-icon.svg';
import volumeIcon from '../images/volume-icon.svg';
import refIcon from '../images/ref-icon.svg';
import { useAccount } from 'wagmi';
function TopStatistics() {

    const account = useAccount()
    
    const details = useDetails(account.address);
    
     const items = [
      {
       title: 'Transactions Count',
       value: details.txs,
       img: txsImage,
       icon: txsIcon,
      },
      {
       title: 'Volume',
       value: details.volume,
       img: volumeImage,
       icon: volumeIcon,
      },
      {
       title: 'References',
       value: '0',
       img: refImage,
       icon: refIcon,
      },
     ];
     
 return (
  <div className={`bg-theme-mainColor col-span-3 w-full p-2 md:p-4 flex flex-col gap-4 rounded-lg`}>
   <div className="flex items-center justify-between">
    <div className="flex flex-col">
     <span className="text-theme-green text-md">Statistics</span>
     <span className="text-white text-lg">From this section, you can see statistics</span>
    </div>
   </div>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-2 h-full">
    {items.map((item, index) => (
     <div className="bg-theme-mainbold justify-between flex flex-col gap-2 w-full h-full rounded-lg" key={index}>
      <div className="flex items-center flex-col justify-between gap-1 h-full">
       <div className="flex justify-start items-start gap-1 w-full h-full p-[6px]">
        <Image src={item.icon} alt="" className="w-6 md:w-8 xl:w-12" />
        <div className="flex flex-col">
         <span className="text-md xl:text-lg text-slate-300">{item.title}</span>
         <span className="font-medium text-lg xl:text-xl text-white">{item.value}</span>
        </div>
       </div>
       <Image src={item.img} alt="" className="w-full object-contain rounded-lg" />
      </div>
     </div>
     // <div className="bg-theme-mainColor justify-between flex flex-col gap-2 w-full h-full rounded-lg" key={index}>
     //  <div className="flex items-center p-2 gap-1">
     //   <Image src={item.icon} alt="" />
     //   <div className="flex flex-col">
     //    <span className="font-bold text-sm text-slate-300">{item.title}</span>
     //    <span className="text-white font-bold text-md">{item.value}</span>
     //   </div>
     //  </div>
     //  <Image src={item.img} alt="" className="w-full max-h-[50px] object-cover rounded-lg" />
    ))}
   </div>
  </div>
 );
}

export default TopStatistics;
