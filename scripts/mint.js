require('dotenv').config();
const hre = require('hardhat');
const ethers = hre.ethers;

async function main() {
  const hero = await hre.ethers.getContractAt("Hero", process.env.HERO_ADDRESS);

  await hero.mint();

  const supply = await hero.totalSupply();

  console.log("Hero minted");
  console.log("Total supply: ", Number(supply));
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });