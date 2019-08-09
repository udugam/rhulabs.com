import React from 'react'
import Logo from './Logo'
import HeaderLink from './HeaderLink'

const Header = (props) => {

    const styles = {
        // display: 'flex',
        // flexDirection: 'column',
    }

    return(
        <div style={styles}>
            <Logo/>
            <HeaderLink linkTitle="Projects" textColor='#293247'/>
            <HeaderLink linkTitle="Articles" textColor='#293247'/>
            <HeaderLink linkTitle="Resume" textColor='#293247'/>
        </div>
    )
}

export default Header
