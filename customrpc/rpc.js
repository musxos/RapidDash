export const customRPC = {
    id: 33695,
    name: 'RAPID',
    network: 'RAPID',
    nativeCurrency: {
        decimals: 18,
        name: 'RAPID',
        symbol: 'RAPID',
    },
    rpcUrls: {
        public: { http: ['https://testnet.rapidrpc.com/'] },
        default: { http: ['https://testnet.rapidrpc.com/'] },
    },
    blockExplorers: {
        etherscan: { name: 'Etherscan', url: 'https://rapidscan.io/' },
        default: { name: 'Etherscan', url: 'https://rapidscan.io/' },
    }
}