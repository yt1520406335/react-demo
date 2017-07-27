import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
//import * as Database from '_rxdb'
import * as HomeAction from './topicsAction'
import styles from './topics.less'
import {Spin} from 'antd'

const state = (state) => state.topics

@connect(state)
class Topics extends Component {
    constructor(props){
        super()
        this.homeAction = bindActionCreators(HomeAction,props.dispatch)
    }

    componentDidMount(){
        //this.homeAction.getcnodeData()
        const {dispatch} = this.props
        dispatch({
            type:'HOME_try'
        })
        //console.log(this.props)
    }

    handleTopicsListItemClick(id){
        const {history} = this.props
        history.push(`/topic/${id}`)
    }

    render() {
        console.log('what????')
        const {history,topicsList} = this.props

        return (
            <div className={styles['home-container']}>
                <div className={styles['topicsList-div']}>
                    {topicsList.map(item => <TopicsListItem
                                                key={item.id}
                                                {...item} 
                                                handleTopicsListItemClick={::this.handleTopicsListItemClick}
                                            />)
                    }
                </div>
            </div>
        )
    }
}

const TopicsListItem = ({title,author,id,handleTopicsListItemClick}) => {
    return (
        <div onClick = {handleTopicsListItemClick.bind(this,id)} className={styles['topicsListItem']}>
            <div className={styles['topicsListItem-left']}>
                <img src={author.avatar_url} alt=""/>
            </div>
            <div className={styles['topicsListItem-right']}>
                <span>{title}</span>
            </div>
        </div>  
    )    
}

export default Topics