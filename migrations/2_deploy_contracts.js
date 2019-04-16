var EZToken = artifacts.require("EZ365Token");



module.exports = function(deployer) {
  deployer.deploy(EZToken)
  .then(instance =>{
    console.log(instance.address);
  });

};