import { observable, computed } from 'mobx'

class LoginState {
    @observable title = '绘制解锁图案'
    @observable needLogin = true
}

export default new LoginState()