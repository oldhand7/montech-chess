export default function handler(req: any, res: any) {
  res.status(200).json({
    name: "Web3-Chess",
    infura_id: process.env.INFURA_KEY,
    chain_id: process.env.CHAIN_ID,
    network_name: process.env.NETWORK_NAME,
    // usdt_contract_address: "0xd9ba894e0097f8cc2bbc9d24d308b98e36dc6d02",
    usdt_contract_address: "0x4E15361FD6b4BB609Fa63C81A2be19d873717870",
    // usdt_contract_address: "0xF2f5C73fa04406b1995e397B55c24aB1f3eA726C",
  });
}
