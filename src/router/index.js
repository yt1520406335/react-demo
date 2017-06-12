import React from 'react'
import Topics from '../containers/topics/Topics'
import TopicDetail from '../containers/topicDetail/TopicDetail.js'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import PropTypes from 'prop-types'
import MenuContainer from '../containers/menuContainer/MenuContainer'
import Topbar from '../containers/topbar/TopBar'
import { Menu, Icon } from 'antd'
const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup


const totalHeight = document.body.clientHeight

const RootRouter = () => (
  <Router>
    <div className="app-container">
        <div className="top-container">
            <Topbar className/>
        </div>
        <div className="body-container" style={{height: totalHeight - 60}}>
            <MenuContainer className="menu-container"/>
            <div className="content-container">
                <Route path="/about" component={About}/>
                <Route exact path="/" component={OtherTopics}/>
                <Route path="/topics" component={Topics} />
                <Route path="/topic/:id" component={TopicDetail}/>
            </div>
        </div>
    </div>
  </Router>
)

const About = () => (
  <div>
    <h2>关于11</h2>
  </div>
)

const OtherTopics = ({ match }) => (
  <div>
    <h2>主题列表</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>
          使用 React 渲染
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>
          组件
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          属性 v. 状态
        </Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>请选择一个主题。</h3>
    )}/>
  </div>
)

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
)

export default RootRouter
