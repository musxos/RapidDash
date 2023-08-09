"use client";


import React from 'react';
import Image from 'next/image';
import { BiCheck, BiPlus } from 'react-icons/bi';

// import rapidNameServiceIcon from '../images/rapid-chain-projects/rapid-name-service.svg';
// import rapidSwapIcon from '../images/rapid-chain-projects/rapid-swap.svg';
// import faucetIcon from '../images/rapid-chain-projects/faucet.svg';
// import explorerIcon from '../images/rapid-chain-projects/explorer.svg';
// import headImage from '../images/rapid-chain-projects/head.svg';
import { useDetails } from "../hooks/useDetails";
import { useTasks } from "../hooks/useTasks";
import { useProjects } from "../hooks/useProjects";

import galaxyWar from '../images/rapid-chain-projects/galaxy-war.png';
import eth from '../images/rapid-chain-projects/eth.png';
import { useEffect, useState } from "react";

import sidero from '../images/rapid-chain-projects/sidero.png';
import busd from '../images/rapid-chain-projects/busd.png';

import metaWorld from '../images/rapid-chain-projects/meta-world.png';
import polygon from '../images/rapid-chain-projects/polygon.png';
import { BsDiscord, BsMedium, BsTelegram, BsTwitter } from 'react-icons/bs';
import { nanoid } from 'nanoid';

function RapidChainProjects() {
    
    const [page, setPage] = useState(0);
    const [search, setSearch] = useState("");

    const project = useProjects({
        page: page,
        limit: 10,
        search: "",
      });


 
    
      console.log(project)

 return (
  <div className={`bg-[url('../images/bg.svg')] w-full h-full flex flex-col p-6 gap-4 rounded-lg`}>
   <div className="flex items-center justify-between">
    <div className="flex flex-col gap-2">
     <h2 className="text-3xl text-white">Rapid Chain Projects</h2>
     <h2 className="text-md text-slate-300">Follow and use the applications developed on Rapid Network; in this way, you can earn points faster.</h2>
    </div>
   </div>
   <div className="flex items-center gap-2">
    <input
    onChange={(e) => {
        if (!e.target.value) project.fetchProjects();
        else project.searchProject(e.target.value);

        setSearch(e.target.value);
      }}
     type="text"
     placeholder="Search some project in the RAPID CHAIN"
     className="w-full border-2 border-theme-mainColor bg-theme-mainColor text-white max-w-[500px] rounded-lg outline-0 p-1 pl-4"
    />
    <button onClick={() => {
                    if (!search) project.fetchProjects();
                    else project.searchProject(search);
                  }} className="p-1 px-3 rounded-md bg-theme-green text-lg text-black">Search</button>
   </div>
   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    
    {project.projects.map((x) => (
     <div className="bg-theme-mainbold flex flex-col gap-2 w-full rounded-lg pb-4" key={nanoid()}>
      <div className="flex items-center px-4 py-4">

      <img src={x.image} alt={x.name}  loading="lazy" width="70" height="70" decoding="async" data-nimg="1" style={{color:"transparent"}} />

       <div className="flex flex-col p-2">
        <span className="w-full text-white text-lg font-bold">{x.name}</span>
        <span className="text-slate-300 text-sm">{x.description}</span>
       </div>
      </div>
      <div className="flex justify-between w-full items-center">
      <div  className="w-3/6 bg-[#484959] text-white rounded-r-lg text-lg pl-4">

      {x.tags.map((y, i) => (""+y+" "))}
      
      </div>
     
       <Image  alt="" className="pr-4" />
      </div>
      <div className="flex flex-col gap-3 p-4">
       {/*<div className="flex items-center justify-between">
        <span className="text-lg text-slate-300">Min allocation</span>
        <span className="text-white text-lg font-bold">9200</span>
       </div>
       <div className="flex items-center justify-between">
        <span className="text-lg text-slate-300">Max allocation</span>
        <span className="text-white text-lg font-bold">9200</span>
       </div>
       <div className="flex items-center justify-between">
        <span className="text-lg text-slate-300">Targeted raise</span>
        <span className="text-white text-lg font-bold">9200</span>
       </div>
       <div className="flex items-center justify-between">
        <span className="text-lg text-slate-300">Access type</span>
        <span className="text-white text-lg font-bold">9200</span>
    </div>*/}
       <div className="flex items-center justify-between">
        <span className="text-lg text-slate-300">Go to Dapp</span>
        <div className="flex items-center gap-2 text-slate-300">
        <a href={x.projectUrl} target='_blank'>
        <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-globe"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
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
 );
}

export default RapidChainProjects;
