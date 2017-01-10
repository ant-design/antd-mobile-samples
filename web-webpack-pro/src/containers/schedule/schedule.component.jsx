import React from 'react'
import { observer } from 'mobx-react'

@observer
class Schedule extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div className='schedule'>
                <div>Schedule</div>
            </div>
        )
    }
}

export default Schedule