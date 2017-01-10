import React from 'react'
import { observer } from 'mobx-react'

// import appState from '../../app.state'
// import Util from '../../helpers/util'
import TabBar from '../../components/tabBar/tabBar.component'
import indexState from './index.state'

import './index.scss'


@observer
class Index extends React.Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        window.indexState = indexState
        this.setTabBarStatus()
        window.appHistory.listen((e) => {
            this.setTabBarStatus()
        })
    }

    setTabBarStatus() {
        let pathName = window.appHistory.getCurrentLocation().pathname.replace(/^\//,'')
        indexState.tabBarConfig.container.selectedTab = pathName.split('/')[0]
        if (pathName.indexOf('login') == -1) {
            indexState.tabBarConfig.container.hidden = false
        } else {
            indexState.tabBarConfig.container.hidden = true
        }
    }

    render() {
        return (
            <div className='index'>
                <div className='content'>
                    {this.props.children}
                </div>
                <TabBar {...indexState.tabBarConfig}>
                </TabBar>
            </div>
        )
    }
}

export default Index