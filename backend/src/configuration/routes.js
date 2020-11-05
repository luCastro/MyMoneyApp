const express = require("express");

//I need to receive as argument the app that I already created in server.js,
//for this reason I create a function bellow

module.exports = function (server) {
  ///Basic router definition

  const router = express.Router();
  server.use("/api", router);

  const BillingCycle = require("../api/billingCycle/billingCycleService");
  BillingCycle.register(router, "/billingCycles");
};
