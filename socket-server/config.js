let config = {}

if (process.env.NODE_ENV === 'dev') {
  config.url = process.env.BASE_SERVER_LOCAL_URL;
}

if (process.env.NODE_ENV === 'prod') {
  config.url = process.env.BASE_SERVER_LIVE_URL;
}

exports.config = config;