import React, {Component} from 'react'

class Screen extends Component {
    render() {
        return(
            <div style={styles}>
                <h1>Hi, My Name is Ryan</h1>
                <h3>I'm a FullStack Javascript Developer</h3>
            </div>
        )
    }
}

const styles = {
    minHeight: '100vh',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column'
}

export default Screen