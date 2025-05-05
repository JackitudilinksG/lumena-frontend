import { createPublicClient, createWalletClient, http, Block } from 'viem'
import { privateKeyToAccount } from 'viem/accounts'
import { sepolia } from 'viem/chains'

const client = createPublicClient({
  chain: sepolia,
  transport: http(process.env.ALCHEMY_API_KEY as string),
})

const walletClient = createWalletClient({
  chain: sepolia,
  transport: http(process.env.ALCHEMY_API_KEY as string),
  account: privateKeyToAccount(`0x${process.env.PRIVATE_KEY}` as `0x${string}`),
})

async function fetchBlock() {
  const block: Block = await client.getBlock({
    blockNumber: 123456n,
  })

  console.log(block)
}

export { client, walletClient, fetchBlock }
