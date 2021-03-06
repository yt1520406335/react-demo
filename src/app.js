import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
// to fixed regeneratorRuntime is not defined
// import 'babel-polyfill'
import './styles/index.less'
import RootRouter from './router'
import store from './store'
// import style from './styles/config.less'
// 取到css内的变量
// console.log(style.primaryColor,'ssss');
const App = () => (
	<Provider store={store} >
			<RootRouter />
	</Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))
