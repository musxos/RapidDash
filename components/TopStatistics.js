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
   title: 'Txs',
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
   title: 'Ref',
   value: '1.000',
   img: refImage,
   icon: refIcon,
  },
 ];
 return (
  <div className={`bg-[url('../images/bg.svg')] w-full h-full flex flex-col p-6 gap-4 rounded-lg`}>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {items.map((item, index) => (
     <div className="bg-theme-mainColor flex flex-col gap-2 w-full p-4 rounded-lg" key={index}>
      <div className="flex items-center gap-1">
       <Image src={item.icon} alt="" />
       <div className="flex flex-col">
        <span className="font-bold text-md text-slate-300">{item.title}</span>
        <span className="text-white font-bold text-lg">{item.value}</span>
       </div>
      </div>
      <Image src={item.img} alt="" className="w-full" />
     </div>
    ))}
   </div>
  </div>
 );
}

export default TopStatistics;
