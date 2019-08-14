import React from 'react'
import moment from 'moment'

const Intro = (props) => {
    const styles = {}

    return(
        <div style={styles}>
            <h1>Hi, I'm Ryan. Thanks for visiting</h1>
            <h3>My story as a developer started {moment("2003-9-1").toNow(true)} years 
            ago with a simple "Hello Word" output on a linux command line. These days I'm 
            fully immersed in technology and am passionate about new applications of it.
            Weather I'm building an IOT device with an Arduino or coding an enterprise application,
            I'm dedicated to understanding how it all comes together. </h3>
        </div>
    )
}

export default Intro