import React from 'react'
import { observer } from 'mobx-react'

import 'H5lock'
// import 'hidpi-canvas-polyfill'

// import appState from '../../app.state'
import Util from '../../helpers/util'
import Api from '../../config/api'
// import indexState from '../index/index.state'
import loginState from './login.state'

import './login.scss'


@observer
class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        // indexState.tabBarConfig.container.hidden = true
        let canvasWidth = document.getElementById('H5lock').offsetWidth
        loginState.unlock = !!Util.getLocalStorageInfo('password')
        loginState.title = loginState.unlock ? '请解锁' : '绘制解锁图案'

        let lock = new H5lock({
            chooseType: 3,
            container: 'H5lock',
            width: canvasWidth,
            height: canvasWidth,
            inputEnd: async (psw) => {
                if (lock.pswObj.step == 1) {
                    if (lock.pswObj.fpassword == psw) {
                        lock.pswObj.step = 2
                        lock.pswObj.spassword = psw
                        lock.drawStatusPoint('#2CFF26')
                        const Response = await Api.encrypt({ str: lock.pswObj.spassword })
                        if (Response.ok && Response.responseData.statusCode == 1) {
                            Util.setLocalStorageInfo('password', Response.responseData.data)
                            Util.setLocalStorageInfo('chooseType', lock.chooseType)
                            loginState.title = '密码保存成功'
                            Util.setSessionStorageInfo('isLocked', false)
                            window.appHistory.replace('' + this.props.params.url)
                        }
                        else {
                            alert('网络异常,请重试!')
                        }
                    } else {
                        lock.drawStatusPoint('red')
                        delete lock.pswObj.step
                        loginState.title = '两次不一致，重新输入'
                    }
                } else if (lock.pswObj.step == 2) {
                    const Response = await Api.encrypt({ str: psw })
                    if (Response.ok && Response.responseData.statusCode == 1) {
                        let newPsw = Response.responseData.data
                        if (lock.pswObj.spassword == newPsw) {
                            lock.drawStatusPoint('#2CFF26')
                            if (this.props.params.type == 'unlock') {
                                loginState.title = '解锁成功'
                                //解锁
                                Util.setSessionStorageInfo('isLocked', false)
                                window.appHistory.replace('' + this.props.params.url)
                                // location.href = this.props.params.url
                            }
                            else if (this.props.params.type == 'reset') {
                                loginState.title = '请绘制新的解锁图案'
                                //重置
                                lock.updatePassword()
                            }
                        } else {
                            lock.drawStatusPoint('red')
                            loginState.title = '解锁失败,请重试'
                        }
                    }
                    else {
                        alert('网络异常,请重试!!')
                    }
                } else {
                    lock.pswObj.step = 1;
                    lock.pswObj.fpassword = psw;
                    loginState.title = '再次输入'
                }
            }
        });
        lock.init();
    }

    render() {
        return (
            <div className='login'>
                <h4 className='title'>{loginState.title}</h4>
                <div id="H5lock"></div>
            </div>
        )
    }
}

export default Login