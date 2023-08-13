export const customRPC = {
    id: 9009,
    name: 'RAPID',
    network: 'RAPID',
    nativeCurrency: {
        decimals: 18,
        name: 'RAPID',
        symbol: 'RAPID',
    },
    rpcUrls: {
        public: { http: ['https://evm.sinyordes.online/'] },
        default: { http: ['https://evm.sinyordes.online/'] },
    },
    blockExplorers: {
        etherscan: { name: 'Etherscan', url: 'https://rapidscan.io/' },
        default: { name: 'Etherscan', url: 'https://rapidscan.io/' },
    }
}