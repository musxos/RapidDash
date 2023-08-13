import React from 'react';
import { BiCheck, BiXCircle } from 'react-icons/bi';
import { LuArrowBigRightDash } from 'react-icons/lu';
import { useTasks } from '../hooks/useTasks';

function Tasks() {

    const tasks = useTasks()
    const items = tasks?.tasks
    console.log(items);

 return (
  <div className={`bg-theme-mainColor col-span-3 w-full flex flex-col p-2 md:p-4 gap-4 rounded-lg`}>
   <div className="flex items-center justify-between">
    <div className="flex flex-col">
     <span className="text-theme-green text-md">Tasks</span>
     <span className="text-white text-lg">From this section, you can follow weekly tasks and earn points quickly.</span>
    </div>
   </div>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
    {items.map((item, index) => (
     <div
      className="py-2 xl:py-0 border-b-[1px] border-b-slate-400 md:border-r-[1px] md:border-r-slate-400 md:border-b-[0px] flex gap-3 w-full md:pr-2 justify-between 2xl:justify-start flex-col"
      key={index}
     >
      <div className="flex flex-col gap-[5px] min-h-[70px]">
       <h2 className="text-lg text-white">{item.name}</h2>
       <h2 className="text-md text-slate-300">{item.description}</h2>
      </div>
      <ul className="pl-4 text-lg gap-2 flex flex-col">



       {item.list.map((sub, subIndex) =>{
       
            const [name, link] = sub.split(',');
            const obj = { name, link };
            console.log(obj);
         

        return (
        
        <li className="flex pb-1 text-white items-center justify-between" key={subIndex}>
         <div className="flex items-center gap-[2px]">
          <LuArrowBigRightDash className="text-lg" />
          <span className={`${!!link ? 'cursor-pointer border-b-[1px] border-b-slate-300 pb-0' : 'select-none'}`} onClick={() => !!link && window.open(link, '_blank')}>
           {name}
          </span>
         </div>
         {sub.completed ? <BiCheck className="text-xl" /> : <BiXCircle className="text-xl" />}
        </li>
       )
         }
       )}



      </ul>
     </div>
    ))}
   </div>
  </div>
 );
}

export default Tasks;
