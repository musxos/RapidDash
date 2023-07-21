import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useRouter } from "next/router";
import { useAccount, useConnect } from "wagmi";

export default function Home() {
  const router = useRouter();
  const account = useAccount({
    onConnect: () => {
      router.push("/panel");
    },
  });

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col rounded bg-white px-8 py-4 max-w-screen-md w-full text-center">
        <h1 className="text-3xl text-black/80 mb-2">Rapid Chain - Dashboard</h1>
        <p className="mb-6 text-black/60 text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          iste autem ratione natus doloremque ex voluptatibus at maxime
          laboriosam, sunt facilis omnis officia odit quasi dolorum voluptatum
          mollitia animi? Explicabo.
        </p>
        <div className="mx-auto">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}
