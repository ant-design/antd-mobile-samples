import React from 'react'
import { List, Toast, Badge } from 'antd-mobile';
import { observer } from 'mobx-react'

import appState from '../../app.state'
import Util from '../../helpers/util'
import DbHelper from '../../helpers/dbHelper'
import './my.scss'

const Item = List.Item

@observer
class My extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            recordCount: 0
        }
    }

    async componentDidMount() {
        if (!DbHelper.db.isOpen()) {
            await DbHelper.db.open()
        }
        this.setState({
            recordCount: await DbHelper.db.attendanceRecords.count()
        })
    }

    getGestureLockComponent() {
        let currPath = window.appHistory.getCurrentLocation().pathname.replace(/^\//, '')
        let content = Util.getLocalStorageInfo('password') ? '修改手势密码' : '设置手势密码'
        return <Item arrow="horizontal" onClick={() => {
            window.appHistory.push('login/reset/' + currPath)
        } }>{content}</Item>
    }

    getAppVersionComponent() {
        return <Item extra={appState.appVersion} arrow="horizontal" onClick={() => {
            Toast.info('当前已是最新版本')
        } }>当前版本</Item>
    }

    getClearAttendanceRecordsComponent() {
        return <Item extra={<Badge text={this.state.recordCount} />} arrow="horizontal" onClick={() => {
            if (confirm('确认清除所有考勤记录?')) {
                DbHelper.db.attendanceRecords.clear()
                this.componentDidMount()
            }
        } }>清除考勤记录</Item>
    }

    getClearDbComponent() {
        return <Item arrow="horizontal" onClick={() => {
            if (confirm('确认删除数据库?')) {
                DbHelper.db.delete()
                this.componentDidMount()
            }
        } }>删除数据库</Item>
    }

    getFeatureCheckComponent() {
        return <Item arrow="horizontal" onClick={() => {
            Toast.info('webpSupport:' + appState.webpSupport + ';serviceWorker:' + !!(('serviceWorker' in navigator) && (location.protocol == 'https:') || (location.protocol == 'http:' && location.hostname == 'localhost')))
        } }>特征检测</Item>
    }

    render() {
        return (
            <div className='my'>
                <div className='head-container'>
                    <img src='https://q2.qlogo.cn/g?b=qq&k=5iapa3nHicXobHy5D7nmibgOQ&s=100&t=1483324016' alt="" />
                    <div className="user">C.C</div>
                    <i className="arrow-right"></i>
                </div>
                <div className='list-container'>
                    <List renderHeader={() => '应用设置'} className="my-list">
                        {
                            this.getGestureLockComponent()
                        }
                        {
                            this.getClearAttendanceRecordsComponent()
                        }
                        {
                            this.getClearDbComponent()
                        }
                        {
                            this.getFeatureCheckComponent()
                        }
                        {
                            this.getAppVersionComponent()
                        }
                    </List>
                </div>
            </div>
        )
    }
}

export default My