var TestRPC = require("ganache-cli");

var server = null;

module.exports = {
  start: function(done) {
    this.stop(function(err) {
      if (!process.env.MAIN_REPO_CI || process.env.GANACHE){
        server = TestRPC.server({gasLimit: 6721975});
        server.listen(8545, done);
      } else {
        done();
      }
    });
  },
  stop: function(done) {
    if (server) {
      server.close(function(err) {
        server = null;
        done(err);
      });
    } else {
      done();
    }
  }
}
