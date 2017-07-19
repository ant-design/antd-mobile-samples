import React from 'react'
import ReactDOM from 'react-dom'
import { WingBlank, WhiteSpace, Button } from 'antd-mobile-web'
import Badge from 'antd-mobile-web/lib/badge'

const repo = 'https://github.com/cncolder/antd-mobile-web'

const App = () => (
    <WingBlank>
        <WhiteSpace size='lg' />
        <Button
            type='primary'
            onClick={() => location.href = repo}>
            Ant design mobile web entry
            <Badge text='new' />
        </Button>
    </WingBlank>
)

ReactDOM.render(<App /> , document.getElementById('example'))
