import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import * as config from './webpack.config';


const PORT = 8080;
const HOST = 'localhost';
const HOST_URI = `http://${HOST}:${PORT}`;

const statOptions = {
  colors: true,
  hash: false,
  timings: false,
  chunks: false,
  chunkModules: false,
  modules: false,
  children: true,
  version: true,
  cached: false,
  cachedAssets: false,
  reasons: false,
  source: false,
  errorDetails: false
};




const devConfig = Object.assign({}, config.client, {
  name: 'dev-server',
  entry: [
    'webpack/hot/only-dev-server',
    `webpack-dev-server/client?${HOST_URI}`,
    config.client.entry
  ],
  output: Object.assign({}, config.client.output, {
    publicPath: `${HOST_URI}`
  }),
  module: {
    rules: [
      {
        test: /\.js$/,
        include: config.CLIENT_DIR,
        use: ['react-hot-loader/webpack', 'babel-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader','css-loader', 'less-loader']
      }
    ]
  },
  plugins: [
   new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});

const devServer = new WebpackDevServer(webpack(devConfig), {
  hot: true,
  stats: statOptions
})



devServer.listen(PORT, HOST, (err) => {
  if(err) throw err;
  console.log(`Webpack is listening at ${HOST_URI}`)
})


webpack(config.server).watch({}, (err, stats) => {
  if(err) return console.error(err.message);
  console.log(stats.toString(statOptions))
})





