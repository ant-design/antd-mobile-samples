import { browserHistory } from 'react-router'

class Util {
    constructor() {
        Date.prototype.Format = function(fmt) {
            var o = {
                "M+": this.getMonth() + 1, //月份   
                "d+": this.getDate(), //日   
                "h+": this.getHours(), //小时   
                "m+": this.getMinutes(), //分   
                "s+": this.getSeconds(), //秒   
                "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
                "S": this.getMilliseconds() //毫秒   
            };
            if (/(y+)/.test(fmt))
                fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt))
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        }
    }
    checkWebp() {
        return new Promise(function(resolve, reject) {
            if (window.localStorage.getItem('webpSupport') == true) {
                resolve(true)
            } else if (window.localStorage.getItem('webpSupport') == false) {
                resolve(false)
            } else {
                try {
                    let bool = (document.createElement('canvas').toDataURL('image/webp').indexOf('data:image/webp') == 0);
                    window.localStorage.setItem('webpSupport', bool)
                    resolve(bool)
                } catch (err) {
                    window.localStorage.setItem('webpSupport', false)
                    resolve(false)
                }
            }
        })
    }

    CalculatGUID() {
        let guid = ""
        for (let i = 1; i <= 32; i++) {
            let n = Math.floor(Math.random() * 16.0).toString(16)
            guid += n
            if ((i == 8) || (i == 12) || (i == 16) || (i == 20)) {
                guid += "-"
            }
        }
        return guid
    }

    getQueryStringByName(name) {
        let result = location.hash.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"))
        if (result == null || result.length < 1) {
            return ""
        }
        return result[1]
    }

    setLocalStorageInfo(Key, value = {}) {
        if (typeof value == 'object') {
            value = JSON.stringify(value)
        }
        window.localStorage.setItem(Key, value)
    }

    getLocalStorageInfo(Key) {
        return window.localStorage.getItem(Key)
    }

    setSessionStorageInfo(Key, value = {}) {
        if (typeof value == 'object') {
            value = JSON.stringify(value)
        }
        window.sessionStorage.setItem(Key, value)
    }

    getSessionStorageInfo(Key) {
        return window.sessionStorage.getItem(Key)
    }

    needLogin() {
        return !!window.localStorage.getItem('password') && window.sessionStorage.getItem('isLocked') != 'false'
    }

    getCurrPath() {
        return browserHistory.getCurrentLocation().pathname.replace(/^\//, '')
    }
}
export default new Util()