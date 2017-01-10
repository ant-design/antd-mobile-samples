import React from 'react'
import { observer } from 'mobx-react'
import { Tabs, Table, Toast, WingBlank } from 'antd-mobile'

import AttendanceState from './attendance.state'
import './attendance.scss'

const TabPane = Tabs.TabPane;

@observer
class Attendance extends React.Component {
    constructor(props) {
        super(props)
        this.attendanceState = new AttendanceState()
    }

    async componentWillMount() {
        this.attendanceState.initDataSource()
    }

    render() {
        const {columns, dataSource1, dataSource2, ...tableConfig} = this.attendanceState.tableConfig
        return (
            <div className='attendance'>
                <Tabs {...this.attendanceState.tabsConfig}>
                    <TabPane tab="当天记录" key="1">
                        <div className="tabPane">
                            <i className="icon-signIn" onClick={this.attendanceState.signIn.bind(this.attendanceState)}></i>
                            <WingBlank size='lg'>
                                <Table {...tableConfig} columns={columns.toJS()} dataSource={dataSource1} />
                            </WingBlank>
                        </div>
                    </TabPane>
                    <TabPane tab="历史记录" key="2">
                        <div className="tabPane">
                            <WingBlank size='lg'>
                                <Table {...tableConfig} columns={columns.toJS()} dataSource={dataSource2} />
                            </WingBlank>
                        </div>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default Attendance