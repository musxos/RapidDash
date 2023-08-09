import axios from "axios";
import { useEffect, useState } from "react";

export function useDetails(address: string) {
  const [txs, setTxs] = useState(0);
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    if (!address) {
      return;
    }

    fetchDetails(address);
  }, [address]);

  async function fetchDetails(address: string) {
    const response = await axios.get(
      "https://rapidscan.io/api?module=account&action=txlist&address=" +
        address,
    );

    const data = response.data.result;

    setTxs(data.length);

    let totalVolume = 0;

    data.forEach((tx: any) => {
      totalVolume += Number(Number(tx.value) / 1e18);
    });

    setVolume(totalVolume);
  }

  return { txs, volume, fetchDetails };
}
