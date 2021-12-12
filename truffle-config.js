module.exports = {
  networks: {     // its for network now we are connecting with local eth network that is Genache.
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    }
  },
  compilers: {
  solc: {   // configuration of soldity version etc.
    version:"0.8.0",  // put specific version of soldity here by default 5.
    optimizer: {
      enabled: true,
      runs: 200
    }
  }
  }
}
