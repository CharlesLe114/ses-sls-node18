// module.exports = {
//   entry: './handler.js',
//   target: 'node',
//   externals: [
//     'aws-sdk'
//   ],
//   module: {
//     loaders: [{
//       test: /\.js$/,
//       loaders: ['babel'],
//       include: __dirname,
//       exclude: /node_modules/,
//     }, {
//       test: /\.json$/,
//       loaders: ['json']
//     }]
//   }
// };
module.exports = {
  entry: "./handler.js",
  target: "node",
  externals: ["aws-sdk"],
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: __dirname,
        exclude: /node_modules/,
      },
    ],
  },
};
