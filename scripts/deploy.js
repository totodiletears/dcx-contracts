const hre = require('hardhat');
const ethers = hre.ethers;

async function main() {
  const Hero = await hre.ethers.getContractFactory("Hero");
  const hero = await Hero.deploy("http://baseUri.com/hero/metadata/");

  await hero.deployed();

  console.log("Hero deployed to: ", hero.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });