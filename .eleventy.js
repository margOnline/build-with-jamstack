module.exports = function(config) {

  config.setBrowserSyncConfig({
    https: {
      key: '/etc/server.key',
      cert: '/etc/server.crt'
    }
  });

  config.addPassthroughCopy("src/js");
  return {
    dir: {
      input: "src",
      output: "dist",
      data: "_data"
    }
  }
};
