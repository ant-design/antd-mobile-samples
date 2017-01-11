import { observable, asReference } from 'mobx'

class IndexState {
    tabBarConfig = observable({
        container: {
            unselectedTintColor: "#949494",
            tintColor: "#33A3F4",
            selectedTab: 'attendance',
            hidden: false
        },
        children: [{
                title: '多媒体',
                key: 'player',
                icon: require('./images/player-filter.png'),
                onClick: asReference(() => {
                    this.tabBarConfig.container.selectedTab = 'player'
                    window.appHistory.push(this.tabBarConfig.container.selectedTab)
                })
            },
            {
                title: '日程',
                key: 'schedule',
                icon: require('./images/schedule-filter.png'),
                onClick: asReference(() => {
                    this.tabBarConfig.container.selectedTab = 'schedule'
                    window.appHistory.push(this.tabBarConfig.container.selectedTab)
                })
            },
            {
                title: '考勤',
                key: 'attendance',
                icon: require('./images/attendance-filter.png'),
                onClick: asReference(() => {
                    this.tabBarConfig.container.selectedTab = 'attendance'
                    window.appHistory.push(this.tabBarConfig.container.selectedTab)
                })
            },
            {
                title: '密码本',
                key: 'codeBook',
                icon: require('./images/password-filter.png'),
                onClick: asReference(() => {
                    this.tabBarConfig.container.selectedTab = 'codeBook'
                    window.appHistory.push(this.tabBarConfig.container.selectedTab)
                })
            },
            {
                title: '我的',
                key: 'my',
                icon: require('./images/account-filter.png'),
                onClick: asReference(() => {
                    this.tabBarConfig.container.selectedTab = 'my'
                    window.appHistory.push(this.tabBarConfig.container.selectedTab)
                })
            }
        ]
    })
}

export default new IndexState()