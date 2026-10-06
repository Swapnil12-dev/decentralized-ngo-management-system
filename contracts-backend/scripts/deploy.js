import hre from "hardhat";

async function main() {
  console.log("Deploying NgoManagement Smart Contract...");

  // In Hardhat v3, network.create() injects the configured ethers plugin
  const { ethers } = await hre.network.create();

  const ngoManagement = await ethers.deployContract("NgoManagement");
  await ngoManagement.waitForDeployment();

  const address = await ngoManagement.getAddress();
  console.log(`--------------------------------------------------`);
  console.log(`✅ NgoManagement deployed successfully to: ${address}`);
  console.log(`--------------------------------------------------`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});