let config = {}

if(process.env.NODE_ENV === 'development') {
  config.ssl = false;
}

if(process.env.NODE_ENV === 'production') {
  config.ssl = false;
}

exports.config = config;