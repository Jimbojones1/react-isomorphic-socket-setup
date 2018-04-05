const path = require('path');

// extract the import css in components to a seperate file
// that will be included with index.html
const ExtractTextPlugin = require('extract-text-webpack-plugin');


export const CLIENT_DIR = path.resolve(__dirname, 'client');
export const SERVER_DIR = path.resolve(__dirname, 'server/generated');
export const DIST_DIR = path.resolve(__dirname, 'dist');

export const rules = [{
  test: /\.js$/,
  include: CLIENT_DIR,
  loader: 'babel-loader',
  query: {
    plugins: [ 'transform-class-properties'],
    presets: ['env', 'react']
  }
},
{
  test: /\.less$/,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: 'css-loader!less-loader'
  })
}
];

export const aliases = {
  components: path.resolve(CLIENT_DIR, 'components'),
  reducers: path.resolve(CLIENT_DIR, 'reducers'),
  actions: path.resolve(CLIENT_DIR, 'actions')
}

export const client = {
  mode: 'development',
  name: 'client',
  target: 'web',
  context: CLIENT_DIR,
  entry: './index.js',
  output: {
    path: DIST_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: rules
  },
  resolve: {
   alias: aliases
  },
  plugins: [
    new ExtractTextPlugin('bundle.css', {allChunks: true})
  ]
}

export const server = {
  mode: 'development',
  name: 'server',
  target: 'node',
  context: CLIENT_DIR,
  entry: {
    app: 'components/app/index.js'
  },
  output: {
    path: SERVER_DIR,
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  externals: /^[a-z\-0-9]+$/,
  module: {
    rules: rules
  },
  resolve: {
    alias: aliases
  },
  plugins: [
    new ExtractTextPlugin({filename: '[name].css'})
  ]
};

export default [client, server];
