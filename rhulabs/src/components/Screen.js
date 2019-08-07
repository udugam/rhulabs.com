import React from 'react'


//This component is a responsive component that scales to the current viewport size

const Screen = (props) => {

    const styles = {
        minHeight: '100vh',
        backgroundColor: `${props.backgroundColor}`,
        display: 'flex',
        flexDirection: 'column',
        color: `${props.textColor}`
    }

    return(
        <div style={styles}>
            {props.children}
        </div>
    )
}

export default Screen