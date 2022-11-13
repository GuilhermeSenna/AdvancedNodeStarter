const mongoose = require("mongoose");

const exec = mongoose.Query.prototype.exec;

// Overwrite original method
mongoose.Query.prototype.exec = function () {
  console.log("IM ABOUT TO RUN A QUERY");

  // Copy one object to another without modify the original object
  // Asign 'this.getQuery' to an empty object
  const key = Object.assign({}, this.getQuery(), {
    collection: this.mongooseCollection.name,
  });

  console.log(key);

  // To execute the original method
  return exec.apply(this, arguments);
};
