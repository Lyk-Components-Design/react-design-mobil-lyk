import resolve from '@rollup/plugin-node-resolve'; // Rollup 查找到外部模块
import commonjs from '@rollup/plugin-commonjs'; // commonjs
import typescript from '@rollup/plugin-typescript'; // ts
import babel, { getBabelOutputPlugin } from '@rollup/plugin-babel'; // babel
import postcss from 'rollup-plugin-postcss'; // css
import jsx from 'acorn-jsx'; // 引入jsx语法

export default {
	input: './src/index.ts', // 入口文件
	acornInjectPlugins: [jsx()], // 支持 JSX
	plugins: [
		resolve(),
		commonjs(),
		// 处理css
		postcss({
			extract: true,
			modules: true,
		}),
		typescript({ jsx: 'preserve' }), // ts
		// babel
		babel({
			presets: ['@babel/preset-react'], // 识别react语法
			babelHelpers: 'bundled',
			extensions: ['.ts', '.tsx'], // 扩展名
		}),
	],
	// 输出目录
	output: [
		{
			file: 'dist/index.js', // 文件名
			format: 'cjs', // 输出格式  commonjs
			plugins: [
				getBabelOutputPlugin({
					presets: ['@babel/preset-env'], // 将es6+语法编译成浏览器识别的语法
				}),
			],
		},
	],
};
