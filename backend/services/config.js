let config = {}

if(process.env.NODE_ENV === 'dev') {
  config.ssl = false;
}

if(process.env.NODE_ENV === 'prod') {
  config.ssl = false;
}

exports.config = config;