/* eslint-disable no-console */
module.exports = {
  log(message) {
    console.log(message);
  },

  logAndReject(error) {
    console.log(`Error: ${error && error.message}`);
    return Promise.reject(new Error("Failed"));
  },

  logStart(message) {
    this.log(`\n\n${message}`);
  },
};
