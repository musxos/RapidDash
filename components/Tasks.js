import React from 'react';
import { BiCheck, BiXCircle } from 'react-icons/bi';
import { LuArrowBigRightDash } from 'react-icons/lu';
import { useTasks } from '../hooks/useTasks';

function Tasks() {
 const tasks = useTasks();
 const items = tasks?.tasks;
 console.log(items);

 return (
  <div className={`bg-neutral-700 col-span-3 w-full flex flex-col p-2 md:p-4 gap-4 rounded-lg`}>
   <div className="flex items-center justify-between">
    <div className="flex flex-col">
     <span className="text-violet-400 text-xl font-medium">Tasks</span>
     <span className="text-white/90">From this section, you can follow weekly tasks and earn points quickly.</span>
    </div>
   </div>
   <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
    {items.map((item, index) => (
     <div
      className="flex gap-3 w-full  flex-col bg-neutral-800 rounded-lg p-4"
      key={index}
     >
      <div className="flex flex-col gap-[5px] min-h-[70px] mb-4">
       <h2 className="text-lg text-white font-medium">{item.name}</h2>
       <h2 className="text-slate-300">{item.description}</h2>
      </div>
      <ul className="pl-4 text-lg gap-2 flex flex-col mt-auto">
       {item.list.map((sub, subIndex) => {
        const [name, link] = sub.split(',');
        const obj = { name, link };

        return (
         <li className="flex pb-1 text-white justify-between" key={subIndex}>
          <div className="flex items-center gap-[2px]">
           <LuArrowBigRightDash className="text-lg" />
           <span className={`${!!link ? 'cursor-pointer border-b-[1px] border-b-slate-300 pb-0' : 'select-none'}`} onClick={() => !!link && window.open(link, '_blank')}>
            {name}
           </span>
          </div>
         </li>
        );
       })}
      </ul>
     </div>
    ))}
   </div>
  </div>
 );
}

export default Tasks;
