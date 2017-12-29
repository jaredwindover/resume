import ExtractTextPlugin from 'extract-text-webpack-plugin';
import webpack from 'webpack';

export default {
	context: __dirname,
	entry: [__dirname + '/src/main.js'],
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /(node_modules)/,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'es2015', 'stage-0'],
					plugins: [
						'react-html-attrs',
						'transform-class-properties'
					]
				}
			},
			{
				test: /.scss?$/,
				exclude: /(node_modules)/,
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: ['css-loader', 'sass-loader']
				})
			}
		]
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new ExtractTextPlugin('css/main.css')
	],
	devtool: '#source-map',
	output: {
		path: __dirname,
		publicPath: '/',
		filename: 'js/main.min.js'
	},
	devServer: {
		disableHostCheck: true,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, HEAD, OPTIONS'
		},
		historyApiFallback: true,
		watchOptions: {
			ignored: /node_modules/
		}
	}
};
