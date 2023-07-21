"use client";
import { sliceAddress } from "@/app/utils/slice-address";
import FakeAvatar from "@/components/fake-avatar";
import UserAvatar from "@/components/user-avatar";
import { useRouter } from "next/router";
import { useAccount, useDisconnect } from "wagmi";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { useDetails } from "@/hooks/useDetails";
import { useTasks } from "@/hooks/useTasks";
import { useProjects } from "@/hooks/useProjects";
import { toSvg } from "jdenticon";

export default function Panel() {
  const router = useRouter();
  const disconnect = useDisconnect();
  const account = useAccount({
    onConnect: () => {
      router.push("/panel");
    },
    onDisconnect: () => {
      router.push("/");
    },
  });

  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");

  const details = useDetails(account.address as string);
  const task = useTasks();
  const project = useProjects({
    page: page,
    limit: 10,
    search: "",
  });

  const [copyButtonText, setCopyButtonText] = useState("Copy");

  useEffect(() => {
    if (account.isDisconnected) {
      router.push("/");
    }
  }, []);

  const handleClickRef = (e: any) => {
    e.preventDefault();

    window.navigator.clipboard.writeText(
      "https://rapidchain.io/?ref=" + account.address,
    );

    setCopyButtonText("Copied");

    setTimeout(() => {
      setCopyButtonText("Copy");
    }, 2500);
  };

  const [sidebar, setSidebar] = useState(false);
  const sidebarClass = classNames(
    "flex flex-col gap-6 w-80 xl:flex xl:relative xl:translate-x-0 fixed top-0 left-0 z-50 bg-white xl:bg-transparent xl:h-max",
    {
      "-translate-x-full": !sidebar,
      "translate-x-0 h-screen": sidebar,
    },
  );

  return (
    <>
      {sidebar && (
        <div
          onClick={() => setSidebar(false)}
          className="bg-black/10 z-10 h-screen w-screen fixed top-0 left-0"
        ></div>
      )}
      <nav className="w-full bg-white py-4 lg:hidden block z-10">
        <div className="container mx-auto px-4 flex">
          <h1>Dapp Center</h1>
          <svg
            onClick={() => setSidebar(true)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 ml-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </nav>
      <div className="container mx-auto flex gap-4 px-4 lg:p-4">
        <div className="grow rounded-lg xl:px-12 py-8 flex gap-8">
          <div className={sidebarClass}>
            <div className="grow-0 shrink w-80 px-8 py-6 rounded-lg bg-white h-max">
              <div className="flex-col flex items-center justify-center">
                <UserAvatar size={128} avatarId={account.address} />
                <h1>{account.isConnected && sliceAddress(account.address)}</h1>
                <p className="text-sm px-3 py-1 rounded-full bg-green-300 mt-4">
                  RapidUser
                </p>
              </div>
              <button
                onClick={() => {
                  disconnect.disconnect();
                }}
                className="flex gap-2 bg-gradient-to-br from-black/5 to-black/10 px-4 py-2 rounded mt-4 mx-auto hover:bg-black hover:text-white transition active:scale-95"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
                  />
                </svg>
                Logout
              </button>
            </div>
            <div className="rounded-lg bg-white px-8 py-6">
              <h1 className="mb-4 text-black/60 font-semibold">Your Details</h1>
              <ul className="flex flex-col gap-2">
                <li>
                  <h3 className="text-black/50 text-sm">Your Address:</h3>
                  <p className="font-medium text-black/70 truncate">
                    {account.address}
                  </p>
                </li>
                <li>
                  <h3 className="text-black/50 text-sm">Airdrop Supply:</h3>
                  <p className="font-medium text-black/70">1.000.000</p>
                </li>
                <li>
                  <h3 className="text-black/50 text-sm">Completed Tasks:</h3>
                  <p className="font-medium text-black/70">0</p>
                </li>
            
                <li>
                  <h3 className="text-black/50 text-sm">Projects:</h3>
                  <p className="font-medium text-black/70">0</p>
                </li>
                <li>
                  <h3 className="text-black/50 text-sm">You won:</h3>
                  <p className="font-medium text-black/70">0</p>
                </li>
                <li>
                  <h3 className="text-black/50 text-sm">
                    Your Reference Link:
                  </h3>
                  <p className="font-medium text-black/70">
                    <input
                      value={"https://rapidchain.io/?ref=" + account.address}
                      className="w-full truncate"
                      disabled
                      type="text"
                    />
                    <button
                      onClick={handleClickRef}
                      className="text-sm px-2 py-1 rounded-md mt-2 bg-green-500 text-white"
                    >
                      {copyButtonText}
                    </button>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-6 grow">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col bg-white px-8 py-4 rounded-lg">
                <h1 className="text-xl text-black/60 font-medium">Txs</h1>
                <p className="text-4xl mt-6 font-semibold text-black/80">
                  {details.txs}
                </p>
              </div>
              <div className="flex flex-col bg-white px-8 py-4 rounded-lg">
                <h1 className="text-xl text-black/60 font-medium">Volume</h1>
                <p className="text-4xl mt-6 font-semibold text-black/80">
                  {details.volume}
                </p>
              </div>
              <div className="flex flex-col bg-white px-8 py-4 rounded-lg">
                <h1 className="text-xl text-black/60 font-medium">Ref</h1>
                <p className="text-4xl mt-6 font-semibold text-black/80">
                  1.000
                </p>
              </div>
            </div>
            <div className="bg-white px-8 py-4 rounded-lg w-full">
              <h1 className="text-xl text-black/60 font-medium">Tasks</h1>
              <p className="text-black/30 text-sm">
              From this section, you can follow weekly tasks and earn points quickly.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full mt-8">
                {task.tasks.map((x) => (
                  <div
                    key={x}
                    className="flex flex-col px-4 py-2 border rounded bg-gradient-to-br from-white to-neutral-100"
                  >
                    <div className="flex items-center gap-2">
                      <FakeAvatar avatarKey="task" size={48} />
                      <h1 className="text-xl font-medium">{x.name}</h1>
                    </div>
                    <ul className="mt-4">
                      {x.list.map((y: any, j: number) => (
                        <li key={j} className="flex gap-2 items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M4.5 12.75l6 6 9-13.5"
                            />
                          </svg>
                          {y}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-8 text-xs text-black/60">
                      {x.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white px-8 py-4 rounded-lg w-full">
              <h1 className="text-xl text-black/60 font-medium">
                Rapid Chain Projects
              </h1>
              <p className="text-black/30 text-sm">
              Follow and use the applications developed on Rapid Network; in this way, you can earn points faster.
              </p>
              <div className="flex flex-col my-4">
                <input
                  onChange={(e) => {
                    if (!e.target.value) project.fetchProjects();
                    else project.searchProject(e.target.value);

                    setSearch(e.target.value);
                  }}
                  placeholder="Search some project in the RAPID CHAIN"
                  className="w-full px-4 py-2 rounded-md border outline-none ring-2 ring-transparent focus:ring-green-500"
                  type="text"
                />
                <button
                  onClick={() => {
                    if (!search) project.fetchProjects();
                    else project.searchProject(search);
                  }}
                  className="bg-black/80 text-white/80 hover:text-white hover:bg-black transition ml-auto px-4 py-2 rounded mt-2 mb-8 ring-2 ring-transparent focus:ring-black/50 active:scale-95"
                >
                  Search
                </button>
                <hr />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <div className="flex flex-col text-black/30 justify-center items-center overflow-hidden px-6 py-4 rounded border border-transparent hover:border-neutral-200 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-24 h-24 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                  Add Your Project
                </div>
                {project.projects.map((x) => (
                  <div
                    key={x}
                    className="flex flex-col items-center overflow-hidden px-6 py-4 rounded border border-transparent hover:border-neutral-200 cursor-pointer w-full"
                  >
                    <div className="w-[180px] h-[180px]">
                      {!x.imageError && (
                        <img
                          src={x.image}
                          alt={x.name}
                          onError={(e) => {
                            console.error("image", e);
                            x.imageError = true;
                          }}
                        />
                      )}
                      {x.imageError && (
                        <FakeAvatar avatarKey={x.name + x._id} size={180} />
                      )}
                    </div>
                    <h1 className="text-xl font-medium">{x.name}</h1>
                    <p className="text-center text-sm mt-1">{x.description} </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {x.tags.map((y: any, i: number) => (
                        <div
                          key={i}
                          className="px-2 py-1 rounded-full bg-black text-white text-xs"
                        >
                          {y}
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2 mt-6">
                      <a
                        target="_blank"
                        href={x.projectUrl}
                        className="text-sm px-2 py-1 rounded bg-black/10 text-black/30 hover:bg-black ring-2 ring-transparent focus:ring-black/50 active:scale-95 hover:text-white transition"
                      >
                        Go to Project Page
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
