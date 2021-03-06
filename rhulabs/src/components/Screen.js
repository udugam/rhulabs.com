import React from 'react'


//This component is a responsive component that scales to the current viewport size

const Screen = (props) => {

    const styles = {
        minHeight: '100vh',
        backgroundColor: `${props.backgroundColor}`,
        color: `${props.textColor}`,
        paddingLeft: '5vw',
        paddingRight: '5vw'
    }

    return(
        <div style={styles}>
            {props.children}
        </div>
    )
}

export default Screen