export interface Faucet {
  token: string;
  label: string;
  url: string;
  network?: string;
}

export const faucets: Faucet[] = [
  {
    token: "ETH",
    label: "Sepolia ETH",
    url: "https://cloud.google.com/application/web3/faucet/ethereum/sepolia",
    network: "sepolia",
  },
  {
    token: "USDC",
    label: "Sepolia USDC",
    url: "https://faucet.circle.com/",
    network: "sepolia",
  },
  {
    token: "VLDM",
    label: "VLDM",
    url: "https://testnet.faucet.validium.network/",
    network: "validium",
  },
];
