const mongoose = require("mongoose");

const exec = mongoose.Query.prototype.exec;

// Overwrite original method
mongoose.Query.prototype.exec = function () {
  console.log("IM ABOUT TO RUN A QUERY");

  // To execute the original method
  return exec.apply(this, arguments);
};
