import React from 'react'
import moment from 'moment'

const Intro = (props) => {
    const styles = {
        container: {
            paddingTop: '151px',
            display: 'flex',
            alignContent: 'center',
            flexDirection: 'column',
        },
        textBox: {
            width: '66vw',
            alignSelf: 'center',
            lineHeight: '1.75'
        }
    
    }

    return(
        <div style={styles.container}>
            <div style={styles.textBox}>
                <h1>Hi, I'm Ryan. Thanks for visiting</h1>
                <h3>My story as a developer started {moment("2003-9-1").toNow(true)} years 
                ago with a simple "Hello Word" output on a linux command line. These days I'm 
                fully immersed in technology and am passionate about new applications of it.
                At a given time you may find me building IOT devices from my home, building Alexa Skills, or coding an enterprise application.
                I'm dedicated to understanding how it all comes together. </h3>
            </div>       
        </div>
    )
}

export default Intro