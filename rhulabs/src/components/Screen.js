import React from 'react'


//This component is a responsive component that scales to the current viewport size

const Screen = (props) => {

    const styles = {
        minHeight: '100vh',
        backgroundColor: `${props.color}`,
        display: 'flex',
        flexDirection: 'column'
    }

    return(
        <div style={styles}>
            {props.children}
        </div>
    )
}

export default Screen