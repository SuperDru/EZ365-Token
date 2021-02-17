var SOFTToken = artifacts.require("SOFTToken");



module.exports = function(deployer) {
  deployer.deploy(SOFTToken)
  .then(instance =>{
    console.log(instance.address);
  });

};