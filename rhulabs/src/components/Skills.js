import React from 'react'

const Skills = (props) => {
    const styles = {
        container: {
            display: 'flex',
        },
        listBox: {
            width: '66vw',
            alignSelf: 'center'
        }
    
    }

    return(
        <div style={styles.container}>
            <div style={styles.listBox}>
                <h1>Full-stack Developer</h1>
                <ul>
                    <li>Node.js</li>
                    <li>Javascript</li>
                </ul>
            </div>       
            <div style={styles.listBox}>
                <h1>Mentor</h1>
                <ul>
                    <li>Node.js</li>
                    <li>Javascript</li>
                </ul>
            </div>       
        </div>
    )
}

export default Skills