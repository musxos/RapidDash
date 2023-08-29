import React from 'react';
import { useState } from 'react';
import { useProjects } from '../hooks/useProjects';

import galaxyWar from '../images/rapid-chain-projects/galaxy-war.png';
import eth from '../images/rapid-chain-projects/eth.png';

import Slider from 'react-slick';

import { nanoid } from 'nanoid';

function RapidChainProjects() {
 const [page, setPage] = useState(0);
 const [search, setSearch] = useState('');

 const project = useProjects({
  page: page,
  limit: 10,
  search: '',
 });

 console.log(project);

 const items = [
  {
   title: 'Galaxy War',
   icon: galaxyWar,
   desc: 'PRICE (GAC) = 0.59 BUSD',
   coinIcon: eth,
   leftTime: '08',
   value1: '0.33 BUSD',
   value2: '900.00 BUSD',
   value3: '200,000 BUSD',
   value4: 'Public',
  },
 ];

 const settings = {
  autoplay: true,
  autoplaySpeed: 10000,
  dots: false,
  centerMode: true,
  infinite: true,
  pauseOnHover: true,
  arrows: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
   {
    breakpoint: 1420,
    settings: {
     slidesToShow: 3,
     slidesToScroll: 1,
     infinite: true,
    },
   },
   {
    breakpoint: 1024,
    settings: {
     slidesToShow: 2,
     slidesToScroll: 1,
     infinite: true,
    },
   },
   {
    breakpoint: 767,
    settings: {
     slidesToShow: 2,
     slidesToScroll: 1,
    },
   },
   {
    breakpoint: 576,
    settings: {
     slidesToShow: 1,
     slidesToScroll: 1,
    },
   },
  ],
 };

 return (
  <div className={`bg-neutral-800 col-span-3 w-full h-full flex flex-col gap-4 rounded-lg`}>
   <div className="flex items-center px-2 md:px-4 pt-4 justify-between">
    <div className="flex flex-col">
     <span className="text-violet-500 font-medium">Rapid Chain Projects</span>
     <span className="text-white text-lg">Follow and use the applications developed on Rapid Network; in this way, you can earn points faster.</span>
    </div>
   </div>
   <div className="flex md:items-center px-2 md:px-4 gap-2 flex-col md:flex-row items-end">
    <input
     onChange={(e) => {
      if (!e.target.value) project.fetchProjects();
      else project.searchProject(e.target.value);

      setSearch(e.target.value);
     }}
     type="text"
     placeholder="Search RAPID CHAIN Project"
     className="w-full border-2 border-neutral-700 bg-neutral-900 text-white max-w-[500px] rounded-lg outline-0 py-[4px] pl-4 text-xs md:text-md"
    />
    <button
     onClick={() => {
      if (!search) project.fetchProjects();
      else project.searchProject(search);
     }}
     className="flex items-center gap-1 cursor-pointer transition-colors py-[6px] px-[23px] rounded-[6px] bg-violet-500 text-[14px] text-white"
    >
     Search
    </button>
   </div>
   <div className="w-full flex-col max-w-full pb-4 flex px-4">
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
     {project.projects.map((x) => (
      <div className="bg-neutral-900 flex flex-col gap-2 w-full rounded-lg pb-4 " key={nanoid()}>
       <div className="flex items-start px-2 py-4">
        <img src={x.image} alt={x.name} loading="lazy" width="70" height="70" decoding="async" data-nimg="1" style={{ color: 'transparent' }} />
        <div className="flex flex-col ml-4">
         <span className="text-white text-md md:text-lg">{x.name}</span>
         <span className="text-slate-400 text-md">{x.description}</span>
        </div>
       </div>
       <div className="flex justify-between w-full items-center">
        <div className="w-4/6 md:w-3/6 bg-[#484959] text-white rounded-r-lg text-md pl-4">{x.tags.map((y, i) => '' + y + ' ')}</div>
        {/* <Image src={item.coinIcon} alt="" className="pr-4" />*/}
       </div>
       <div className="flex flex-col gap-2 p-2">
        <div className="flex items-center justify-between">
         <a href={x.projectUrl} target="_blank">
          <span className="text-slate-400 text-md md:text-lg">Go to Dapp</span>
         </a>
         <div className="flex items-center gap-2 text-slate-300">
          <a href={x.projectUrl} target="_blank">
           <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-globe"
           >
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
           </svg>
          </a>
         </div>
        </div>
       </div>
       {/*<button className="mx-auto px-3 rounded-md bg-theme-green text-lg text-black">{item.btnText}</button>*/}
       {/*<button className="mx-auto px-3 rounded-md bg-theme-blueBold text-md text-theme-blueLight">Go To Project Page</button>*/}
      </div>
     ))}
    </div>
   </div>
  </div>
 );
}

export default RapidChainProjects;
