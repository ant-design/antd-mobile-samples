import { observable, asReference, computed, asFlat } from 'mobx'
import attendanceRecord from '../../models/attendanceRecord.model'

class AttendanceState {
    tableConfig = observable({
        dataSource1: [],
        dataSource2: [],
        columns: [
            { title: 'id', dataIndex: 'id', key: 'id' },
            { title: '考勤时间', dataIndex: 'yyyyMMdd', key: 'yyyyMMdd' }
        ],
        className: 'signRecordTable',
        emptyText: asReference(() => '还没有记录哦')
    })

    tabsConfig = observable({
        defaultActiveKey: '1',
        className: 'tabs',
        onChange: asReference((key) => {
            console.log(key)
        })
    })

    async signIn() {
        new attendanceRecord({
            timestamp: Date.now()
        }).save()
        this.initDataSource()
    }

    async initDataSource() {
        this.tableConfig.dataSource1 = await attendanceRecord.getAttendanceRecordsByTimestamp(new Date(new Date().Format('yyyy/MM/dd')).getTime())
        this.tableConfig.dataSource2 = await attendanceRecord.getAttendanceRecordsByTimestamp()
    }
}

export default AttendanceState