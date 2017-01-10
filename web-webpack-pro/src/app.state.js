import Util from './helpers/util'
import DbHelper from './helpers/dbHelper'

class AppState {
    webpSupport = false
    appVersion = '1.0.0'
    dbHelper = DbHelper
    async initConfig() {
        this.webpSupport = await Util.checkWebp()
    }
}

export default new AppState()