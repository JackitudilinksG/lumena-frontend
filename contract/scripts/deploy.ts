import { ethers } from "hardhat"

async function main() {
  const IDVerifier = await ethers.getContractFactory("IDVerifier")
  const contract = await IDVerifier.deploy()

  await contract.waitForDeployment()
  console.log(`IDVerifier deployed to ${await contract.getAddress()}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
