import React from 'react'

const Skills = (props) => {
    const styles = {
        container: {
            display: 'flex',
        },
        listBox: {
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
            <div style={styles.listBox}>
                <img alt='Front End Icon' src='https://via.placeholder.com/50'/>
                <h1>Frontend Developer</h1>
                <div style={styles.summary}>I value simple content structure, clean design patterns, and thoughtful interactions.</div>
                <div>React</div>
                <div>HTML</div>
                <div>CSS</div>
                <div>jQuery</div>
                <div>Javascript</div>
            </div> 
            <div style={styles.listBox}>
                <img alt='Back End Icon' src='https://via.placeholder.com/50'/>
                <h1>Backend Developer</h1>
                <div style={styles.summary}>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</div>
                <div>Node</div>
                <div>MongoDB</div>
                <div>mySQL</div>
                <div>Serverless Lambda Functions</div>
            </div>        
            <div style={styles.listBox}>
                <img alt='Back End Icon' src='https://via.placeholder.com/50'/>
                <h1>Mentor</h1>
                <div style={styles.summary}>I genuinely care about people, and love helping fellow designers work on their craft.</div>
                <div>Node.js</div>
                <div>Node.js</div>
            </div>       
        </div>
    )
}

export default Skills