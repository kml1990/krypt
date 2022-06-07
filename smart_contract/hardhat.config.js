// https://eth-goerli.alchemyapi.io/v2/5ULmxrQlwfTSpDffpergLcHf7yxD7fnU

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/5ULmxrQlwfTSpDffpergLcHf7yxD7fnU',
      accounts: ['3a638ad238b64dab4c093d1e8cb61f4f2ba08e347cc9749028a1e61224c940fc']
    }
  }
}