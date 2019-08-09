import React from 'react'
import Logo from './Logo'
import HeaderLink from './HeaderLink'

const Header = (props) => {

    const styles = {
        paddingTop: '35px'
    }

    return(
        <div style={styles}>
            <Logo/>
            <HeaderLink linkTitle="Contact" textColor='#293247'/>
            <HeaderLink linkTitle="Resume" textColor='#293247'/>
            <HeaderLink linkTitle="Projects" textColor='#293247'/>
        </div>
    )
}

export default Header
