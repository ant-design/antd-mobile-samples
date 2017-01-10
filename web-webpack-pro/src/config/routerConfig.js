import indexComponent from '../containers/index/index.component'
import Util from '../helpers/util'

const routeConfig = [{
    path: '/',
    component: indexComponent,
    onEnter: function(nextState, replaceState) {
        console.log('onEnter', nextState)
        let pathName = nextState.location.pathname.replace(/^\//,'')
        if (Util.needLogin() && pathName.indexOf('login') == -1) {
            replaceState(`login/unlock/${pathName}`)
        } else if (pathName == '') {
            replaceState(`player`)
        }
    },
    childRoutes: [{
            path: 'login/:type(/:url)',
            getComponents(location, callback) {
                require.ensure([], function(require) {
                    callback(null, require('../containers/login/login.component').default)
                })
            }
        },
        {
            path: 'player',
            getComponents(location, callback) {
                require.ensure([], function(require) {
                    callback(null, require('../containers/player/player.component').default)
                })
            }
        },
        {
            path: 'schedule',
            getComponents(location, callback) {
                require.ensure([], function(require) {
                    callback(null, require('../containers/schedule/schedule.component').default)
                })
            }
        },
        {
            path: 'attendance',
            getComponents(location, callback) {
                require.ensure([], function(require) {
                    callback(null, require('../containers/attendance/attendance.component').default)
                })
            }
        },
        {
            path: 'codeBook',
            getComponents(location, callback) {
                require.ensure([], function(require) {
                    callback(null, require('../containers/codeBook/codeBook.component').default)
                })
            }
        },
        {
            path: 'my',
            getComponents(location, callback) {
                require.ensure([], function(require) {
                    callback(null, require('../containers/my/my.component').default)
                })
            }
        },
        {
            path: '*',
            onEnter: function(nextState, replaceState) {
                replaceState(`player`)
            }
        }
    ]
}]

export default routeConfig