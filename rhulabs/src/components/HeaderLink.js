import React from 'react'

const HeaderLink = (props) => {

    const styles = {
        color: `${props.textColor}`,
        display: 'inline-block',
        fontSize: '20px',
        paddingRight: '20px'
    }

    return(
        <div style={styles}>
            {props.linkTitle}
        </div>
    )
}

export default HeaderLink
