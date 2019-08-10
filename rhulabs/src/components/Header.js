import React from 'react'
import Logo from './Logo'
import HeaderLink from './HeaderLink'

const Header = (props) => {

    const styles = {
        container: {
            paddingTop: '35px',
            display: 'flex',
            justifyContent: 'space-between'
        }
    }

    return(
        <div style={styles.container}>    
            <Logo/>
            <div >
                <HeaderLink linkTitle="Contact" textColor='#293247'/>
                <HeaderLink linkTitle="Resume" textColor='#293247'/>
                <HeaderLink linkTitle="Projects" textColor='#293247'/>
            </div>
        </div>
    )
}

export default Header
