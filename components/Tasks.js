import React from 'react';
import tasksImage1 from '../images/tasks-1.svg';
import Image from 'next/image';
import { BiCheck } from 'react-icons/bi';
import { nanoid } from 'nanoid';
function Tasks() {
 const items = [
  {
   title: 'Follow Us!',
   icon: tasksImage1,
   desc: 'Follow us to be informed about the latest developments.',
   subs: ['Twitter', 'Telegram'],
  },
  {
   title: 'DeFi',
   icon: tasksImage1,
   desc: 'Experience decentralized finance.',
   subs: ['Swap', 'Add Liquidity'],
  },
  {
   title: 'RNS',
   icon: tasksImage1,
   desc: 'Try our decentralized Name service.',
   subs: ['Register 2 Name!'],
  },
 ];

 return (
  <div className={`bg-[url('../images/bg.svg')] w-full h-full flex flex-col p-6 gap-4 rounded-lg`}>
   <div className="flex items-center justify-between">
    <div className="flex flex-col gap-2">
     <h2 className="text-3xl text-white">Tasks</h2>
     <h2 className="text-md text-slate-300">From this section, you can follow weekly tasks and earn points quickly.</h2>
    </div>
   </div>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    {items.map((item, index) => (
     <div className="bg-theme-mainColor flex flex-col gap-2 w-full p-4 rounded-lg justify-between" key={index}>
      <div className="flex flex-col gap-2">
       <div className="flex items-end gap-3">
        <Image src={item.icon} alt="" />
        <span className="font-bold text-xl text-white">{item.title}</span>
       </div>
       <div className="flex flex-col gap-1 pl-3">
        {item.subs.map((sub, subIndex) => (
         <div key={nanoid()} className="flex gap-1 items-center text-slate-300 text-lg">
          <BiCheck className="text-3xl" />
          <span>{sub}</span>
         </div>
        ))}
       </div>
      </div>
      <span className="text-slate-300 text-sm">{item.desc}</span>
     </div>
    ))}
   </div>
  </div>
 );
}

export default Tasks;
