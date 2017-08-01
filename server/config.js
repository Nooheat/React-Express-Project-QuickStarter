/* configure here */
let config = {

    server_port: 8080,
    pages: [],
    server_domain: 'http://localhost'
}

config.getServerDomain = function(){
  return this.server_domain + ':' + this.server_port;
}

module.exports = config;

/* You can configure more informations */