require("@nomiclabs/hardhat-waffle")

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/Wr-ayl_Iz5DjjfdhA6EYUraMsIPv4erf',
      accounts: ['394f6883590abf26bc2386529d53a6e54496b6e2b7b621ac262cfd6ea84f47d1']
    }
  }
}
