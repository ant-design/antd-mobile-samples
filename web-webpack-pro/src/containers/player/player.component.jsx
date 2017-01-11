import React from 'react'
import { observer } from 'mobx-react'

@observer
class Player extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div className='player'>
                <div>Player</div>
            </div>
        )
    }
}

export default Player