import React from 'react'
import HeaderLogo from '../assets/logo_transparent_croped.png'

const Logo = (props) => {
    
    const styles = {
        float:'left'
    }

    return(
        <div style={styles}>
            <img src={HeaderLogo} alt='RHU Labs' width="200"/>
        </div>
    )

}

export default Logo
