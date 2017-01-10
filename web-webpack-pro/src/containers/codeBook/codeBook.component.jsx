import React from 'react'
import { observer } from 'mobx-react'

@observer
class CodeBook extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <div className='codeBook'>
                <div>CodeBook</div>
            </div>
        )
    }
}

export default CodeBook