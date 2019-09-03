import React from 'react'

const Projects = (props) => {
    const styles = {
        container: {
            display: 'flex',
        },
        projectBox: {
            width: '66vw',
            alignSelf: 'center',
            paddingTop: '50px'
        },
        summary: {
            paddingTop: '10px',
            paddingBottom: '10px'
        }
    
    }

    return(
        <div style={styles.container}>
            <div style={styles.projectBox}>
                <h1>PK Portal</h1>
                <div style={styles.summary}>A full stack SERN (SQL-Express-React-Node) application built to better manage the flow of information between employees of Pure Kitchens Inc.</div>
            </div> 
            <div style={styles.projectBox}>
                <h1>Que</h1>
                <div style={styles.summary}>An application that automates song recognition and duration for a given piece of </div>
                <div>Node</div>
                <div>MongoDB</div>
                <div>mySQL</div>
                <div>Serverless Lambda Functions</div>
            </div>        
            <div style={styles.projectBox}>
                <h1>Mentor</h1>
                <div style={styles.summary}>I genuinely care about people, and love helping fellow designers work on their craft.</div>
                <div>Node.js</div>
                <div>Node.js</div>
            </div>       
        </div>
    )
}

export default Projects