import 'whatwg-fetch'

import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory, useRouterHistory } from 'react-router'
import { createHistory, useBasename } from 'history'

import routeConfig from './config/routerConfig'
import appState from './app.state'
import './app.scss'

init()

async function init() {
    await appState.initConfig()
    const appHistory = useRouterHistory(createHistory)({
        basename: process.env.NODE_ENV == 'development' ? '/' : '/xgj-client'
    })
    window.appHistory = appHistory
    window.appState = appState
    console.log(appState)
    render((
        <Router history={appHistory} routes={routeConfig}>
        </Router>
    ), document.getElementById('content'))
}