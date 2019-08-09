import React from 'react'

const HeaderLink = (props) => {

    const styles = {
        color: `${props.textColor}`,
        float: 'right'
    }

    return(
        <div style={styles}>
            {props.linkTitle}
        </div>
    )
}

export default HeaderLink
