import DbHelper from '../helpers/dbHelper'

class AttendanceRecord {
    id
    timestamp
    year
    month
    day
    hour
    minute
    second
    constructor(Option) {
        this.timestamp = Option.timestamp
        let date = new Date(this.timestamp)
        this.year = date.getFullYear()
        this.month = date.getMonth() + 1
        this.day = date.getDate()
        this.hour = date.getHours()
        this.minute = date.getMinutes()
        this.second = date.getSeconds()
    }

    save() {
        DbHelper.db.attendanceRecords.add(this)
    }

    static async getAttendanceRecordsByTimestamp(timestamp = 0) {
        let dataSource = await DbHelper.db.attendanceRecords.where('timestamp').above(timestamp).toArray()
        dataSource.forEach((item) => {
            item.yyyyMMdd = new Date(item.timestamp).Format('yyyy-MM-dd hh:mm:ss')
        })
        dataSource.sort((a, b) => { return a.timestamp - b.timestamp })
        return dataSource
    }
}

export default AttendanceRecord