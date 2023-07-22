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
        <h1 className="text-3xl text-black/80 mb-2">Rapid Chain - DappCenter</h1>
        <p className="mb-6 text-black/60 text-sm">
          You can track your transactions on Rapid Chain from here, and earn points by inviting your friends to use Rapid Chain. The points you earn will be used to determine your airdrop amount in the future.
        </p>
        <div className="mx-auto">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
}
