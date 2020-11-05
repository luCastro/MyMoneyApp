const BillingCycle = require("./billingCycle");

BillingCycle.methods(["get", "post", "put", "delete"]);
BillingCycle.updateOptions({ new: true, runValidators: true });

//the node-restful GET  method is not work properly, bellow I have a
//get method using the regular way without node-restfull
BillingCycle.route("get", (req, res, next) => {
  BillingCycle.find({}, (error, docs) => {
    if (!error) {
      res.json(docs);
    } else {
      res.status(500).json({ errors: [error] });
    }
  });
});

//Method that brings how many BillingCycle has in the database
//Create new route
BillingCycle.route("count", (req, res, next) => {
  BillingCycle.count((error, value) => {
    if (!error) {
      res.json({ value });
    } else {
      res.status(500).json({ errors: [error] });
    }
  });
});

//Summary method with total pf credit and debit
BillingCycle.route("summary", (req, res, next) => {
  BillingCycle.aggregate(
    [
      {
        $project: {
          credit: { $sum: "$credits.value" },
          debit: { $sum: "$debits.value" },
        },
      },
      {
        $group: {
          _id: null,
          credit: { $sum: "$credit" },
          debit: { $sum: "$debit" },
        },
      },
      {
        $project: { _id: 0, credit: 1, debit: 1 },
      },
    ],
    (error, result) => {
      if (error) {
        res.status(500).json({ errors: [error] });
      } else {
        res.json(result[0] || { credit: 0, debit: 0 });
      }
    }
  );
});

module.exports = BillingCycle;
