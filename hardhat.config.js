require("@nomiclabs/hardhat-waffle");
require('dotenv').config({ path: './.env.local' });

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
})

const privateKey = process.env.NEXT_PUBLIC_PRIVATE_KEY

module.exports = {
  solidity: "0.8.10",
  defaultNetwork: "polygon",
  networks: {
    hardhat: {},
    polygon: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/VAQVVZADXTlo1Z-_lyz_qeLx5D6dQpWr',
      accounts: ['416805c8aed4b7d32e9e9537758cf708a59d0fd7c8c12f9d25c7b332f42740d3']
    }
  }
};

