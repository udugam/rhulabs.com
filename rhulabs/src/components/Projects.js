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
                <h1>Chunes</h1>
                <div style={styles.summary}>A serverless React application built to accompany an iOS social music discovery platform</div>
            </div>  
            <div style={styles.projectBox}>
                <h1>Que</h1>
                <div style={styles.summary}>A full stack SERN (SQL-Express-React-Node) application that automates song recognition for Performance Rights Oganizations.</div>
            </div>        
            <div style={styles.projectBox}>
                <h1>Raptors Trivia</h1>
                <div style={styles.summary}>An Alexa skill that asks a user 5 trivia style questions from an expanding list of questions</div>
            </div>    
            <div style={styles.projectBox}>
                <h1>Garage Opener</h1>
                <div style={styles.summary}>A React Native application that allows me to open my garage door.</div>
            </div>    
        </div>
    )
}

export default Projects