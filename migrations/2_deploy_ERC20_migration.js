var ERC20Token = artifacts.require("ERC20");

module.exports = function(deployer) {
  deployer.deploy(ERC20Token,"PUN","PUneet");
};
